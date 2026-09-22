import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Campos obrigatórios ausentes." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!apiKey || !contactEmail) {
      console.error("RESEND_API_KEY ou CONTACT_EMAIL não configurados.");
      return NextResponse.json(
        { error: "Serviço de e-mail não configurado." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Portfólio Thiago <onboarding@resend.dev>", // [EDITAR: domínio verificado na Resend]
      to: contactEmail,
      replyTo: email,
      subject: subject ? `[Portfólio] ${subject}` : "[Portfólio] Nova mensagem",
      text: `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`,
    });

    if (error) {
      console.error(error);
      return NextResponse.json({ error: "Falha ao enviar e-mail." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erro inesperado." }, { status: 500 });
  }
}
