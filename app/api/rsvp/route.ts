import { NextRequest } from "next/server";
import { appendToSheet } from "@/lib/google-sheets";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, guests, attending, dietary, message } = body;

    if (!name || !email || !attending) {
      return Response.json(
        { error: "Name, email, and attendance selection are required" },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();

    await appendToSheet([
      [timestamp, name, email, attending, guests, dietary, message],
    ]);

    return Response.json({ success: true });
  } catch (error) {
    console.error("RSVP error:", error);
    return Response.json(
      { error: "Failed to save RSVP. Please try again." },
      { status: 500 }
    );
  }
}
