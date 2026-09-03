"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDownIcon, ArrowRightIcon, CheckIcon, ChevronLeftIcon } from "lucide-react";
import { Controller, FieldPath, Resolver, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Logo from "/public/images/praxis-jona-web-logo.png";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Locale } from "../form-definition";
import SignaturePadField, { SignaturePadHandle } from "../SignaturePad";
import { ThyroidPayload, createDefaultThyroidValues, createThyroidSchema, thyroidCopy } from "./form-definition";

const getError = (errors: any, path: string) =>
  path.split(".").reduce((current, key) => current?.[key], errors)?.message as string | undefined;

function RequiredMark() {
  return <span className="text-destructive">*</span>;
}

type StepKey = "base" | "thyroid" | "symptomsFirst" | "symptomsSecond" | "privacy" | "signature";

const STEP_KEYS: StepKey[] = ["base", "thyroid", "symptomsFirst", "symptomsSecond", "privacy", "signature"];

const STEP_FIELDS: Record<StepKey, string[]> = {
  base: ["reason", "age", "height", "weight"],
  thyroid: [
    "thyroid.throatComplaints",
    "thyroid.neckCircumferenceIncreased",
    "thyroid.familyThyroidDisease",
    "thyroid.enlargedOrNodularThyroid",
    "thyroid.thyroidSurgery",
    "thyroid.radioiodineTreatment",
    "thyroid.thyroidMedication",
    "thyroid.contrastMediaRecent",
    "thyroid.iodizedSalt",
    "thyroid.femaleHormones",
    "thyroid.pregnancy",
  ],
  symptomsFirst: [
    "symptoms.nervous",
    "symptoms.innerRestless",
    "symptoms.claustrophobia",
    "symptoms.sleepDisorders",
    "symptoms.sweating",
    "symptoms.heatSensitive",
    "symptoms.weightLoss",
    "symptoms.frequentBowelMovements",
    "symptoms.hairLoss",
  ],
  symptomsSecond: [
    "symptoms.heartSymptoms",
    "symptoms.constipation",
    "symptoms.eyeComplaints",
    "symptoms.sluggish",
    "symptoms.tired",
    "symptoms.coldSensitive",
    "symptoms.weightGain",
    "symptoms.drySkin",
    "symptoms.brittleNails",
  ],
  privacy: [
    "privacy.patientName",
    "privacy.birthdate",
    "privacy.address",
    "privacy.furtherTreatment",
    "privacy.medicalCare",
    "privacy.completeDocumentation",
    "privacy.dataCollection",
  ],
  signature: ["privacy.consentAccepted", "privacy.placeDate", "signature"],
};

export default function ThyroidDiagnosticsPage({ locale = "de" }: { locale?: Locale } = {}) {
  const copy = thyroidCopy[locale];
  const schema = useMemo(() => createThyroidSchema(locale), [locale]);
  const wizardCopy = locale === "de"
    ? { next: "Weiter", step: "Schritt", checkFields: "Bitte prüfen Sie die markierten Felder." }
    : { next: "Next", step: "Step", checkFields: "Please review the highlighted fields." };
  const stepTitles: Record<StepKey, string> = {
    base: copy.sections.base,
    thyroid: copy.sections.thyroid,
    symptomsFirst: copy.sections.general,
    symptomsSecond: copy.sections.general,
    privacy: copy.sections.privacy,
    signature: copy.sections.signature,
  };
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const signaturePadRef = useRef<SignaturePadHandle | null>(null);

  const form = useForm<ThyroidPayload>({
    resolver: zodResolver(schema) as Resolver<ThyroidPayload>,
    defaultValues: createDefaultThyroidValues(locale),
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
    const isValid = fields.length === 0 ? true : await trigger(fields as FieldPath<ThyroidPayload>[]);
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
    reset(createDefaultThyroidValues(locale));
    signaturePadRef.current?.clear();
    setCurrentStepIndex(0);
    setSubmitMessage("");
    setIsSubmitted(false);
  };

  const onSubmit = async (data: ThyroidPayload) => {
    setSubmitMessage("");
    const payload = {
      ...data,
      signature: signaturePadRef.current?.getSignature() ?? data.signature,
    };
    const validatedData = schema.parse(payload);

    const response = await fetch("/api/schilddruesen-diagnostik", {
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
    path: FieldPath<ThyroidPayload>,
    label: string,
    options: { required?: boolean; type?: string } = {}
  ) => {
    const error = getError(errors, path);
    return (
      <Field data-invalid={!!error}>
        <FieldLabel htmlFor={path}>
          {label} {options.required && <RequiredMark />}
        </FieldLabel>
        <Input id={path} type={options.type ?? "text"} aria-invalid={!!error} {...register(path)} />
        <FieldError>{error}</FieldError>
      </Field>
    );
  };

  const textareaField = (path: FieldPath<ThyroidPayload>, label: string) => (
    <Field>
      <FieldLabel htmlFor={path}>{label}</FieldLabel>
      <Textarea id={path} {...register(path)} />
    </Field>
  );

  const yesNoField = (path: FieldPath<ThyroidPayload>, label: string, detailPath?: FieldPath<ThyroidPayload>, detailLabel?: string) => {
    const error = getError(errors, path);
    return (
      <FieldSet data-invalid={!!error} className="rounded-md border border-border p-4">
        <FieldLegend>{label}</FieldLegend>
        <Controller
          control={control}
          name={path}
          render={({ field }) => (
            <RadioGroup value={(field.value as string) ?? ""} onValueChange={field.onChange} aria-invalid={!!error}>
              {(["ja", "nein"] as const).map((value) => (
                <FieldLabel key={value} className="flex items-center gap-2 font-normal">
                  <RadioGroupItem value={value} aria-invalid={!!error} />
                  {value === "ja" ? copy.yes : copy.no}
                </FieldLabel>
              ))}
            </RadioGroup>
          )}
        />
        <FieldError>{error}</FieldError>
        {detailPath && detailLabel && textareaField(detailPath, detailLabel)}
      </FieldSet>
    );
  };

  const checkboxField = (path: FieldPath<ThyroidPayload>, label: string, required = false) => (
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
          <form id="thyroid-form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7" noValidate>
            {currentStep === "base" && <FieldGroup>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold leading-tight">{copy.title}</h2>
                <p className="text-base leading-6 text-muted-foreground">{copy.subtitle}</p>
              </div>
              {textareaField("reason", copy.fields.reason)}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {textField("age", copy.fields.age)}
                {textField("height", copy.fields.height)}
                {textField("weight", copy.fields.weight)}
              </div>
            </FieldGroup>}

            {currentStep === "thyroid" && <FieldGroup>
              <h2 className="text-2xl font-semibold leading-tight">{copy.sections.thyroid}</h2>
              {copy.thyroidQuestions.map((question) => (
                <div key={question.id} className="contents">
                  {yesNoField(
                    `thyroid.${question.id}` as FieldPath<ThyroidPayload>,
                    question.label,
                    question.detailLabel ? (`thyroid.${question.id}Details` as FieldPath<ThyroidPayload>) : undefined,
                    question.detailLabel
                  )}
                </div>
              ))}
              {textareaField("thyroid.otherDiseasesOperations", copy.extraFields.otherDiseasesOperations)}
              {textareaField("thyroid.currentMedications", copy.fields.dose)}
              {textField("thyroid.cigarettesPerDay", copy.extraFields.cigarettesPerDay)}
              {textField("thyroid.lowerAbdominalOperations", copy.extraFields.lowerAbdominalOperations)}
              {textField("thyroid.lastPeriodDate", copy.extraFields.lastPeriodDate)}
              {checkboxField("thyroid.pregnancyUnknown", copy.unknown)}
            </FieldGroup>}

            {currentStep === "symptomsFirst" && <FieldGroup>
              <h2 className="text-2xl font-semibold leading-tight">{copy.sections.general}</h2>
              <FieldDescription>
                {locale === "de" ? "Beschwerden 1 bis 9" : "Symptoms 1 to 9"}
              </FieldDescription>
              {copy.symptomQuestions.slice(0, 9).map((question) => (
                <div key={question.id} className="contents">
                  {yesNoField(
                    `symptoms.${question.id}` as FieldPath<ThyroidPayload>,
                    question.label,
                    question.detailLabel ? (`symptoms.${question.id}Details` as FieldPath<ThyroidPayload>) : undefined,
                    question.detailLabel
                  )}
                </div>
              ))}
            </FieldGroup>}

            {currentStep === "symptomsSecond" && <FieldGroup>
              <h2 className="text-2xl font-semibold leading-tight">{copy.sections.general}</h2>
              <FieldDescription>
                {locale === "de" ? "Beschwerden 10 bis 18" : "Symptoms 10 to 18"}
              </FieldDescription>
              {copy.symptomQuestions.slice(9).map((question) => (
                <div key={question.id} className="contents">
                  {yesNoField(
                    `symptoms.${question.id}` as FieldPath<ThyroidPayload>,
                    question.label,
                    question.detailLabel ? (`symptoms.${question.id}Details` as FieldPath<ThyroidPayload>) : undefined,
                    question.detailLabel
                  )}
                </div>
              ))}
              {textareaField("symptoms.otherSymptoms", copy.extraFields.otherSymptoms)}
            </FieldGroup>}

            {currentStep === "privacy" && <FieldGroup>
              <h2 className="text-2xl font-semibold leading-tight">{copy.sections.privacy}</h2>
              {copy.privacyText.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-6 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
              {textField("privacy.patientName", copy.fields.patientName, { required: true })}
              {textField("privacy.birthdate", copy.fields.birthdate, { required: true })}
              {textareaField("privacy.address", copy.fields.address)}
              {checkboxField("privacy.furtherTreatment", locale === "de" ? "zum Zwecke der weiteren Behandlung" : "for further treatment")}
              {checkboxField("privacy.medicalCare", locale === "de" ? "sonstigen ärztlichen Versorgung" : "for other medical care")}
              {checkboxField("privacy.completeDocumentation", locale === "de" ? "lückenlosen Dokumentation" : "for complete documentation")}
              {checkboxField("privacy.dataCollection", locale === "de" ? "Daten dürfen eingeholt werden" : "data may be obtained")}
            </FieldGroup>}

            {currentStep === "signature" && <FieldGroup>
              <h2 className="text-2xl font-semibold leading-tight">{copy.sections.signature}</h2>
              {checkboxField("privacy.consentAccepted", copy.privacyConsent, true)}
              {textField("privacy.placeDate", copy.fields.placeDate, { required: true })}
              <Field data-invalid={!!getError(errors, "signature")}>
                <FieldLabel>
                  {copy.fields.signature} <RequiredMark />
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
          <div data-testid="thyroid-scroll-indicator" className="pointer-events-none absolute inset-x-0 bottom-24 z-20 flex justify-center">
            <div className="flex items-center gap-2 rounded-full border border-border bg-background/95 px-3 py-2 text-sm font-medium text-muted-foreground shadow-md">
              <ArrowDownIcon className="size-4 animate-bounce" aria-hidden="true" />
              {copy.scrollDown}
            </div>
          </div>
        )}

        <div data-testid="thyroid-bottom-toolbar" className="shrink-0 border-t border-border bg-background px-4 py-4">
          {currentStep === "signature" ? (
            <Button type="submit" form="thyroid-form" disabled={isSubmitting} className="h-12 w-full rounded-md text-base">
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
