import { upcomingOpeningHoursText } from "app/Constants";

export function UpcomingOpeningHours({ locale }: { locale: "de" | "en" }) {
    return (
        <div className="mt-4 text-primaryLighter">
            <p className="font-semibold">{locale === "de" ? "Ab 4. Januar 2027" : "From 4 January 2027"}</p>
            <p className="whitespace-pre-line">{upcomingOpeningHoursText(locale)}</p>
        </div>
    );
}
