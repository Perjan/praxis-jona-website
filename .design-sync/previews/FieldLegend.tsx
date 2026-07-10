import * as React from 'react'
import {
  FieldLabel,
  FieldLegend,
  FieldSet,
  RadioGroup,
  RadioGroupItem,
} from 'praxisjona-website'

export const Canonical = () => (
  <FieldSet className="max-w-sm">
    <FieldLegend>Wie schätzen Sie Ihre Stressbelastung ein?</FieldLegend>
    <RadioGroup defaultValue="mittel" className="flex-row flex-wrap gap-4">
      <FieldLabel className="flex items-center gap-2 font-normal">
        <RadioGroupItem value="niedrig" />
        niedrig
      </FieldLabel>
      <FieldLabel className="flex items-center gap-2 font-normal">
        <RadioGroupItem value="mittel" />
        mittel
      </FieldLabel>
      <FieldLabel className="flex items-center gap-2 font-normal">
        <RadioGroupItem value="hoch" />
        hoch
      </FieldLabel>
    </RadioGroup>
  </FieldSet>
)

export const ColumnLayout = () => (
  <FieldSet className="max-w-sm">
    <FieldLegend>Wie ernähren Sie sich überwiegend?</FieldLegend>
    <RadioGroup defaultValue="mediterran" className="gap-3">
      <FieldLabel className="flex items-center gap-2 font-normal">
        <RadioGroupItem value="mischköstlich" />
        mischköstlich
      </FieldLabel>
      <FieldLabel className="flex items-center gap-2 font-normal">
        <RadioGroupItem value="vegetarisch" />
        vegetarisch
      </FieldLabel>
      <FieldLabel className="flex items-center gap-2 font-normal">
        <RadioGroupItem value="vegan" />
        vegan
      </FieldLabel>
      <FieldLabel className="flex items-center gap-2 font-normal">
        <RadioGroupItem value="mediterran" />
        mediterran
      </FieldLabel>
    </RadioGroup>
  </FieldSet>
)
