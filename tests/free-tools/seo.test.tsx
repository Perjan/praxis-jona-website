import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ToolPage, toolsMetadata } from 'app/free-tools/ToolPages';
import { tools, toolPath } from 'app/free-tools/catalog';

vi.mock('next/link', () => ({ default: ({ children, ...props }) => <a {...props}>{children}</a> }));
vi.mock('app/free-tools/HealthCheck', () => ({ default: () => <div /> }));

describe('public tool search metadata', () => {
  for (const locale of ['de', 'en'] as const) for (const tool of tools) {
    it(`describes ${locale}/${tool[locale]} without health answers or review dates`, () => {
      const { container } = render(<ToolPage locale={locale} slug={tool[locale]} />);
      const schema = JSON.parse(container.querySelector('script[type="application/ld+json"]')!.textContent!);
      const metadata = toolsMetadata(locale, tool[locale]);
      expect(schema.url).toBe(`https://praxisjona.de${toolPath(tool.kind, locale)}`);
      expect(metadata.alternates?.canonical).toBe(toolPath(tool.kind, locale));
      expect(schema.name).toBe(container.querySelector('h1')!.textContent);
      expect(schema.inLanguage).toBe(locale);
      expect(schema.reviewedBy.url).toBe(`https://praxisjona.de${locale === 'en' ? '/en' : ''}/blog/authors/jonida-gjolli`);
      expect(schema.breadcrumb.itemListElement.map(item => item.position)).toEqual([1, 2]);
      expect(schema.breadcrumb.itemListElement[0].item).toBe(`https://praxisjona.de${locale === 'en' ? '/en' : ''}/free-tools`);
      expect(schema).not.toHaveProperty('lastReviewed');
      expect(schema).not.toHaveProperty('dateModified');
      expect(schema).not.toHaveProperty('aggregateRating');
      expect(schema).not.toHaveProperty('potentialAction');
    });
  }
});
