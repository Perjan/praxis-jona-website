import * as React from 'react'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from 'praxisjona-website'

export const Canonical = () => (
  <Card className="max-w-sm">
    <CardHeader>
      <CardTitle>Vorsorgeuntersuchung</CardTitle>
      <CardDescription>Gesundheits-Check-up ab 35 Jahren</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">
        Umfassende Untersuchung inklusive Blutbild, Blutdruckmessung und
        ausführlichem Beratungsgespräch.
      </p>
    </CardContent>
  </Card>
)

export const WithFooter = () => (
  <Card className="max-w-sm">
    <CardHeader>
      <CardTitle>Eiseninfusion</CardTitle>
      <CardDescription>Bei nachgewiesenem Eisenmangel</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">
        Dauer ca. 30 Minuten. Eine vorherige Blutuntersuchung ist erforderlich.
      </p>
    </CardContent>
    <CardFooter>
      <Button>Termin buchen</Button>
    </CardFooter>
  </Card>
)

export const OnBrandSurface = () => (
  <div className="rounded-xl bg-lightBeige p-6">
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Botulinumtoxin</CardTitle>
        <CardDescription>Ästhetische Behandlung</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Faltenbehandlung im Stirn- und Augenbereich, individuell abgestimmt.
        </p>
      </CardContent>
    </Card>
  </div>
)
