import { NextResponse } from "next/server";

export async function POST(request: Request) {
    
    const email = await request.json()
    console.log({email});

    const data: MailchimpSubscribeData = {
        email_address: email,
        status: 'pending',
        merge_fields: {
          // Add any merge fields you want to pass to Mailchimp here
        },
      };
  
      const response = await fetch('https://us6.api.mailchimp.com/3.0/lists/eec6674dc9/members', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${process.env.MAILCHIMP_API_KEY}`,
          },
          body: JSON.stringify(data),
        });

    const responseData = await response.json();
    console.log({responseData});

    return NextResponse.json({responseData});
  }

  interface MailchimpSubscribeData {
    email_address: string;
    status: 'subscribed' | 'pending' | 'unsubscribed' | 'cleaned';
    merge_fields: {
      [fieldName: string]: any;
    };
  }
  
  
  
  