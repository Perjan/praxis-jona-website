'use client';
import Link from 'next/link';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import {
  BuildingOffice2Icon,
  CalendarDaysIcon,
  ClockIcon,
  EnvelopeIcon,
  MapIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

// create a form handler that sends the email using our api endpoint for sendgrid
const formHandler = async (event) => {
  event.preventDefault();

  const form = event.target;
  const data = new FormData(form);

  //  Turn form data into object
  const formDataObj = Array.from(data.entries()).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );

  const response = await fetch('/api/sendgrid', {
    method: 'POST',
    body: JSON.stringify(formDataObj),
  });

  if (response.ok) {
    if (response.status === 200) {
      //setEmail("");
      toast.success("Message sent successfully!");
    }
  } else {
    toast.error("There was an error. Please try again later.");
  }

  return response;
};

export function ReusableButton({ url, title }) {
  return (
    <Link
      href={url}
      target='_blank'
      className="block rounded-xl bg-primary py-1 lg:py-2.5 px-4 lg:px-6 text-base font-serif leading-7 text-white hover:bg-primaryDarker"
    >{title}
    </Link>
  )
}

export default function ContactSection() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div id='contact' className='relative isolate bg-white'>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl space-y-8 lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">

                <h2 className="text-3xl col-span-1 font-semibold font-serif tracking-tight text-primary">Kontakt</h2>

                <div className="rounded-2xl bg-lightBeige bg-opacity-40 p-10 col-span-3">
                  <h3 className="text-2xl font-semibold font-serif leading-7 text-primary flex items-center">
                    <CalendarDaysIcon className="h-8 w-8 mr-2" aria-hidden="true" /> Terminvergabe
                  </h3>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                  {/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:col-span-3 lg:gap-8">
                    <dl className="mt-3 space-y-1 text-md leading-6 text-primaryLighter">
                      <div className="flex flex-col justify-between h-full">
                        <address className="mt-3 space-y-1 text-md not-italic leading-6 text-primaryLighter">
                          <p>Sie haben die Möglichkeit Ihren Termin online über Doctolib zu buchen. Nutzen Sie dazu einfach den Doctolib-Button.</p>
                        </address>
                        <div className='mt-8'>
                          <ReusableButton url="#" title={"Doctolib"} />
                        </div>
                      </div>
                    </dl> */}
                    <dl className="mt-3 space-y-1 text-md leading-6 text-primaryLighter">
                      <div className="flex flex-col justify-between h-full">
                        <address className="mt-3 space-y-1 text-md not-italic leading-6 text-primaryLighter">
                          <p>Gerne können Sie Ihren Termin auch per E-Mail anfragen:</p>
                          <p className='pt-4 font-bold'>info@praxisjona.de</p>
                          <p className='pt-4'>Schreiben Sie uns Ihren Terminwunsch mit alternativen Terminvorschlägen. Und geben Sie bitte auch Ihre Telefon-nummer für evtl. Rückfragen an.</p>
                        </address>
                        <div className='mt-8'>
                          <ReusableButton url="mailto:info@praxisjona.de" title={"Email"} />
                        </div>
                      </div>
                    </dl>
                    <dl className="mt-3 space-y-1 text-md leading-6 text-primaryLighter">
                      <div className="flex flex-col justify-between h-full">
                        <address className="mt-3 space-y-1 text-md not-italic leading-6 text-primaryLighter">
                          <p>Für die Terminvereinbarung erreichen Sie uns während unserer Sprechzeiten telefonisch unter:</p>
                          <p className='pt-4 font-bold'>030 / 40054273</p>
                        </address>
                        <div className='mt-8'>
                          <ReusableButton url="tel://03040054273" title={"Telefonisch"} />
                        </div>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>


              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-8 lg:gap-8">
                <div className='col-span-2'></div>
                <div className="rounded-2xl bg-lightBeige bg-opacity-40  p-10 col-span-3">
                  <h3 className="text-2xl font-semibold font-serif leading-7 text-primary flex items-center">
                    <ClockIcon className="h-8 w-8 mr-2" aria-hidden="true" /> Sprechzeiten
                  </h3>
                  <dl className="mt-3 space-y-1 text-md leading-6 text-gray-600">
                    <div>
                      <dd>
                        <div className="grid grid-cols-1 gap-8 grid-cols-3 text-primaryLighter">
                          <div className='col-span-1'>
                            <p>Montag</p>
                            <p>Dienstag</p>
                            <p>Mittwoch</p>
                            <p>Donnerstag</p>
                            <p>Freitag</p>
                          </div>
                          <div className='col-span-2'>
                            <p>8 - 12 | 15 - 18</p>
                            <p>08:30 - 14:30</p>
                            <p>08:30 - 14:30</p>
                            <p>12:00 - 17:00</p>
                            <p>08:30 - 12:30</p>
                          </div>
                        </div>
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="rounded-2xl bg-lightBeige bg-opacity-40  p-10 col-span-3">
                  <h3 className="text-2xl font-semibold font-serif leading-7 text-primary flex items-center">
                    <PhoneIcon className="h-8 w-8 mr-2" aria-hidden="true" /> Kontakt
                  </h3>
                  <dl className="mt-3 space-y-1 text-md leading-6 text-gray-600">
                    <div>
                      <dd>
                        <p className="text-md leading-6 text-primaryLighter">
                          Tel: <a href="tel://03040054273" style={{ textDecoration: 'underline' }}>030 / 40054273</a>
                        </p>
                      </dd>
                      <dd>
                        <p className="text-md leading-6 text-primaryLighter">
                          Fax: <a href="tel://03040054275" style={{ textDecoration: 'underline' }}>030 / 40054275</a>
                        </p>
                      </dd>
                      <dd>
                        <p className="text-md mt-2 leading-6 text-primaryLighter">
                          Email: <a href="mailto:info@praxisjona.de" style={{ textDecoration: 'underline' }}>info@praxisjona.de</a>
                        </p>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-8 lg:gap-8">
                <div className='col-span-2'></div>
                <div className="rounded-2xl bg-lightBeige bg-opacity-40  p-10 col-span-3">
                  <h3 className="text-2xl font-semibold font-serif leading-7 text-primary flex items-center">
                    <MapIcon className="h-8 w-8 mr-2" aria-hidden="true" /> Adresse
                  </h3>
                  <dl className="mt-3 space-y-1 text-md leading-6 text-primaryLighter">
                    <div>
                      <dd>
                        <p>Praxis Jona</p>
                        <p>Torstraße 125</p>
                        <p>10119, Berlin</p>
                        <p className='pt-4'>Öffentliche Parkmöglichkeiten finden Sie umliegend um die Praxis.</p>
                      </dd>
                      <div className='mt-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4'>
                        <ReusableButton url="https://maps.app.goo.gl/bBYgMkkHZrF6z1gy9" title={"Google Maps"} />
                        <ReusableButton url="https://maps.apple.com/?address=Torstra%C3%9Fe%20125,%20Mitte,%2010119%20Berlin,%20Germany&ll=52.529748,13.400656&q=Torstra%C3%9Fe%20125" title={"Apple Maps"} />
                      </div>
                    </div>
                  </dl>
                </div>

                <div className="rounded-2xl bg-lightBeige bg-opacity-40  p-10 col-span-3 flex flex-col">
                  <h3 className="text-2xl font-semibold font-serif leading-7 text-primary flex items-center">
                    <MapPinIcon className="h-8 w-8 mr-2" aria-hidden="true" /> Anfahrt mit ÖVPN
                  </h3>
                  <dl className="mt-3 space-y-1 text-md leading-6 text-primaryLighter flex-grow">
                    <div className="flex flex-col justify-between h-full">
                      <dd>
                        <p>Tram M2, M5, M8 Haltestelle: U Rosenthaler Platz.</p>
                        <p>Fußweg: ca. 150 m</p>
                        <p>U8 Haltestelle: Rosenthaler Platz</p>
                        <p>Fußweg: ca. 20m</p>
                      </dd>
                      <div className='mt-8'>
                        <ReusableButton url="https://www.bvg.de/de/verbindungen/verbindungssuche" title={"BVG-Routenplaner"} />
                      </div>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
