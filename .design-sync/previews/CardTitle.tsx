import * as React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'praxisjona-website'

export const Canonical = () => (
  <Card className="max-w-sm">
    <CardHeader>
      <CardTitle>Ernährungsberatung</CardTitle>
      <CardDescription>Individueller Ernährungsplan</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">
        Begleitung bei Gewichtsreduktion, Unverträglichkeiten und
        Stoffwechselerkrankungen.
      </p>
    </CardContent>
  </Card>
)

export const OnBrandColor = () => (
  <Card className="max-w-sm bg-primary text-primary-foreground">
    <CardHeader>
      <CardTitle>Vorsorgeuntersuchung</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm">
        Der gesetzliche Gesundheits-Check-up für alle Patientinnen und Patienten
        ab 35 Jahren.
      </p>
    </CardContent>
  </Card>
)

export const LongTitle = () => (
  <Card className="max-w-sm">
    <CardHeader>
      <CardTitle>Botulinumtoxin-Behandlung im Stirnbereich</CardTitle>
      <CardDescription>Ästhetische Sprechstunde</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">
        Sanfte Faltenglättung durch erfahrene ärztliche Hand.
      </p>
    </CardContent>
  </Card>
)
