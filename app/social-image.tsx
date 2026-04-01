import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Anti Fund social share image with the Anti Fund word mark and thesis line.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

function SocialImage({ logoSrc }: { logoSrc: string }) {
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
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(circle at top left, rgba(205,197,183,0.28) 0%, rgba(250,248,241,0) 42%), radial-gradient(circle at bottom right, rgba(205,197,183,0.2) 0%, rgba(250,248,241,0) 38%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "920px",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 104,
              lineHeight: 0.9,
              letterSpacing: "-0.06em",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            ANTI FUND
          </div>

          <div
            style={{
              fontSize: 44,
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
              maxWidth: "760px",
            }}
          >
            Capital is commodity. Attention is not.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid #cdc5b7",
            paddingTop: "22px",
            position: "relative",
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
                fontSize: 14,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              Technology x culture
            </div>
            <div style={{ fontSize: 20 }}>antifund.com</div>
          </div>

          <img
            src={logoSrc}
            alt=""
            width="84"
            height="70"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}

export async function createSocialImage() {
  const data = await readFile(join(process.cwd(), "public/logo.png"), "base64");
  const logoSrc = `data:image/png;base64,${data}`;

  return new ImageResponse(<SocialImage logoSrc={logoSrc} />, {
    ...size,
  });
}
