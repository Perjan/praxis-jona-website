import { describe, expect, it } from 'vitest';
import { Constants, NewsMessages } from 'app/Constants';
import { TV_NEW_SLIDES, TV_NEW_SLIDES_EN } from 'app/(de)/tv/content';
import { formatPrice, pricingSections, type PricingRow } from 'app/components/pricing/pricingData';

describe('TV clinic updates', () => {
  it('shows both team announcements from the localized news source', () => {
    for (const [locale, slides, names] of [
      ['de', TV_NEW_SLIDES, ['Constanze Buhrmann', 'Frau Dr. Daria Shabas']],
      ['en', TV_NEW_SLIDES_EN, ['Constanze Buhrmann', 'Dr Daria Shabas']],
    ] as const) {
      const message = NewsMessages[locale][0].message;
      const slide = slides.find(({ id }) => id === 'clinic-team-update')!;
      expect(slide.kind).toBe('news');
      expect(slide.newsItems).toHaveLength(2);
      for (const name of names) {
        const sourceLine = message.split('\n').find((line) => line.includes(name))!;
        expect(slide.newsItems).toContain(sourceLine.replace(/<[^>]+>/g, '').trim());
      }
    }
  });

  it('renders opening hours from Constants in both locales', () => {
    for (const [locale, slides] of [['de', TV_NEW_SLIDES], ['en', TV_NEW_SLIDES_EN]] as const) {
      const expected = Constants.upcomingOpeningHours.map((item) =>
        `${locale === 'de' ? item.day : item.dayEn}: ${item.periods.map(({ opens, closes }) => `${opens}–${closes}`).join(locale === 'de' ? ' und ' : ' and ')}`
      );
      expect(slides.find(({ id }) => id === 'clinic-opening-hours')?.newsItems).toEqual(expected);
    }
  });

  it('covers the in-practice, digital, nutrition and Profhilo price rows', () => {
    const deRows = Object.values(pricingSections).flatMap<PricingRow>((section) => section.rows);
    const ids = new Set(TV_NEW_SLIDES.map(({ id }) => id));
    for (const id of ['glp1', 'glp1-digital', 'nutrition', 'profhilo-prices']) {
      expect(ids.has(id), id).toBe(true);
    }

    for (const [locale, slides] of [['de', TV_NEW_SLIDES], ['en', TV_NEW_SLIDES_EN]] as const) {
      for (const slide of slides.filter(({ id }) => ['glp1', 'glp1-digital', 'nutrition', 'profhilo-prices'].includes(id))) {
        for (const card of slide.prices ?? []) {
          const row = deRows.find(({ label }) => label[locale] === card.label);
          expect(row, `${locale} ${slide.id}: ${card.label}`).toBeDefined();
          if (row?.packageOffer) {
            expect(card.packageOffer).toEqual({
              label: row.packageOffer.label[locale],
              price: formatPrice(row.packageOffer.price, locale),
            });
          } else {
            expect(card.packageOffer).toBeUndefined();
          }
        }
      }
    }
  });
});
