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

afterEach(() => vi.useRealTimers());

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
});
