"use client"
import Link from "next/link"
import { Constants } from "./Constants"
import { usePathname } from "next/navigation";
import { localeFromPathname } from "./Header";

const navigationGerman = {
  copyright: "© 2024 Praxis Jona. Alle Rechte vorbehalten.",
  imprint: "Impressum und Datenschutz",
  company: [
    { name: 'Team', href: '/team' },
    { name: 'Blog', href: '/blog' },
    { name: 'Aktuelles', href: '/aktuelles' },
  ],
}

const navigationEnglish = {
  copyright: "© 2024 Praxis Jona. All rights reserved.",
  imprint: "Imprint and Privacy",
  company: [
    { name: 'Team', href: '/en/team' },
    { name: 'Blog', href: '/blog' },
    { name: 'Latest News', href: '/en/latest-news' },
  ],
}

export const socials = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/jonidagjolli?igsh=NWt2YTg1eHcycHh1',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    )
  },
]

export default function Page() {
  const contact = Constants.contact
  const pathname = usePathname();
  const locale = localeFromPathname(pathname)

  var openingHours = Constants.openingHours

  var navigation = navigationGerman
  var languageLabel = "Sprache"
  var addressLabel = "Standort"
  var contactLabel = "Kontakt"
  var openingHoursLabel = "Öffnungszeiten"
  var googleMapsLabel = "Öffnen in Google Maps"
  var appleMapsLabel = "Öffnen in Apple Maps"

  switch (locale) {
    case "en":
      navigation = navigationEnglish
      openingHours = Constants.openingHours;
      languageLabel = "Language"
      addressLabel = "Location"
      contactLabel = "Contact"
      openingHoursLabel = "Consultation Hours"
      googleMapsLabel = "Open in Google Maps"
      appleMapsLabel = "Open in Apple Maps"
      break;
    default:
      navigation = navigationGerman
      break;
  }

  return (
    <footer className="bg-stone-100" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-8 pt-12 sm:pt-16 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold font-serif leading-6 text-primary">{addressLabel}</h3>
            <div className="text-sm mt-2 text-primaryLighter">
              <p dangerouslySetInnerHTML={{ __html: Constants.address.replace(/\n/g, '<br />') }} />
            </div>
            <p className="text-sm mt-2 leading-6 text-primaryLighter">
              <a href="https://maps.app.goo.gl/bBYgMkkHZrF6z1gy9" target="_blank" className="underline">{googleMapsLabel}</a>
            </p>
            <p className="text-sm leading-6 text-primaryLighter">
              <a href="https://maps.apple.com/?address=Torstra%C3%9Fe%20125,%20Mitte,%2010119%20Berlin,%20Germany&ll=52.529748,13.400656&q=Torstra%C3%9Fe%20125" target="_blank" className="underline">{appleMapsLabel}</a>
            </p>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold font-serif leading-6 text-primary">{contactLabel}</h3>
            <p className="text-sm mt-2 leading-6 text-primaryLighter">
              Tel: <a href={contact.phoneUrl} className="underline">{contact.phone}</a>
            </p>
            <p className="text-sm leading-6 text-primaryLighter">
              Fax: <span className="">{contact.fax}</span>
            </p>
            <p className="text-sm mt-2 leading-6 text-primaryLighter">
              Email: <a href={contact.emailUrl} className="underline">{contact.email}</a>
            </p>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold font-serif leading-6 text-primary">{openingHoursLabel}</h3>
            <div className="grid text-sm grid-cols-1 text-primaryLighter grid-flow-col space-y-2">
              <div className='col-span-1'>
                {openingHours.map((item) => (
                  <div key={item.day} className="flex justify-center sm:justify-normal">
                    <div className="flex-none w-24 mt-2">
                      <p>{locale === "en" ? item.dayEn : item.day}</p>                    
                    </div>
                    <div className="flex-initial mt-2">
                      <p dangerouslySetInnerHTML={{ __html: item.hours.replace(/<br>/g, '<br />').replace("Geschlossen", locale === "en" ? 'Closed' : "Geschlossen")                      
                    }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold font-serif leading-6 text-primary">Praxis</h3>
            <ul role="list" className="mt-2 space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm leading-6 text-primaryLighter hover:text-primary underline">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-900/10 pt-8 flex flex-col items-center md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
          <p className="text-xs leading-5 text-primaryLighter">{navigation.copyright}</p>
            <Link href="/impressum-datenschutz" className="text-xs leading-6 text-primaryLighter hover:text-primary underline">
              {navigation.imprint}
            </Link>
            <div className="mt-8 text-xs space-x-1 leading-5 text-gray-500 md:order-1 md:mt-0">
                <span>{languageLabel}:</span>
                <Link href="/">🇩🇪 /</Link>
                <Link href="/en">🇬🇧</Link>
              </div>
          </div>
          <div className="flex mt-4 md:mt-0 space-x-6">
            {socials.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                scroll={false}
                className="text-primaryLighter hover:text-primary"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
