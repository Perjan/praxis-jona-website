import * as React from 'react'
import { Button } from 'praxisjona-website'

export const Canonical = () => <Button>Termin buchen</Button>

export const Variants = () => (
  <div className="flex flex-wrap items-center gap-3">
    <Button variant="default">Termin buchen</Button>
    <Button variant="secondary">Mehr erfahren</Button>
    <Button variant="outline">Zurück</Button>
    <Button variant="ghost">Abbrechen</Button>
    <Button variant="destructive">Termin absagen</Button>
  </div>
)

export const Sizes = () => (
  <div className="flex flex-wrap items-center gap-3">
    <Button size="sm">Klein</Button>
    <Button size="default">Standard</Button>
    <Button size="lg">Groß</Button>
  </div>
)

export const Disabled = () => (
  <div className="flex flex-wrap items-center gap-3">
    <Button disabled>Wird gesendet …</Button>
    <Button variant="outline" disabled>
      Nicht verfügbar
    </Button>
  </div>
)
