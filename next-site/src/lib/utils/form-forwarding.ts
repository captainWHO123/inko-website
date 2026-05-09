export async function forwardFormSubmission(
  webhookUrl: string | undefined,
  submissionType: "demo" | "waitlist",
  payload: Record<string, string>,
) {
  if (!webhookUrl) {
    console.info(`[${submissionType}] submission`, payload);
    return;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      submissionType,
      receivedAt: new Date().toISOString(),
      payload,
    }),
  });

  if (!response.ok) {
    throw new Error(`Unable to forward ${submissionType} submission.`);
  }
}
