import { captchaSecret, verifyCaptchaAnswer } from '../_shared/captcha';
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
  RESERVAS_TO_EMAIL: string;
  CAPTCHA_SECRET?: string;
}

interface ReservaPayload {
  name?: string;
  email?: string;
  phone?: string;
  salon?: string;
  date?: string;
  time?: string;
  message?: string;
  captchaToken?: string;
  captchaAnswer?: string;
}

export const onRequestOptions: PagesFunction = async () => handleOptions();

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { env, request } = context;

  if (!env.RESEND_API_KEY || !env.RESEND_FROM_EMAIL || !env.RESERVAS_TO_EMAIL) {
    return json(
      { success: false, message: 'Configuración de correo incompleta.' },
      500,
    );
  }

  const secret = captchaSecret(env);
  if (!secret) {
    return json(
      { success: false, message: 'Configuración de captcha incompleta.' },
      500,
    );
  }

  let body: ReservaPayload;
  try {
    body = await readJson<ReservaPayload>(request);
  } catch {
    return json({ success: false, message: 'Datos inválidos.' }, 400);
  }

  const captchaOk = await verifyCaptchaAnswer(
    secret,
    body.captchaToken || '',
    body.captchaAnswer ?? '',
  );

  if (!captchaOk) {
    return json(
      {
        success: false,
        message: 'La verificación anti-bots es incorrecta o expiró. Intente nuevamente.',
        field: 'captcha',
      },
      400,
    );
  }

  const name = (body.name || '').trim();
  const email = (body.email || '').trim();
  const phone = (body.phone || '').trim();
  const salon = (body.salon || '').trim();
  const date = (body.date || '').trim();
  const time = (body.time || '').trim();
  const message = (body.message || '').trim();

  const missing: Record<string, string> = {};
  if (!name) missing.name = 'Ingrese su nombre y apellido.';
  if (!email) missing.email = 'Ingrese su e-mail.';
  else if (!isValidEmail(email)) missing.email = 'Ingrese un e-mail válido.';
  if (!phone) missing.phone = 'Ingrese su teléfono.';
  if (!salon) missing.salon = 'Seleccione un espacio a reservar.';
  if (!date) missing.date = 'Seleccione la fecha de reserva.';
  if (!time) missing.time = 'Indique el horario de la reserva.';

  if (Object.keys(missing).length > 0) {
    return json(
      {
        success: false,
        message: 'Complete los campos obligatorios marcados con *.',
        fields: missing,
      },
      400,
    );
  }

  const html = `
    <h2>Nueva solicitud de reserva</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Teléfono:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Salón:</strong> ${escapeHtml(salon)}</p>
    <p><strong>Fecha:</strong> ${escapeHtml(date)}</p>
    <p><strong>Horario:</strong> ${escapeHtml(time)}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${escapeHtml(message || '-').replaceAll('\n', '<br>')}</p>
  `;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.RESEND_FROM_EMAIL,
      to: [env.RESERVAS_TO_EMAIL],
      reply_to: email,
      subject: `[Reserva] ${salon} - ${date}`,
      html,
    }),
  });

  if (!response.ok) {
    return json(
      { success: false, message: 'No se pudo enviar la reserva. Intente más tarde.' },
      502,
    );
  }

  return json({
    success: true,
    message: 'Gracias. Recibimos su solicitud de reserva y le responderemos a la brevedad.',
  });
};
