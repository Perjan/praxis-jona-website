import * as React from 'react'
import { Checkbox, FieldDescription, FieldLabel } from 'praxisjona-website'

export const Consent = () => (
  <div className="flex items-start gap-3 rounded-md border border-border p-4 max-w-sm">
    <Checkbox id="cb-consent" defaultChecked />
    <div className="flex flex-col gap-2">
      <FieldLabel htmlFor="cb-consent">Einwilligung zur Datenverarbeitung</FieldLabel>
      <FieldDescription>
        Ich willige ein, dass meine Angaben zur Vorbereitung meiner Behandlung
        gespeichert und verarbeitet werden.
      </FieldDescription>
    </div>
  </div>
)

export const Unchecked = () => (
  <div className="flex items-center gap-2 max-w-sm">
    <Checkbox id="cb-newsletter" />
    <FieldLabel htmlFor="cb-newsletter" className="font-normal">
      Newsletter der Praxis Jona abonnieren
    </FieldLabel>
  </div>
)

export const Invalid = () => (
  <div className="flex items-center gap-2 max-w-sm">
    <Checkbox id="cb-terms" aria-invalid={true} />
    <FieldLabel htmlFor="cb-terms" className="font-normal text-destructive">
      Bitte bestätigen Sie die Datenschutzerklärung.
    </FieldLabel>
  </div>
)
