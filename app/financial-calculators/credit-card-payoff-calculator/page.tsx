export default function Page() {
    return (
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
            <div className="my-auto lg:pr-4 lg:pt-4">
              <div className="xlg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">Financial Calculators</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Credit Card Payoff Calculator</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                Calculating your credit card payoff payments involves determining how much money you need to pay each month to eliminate your credit card balance within a specific period of time. To do this, start by making a list of all your credit card debts, including the balance owed, interest rates, and minimum payments. <br></br><br></br>Once you have this information, use the credit card payoff calculator linked below to determine what your monthly payments will be.
                </p>
                <div className="mt-8">
                  <a
                    href="https://www.bankrate.com/finance/credit-cards/credit-card-payoff-calculator/"
                    className="inline-flex rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Access Calculator
                  </a>
                </div>
              </div>
            </div>
            <img
              src="https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'"
              alt="retirement calculator"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    )
  }  