import * as React from 'react'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  Input,
  Textarea,
} from 'praxisjona-website'

export const Canonical = () => (
  <FieldGroup className="max-w-sm">
    <Field>
      <FieldLabel htmlFor="group-name">Vollständiger Name</FieldLabel>
      <Input id="group-name" defaultValue="Anna Schmidt" />
    </Field>
    <Field>
      <FieldLabel htmlFor="group-occupation">Beruf</FieldLabel>
      <Input id="group-occupation" defaultValue="Grundschullehrerin" />
    </Field>
    <Field>
      <FieldLabel htmlFor="group-email">E-Mail-Adresse</FieldLabel>
      <Input id="group-email" type="email" defaultValue="anna.schmidt@example.de" />
    </Field>
  </FieldGroup>
)

export const MixedFields = () => (
  <FieldGroup className="max-w-sm">
    <Field>
      <FieldLabel htmlFor="group-complaints">Aktuelle Beschwerden</FieldLabel>
      <Textarea
        id="group-complaints"
        defaultValue="Anhaltende Müdigkeit und Konzentrationsschwäche seit etwa drei Monaten."
      />
    </Field>
    <Field>
      <FieldLabel htmlFor="group-medications">Aktuelle Medikamente</FieldLabel>
      <Input id="group-medications" defaultValue="L-Thyroxin 50 µg, morgens" />
      <FieldDescription>
        Bitte Dosierung und Einnahmezeitpunkt angeben.
      </FieldDescription>
    </Field>
  </FieldGroup>
)
