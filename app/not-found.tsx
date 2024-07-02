import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-5xl">Seite nicht gefunden</h1>
          <p className="mt-6 text-base leading-7 text-primaryLighter">Leider konnten wir die von Ihnen gesuchte Seite nicht finden.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primaryDarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Zurück zur Startseite
            </Link>
            <Link href="/kontakt" className="text-sm font-semibold text-primary">
            Kontakt zum Support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}