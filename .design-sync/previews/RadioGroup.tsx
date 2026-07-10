import * as React from 'react'
import { FieldLabel, FieldLegend, FieldSet, RadioGroup, RadioGroupItem } from 'praxisjona-website'

export const Canonical = () => (
  <FieldSet className="max-w-sm">
    <FieldLegend>Nehmen Sie regelmäßig Medikamente ein?</FieldLegend>
    <RadioGroup defaultValue="ja" className="flex-row flex-wrap gap-4">
      <FieldLabel className="flex items-center gap-2 font-normal">
        <RadioGroupItem value="ja" />
        Ja
      </FieldLabel>
      <FieldLabel className="flex items-center gap-2 font-normal">
        <RadioGroupItem value="nein" />
        Nein
      </FieldLabel>
    </RadioGroup>
  </FieldSet>
)

export const Vertical = () => (
  <FieldSet className="max-w-sm">
    <FieldLegend>Wie schätzen Sie Ihre Schlafqualität ein?</FieldLegend>
    <RadioGroup defaultValue="gut" className="gap-3">
      <FieldLabel className="flex items-center gap-2 font-normal">
        <RadioGroupItem value="gut" />
        Gut
      </FieldLabel>
      <FieldLabel className="flex items-center gap-2 font-normal">
        <RadioGroupItem value="mittel" />
        Mittel
      </FieldLabel>
      <FieldLabel className="flex items-center gap-2 font-normal">
        <RadioGroupItem value="schlecht" />
        Schlecht
      </FieldLabel>
    </RadioGroup>
  </FieldSet>
)
