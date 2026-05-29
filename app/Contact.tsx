import PrimaryButton from './components/PrimaryButton';

import {
  CalendarDaysIcon,
  ClockIcon,
  MapIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { Constants } from './Constants';

const openingHours = Constants.openingHours

const contactCopy = {
  de: {
    sectionTitle: "Kontakt",
    appointmentsTitle: "Terminvergabe",
    onlineBookingText: "Sie haben die Möglichkeit Ihren Termin online über Doctolib zu buchen. Nutzen Sie dazu einfach den Doctolib-Button.",
    onlineBookingButton: "Termin via Doctolib buchen",
    phoneBookingText: "Für die Terminvereinbarung erreichen Sie uns während unserer Sprechzeiten telefonisch unter:",
    phoneButton: "Anrufen",
    hoursTitle: "Sprechzeiten",
    contactTitle: "Kontakt",
    addressTitle: "Adresse",
    parkingText: "Öffentliche Parkmöglichkeiten finden Sie umliegend um die Praxis.",
    transitTitle: "Anfahrt mit ÖVPN",
    tramText: <>Tram M2, M5, M8 Haltestelle:<br /> U Rosenthaler Platz.</>,
    tramWalkText: "Fußweg: ca. 150 m",
    subwayText: "U8 Haltestelle: Rosenthaler Platz",
    subwayWalkText: "Fußweg: ca. 20m",
    bvgButton: "BVG-Routenplaner",
  },
  en: {
    sectionTitle: "Contact",
    appointmentsTitle: "Appointments",
    onlineBookingText: "You have the option to book your appointment online via Doctolib. Simply use the Doctolib button for this purpose.",
    onlineBookingButton: "Book online via Doctolib",
    phoneBookingText: "To make an appointment, you can reach us by telephone during our consultation hours at:",
    phoneButton: "Call",
    hoursTitle: "Consultation Hours",
    contactTitle: "Contact",
    addressTitle: "Address",
    parkingText: "Public parking is available in the area around the practice.",
    transitTitle: "Arrival by Public Transport",
    tramText: <>Tram M2, M5, M8 <br />Bus stop: U Rosenthaler Platz.</>,
    tramWalkText: "Footpath: approx. 150 m",
    subwayText: "U8 Bus stop: Rosenthaler Platz",
    subwayWalkText: "Footpath: approx. 20m",
    bvgButton: "BVG Route Planner",
  },
}

function localizedHours(item, locale: "de" | "en") {
  return {
    day: locale === "en" ? item.dayEn : item.day,
    hours: locale === "en" ? item.hours.replace("Geschlossen", "Closed") : item.hours,
  }
}

export default function ContactSection({ locale = "de" }: { locale?: "de" | "en" }) {
  const contact = Constants.contact
  const copy = contactCopy[locale]

  return (
    <>
      <div id='contact' className='relative isolate bg-white'>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl space-y-8 lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                <h2 className="text-3xl col-span-1 font-semibold font-serif tracking-tight text-primary">{copy.sectionTitle}</h2>

                <div className="rounded-2xl bg-lightBeige bg-opacity-40 p-10 col-span-3">
                  <h3 className="text-2xl font-semibold font-serif leading-7 text-primary flex items-center">
                    <CalendarDaysIcon className="h-8 w-8 mr-2" aria-hidden="true" /> {copy.appointmentsTitle}
                  </h3>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-1 lg:gap-8">
                    <div className="mt-3 space-y-1 text-md leading-6 text-primaryLighter">
                      <div className="flex flex-col justify-between h-full">
                        <address className="mt-3 space-y-1 text-md not-italic leading-6 text-primaryLighter">
                          <p>{copy.onlineBookingText}</p>
                        </address>
                        <div className='mt-8'>
                          <PrimaryButton href={Constants.appointmentUrl} target="_blank" fullWidth={true}>{copy.onlineBookingButton}</PrimaryButton>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 space-y-1 text-md leading-6 text-primaryLighter">
                      <div className="flex flex-col justify-between h-full">
                        <address className="mt-3 space-y-1 text-md not-italic leading-6 text-primaryLighter">
                          <p>{copy.phoneBookingText}</p>
                          <p className='pt-4'>
                            <a href={contact.phoneUrl} className='font-bold'>{contact.phone}</a>
                          </p>
                        </address>
                        <div className='mt-8'>
                          <PrimaryButton href={contact.phoneUrl} fullWidth={true}>{copy.phoneButton}</PrimaryButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-8 lg:gap-8">
                <div className='col-span-2'></div>
                <div className="rounded-2xl bg-lightBeige bg-opacity-40 p-10 col-span-3">
                  <h3 className="text-2xl font-semibold font-serif leading-7 text-primary flex items-center">
                    <ClockIcon className="h-8 w-8 mr-2" aria-hidden="true" /> {copy.hoursTitle}
                  </h3>

                  <div className="mt-3 space-y-1 text-md leading-6 text-gray-600">
                    <div className="grid grid-cols-1 text-primaryLighter grid-flow-col">
                      <div className='col-span-1'>
                        {openingHours.map((item) => {
                          const hours = localizedHours(item, locale)

                          return (
                            <div key={item.day} className="flex">
                              <div className="flex-none w-24">
                                <p>{hours.day}</p>
                              </div>
                              <div className="flex-initial">
                                <p dangerouslySetInnerHTML={{ __html: hours.hours.replace(/<br>/g, '<br />') }} />
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-lightBeige bg-opacity-40 p-10 col-span-3">
                  <h3 className="text-2xl font-semibold font-serif leading-7 text-primary flex items-center">
                    <PhoneIcon className="h-8 w-8 mr-2" aria-hidden="true" /> {copy.contactTitle}
                  </h3>
                  <div className="mt-3 space-y-1 text-md leading-6 text-gray-600">
                    <p className="text-md leading-6 text-primaryLighter">
                      Tel: <a href={contact.phoneUrl} style={{ textDecoration: 'underline' }}>{contact.phone}</a>
                    </p>
                    <p className="text-md leading-6 text-primaryLighter">
                      Fax: {contact.fax}
                    </p>
                    <p className="text-md mt-2 leading-6 text-primaryLighter">
                      Email: <a href={contact.emailUrl} style={{ textDecoration: 'underline' }}>{contact.email}</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-8 lg:gap-8">
                <div className='col-span-2'></div>
                <div className="rounded-2xl bg-lightBeige bg-opacity-40 p-10 col-span-3">
                  <h3 className="text-2xl font-semibold font-serif leading-7 text-primary flex items-center">
                    <MapIcon className="h-8 w-8 mr-2" aria-hidden="true" /> {copy.addressTitle}
                  </h3>
                  <div className="mt-3 space-y-1 text-md leading-6 text-primaryLighter">
                    <p className='font-bold'>Praxis Jona</p>
                    <p dangerouslySetInnerHTML={{ __html: Constants.address.replace(/\n/g, '<br />') }} />
                    <p className='pt-4'>{copy.parkingText}</p>
                    <div className='mt-8 flex flex-col justify-between sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4'>
                      <PrimaryButton href={Constants.contact.googleMapsUrl} target="_blank" fullWidth={true}>Google Maps</PrimaryButton>
                      <PrimaryButton href={Constants.contact.appleMapsUrl} target="_blank" fullWidth={true}>Apple Maps</PrimaryButton>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-lightBeige bg-opacity-40 p-10 col-span-3 flex flex-col">
                  <h3 className="text-2xl font-semibold font-serif leading-7 text-primary flex items-center">
                    <MapPinIcon className="h-8 w-8 mr-2" aria-hidden="true" /> {copy.transitTitle}
                  </h3>
                  <div className="mt-3 space-y-1 text-md leading-6 text-primaryLighter flex-grow">
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        <p>{copy.tramText}</p>
                        <p>{copy.tramWalkText}</p>
                        <p className='pt-4'>{copy.subwayText}</p>
                        <p>{copy.subwayWalkText}</p>
                      </div>
                      <div className='mt-8'>
                        <PrimaryButton href="https://www.bvg.de/de/verbindungen/verbindungssuche" target="_blank" fullWidth={true}>{copy.bvgButton}</PrimaryButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
