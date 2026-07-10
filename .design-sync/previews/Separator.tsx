import * as React from 'react'
import { Separator } from 'praxisjona-website'

export const Horizontal = () => (
  <div className="flex flex-col gap-3 max-w-sm w-full">
    <span className="text-sm font-medium">Persönliche Angaben</span>
    <Separator />
    <span className="text-sm text-muted-foreground">Medizinische Vorgeschichte</span>
  </div>
)

export const Vertical = () => (
  <div className="flex items-center gap-4 text-sm" style={{ height: 40 }}>
    <span className="font-medium">Praxis Jona</span>
    <Separator orientation="vertical" />
    <span className="text-muted-foreground">Berlin-Mitte</span>
    <Separator orientation="vertical" />
    <span className="text-muted-foreground">Anamnese</span>
  </div>
)
