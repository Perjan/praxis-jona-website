"use client"

// import React, { useEffect, useRef } from 'react';
// import './styles.css';

// const BackgroundSection = () => {
//   const bgSectionRef = useRef(null);

//   useEffect(() => {
//     const bgSection = bgSectionRef.current;
//     const bgUrl = bgSection.getAttribute('data-bg-url');

//     if (bgUrl) {
//       const setParallaxEffect = () => {
//         if (bgSection) {
//           const offset = window.scrollY;
//           bgSection.style.backgroundPositionY = `${offset * 0.1}px`; // Adjust multiplier for parallax effect
//         }
//       };

//       const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const img = new Image();
//             img.src = bgUrl;
//             img.onload = () => {
//               if (bgSection) {
//                 bgSection.style.backgroundImage = `url(${img.src})`;
//                 setParallaxEffect(); // Set initial position
//                 window.addEventListener('scroll', setParallaxEffect);
//               }
//             };
//             observer.unobserve(bgSection);
//           }
//         });
//       });

//       observer.observe(bgSection);

//       return () => {
//         window.removeEventListener('scroll', setParallaxEffect);
//         observer.disconnect();
//       };
//     }
//   }, []);

//   return (
//     <div
//       ref={bgSectionRef}
//       className="backgroundSection relative isolate"
//       data-bg-url="/images/clinic/clinic-new.jpeg"
//     >
//       <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 relative">
//         <div className="text-center drop-shadow-2xl relative z-10">
//           <h1 className="text-4xl font-regular tracking-tight font-serif text-primary sm:text-6xl">
//             PRAXIS JONA
//           </h1>
//           <h2 className="mt-6 text-2xl font-medium leading-8 text-primary">
//             Ganzheitliche Betreuung für ein gesundes Leben – Bei uns bist Du mehr als nur ein weiterer Patient
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BackgroundSection;

export default function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden pt-14 bg-fixed bg-cover" style={{ backgroundImage: 'url("/images/clinic/clinic-new.jpeg")', position: 'relative' }}>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 relative">
        <div className="text-center drop-shadow-xl relative z-10">
          <h1 className="text-4xl font-regular drop-shadow-md tracking-tight font-serif text-primary sm:text-6xl">
            PRAXIS JONA
          </h1>
          <h2 className="mt-6 text-2xl drop-shadow-md font-medium leading-8 text-primary">
            Ganzheitliche Betreuung für ein gesundes Leben – Bei uns bist Du mehr als nur ein weiterer Patient
          </h2>
        </div>
      </div>
    </div>
  )
}
