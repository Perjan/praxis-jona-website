"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDownIcon, CheckIcon, ChevronLeftIcon } from "lucide-react";
import { Controller, FieldPath, Resolver, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Logo from "/public/images/praxis-jona-web-logo.png";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import SignaturePadField, { SignaturePadHandle } from "../SignaturePad";
import {
  EisenaufklaerungPayload,
  createDefaultEisenaufklaerungValues,
  createEisenaufklaerungSchema,
  eisenaufklaerungConsentText,
  eisenaufklaerungInformationSections,
  eisenaufklaerungMonitoringWaiverText,
} from "./form-definition";

const getError = (errors: any, path: string) =>
  path.split(".").reduce((current, key) => current?.[key], errors)?.message as string | undefined;

function RequiredMark() {
  return <span className="text-destructive">*</span>;
}

export default function EiseninfusionPage() {
  const schema = useMemo(() => createEisenaufklaerungSchema(), []);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const signaturePadRef = useRef<SignaturePadHandle | null>(null);

  const form = useForm<EisenaufklaerungPayload>({
    resolver: zodResolver(schema) as Resolver<EisenaufklaerungPayload>,
    defaultValues: createDefaultEisenaufklaerungValues(),
    mode: "onTouched",
  });

  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = form;

  const updateScrollIndicator = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const hasOverflow = container.scrollHeight - container.clientHeight > 8;
    const isAtBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 16;
    setShowScrollIndicator(hasOverflow && !isAtBottom);
  }, []);

  useEffect(() => {
    const header = document.querySelector("header:not([data-anamnese-shell])");
    const footer = document.querySelector("footer");

    if (header) (header as HTMLElement).style.display = "none";
    if (footer) (footer as HTMLElement).style.display = "none";

    return () => {
      if (header) (header as HTMLElement).style.display = "";
      if (footer) (footer as HTMLElement).style.display = "";
    };
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => updateScrollIndicator();
    container.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    const frame = requestAnimationFrame(updateScrollIndicator);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(frame);
    };
  }, [updateScrollIndicator]);

  const onSubmit = async (data: EisenaufklaerungPayload) => {
    setSubmitMessage("");
    const payload = {
      ...data,
      signature: signaturePadRef.current?.getSignature() ?? data.signature,
    };
    const validatedData = schema.parse(payload);

    const response = await fetch("/api/eisenaufklaerung", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validatedData),
    });

    if (!response.ok) {
      setSubmitMessage("Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.");
      return;
    }

    setIsSubmitted(true);
  };

  const textField = (
    path: FieldPath<EisenaufklaerungPayload>,
    label: string,
    options: { required?: boolean } = {}
  ) => {
    const error = getError(errors, path);
    return (
      <Field data-invalid={!!error}>
        <FieldLabel htmlFor={path}>
          {label} {options.required && <RequiredMark />}
        </FieldLabel>
        <Input id={path} type="text" aria-invalid={!!error} {...register(path)} />
        <FieldError>{error}</FieldError>
      </Field>
    );
  };

  const checkboxField = (
    path: FieldPath<EisenaufklaerungPayload>,
    label: string,
    description: string,
    required = false
  ) => (
    <Controller
      control={control}
      name={path}
      render={({ field }) => {
        const error = getError(errors, path);
        return (
          <Field data-invalid={!!error} className="rounded-md border border-border p-4">
            <div className="flex items-start gap-3">
              <Checkbox
                id={path}
                checked={field.value === true}
                aria-invalid={!!error}
                onCheckedChange={(checked) => field.onChange(checked === true)}
              />
              <div className="flex flex-col gap-2">
                <FieldLabel htmlFor={path}>
                  {label} {required && <RequiredMark />}
                </FieldLabel>
                <FieldDescription>{description}</FieldDescription>
                <FieldError>{error}</FieldError>
              </div>
            </div>
          </Field>
        );
      }}
    />
  );

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 flex h-screen w-screen items-center justify-center bg-primary px-4">
        <div className="text-center">
          <CheckIcon className="mx-auto mb-8 size-24 text-white" aria-hidden="true" />
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">Vielen Dank!</h1>
          <p className="mb-12 text-2xl text-white md:text-3xl">Bitte geben Sie das Gerät an der Rezeption zurück.</p>
          <Button
            type="button"
            variant="secondary"
            size="lg"
            onClick={() => {
              reset(createDefaultEisenaufklaerungValues());
              signaturePadRef.current?.clear();
              setSubmitMessage("");
              setIsSubmitted(false);
            }}
          >
            Neues Formular
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="fixed inset-0 flex bg-background text-foreground">
      <div className="mx-auto flex h-full w-full max-w-md flex-col overflow-hidden border-x border-border bg-background shadow-sm">
        <header data-anamnese-shell className="shrink-0 border-b border-border bg-background">
          <nav aria-label="Eiseninfusion Navigation" className="grid h-14 grid-cols-[1fr_auto_1fr] items-center px-4">
            <Button type="button" variant="outline" size="sm" className="justify-self-start gap-1 rounded-md px-3" disabled>
              <ChevronLeftIcon className="size-4" aria-hidden="true" />
              Zurück
            </Button>
            <Image src={Logo} alt="Praxis Jona Logo" className="h-8 w-auto object-contain" priority />
          </nav>
          <div className="border-t border-border px-4 py-3">
            <h1 className="text-lg font-semibold leading-none">Eiseninfusion</h1>
          </div>
        </header>

        <div ref={scrollContainerRef} className="relative flex-1 overflow-y-auto px-4 py-5 pb-28">
          <form id="eisenaufklaerung-form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7" noValidate>
            <FieldGroup>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold leading-tight">
                  Einverständniserklärung zur Eiseninfusion mit Ferinject, Monofer, Venofer und Fermed
                </h2>
              </div>
              {textField("patientName", "Patientenname", { required: true })}
            </FieldGroup>

            {eisenaufklaerungInformationSections.map((section) => (
              <section key={section.title} className="space-y-3">
                <h2 className="text-xl font-semibold leading-tight">{section.title}</h2>
                {"paragraphs" in section &&
                  section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-6 text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                {"bullets" in section && (
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <FieldGroup>
              <h2 className="text-2xl font-semibold leading-tight">
                Patienteneigene Verantwortung bei Verzicht auf Überwachungszeit nach der Infusion
              </h2>
              <FieldDescription>(Bitte nur ankreuzen, wenn Sie auf eigene Verantwortung auf die Überwachungszeit verzichten möchten)</FieldDescription>
              {checkboxField("monitoringWaiverAccepted", "Patienteneigene Verantwortung", eisenaufklaerungMonitoringWaiverText)}
            </FieldGroup>

            <FieldGroup>
              <h2 className="text-2xl font-semibold leading-tight">Einverständniserklärung</h2>
              {checkboxField("consentAccepted", "Einverständniserklärung", eisenaufklaerungConsentText, true)}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {textField("doctorInitials", "Kürzel Arzt")}
                {textField("date", "Datum", { required: true })}
              </div>
              <Field data-invalid={!!getError(errors, "signature")}>
                <FieldLabel>
                  Unterschrift Patient <RequiredMark />
                </FieldLabel>
                <Controller
                  control={control}
                  name="signature"
                  render={({ field }) => (
                    <SignaturePadField
                      ref={signaturePadRef}
                      value={field.value}
                      onChange={(dataUrl) => field.onChange(dataUrl)}
                      clearLabel="Unterschrift löschen"
                    />
                  )}
                />
                <FieldError>{getError(errors, "signature")}</FieldError>
              </Field>
            </FieldGroup>

            {submitMessage && (
              <p className="text-sm font-medium text-destructive" role="alert">
                {submitMessage}
              </p>
            )}
          </form>
        </div>

        {showScrollIndicator && (
          <div
            data-testid="eisenaufklaerung-scroll-indicator"
            className="pointer-events-none absolute inset-x-0 bottom-24 z-20 flex justify-center"
          >
            <div className="flex items-center gap-2 rounded-full border border-border bg-background/95 px-3 py-2 text-sm font-medium text-muted-foreground shadow-md">
              <ArrowDownIcon className="size-4 animate-bounce" aria-hidden="true" />
              Weiter nach unten
            </div>
          </div>
        )}

        <div data-testid="eisenaufklaerung-bottom-toolbar" className="shrink-0 border-t border-border bg-background px-4 py-4">
          <Button type="submit" form="eisenaufklaerung-form" disabled={isSubmitting} className="h-12 w-full rounded-md text-base">
            {isSubmitting ? "Wird übermittelt..." : "Absenden"}
          </Button>
        </div>
      </div>
    </main>
  );
}
