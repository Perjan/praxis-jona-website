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
        backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.72) 34%, rgba(255,255,255,0.2) 72%, rgba(255,255,255,0.06) 100%), url(${src})`,
        WebkitMaskImage: "radial-gradient(ellipse at center, #000 48%, rgba(0,0,0,0.74) 66%, transparent 92%)",
        maskImage: "radial-gradient(ellipse at center, #000 48%, rgba(0,0,0,0.74) 66%, transparent 92%)",
      }}
    />
  );
}
