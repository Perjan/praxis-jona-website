'use client';

import type { TVSlide } from '../content';
import { GlassPanel, TwoColumnSlideShell } from './shared';

export function NewsTemplate({ slide }: { slide: TVSlide }) {
  return (
    <TwoColumnSlideShell slide={slide} compactHeadline>
      <div className="mt-8 grid max-w-[1320px] grid-cols-2 gap-4">
        {slide.newsItems?.map((item) => {
          const separator = item.indexOf(':');
          const label = separator > 0 ? item.slice(0, separator) : undefined;
          const value = label ? item.slice(separator + 1).trim() : item;
          return (
            <GlassPanel key={item} className="flex min-h-[145px] items-center p-6">
              <div>
                {label && <p className="text-[26px] font-bold uppercase tracking-[0.08em] text-[#144D42]">{label}</p>}
                <p className={`text-[#0D322B] ${label ? 'mt-2 text-[34px] font-semibold leading-tight' : 'text-[29px] font-medium leading-[1.2]'}`}>
                  {value}
                </p>
              </div>
            </GlassPanel>
          );
        })}
      </div>
    </TwoColumnSlideShell>
  );
}
