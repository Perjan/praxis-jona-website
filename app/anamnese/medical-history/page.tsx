"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Controller, FieldPath, Resolver, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowDownIcon, ArrowRightIcon, CheckIcon, ChevronLeftIcon } from "lucide-react";

import Logo from "/public/images/praxis-jona-web-logo.png";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import {
  AnamnesePayload,
  CONSENT_TEXT_VERSION,
  Locale,
  anamneseCopy,
  calculateAgeFromBirthdate,
  createAnamneseSchema,
  emptyFormValuesForUi,
  optionValues,
} from "../form-definition";
import SignaturePadField, { SignaturePadHandle } from "../SignaturePad";

type StepKey =
  | "personal"
  | "complaints"
  | "history"
  | "family"
  | "medication"
  | "lifestyle"
  | "sexSpecific"
  | "consent"
  | "review";

const STEP_KEYS: StepKey[] = [
  "personal",
  "complaints",
  "history",
  "family",
  "medication",
  "lifestyle",
  "sexSpecific",
  "consent",
  "review",
];

const STEP_FIELDS: Record<StepKey, FieldPath<AnamnesePayload>[]> = {
  personal: [
    "patient.name",
    "patient.birthdate",
    "patient.height",
    "patient.weight",
    "patient.occupation",
    "patient.email",
  ],
  complaints: ["medicalHistory.currentComplaints", "medicalHistory.programGoals"],
  history: ["medicalHistory.previousDiseases", "medicalHistory.operations"],
  family: [
    "medicalHistory.familyHeartStroke",
    "medicalHistory.familyCancer",
    "medicalHistory.familyDementia",
    "medicalHistory.familyDiabetes",
  ],
  medication: ["medicalHistory.medications", "medicalHistory.supplements"],
  lifestyle: [
    "lifestyle.exerciseFrequency",
    "lifestyle.sleepQuality",
    "lifestyle.diet",
    "lifestyle.smoking",
    "lifestyle.smokingAmount",
    "lifestyle.alcohol",
    "lifestyle.stressLevel",
  ],
  sexSpecific: [
    "sexSpecific.gender",
    "sexSpecific.cycleRegular",
    "sexSpecific.femaleLibidoEnergy",
    "sexSpecific.pregnancies",
    "sexSpecific.children",
    "sexSpecific.hormonalContraception",
    "sexSpecific.hormonalContraceptionDetails",
    "sexSpecific.maleLibidoEnergy",
    "sexSpecific.testosteroneMeasured",
    "sexSpecific.testosteroneSubstitution",
  ],
  consent: ["consent.accepted", "signature"],
  review: [],
};

function getError(errors: any, path: string) {
  return path.split(".").reduce((current, key) => current?.[key], errors)?.message as string | undefined;
}

function RequiredMark() {
  return <span className="text-destructive">*</span>;
}

export default function AnamnesePage({ locale = "de" }: { locale?: Locale } = {}) {
  const t = anamneseCopy[locale];
  const schema = useMemo(() => createAnamneseSchema(locale), [locale]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const signaturePadRef = useRef<SignaturePadHandle | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  const form = useForm<AnamnesePayload>({
    resolver: zodResolver(schema) as Resolver<AnamnesePayload>,
    defaultValues: emptyFormValuesForUi(locale),
    mode: "onTouched",
  });

  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
    setValue,
    trigger,
    watch,
  } = form;

  const currentStep = STEP_KEYS[currentStepIndex];
  const progress = ((currentStepIndex + 1) / STEP_KEYS.length) * 100;
  const gender = watch("sexSpecific.gender");
  const birthdate = watch("patient.birthdate");
  const smoking = watch("lifestyle.smoking");
  const hormonalContraception = watch("sexSpecific.hormonalContraception");
  const values = watch();
  const age = calculateAgeFromBirthdate(birthdate);

  const updateScrollIndicator = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const hasOverflow = container.scrollHeight - container.clientHeight > 8;
    const isAtBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 16;
    setShowScrollIndicator(hasOverflow && !isAtBottom);
  }, []);

  useEffect(() => {
    const header = document.querySelector("body > header");
    const footer = document.querySelector("body > footer");

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

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
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
  }, [currentStepIndex, gender, hormonalContraception, smoking, submitMessage, updateScrollIndicator]);

  const goNext = async () => {
    const isValid = await trigger(STEP_FIELDS[currentStep]);
    if (!isValid) {
      setSubmitMessage(t.checkFields);
      return;
    }
    setSubmitMessage("");
    setCurrentStepIndex((step) => Math.min(step + 1, STEP_KEYS.length - 1));
  };

  const goBack = () => {
    setSubmitMessage("");
    setCurrentStepIndex((step) => Math.max(step - 1, 0));
  };

  const onSubmit = async (data: AnamnesePayload) => {
    setSubmitMessage("");

    const signatureData = signaturePadRef.current?.getSignature() ?? data.signature;
    const payload = {
      ...data,
      locale,
      signature: signatureData,
      consent: {
        ...data.consent,
        textVersion: CONSENT_TEXT_VERSION,
        acceptedAt: data.consent.acceptedAt || new Date().toISOString(),
      },
    };

    const validatedData = schema.parse(payload);

    const response = await fetch("/api/anamnese", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedData),
    });

    if (!response.ok) {
      setSubmitMessage(t.error);
      return;
    }

    setIsSubmitted(true);
  };

  const handleNewPatient = () => {
    reset(emptyFormValuesForUi(locale));
    signaturePadRef.current?.clear();
    setCurrentStepIndex(0);
    setSubmitMessage("");
    setIsSubmitted(false);
  };

  const textField = (
    path: FieldPath<AnamnesePayload>,
    label: string,
    options: { required?: boolean; type?: string; description?: string } = {}
  ) => {
    const error = getError(errors, path);
    const registration = register(path);
    return (
      <Field data-invalid={!!error}>
        <FieldLabel htmlFor={path}>
          {label} {options.required && <RequiredMark />}
        </FieldLabel>
        <Input
          id={path}
          type={options.type ?? "text"}
          aria-invalid={!!error}
          {...registration}
        />
        {options.description && <FieldDescription>{options.description}</FieldDescription>}
        <FieldError>{error}</FieldError>
      </Field>
    );
  };

  const textareaField = (path: FieldPath<AnamnesePayload>, label: string) => {
    const error = getError(errors, path);
    return (
      <Field data-invalid={!!error}>
        <FieldLabel htmlFor={path}>{label}</FieldLabel>
        <Textarea id={path} aria-invalid={!!error} {...register(path)} />
        <FieldError>{error}</FieldError>
      </Field>
    );
  };

  const radioField = (
    path: FieldPath<AnamnesePayload>,
    label: string,
    values: readonly string[],
    orientation: "row" | "column" = "row"
  ) => {
    const error = getError(errors, path);
    return (
      <FieldSet data-invalid={!!error}>
        <FieldLegend>{label}</FieldLegend>
        <Controller
          control={control}
          name={path}
          render={({ field }) => (
            <RadioGroup
              value={(field.value as string) ?? ""}
              onValueChange={field.onChange}
              className={orientation === "row" ? "flex-row flex-wrap gap-4" : "gap-3"}
              aria-invalid={!!error}
            >
              {values.map((value) => (
                <FieldLabel key={value} className="flex items-center gap-2 font-normal">
                  <RadioGroupItem value={value} aria-invalid={!!error} />
                  {t.options[value as keyof typeof t.options]}
                </FieldLabel>
              ))}
            </RadioGroup>
          )}
        />
        <FieldError>{error}</FieldError>
      </FieldSet>
    );
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 flex h-screen w-screen items-center justify-center bg-primary px-4">
        <div className="text-center">
          <CheckIcon className="mx-auto mb-8 size-24 text-white" aria-hidden="true" />
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">{t.thanks}</h1>
          <p className="mb-12 text-2xl text-white md:text-3xl">{t.returnDevice}</p>
          <Button type="button" variant="secondary" size="lg" onClick={handleNewPatient}>
            {t.newPatient}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="fixed inset-0 flex bg-background text-foreground">
      <div className="mx-auto flex h-full w-full max-w-md flex-col overflow-hidden border-x border-border bg-background shadow-sm">
        <header className="shrink-0 border-b border-border bg-background">
          <nav aria-label="Anamnese navigation" className="grid h-14 grid-cols-[1fr_auto_1fr] items-center px-4">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={goBack}
              disabled={currentStepIndex === 0 || isSubmitting}
              className="justify-self-start gap-1 rounded-md px-3"
            >
              <ChevronLeftIcon className="size-4" aria-hidden="true" />
              {t.back}
            </Button>
            <Image src={Logo} alt="Praxis Jona Logo" className="h-8 w-auto object-contain" priority />
          </nav>
          <div className="border-t border-border px-4 py-3">
            <h1 className="text-lg font-semibold leading-none">{t.sections[currentStep]}</h1>
          </div>
          <Progress value={progress} aria-label={`${t.step} ${currentStepIndex + 1}`} className="h-1 rounded-none" />
        </header>

        <div ref={scrollContainerRef} className="relative flex-1 overflow-y-auto px-4 py-5 pb-28">
          <form id="anamnese-form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
            {currentStepIndex === 0 && (
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold leading-tight">{t.title}</h2>
                <p className="text-base leading-6 text-muted-foreground">{t.intro}</p>
              </div>
            )}

            {currentStep === "personal" && (
              <FieldGroup>
                {textField("patient.name", t.fields.name, { required: true })}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {textField("patient.birthdate", t.fields.birthdate, { required: true, type: "date" })}
                  <Field>
                    <FieldLabel htmlFor="patient.age">{t.fields.age}</FieldLabel>
                    <Input id="patient.age" type="text" value={age} readOnly />
                  </Field>
                  {textField("patient.height", t.fields.height, { required: true, type: "number" })}
                  {textField("patient.weight", t.fields.weight, { required: true, type: "number" })}
                </div>
                {textField("patient.occupation", t.fields.occupation, { required: true })}
                {textField("patient.email", t.fields.email, { required: true, type: "email" })}
              </FieldGroup>
            )}

            {currentStep === "complaints" && (
              <FieldGroup>
                {textareaField("medicalHistory.currentComplaints", t.fields.currentComplaints)}
                {textareaField("medicalHistory.programGoals", t.fields.programGoals)}
              </FieldGroup>
            )}

            {currentStep === "history" && (
              <FieldGroup>
                {textareaField("medicalHistory.previousDiseases", t.fields.previousDiseases)}
                {textareaField("medicalHistory.operations", t.fields.operations)}
              </FieldGroup>
            )}

            {currentStep === "family" && (
              <FieldGroup>
                <FieldDescription>{t.fields.familyIntro}</FieldDescription>
                {textField("medicalHistory.familyHeartStroke", t.fields.familyHeartStroke)}
                {textField("medicalHistory.familyCancer", t.fields.familyCancer)}
                {textField("medicalHistory.familyDementia", t.fields.familyDementia)}
                {textField("medicalHistory.familyDiabetes", t.fields.familyDiabetes)}
              </FieldGroup>
            )}

            {currentStep === "medication" && (
              <FieldGroup>
                {textareaField("medicalHistory.medications", t.fields.medications)}
                {textareaField("medicalHistory.supplements", t.fields.supplements)}
              </FieldGroup>
            )}

            {currentStep === "lifestyle" && (
              <FieldGroup>
                {textField("lifestyle.exerciseFrequency", t.fields.exerciseFrequency)}
                {radioField("lifestyle.sleepQuality", t.fields.sleepQuality, optionValues.sleepQuality)}
                {radioField("lifestyle.diet", t.fields.diet, optionValues.diet)}
                {radioField("lifestyle.smoking", t.fields.smoking, optionValues.yesNo)}
                {smoking === "ja" && textField("lifestyle.smokingAmount", t.fields.smokingAmount)}
                {radioField("lifestyle.alcohol", t.fields.alcohol, optionValues.alcohol)}
                {radioField("lifestyle.stressLevel", t.fields.stressLevel, optionValues.stressLevel)}
              </FieldGroup>
            )}

            {currentStep === "sexSpecific" && (
              <FieldGroup>
                {radioField("sexSpecific.gender", t.fields.gender, optionValues.gender)}
                {gender === "female" && (
                  <div className="flex flex-col gap-5 rounded-md bg-accent p-4">
                    <h2 className="text-xl font-semibold leading-tight">{t.fields.forWomen}</h2>
                    {radioField("sexSpecific.cycleRegular", t.fields.cycleRegular, optionValues.yesNo)}
                    {radioField("sexSpecific.femaleLibidoEnergy", t.fields.femaleLibidoEnergy, optionValues.libidoEnergy)}
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      {textField("sexSpecific.pregnancies", t.fields.pregnancies)}
                      {textField("sexSpecific.children", t.fields.children)}
                    </div>
                    {radioField("sexSpecific.hormonalContraception", t.fields.hormonalContraception, optionValues.yesNo)}
                    {hormonalContraception === "ja" &&
                      textField("sexSpecific.hormonalContraceptionDetails", t.fields.hormonalContraceptionDetails)}
                  </div>
                )}
                {gender === "male" && (
                  <div className="flex flex-col gap-5 rounded-md bg-accent p-4">
                    <h2 className="text-xl font-semibold leading-tight">{t.fields.forMen}</h2>
                    {radioField("sexSpecific.maleLibidoEnergy", t.fields.maleLibidoEnergy, optionValues.libidoEnergy)}
                    {radioField("sexSpecific.testosteroneMeasured", t.fields.testosteroneMeasured, optionValues.yesNo)}
                    {radioField("sexSpecific.testosteroneSubstitution", t.fields.testosteroneSubstitution, optionValues.yesNo)}
                  </div>
                )}
              </FieldGroup>
            )}

            {currentStep === "consent" && (
              <FieldGroup>
                <Controller
                  control={control}
                  name="consent.accepted"
                  render={({ field }) => {
                    const error = getError(errors, "consent.accepted");
                    return (
                      <Field data-invalid={!!error} className="rounded-md border border-border p-4">
                        <div className="flex items-start gap-3">
                          <Checkbox
                            id="consent.accepted"
                            checked={field.value}
                            aria-invalid={!!error}
                            onCheckedChange={(checked) => {
                              const accepted = checked === true;
                              field.onChange(accepted);
                              setValue("consent.textVersion", CONSENT_TEXT_VERSION, { shouldDirty: true });
                              setValue("consent.acceptedAt", accepted ? new Date().toISOString() : "", {
                                shouldDirty: true,
                                shouldValidate: true,
                              });
                            }}
                          />
                          <div className="flex flex-col gap-2">
                            <FieldLabel htmlFor="consent.accepted">{t.sections.consent} <RequiredMark /></FieldLabel>
                            <FieldDescription>{t.consent}</FieldDescription>
                            <FieldError>{error}</FieldError>
                          </div>
                        </div>
                      </Field>
                    );
                  }}
                />
                <Field data-invalid={!!getError(errors, "signature")}>
                  <FieldLabel>{t.fields.signature} <RequiredMark /></FieldLabel>
                  <FieldDescription>{t.signatureConfirm}</FieldDescription>
                  <Controller
                    control={control}
                    name="signature"
                    render={({ field }) => (
                      <SignaturePadField
                        ref={signaturePadRef}
                        value={field.value}
                        onChange={(dataUrl) => field.onChange(dataUrl)}
                        clearLabel={locale === "de" ? "Unterschrift löschen" : "Clear signature"}
                      />
                    )}
                  />
                  <FieldError>{getError(errors, "signature")}</FieldError>
                </Field>
              </FieldGroup>
            )}

            {currentStep === "review" && (
              <FieldGroup>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <ReviewItem label={t.fields.name} value={values.patient.name} />
                  <ReviewItem label={t.fields.email} value={values.patient.email} />
                  <ReviewItem label={t.fields.birthdate} value={values.patient.birthdate} />
                  <ReviewItem label={t.fields.gender} value={gender ? t.options[gender as keyof typeof t.options] : ""} />
                  <ReviewItem label={t.fields.currentComplaints} value={values.medicalHistory.currentComplaints} />
                  <ReviewItem label={t.fields.medications} value={values.medicalHistory.medications} />
                </div>
              </FieldGroup>
            )}

            {submitMessage && <p className="text-sm font-medium text-destructive" role="alert">{submitMessage}</p>}
          </form>
        </div>

        {showScrollIndicator && (
          <div
            data-testid="anamnese-scroll-indicator"
            className="pointer-events-none absolute inset-x-0 bottom-24 z-20 flex justify-center"
          >
            <div className="flex items-center gap-2 rounded-full border border-border bg-background/95 px-3 py-2 text-sm font-medium text-muted-foreground shadow-md">
              <ArrowDownIcon className="size-4 animate-bounce" aria-hidden="true" />
              {locale === "de" ? "Weiter nach unten" : "Scroll down"}
            </div>
          </div>
        )}

        <div data-testid="anamnese-bottom-toolbar" className="shrink-0 border-t border-border bg-background px-4 py-4">
          {currentStep === "review" ? (
            <Button type="submit" form="anamnese-form" disabled={isSubmitting} className="h-12 w-full rounded-md text-base">
              {isSubmitting ? t.submitting : t.submit}
            </Button>
          ) : (
            <Button type="button" onClick={goNext} disabled={isSubmitting} className="h-12 w-full rounded-md text-base">
              {t.next}
              <ArrowRightIcon className="ml-2 size-4" aria-hidden="true" />
            </Button>
          )}
        </div>
      </div>
    </main>
  );
}

function ReviewItem({ label, value }: { label: string; value?: string }) {
  return (
    <div className="rounded-md border border-border p-3">
      <dt className="text-sm font-medium text-muted-foreground">{label}</dt>
      <dd className="mt-1 min-h-5 text-sm text-foreground">{value || "-"}</dd>
    </div>
  );
}
