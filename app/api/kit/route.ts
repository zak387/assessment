import { NextRequest, NextResponse } from "next/server";

const KIT_API_KEY = process.env.KIT_API_KEY ?? "";
const TAG_IDS: Record<string, number> = {
  high_risk: Number(process.env.KIT_TAG_HIGH_RISK_ID ?? "0"),
  moderate:  Number(process.env.KIT_TAG_MODERATE_ID ?? "0"),
  low_risk:  Number(process.env.KIT_TAG_LOW_RISK_ID ?? "0"),
};

export async function POST(req: NextRequest) {
  try {
    const { email, firstName, score, tier, blindSpots, source } = await req.json() as {
      email: string;
      firstName: string;
      score: number;
      tier: string;
      blindSpots: string[];
      source: string;
    };

    const tagId = TAG_IDS[tier];
    if (!KIT_API_KEY || !tagId) {
      return NextResponse.json({ error: "Kit not configured" }, { status: 500 });
    }

    const headers = {
      "Content-Type": "application/json",
      "X-Kit-Api-Key": KIT_API_KEY,
    };

    // Step 1: Create/update subscriber with custom fields
    // Field keys must match the exact label as defined in Kit account
    const subscriberRes = await fetch("https://api.kit.com/v4/subscribers", {
      method: "POST",
      headers,
      body: JSON.stringify({
        email_address: email,
        first_name: firstName,
        state: "active",
        fields: {
          score: String(score),
          tier,
          blind_spot_1: blindSpots[0] ?? "",
          blind_spot_2: blindSpots[1] ?? "",
          blind_spot_3: blindSpots[2] ?? "",
          utm_source: source,
        },
      }),
    });

    if (!subscriberRes.ok) {
      const body = await subscriberRes.text();
      return NextResponse.json({ error: `Subscriber create failed: ${body}` }, { status: subscriberRes.status });
    }

    // Step 2: Tag the subscriber
    const tagRes = await fetch(`https://api.kit.com/v4/tags/${tagId}/subscribers`, {
      method: "POST",
      headers,
      body: JSON.stringify({ email_address: email }),
    });

    if (!tagRes.ok) {
      const body = await tagRes.text();
      return NextResponse.json({ error: `Tag failed: ${body}` }, { status: tagRes.status });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
