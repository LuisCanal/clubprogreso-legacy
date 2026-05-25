import { captchaSecret, createCaptchaChallenge } from '../../_shared/captcha';
import { handleOptions, json } from '../../_shared/http';

interface Env {
  CAPTCHA_SECRET?: string;
  RESEND_API_KEY?: string;
  MAILCHIMP_API_KEY?: string;
}

export const onRequestOptions: PagesFunction = async () => handleOptions();

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const secret = captchaSecret(context.env);
  if (!secret) {
    return json({ success: false, message: 'Captcha no configurado.' }, 500);
  }

  const challenge = await createCaptchaChallenge(secret);
  return json({
    success: true,
    question: challenge.question,
    token: challenge.token,
  });
};
