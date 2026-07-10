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
      <CardTitle>Eiseninfusion</CardTitle>
      <CardDescription>Bei nachgewiesenem Eisenmangel</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">
        Direkte Zufuhr von Eisen über die Vene, wenn Tabletten nicht vertragen
        werden.
      </p>
    </CardContent>
  </Card>
)

export const LongDescription = () => (
  <Card className="max-w-sm">
    <CardHeader>
      <CardTitle>Longevity-Check</CardTitle>
      <CardDescription>
        Umfassende Bestandsaufnahme Ihrer Gesundheit mit ausführlichem
        Laborprofil, Belastungs-EKG und persönlicher Auswertung Ihrer
        Lebensstilfaktoren.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">
        Ideal zur Früherkennung und langfristigen Gesundheitsplanung.
      </p>
    </CardContent>
  </Card>
)

export const OnBrandSurface = () => (
  <div className="rounded-xl bg-lightBeige p-6">
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Impfaufklärung</CardTitle>
        <CardDescription>Beratung nach STIKO-Empfehlung</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Standard-, Reise- und Auffrischungsimpfungen für die ganze Familie.
        </p>
      </CardContent>
    </Card>
  </div>
)
