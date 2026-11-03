import { createElement } from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { Post } from 'content-collections';
import PaginatedPostsSection from 'app/PaginatedPostsSection';

vi.mock('next/navigation', () => ({ useSearchParams: () => new URLSearchParams() }));
vi.mock('next/image', () => ({ default: ({ unoptimized, priority, ...props }) => createElement('img', props) }));

function post(id: string, language?: string): Post {
  return { _id: id, slug: id, url: `/blog/${id}`, title: id, date: '2026-10-25T00:00:00.000Z', language, categories: ['health'], summaryOrExcerpt: 'Article summary', coverImageUrl: '/images/blog-images/default-image.jpg' } as Post;
}
const posts = [post('German article', 'de'), post('English article', 'en'), post('Legacy German article'), post('Italian article', 'it')];

beforeEach(() => localStorage.clear());
describe('blog listing language', () => {
  it('shows only German and legacy German articles on the German site', () => {
    render(<PaginatedPostsSection posts={posts} locale="de" />);
    expect(screen.getByRole('heading', { name: 'German article' })).toBeVisible();
    expect(screen.getByRole('heading', { name: 'Legacy German article' })).toBeVisible();
    expect(screen.queryByRole('heading', { name: 'English article' })).toBeNull();
    expect(screen.queryByRole('heading', { name: 'Italian article' })).toBeNull();
  });
  it('shows only English articles on the English site', () => {
    render(<PaginatedPostsSection posts={posts} locale="en" />);
    expect(screen.getByRole('heading', { name: 'English article' })).toBeVisible();
    expect(screen.getAllByRole('article')).toHaveLength(1);
  });
  it.each(['de', 'en'] as const)('removes language labels and chips but keeps category labels (%s)', locale => {
    render(<PaginatedPostsSection posts={[post('An article', locale)]} locale={locale} />);
    const card = within(screen.getByRole('article'));
    expect(card.queryByText(/^(DE|EN|de|en)$/)).toBeNull();
    expect(card.queryByRole('button', { name: /^Category: (DE|EN)$/ })).toBeNull();
    expect(card.getByRole('button', { name: 'Category: Health' })).toBeVisible();
  });
  it('filters before pagination and keeps other languages out after loading more', () => {
    const mixed = Array.from({ length: 12 }, (_, i) => [post(`English ${i}`, 'en'), post(`German ${i}`, 'de')]).flat();
    render(<PaginatedPostsSection posts={mixed} locale="en" />);
    expect(screen.getAllByRole('article')).toHaveLength(9);
    expect(screen.queryByRole('heading', { name: /^German / })).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: 'Load more' }));
    expect(screen.getAllByRole('article')).toHaveLength(12);
    expect(screen.queryByRole('heading', { name: /^German / })).toBeNull();
  });
});
