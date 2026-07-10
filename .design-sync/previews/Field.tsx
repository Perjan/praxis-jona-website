import * as React from 'react'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  Input,
} from 'praxisjona-website'

export const Canonical = () => (
  <Field className="max-w-sm">
    <FieldLabel htmlFor="field-name">Vollständiger Name</FieldLabel>
    <Input id="field-name" defaultValue="Anna Schmidt" />
  </Field>
)

export const WithDescription = () => (
  <Field className="max-w-sm">
    <FieldLabel htmlFor="field-insurance">Versichertennummer</FieldLabel>
    <Input id="field-insurance" placeholder="A123456789" />
    <FieldDescription>
      Sie finden die Nummer auf der Vorderseite Ihrer Versichertenkarte.
    </FieldDescription>
  </Field>
)

export const Invalid = () => (
  <Field className="max-w-sm" data-invalid={true}>
    <FieldLabel htmlFor="field-email">E-Mail-Adresse</FieldLabel>
    <Input id="field-email" defaultValue="anna.schmidt@" aria-invalid={true} />
    <FieldError>Bitte geben Sie eine gültige E-Mail-Adresse ein.</FieldError>
  </Field>
)
