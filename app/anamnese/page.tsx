"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Controller, FieldPath, Resolver, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckIcon } from "lucide-react";

import Logo from "/public/images/praxis-jona-web-logo.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  AnamnesePayload,
  CONSENT_TEXT_VERSION,
  Locale,
  anamneseCopy,
  createAnamneseSchema,
  emptyFormValuesForUi,
  optionValues,
} from "./form-definition";
import SignaturePadField, { SignaturePadHandle } from "./SignaturePad";

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
  const smoking = watch("lifestyle.smoking");
  const hormonalContraception = watch("sexSpecific.hormonalContraception");
  const values = watch();

  useEffect(() => {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    if (header) (header as HTMLElement).style.display = "none";
    if (footer) (footer as HTMLElement).style.display = "none";

    return () => {
      if (header) (header as HTMLElement).style.display = "";
      if (footer) (footer as HTMLElement).style.display = "";
    };
  }, []);

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
    <main className="min-h-screen bg-muted px-4 py-6 sm:px-6 lg:px-8">
      <Card className="mx-auto max-w-4xl">
        <CardHeader className="gap-5">
          <div className="flex justify-center">
            <Image src={Logo} alt="Praxis Jona Logo" className="h-16 w-auto object-contain" priority />
          </div>
          <div className="text-center">
            <CardTitle className="text-3xl">{t.title}</CardTitle>
            <CardDescription className="mt-3 text-base">{t.intro}</CardDescription>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>
                {t.step} {currentStepIndex + 1} {t.of} {STEP_KEYS.length}
              </span>
              <span>{t.sections[currentStep]}</span>
            </div>
            <Progress value={progress} aria-label={`${t.step} ${currentStepIndex + 1}`} />
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8" noValidate>
            {currentStep === "personal" && (
              <FieldGroup>
                <h2 className="text-2xl font-semibold text-foreground">{t.sections.personal}</h2>
                {textField("patient.name", t.fields.name, { required: true })}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {textField("patient.birthdate", t.fields.birthdate, { required: true, type: "date" })}
                  {textField("patient.weight", t.fields.weight, { required: true, type: "number" })}
                  {textField("patient.height", t.fields.height, { required: true, type: "number" })}
                </div>
                {textField("patient.occupation", t.fields.occupation, { required: true })}
                {textField("patient.email", t.fields.email, { required: true, type: "email" })}
              </FieldGroup>
            )}

            {currentStep === "complaints" && (
              <FieldGroup>
                <h2 className="text-2xl font-semibold text-foreground">{t.sections.complaints}</h2>
                {textareaField("medicalHistory.currentComplaints", t.fields.currentComplaints)}
                {textareaField("medicalHistory.programGoals", t.fields.programGoals)}
              </FieldGroup>
            )}

            {currentStep === "history" && (
              <FieldGroup>
                <h2 className="text-2xl font-semibold text-foreground">{t.sections.history}</h2>
                {textareaField("medicalHistory.previousDiseases", t.fields.previousDiseases)}
                {textareaField("medicalHistory.operations", t.fields.operations)}
              </FieldGroup>
            )}

            {currentStep === "family" && (
              <FieldGroup>
                <h2 className="text-2xl font-semibold text-foreground">{t.sections.family}</h2>
                <FieldDescription>{t.fields.familyIntro}</FieldDescription>
                {textField("medicalHistory.familyHeartStroke", t.fields.familyHeartStroke)}
                {textField("medicalHistory.familyCancer", t.fields.familyCancer)}
                {textField("medicalHistory.familyDementia", t.fields.familyDementia)}
                {textField("medicalHistory.familyDiabetes", t.fields.familyDiabetes)}
              </FieldGroup>
            )}

            {currentStep === "medication" && (
              <FieldGroup>
                <h2 className="text-2xl font-semibold text-foreground">{t.sections.medication}</h2>
                {textareaField("medicalHistory.medications", t.fields.medications)}
                {textareaField("medicalHistory.supplements", t.fields.supplements)}
              </FieldGroup>
            )}

            {currentStep === "lifestyle" && (
              <FieldGroup>
                <h2 className="text-2xl font-semibold text-foreground">{t.sections.lifestyle}</h2>
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
                <h2 className="text-2xl font-semibold text-foreground">{t.sections.sexSpecific}</h2>
                {radioField("sexSpecific.gender", t.fields.gender, optionValues.gender)}
                {gender === "female" && (
                  <div className="flex flex-col gap-5 rounded-md bg-accent p-4">
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
                    {radioField("sexSpecific.maleLibidoEnergy", t.fields.maleLibidoEnergy, optionValues.libidoEnergy)}
                    {radioField("sexSpecific.testosteroneMeasured", t.fields.testosteroneMeasured, optionValues.yesNo)}
                    {radioField("sexSpecific.testosteroneSubstitution", t.fields.testosteroneSubstitution, optionValues.yesNo)}
                  </div>
                )}
              </FieldGroup>
            )}

            {currentStep === "consent" && (
              <FieldGroup>
                <h2 className="text-2xl font-semibold text-foreground">{t.sections.consent}</h2>
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
                <h2 className="text-2xl font-semibold text-foreground">{t.sections.review}</h2>
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

            <Separator />
            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
              <Button type="button" variant="outline" onClick={goBack} disabled={currentStepIndex === 0 || isSubmitting}>
                {t.back}
              </Button>
              {currentStep === "review" ? (
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? t.submitting : t.submit}
                </Button>
              ) : (
                <Button type="button" onClick={goNext} disabled={isSubmitting}>
                  {t.next}
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
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
