import * as React from 'react'
import { Field, FieldError, FieldLabel, Textarea } from 'praxisjona-website'

export const Canonical = () => (
  <Field className="max-w-sm">
    <FieldLabel htmlFor="ta-complaints">Aktuelle Beschwerden</FieldLabel>
    <Textarea
      id="ta-complaints"
      defaultValue="Seit etwa drei Monaten wiederkehrende Kopfschmerzen und Müdigkeit am Nachmittag."
    />
  </Field>
)

export const WithPlaceholder = () => (
  <Field className="max-w-sm">
    <FieldLabel htmlFor="ta-allergies">Bekannte Allergien</FieldLabel>
    <Textarea
      id="ta-allergies"
      placeholder="z. B. Penicillin, Pollen, Nüsse ..."
    />
  </Field>
)

export const Invalid = () => (
  <Field className="max-w-sm" data-invalid={true}>
    <FieldLabel htmlFor="ta-medications">Aktuelle Medikamente</FieldLabel>
    <Textarea id="ta-medications" defaultValue="" aria-invalid={true} />
    <FieldError>Dieses Feld ist erforderlich.</FieldError>
  </Field>
)
