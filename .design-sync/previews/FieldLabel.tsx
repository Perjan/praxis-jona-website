import * as React from 'react'
import {
  Checkbox,
  Field,
  FieldLabel,
  Input,
} from 'praxisjona-website'

export const Canonical = () => (
  <Field className="max-w-sm">
    <FieldLabel htmlFor="label-birthdate">Geburtsdatum</FieldLabel>
    <Input id="label-birthdate" type="date" defaultValue="1985-04-12" />
  </Field>
)

export const Required = () => (
  <Field className="max-w-sm">
    <FieldLabel htmlFor="label-weight">
      Gewicht in kg <span className="text-destructive">*</span>
    </FieldLabel>
    <Input id="label-weight" type="number" defaultValue="68" />
  </Field>
)

export const InlineWithCheckbox = () => (
  <Field className="max-w-sm">
    <FieldLabel
      htmlFor="label-consent"
      className="flex items-center gap-2 font-normal"
    >
      <Checkbox id="label-consent" defaultChecked />
      Ich willige in die Verarbeitung meiner Gesundheitsdaten ein.
    </FieldLabel>
  </Field>
)
