import * as React from 'react'
import { Progress } from 'praxisjona-website'

export const InProgress = () => (
  <div className="flex flex-col gap-2 max-w-sm w-full">
    <div className="flex items-center justify-between text-sm text-muted-foreground">
      <span>Anamnese-Fragebogen</span>
      <span>Schritt 4 von 9</span>
    </div>
    <Progress value={44} aria-label="Fortschritt Anamnese" />
  </div>
)

export const Complete = () => (
  <div className="flex flex-col gap-2 max-w-sm w-full">
    <div className="flex items-center justify-between text-sm text-muted-foreground">
      <span>Anamnese-Fragebogen</span>
      <span>Abgeschlossen</span>
    </div>
    <Progress value={100} aria-label="Fortschritt abgeschlossen" />
  </div>
)
