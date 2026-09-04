"use client";

import { useEffect } from "react";

export const BOOKING_CTA_EVENT = "booking-cta-click";

type BookingEventData = {
  destination: string;
  element: string;
  locale: string;
  placement: string;
};

declare global {
  interface Window {
    umami?: {
      track: (name: string, data?: Record<string, string>) => void;
    };
  }
}

function bookingTargetFromClick(target: EventTarget | null) {
  if (!(target instanceof Element)) return null;
  return target.closest<HTMLElement>(
    '[data-booking-cta], a[href*="doctolib.de"]',
  );
}

function eventData(element: HTMLElement): BookingEventData {
  const href = element instanceof HTMLAnchorElement ? element.href : "";
  return {
    destination:
      element.dataset.bookingCta ||
      (href.includes("doctolib.de") ? "doctolib" : "appointment"),
    element: element.tagName.toLowerCase(),
    locale: document.documentElement.lang || "unknown",
    placement: element.dataset.bookingPlacement || "unspecified",
  };
}

export default function BookingAttribution() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const element = bookingTargetFromClick(event.target);
      if (!element) return;

      window.umami?.track(BOOKING_CTA_EVENT, eventData(element));
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
