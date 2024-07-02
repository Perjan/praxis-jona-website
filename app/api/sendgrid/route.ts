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

    let fromEmail = "info@praxisjona.de"
    let serverSenderEmail = 'info@moneycoach.ai'

    console.log('sendgrid route');
    console.log({ requestJson });
    const msg: MailDataRequired = {
        to: [fromEmail],
        from: serverSenderEmail,
        replyTo: requestJson.email,
        subject: '[Website Praxis Jona] New message',
        text: formattedBody,
        html: htmlBody,
    };

    const replyToUser: MailDataRequired = {
        to: [requestJson.email],
        from: fromEmail,
        replyTo: fromEmail,
        subject: '[Website Praxis Jona] We have received your message',
        text: "Thanks for contacting us. We will get back to you as soon as possible."
    };

    try {
        const response = await sendgrid.send(msg);
        const replyToUserEmail = await sendgrid.send(replyToUser);
        console.log({ response, replyToUserEmail });
        return NextResponse.json({ response });
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.error(error.response.body)
        }
    }
}