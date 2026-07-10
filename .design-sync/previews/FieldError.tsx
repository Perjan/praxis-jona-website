import * as React from 'react'
import {
  Field,
  FieldError,
  FieldLabel,
  FieldLegend,
  FieldSet,
  Input,
  RadioGroup,
  RadioGroupItem,
  Textarea,
} from 'praxisjona-website'

export const InvalidInput = () => (
  <Field className="max-w-sm" data-invalid={true}>
    <FieldLabel htmlFor="error-email">E-Mail-Adresse</FieldLabel>
    <Input id="error-email" defaultValue="anna.schmidt@" aria-invalid={true} />
    <FieldError>Bitte geben Sie eine gültige E-Mail-Adresse ein.</FieldError>
  </Field>
)

export const InvalidTextarea = () => (
  <Field className="max-w-sm" data-invalid={true}>
    <FieldLabel htmlFor="error-complaints">Aktuelle Beschwerden</FieldLabel>
    <Textarea id="error-complaints" aria-invalid={true} />
    <FieldError>Bitte beschreiben Sie kurz Ihre aktuellen Beschwerden.</FieldError>
  </Field>
)

export const InvalidRadio = () => (
  <FieldSet className="max-w-sm" data-invalid={true}>
    <FieldLegend>Wie schätzen Sie Ihre Stressbelastung ein?</FieldLegend>
    <RadioGroup className="flex-row flex-wrap gap-4" aria-invalid={true}>
      <FieldLabel className="flex items-center gap-2 font-normal">
        <RadioGroupItem value="niedrig" aria-invalid={true} />
        niedrig
      </FieldLabel>
      <FieldLabel className="flex items-center gap-2 font-normal">
        <RadioGroupItem value="mittel" aria-invalid={true} />
        mittel
      </FieldLabel>
      <FieldLabel className="flex items-center gap-2 font-normal">
        <RadioGroupItem value="hoch" aria-invalid={true} />
        hoch
      </FieldLabel>
    </RadioGroup>
    <FieldError>Bitte wählen Sie eine Einstufung aus.</FieldError>
  </FieldSet>
)
