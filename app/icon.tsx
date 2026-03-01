import { ImageResponse } from "next/og";
import { person } from "@/data/profile";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  const initial = person.name.charAt(0).toUpperCase();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAFAF9",
          color: "#7C3AED",
          fontSize: 18,
          fontWeight: 700,
          fontFamily: "system-ui, sans-serif",
          borderRadius: 8,
          border: "1px solid #E7E5E4",
        }}
      >
        {initial}
      </div>
    ),
    { ...size }
  );
}
