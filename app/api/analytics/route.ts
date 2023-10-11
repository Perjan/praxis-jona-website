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
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
          },
          body: JSON.stringify(data),
        });

    console.log("response is "+ response.status);
    
return NextResponse.json({response}, {status: response.status});
}