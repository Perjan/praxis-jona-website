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

export const SingleAction = () => (
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

export const TwoButtons = () => (
  <Card className="max-w-sm">
    <CardHeader>
      <CardTitle>Ernährungsberatung</CardTitle>
      <CardDescription>Individueller Ernährungsplan</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">
        Erstgespräch mit Anamnese und persönlicher Zielsetzung für Ihre
        Ernährung.
      </p>
    </CardContent>
    <CardFooter className="justify-between gap-2">
      <Button variant="outline">Mehr erfahren</Button>
      <Button>Termin buchen</Button>
    </CardFooter>
  </Card>
)

export const PriceAndAction = () => (
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
    <CardFooter className="justify-between">
      <span className="text-lg font-semibold text-primary">ab 249 €</span>
      <Button>Termin buchen</Button>
    </CardFooter>
  </Card>
)
