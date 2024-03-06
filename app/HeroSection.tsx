import {
    ChevronRightIcon,
    PlayCircleIcon,
  } from '@heroicons/react/20/solid'
  
  import Image, { StaticImageData } from 'next/image'
  import Link from 'next/link'
  import { Constants } from './Constants'
  
  const videoUrl = "https://www.youtube.com/watch?v=phpFfo80LPI&t=22s"
  const previewUrl = "https://www.youtube.com/shorts/rh5_8mVDx4Q"
  
  export default function HeroSection(params: {title: string, description: string}) {
    return (
      <div className="relative isolate overflow-hidden pt-14 bg-fixed bg-cover relative" style={{ backgroundImage: 'url("/images/clinic/clinic-photo.jpg")' }}>
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
  <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
    <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]">
    </div>
  </div>
</div>
    )
  }
  