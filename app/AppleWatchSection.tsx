import Image from "next/image"

const sectionTitle: string = "With you, wherever you go"
const sectionDescription = "MoneyCoach is always with you via the Apple Watch app."


const features = [
  {
    title: "Glanceable Insights",
    description: "Check how much money you have left to spend, how much you spent today and how much you spent this month.",
    image: "/images/watch2.png",
  }
]


export default function AppleWatchSection() {
    return(
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{sectionTitle}</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">{sectionDescription}</p>
            </div>
            <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {
              features.map((feature) => (
                <li>
                <Image className=" w-full rounded-2xl object-cover" src={feature.image} alt="" width={200} height={200}/>
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{feature.title}</h3>
                <p className="text-base leading-7 text-gray-600">{feature.description}</p>
              </li>
    ))

              }
              
              <li>
                <Image className="w-full rounded-2xl object-cover" src="/images/watch1.png" alt="" width={200} height={200}/>
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Glanceable Budgets</h3>
                <p className="text-base leading-7 text-gray-600">Check how much money you have left to spend on specific budgets</p>
              </li>
    
              <li>
                <Image className=" w-full rounded-2xl object-cover" src="/images/watch3.png" alt="" width={200} height={200}/>
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Glanceable Net Worth</h3>
                <p className="text-base leading-7 text-gray-600">Check insights and get a read on all your accounts and net worth</p>
              </li>
            </ul>
          </div>
        </div>
    )
}