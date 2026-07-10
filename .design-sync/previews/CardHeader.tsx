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
      <CardTitle>Schilddrüsen-Diagnostik</CardTitle>
      <CardDescription>Ultraschall und Hormonanalyse</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">
        Abklärung von Über- oder Unterfunktion inklusive TSH-, fT3- und
        fT4-Bestimmung.
      </p>
    </CardContent>
  </Card>
)

export const TitleOnly = () => (
  <Card className="max-w-sm">
    <CardHeader>
      <CardTitle>Impfaufklärung</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">
        Persönliche Beratung zu empfohlenen Reise- und Standardimpfungen nach
        STIKO.
      </p>
    </CardContent>
  </Card>
)

export const StackedMeta = () => (
  <Card className="max-w-sm">
    <CardHeader>
      <CardDescription>Präventionsleistung</CardDescription>
      <CardTitle>Longevity-Check</CardTitle>
      <CardDescription>Dauer ca. 90 Minuten · nach Termin</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">
        Umfassende Standortbestimmung Ihrer Gesundheit mit Laborprofil und
        Lebensstil-Beratung.
      </p>
    </CardContent>
  </Card>
)
