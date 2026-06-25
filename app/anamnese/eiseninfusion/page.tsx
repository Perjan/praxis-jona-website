"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDownIcon, ArrowRightIcon, CheckIcon, ChevronLeftIcon } from "lucide-react";
import { Controller, FieldPath, Resolver, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Logo from "/public/images/praxis-jona-web-logo.png";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import SignaturePadField, { SignaturePadHandle } from "../SignaturePad";
import {
  EisenaufklaerungPayload,
  createDefaultEisenaufklaerungValues,
  createEisenaufklaerungSchema,
  eisenaufklaerungCopy,
} from "./form-definition";
import { Locale } from "../form-definition";

const getError = (errors: any, path: string) =>
  path.split(".").reduce((current, key) => current?.[key], errors)?.message as string | undefined;

function RequiredMark() {
  return <span className="text-destructive">*</span>;
}

type StepKey = "patient" | "information" | "monitoring" | "consent";

const STEP_KEYS: StepKey[] = ["patient", "information", "monitoring", "consent"];

const STEP_FIELDS: Record<StepKey, string[]> = {
  patient: ["patientName"],
  information: [],
  monitoring: ["monitoringWaiverAccepted"],
  consent: ["consentAccepted", "doctorInitials", "date", "signature"],
};

export default function EiseninfusionPage({ locale = "de" }: { locale?: Locale } = {}) {
  const copy = eisenaufklaerungCopy[locale];
  const schema = useMemo(() => createEisenaufklaerungSchema(locale), [locale]);
  const wizardCopy = locale === "de"
    ? { next: "Weiter", step: "Schritt", checkFields: "Bitte prüfen Sie die markierten Felder." }
    : { next: "Next", step: "Step", checkFields: "Please review the highlighted fields." };
  const stepTitles: Record<StepKey, string> = {
    patient: copy.title,
    information: locale === "de" ? "Wichtige Hinweise" : "Important information",
    monitoring: copy.monitoringHeading,
    consent: copy.consentHeading,
  };
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const signaturePadRef = useRef<SignaturePadHandle | null>(null);

  const form = useForm<EisenaufklaerungPayload>({
    resolver: zodResolver(schema) as Resolver<EisenaufklaerungPayload>,
    defaultValues: createDefaultEisenaufklaerungValues(locale),
    mode: "onTouched",
  });

  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
    trigger,
  } = form;
  const currentStep = STEP_KEYS[currentStepIndex];
  const progress = ((currentStepIndex + 1) / STEP_KEYS.length) * 100;

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

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    if (typeof container.scrollTo === "function") {
      container.scrollTo({ top: 0 });
    } else {
      container.scrollTop = 0;
    }
    const frame = requestAnimationFrame(updateScrollIndicator);
    return () => cancelAnimationFrame(frame);
  }, [currentStepIndex, submitMessage, updateScrollIndicator]);

  const goNext = async () => {
    const fields = STEP_FIELDS[currentStep];
    const isValid = fields.length === 0 ? true : await trigger(fields as FieldPath<EisenaufklaerungPayload>[]);
    if (!isValid) {
      setSubmitMessage(wizardCopy.checkFields);
      return;
    }
    setSubmitMessage("");
    setCurrentStepIndex((step) => Math.min(step + 1, STEP_KEYS.length - 1));
  };

  const goBack = () => {
    setSubmitMessage("");
    setCurrentStepIndex((step) => Math.max(step - 1, 0));
  };

  const handleNewForm = () => {
    reset(createDefaultEisenaufklaerungValues(locale));
    signaturePadRef.current?.clear();
    setCurrentStepIndex(0);
    setSubmitMessage("");
    setIsSubmitted(false);
  };

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
      setSubmitMessage(copy.error);
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
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">{copy.thanks}</h1>
          <p className="mb-12 text-2xl text-white md:text-3xl">{copy.returnDevice}</p>
          <Button
            type="button"
            variant="secondary"
            size="lg"
            onClick={handleNewForm}
          >
            {copy.newForm}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="fixed inset-0 flex bg-background text-foreground">
      <div className="mx-auto flex h-full w-full max-w-md flex-col overflow-hidden border-x border-border bg-background shadow-sm">
        <header data-anamnese-shell className="shrink-0 border-b border-border bg-background">
          <nav aria-label={copy.navLabel} className="grid h-14 grid-cols-[1fr_auto_1fr] items-center px-4">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={goBack}
              disabled={currentStepIndex === 0 || isSubmitting}
              className="justify-self-start gap-1 rounded-md px-3"
            >
              <ChevronLeftIcon className="size-4" aria-hidden="true" />
              {copy.back}
            </Button>
            <Image src={Logo} alt="Praxis Jona Logo" className="h-8 w-auto object-contain" priority />
          </nav>
          <div className="border-t border-border px-4 py-3">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {wizardCopy.step} {currentStepIndex + 1} / {STEP_KEYS.length}
            </p>
            <h1 className="mt-1 text-lg font-semibold leading-none">{stepTitles[currentStep]}</h1>
          </div>
          <Progress value={progress} aria-label={`${wizardCopy.step} ${currentStepIndex + 1}`} className="h-1 rounded-none" />
        </header>

        <div ref={scrollContainerRef} className="relative flex-1 overflow-y-auto px-4 py-5 pb-28">
          <form id="eisenaufklaerung-form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7" noValidate>
            {currentStep === "patient" && <FieldGroup>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold leading-tight">{copy.heading}</h2>
              </div>
              {textField("patientName", copy.fields[0].label, { required: true })}
            </FieldGroup>}

            {currentStep === "information" && (
              <div className="space-y-6">
                {copy.informationSections.map((section) => (
                  <section key={section.title} className="space-y-3 rounded-md border border-border p-4">
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
              </div>
            )}

            {currentStep === "monitoring" && <FieldGroup>
              <h2 className="text-2xl font-semibold leading-tight">{copy.monitoringHeading}</h2>
              <FieldDescription>{copy.monitoringIntro}</FieldDescription>
              {checkboxField("monitoringWaiverAccepted", copy.fields[1].label, copy.monitoringWaiverText)}
            </FieldGroup>}

            {currentStep === "consent" && <FieldGroup>
              <h2 className="text-2xl font-semibold leading-tight">{copy.consentHeading}</h2>
              {checkboxField("consentAccepted", copy.fields[2].label, copy.consentText, true)}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {textField("doctorInitials", copy.fields[3].label)}
                {textField("date", copy.fields[4].label, { required: true })}
              </div>
              <Field data-invalid={!!getError(errors, "signature")}>
                <FieldLabel>
                  {copy.fields[5].label} <RequiredMark />
                </FieldLabel>
                <Controller
                  control={control}
                  name="signature"
                  render={({ field }) => (
                    <SignaturePadField
                      ref={signaturePadRef}
                      value={field.value}
                      onChange={(dataUrl) => field.onChange(dataUrl)}
                      clearLabel={copy.clearSignature}
                    />
                  )}
                />
                <FieldError>{getError(errors, "signature")}</FieldError>
              </Field>
            </FieldGroup>}

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
              {copy.scrollDown}
            </div>
          </div>
        )}

        <div data-testid="eisenaufklaerung-bottom-toolbar" className="shrink-0 border-t border-border bg-background px-4 py-4">
          {currentStep === "consent" ? (
            <Button type="submit" form="eisenaufklaerung-form" disabled={isSubmitting} className="h-12 w-full rounded-md text-base">
              {isSubmitting ? copy.submitting : copy.submit}
            </Button>
          ) : (
            <Button type="button" onClick={goNext} disabled={isSubmitting} className="h-12 w-full rounded-md text-base">
              {wizardCopy.next}
              <ArrowRightIcon className="ml-2 size-4" aria-hidden="true" />
            </Button>
          )}
        </div>
      </div>
    </main>
  );
}
