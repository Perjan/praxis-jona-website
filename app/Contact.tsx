'use client';
import Link from 'next/link';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { isEmail } from './NewsletterSection';

import {
  BuildingOffice2Icon,
  EnvelopeIcon,
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

export default function ContactSection() {
  
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div id='contact' className='relative isolate bg-white'>
        <div className='mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2'>
          <div className='relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48'>
            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
              <div className='absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2'>
                <svg
                  className='absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
                  aria-hidden='true'
                >
                  <defs>
                    <pattern
                      id='83fd4e5a-9d52-42fc-97b6-718e5d7ee527'
                      width={200}
                      height={200}
                      x='100%'
                      y={-1}
                      patternUnits='userSpaceOnUse'
                    >
                      <path d='M130 200V.5M.5 .5H200' fill='none' />
                    </pattern>
                  </defs>
                  <rect
                    width='100%'
                    height='100%'
                    strokeWidth={0}
                    fill='white'
                  />
                  <svg
                    x='100%'
                    y={-1}
                    className='overflow-visible fill-gray-50'
                  >
                    <path d='M-470.5 0h201v201h-201Z' strokeWidth={0} />
                  </svg>
                  <rect
                    width='100%'
                    height='100%'
                    strokeWidth={0}
                    fill='url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)'
                  />
                </svg>
              </div>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900'>
                Meet Us
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                You can find us pushing code and developing the future of
                Realtime Screen Time here:
              </p>
              <dl className='mt-10 space-y-4 text-base leading-7 text-gray-600 whitespace-pre-line'>
                <div className='flex gap-x-4'>
                  <dt className='flex-none'>
                    <span className='sr-only'>Address</span>
                    <BuildingOffice2Icon
                      className='h-7 w-6 text-gray-400'
                      aria-hidden='true'
                    />
                  </dt>
                  <dd>
                    {
                      'c/o Volkssolidarität e. V.\nAlte Schönhauser Straße 16\n10119 Berlin'
                    }
                  </dd>
                </div>
                <div className='flex gap-x-4'>
                  <dt className='flex-none'>
                    <span className='sr-only'>Email</span>
                    <EnvelopeIcon
                      className='h-7 w-6 text-gray-400'
                      aria-hidden='true'
                    />
                  </dt>
                  <dd>
                    <a
                      className='hover:text-gray-900'
                      href='mailto:info@appscreentime.com'
                    >
                      info[at]appscreentime.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form
            onSubmit={async () => {
              const response = await formHandler(event);
              if (response.ok) {
                setEmail("")
                setName("")
                setMessage("")
              }
            }

            }
            className='px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48'
          >
            <div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900'>
                Contact Us
              </h2>
              <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
                <div className='mt-8'>
                  <label
                    htmlFor='first-name'
                    className='block text-sm font-semibold leading-6 text-gray-900'
                  >
                    Name
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='text'
                      name='first-name'
                      id='name'
                      value={name}
                      required
                      autoComplete='given-name'
                      className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      onChange={ (e) => {
                        const name = e.target.value;
                        setName(name)
                      }}
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='email'
                    className='block text-sm font-semibold leading-6 text-gray-900'
                  >
                    Email
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      value={email}
                      required
                      autoComplete='email'
                      className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      onChange={ (e) => {
                        const email = e.target.value;
                        setEmail(email)
                        // setButtonDisabled();
                      }}
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='message'
                    className='block text-sm font-semibold leading-6 text-gray-900'
                  >
                    Message
                  </label>
                  <div className='mt-2.5'>
                    <textarea
                      name='message'
                      id='message'
                      value={message}
                      rows={4}
                      required
                      className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      onChange={ (e) => {
                        const message = e.target.value;
                        setMessage(message)
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className='mt-8 flex justify-end'>
                <button
                  disabled={!isEmail(email) || !name || !message}
                  type='submit'
                  className='disabled:opacity-70 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm enabled:hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
