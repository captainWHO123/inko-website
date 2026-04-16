const KIT_API_BASE_URL = "https://api.kit.com/v4";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type KitErrorResponse = {
  errors?: string[];
  message?: string;
};

const json = (body: Record<string, string>, init?: ResponseInit) =>
  new Response(JSON.stringify(body), {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
  });

export async function onRequestPost(context: any) {
  const { request, env } = context;

  const kitApiKey = env.KIT_API_KEY;
  const kitFormId = env.KIT_FORM_ID;

  if (!kitApiKey || !kitFormId) {
    return json(
      { error: "Missing KIT_API_KEY or KIT_FORM_ID in Cloudflare environment variables." },
      { status: 500 },
    );
  }

  let email = "";

  try {
    const body = await request.json();
    email = typeof body.email === "string" ? body.email.trim() : "";
  } catch {
    return json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!email) {
    return json({ error: "Email is required." }, { status: 400 });
  }

  if (!EMAIL_PATTERN.test(email)) {
    return json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const referrer = request.headers.get("Origin") || request.url;
  const response = await fetch(`${KIT_API_BASE_URL}/forms/${kitFormId}/subscribers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Kit-Api-Key": kitApiKey,
    },
    body: JSON.stringify({
      email_address: email,
      referrer,
    }),
  });

  const payload = (await response.json().catch(() => null)) as KitErrorResponse | null;

  if (!response.ok) {
    const errorMessage = payload?.errors?.[0] || payload?.message || "Kit rejected the submission.";
    return json(
      {
        error: errorMessage,
      },
      { status: response.status },
    );
  }

  return json({ message: "You are on the waitlist. Please check your inbox for confirmation." }, { status: 200 });
}
