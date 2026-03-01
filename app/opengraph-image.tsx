import { ImageResponse } from "next/og";
import { person } from "@/data/profile";

export const alt = `${person.name} — Personal site`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #FAFAF9 0%, #FFFFFF 100%)",
          color: "#1C1917",
          fontFamily: "system-ui, sans-serif",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          {person.name}
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#57534E",
            maxWidth: 800,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          {person.headline.slice(0, 80)}
          {person.headline.length > 80 ? "…" : ""}
        </div>
        <div
          style={{
            marginTop: 48,
            padding: "12px 24px",
            background: "rgba(124, 58, 237, 0.12)",
            color: "#7C3AED",
            borderRadius: 12,
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          View profile →
        </div>
      </div>
    ),
    { ...size }
  );
}
