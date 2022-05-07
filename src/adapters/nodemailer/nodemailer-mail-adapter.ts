import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9f58d13ee9e3a3",
    pass: "5d7ac7e172c190"
  }
});

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Fabio Ormastroni <fabioormastroni@gmail.com>',
      subject,
      html: body
    });
  };
}
