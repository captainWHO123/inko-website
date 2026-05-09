import { NextResponse } from "next/server";
import { z } from "zod";

import { siteConfig } from "@/lib/config/site-config";
import { forwardFormSubmission } from "@/lib/utils/form-forwarding";

const waitlistSchema = z.object({
  fullName: z.string().min(2, "Full name is required."),
  workEmail: z.email("Work email must be valid."),
  role: z.string().min(1, "Role is required."),
  interest: z.string().min(10, "Please share what would make the timing better for you."),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsedBody = waitlistSchema.parse(body);

    await forwardFormSubmission(siteConfig.waitlistWebhookUrl, "waitlist", parsedBody);

    return NextResponse.json({
      ok: true,
      message: "Waitlist submission received.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          ok: false,
          error: error.issues[0]?.message ?? "Invalid form submission.",
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        ok: false,
        error: "Unable to submit your waitlist request right now.",
      },
      { status: 500 },
    );
  }
}
