import { MailDataRequired, MailService } from "@sendgrid/mail";
import { NextResponse } from "next/server";

const sendgrid = new MailService()
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

//send email using sendgrid from contact form
export async function POST(request: Request) {
    const requestJson = await request.json()

// generate formatted email body from requestjson
const requestKeys = Object.keys(requestJson)
let formattedBody = ''
let htmlBody = ""
requestKeys.forEach((key) => {
    formattedBody = formattedBody + key + ': ' + requestJson[key] + '\n'
    htmlBody += "<b>" + key + "</b>: " + requestJson[key] + "<br>";
})



    console.log('sendgrid route');
    console.log({ requestJson });
    const msg: MailDataRequired = {
        to: "info@moneycoach.ai",
        from: 'info@moneycoach.ai',
        replyTo: requestJson.email,
        subject: '[Website Contact] New message',
        text: formattedBody,
        html: htmlBody,
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