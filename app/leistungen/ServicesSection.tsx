"use client"

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import { Services } from './Services';

const { Panel: DialogPanel, Title: DialogTitle } = Dialog;

export default function ServicesSection() {

  const [open, setOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleScrollToProduct = (id) => {
    const product = Services.find(p => p.id === id);
    setSelectedProduct(product);
    setOpen(true);
    const element = document.getElementById(`details-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

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
                    <DialogTitle as="h3" className="text-base font-semibold text-primary">
                    {selectedProduct?.name}
                    </DialogTitle>
                    <div className="relative mt-6 flex-1 text-primaryLighter">
                        <div className="overflow-y-auto max-h-[500px] lg:max-h-[800px]">
                          {selectedProduct?.description.split(/\n{2}/).map((text, i) => (
                            <span key={i} className="text-base text-primaryLighter">
                              {text.split(/\n/).map((line, j) => (
                                <span key={j}>
                                  {line.startsWith('##') ? <h2>{line.substring(2)}</h2> : line.startsWith('**') ? <strong>{line.substring(2)}</strong> : line}
                                  <br />
                                </span>
                              ))}
                            </span>
                          ))}

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
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <h2 className="text-4xl font-serif tracking-tight text-primary">Leistungen</h2>
        </div>

        <div className="relative mt-8">
          <div className="relative -mb-6 w-full overflow-x-auto pb-6">
            <ul
              role="list"
              className="mx-4 grid grid-cols-1 gap-y-16 sm:mx-6 md:grid-cols-2 lg:mx-0 lg:grid-cols-4 lg:gap-x-8"
            >
              {Services.map((product) => (
                <li key={product.id} className="flex w-full flex-col text-center">
                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-[rgba(249,237,223,0.3)]">
                      <a href={`#details-${product.id}`} onClick={(e) => {
                        e.preventDefault();
                        handleScrollToProduct(product.id);
                      }}>
                        <Image
                          src={product.imageSrc}
                          alt={product.name}
                          width={280}
                          height={210}
                          className="w-3/4 h-auto object-cover object-center group-hover:opacity-75 mx-auto"
                        />
                      </a>
                    </div>
                    <div className="mt-6">
                      <h3 className="mt-1 text-lg font-semibold font-serif text-primary">
                        <a href={`#details-${product.id}`} onClick={(e) => {
                          e.preventDefault();
                          handleScrollToProduct(product.id);
                        }}>
                          <span className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                      {product.id == 2 && <span className='bg-primaryDarker px-4 py-1 rounded-xl text-sm font-bold text-white'>Demnächst</span>}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* <div className="overflow-hidden py-8 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ul
              role="list"
              className="mx-auto grid max-w-2xl grid-cols-1 gap-y-8 sm:gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-1"
            >
              {products.map((product, index) => (
                <li key={product.id} className={`grid grid-cols-1 ${index % 2 === 0 ? 'bg-white' : ''} w-full rounded-lg overflow-hidden`} id={`details-${product.id}`} style={{ backgroundColor: index % 2 !== 0 ? 'rgba(249, 237, 223, 0.3)' : '' }}>
                  <div className="flex flex-col sm:flex-row items-center justify-between">
                    <div className="w-full sm:w-1/3">
                      <img
                        src={product.imageSrc}
                        alt="Product screenshot"
                        className="w-3/4 h-auto mx-auto object-cover"
                      />
                    </div>
                    <div className="w-full sm:w-2/3 p-4 sm:p-0">
                      <div className="lg:max-w-2xl py-8">
                        <p className="mt-2 text-xl font-medium font-serif tracking-normal text-primary sm:text-2xl">{product.name}</p>
                        <h3 className="mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-primaryLighter" dangerouslySetInnerHTML={{ __html: product.description.replace(/\n\n/g, '<br>') }}></h3>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
      </div>
    </div >

  )
}
