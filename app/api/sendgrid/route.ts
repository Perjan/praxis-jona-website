import { MailService } from "@sendgrid/mail";
import { NextResponse } from "next/server";

const sendgrid = new MailService()
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

//send email using sendgrid from contact form
export async function POST(request: Request) {
    const requestJson = await request.json()

    console.log('sendgrid route');
    console.log({ requestJson });

    const msg = {
        to: 'info@moneycoach.ai',
        from: requestJson.email,
        subject: 'New message from ' + requestJson.name,
        text: requestJson.message,
        html: requestJson.message,
    };
    try {
        const response = await sendgrid.send(msg);
        console.log({ response });
        return NextResponse.json({ response });
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.error(error.response.body)
        }
    }
}