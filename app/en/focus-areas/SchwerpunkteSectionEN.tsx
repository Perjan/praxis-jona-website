"use client"

import { Dialog } from '@headlessui/react';
const { Panel: DialogPanel, Title: DialogTitle } = Dialog;

import { ChevronRightIcon } from '@heroicons/react/20/solid'; // Import the ChevronRightIcon component
import { SpecialtiesEN } from 'app/schwerpunkte/Specialties';

const title = "Specialty Areas"
const description = "Our practice focuses in particular on the treatment of Thyroid Disorders, High Blood Pressure, Lipid Metabolic Disorders and Nutritional Medicine."

export default function Page() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:mx-0">
          <h1 className="text-3xl font-serif tracking-tight text-primary sm:text-4xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-primaryLighter">{description}</p>
        </div>

        <ul role="list" className="mt-8 space-y-4 overflow-visible">
          {SpecialtiesEN.map((specialty) => (
            <li
              key={specialty.id}
              className="relative flex items-center gap-4 px-4 py-5 rounded-xl bg-lightBeige hover:bg-primary hover:bg-opacity-20 sm:px-6 lg:px-8 transition duration-300"
            >
              <a href={specialty.url} onClick={(e) => { }} className="flex justify-between items-center w-full">
                <div className="flex flex-col w-full">
                  <h3 className="text-2xl font-medium font-serif leading-6 text-primary">
                    {specialty.name}
                  </h3>
                  <p className="text-md pt-2 leading-6 pr-8 text-primaryLighter break-words">{specialty.description}</p>
                </div>
                <div className="flex items-center">
                  <ChevronRightIcon className="h-6 w-6 text-primary" /> {/* Add the ChevronRightIcon */}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}