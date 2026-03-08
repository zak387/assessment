import { NextRequest, NextResponse } from "next/server";

const KIT_API_KEY = process.env.KIT_API_KEY ?? "";
const TAG_IDS: Record<string, string> = {
  high_risk: process.env.KIT_TAG_HIGH_RISK_ID ?? "",
  moderate:  process.env.KIT_TAG_MODERATE_ID ?? "",
  low_risk:  process.env.KIT_TAG_LOW_RISK_ID ?? "",
};

export async function POST(req: NextRequest) {
  try {
    const { email, firstName, score, tier, blindSpots } = await req.json() as {
      email: string;
      firstName: string;
      score: number;
      tier: string;
      blindSpots: string[];
    };

    const tagId = TAG_IDS[tier];
    if (!KIT_API_KEY || !tagId) {
      return NextResponse.json({ error: "Kit not configured" }, { status: 500 });
    }

    const res = await fetch(`https://api.convertkit.com/v3/tags/${tagId}/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: KIT_API_KEY,
        email,
        first_name: firstName,
        fields: {
          score: String(score),
          tier,
          blind_spot_1: blindSpots[0] ?? "",
          blind_spot_2: blindSpots[1] ?? "",
          blind_spot_3: blindSpots[2] ?? "",
        },
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      return NextResponse.json({ error: body }, { status: res.status });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
