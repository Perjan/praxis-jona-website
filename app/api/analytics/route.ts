import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    
    const { searchParams } = new URL(req.url)
    const eventName = searchParams.get('event-name')

    console.log( "event name is " + eventName);

    const data = {
        type: "event",
        payload: {
            website: "aef10b17-64c8-4a47-a4c9-0351928b0a6c",
            name: eventName
        }
    }
  
      const response = await fetch('https://analytics.moneycoach.ai/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B179 Safari/7534.48.3"
          },
          body: JSON.stringify(data),
        });

    console.log("response is "+ response);

    const responseData = await response.json();
    console.log("response data is " + responseData);

    if (response.status !== 200 || responseData.status !== 200) {
        return NextResponse.json({responseData}, {status: responseData.status});
    }

    return NextResponse.json({responseData});
}