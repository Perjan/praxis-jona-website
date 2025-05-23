import Link from 'next/link';
import toast from 'react-hot-toast';
import PrimaryButton from './components/PrimaryButton';

import {
  CalendarDaysIcon,
  ClockIcon,
  MapIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { Constants } from './Constants';

const openingHours = Constants.openingHours;

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

export default function ContactSection() {

  const contact = Constants.contact

  return (
    <>
      <div id='contact' className='relative isolate bg-white'>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl space-y-8 lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">

                <h2 className="text-3xl col-span-1 font-semibold font-serif tracking-tight text-primary">Contact</h2>

                <div className="rounded-2xl bg-lightBeige bg-opacity-40 p-10 col-span-3">
                  <h3 className="text-2xl font-semibold font-serif leading-7 text-primary flex items-center">
                    <CalendarDaysIcon className="h-8 w-8 mr-2" aria-hidden="true" /> Appointments
                  </h3>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-1 lg:gap-8">
                    <dl className="mt-3 space-y-1 text-md leading-6 text-primaryLighter">
                      <div className="flex flex-col justify-between h-full">
                        <address className="mt-3 space-y-1 text-md not-italic leading-6 text-primaryLighter">
                          <p>You have the option to book your appointment online via Doctolib. Simply use the Doctolib button for this purpose.</p>
                        </address>
                        <div className='mt-8'>
                          <PrimaryButton href={Constants.appointmentUrl} target="_blank" fullWidth={true}>Book online via Doctolib</PrimaryButton>
                        </div>
                      </div>
                    </dl>
                    {/* <dl className="mt-3 space-y-1 text-md leading-6 text-primaryLighter">
                      <div className="flex flex-col justify-between h-full">
                        <address className="mt-3 space-y-1 text-md not-italic leading-6 text-primaryLighter">
                          <p>Gerne können Sie Ihren Termin auch per E-Mail anfragen:</p>
                          <p className='pt-4 font-bold'>info@praxisjona.de</p>
                          <p className='pt-4'>Schreiben Sie uns Ihren Terminwunsch mit alternativen Terminvorschlägen. Und geben Sie bitte auch Ihre Telefon-nummer für evtl. Rückfragen an.</p>
                        </address>
                        <div className='mt-8'>
                          <PrimaryButton href="mailto:info@praxisjona.de" fullWidth={true}>Email</PrimaryButton>
                        </div>
                      </div>
                    </dl> */}
                    <dl className="mt-3 space-y-1 text-md leading-6 text-primaryLighter">
                      <div className="flex flex-col justify-between h-full">
                        <address className="mt-3 space-y-1 text-md not-italic leading-6 text-primaryLighter">
                          <p>To make an appointment, you can reach us by telephone during our consultation hours at:</p>
                          <p className='pt-4'>
                            <a href={contact.phoneUrl} className='font-bold'>{contact.phone}</a>
                          </p>
                        </address>
                        <div className='mt-8'>
                          <PrimaryButton href={contact.phoneUrl} fullWidth={true}>Call</PrimaryButton>
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
                    <ClockIcon className="h-8 w-8 mr-2" aria-hidden="true" />Consultation Hours
                  </h3>

                  <dl className="mt-3 space-y-1 text-md leading-6 text-gray-600">
                    <div>
                      <dd>
                        <div className="grid grid-cols-1 text-primaryLighter grid-flow-col">
                          <div className='col-span-1'>
                            {openingHours.map((item) => (
                              <div key={item.day} className="flex">
                                <div className="flex-none w-24">
                                  <p>{item.dayEn}</p>
                                </div>
                                <div className="flex-initial">
                                  <p dangerouslySetInnerHTML={{ __html: item.hours.replace(/<br>/g, '<br />').replace("Geschlossen", 'Closed') }} />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="rounded-2xl bg-lightBeige bg-opacity-40  p-10 col-span-3">
                  <h3 className="text-2xl font-semibold font-serif leading-7 text-primary flex items-center">
                    <PhoneIcon className="h-8 w-8 mr-2" aria-hidden="true" /> Contact
                  </h3>
                  <dl className="mt-3 space-y-1 text-md leading-6 text-gray-600">
                    <div>
                      <dd>
                        <p className="text-md leading-6 text-primaryLighter">
                          Tel: <a href={contact.phoneUrl} style={{ textDecoration: 'underline' }}>{contact.phone}</a>
                        </p>
                      </dd>
                      <dd>
                        <p className="text-md leading-6 text-primaryLighter">
                          Fax: {contact.fax}
                        </p>
                      </dd>
                      <dd>
                        <p className="text-md mt-2 leading-6 text-primaryLighter">
                          Email: <a href={contact.email} style={{ textDecoration: 'underline' }}>{contact.email}</a>
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
                    <MapIcon className="h-8 w-8 mr-2" aria-hidden="true" /> Address
                  </h3>
                  <dl className="mt-3 space-y-1 text-md leading-6 text-primaryLighter">
                    <div>
                      <dd>
                        <p className='font-bold'>Praxis Jona</p>
                        <p dangerouslySetInnerHTML={{ __html: Constants.address.replace(/\n/g, '<br />') }} />
                        <p className='pt-4'>Public parking is available in the area around the practice.</p>
                      </dd>
                      <div className='mt-8 flex flex-col justify-between sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4'>
                        <PrimaryButton href={Constants.contact.googleMapsUrl} target="_blank" fullWidth={true}>Google Maps</PrimaryButton>
                        <PrimaryButton href={Constants.contact.appleMapsUrl} target="_blank" fullWidth={true}>Apple Maps</PrimaryButton>
                      </div>
                    </div>
                  </dl>
                </div>

                <div className="rounded-2xl bg-lightBeige bg-opacity-40  p-10 col-span-3 flex flex-col">
                  <h3 className="text-2xl font-semibold font-serif leading-7 text-primary flex items-center">
                    <MapPinIcon className="h-8 w-8 mr-2" aria-hidden="true" /> Arrival by Public Transport
                  </h3>
                  <dl className="mt-3 space-y-1 text-md leading-6 text-primaryLighter flex-grow">
                    <div className="flex flex-col justify-between h-full">
                      <dd>
                        <p>Tram M2, M5, M8 <br></br>Bus stop: U Rosenthaler Platz.</p>
                        <p>Footpath: approx. 150 m</p>
                        <p className='pt-4'>U8 Bus stop: Rosenthaler Platz</p>
                        <p>Footpath: approx. 20m</p>
                      </dd>
                      <div className='mt-8'>
                        <PrimaryButton href="https://www.bvg.de/de/verbindungen/verbindungssuche" target="_blank" fullWidth={true}>BVG Route Planner</PrimaryButton>
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