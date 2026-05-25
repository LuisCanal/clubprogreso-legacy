import {
  escapeHtml,
  handleOptions,
  isValidEmail,
  json,
  readJson,
} from '../_shared/http';

interface Env {
  RESEND_API_KEY: string;
  RESEND_FROM_EMAIL: string;
  CONTACT_TO_EMAIL: string;
}

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const onRequestOptions: PagesFunction = async () => handleOptions();

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { env, request } = context;

  if (!env.RESEND_API_KEY || !env.RESEND_FROM_EMAIL || !env.CONTACT_TO_EMAIL) {
    return json(
      { success: false, message: 'Configuración de correo incompleta.' },
      500,
    );
  }

  let body: ContactPayload;
  try {
    body = await readJson<ContactPayload>(request);
  } catch {
    return json({ success: false, message: 'Datos inválidos.' }, 400);
  }

  const name = (body.name || '').trim();
  const email = (body.email || '').trim();
  const subject = (body.subject || 'Consulta desde el sitio web').trim();
  const message = (body.message || '').trim();

  if (!name || !email || !message) {
    return json({ success: false, message: 'Complete los campos obligatorios.' }, 400);
  }

  if (!isValidEmail(email)) {
    return json({ success: false, message: 'Ingrese un email válido.' }, 400);
  }

  const html = `
    <h2>Nuevo mensaje de contacto</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Asunto:</strong> ${escapeHtml(subject)}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${escapeHtml(message).replaceAll('\n', '<br>')}</p>
  `;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.RESEND_FROM_EMAIL,
      to: [env.CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `[Contacto] ${subject}`,
      html,
    }),
  });

  if (!response.ok) {
    return json(
      { success: false, message: 'No se pudo enviar el mensaje. Intente más tarde.' },
      502,
    );
  }

  return json({
    success: true,
    message: 'Gracias por su mensaje. Le responderemos a la brevedad.',
  });
};
