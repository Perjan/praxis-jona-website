import * as React from 'react'
import { FieldLabel, FieldLegend, FieldSet, RadioGroup, RadioGroupItem } from 'praxisjona-website'

export const InGroup = () => (
  <FieldSet className="max-w-sm">
    <FieldLegend>Rauchen Sie?</FieldLegend>
    <RadioGroup defaultValue="nein" className="flex-row flex-wrap gap-4">
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

export const AlcoholFrequency = () => (
  <FieldSet className="max-w-sm">
    <FieldLegend>Wie häufig trinken Sie Alkohol?</FieldLegend>
    <RadioGroup defaultValue="gelegentlich" className="gap-3">
      <FieldLabel className="flex items-center gap-2 font-normal">
        <RadioGroupItem value="nie" />
        Nie
      </FieldLabel>
      <FieldLabel className="flex items-center gap-2 font-normal">
        <RadioGroupItem value="gelegentlich" />
        Gelegentlich
      </FieldLabel>
      <FieldLabel className="flex items-center gap-2 font-normal">
        <RadioGroupItem value="taeglich" />
        Täglich
      </FieldLabel>
    </RadioGroup>
  </FieldSet>
)
