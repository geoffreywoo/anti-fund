import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Anti Fund";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public/logo.png"), "base64");
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf8f1",
          color: "#141414",
          padding: "52px 64px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            borderBottom: "1px solid #cdc5b7",
            paddingBottom: "24px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 15,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#6d685d",
              }}
            >
              Anti Fund memorandum 01
            </div>
            <div
              style={{
                fontSize: 30,
                marginTop: "10px",
                fontWeight: 600,
              }}
            >
              Founder-facing whitepaper
            </div>
          </div>

          <img
            src={logoSrc}
            alt=""
            width="88"
            height="72"
            style={{ objectFit: "contain" }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 82,
              lineHeight: 0.95,
              letterSpacing: "-0.05em",
              maxWidth: "900px",
              fontWeight: 700,
            }}
          >
            Capital is commodity. Attention is not.
          </div>
          <div
            style={{
              marginTop: "24px",
              fontSize: 30,
              color: "#373631",
              maxWidth: "760px",
            }}
          >
            The future is forged at the intersection of tech and culture.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #cdc5b7",
            paddingTop: "18px",
            fontSize: 16,
            color: "#6d685d",
          }}
        >
          <div>Correspondence: founders@antifund.com</div>
          <div>antifund.com</div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
