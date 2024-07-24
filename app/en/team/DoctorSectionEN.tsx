"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from 'app/lib/utils';

export default function Page() {
    const [expanded, setExpanded] = useState(false);
    return (
        <>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto my-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:flex lg:items-start lg:justify-center lg:pl-4 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="mt-2 text-2xl font-serif tracking-tight text-primary sm:text-3xl">Jonida Gjolli</h2>
                            <p className="mt-6 text-lg leading-8 text-primaryLighter">
                            Jonida is a specialist in Internal Medicine. She completed her studies in Tirana, Albania, and after graduating she decided to train as an Internist in Germany. She completed the first part of her training at the Medical Clinic III of the Waldkrankenhaus St. Marien in Erlangen. She then worked for several years in the Medical Clinic specializing in nephrology and internal intensive care medicine at Charité Berlin, where she is also completing her doctorate.
                            </p>
                            <p className="mt-6 text-lg leading-8 text-primaryLighter">
                            Her specialties include thyroid, hypertension, lipid metabolism disorders and nutritional medicine. She is a member of the German Society for Internal Medicine (DGIM) and the DGFF (Lipid League) e. V. She is also a certified lipidologist and hypertensiologist.
                            </p>
                            <button onClick={() => setExpanded(!expanded)} className="bg-primaryDarker px-4 py-2 rounded-xl hover:bg-primaryLighter text-white font-semibold mt-4 transition duration-300 ease-in-out">
                                {expanded ? 'Collapse' : 'Expand'}
                            </button>
                            <div
                                className={
                                    cn(expanded ? "max-h-auto" : "max-h-0",
                                        "overflow-hidden transition duration-500 ease-in-out")
                                }
                            >
                                <h2 className="mt-12 text-xl font-serif tracking-tight text-primary sm:text-2xl">Philosophy</h2>
                                <p className="mt-6 text-lg leading-8 text-primaryLighter">
                                “In my daily professional practice, it is extremely important for me to take a comprehensive and holistic approach when looking at people. I attach great importance not only to analyzing isolated symptoms or clinical pictures, but rather to understanding the individual as a whole. This includes physical, psychological and social aspects, which are all interconnected and can have an impact on the health and well-being of the individual. My aim is to use this view to provide effective and personalized care and support to achieve the best possible health outcomes for my patients.”
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="lg:flex lg:items-start lg:justify-end lg:order-first">
                        <Image
                            src="/images/team/jonaClinic.jpeg"
                            alt="Product screenshot"
                            className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:w-[48rem] lg:max-w-none lg:ring-0"
                            width={2432}
                            height={1442}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}