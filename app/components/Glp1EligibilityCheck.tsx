"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import type { LongevityLocale } from "app/content/longevitySource";

type EligibilityAnswer = "yes" | "no";

const copy = {
  de: {
    eyebrow: "Eignungs-Check",
    title: "Orientierungscheck: Passt eine GLP-1-Behandlung grundsätzlich?",
    intro: "Beantworten Sie sechs kurze Fragen ohne Dateneingabe. Der Check ersetzt keine ärztliche Prüfung, hilft aber bei der ersten Orientierung.",
    yes: "Ja",
    no: "Nein",
    back: "Zurück",
    next: "Weiter",
    question: "Frage",
    of: "von",
    unanswered: "Bitte wählen Sie eine Antwort aus.",
    restart: "Check neu starten",
    cta: "Online-Fragebogen starten",
    likelyTitle: "Eine ärztliche Abklärung kann sinnvoll sein.",
    likelyBody:
      "Ihre Antworten sprechen dafür, dass eine medizinische Gewichtssprechstunde grundsätzlich passend sein kann. Die endgültige Entscheidung erfolgt immer individuell im ärztlichen Gespräch.",
    reviewTitle: "Bitte ärztlich individuell prüfen lassen.",
    reviewBody:
      "Mindestens eine Antwort spricht dafür, dass die Eignung besonders sorgfältig geklärt werden sollte. Eine Verordnung erfolgt nur nach ärztlicher Prüfung und bei medizinischer Indikation.",
    questions: [
      {
        topic: "Alter",
        prompt: "Sind Sie mindestens 18 Jahre alt?",
      },
      {
        topic: "Medizinische Indikation",
        prompt: "Liegt Ihr BMI bei mindestens 30 oder bei mindestens 27 mit gewichtsbedingten Begleiterkrankungen?",
      },
      {
        topic: "Bisherige Versuche",
        prompt: "Haben Sie bereits versucht, Ihr Gewicht durch Ernährung, Bewegung oder Lebensstiländerungen zu reduzieren?",
      },
      {
        topic: "Schwangerschaft",
        prompt: "Sind Sie aktuell nicht schwanger, stillen nicht und planen derzeit keine Schwangerschaft?",
      },
      {
        topic: "Kontraindikationen",
        prompt: "Sind Ihnen keine relevanten medizinischen Gründe bekannt, die gegen eine GLP-1-Therapie sprechen könnten?",
      },
      {
        topic: "Begleitung",
        prompt: "Sind Sie bereit, die Therapie mit Ernährung, Bewegung und ärztlichen Kontrollen zu begleiten?",
      },
    ],
  },
  en: {
    eyebrow: "Suitability Check",
    title: "Orientation check: could GLP-1 treatment generally fit?",
    intro: "Answer six short questions without entering personal data. This check does not replace a physician assessment, but helps with initial orientation.",
    yes: "Yes",
    no: "No",
    back: "Back",
    next: "Next",
    question: "Question",
    of: "of",
    unanswered: "Please select an answer.",
    restart: "Restart check",
    cta: "Start online questionnaire",
    likelyTitle: "A medical assessment may be useful.",
    likelyBody:
      "Your answers suggest that a medical weight consultation may generally be appropriate. The final decision is always made individually in the physician consultation.",
    reviewTitle: "Please have this assessed individually by a physician.",
    reviewBody:
      "At least one answer suggests that suitability should be clarified especially carefully. A prescription is issued only after physician review and when medically indicated.",
    questions: [
      {
        topic: "Age",
        prompt: "Are you at least 18 years old?",
      },
      {
        topic: "Medical indication",
        prompt: "Is your BMI at least 30, or at least 27 with weight-related accompanying conditions?",
      },
      {
        topic: "Previous attempts",
        prompt: "Have you already tried to reduce your weight through nutrition, exercise or lifestyle changes?",
      },
      {
        topic: "Pregnancy",
        prompt: "Are you currently not pregnant, not breastfeeding and not planning a pregnancy at this time?",
      },
      {
        topic: "Contraindications",
        prompt: "Are you unaware of any relevant medical reasons that could argue against GLP-1 therapy?",
      },
      {
        topic: "Support",
        prompt: "Are you willing to support the therapy with nutrition, movement and physician check-ups?",
      },
    ],
  },
} as const;

export default function Glp1EligibilityCheck({ locale }: { locale: LongevityLocale }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, EligibilityAnswer>>({});
  const [showError, setShowError] = useState(false);
  const localized = copy[locale];
  const isComplete = step >= localized.questions.length;
  const currentQuestion = localized.questions[Math.min(step, localized.questions.length - 1)];
  const selectedAnswer = answers[step];
  const positiveAnswers = useMemo(() => Object.values(answers).filter((answer) => answer === "yes").length, [answers]);
  const isLikelySuitable = isComplete && positiveAnswers === localized.questions.length;

  const selectAnswer = (answer: EligibilityAnswer) => {
    setAnswers((current) => ({ ...current, [step]: answer }));
    setShowError(false);
  };

  const goNext = () => {
    if (!selectedAnswer) {
      setShowError(true);
      return;
    }

    setStep((current) => current + 1);
    setShowError(false);
  };

  const restart = () => {
    setAnswers({});
    setStep(0);
    setShowError(false);
  };

  return (
    <section id="eignungs-check" className="bg-lightBeige/70 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-xl shadow-stone-200/70">
        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-primary p-6 text-white sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-lightBeige">{localized.eyebrow}</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl">{localized.title}</h2>
            <p className="mt-5 text-base leading-7 text-white/80">{localized.intro}</p>
            <div className="mt-8 flex gap-2" aria-hidden="true">
              {localized.questions.map((question, index) => (
                <span
                  key={question.topic}
                  className={`h-2 flex-1 rounded-full ${index <= Math.min(step, localized.questions.length - 1) ? "bg-lightBeige" : "bg-white/20"}`}
                />
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {isComplete ? (
              <div className="flex min-h-[320px] flex-col justify-between">
                <div>
                  <CheckCircleIcon className="h-11 w-11 text-primary" aria-hidden="true" />
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-primary">
                    {isLikelySuitable ? localized.likelyTitle : localized.reviewTitle}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-primaryLighter">
                    {isLikelySuitable ? localized.likelyBody : localized.reviewBody}
                  </p>
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={locale === "de" ? "/glp-1-check" : "/en/glp-1-check"}
                    className="inline-flex justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primaryDarker"
                  >
                    {localized.cta}
                  </Link>
                  <button
                    type="button"
                    onClick={restart}
                    className="inline-flex justify-center rounded-xl border border-primary/20 bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:border-primary/40 hover:bg-stone-50"
                  >
                    {localized.restart}
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex min-h-[320px] flex-col justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/70">
                    {localized.question} {step + 1} {localized.of} {localized.questions.length} · {currentQuestion.topic}
                  </p>
                  <h3 className="mt-4 font-serif text-2xl font-semibold text-primary">{currentQuestion.prompt}</h3>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {(["yes", "no"] as const).map((answer) => (
                      <button
                        key={answer}
                        type="button"
                        onClick={() => selectAnswer(answer)}
                        className={`rounded-xl border px-5 py-4 text-left font-semibold transition ${
                          selectedAnswer === answer
                            ? "border-primary bg-primary text-white shadow-sm"
                            : "border-primary/15 bg-white text-primary hover:border-primary/40 hover:bg-lightBeige/40"
                        }`}
                        aria-pressed={selectedAnswer === answer}
                      >
                        {answer === "yes" ? localized.yes : localized.no}
                      </button>
                    ))}
                  </div>
                  {showError && <p className="mt-4 text-sm font-semibold text-red-700">{localized.unanswered}</p>}
                </div>

                <div className="mt-8 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setStep((current) => Math.max(current - 1, 0))}
                    disabled={step === 0}
                    className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-white px-4 py-3 text-sm font-semibold text-primary transition hover:border-primary/40 hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
                    {localized.back}
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primaryDarker"
                  >
                    {localized.next}
                    <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
