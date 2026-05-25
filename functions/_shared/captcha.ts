const CAPTCHA_TTL_MS = 10 * 60 * 1000;

async function hmacSign(message: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const signature = await crypto.subtle.sign(
    'HMAC',
    key,
    new TextEncoder().encode(message),
  );
  return btoa(String.fromCharCode(...new Uint8Array(signature)));
}

function randomDigit(): number {
  const bytes = new Uint32Array(1);
  crypto.getRandomValues(bytes);
  return (bytes[0] % 9) + 1;
}

export async function createCaptchaChallenge(secret: string): Promise<{
  question: string;
  token: string;
}> {
  const a = randomDigit();
  const b = randomDigit();
  const answer = a + b;
  const exp = Date.now() + CAPTCHA_TTL_MS;
  const payload = `${a}:${b}:${answer}:${exp}`;
  const signature = await hmacSign(payload, secret);

  return {
    question: `¿Cuánto es ${a} + ${b}?`,
    token: `${btoa(payload)}.${signature}`,
  };
}

export async function verifyCaptchaAnswer(
  secret: string,
  token: string,
  answer: string,
): Promise<boolean> {
  if (!token || answer === undefined || answer === null || answer === '') {
    return false;
  }

  const [encodedPayload, signature] = token.split('.');
  if (!encodedPayload || !signature) {
    return false;
  }

  let payload: string;
  try {
    payload = atob(encodedPayload);
  } catch {
    return false;
  }

  const expectedSignature = await hmacSign(payload, secret);
  if (signature !== expectedSignature) {
    return false;
  }

  const [aRaw, bRaw, expectedAnswerRaw, expRaw] = payload.split(':');
  const a = Number(aRaw);
  const b = Number(bRaw);
  const expectedAnswer = Number(expectedAnswerRaw);
  const exp = Number(expRaw);

  if (!Number.isFinite(a) || !Number.isFinite(b) || !Number.isFinite(expectedAnswer) || !Number.isFinite(exp)) {
    return false;
  }

  if (Date.now() > exp) {
    return false;
  }

  if (a + b !== expectedAnswer) {
    return false;
  }

  return Number(String(answer).trim()) === expectedAnswer;
}

export function captchaSecret(env: {
  CAPTCHA_SECRET?: string;
  RESEND_API_KEY?: string;
}): string | null {
  return env.CAPTCHA_SECRET || env.RESEND_API_KEY || null;
}
