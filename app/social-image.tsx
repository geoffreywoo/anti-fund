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
        padding: "28px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          border: "1px solid #cdc5b7",
          background: "#faf8f1",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "58%",
            display: "flex",
            position: "relative",
            borderBottom: "1px solid #cdc5b7",
            background: "#e7e1d3",
          }}
        >
          <img
            src={teamPhotoSrc}
            alt=""
            width="1144"
            height="344"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 16%",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              background:
                "linear-gradient(180deg, rgba(20,20,20,0.02) 0%, rgba(20,20,20,0.14) 100%)",
            }}
          />
        </div>

        <div
          style={{
            width: "100%",
            height: "42%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "30px 38px 32px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                maxWidth: "820px",
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#6d685d",
                }}
              >
                Anti Fund
              </div>
              <div
                style={{
                  fontSize: 58,
                  lineHeight: 0.94,
                  letterSpacing: "-0.05em",
                  fontWeight: 700,
                }}
              >
                Capital is commodity. Attention is not.
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
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid #cdc5b7",
              paddingTop: "16px",
              fontSize: 16,
              color: "#6d685d",
            }}
          >
            <div>antifund.com</div>
            <div>Technology x culture</div>
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
