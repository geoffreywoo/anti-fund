import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Anti Fund social share image featuring Geoffrey Woo, Jake Paul, and Logan Paul.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

async function getAssetSrc(path: string) {
  const data = await readFile(join(process.cwd(), path), "base64");
  const extension = path.endsWith(".jpg") || path.endsWith(".jpeg") ? "jpeg" : "png";
  return `data:image/${extension};base64,${data}`;
}

function SocialImage({
  logoSrc,
  teamPhotoSrc,
}: {
  logoSrc: string;
  teamPhotoSrc: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#f4efe4",
        color: "#141414",
        padding: "30px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          border: "1px solid #cdc5b7",
          background: "#faf8f1",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "66%",
            height: "100%",
            display: "flex",
            position: "relative",
            borderRight: "1px solid #cdc5b7",
            background: "#e7e1d3",
          }}
        >
          <img
            src={teamPhotoSrc}
            alt=""
            width="792"
            height="570"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 24%",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              background:
                "linear-gradient(180deg, rgba(20,20,20,0.02) 0%, rgba(20,20,20,0.26) 100%)",
            }}
          />
        </div>

        <div
          style={{
            width: "34%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "36px 34px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                borderBottom: "1px solid #cdc5b7",
                paddingBottom: "20px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    fontSize: 14,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#6d685d",
                  }}
                >
                  Anti Fund memorandum 01
                </div>
                <div
                  style={{
                    marginTop: "10px",
                    fontSize: 28,
                    fontWeight: 600,
                  }}
                >
                  Firm manifesto
                </div>
              </div>

              <img
                src={logoSrc}
                alt=""
                width="72"
                height="60"
                style={{ objectFit: "contain" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <div
                style={{
                  fontSize: 52,
                  lineHeight: 0.96,
                  letterSpacing: "-0.05em",
                  fontWeight: 700,
                }}
              >
                Capital is commodity. Attention is not.
              </div>
              <div
                style={{
                  fontSize: 24,
                  lineHeight: 1.3,
                  color: "#373631",
                }}
              >
                Geoffrey Woo, Jake Paul, and Logan Paul for Anti Fund.
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              borderTop: "1px solid #cdc5b7",
              paddingTop: "18px",
              fontSize: 15,
              color: "#6d685d",
            }}
          >
            <div>Technology x culture. Attention asymmetry. Power-law outcomes.</div>
            <div>antifund.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function createSocialImage() {
  const [logoSrc, teamPhotoSrc] = await Promise.all([
    getAssetSrc("public/logo.png"),
    getAssetSrc("public/team-general-partners.jpg"),
  ]);

  return new ImageResponse(
    <SocialImage logoSrc={logoSrc} teamPhotoSrc={teamPhotoSrc} />,
    {
      ...size,
    },
  );
}
