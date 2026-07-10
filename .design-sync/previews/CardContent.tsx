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
        Nüchtern erscheinen ist nicht erforderlich. Bitte bringen Sie
        vorhandene Vorbefunde mit.
      </p>
    </CardContent>
  </Card>
)

export const StructuredList = () => (
  <Card className="max-w-sm">
    <CardHeader>
      <CardTitle>Vorsorgeuntersuchung</CardTitle>
      <CardDescription>Gesundheits-Check-up ab 35 Jahren</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
        <div className="flex items-center justify-between">
          <span>Blutbild &amp; Cholesterin</span>
          <span className="font-medium text-primary">inklusive</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Blutdruckmessung</span>
          <span className="font-medium text-primary">inklusive</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Beratungsgespräch</span>
          <span className="font-medium text-primary">inklusive</span>
        </div>
      </div>
    </CardContent>
  </Card>
)

export const ContentOnly = () => (
  <Card className="max-w-sm">
    <CardContent className="p-6">
      <p className="text-sm text-muted-foreground">
        Unsere Praxis bleibt am Freitag, den 3. Oktober, wegen des Feiertags
        geschlossen. In dringenden Fällen wenden Sie sich bitte an den
        ärztlichen Bereitschaftsdienst unter 116 117.
      </p>
    </CardContent>
  </Card>
)
