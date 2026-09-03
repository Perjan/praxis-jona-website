"use client";

import { useEffect } from "react";

export default function Glp1ChromeGuard() {
  useEffect(() => {
    const header = document.querySelector("body > header");
    const footer = document.querySelector("body > footer");
    const previousHeaderDisplay = (header as HTMLElement | null)?.style.display;
    const previousFooterDisplay = (footer as HTMLElement | null)?.style.display;

    if (header) (header as HTMLElement).style.display = "none";
    if (footer) (footer as HTMLElement).style.display = "none";

    return () => {
      if (header) (header as HTMLElement).style.display = previousHeaderDisplay ?? "";
      if (footer) (footer as HTMLElement).style.display = previousFooterDisplay ?? "";
    };
  }, []);

  return null;
}
