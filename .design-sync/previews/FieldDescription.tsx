import * as React from 'react'
import {
  Checkbox,
  Field,
  FieldDescription,
  FieldLabel,
  Input,
} from 'praxisjona-website'

export const Canonical = () => (
  <Field className="max-w-sm">
    <FieldLabel htmlFor="desc-insurance">Versichertennummer</FieldLabel>
    <Input id="desc-insurance" placeholder="A123456789" />
    <FieldDescription>
      Sie finden die Nummer auf der Vorderseite Ihrer Versichertenkarte.
    </FieldDescription>
  </Field>
)

export const WithConsentCheckbox = () => (
  <Field className="max-w-sm rounded-md border p-4">
    <div className="flex items-start gap-3">
      <Checkbox id="desc-consent" defaultChecked />
      <div className="flex flex-col gap-2">
        <FieldLabel htmlFor="desc-consent">Einwilligung zur Datenverarbeitung</FieldLabel>
        <FieldDescription>
          Ich willige ein, dass die Praxis Jona meine Angaben zur medizinischen
          Behandlung und zur Erstellung meines Longevity-Programms verarbeitet.
        </FieldDescription>
      </div>
    </div>
  </Field>
)
