import { Constants, NewsMessages } from "app/Constants";
import { Metadata } from "next";

const title = 'Latest News'
const description = ""
const url = "/en/latest-news"

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description,
        type: 'website',
        url: url,
        images: [
            {
                url: '/images/og-image.png',
                width: 1200,
                height: 600,
                alt: 'Praxis Jona'
            }
        ],
    },
    alternates: {
        canonical: url,
        languages: {
            de: "/aktuelles",
            en: url
        }
    },
    twitter: {
        card: 'summary_large_image',
        title: title,
        description: description,
        images: ['/images/og-image.png']
    }
}

function CardContent({ title, message }) {
    return (
        <>
            <div className="max-w-3xl mx-auto items-center justify-center rounded-2xl bg-lightBeige bg-opacity-40 p-10 col-span-1">
                <h3 className="text-2xl justify-center text-center font-semibold font-serif leading-7 text-primary flex items-center">
                    {title}
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:col-span-1 lg:gap-8">
                    <dl className="mt-3 space-y-1 text-md leading-6 text-primaryLighter">
                        <div className="flex flex-col justify-center h-full">
                            <address className="mt-34justify-center text-center space-y-1 text-md not-italic leading-6 text-primaryLighter">
                                <p dangerouslySetInnerHTML={{ __html: message.replace(/\n/g, '<br />') }} />
                            </address>
                        </div>
                    </dl>
                </div>
            </div>
        </>
    )
}

export default function Page() {

    return (
        <>
            <div className="bg-white mt-2 sm:mt-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-3xl font-semibold tracking-tight font-serif text-primary sm:text-4xl">{title}</h1>
                        <h2 className="mt-2 text-lg leading-8 text-primaryLighter">{description}</h2>
                    </div>
                    <div className='relative isolate bg-white'>
                        <div className="bg-white py-16 sm:py-24">
                            <div className="mx-auto max-w-7xl">
                                <div className="mx-auto items-center max-w-xl space-y-8 lg:mx-0 lg:max-w-none">
                                
                                    {NewsMessages.en.map((item, index) => (
                                        <CardContent 
                                            key={index}
                                            title={item.title} 
                                            message={item.message} 
                                        />
                                    ))}

                                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-1">

                                        <div className="max-w-3xl mx-auto items-center justify-center rounded-2xl bg-lightBeige bg-opacity-40 p-10 col-span-1">
                                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:col-span-1 lg:gap-8">
                                                <dl className="mt-3 space-y-1 text-md leading-6 text-primaryLighter">
                                                    <div className="flex flex-col justify-center h-full">
                                                        <address className="mt-34justify-center text-center space-y-1 text-md not-italic leading-6 text-primaryLighter">
                                                            <p>In urgent cases, please also contact the medical on-call service of the KV Berlin at 116117, in life-threatening situations call the fire department at 112.</p>
                                                        </address>
                                                    </div>
                                                </dl>
                                            </div>
                                        </div>

                                        <div className="max-w-3xl mx-auto items-center justify-center rounded-2xl bg-lightBeige bg-opacity-40 p-10 col-span-1">
                                            <h3 className="text-2xl justify-center text-center font-semibold font-serif leading-7 text-primary flex items-center">
                                            Notice
                                            </h3>
                                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:col-span-1 lg:gap-8">
                                                <dl className="mt-3 space-y-1 text-md leading-6 text-primaryLighter">
                                                    <div className="flex flex-col justify-center h-full">
                                                        <address className="mt-4 justify-center text-left space-y-1 text-md not-italic leading-6 text-primaryLighter">
                                                            <p className="text-md">Dear patient,<br></br>If you show signs of illness such as a cough, cold, scratchy throat or fever, you can come to our consultation with a daily negative Covid self-test and FFP2 mask by prior arrangement by telephone.</p>

                                                            <p className="text-md pt-4">
                                                            If you have a positive Covid self-test, please send us the following information by e-mail:<br></br>
                                                                E-Mail: <a href={Constants.contact.emailUrl} className="text-primary font-semibold">{Constants.contact.email}</a><br></br>
                                                                Your symptoms:<br></br>
                                                                Your address:<br></br>
                                                                Mobile phone number:<br></br>
                                                                Proof of insurance<br></br>
                                                                Photo of the Corona rapid test result<br></br>
                                                                We will get in touch with you.</p>
                                                        </address>
                                                    </div>
                                                </dl>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}