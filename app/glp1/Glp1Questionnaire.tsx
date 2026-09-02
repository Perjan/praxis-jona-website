"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, Check, LockKeyhole, ShieldCheck } from "lucide-react";
import { Controller, Resolver, useForm } from "react-hook-form";

import Logo from "/public/images/praxis-jona-web-logo.png";
import SignaturePadField from "@/app/(de)/anamnese/SignaturePad";
import { Checkbox } from "@/components/ui/checkbox";
import {
  GLP1_CONSENT_TEXT_VERSION,
  GLP1_SCHEMA_VERSION,
  Glp1Flow,
  Glp1Locale,
  Glp1Submission,
  calculateGlp1Age,
  calculateGlp1Bmi,
  createDefaultGlp1Submission,
  createGlp1SubmissionSchema,
  glp1StepFieldPaths,
} from "./intake-definition";
import { getGlp1Copy, glp1AnswerFieldKeys } from "./intake-copy";
import Glp1ChromeGuard from "./Glp1ChromeGuard";

const createSubmissionId = () => {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") return crypto.randomUUID();
  return "00000000-0000-4000-8000-000000000000";
};

const getError = (errors: unknown, path: string) =>
  path.split(".").reduce<any>((current, key) => current?.[key], errors as any)?.message as string | undefined;

const inputClass =
  "mt-2 min-h-14 w-full rounded-md border border-primary/25 bg-white px-4 text-base text-primary outline-none transition placeholder:text-primary/35 focus:border-primary focus:ring-2 focus:ring-primary/15 disabled:bg-stone-50";

export default function Glp1Questionnaire({ locale, flow }: { locale: Glp1Locale; flow: Glp1Flow }) {
  const copy = getGlp1Copy(locale);
  const schema = useMemo(() => createGlp1SubmissionSchema(locale), [locale]);
  const defaults = useMemo(() => {
    const value = createDefaultGlp1Submission(flow as any, locale) as Glp1Submission;
    return { ...value, submissionId: createSubmissionId() };
  }, [flow, locale]);
  const [step, setStep] = useState(0);
  const [minorBlocked, setMinorBlocked] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [successId, setSuccessId] = useState("");

  const form = useForm<Glp1Submission>({
    resolver: zodResolver(schema) as Resolver<Glp1Submission>,
    defaultValues: defaults,
    mode: "onTouched",
  });
  const {
    control,
    formState: { errors, isSubmitting },
    getValues,
    handleSubmit,
    register,
    setValue,
    trigger,
    watch,
  } = form;

  const steps = flow === "new" ? copy.form.newSteps : copy.form.followSteps;
  const values = watch();
  const currentAnswers = values.answers as any;
  const bmi = flow === "new" ? calculateGlp1Bmi(currentAnswers.heightCm, currentAnswers.weightKg) : null;
  const landingHref = locale === "de" ? "/glp-1-check" : "/en/glp-1-check";
  const otherLocaleHref = locale === "de"
    ? `/en/glp-1-check/${flow === "new" ? "new" : "follow-up"}`
    : `/glp-1-check/${flow === "new" ? "new" : "follow-up"}`;

  const goNext = async () => {
    setSubmitError("");
    const fields = glp1StepFieldPaths[flow][step] as readonly string[];
    const valid = await trigger(fields as any);
    if (step === 0) {
      const age = calculateGlp1Age(getValues("patient.birthdate"));
      if (age !== null && age < 18) {
        setMinorBlocked(true);
        return;
      }
    }
    if (!valid) {
      setSubmitError(copy.form.checkFields);
      return;
    }
    setStep((current) => Math.min(current + 1, steps.length - 1));
  };

  const onSubmit = async (data: Glp1Submission) => {
    setSubmitError("");
    const payload = {
      ...data,
      schemaVersion: GLP1_SCHEMA_VERSION,
      locale,
      flow,
      consent: {
        ...data.consent,
        textVersion: GLP1_CONSENT_TEXT_VERSION,
        acceptedAt: data.consent.acceptedAt || new Date().toISOString(),
      },
    };

    try {
      const response = await fetch("/api/glp1-intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error("submission_failed");
      setSuccessId(result.submissionId);
    } catch {
      setSubmitError(copy.form.retry);
    }
  };

  const field = (
    path: string,
    label: string,
    options: { type?: string; placeholder?: string; required?: boolean; readOnly?: boolean; value?: string; autoComplete?: string } = {},
  ) => {
    const error = getError(errors, path);
    return (
      <div>
        <label htmlFor={path} className="block text-[15px] font-semibold leading-6 text-primary sm:text-base">
          {label}{options.required ? <span className="ml-1 text-red-700" aria-hidden="true">*</span> : null}
        </label>
        <input
          id={path}
          type={options.type ?? "text"}
          placeholder={options.placeholder}
          autoComplete={options.autoComplete}
          aria-label={label}
          readOnly={options.readOnly}
          value={options.value}
          aria-invalid={Boolean(error)}
          className={`${inputClass} ${error ? "border-red-700 ring-1 ring-red-700/20" : ""}`}
          {...(options.readOnly ? {} : register(path as any))}
        />
        {error ? <p className="mt-2 text-sm font-medium text-red-700" role="alert">{error}</p> : null}
      </div>
    );
  };

  const textarea = (path: string, label: string, required = false) => {
    const error = getError(errors, path);
    return (
      <div>
        <label htmlFor={path} className="block text-[15px] font-semibold leading-6 text-primary sm:text-base">
          {label}{required ? <span className="ml-1 text-red-700" aria-hidden="true">*</span> : null}
        </label>
        <textarea
          id={path}
          rows={3}
          aria-label={label}
          maxLength={1000}
          aria-invalid={Boolean(error)}
          className={`${inputClass} min-h-28 resize-y py-3 ${error ? "border-red-700 ring-1 ring-red-700/20" : ""}`}
          {...register(path as any)}
        />
        {error ? <p className="mt-2 text-sm font-medium text-red-700" role="alert">{error}</p> : null}
      </div>
    );
  };

  const radio = (path: string, label: string, choices: readonly string[], columns = 2) => {
    const error = getError(errors, path);
    return (
      <fieldset>
        <legend className="text-[15px] font-semibold leading-6 text-primary sm:text-base">{label}<span className="ml-1 text-red-700" aria-hidden="true">*</span></legend>
        <Controller
          control={control}
          name={path as any}
          render={({ field: controllerField }) => (
            <div className={`mt-3 grid gap-3 ${columns === 4 ? "grid-cols-2 sm:grid-cols-4" : columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
              {choices.map((choice) => {
                const selected = controllerField.value === choice;
                return (
                  <label
                    key={choice}
                    className={`flex min-h-14 cursor-pointer items-center gap-3 rounded-md border px-4 py-3 font-medium transition ${selected ? "border-primary bg-tealColor/55 shadow-sm" : "border-primary/20 bg-white hover:border-primary/50"}`}
                  >
                    <input
                      type="radio"
                      name={controllerField.name}
                      value={choice}
                      checked={selected}
                      onChange={() => controllerField.onChange(choice)}
                      className="size-5 border-primary/40 text-primary focus:ring-primary"
                    />
                    <span>{(copy.options as Record<string, string>)[choice]}</span>
                  </label>
                );
              })}
            </div>
          )}
        />
        {error ? <p className="mt-2 text-sm font-medium text-red-700" role="alert">{error}</p> : null}
      </fieldset>
    );
  };

  if (minorBlocked) {
    return (
      <div className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center bg-lightBeige px-5 text-primary">
        <Glp1ChromeGuard />
        <div className="max-w-lg text-center">
          <ShieldCheck className="mx-auto size-14" strokeWidth={1.5} aria-hidden="true" />
          <h1 className="mt-6 font-serif text-4xl font-semibold">{copy.form.minorTitle}</h1>
          <p className="mt-5 text-lg leading-8 text-primaryLighter">{copy.form.minorText}</p>
          <Link href={landingHref} className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-6 font-semibold text-white">
            {copy.form.returnLanding}
          </Link>
        </div>
      </div>
    );
  }

  if (successId) {
    return (
      <div className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center bg-primary px-5 text-white">
        <Glp1ChromeGuard />
        <div className="max-w-xl text-center">
          <span className="mx-auto flex size-20 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/25">
            <Check className="size-10" aria-hidden="true" />
          </span>
          <h1 className="mt-7 font-serif text-4xl font-semibold sm:text-5xl">{copy.form.successTitle}</h1>
          <p className="mt-5 text-lg leading-8 text-white/80">{copy.form.successText}</p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-lightBeige">{copy.form.reference}</p>
          <p className="mt-2 break-all font-mono text-sm">{successId}</p>
          <p className="mt-6 text-sm leading-6 text-white/75">{copy.form.successNext}</p>
          <Link href={landingHref} className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-lightBeige px-6 font-semibold text-primary">
            {copy.form.returnLanding}
          </Link>
        </div>
      </div>
    );
  }

  const sectionTitle = flow === "new"
    ? [copy.sections.personal, copy.sections.basics, copy.sections.safety, copy.sections.medicationGoals, copy.sections.review, copy.sections.consent][step]
    : [copy.sections.personal, copy.sections.currentTreatment, copy.sections.dose, copy.sections.progress, copy.sections.changes, copy.sections.review][step];

  const reviewRows = [
    [copy.fields.name, values.patient.name],
    [copy.fields.birthdate, values.patient.birthdate],
    [copy.fields.email, values.patient.email],
    [copy.fields.phone, values.patient.phone],
    ...Object.entries(glp1AnswerFieldKeys[flow]).map(([key, labelKey]) => [
      copy.fields[labelKey],
      (copy.options as Record<string, string>)[currentAnswers[key]] ?? currentAnswers[key],
    ]),
  ].filter(([, value]) => Boolean(value));

  return (
    <div className="fixed inset-0 z-[100] flex h-screen flex-col overflow-hidden bg-white text-primary">
      <Glp1ChromeGuard />
      <header className="shrink-0 border-b border-primary/10 bg-white">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:h-24 sm:px-8">
          <Link href={landingHref} aria-label="Praxis Jona">
            <Image src={Logo} alt="Praxis Jona" className="h-10 w-auto sm:h-12" priority />
          </Link>
          <div className="flex items-center gap-5 text-sm font-semibold sm:gap-8">
            <Link href={otherLocaleHref}>{locale === "de" ? "DE | EN" : "EN | DE"}</Link>
            <span className="hidden items-center gap-2 text-primaryLighter sm:flex">
              <LockKeyhole className="size-5" strokeWidth={1.7} aria-hidden="true" />
              {copy.form.secure}
            </span>
            <LockKeyhole className="size-6 sm:hidden" aria-label={copy.form.secure} />
          </div>
        </div>
      </header>

      <div
        className="shrink-0 border-b border-primary/10 bg-white px-5 py-4 sm:px-8 lg:hidden"
        role="progressbar"
        aria-label={`${copy.form.step} ${step + 1} ${copy.form.of} ${steps.length}`}
        aria-valuemin={1}
        aria-valuemax={steps.length}
        aria-valuenow={step + 1}
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold">{copy.form.step} {step + 1} {copy.form.of} {steps.length}</p>
          <div className="mt-3 grid grid-cols-6 gap-2" aria-hidden="true">
            {steps.map((stepName, index) => <span key={stepName} className={`h-1.5 rounded-full ${index <= step ? "bg-primary" : "bg-lightBeige"}`} />)}
          </div>
        </div>
      </div>

      <div className={`mx-auto grid min-h-0 w-full max-w-[1440px] flex-1 ${flow === "follow-up" ? "lg:grid-cols-[300px_1fr]" : ""}`}>
        {flow === "follow-up" ? (
          <aside className="hidden border-r border-primary/10 px-8 py-10 lg:block">
            <p className="font-semibold">{copy.form.step} {step + 1} {copy.form.of} {steps.length}</p>
            <ol className="mt-8 space-y-1">
              {steps.map((stepName, index) => (
                <li key={stepName} className={`relative flex min-h-16 items-center gap-4 border-l pl-8 ${index < step ? "border-primary" : "border-primary/15"}`}>
                  <span className={`absolute -left-4 flex size-8 items-center justify-center rounded-full border text-sm font-semibold ${index < step ? "border-primary bg-white" : index === step ? "border-primary bg-primary text-white" : "border-primary/20 bg-white text-primary/45"}`}>
                    {index < step ? <Check className="size-4" aria-hidden="true" /> : index + 1}
                  </span>
                  <span className={index === step ? "font-semibold" : "text-primary/55"}>{stepName}</span>
                </li>
              ))}
            </ol>
          </aside>
        ) : null}

        <div className="min-h-0 overflow-y-auto px-5 pb-32 pt-8 sm:px-8 sm:pt-10 lg:px-14 lg:pb-36">
          <div className="mx-auto max-w-5xl">
            {flow === "new" ? (
              <div className="mb-9 hidden items-center gap-5 lg:flex">
                <p className="shrink-0 font-semibold">{copy.form.step} {step + 1} {copy.form.of} {steps.length}</p>
                <div
                  className="grid flex-1 grid-cols-6 items-center gap-3"
                  role="progressbar"
                  aria-label={`${copy.form.step} ${step + 1} ${copy.form.of} ${steps.length}`}
                  aria-valuemin={1}
                  aria-valuemax={steps.length}
                  aria-valuenow={step + 1}
                >
                  {steps.map((stepName, index) => <span key={stepName} className={`h-1 rounded-full ${index <= step ? "bg-primary" : "bg-primary/12"}`} />)}
                </div>
              </div>
            ) : null}

            <h1 className="font-serif text-4xl font-semibold tracking-[-0.015em] sm:text-5xl">{sectionTitle}</h1>
            {step === 0 ? <p className="mt-4 max-w-2xl leading-7 text-primaryLighter">{copy.form.personalIntro}</p> : null}

            <form id="glp1-intake-form" className="mt-9 space-y-7" onSubmit={handleSubmit(onSubmit)} noValidate>
              <input type="text" tabIndex={-1} autoComplete="off" className="absolute -left-[9999px]" aria-hidden="true" {...register("website")} />

              {step === 0 ? (
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">{field("patient.name", copy.fields.name, { required: true, autoComplete: "name" })}</div>
                  {field("patient.birthdate", copy.fields.birthdate, { type: "date", required: true, autoComplete: "bday" })}
                  {field("patient.email", copy.fields.email, { type: "email", required: true, autoComplete: "email" })}
                  <div className="sm:col-span-2">{field("patient.phone", copy.fields.phone, { type: "tel", required: true, autoComplete: "tel" })}</div>
                  <div className="sm:col-span-2 rounded-md bg-tealColor/30 px-5 py-4 text-sm leading-6 text-primaryLighter">
                    <LockKeyhole className="mr-2 inline size-4" aria-hidden="true" />{copy.form.noStorage}
                  </div>
                </div>
              ) : null}

              {flow === "new" && step === 1 ? (
                <div className="space-y-7">
                  <div className="grid gap-6 sm:grid-cols-3">
                    {field("answers.heightCm", copy.fields.heightCm, { type: "number", required: true, placeholder: "170" })}
                    {field("answers.weightKg", copy.fields.weightKg, { type: "number", required: true, placeholder: "75" })}
                    {field("answers.bmi", copy.fields.bmi, { readOnly: true, value: bmi === null ? "–" : String(bmi) })}
                  </div>
                  {radio("answers.previousWeightLossAttempts", copy.fields.previousWeightLossAttempts, ["yes", "no"])}
                  {textarea("answers.weightRelatedConditions", copy.fields.weightRelatedConditions)}
                </div>
              ) : null}

              {flow === "new" && step === 2 ? (
                <div className="space-y-7">
                  {radio("answers.pregnantOrBreastfeeding", copy.fields.pregnantOrBreastfeeding, ["yes", "no", "not_applicable"], 3)}
                  {radio("answers.diabetes", copy.fields.diabetes, ["yes", "no"])}
                  {radio("answers.glucoseLoweringMedication", copy.fields.glucoseLoweringMedication, ["yes", "no"])}
                  {radio("answers.pancreatitisOrGallbladderDisease", copy.fields.pancreatitisOrGallbladderDisease, ["yes", "no"])}
                  {radio("answers.severeGastrointestinalDisease", copy.fields.severeGastrointestinalDisease, ["yes", "no"])}
                  {radio("answers.kidneyOrLiverDisease", copy.fields.kidneyOrLiverDisease, ["yes", "no"])}
                  {radio("answers.eyeComplications", copy.fields.eyeComplications, ["yes", "no"])}
                  {radio("answers.thyroidCancerOrMen2History", copy.fields.thyroidCancerOrMen2History, ["yes", "no"])}
                  {radio("answers.allergiesOrPriorIntolerance", copy.fields.allergiesOrPriorIntolerance, ["yes", "no"])}
                </div>
              ) : null}

              {flow === "new" && step === 3 ? (
                <div className="space-y-7">
                  {textarea("answers.currentMedication", copy.fields.currentMedication)}
                  {textarea("answers.previousGlp1Experience", copy.fields.previousGlp1Experience)}
                  {textarea("answers.relevantDiagnoses", copy.fields.relevantDiagnoses)}
                  {textarea("answers.treatmentGoals", copy.fields.treatmentGoals, true)}
                </div>
              ) : null}

              {flow === "follow-up" && step === 1 ? (
                <div className="grid gap-6 sm:grid-cols-2">
                  {field("answers.currentMedication", copy.fields.currentGlp1Medication, { required: true })}
                  {field("answers.currentDose", copy.fields.currentDose, { required: true })}
                  {field("answers.frequency", copy.fields.frequency, { required: true })}
                  {field("answers.treatmentStartDate", copy.fields.treatmentStartDate, { type: "date", required: true })}
                  {field("answers.mostRecentDoseDate", copy.fields.mostRecentDoseDate, { type: "date", required: true })}
                </div>
              ) : null}

              {flow === "follow-up" && step === 2 ? (
                <div className="space-y-7">
                  {radio("answers.doseRequest", copy.fields.doseRequest, ["maintain", "increase", "reduce"], 3)}
                  {currentAnswers.doseRequest && currentAnswers.doseRequest !== "maintain" ? (
                    <div className="grid gap-6 sm:grid-cols-2">
                      {field("answers.desiredDose", copy.fields.desiredDose, { required: true })}
                      {textarea("answers.doseRationale", copy.fields.doseRationale, true)}
                    </div>
                  ) : null}
                  <p className="rounded-md bg-tealColor/30 px-5 py-4 text-sm leading-6 text-primaryLighter">{copy.form.reviewNotice}</p>
                </div>
              ) : null}

              {flow === "follow-up" && step === 3 ? (
                <div className="space-y-7">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {field("answers.currentWeightKg", copy.fields.currentWeightKg, { type: "number", required: true })}
                    {field("answers.startingWeightKg", copy.fields.startingWeightKg, { type: "number" })}
                  </div>
                  {textarea("answers.progress", copy.fields.progress, true)}
                  {radio("answers.appetiteEffect", copy.fields.appetiteEffect, ["reduced", "unchanged", "returning"], 3)}
                  {radio("answers.missedDoses", copy.fields.missedDoses, ["yes", "no"])}
                  {textarea("answers.treatmentGoals", copy.fields.treatmentGoals, true)}
                </div>
              ) : null}

              {flow === "follow-up" && step === 4 ? (
                <div className="space-y-7">
                  {radio("answers.sideEffectSeverity", copy.fields.sideEffectSeverity, ["none", "mild", "moderate", "severe"], 4)}
                  {textarea("answers.sideEffectSymptoms", copy.fields.sideEffectSymptoms)}
                  {textarea("answers.newDiagnoses", copy.fields.newDiagnoses)}
                  {textarea("answers.newMedication", copy.fields.newMedication)}
                  {radio("answers.pregnancyStatus", copy.fields.pregnancyStatus, ["yes", "no", "not_applicable"], 3)}
                  {textarea("answers.otherChanges", copy.fields.otherChanges)}
                </div>
              ) : null}

              {(flow === "new" && step === 4) || (flow === "follow-up" && step === 5) ? (
                <div className="space-y-6">
                  <p className="rounded-md border border-primary/15 bg-lightBeige/45 px-5 py-4 leading-7 text-primaryLighter">{copy.form.reviewNotice}</p>
                  <dl className="divide-y divide-primary/10 border-y border-primary/10">
                    {reviewRows.map(([label, value]) => (
                      <div key={`${label}-${value}`} className="grid gap-1 py-4 sm:grid-cols-[260px_1fr] sm:gap-6">
                        <dt className="text-sm font-semibold text-primaryLighter">{label}</dt>
                        <dd className="whitespace-pre-wrap text-sm leading-6">{String(value)}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ) : null}

              {flow === "new" && step === 5 ? (
                <ConsentFields
                  copy={copy}
                  control={control}
                  errors={errors}
                  setValue={setValue}
                />
              ) : null}

              {flow === "follow-up" && step === 5 ? (
                <div className="mt-8 border-t border-primary/10 pt-8">
                  <ConsentFields copy={copy} control={control} errors={errors} setValue={setValue} />
                </div>
              ) : null}

              {submitError ? <p className="rounded-md bg-red-50 px-4 py-3 text-sm font-semibold text-red-800" role="alert">{submitError}</p> : null}
            </form>
          </div>
        </div>
      </div>

      <div data-testid="glp1-bottom-toolbar" className="absolute inset-x-0 bottom-0 z-20 border-t border-primary/10 bg-lightBeige/55 px-5 py-4 backdrop-blur-sm sm:px-8">
        <div className="mx-auto flex max-w-[1340px] items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => { setSubmitError(""); setStep((current) => Math.max(0, current - 1)); }}
            disabled={step === 0 || isSubmitting}
            className="inline-flex min-h-12 min-w-32 items-center justify-center gap-2 rounded-md border border-primary bg-white px-5 font-semibold transition hover:bg-lightBeige disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ArrowLeft className="size-5" aria-hidden="true" />{copy.form.back}
          </button>
          {step === steps.length - 1 ? (
            <button
              type="submit"
              form="glp1-intake-form"
              disabled={isSubmitting}
              className="inline-flex min-h-12 min-w-40 items-center justify-center gap-2 rounded-md bg-primary px-6 font-semibold text-white transition hover:bg-primaryDarker disabled:opacity-60"
            >
              {isSubmitting ? copy.form.submitting : copy.form.submit}
              {!isSubmitting ? <ArrowRight className="size-5" aria-hidden="true" /> : null}
            </button>
          ) : (
            <button
              type="button"
              onClick={goNext}
              className="inline-flex min-h-12 min-w-32 items-center justify-center gap-2 rounded-md bg-primary px-6 font-semibold text-white transition hover:bg-primaryDarker"
            >
              {copy.form.next}<ArrowRight className="size-5" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function ConsentFields({ copy, control, errors, setValue }: any) {
  const consentError = getError(errors, "consent.accepted");
  const signatureError = getError(errors, "signature");
  return (
    <div className="space-y-8">
      <Controller
        control={control}
        name="consent.accepted"
        render={({ field }) => (
          <div className={`rounded-md border p-5 ${consentError ? "border-red-700" : "border-primary/20"}`}>
            <div className="flex items-start gap-4">
              <Checkbox
                id="consent.accepted"
                checked={field.value}
                onCheckedChange={(checked) => {
                  const accepted = checked === true;
                  field.onChange(accepted);
                  setValue("consent.acceptedAt", accepted ? new Date().toISOString() : "", { shouldValidate: true });
                  setValue("consent.textVersion", GLP1_CONSENT_TEXT_VERSION);
                }}
              />
              <div>
                <label htmlFor="consent.accepted" className="font-semibold">{copy.fields.consent}</label>
                <p className="mt-2 text-sm leading-6 text-primaryLighter">{copy.form.consent}</p>
              </div>
            </div>
            {consentError ? <p className="mt-3 text-sm font-medium text-red-700" role="alert">{consentError}</p> : null}
          </div>
        )}
      />
      <div>
        <p className="font-semibold">{copy.fields.signature}</p>
        <p className="mt-2 text-sm leading-6 text-primaryLighter">{copy.form.signatureHelp}</p>
        <div className="mt-3 rounded-md border border-primary/20 bg-white p-3">
          <Controller
            control={control}
            name="signature"
            render={({ field }) => (
              <SignaturePadField
                value={field.value}
                onChange={field.onChange}
                clearLabel={copy.form.back === "Zurück" ? "Unterschrift löschen" : "Clear signature"}
              />
            )}
          />
        </div>
        {signatureError ? <p className="mt-2 text-sm font-medium text-red-700" role="alert">{signatureError}</p> : null}
      </div>
    </div>
  );
}
