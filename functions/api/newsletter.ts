import { handleOptions, isValidEmail, json, readJson } from '../_shared/http';

interface Env {
  MAILCHIMP_API_KEY: string;
  MAILCHIMP_LIST_ID: string;
  MAILCHIMP_SERVER_PREFIX: string;
}

interface NewsletterPayload {
  email?: string;
  fname?: string;
  lname?: string;
  phone?: string;
  memberCategory?: string;
  honeypot?: string;
}

export const onRequestOptions: PagesFunction = async () => handleOptions();

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { env, request } = context;

  if (!env.MAILCHIMP_API_KEY || !env.MAILCHIMP_LIST_ID || !env.MAILCHIMP_SERVER_PREFIX) {
    return json(
      { success: false, message: 'Configuración de newsletter incompleta.' },
      500,
    );
  }

  let body: NewsletterPayload;
  try {
    body = await readJson<NewsletterPayload>(request);
  } catch {
    return json({ success: false, message: 'Datos inválidos.' }, 400);
  }

  if (body.honeypot) {
    return json({ success: true, message: 'Gracias por suscribirse.' });
  }

  const email = (body.email || '').trim();
  const fname = (body.fname || '').trim();
  const lname = (body.lname || '').trim();
  const phone = (body.phone || '').trim();
  const memberCategory = (body.memberCategory || '').trim();

  if (!email || !fname || !lname) {
    return json({ success: false, message: 'Complete los campos obligatorios.' }, 400);
  }

  if (!isValidEmail(email)) {
    return json({ success: false, message: 'Ingrese un email válido.' }, 400);
  }

  const endpoint = `https://${env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${env.MAILCHIMP_LIST_ID}/members`;
  const auth = btoa(`anystring:${env.MAILCHIMP_API_KEY}`);

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: fname,
        LNAME: lname,
        MMERGE5: memberCategory,
        MMERGE7: phone,
      },
    }),
  });

  if (response.ok) {
    return json({
      success: true,
      message: 'Gracias por suscribirse a nuestro boletín de novedades.',
    });
  }

  const errorBody = (await response.json().catch(() => ({}))) as {
    title?: string;
    detail?: string;
  };

  if (errorBody.title === 'Member Exists') {
    return json({
      success: true,
      message: 'Este email ya está suscripto a nuestro boletín.',
    });
  }

  return json(
    {
      success: false,
      message: 'No se pudo completar la suscripción. Intente más tarde.',
    },
    502,
  );
};
