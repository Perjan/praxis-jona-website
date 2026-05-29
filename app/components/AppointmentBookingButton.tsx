"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { Constants } from "app/Constants";
import type { AppointmentBookingUrls } from "app/Constants";

export type AppointmentBookingCopy = {
  title: string;
  description: string;
  privateLabel: string;
  publicLabel: string;
  cancelLabel: string;
};

export type AppointmentBookingLocale = "de" | "en";

export const defaultAppointmentBookingUrls: AppointmentBookingUrls = Constants.appointmentUrls;

export function defaultAppointmentBookingCopy(locale: AppointmentBookingLocale): AppointmentBookingCopy {
  if (locale === "en") {
    return {
      title: "Select Insurance Type",
      description:
        "Please select your insurance type so we can open the matching Doctolib booking flow.",
      privateLabel: "Private Insurance",
      publicLabel: "Public Insurance",
      cancelLabel: "Cancel",
    };
  }

  return {
    title: "Versicherungsart auswählen",
    description:
      "Bitte wählen Sie Ihre Versicherungsart aus, damit wir den passenden Doctolib-Buchungsprozess öffnen können.",
    privateLabel: "Privatversichert",
    publicLabel: "Gesetzlich versichert",
    cancelLabel: "Abbrechen",
  };
}

export default function AppointmentBookingButton({
  children,
  className,
  locale,
  urls = defaultAppointmentBookingUrls,
  copy,
  ariaLabel,
}: {
  children: ReactNode;
  className: string;
  locale: AppointmentBookingLocale;
  urls?: AppointmentBookingUrls;
  copy?: AppointmentBookingCopy;
  ariaLabel?: string;
}) {
  const [showInsuranceDialog, setShowInsuranceDialog] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const dialogCopy = copy ?? defaultAppointmentBookingCopy(locale);

  const handleBookingClick = () => {
    setShowInsuranceDialog(true);
    setIsClosing(false);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowInsuranceDialog(false);
      setIsClosing(false);
    }, 200);
  };

  const handleInsuranceSelect = (isPrivate: boolean) => {
    const url = isPrivate ? urls.private : urls.public;
    handleClose();
    setTimeout(() => {
      window.open(url, "_blank", "noopener noreferrer");
    }, 100);
  };

  return (
    <>
      <button type="button" onClick={handleBookingClick} className={className} aria-label={ariaLabel}>
        {children}
      </button>

      {showInsuranceDialog && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black ${isClosing ? "animate-fadeOut bg-opacity-50" : "animate-fadeIn bg-opacity-50"}`}
          onClick={handleClose}
        >
          <div
            className={`mx-4 w-full max-w-md rounded-lg bg-white p-6 shadow-xl ${isClosing ? "animate-popOut" : "animate-popIn"}`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-2 flex items-start justify-between">
              <h3 className="text-xl font-medium text-primaryLighter">{dialogCopy.title}</h3>
              <button type="button" onClick={handleClose} className="text-gray-600 transition-colors hover:text-gray-700" aria-label={dialogCopy.cancelLabel}>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="mb-4 text-sm text-gray-600">{dialogCopy.description}</p>
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => handleInsuranceSelect(true)}
                className="w-full rounded bg-primaryLighter px-4 py-2 text-white transition-colors duration-200 hover:bg-tealColorDark"
              >
                {dialogCopy.privateLabel}
              </button>
              <button
                type="button"
                onClick={() => handleInsuranceSelect(false)}
                className="w-full rounded bg-primaryLighter px-4 py-2 text-white transition-colors duration-200 hover:bg-tealColorDark"
              >
                {dialogCopy.publicLabel}
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="w-full rounded border border-gray-300 px-4 py-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100"
              >
                {dialogCopy.cancelLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
