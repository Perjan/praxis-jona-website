"use client"

import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export function isEmail(email: string): boolean {
  // Email regex pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}

type NewsletterSectionProps = {
  title: string
  description: string
  subscribeButtonText: string
  emailAddressPlaceholder: string
  successMessage: string
  errorMessage: string
  weeklyArticles: string,
  weeklyArticlesDescription: string,
  noSpam: string,
  noSpamDescription: string,
};

export const defaultNewsletterSectionProps: NewsletterSectionProps = {
  title: "Subscribe to our newsletter",
  description: "Ever wondered what it takes to run an independent app business? Then subscribe to our newsletter. I will share with you everything that is happening inside MoneyCoach.",
  subscribeButtonText: "Subscribe",
  emailAddressPlaceholder: "Enter your email",
  successMessage: "You have been subscribed to the newsletter.",
  errorMessage: "There was an error subscribing the user. Please try again later.",
  weeklyArticles: "Weekly articles",
  weeklyArticlesDescription: "Every week I write an article about the app business, the indie life, and more.",
  noSpam: "No spam",
  noSpamDescription: "I promise to never spam you. I will only send you emails that are relevant to you.",

};

export const italianNewsletterSectionProps: NewsletterSectionProps = {
  title: "Iscriviti alla nostra newsletter",
  description: "Ti sei mai chiesto cosa serve per gestire un'attività indipendente? Allora iscriviti alla nostra newsletter. Condividerò con te tutto ciò che sta accadendo all'interno di MoneyCoach.",
  subscribeButtonText: "Iscriviti",
  emailAddressPlaceholder: "Inserisci la tua email",
  successMessage: "Ti sei iscritto alla newsletter.",
  errorMessage: "Si è verificato un errore durante l'iscrizione dell'utente. Riprova più tardi.",
  weeklyArticles: "Articoli settimanali",
  weeklyArticlesDescription: "Ogni settimana scrivo un articolo sull'attività dell'app, sulla vita indie e altro ancora.",
  noSpam: "Nessuna spam",
  noSpamDescription: "Prometto di non mandarti mai spam. Ti invierò solo e-mail che ti riguardano.",
};

export default function NewsletterSection( params: { props: NewsletterSectionProps } ) {

const [email, setEmail] = useState("");

  return (
    <>
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{params.props.title}</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              {params.props.description}
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                {params.props.emailAddressPlaceholder}
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                value={email}
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-greenColor sm:text-sm sm:leading-6"
                placeholder={params.props.emailAddressPlaceholder}
                onChange={ (e) => {
                  const email = e.target.value;
                  setEmail(email)
                }}
              />
              <button
                disabled={!isEmail(email)}
                type="submit"
                className="flex-none rounded-md bg-primary py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm enabled:hover:bg-primaryDarker disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                onClick={async () => {
                  // setButtonDisabled(true);
                  const response = await fetch('/api/mailchimp', {
                    method: 'POST',
                    body: JSON.stringify(email),
                  });
                
                  if (response.ok) {
                    if (response.status === 200) {
                      // Success! The user has been subscribed to the list.
                    setEmail("");
                    toast.success(params.props.successMessage);
                    }
                  } else {
                    // There was an error subscribing the user. Handle the error here.
                    toast.error(params.props.errorMessage);
                  }
                }}
              >
                {params.props.subscribeButtonText}
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">{params.props.weeklyArticles}</dt>
              <dd className="mt-2 leading-7 text-gray-400">{params.props.weeklyArticlesDescription}</dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">{params.props.noSpam}</dt>
              <dd className="mt-2 leading-7 text-gray-400">{params.props.noSpamDescription}</dd>
            </div>
          </dl>
        </div>
      </div>
      <svg
        className="absolute top-0 left-1/2 -z-10 h-[42.375rem] -translate-x-1/2 blur-3xl xl:-top-6"
        viewBox="0 0 1155 678"
        fill="none"
      >
        <path
          fill="url(#09dbde42-e95c-4b47-a4d6-0c523c2fca9a)"
          fillOpacity=".3"
          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
        />
        <defs>
          <linearGradient
            id="09dbde42-e95c-4b47-a4d6-0c523c2fca9a"
            x1="1155.49"
            x2="-78.208"
            y1=".177"
            y2="474.645"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9089FC" />
            <stop offset={1} stopColor="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    </>
  )
}
