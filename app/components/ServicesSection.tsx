"use client"

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import { Services } from 'app/leistungen/Services'; 
import { ServicesEN } from 'app/leistungen/Services';
import ReactMarkdown from 'react-markdown';

const { Panel: DialogPanel, Title: DialogTitle } = Dialog;

export default function ServicesSection({ language = 'de' }) {
  // Choose services based on language
  const servicesData = language === 'en' ? ServicesEN : Services;
  
  // URL mapping for services that should redirect to dedicated pages
  const serviceUrlMapping = language === 'en' 
    ? {
        2: '/en/services/public-insurance-check-up', 
        5: '/en/botox-treatment',
        6: '/en/services/nutritional-medicine',
        7: '/en/services/ultrasound-examination',
        8: '/en/services/private-insurance-check-up',
        13: '/en/services/weight-loss-injection',
      }
    : {
        2: '/leistungen/gesetzliche-check-up',
        5: '/botox-behandlung',
        6: '/leistungen/ernaehrungsmedizin',
        7: '/leistungen/ultraschalluntersuchung',
        8: '/leistungen/private-check-up',
        9: '/leistungen/reiseimpfungen',
        10: '/leistungen/mikronahrstoffanalyse',
        11: '/leistungen/infusionstherapie',
        13: '/leistungen/abnehmspritze',
      };

  // Section titles based on language
  const sectionTitles = language === 'en'
    ? { 
        standard: "Standard Services", 
        additional: "Additional Services" 
      }
    : { 
        standard: "Gesetzliche Leistungen", 
        additional: "Private Leistungen (IGeL)" 
      };

  const [open, setOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleScrollToProduct = (id) => {
    const product = servicesData.find(p => p.id === id);
    setSelectedProduct(product);
    setOpen(true);
    const element = document.getElementById(`details-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Filter services by type
  const gesetzlicheLeistungen = servicesData.filter(service => service.type === 'gesetzliche');
  const privateLeistungen = servicesData.filter(service => service.type === 'private');

  // Function to render a list of services
  const renderServicesList = (services) => (
    <ul
      role="list"
      className="mx-4 grid grid-cols-1 gap-y-16 sm:mx-6 sm:gap-x-6 md:grid-cols-2 lg:mx-0 lg:grid-cols-4 lg:gap-x-8"
    >
      {services.map((product) => (
        <li 
          key={product.id} 
          className={`flex flex-col justify-between rounded-lg p-3 sm:p-6 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-shadow duration-300 text-center ${product.type === 'private' ? 'bg-gradient-to-br from-[#f5f5f7] to-[#e5e7eb] backdrop-blur-sm bg-opacity-50' : 'bg-[rgba(249,237,223,0.3)]'}`}
        >
          <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full">
              <a href={serviceUrlMapping[product.id] || `#details-${product.id}`} onClick={(e) => {
                if (!serviceUrlMapping[product.id]) {
                  e.preventDefault();
                  handleScrollToProduct(product.id);
                }
              }}>
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  width={280}
                  height={210}
                  className="w-2/3 sm:w-3/4 h-auto object-cover object-center mx-auto"
                />
              </a>
            </div>
            <div className="mt-3 sm:mt-6">
              <h3 className="text-base sm:text-lg font-semibold font-serif text-primary">
                <a href={serviceUrlMapping[product.id] || `#details-${product.id}`} onClick={(e) => {
                  if (!serviceUrlMapping[product.id]) {
                    e.preventDefault();
                    handleScrollToProduct(product.id);
                  }
                }}>
                  <span className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="bg-white">
      <Transition show={open}>
        <Dialog className="relative z-50" onClose={() => setOpen(false)}>
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-6">
                <div className="absolute right-0 top-0 pr-4 pt-6 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 max-w-3xl text-center sm:mt-0 sm:text-left">
                    <DialogTitle as="h3" className="text-2xl font-semibold text-primary">
                    {selectedProduct?.name}
                    </DialogTitle>
                    <div className="relative mt-6 flex-1 text-primaryLighter">
                        <div className="overflow-y-auto max-h-[500px] lg:max-h-[800px]">
                          <ReactMarkdown className="prose prose-p:text-base sm:prose-p:text-lg mx-auto sm:max-w-2xl md:max-w-7xl">
                            {selectedProduct?.description}
                          </ReactMarkdown>
                        </div>
                      </div>
                  </div>
                </div>
              </DialogPanel>
            </Transition.Child>
          </div>
        </div>
        </Dialog>
      </Transition>
      <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
        {/* Standard/Gesetzliche Services Section */}
        <div>
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
            <h2 className="text-4xl font-serif tracking-tight text-primary">{sectionTitles.standard}</h2>
          </div>
          <div className="relative mt-8">
            <div className="relative -mb-6 w-full pb-6">
              {renderServicesList(gesetzlicheLeistungen)}
            </div>
          </div>
        </div>

        {/* Additional/Private Services Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
            <h2 className="text-4xl font-serif tracking-tight text-primary">{sectionTitles.additional}</h2>
          </div>
          <div className="relative mt-8">
            <div className="relative -mb-6 w-full pb-6">
              {renderServicesList(privateLeistungen)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 