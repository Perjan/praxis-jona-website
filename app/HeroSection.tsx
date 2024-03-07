"use client"
  
  import Image, { StaticImageData } from 'next/image'
  import Link from 'next/link'
  import { Constants } from './Constants'
  
  export default function HeroSection(params: {title: string, description: string}) {
    return (
      <div className="relative isolate overflow-hidden pt-14 bg-fixed bg-cover relative" style={{ backgroundImage: 'url("/images/clinic/clinic-new.jpeg")', position: 'relative' }}>
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 relative">
        <div className="text-center drop-shadow-2xl relative z-10">
          <h1 className="text-4xl font-regular tracking-tight font-serif text-black sm:text-6xl">
            {params.title}
          </h1>
          <h2 className="mt-6 text-2xl leading-8 text-gray-800">
            {params.description}
          </h2>
        </div>
      </div>
      <style jsx>{`
        .bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(251, 194, 195, 0.3); /* Pink with 30% opacity */
          z-index: 1;
        }
      `}</style>
      <div className="bg-overlay"></div>
    </div>
    )
  }
  