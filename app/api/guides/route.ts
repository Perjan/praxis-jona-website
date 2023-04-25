import { NextResponse } from "next/server";
import { allGuidesPosts } from "app/guides/GuidesDataSource";

// export a get function that returns an array of guides as a json response
export async function GET(request: Request) {
    return NextResponse.json(getGuides());
}

// return a json response with the array of guides containing title, slug, and excerpt and url
function getGuides() {
    return allGuidesPosts.map((guide) => {
        return {
            title: guide.title,
            summary: guide.summary,
            url: `https://moneycoach.ai/guides/${guide.slug}`,
        };
    });
}
  