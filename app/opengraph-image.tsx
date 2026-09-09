import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Untuk Dewi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
          background: "#5E3A44",
        }}
      >
        <div style={{ display: "flex", marginBottom: 24 }}>
          <svg width="110" height="96" viewBox="0 0 32 28">
            <path
              d="M16 26C8 20 1 14.5 1 8.5 1 4.4 4.3 1 8.4 1c2.5 0 4.8 1.2 6.1 3.2C15.8 2.2 18.1 1 20.6 1 24.7 1 28 4.4 28 8.5c0 6-7 11.5-15 17.5z"
              fill="#F4C6CB"
            />
          </svg>
        </div>
        <div
          style={{
            display: "flex",
            color: "#FDF1EF",
            fontSize: 96,
            fontStyle: "italic",
            letterSpacing: -1,
          }}
        >
          Happy Anniversary
        </div>
        <div
          style={{
            display: "flex",
            color: "#D97A88",
            fontSize: 26,
            letterSpacing: 4,
            marginTop: 16,
            textTransform: "uppercase",
          }}
        >
          dengan sayang, Khafid
        </div>
      </div>
    ),
    { ...size }
  );
}
