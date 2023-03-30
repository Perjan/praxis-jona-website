import Image from "next/image"

export default function AppleWatchSection() {
    return(
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">With you, wherever you go</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">MoneyCoach is always with you via the Apple Watch app.</p>
            </div>
            <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <li>
                <Image className=" w-full rounded-2xl object-cover" src="/images/watch2.png" alt="" width={200} height={200}/>
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Glanceable Insights</h3>
                <p className="text-base leading-7 text-gray-600">Check how much you can spend every day at a glance via the Insights</p>
              </li>
              
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