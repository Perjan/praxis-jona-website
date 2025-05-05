'use client'
import { useEffect, useState } from 'react';

export default function HeroSection( { title, description } ) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="pt-4 bg-center md:bg-fixed bg-cover z-4" style={{ backgroundImage: 'url("/images/clinic/clinic-hero-2025.jpg")' }}>
      <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
        <div className="text-center drop-shadow-xl relative z-10">
          <h1 className="text-5xl font-regular text-shadow-xl shadow-black tracking-tight font-serif text-white sm:text-6xl animate-slide-fade uppercase">
            {title}
          </h1>
          <h2 className={`mt-6 text-2xl px-8 sm:text-3xl text-shadow-xl shadow-black font-medium leading-8 text-white ${isVisible ? 'animate-zoom-in' : 'opacity-0'}`}>
            {description}
          </h2>
        </div>
      </div>
    </div>
  );
}
