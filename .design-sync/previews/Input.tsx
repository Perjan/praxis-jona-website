import * as React from 'react'
import { Field, FieldDescription, FieldError, FieldLabel, Input } from 'praxisjona-website'

export const Canonical = () => (
  <Field className="max-w-sm">
    <FieldLabel htmlFor="input-name">Vollständiger Name</FieldLabel>
    <Input id="input-name" defaultValue="Anna Schmidt" />
  </Field>
)

export const WithPlaceholder = () => (
  <Field className="max-w-sm">
    <FieldLabel htmlFor="input-birthdate">Geburtsdatum</FieldLabel>
    <Input id="input-birthdate" type="date" defaultValue="1985-04-12" />
    <FieldDescription>Bitte im Format TT.MM.JJJJ angeben.</FieldDescription>
  </Field>
)

export const Invalid = () => (
  <Field className="max-w-sm" data-invalid={true}>
    <FieldLabel htmlFor="input-email">E-Mail-Adresse</FieldLabel>
    <Input id="input-email" defaultValue="anna.schmidt@" aria-invalid={true} />
    <FieldError>Bitte geben Sie eine gültige E-Mail-Adresse ein.</FieldError>
  </Field>
)
