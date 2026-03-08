import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Are You and Your Family Eating Non-Toxic? | Free Assessment";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#7A9B7D",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle circle accents */}
        <div style={{
          position: "absolute", top: -120, right: -120,
          width: 400, height: 400, borderRadius: "50%",
          background: "rgba(255,255,255,0.07)", display: "flex",
        }} />
        <div style={{
          position: "absolute", bottom: -80, left: -80,
          width: 300, height: 300, borderRadius: "50%",
          background: "rgba(255,255,255,0.07)", display: "flex",
        }} />

        {/* Brand label */}
        <p style={{
          color: "rgba(255,255,255,0.75)",
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          margin: "0 0 28px",
        }}>
          Clean Kitchen Nutrition · Free 2-Minute Assessment
        </p>

        {/* Main headline */}
        <h1 style={{
          color: "white",
          fontSize: 68,
          fontWeight: 900,
          textAlign: "center",
          lineHeight: 1.1,
          margin: "0 0 28px",
          maxWidth: 960,
        }}>
          Are You and Your Family Eating Non-Toxic?
        </h1>

        {/* Subtext */}
        <p style={{
          color: "rgba(255,255,255,0.82)",
          fontSize: 26,
          textAlign: "center",
          margin: "0 0 48px",
          maxWidth: 720,
          lineHeight: 1.4,
        }}>
          Find out exactly where toxic ingredients are sneaking into your family&apos;s diet — and what to do about it.
        </p>

        {/* CTA pill */}
        <div style={{
          background: "white",
          color: "#7A9B7D",
          fontSize: 22,
          fontWeight: 700,
          padding: "16px 44px",
          borderRadius: 100,
        }}>
          Get My Free Score →
        </div>
      </div>
    ),
    { ...size }
  );
}
