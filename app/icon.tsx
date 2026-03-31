import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#faf8f1",
          color: "#141414",
          border: "1px solid #cdc5b7",
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: "-0.05em",
        }}
      >
        AF
      </div>
    ),
    {
      ...size,
    },
  );
}
