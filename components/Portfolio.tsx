import type { CSSProperties } from "react";

type Company = {
  name: string;
  url: string;
  description: string;
  stage: string;
  partnered: string;
  personal?: boolean;
};

const softwareCompanies: Company[] = [
  {
    name: "Ramp",
    url: "https://ramp.com/",
    description: "Easy-to-use corporate cards.",
    stage: "Seed / Series B / Series E",
    partnered: "2019",
    personal: true,
  },
  {
    name: "Chronosphere",
    url: "https://chronosphere.io/",
    description: "Observability platform. Acquired by Palo Alto Networks for $3.35B.",
    stage: "Seed / Exit",
    partnered: "2019",
    personal: true,
  },
  {
    name: "Aerodome",
    url: "https://www.aerodome.com/",
    description: "Public safety drones and air support acquired by Flock Safety.",
    stage: "Seed / Exit",
    partnered: "2023",
  },
  {
    name: "Metis",
    url: "https://www.withmetis.ai/",
    description:
      "Post-training and continual-learning layer for enterprise agents. Acquired by DoorDash in March 2026.",
    stage: "Seed / Exit",
    partnered: "2025",
  },
  {
    name: "OpenAI",
    url: "https://openai.com/",
    description: "Building safe and beneficial AGI.",
    stage: "Growth",
    partnered: "2025",
  },
  {
    name: "SpaceX",
    url: "https://www.spacex.com/",
    description: "Making humans interplanetary through space technology.",
    stage: "Growth",
    partnered: "2026",
  },
  {
    name: "Anduril",
    url: "https://www.anduril.com/",
    description: "Transforming defense capabilities with advanced technology.",
    stage: "Series E",
    partnered: "2022",
  },
  {
    name: "Erebor",
    url: "https://erebor.bank/",
    description: "New bank.",
    stage: "Series B",
    partnered: "2026",
  },
  {
    name: "Cognition",
    url: "https://cognition.ai/",
    description: "An applied AI lab building end-to-end software agents.",
    stage: "Series B",
    partnered: "2024",
  },
  {
    name: "Etched",
    url: "https://www.etched.com/",
    description: "Transformer ASICs.",
    stage: "Series B",
    partnered: "2025",
  },
  {
    name: "Modal",
    url: "https://modal.com/",
    description: "AI infrastructure.",
    stage: "Series B",
    partnered: "2025",
  },
  {
    name: "Lighter",
    url: "https://lighter.xyz/",
    description:
      "A fully verifiable decentralized exchange built with custom ZK infrastructure, inheriting Ethereum security and composability.",
    stage: "Series B",
    partnered: "2025",
  },
  {
    name: "Polymarket",
    url: "https://polymarket.com/",
    description: "The world's largest prediction market.",
    stage: "Series A",
    partnered: "2021",
  },
  {
    name: "Kela Systems",
    url: "https://kelasys.com/",
    description: "Defense tech.",
    stage: "Series A",
    partnered: "2024",
  },
  {
    name: "Archive",
    url: "https://archive.com/",
    description: "End-to-end creator marketing AI.",
    stage: "Seed / Series A",
    partnered: "2022",
  },
  {
    name: "Merge",
    url: "https://www.merge.io/",
    description: "Brain-computer interface.",
    stage: "Seed",
    partnered: "2025",
  },
  {
    name: "Physical Intelligence",
    url: "https://www.physicalintelligence.company/",
    description: "Bringing general-purpose AI into the physical world.",
    stage: "Seed",
    partnered: "2024",
  },
  {
    name: "WithCoverage",
    url: "https://withcoverage.com/",
    description: "Risk management solution for ambitious businesses.",
    stage: "Seed",
    partnered: "2024",
  },
  {
    name: "Cluely",
    url: "https://cluely.com/",
    description: "AI desktop assistant.",
    stage: "Seed",
    partnered: "2025",
  },
  {
    name: "Interaction",
    url: "https://poke.com/",
    description: "Poke.com.",
    stage: "Seed",
    partnered: "2025",
  },
  {
    name: "Natural",
    url: "https://www.natural.co/",
    description: "Payments for AI agents.",
    stage: "Seed",
    partnered: "2025",
  },
];

const consumerCompanies: Company[] = [
  {
    name: "Betr",
    url: "https://betr.app/",
    description: "Fast-growing online sports betting, fantasy, and media company.",
    stage: "Incubation",
    partnered: "2021",
  },
  {
    name: "W",
    url: "https://getw.com/",
    description: "Personal care brand built to inspire young men to take Ws.",
    stage: "Incubation",
    partnered: "2024",
  },
  {
    name: "Passes",
    url: "https://www.passes.com/",
    description: "Creator commerce platform.",
    stage: "Seed",
    partnered: "2022",
  },
  {
    name: "Ketone-IQ",
    url: "https://ketone.com/",
    description: "Energy from ketones, not sugar or caffeine.",
    stage: "Seed",
    partnered: "2022",
  },
  {
    name: "SipMargs",
    url: "https://www.sipmargs.com/",
    description: "Sparkling margarita RTD with Alix Earle.",
    stage: "Seed",
    partnered: "2024",
  },
  {
    name: "Khloud",
    url: "https://khloudfoods.com/",
    description: "Khloe Kardashian's protein popcorn.",
    stage: "Seed",
    partnered: "2025",
  },
  {
    name: "Happy Dad",
    url: "https://happydad.com/",
    description: "Nelk's hard seltzer and tea.",
    stage: "Seed+",
    partnered: "2025",
  },
  {
    name: "Wander",
    url: "https://www.wander.com/",
    description: "Luxury travel platform with hotel-grade hospitality.",
    stage: "Series A",
    partnered: "2022",
  },
  {
    name: "Oats Overnight",
    url: "https://www.oatsovernight.com/",
    description: "Oatmeal.",
    stage: "Series A",
    partnered: "2022",
  },
  {
    name: "Palm Tree Crew",
    url: "https://www.palmtreecrew.com/",
    description: "Live entertainment and tropical lifestyle.",
    stage: "Series A",
    partnered: "2023",
  },
  {
    name: "Kings League",
    url: "https://kingsleague.pro/",
    description: "Global, creator-led 7 vs 7 soccer league.",
    stage: "Series A",
    partnered: "2024",
  },
  {
    name: "Olipop",
    url: "https://drinkolipop.com/",
    description: "Healthy prebiotic soda.",
    stage: "Series B",
    partnered: "2022",
  },
  {
    name: "Eight Sleep",
    url: "https://www.eightsleep.com/",
    description: "Smart beds.",
    stage: "Seed",
    partnered: "2021",
    personal: true,
  },
];

const highlightCompanies = [
  "OpenAI",
  "SpaceX",
  "Anduril",
  "Ramp",
  "Cognition",
  "Physical Intelligence",
  "Chronosphere",
  "Polymarket",
].join(", ");

function CompanyRow({
  company,
  index,
}: {
  company: Company;
  index: number;
}) {
  return (
    <div
      className="portfolio-row grid gap-3 border-b border-line py-4 md:grid-cols-[44px_minmax(0,220px)_minmax(0,1fr)_120px_90px] md:gap-6"
      style={{ "--row-delay": `${index * 50}ms` } as CSSProperties}
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="min-w-0">
        <a
          href={company.url}
          target="_blank"
          rel="noopener noreferrer"
          className="paper-link inline-block font-display text-2xl leading-none tracking-[-0.03em] text-ink"
        >
          {company.name}
        </a>
        {company.personal ? "*" : ""}
      </div>
      <span className="text-base leading-7 text-ink-soft">{company.description}</span>
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
        {company.stage}
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
        {company.partnered}
      </span>
    </div>
  );
}

function CompanyGroup({
  title,
  companies,
}: {
  title: string;
  companies: Company[];
}) {
  return (
    <div>
      <p className="paper-label mb-3">{title}</p>
      <div className="border-y border-line">
        <div className="hidden border-b border-line bg-paper-alt/70 px-0 py-3 md:grid md:grid-cols-[44px_minmax(0,220px)_minmax(0,1fr)_120px_90px] md:gap-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            No.
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            Name
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            Description
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            Stage
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            Since
          </span>
        </div>
        {companies.map((company, index) => (
          <CompanyRow key={company.name} company={company} index={index} />
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-6 py-24 md:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-t border-line pt-6 lg:grid-cols-[140px_minmax(0,1fr)]">
          <div className="paper-label">02 / Select Investments</div>

          <div className="space-y-10">
            <div className="border border-line bg-paper-alt px-6 py-6">
              <p className="paper-label mb-3">Observation 01 / Proof</p>
              <p className="text-lg leading-8 text-ink-soft">
                Past investments include{" "}
                <span className="font-semibold text-ink">{highlightCompanies}</span>
                , among many others across the public Anti Fund portfolio.
              </p>
              <p className="mt-4 text-base leading-7 text-ink-soft">
                Anti Fund focuses on early-stage investments and advisory in AI,
                robotics, software, and high-growth consumer companies with
                differentiated technology and/or distribution advantages.
              </p>
            </div>

            <div className="border border-line bg-paper-alt px-6 py-6">
              <p className="paper-label mb-3">Observation 02 / Public List</p>
              <p className="text-base leading-7 text-ink-soft">
                Beta now mirrors the full public company list shown on
                antifund.com, organized in the same two live buckets:{" "}
                <span className="font-semibold text-ink">
                  AI; robotics; software
                </span>{" "}
                and <span className="font-semibold text-ink">Consumer</span>.
              </p>
            </div>

            <CompanyGroup
              title="AI; robotics; software"
              companies={softwareCompanies}
            />
            <CompanyGroup title="Consumer" companies={consumerCompanies} />

            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
              * Personal investment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
