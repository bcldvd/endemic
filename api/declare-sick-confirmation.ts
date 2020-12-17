import { NowRequest, NowResponse } from '@vercel/node';
import * as nodemailer from 'nodemailer';
const axios = require('axios');

export default async (request: NowRequest, response: NowResponse) => {
  const reqBody = request.body as any;
  const userEmail = reqBody.email;

  const redirectUrl = `${request.headers.referer.split('://')[0]}://${
    request.headers['x-forwarded-host']
  }/declare-sick-confirmation?email=${userEmail}`;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.ENDEMIC_MAIL_ID,
      pass: process.env.ENDEMIC_MAIL_PWD,
    },
  });

  const mailOptions = {
    from: 'endemic.noreply@gmail.com',
    to: userEmail,
    subject: 'Verify your declaration on Endemic',
    html: `<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-GB">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>You got exposed to COVID-19</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style type="text/css">
        a[x-apple-data-detectors] {
            color: inherit !important;
        }
    </style>
</head>

<body style="margin: 0; padding: 0;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td style="padding: 20px 0 30px 0;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="600"
                    style="border-collapse: collapse; border: 1px solid #cccccc;">
                    <tr>
                        <td bgcolor="#ffffff" style="display: flex; flex: 1;"><img
                                src="https://res.cloudinary.com/dmv2klkv7/image/upload/v1606341836/Picture_1_ds82rt.png"
                                alt="Creating Email Magic." width="100%" height="100%" style="display: block;" /></td>
                    </tr>
                    <tr>
                        <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                style="border-collapse: collapse;">
                                <tr>
                                    <td style="color: #153643; font-family: Arial, sans-serif;">
                                        <h1 style="font-size: 24px; margin: 0;">Please confirm that you have been tested
                                            positive to COVID-19</h1>
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        style="color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; padding: 20px 0 30px 0;">
                                        <p style="margin: 0;">Dear user, </p>
                                        <p> You receive this email because you declared to have <b>tested positive to
                                                COVID-19</b> on Endemic. </p>
                                        <p>If you're the initiator of this request, <b>please confirm</b> by clicking on
                                            the following button: </p>
                                        <div style="text-align: center"><a href="${redirectUrl}"
                                                style=" background-color: #694ED6; color: white; border-radius: 18px; margin: 0; min-width: 64px; line-height: 36px; padding: 5px 20px; text-decoration: none; border: 0;">I
                                                confirm that I'm positive for Covid-19</a> </div>
                                        <p>Otherwise, please ignore this email.</p><br />
                                        <h1 style="font-size: 24px; margin: 0;">What's next ?</h1>
                                <tr>
                                    <td>
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                            style="border-collapse: collapse;">
                                            <tr>
                                                <td width="260" valign="top">
                                                    <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                                        style="border-collapse: collapse;">
                                                        <tr>
                                                            <td style="display:flex; flex: 1"> <img
                                                                    src="https://res.cloudinary.com/dmv2klkv7/image/upload/v1606745311/stay-home_u6odak.png"
                                                                    alt="" width="100%" height="100%"
                                                                    style="display: block;" /> </td>
                                                        </tr>
                                                        <tr>
                                                            <td
                                                                style="color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; padding: 25px 0 0 0;">
                                                                <p style="margin: 0;">If you have tested COVID-19
                                                                    positive, you must <b>immediately go into isolation.
                                                                    </b></p>
                                                                <p style="margin: 0;">You can help <b>identifying people
                                                                        who have had high-risk contact</b> with you.</p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td style="font-size: 0; line-height: 0;" width="20">&nbsp;</td>
                                                <td width="260" valign="top">
                                                    <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                                        style="border-collapse: collapse;">
                                                        <tr>
                                                            <td style="display: flex; flex: 1;"> <img
                                                                    src="https://res.cloudinary.com/dmv2klkv7/image/upload/v1606745306/email-alert_fnnmqq.png"
                                                                    alt="" width="100%" height="100%"
                                                                    style="display: block;" /> </td>
                                                        </tr>
                                                        <tr>
                                                            <td
                                                                style="color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; padding: 25px 0 0 0;">
                                                                <p style="margin: 0;">The <b>contact tracing unit</b>
                                                                    has been informed of your results and will contact
                                                                    <b>all people who were exposed with you within
                                                                        public areas</b> using Endemic.
                                                                </p>
                                                                <p>The participation of everyone in the tracing process
                                                                    will help to better control the pandemic.</p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#C137A2" style="padding: 30px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                style="border-collapse: collapse;">
                                <tr>
                                    <td style="color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;">
                                        <p style="margin: 0;">&reg; Endemic Corporation<br /> <a href="#"
                                                style="color: #ffffff;">Unsubscribe</a> to this alert</p>
                                    </td>
                                    <td align="right">
                                        <table border="0" cellpadding="0" cellspacing="0"
                                            style="border-collapse: collapse;">
                                            <tr>
                                                <td> <a href="http://www.twitter.com/"> </a> </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      response.status(500).send(error);
    } else {
      console.log('Email sent: ' + info.response);
      response.status(200).send(null);
    }
  });
};
