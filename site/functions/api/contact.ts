/// <reference types="@cloudflare/workers-types" />

interface Env {
  RESEND_API_KEY: string;
}

interface ContactBody {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  lang?: string;
  // honeypot — hidden from real visitors via CSS; bots that fill every
  // field trip it. Never mentioned in visible copy or labels.
  company?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 5000;
const MAX_SUBJECT_LENGTH = 200;

// Mirrors the copy in src/i18n/strings.ts — the form is static per locale,
// so the visitor's language rides along as a hidden field rather than
// requiring server-side content negotiation.
const MESSAGES = {
  en: {
    invalid: "Invalid request.",
    fillAll: "Please fill in every field.",
    badEmail: "That doesn't look like a valid email address.",
    tooLong: "Message is too long.",
    subjectTooLong: "Subject is too long.",
    sendFailed:
      "Something went wrong sending your message. Please email us directly instead.",
  },
  es: {
    invalid: "Solicitud inválida.",
    fillAll: "Por favor completa todos los campos.",
    badEmail: "Ese email no parece válido.",
    tooLong: "El mensaje es demasiado largo.",
    subjectTooLong: "El asunto es demasiado largo.",
    sendFailed:
      "Algo salió mal al enviar tu mensaje. Por favor escríbenos directo por email.",
  },
} as const;

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" },
  });
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return json({ error: MESSAGES.en.invalid }, 400);
  }

  const { name, email, subject, message, company, lang } = body;
  const m = lang === "es" ? MESSAGES.es : MESSAGES.en;

  // Honeypot tripped — pretend success so the bot doesn't learn anything,
  // just don't actually send.
  if (company) {
    return json({ ok: true });
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return json({ error: m.fillAll }, 400);
  }
  if (!EMAIL_RE.test(email)) {
    return json({ error: m.badEmail }, 400);
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return json({ error: m.tooLong }, 400);
  }
  if (subject && subject.length > MAX_SUBJECT_LENGTH) {
    return json({ error: m.subjectTooLong }, 400);
  }

  const cleanSubject = subject?.trim();
  const emailSubject = cleanSubject
    ? `${cleanSubject} — from ${name}`
    : `New message from ${name}`;

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: "Musubi contact form <contact@send.musubi.lat>",
      to: ["hello@musubi.lat"],
      reply_to: email,
      subject: emailSubject,
      text: `From: ${name} <${email}>${cleanSubject ? `\nSubject: ${cleanSubject}` : ""}\nLanguage: ${lang === "es" ? "es" : "en"}\n\n${message}`,
    }),
  });

  if (!resendRes.ok) {
    return json({ error: m.sendFailed }, 502);
  }

  return json({ ok: true });
};
