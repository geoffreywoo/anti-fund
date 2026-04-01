import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Anti Fund social share image with the Anti Fund word mark and thesis line.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

function SocialImage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#f4efe4",
        color: "#141414",
        padding: "28px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "1px solid #cdc5b7",
          background: "#faf8f1",
          padding: "56px 58px 48px",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontFamily: '"Source Serif 4"',
              fontSize: 106,
              lineHeight: 0.88,
              letterSpacing: "-0.055em",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            ANTI FUND
          </div>

          <div
            style={{
              fontFamily: '"Source Serif 4"',
              fontSize: 44,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              fontWeight: 400,
              maxWidth: "780px",
            }}
          >
            Capital is commodity. Attention is not.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            borderTop: "1px solid #cdc5b7",
            paddingTop: "22px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              color: "#6d685d",
            }}
          >
            <div
              style={{
                fontFamily: '"IBM Plex Mono"',
                fontSize: 14,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              Technology x culture
            </div>
            <div
              style={{
                fontFamily: '"Source Serif 4"',
                fontSize: 20,
                letterSpacing: "-0.02em",
              }}
            >
              antifund.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function createSocialImage() {
  const [sourceSerifRegular, sourceSerifBold, ibmPlexMono] = await Promise.all([
    readFile(join(process.cwd(), "app/fonts/SourceSerif4-Regular.ttf")),
    readFile(join(process.cwd(), "app/fonts/SourceSerif4-Bold.ttf")),
    readFile(join(process.cwd(), "app/fonts/IBMPlexMono-Medium.ttf")),
  ]);

  return new ImageResponse(<SocialImage />, {
    ...size,
    fonts: [
      {
        name: "Source Serif 4",
        data: sourceSerifRegular,
        weight: 400,
        style: "normal",
      },
      {
        name: "Source Serif 4",
        data: sourceSerifBold,
        weight: 700,
        style: "normal",
      },
      {
        name: "IBM Plex Mono",
        data: ibmPlexMono,
        weight: 500,
        style: "normal",
      },
    ],
  });
}
