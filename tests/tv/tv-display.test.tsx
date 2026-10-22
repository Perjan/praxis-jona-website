import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import QRCode from 'qrcode';
import { QRCodeCard } from '../../app/(de)/tv/templates/QRCodeCard';
import TVNewPageClient from '../../app/(de)/tv/TVNewPageClient';
import type { TVSlide } from '../../app/(de)/tv/content';

vi.mock('next/navigation', () => ({ useSearchParams: () => new URLSearchParams() }));
vi.mock('../../app/(de)/tv/templates', () => {
  const Template = ({ slide }: { slide: TVSlide }) => <section>{slide.title}</section>;
  return {
    OverviewNavigationTemplate: Template,
    ServiceExplainerTemplate: Template,
    ServiceTreatmentTemplate: Template,
    TrustSocialProofTemplate: Template,
  };
});

const slides: TVSlide[] = Array.from({ length: 4 }, (_, index) => ({
  id: `slide-${index}`, kind: 'hero', title: `Title ${index}`, image: '/test.svg',
  qrUrl: 'https://praxis-jona.de', qrLabel: 'Website',
}));

afterEach(() => {
  vi.useRealTimers();
});

describe('TV display', () => {
  it('renders the real QR immediately with black modules and a four-module quiet zone', () => {
    const url = 'https://praxis-jona.de';
    render(<QRCodeCard url={url} label="Website" />);
    const qr = screen.getByRole('img', { name: 'QR Code: Website' });
    const moduleCount = QRCode.create(url, { errorCorrectionLevel: 'M' }).modules.size;
    expect(qr.tagName.toLowerCase()).toBe('svg');
    expect(qr).toHaveAttribute('viewBox', `0 0 ${moduleCount + 8} ${moduleCount + 8}`);
    expect(qr.querySelector('rect')).toHaveAttribute('fill', '#FFFFFF');
    expect(qr.querySelector('path')).toHaveAttribute('fill', '#000000');
  });

  it('mounts only the active and outgoing slides, then releases the outgoing slide', () => {
    vi.useFakeTimers();
    const { container } = render(<TVNewPageClient slides={slides} />);
    expect(container.querySelectorAll('section')).toHaveLength(1);
    fireEvent.click(screen.getByRole('button', { name: 'Slide 2: Title 1' }));
    expect(container.querySelectorAll('section')).toHaveLength(2);
    act(() => vi.advanceTimersByTime(900));
    expect(container.querySelectorAll('section')).toHaveLength(1);
    expect(screen.getByText('Title 1')).toBeVisible();
    act(() => vi.advanceTimersByTime(29100));
    expect(screen.getByText('Title 2')).toBeVisible();
    act(() => vi.advanceTimersByTime(900));
    expect(container.querySelectorAll('section')).toHaveLength(1);
  });

  it('keeps a route-forced slide visible with a full progress bar', () => {
    vi.useFakeTimers();
    const { container } = render(<TVNewPageClient slides={slides} forcedSlideId="slide-2" />);
    const progressBar = () => container.querySelector<HTMLElement>('[style*="width"]');
    expect(container.querySelectorAll('section')).toHaveLength(1);
    expect(screen.getByText('Title 2')).toBeVisible();
    expect(progressBar()).toHaveStyle({ width: '100%' });

    fireEvent.click(screen.getByRole('button', { name: 'Slide 1: Title 0' }));
    expect(container.querySelectorAll('section')).toHaveLength(1);
    expect(screen.getByText('Title 2')).toBeVisible();
    expect(progressBar()).toHaveStyle({ width: '100%' });

    act(() => vi.advanceTimersByTime(60000));
    expect(container.querySelectorAll('section')).toHaveLength(1);
    expect(screen.getByText('Title 2')).toBeVisible();
    expect(progressBar()).toHaveStyle({ width: '100%' });
  });

  it('restarts the progress bar when the slide changes', () => {
    vi.useFakeTimers();
    const { container } = render(<TVNewPageClient slides={slides} />);
    const progressBar = () => container.querySelector<HTMLElement>('[style*="width"]');
    expect(progressBar()).toHaveStyle({ width: '0%' });

    act(() => vi.advanceTimersByTime(15000));
    expect(progressBar()).toHaveStyle({ width: '50%' });

    fireEvent.click(screen.getByRole('button', { name: 'Slide 3: Title 2' }));
    expect(progressBar()).toHaveStyle({ width: '0%' });

    act(() => vi.advanceTimersByTime(15000));
    expect(progressBar()).toHaveStyle({ width: '50%' });

    act(() => vi.advanceTimersByTime(15000));
    expect(screen.getByText('Title 3')).toBeVisible();
    expect(progressBar()).toHaveStyle({ width: '0%' });
  });
});
