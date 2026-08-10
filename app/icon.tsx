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
          border: "2px solid #141414",
          color: "#141414",
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: 0,
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
