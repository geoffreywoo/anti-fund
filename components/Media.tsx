import Image from "next/image";

const featured = [
  {
    source: "Field visit / El Segundo",
    title: "Jake Paul & Geoff Woo visit El Segundo",
    description:
      "On the ground with the hardware startups building in El Segundo.",
    href: "https://www.youtube.com/watch?v=DhVwnSa31WM&t=4s",
    imageSrc: "/media/el-segundo-jake-geoff.jpg",
    alt: "Jake Paul and Geoff Woo visit hardware startups in El Segundo.",
  },
  {
    source: "Anti Fund / Silicon Valley",
    title: "48 hours with Anti Fund",
    description:
      "Geoff Woo and Logan Paul across Silicon Valley, with Sam Altman, Sequoia, and the Anti Fund founder network.",
    href: "https://www.youtube.com/watch?v=4ND2P-HydlM",
    imageSrc: "/media/48-hours-anti-fund.jpg",
    alt: "Geoff Woo and Logan Paul in Silicon Valley.",
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
    label: "Sequoia: Catalyst turns ideas into trades — October 8, 2026",
    href: "https://sequoiacap.com/article/partnering-with-catalyst-turning-ideas-into-trades",
    type: "Read",
  },
  {
    label: "Jake Paul & Geoff Woo on The a16z Show",
    href: "https://www.youtube.com/watch?v=yfafpyhB-8E",
    type: "Watch",
  },
  {
    label: "20VC: Jake Paul & Geoff Woo on attention as an investing edge",
    href: "https://www.youtube.com/watch?v=rWn3KgO9Dvk",
    type: "Watch",
  },
  {
    label: "The Pomp Podcast: Geoff Woo on AI choke points and defense",
    href: "https://www.youtube.com/watch?v=jjf-GBgkTIk",
    type: "Watch",
  },
  {
    label: "Trailblazers with Erica Wenger: Geoff Woo on building Anti Fund",
    href: "https://podcasts.apple.com/us/podcast/geoff-woo-the-ugly-truth-about-venture-capital/id1562612842?i=1000777712667",
    type: "Listen",
  },
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
    label: "The Profile: Jake and Logan Paul's investment plan",
    href: "https://www.readtheprofile.com/p/jake-paul-logan-paul-billionaire-plan-investment",
    type: "Read",
  },
];

function FieldStory({ item }: { item: (typeof featured)[number] }) {
  return (
    <article className="grid gap-4 sm:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] sm:items-center sm:gap-6">
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden border border-line bg-paper-alt focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <Image
          src={item.imageSrc}
          alt={item.alt}
          width={1280}
          height={720}
          sizes="(min-width: 1280px) 380px, (min-width: 1024px) 32vw, (min-width: 640px) 42vw, calc(100vw - 40px)"
          className="aspect-video h-auto w-full object-cover"
        />
      </a>
      <div>
        <p className="paper-label">{item.source}</p>
        <h3 className="mt-2 font-body text-lg font-medium leading-snug text-ink sm:text-xl">
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="paper-link"
          >
            {item.title}
          </a>
        </h3>
        <p className="mt-2 font-body text-[15px] leading-relaxed text-ink-soft">
          {item.description}
        </p>
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="paper-link mt-3 inline-block py-1 font-body text-sm"
          aria-label={`Watch ${item.title}`}
        >
          Watch the visit <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

export default function Media() {
  return (
    <section id="media" className="page-section">
      <div className="mx-auto max-w-6xl">
        <div className="section-frame">
          <div className="paper-label">Field notes</div>

          <div className="space-y-6 sm:space-y-8">
            <h2 className="section-heading">On the ground.</h2>

            <div data-featured-field-story>
              <FieldStory item={featured[0]} />
            </div>

            <details data-media-archive className="border-y border-line">
              <summary className="cursor-pointer py-4 font-body text-sm leading-relaxed text-ink hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                More conversations &amp; field notes
              </summary>
              <div className="space-y-6 border-t border-line py-6 sm:space-y-8">
                {featured.slice(1).map((item) => (
                  <FieldStory key={item.href} item={item} />
                ))}

                <div>
                  <p className="paper-label mb-3">Conversations &amp; events</p>
                  <div className="border-t border-line">
                    {archive.map((item) => (
                      <div
                        key={item.href}
                        className="grid grid-cols-[minmax(0,1fr)_48px] items-baseline gap-4 border-b border-line py-3 last:border-b-0"
                      >
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="paper-link font-body text-[15px] leading-relaxed"
                        >
                          {item.label}
                        </a>
                        <span className="text-right font-mono text-xs text-ink-muted">
                          {item.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
