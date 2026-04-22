import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, teamSize, interest } = body;

    // Basic validation
    if (!name || !email || !company) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and company are required.' },
        { status: 400 }
      );
    }

    // ── Drop your CRM / email integration here ──────────────────────────────
    // Example: POST to HubSpot, Salesforce, Mailchimp, or send via Nodemailer
    // For now we log and return success so the UI flow works end-to-end.
    console.log('[Lead Capture]', { name, email, phone, company, teamSize, interest });
    // ────────────────────────────────────────────────────────────────────────

    return NextResponse.json(
      { success: true, message: 'Thank you! Our enterprise team will reach out within 24 hours.' },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}