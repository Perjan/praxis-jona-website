import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";

const title = 'Thyroid Gland'
const description = "The thyroid gland, a small, butterfly-shaped organ in the neck, plays a central role in our metabolism. It produces hormones (T4, T3 and calcitonin) that are important for numerous body functions, such as the regulation of body temperature, energy levels and heart rate."
const url = '/en/focus-areas/thyroid-gland'

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
            de: '/schwerpunkte/schilddruese',
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

export default function Page() {
    return (
        <>
            <div className="overflow-hidden bg-white relative isolate">
                <SectionWithColor backgroundClassName='bg-white'>
                    <div className="mx-auto max-w-4xl lg:mx-0">
                        <h1 className="text-3xl font-semibold tracking-tight font-serif text-primary sm:text-4xl">{title}</h1>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">{description}</p>
                    </div>
                </SectionWithColor>
                <div className="overflow-hidden px-4 lg:px-0 rounded-xl lg:rounded-2xl bg-white max-w-7xl mx-auto sm:mb-16 ">
                    <SectionWithColor backgroundClassName='bg-lightBeige'>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">The thyroid gland produces the two hormones T3 (triiodothyronine) and T4 (thyroxine, also known as tetraiodothyronine). T4 is produced in large quantities, but is only slightly active on its own. In the blood and in the cytosol of most body cells, T4 is converted into the biologically more active T3 by a deiodase. The physiological role of calcitonin is rather minor because bone and calcium metabolism is mainly regulated by the parathyroid hormone and vitamin D.</p>

                        <p className="mt-6 text-lg leading-8 text-primaryLighter">A malfunction of the thyroid gland can cause a variety of symptoms and significantly impairs well-being. The most common diseases are hypothyroidism (e.g. Hashimoto's), hyperthyroidism (e.g. Grave's disease) and thyroid nodules.</p>

                        <h2 className="mt-6 text-2xl leading-8 font-serif font-semibold text-primaryLighter">The symptoms of Hyperthyroidism</h2>

                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li>Fast Heartbeat</li>
                            <li>Weight loss despite increased calorie intake</li>
                            <li>Finger Tremor</li>
                            <li>Slightly increased body temperature with increased sweating</li>
                            <li>Nervousness, sleep disorders, anxiety</li>
                        </ul>

                        <h2 className="text-2xl mt-6 leading-8 font-serif font-semibold text-primaryLighter">The symptoms of Hypothyroidism</h2>

                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li>Low Heartbeat</li>
                            <li>Weight gain despite low calorie intake</li>
                            <li>Sensitivity to cold, pale and dry skin</li>
                            <li>Fatigue, Depression</li>
                            <li>Fuzzy brittle hair</li>
                        </ul>

                        <h2 className="text-2xl mt-8 font-serif font-semibold leading-8 text-primaryLighter">Diagnosis</h2>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Thyroid diagnostics is crucial for the early detection and treatment of such diseases. It consists of</p>

                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li className="text-xl leading-6 mt-2 font-serif font-semibold">Blood Tests</li>
                            <p> Checking the thyroid hormones in the blood to assess the function of the thyroid gland. The TSH level in the blood reacts extremely sensitively to changes in thyroid hormone levels. Therefore, the TSH measured in serum is an important parameter for assessing thyroid function and the first step in the clinical diagnosis of the thyroid gland.</p>
                            <li className="text-xl mt-4 font-serif font-semibold">Ultrasound Examination</li>
                            <p>An imaging method to detect the size, structure and possible nodules or cysts in the thyroid gland.</p>
                            <li className="text-xl mt-4 font-serif font-semibold">Thyroid Scintigraphy</li>
                            <p>The examination is only recommended if there are suspicious changes on ultrasound.</p>
                        </ul>

                    </SectionWithColor>
                    {/* <SectionWithColor backgroundClassName='bg-tealColor my-16'>
                        
                        <p className="text-3xl mt-4 font-serif font-semibold leading-8 text-primaryLighter">Diagnose</p>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Die Schilddrüsendiagnostik ist entscheidend, um solche Erkrankungen frühzeitig zu erkennen und zu behandeln. Sie besteht aus:</p>

                        <p className="text-xl mt-2 font-serif font-semibold leading-8 text-primaryLighter">Blutuntersuchungen</p>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter"> Überprüfung der Schilddrüsenhormone im Blut, um die Funktion der Schilddrüse zu beurteilen. Der TSH-Spiegel im Blut reagiert äußerst sensibel auf Veränderungen der Schilddrüsenhormonspiegel. Daher ist das im Serum gemessene TSH ein wichtiger Parameter zur Beurteilung der Schilddrüsenfunktion und der erste Schritt in der klinischen Diagnostik der Schilddrüse.</p>

                        <p className="text-xl mt-2 font-serif font-semibold leading-8 text-primaryLighter">Ultraschalluntersuchung</p>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Eine bildgebende Methode, um die Größe, Struktur und mögliche Knoten oder Zysten in der Schilddrüse zu erkennen.</p>

                        <p className="text-xl mt-2 font-serif font-semibold leading-8 text-primaryLighter">Schilddrüsenszintigraphie</p>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Die Untersuchung wird nur bei verdächtigen Veränderungen im Ultraschall empfohlen.</p>
                    </SectionWithColor> */}
                </div>
            </div>
        </>
    )
}