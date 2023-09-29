"use client"

import Link from "next/link";
import { footerNavigation, socials } from "./FooterDataSource";
import { usePathname } from "next/navigation";
import { localeFromPathname } from "./Header";

function FooterColumn({ section }) {
  return (
    <>
      <Link href={section.href}><h3 className="text-sm font-semibold leading-6 text-gray-900">{section.title}</h3></Link>
      <ul role="list" className="mt-6 space-y-4">
        {section.items.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              rel="noopener noreferrer"
              scroll={false}
              data-umami-event={`footer-item-tapped-${item.name}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname)

  var navigation = footerNavigation
  var languageLabel = "Language"

  switch (locale) {
    default:
      navigation = footerNavigation
      break;
  }

  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="mt-8 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">

          <div className="flex space-x-6 md:order-2">
            {socials.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                scroll={false}
                className="text-gray-400 hover:text-gray-500"
                data-umami-event={`footer-item-tapped-${item.name}`}
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <div className="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
            &copy; {navigation.copyright}
            <ul role="list" className="flex space-x-2 items-center">
          {navigation.legal.items.map((item) => (
            <li key={item.name}>
            <Link
              href={item.href}
              className=" hover:text-gray-900"
              rel="noopener noreferrer"
              scroll={false}
              data-umami-event={`footer-item-tapped-${item.name}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
