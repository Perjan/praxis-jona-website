import Image from "next/image"

export default function HeroSection() {
  return (<>
    <div className="pt-4 bg-center sm:bg-fixed bg-cover z-4" style={{ backgroundImage: 'url("/images/clinic/clinic-newA.jpg")' }}>
    <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
      <div className="text-center drop-shadow-xl relative z-10">
        <h1 className="text-5xl font-regular text-shadow-xl shadow-black tracking-tight font-serif text-white sm:text-6xl">
          PRAXIS JONA
        </h1>
        <h2 className="mt-6 text-2xl px-8 sm:text-3xl text-shadow-xl shadow-black font-medium leading-8 text-white">
          Ganzheitliche Betreuung für ein gesundes Leben - Bei uns bist Du mehr als nur ein weiterer Patient
        </h2>
      </div>
    </div>
    </div>
  </>
  )
}
