"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function CategoryVignetteBackground({ src }: { src: string }) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 520], [0.5, 0.05]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed right-0 top-28 z-0 hidden h-[calc(64vh-7rem)] w-[min(48vw,820px)] animate-kenburns-subtle bg-cover bg-left bg-no-repeat mix-blend-multiply lg:block"
      style={{
        opacity,
        backgroundImage: `
          linear-gradient(to bottom, #fff 0%, rgba(255,255,255,0.92) 10%, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.08) 68%, rgba(255,255,255,0.92) 90%, #fff 100%),
          linear-gradient(to right, #fff 0%, rgba(255,255,255,0.9) 12%, rgba(255,255,255,0.16) 36%, rgba(255,255,255,0.08) 72%, rgba(255,255,255,0.86) 100%),
          url(${src})
        `,
        WebkitMaskImage: "radial-gradient(ellipse at center, #000 32%, rgba(0,0,0,0.68) 54%, transparent 82%)",
        maskImage: "radial-gradient(ellipse at center, #000 32%, rgba(0,0,0,0.68) 54%, transparent 82%)",
      }}
    />
  );
}
