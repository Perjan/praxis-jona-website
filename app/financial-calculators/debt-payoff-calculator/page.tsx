export default function Page() {
    return (
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
            <div className="my-auto lg:pr-4 lg:pt-4">
              <div className="xlg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">Financial Calculators</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Debt Payoff Calculator</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                To calculate your debt payoff payments, start by making a list of all your debts, including the balance owed, interest rates, and minimum payments. Then, decide on a strategy for paying off your debts, such as the avalanche method (paying off debts with the highest interest rates first) or the snowball method (paying off debts with the smallest balances first).<br></br><br></br>Once you have this information, use the debt payoff calculator linked below to determine what your monthly payments will be.
                </p>
                <div className="mt-8">
                  <a
                    href="https://www.bankrate.com/personal-finance/debt/debt-payoff-calculator/"
                    className="inline-flex rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Access Calculator
                  </a>
                </div>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1634128222187-18eababc763d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    )
  }  