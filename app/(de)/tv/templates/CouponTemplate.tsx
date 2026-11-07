'use client';

import type { TVSlide } from '../content';
import { GlassPanel, TwoColumnSlideShell } from './shared';

export function CouponTemplate({ slide }: { slide: TVSlide }) {
  return (
    <TwoColumnSlideShell slide={slide}>
      <div className="mt-8 max-w-[1320px]">
        <div className="rounded-[8px] border-2 border-dashed border-[#0D322B]/45 bg-[#FFFDF8] px-10 py-7 text-center">
          <p className="font-mono text-[112px] font-bold leading-none tracking-[0.08em] text-[#0D322B]">{slide.couponCode}</p>
        </div>
        <ol className="mt-6 grid grid-cols-3 gap-4">
          {slide.steps?.map((step, index) => (
            <li key={step}>
              <GlassPanel className="flex h-full min-h-[132px] items-center gap-5 p-6">
                <span
                  aria-hidden="true"
                  className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-[#0D322B] text-[32px] font-bold text-[#FFF8EF]"
                >
                  {index + 1}
                </span>
                <span className="text-[32px] font-semibold leading-[1.12] text-[#123932]">{step}</span>
              </GlassPanel>
            </li>
          ))}
        </ol>
        {slide.note && <p className="mt-6 text-[28px] font-medium leading-[1.2] text-[#45665E]">{slide.note}</p>}
        {slide.disclosure && <p className="mt-3 text-[28px] font-medium leading-[1.2] text-[#45665E]">{slide.disclosure}</p>}
      </div>
    </TwoColumnSlideShell>
  );
}
