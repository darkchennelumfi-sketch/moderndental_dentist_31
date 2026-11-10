import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const result = contactSchema.safeParse(payload);

  if (!result.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please check the highlighted fields.",
        issues: result.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  // The original site confirmed receipt with the message below. There is no
  // mailbox integration in this build, so the validated request is accepted
  // here and the same confirmation is returned to the visitor.
  return NextResponse.json({
    ok: true,
    message: "Success! Message received.",
  });
}
