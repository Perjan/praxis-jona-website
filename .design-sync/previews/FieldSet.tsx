import * as React from 'react'
import {
  FieldError,
  FieldLabel,
  FieldLegend,
  FieldSet,
  RadioGroup,
  RadioGroupItem,
} from 'praxisjona-website'

export const Canonical = () => (
  <FieldSet className="max-w-sm">
    <FieldLegend>Wie ist Ihre Schlafqualität?</FieldLegend>
    <RadioGroup defaultValue="gut" className="flex-row flex-wrap gap-4">
      <FieldLabel className="flex items-center gap-2 font-normal">
        <RadioGroupItem value="gut" />
        gut
      </FieldLabel>
      <FieldLabel className="flex items-center gap-2 font-normal">
        <RadioGroupItem value="mittelmäßig" />
        mittelmäßig
      </FieldLabel>
      <FieldLabel className="flex items-center gap-2 font-normal">
        <RadioGroupItem value="schlecht" />
        schlecht
      </FieldLabel>
    </RadioGroup>
  </FieldSet>
)

export const Invalid = () => (
  <FieldSet className="max-w-sm" data-invalid={true}>
    <FieldLegend>Rauchen Sie?</FieldLegend>
    <RadioGroup className="flex-row flex-wrap gap-4" aria-invalid={true}>
      <FieldLabel className="flex items-center gap-2 font-normal">
        <RadioGroupItem value="ja" aria-invalid={true} />
        ja
      </FieldLabel>
      <FieldLabel className="flex items-center gap-2 font-normal">
        <RadioGroupItem value="nein" aria-invalid={true} />
        nein
      </FieldLabel>
    </RadioGroup>
    <FieldError>Bitte beantworten Sie diese Frage.</FieldError>
  </FieldSet>
)
