import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { getTVSlideById, getTVSlideByIdEn } from 'app/(de)/tv/content';
import { CouponTemplate } from 'app/(de)/tv/templates/CouponTemplate';

describe('Sunday Natural TV slide', () => {
  it.each([
    ['de', getTVSlideById, '10 % Rabatt bei Sunday Natural', 'https://www.sunday.de/', 'QR-Code scannen'],
    ['en', getTVSlideByIdEn, '10% off at Sunday Natural', 'https://www.sunday.de/en/', 'Scan the QR code'],
  ] as const)('shows the approved %s copy and the patient code', (_locale, getSlide, title, qrUrl, firstStep) => {
    const slide = getSlide('sunday-natural')!;

    expect(slide.kind).toBe('coupon');
    expect(slide.title).toBe(title);
    expect(slide.subtitle).toMatch(/jeder Bestellung|every order/);
    expect(slide.couponCode).toBe('TAN47861');
    expect(slide.qrUrl).toBe(qrUrl);
    expect(slide.steps).toHaveLength(3);
    expect(slide.steps?.[0]).toBe(firstStep);
    expect(slide.note).toBeTruthy();
    expect(slide.disclosure).toMatch(/^(Werbung|Advertising): .*(Provision|commission)/);
  });

  it('renders the code, every step and the note', () => {
    const slide = getTVSlideById('sunday-natural')!;
    render(<CouponTemplate slide={slide} />);

    expect(screen.getByRole('heading', { name: slide.title })).toBeVisible();
    expect(screen.getByText('TAN47861')).toBeVisible();
    for (const step of slide.steps!) {
      expect(screen.getByText(step)).toBeVisible();
    }
    expect(screen.getByText(slide.note!)).toBeVisible();
    expect(screen.getByText(slide.disclosure!)).toBeVisible();
    expect(screen.getByRole('img', { name: `QR Code: ${slide.qrLabel}` })).toBeVisible();
  });
});
