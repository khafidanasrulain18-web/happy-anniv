import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#5E3A44",
        }}
      >
        <svg width="100" height="88" viewBox="0 0 32 28">
          <path
            d="M16 26C8 20 1 14.5 1 8.5 1 4.4 4.3 1 8.4 1c2.5 0 4.8 1.2 6.1 3.2C15.8 2.2 18.1 1 20.6 1 24.7 1 28 4.4 28 8.5c0 6-7 11.5-15 17.5z"
            fill="#F4C6CB"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
