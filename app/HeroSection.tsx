"use client"
  
  export default function HeroSection(params: {title: string, description: string}) {
    return (
      <div className="relative isolate overflow-hidden pt-14 bg-fixed bg-cover relative" style={{ backgroundImage: 'url("/images/clinic/clinic-new.jpeg")', position: 'relative' }}>
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 relative">
        <div className="text-center drop-shadow-2xl relative z-10">
          <h1 className="text-4xl font-regular tracking-tight font-serif text-primary sm:text-6xl">
            {params.title}
          </h1>
          <h2 className="mt-6 text-2xl font-medium leading-8 text-primary">
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
          background-color: rgba(202, 171, 140, 0.5); /* Beige with 50% opacity */
          z-index: 1;
        }
      `}</style>
      <div className="bg-overlay"></div>
    </div>
    )
  }
  