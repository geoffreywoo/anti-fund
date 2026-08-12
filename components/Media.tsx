import Image from "next/image";

const featured = [
  {
    source: "a16z / The a16z Show",
    title: "Jake Paul & Geoff Woo on The a16z Show",
    description:
      "Anti Fund's growth strategy, the firm's origin story, founder taste, and why attention compounds as an operating advantage.",
    href: "https://www.youtube.com/watch?v=yfafpyhB-8E",
    imageSrc: "/media/a16z-anti-fund.jpg",
    alt: "Geoff Woo, Jake Paul, and Logan Paul on The a16z Show.",
  },
  {
    source: "Field visit / Anduril",
    title: "Inside Anduril with Palmer Luckey",
    description:
      "A look inside autonomous defense systems, American manufacturing, and the technologies reshaping national resilience.",
    href: "https://www.youtube.com/watch?v=pLgkMr4axwo",
    imageSrc: "/media/anduril-palmer-luckey.jpg",
    alt: "Geoff Woo, Palmer Luckey, and Jake Paul at Anduril.",
  },
];

const archive = [
  {
    label: "Anti Fund Summit",
    href: "https://www.youtube.com/watch?v=BWx8F_YgVt4",
    type: "Watch",
  },
  {
    label: "Another look at Anti Fund Summit",
    href: "https://www.youtube.com/watch?v=PIH2C-dLLUc",
    type: "Watch",
  },
  {
    label: "48 hours with Anti Fund",
    href: "https://www.youtube.com/watch?v=4ND2P-HydlM",
    type: "Watch",
  },
  {
    label: "The Profile: Jake and Logan Paul's investment plan",
    href: "https://www.readtheprofile.com/p/jake-paul-logan-paul-billionaire-plan-investment",
    type: "Read",
  },
];

export default function Media() {
  return (
    <section
      id="media"
      className="px-5 py-14 sm:px-6 sm:py-20 md:px-10 md:py-28 lg:px-14"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 border-t border-line pt-5 sm:gap-8 sm:pt-6 lg:grid-cols-[140px_minmax(0,1fr)] lg:gap-10">
          <div className="paper-label">07 / Media & Field Notes</div>

          <div className="space-y-8 sm:space-y-10">
            <div>
              <h2 className="max-w-4xl font-display text-[2.15rem] leading-[1.04] text-ink sm:text-4xl md:text-5xl">
                In conversation. On the ground.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-[1.65] text-ink-soft sm:mt-5 sm:text-lg sm:leading-8">
                Conversations and field visits show the thesis in practice.
              </p>
            </div>

            <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
              {featured.map((item) => (
                <article
                  key={item.href}
                  className="overflow-hidden border border-line bg-paper-alt"
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border-b border-line focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-accent"
                  >
                    <Image
                      src={item.imageSrc}
                      alt={item.alt}
                      width={1280}
                      height={720}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="aspect-video h-auto w-full object-cover"
                    />
                  </a>

                  <div className="px-4 py-4 sm:px-6 sm:py-6">
                    <p className="paper-label">{item.source}</p>
                    <h3 className="mt-3 font-display text-[1.4rem] leading-[1.08] text-ink sm:mt-4 sm:text-3xl">
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="paper-link"
                      >
                        {item.title}
                      </a>
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-6 text-ink-soft sm:mt-4 sm:text-base sm:leading-7">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div>
              <p className="paper-label mb-3">Archive</p>
              <div className="border-y border-line">
                {archive.map((item, index) => (
                  <div
                    key={item.href}
                    className="grid grid-cols-[24px_minmax(0,1fr)_40px] items-start gap-3 border-b border-line py-3.5 last:border-b-0 sm:grid-cols-[44px_minmax(0,1fr)_70px] sm:items-baseline sm:gap-6 sm:py-4"
                  >
                    <span className="font-mono text-[10px] uppercase text-ink-muted sm:text-[11px]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="paper-link text-[0.95rem] leading-6 sm:text-base sm:leading-7"
                    >
                      {item.label}
                    </a>
                    <span className="pt-0.5 text-right font-mono text-[10px] uppercase text-ink-muted sm:pt-0 sm:text-left sm:text-[11px]">
                      {item.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
