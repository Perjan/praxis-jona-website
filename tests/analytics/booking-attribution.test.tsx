import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import AppointmentBookingButton from "../../app/components/AppointmentBookingButton";
import BookingAttribution, {
  BOOKING_CTA_EVENT,
} from "../../app/components/BookingAttribution";
import BookingCtaLink from "../../app/components/BookingCtaLink";

declare global {
  interface Window {
    umami?: { track: (name: string, data?: Record<string, string>) => void };
  }
}

describe("booking CTA attribution", () => {
  const track = vi.fn();

  beforeEach(() => {
    window.umami = { track };
    document.documentElement.lang = "en";
  });

  afterEach(() => {
    track.mockReset();
    delete window.umami;
  });

  it("tracks any Doctolib appointment link on its first click", () => {
    render(
      <>
        <BookingAttribution />
        <BookingCtaLink
          href="https://www.doctolib.de/internist/berlin/gjolli-jonida/booking"
          placement="home-hero"
          onClick={(event) => event.preventDefault()}
        >
          <span>Book appointment</span>
        </BookingCtaLink>
      </>,
    );

    fireEvent.click(screen.getByText("Book appointment"));

    expect(track).toHaveBeenCalledTimes(1);
    expect(track).toHaveBeenCalledWith(BOOKING_CTA_EVENT, {
      destination: "doctolib",
      element: "a",
      locale: "en",
      placement: "home-hero",
    });
  });

  it("tracks an appointment modal button before insurance selection", () => {
    render(
      <>
        <BookingAttribution />
        <AppointmentBookingButton
          locale="de"
          trackingPlacement="service-hero"
          className="button"
        >
          Termin buchen
        </AppointmentBookingButton>
      </>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Termin buchen" }));

    expect(track).toHaveBeenCalledTimes(1);
    expect(track).toHaveBeenCalledWith(BOOKING_CTA_EVENT, {
      destination: "insurance-dialog",
      element: "button",
      locale: "en",
      placement: "service-hero",
    });
  });

  it("keeps legacy raw Doctolib links covered by the global safety net", () => {
    render(
      <>
        <BookingAttribution />
        <a
          href="https://www.doctolib.de/internist/berlin/gjolli-jonida/booking"
          onClick={(event) => event.preventDefault()}
        >
          Legacy appointment link
        </a>
      </>,
    );

    fireEvent.click(screen.getByText("Legacy appointment link"));

    expect(track).toHaveBeenCalledWith(BOOKING_CTA_EVENT, {
      destination: "doctolib",
      element: "a",
      locale: "en",
      placement: "unspecified",
    });
  });

  it("does not track unrelated links or buttons", () => {
    render(
      <>
        <BookingAttribution />
        <a href="/team">Meet the team</a>
        <button type="button">Close</button>
      </>,
    );

    fireEvent.click(screen.getByText("Meet the team"));
    fireEvent.click(screen.getByRole("button", { name: "Close" }));

    expect(track).not.toHaveBeenCalled();
  });
});
