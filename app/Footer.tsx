import Link from "next/link"

const navigation = {
  solutions: [
    { name: 'Montag: 8:00 - 12:00 | 15:00 - 18:00' },
    { name: 'Dienstag: 8:30 - 14:30' },
    { name: 'Mittwoch: 8:30 - 12:30' },
    { name: 'Donnerstag: 12:00 - 17:00' },
    { name: 'Freitag: 8:30 - 12:30' },
    { name: 'Samstag: Geschlossen' },
    { name: 'Sonntag: Geschlossen' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'Team', href: '/team' },
    { name: 'Blog', href: '/blog' },
    { name: 'Aktuelles', href: '#' },
  ],
}

export const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
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
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  }
]

export default function Example() {
  return (
    <footer className="bg-stone-100" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-4 xl:gap-16">
          <div>
            <h3 className="text-sm font-semibold font-serif leading-6 text-gray-900">Standort</h3>
            <p className="text-sm mt-6 leading-6 text-gray-600">
              Torstraße 125
            </p>
            <p className="text-sm leading-6 text-gray-600">
            10119, Berlin
            </p>
            <p className="text-sm mt-2 leading-6 text-gray-600">
              <a href="https://maps.app.goo.gl/bBYgMkkHZrF6z1gy9" target="_blank" style={{ textDecoration: 'underline' }}>Öffnen in Google Maps</a>
            </p>
            <p className="text-sm leading-6 text-gray-600">
            <a href="https://maps.apple.com/?address=Torstra%C3%9Fe%20125,%20Mitte,%2010119%20Berlin,%20Germany&ll=52.529748,13.400656&q=Torstra%C3%9Fe%20125" target="_blank" style={{ textDecoration: 'underline' }}>Öffnen in Apple Maps</a>
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold font-serif leading-6 text-gray-900">Kontakt</h3>
            <p className="text-sm mt-6 leading-6 text-gray-600">
              Tel: <a href="tel://03040054273" style={{ textDecoration: 'underline' }}>030 / 40054273</a>
            </p>
            <p className="text-sm leading-6 text-gray-600">
              Fax: <a href="#" style={{ textDecoration: 'underline' }}>030 / 40054275</a>
            </p>
              <p className="text-sm mt-2 leading-6 text-gray-600">
            Email: <a href="mailto:info@praxisjona.de" style={{ textDecoration: 'underline' }}>info@praxisjona.de</a>
            </p>
          </div>
          <div>
            <div>
              <h3 className="text-sm font-semibold font-serif leading-6 text-gray-900">Öffnungszeiten</h3>
              <ul role="list" className="mt-6 space-y-2">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <p className="text-sm leading-6 text-gray-600">
                      {item.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
            <div>
              <h3 className="text-sm font-semibold font-serif leading-6 text-gray-900">Praxis</h3>
              <ul role="list" className="mt-6 space-y-2">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
          <div>
          <p className="text-xs leading-5 text-gray-500">&copy; 2024 Praxis Jona, Inc. All rights reserved.</p>
          <a href="" className="text-xs leading-6 text-gray-500 hover:text-gray-600" style={{ textDecoration: 'underline' }}>
                      Impressum
                    </a>
                    <a href="" className="text-xs pl-2 leading-6 text-gray-500 hover:text-gray-600" style={{ textDecoration: 'underline' }}>
                      Datenschutz
                    </a>
          </div>

          <div className="flex space-x-6 md:order-2">
            {socials.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                scroll={false}
                className="text-gray-400 hover:text-gray-500"
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
