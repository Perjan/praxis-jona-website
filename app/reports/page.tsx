import { Metadata } from "next"
import Image from 'next/image'
import BuddyImage from "/public/images/buddy-comparison.png"
import Feature1 from "/public/images/addTransactions2.png"
import Feature2 from "/public/images/moneycoach-all-devices.png"
import Feature3 from "/public/images/moneycoach-reports-showcase.png"
import Feature4 from "/public/images/multicurrency-finances.png"
import Feature5 from "/public/images/accessible-finances.png"

import { Fragment } from 'react'
import { CheckIcon, MinusIcon } from '@heroicons/react/20/solid'

const title = "Reports Showcase"
const description = "What is the Best Alternative to Buddy?"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description,
        type: 'website',
        url: '/reports-showcase',
        images: [
            {
                url: '/images/og-image.png',
                width: 1200,
                height: 600,
                alt: 'MoneyCoach app screenshot'
            }
        ],
    },
    alternates: {
        canonical: '/reports-showcase'
    },
    twitter: {
        card: 'summary_large_image',
        title: title,
        description: description,
        images: ['/images/og-image.png']
    }
}

export default async function Page() {
    return (
        <>
            <main>
                <div className="overflow-hidden bg-gray-900 relative isolate pt-14">
                    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true">
                        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]">
                        </div>
                    </div>
                    <div className="py-24 sm:py-32 lg:pb-16">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl text-center">
                                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Reports Showcase</h1>
                                <p className="mt-6 text-lg leading-8 text-gray-300">Discover the power of insightful reports to enhance your financial management. Our comprehensive reports provide a detailed breakdown of expenses, income, net worth progression, living expenses, and more. With clear visualizations and concise summaries, gain valuable insights into your financial health, track spending patterns, and make informed decisions to achieve your financial goals.</p>
                            </div>
                            <Image
                                src={BuddyImage}
                                alt="App screenshot"
                                className="mt-16 shadow-2xl ring-white/10 sm:mt-24" />
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="my-auto lg:pr-8 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Category Insights</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">This comprehensive report provides you with a detailed overview of the entire history of category and subcategory usage. With the inclusion of a visually informative chart, you can easily analyze trends and patterns, gaining valuable insights into the category's performance over time.</p>
                                </div>
                            </div>
                            <Image src={Feature1}
                                alt="Product screenshot"
                                className="w-[48rem] max-w-none rounded-xl sm:w-[57rem] md:-ml-4 lg:-ml-0"
                            />
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="my-auto content-center lg:ml-auto lg:pl-4 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Transactions By Category</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-300">This detailed report offers a comprehensive breakdown of expenses and incomes for each specific category. Accompanied by a visually appealing pie chart, you can quickly grasp the distribution of your expenses across various categories, enabling you to make informed financial decisions and identify areas for potential savings.</p>
                                </div>
                            </div>
                            <div className="flex items-start justify-end lg:order-first">
                                <Image src={Feature2}
                                    alt="Product screenshot"
                                    className="w-[48rem] max-w-none sm:w-[57rem]"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="my-auto content-center lg:pr-8 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Subscription Insights</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">
                                        This insightful report provides a transparent view of the true cost of a recurring payment by displaying the amount paid for the service over different time periods. You can easily track your spending and understand the cumulative impact of the recurring payment. Additionally, the report also includes the number of transactions made, offering a comprehensive overview of the payment history associated with the service.</p>
                                </div>
                            </div>
                            <Image src={Feature3}
                                alt="Product screenshot"
                                className="w-[48rem] max-w-none sm:w-[57rem] md:-ml-4 lg:-ml-0" />
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="my-auto content-center lg:ml-auto lg:pl-4 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Yearly Projection</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-300">The projection report offers users a valuable insight into their net worth for the current year by analyzing their spending habits. By analyzing income, expenses, and savings patterns, the report generates a forecast of net worth, providing users with a clear understanding of their financial trajectory and helping them make informed decisions to achieve their financial goals.</p>
                                </div>
                            </div>
                            <div className="flex items-start justify-end lg:order-first">
                                <Image src={Feature4}
                                    alt="Product screenshot"
                                    className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="my-auto content-center lg:pr-8 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Income Vs Expense</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">
                                    This comprehensive report presents a clear overview of income versus expenses on a monthly basis, enabling you to track your financial performance over time. With a detailed breakdown of both income and expenses by categories, you can gain valuable insights into your spending patterns, identify areas of high expenditure, and make informed decisions to optimize your financial health.</p>
                                </div>
                            </div>
                            <Image src={Feature5}
                                alt="Product screenshot"
                                className="w-[48rem] max-w-none sm:w-[57rem] md:-ml-4 lg:-ml-0" />
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="my-auto content-center lg:ml-auto lg:pl-4 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscription & Bills</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-300">This report provides you with a comprehensive view of your active subscriptions and bills, presenting them separately along with their associated costs for the current month. With this you can easily monitor and track your fixed monthly expenses, enabling you to better manage your finances and make informed decisions regarding your subscriptions and recurring payments.</p>
                                </div>
                            </div>
                            <div className="flex items-start justify-end lg:order-first">
                                <Image src={Feature4}
                                    alt="Product screenshot"
                                    className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="my-auto content-center lg:pr-8 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Payees</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">
                                    The insightful report organizes all transactions by payee or company, providing you with a clear overview of your spending patterns with different entities. By grouping transactions together, you can easily identify your expenses associated with specific payees or companies, helping you gain a better understanding of your financial relationships and facilitating budgeting and expense tracking.</p>
                                </div>
                            </div>
                            <Image src={Feature5}
                                alt="Product screenshot"
                                className="w-[48rem] max-w-none sm:w-[57rem] md:-ml-4 lg:-ml-0" />
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="my-auto content-center lg:ml-auto lg:pl-4 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Summary</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-300">This summary report offers you a concise overview of your financial activity for a specific month or period allowing you to quickly assess your financial performance at a glance. </p>
                                </div>
                            </div>
                            <div className="flex items-start justify-end lg:order-first">
                                <Image src={Feature4}
                                    alt="Product screenshot"
                                    className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="my-auto content-center lg:pr-8 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tags</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">
                                    The insightful report organizes all transactions by tags. By grouping transactions together, you can easily identify your expenses associated with specific tags, helping you gain a better understanding of your financial relationships and facilitating budgeting and expense tracking.</p>
                                </div>
                            </div>
                            <Image src={Feature5}
                                alt="Product screenshot"
                                className="w-[48rem] max-w-none sm:w-[57rem] md:-ml-4 lg:-ml-0" />
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="my-auto content-center lg:ml-auto lg:pl-4 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Monthly Living Costs</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-300">The comprehensive report provides a detailed breakdown of monthly living expenses, allowing you to track where your money is being spent. By categorizing expenses related to housing, utilities, groceries, transportation, and other essential living costs, you can gain a clear understanding of your spending patterns and identify areas where you can potentially save or make adjustments to their budget.</p>
                                </div>
                            </div>
                            <div className="flex items-start justify-end lg:order-first">
                                <Image src={Feature4}
                                    alt="Product screenshot"
                                    className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="my-auto content-center lg:pr-8 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Net Worth</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">
                                    The net worth progression report offers you a valuable insight into your financial growth and stability over time. By tracking changes in your Net Worth,the report provides a comprehensive view of how one's net worth has evolved. This allows you to assess your financial progress, set goals, and make strategic decisions to enhance your overall financial well-being.</p>
                                </div>
                            </div>
                            <Image src={Feature5}
                                alt="Product screenshot"
                                className="w-[48rem] max-w-none sm:w-[57rem] md:-ml-4 lg:-ml-0" />
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}


