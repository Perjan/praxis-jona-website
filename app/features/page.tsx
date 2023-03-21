import MajorFeatureSection from "../MajorFeatureSection"

const featuresList = [
    { title: "Mega cool title", description: "A description goes here", imageUrl: "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" },
    { title: "Mega cool title", description: "A description goes here", imageUrl: "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" }
]

export default function Features() {
    return (
        // {
            featuresList.map((item) => (
                <MajorFeatureSection
                    key={item.title}
                    imageUrl=""
                />
            ))
        // }


    )
}