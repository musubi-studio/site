/// <reference types="@cloudflare/workers-types" />

interface Env {
  RESEND_API_KEY: string;
}

interface ContactBody {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  // honeypot — hidden from real visitors via CSS; bots that fill every
  // field trip it. Never mentioned in visible copy or labels.
  company?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 5000;
const MAX_SUBJECT_LENGTH = 200;

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
    return json({ error: "Invalid request." }, 400);
  }

  const { name, email, subject, message, company } = body;

  // Honeypot tripped — pretend success so the bot doesn't learn anything,
  // just don't actually send.
  if (company) {
    return json({ ok: true });
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return json({ error: "Please fill in every field." }, 400);
  }
  if (!EMAIL_RE.test(email)) {
    return json({ error: "That doesn't look like a valid email address." }, 400);
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return json({ error: "Message is too long." }, 400);
  }
  if (subject && subject.length > MAX_SUBJECT_LENGTH) {
    return json({ error: "Subject is too long." }, 400);
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
      text: `From: ${name} <${email}>${cleanSubject ? `\nSubject: ${cleanSubject}` : ""}\n\n${message}`,
    }),
  });

  if (!resendRes.ok) {
    return json(
      {
        error:
          "Something went wrong sending your message. Please email us directly instead.",
      },
      502
    );
  }

  return json({ ok: true });
};
