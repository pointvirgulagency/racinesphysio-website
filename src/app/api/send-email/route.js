import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const formData = await request.formData();

    const isRecruitment = formData.has("firstName");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    const attachments = [];
    let mailOptions;

    if (isRecruitment) {
      const cvFile = formData.get("cv");
      const coverLetterFile = formData.get("coverLetter");

      if (cvFile && cvFile.size > 0) {
        const cvBuffer = Buffer.from(await cvFile.arrayBuffer());
        attachments.push({ filename: cvFile.name, content: cvBuffer });
      }
      if (coverLetterFile && coverLetterFile.size > 0) {
        const clBuffer = Buffer.from(await coverLetterFile.arrayBuffer());
        attachments.push({ filename: coverLetterFile.name, content: clBuffer });
      }

      const firstName = formData.get("firstName");
      const lastName = formData.get("lastName");
      const email = formData.get("email");

      mailOptions = {
        from: `"${firstName} ${lastName}" <${process.env.EMAIL_SERVER_USER}>`,
        to: process.env.EMAIL_TO,
        replyTo: email,
        subject: `Nouveau Candidat: ${firstName} ${lastName}`,
        html: `
            <h1>Nouvelle candidature</h1>
            <p><strong>Nom:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Téléphone:</strong> ${formData.get("phone")}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p>${formData.get("message").replace(/\n/g, "<br>")}</p>
            <p><em>CV et/ou lettre de motivation en pièce jointe.</em></p>
          `,
        attachments: attachments,
      };
    } else {
      const name = formData.get("name");
      const email = formData.get("email");

      mailOptions = {
        from: `"${name}" <${process.env.EMAIL_SERVER_USER}>`,
        to: process.env.EMAIL_TO,
        replyTo: email,
        subject: `Nouveau Client: ${name} - ${formData.get("subject")}`,
        html: `
            <h1>Nouveau message de contact</h1>
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Objet:</strong> ${formData.get("subject")}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p>${formData.get("message").replace(/\n/g, "<br>")}</p>
          `,
      };
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { message: "Failed to send email.", error: error.message },
      { status: 500 }
    );
  }
}
