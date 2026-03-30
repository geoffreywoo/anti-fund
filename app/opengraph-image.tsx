import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Anti Fund";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

async function getLogoSrc() {
  const logoData = await readFile(join(process.cwd(), "public/logo.png"), "base64");
  return `data:image/png;base64,${logoData}`;
}

function ShareImage({ logoSrc }: { logoSrc: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#080809",
        color: "#F0EDE8",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 42%, rgba(212,175,55,0.18), transparent 48%)",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={logoSrc}
          alt=""
          width="300"
          height="248"
          style={{ objectFit: "contain", marginBottom: 28 }}
        />
        <div
          style={{
            fontSize: 92,
            fontWeight: 800,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          ANTI FUND
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 28,
            color: "#9B9590",
          }}
        >
          Technology creates value. Culture creates demand.
        </div>
      </div>
    </div>
  );
}

export default async function Image() {
  const logoSrc = await getLogoSrc();

  return new ImageResponse(<ShareImage logoSrc={logoSrc} />, {
    ...size,
  });
}
