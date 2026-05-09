import { NextResponse } from "next/server";
import { z } from "zod";

import { siteConfig } from "@/lib/config/site-config";
import { forwardFormSubmission } from "@/lib/utils/form-forwarding";

const demoSchema = z.object({
  fullName: z.string().min(2, "Full name is required."),
  workEmail: z.email("Work email must be valid."),
  role: z.string().min(1, "Role is required."),
  teamType: z.string().min(1, "Team type is required."),
  meetingVolume: z.string().min(1, "Meeting volume is required."),
  biggestPain: z.string().min(10, "Please share a little more detail about your post-meeting pain."),
  preferredTime: z.string().min(2, "Preferred time is required."),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsedBody = demoSchema.parse(body);

    await forwardFormSubmission(siteConfig.demoWebhookUrl, "demo", parsedBody);

    return NextResponse.json({
      ok: true,
      message: "Demo request received.",
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
        error: "Unable to submit your demo request right now.",
      },
      { status: 500 },
    );
  }
}
