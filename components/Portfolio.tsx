import type { CSSProperties } from "react";

type Company = {
  name: string;
  url: string;
  description: string;
  stage: string;
  partnered: string;
  ticker?: {
    label: string;
    url: string;
  };
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
    name: "Rail",
    url: "https://rail.io/",
    description:
      "Stablecoin payments infrastructure. Seed investment in June 2022. Acquired by Ripple for $200M.",
    stage: "Seed / Exit",
    partnered: "2022",
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
    description:
      "xAI Series D position merged into SpaceX, with additional ownership purchased in the $1.77T IPO.",
    stage: "IPO / xAI Series D / Merged into SpaceX",
    partnered: "2026",
    ticker: {
      label: "$SPCX",
      url: "https://www.nasdaq.com/market-activity/stocks/spcx",
    },
  },
  {
    name: "Anduril",
    url: "https://www.anduril.com/",
    description: "Transforming defense capabilities with advanced technology.",
    stage: "Series E",
    partnered: "2022",
  },
  {
    name: "Helion",
    url: "https://www.helionenergy.com/",
    description: "Commercial fusion energy company building zero-carbon power.",
    stage: "Series G",
    partnered: "2026",
  },
  {
    name: "Saronic",
    url: "https://www.saronic.com/",
    description: "Autonomous surface vessels for maritime defense.",
    stage: "Series D",
    partnered: "2026",
  },
  {
    name: "Efference",
    url: "https://efference.ai/",
    description: "Integrated perception and compute stack for robotics.",
    stage: "First Investor",
    partnered: "2025",
  },
  {
    name: "Erebor",
    url: "https://erebor.bank/",
    description: "Banking infrastructure for the innovation economy.",
    stage: "Series B",
    partnered: "2026",
  },
  {
    name: "Monaco",
    url: "https://www.monaco.com/",
    description: "AI-native sales platform for startups.",
    stage: "Series A / Series B",
    partnered: "2026",
  },
  {
    name: "ElevenLabs",
    url: "https://elevenlabs.io/",
    description: "AI voice research and products.",
    stage: "Series D",
    partnered: "2026",
  },
  {
    name: "Cognition",
    url: "https://cognition.ai/",
    description: "An applied AI lab building end-to-end software agents.",
    stage: "Series B / Series C / Series D",
    partnered: "2024",
  },
  {
    name: "Etched",
    url: "https://www.etched.com/",
    description: "AI chips purpose-built for transformer inference.",
    stage: "Series B",
    partnered: "2025",
  },
  {
    name: "Modal",
    url: "https://modal.com/",
    description: "Cloud infrastructure for running AI and data workloads.",
    stage: "Series B / Series C",
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
    description: "Defense technology for modern military operations.",
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
    name: "Creed",
    url: "https://usecreed.com/",
    description: "AI-enabled Bible study and prayer companion app.",
    stage: "Seed",
    partnered: "2025",
  },
  {
    name: "Pensive",
    url: "https://www.pensive.com/",
    description: "AI grading and tutoring platform for higher education.",
    stage: "Seed",
    partnered: "2025",
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
    description: "Risk management and insurance infrastructure for ambitious businesses.",
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
    description: "Consumer AI and social products at Poke.com.",
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
    description: "Sports betting, fantasy, and media company built for modern fans.",
    stage: "Incubation",
    partnered: "2021",
  },
  {
    name: "W",
    url: "https://getw.com/",
    description: "Men's personal care brand built by Jake Paul.",
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
    name: "Sesh",
    url: "https://seshproducts.com/",
    description: "Tobacco-free nicotine pouch brand.",
    stage: "Seed / Series A",
    partnered: "2024",
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
    description: "Hard seltzer and iced tea brand built with Nelk.",
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
    description: "High-protein overnight oats sold direct-to-consumer.",
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

const portfolioGroupSpecs = [
  {
    title: "Frontier Infrastructure & Defense",
    names: [
      "OpenAI",
      "Anduril",
      "Helion",
      "Saronic",
      "Cognition",
      "Etched",
      "Modal",
      "Physical Intelligence",
      "Kela Systems",
      "Merge",
      "Efference",
    ],
  },
  {
    title: "Software, Finance & Applied AI",
    names: [
      "Ramp",
      "ElevenLabs",
      "Erebor",
      "Monaco",
      "Lighter",
      "Polymarket",
      "Archive",
      "WithCoverage",
      "Cluely",
      "Interaction",
      "Natural",
      "Creed",
      "Pensive",
    ],
  },
  {
    title: "Consumer Platforms & Brands",
    names: [
      "Olipop",
      "Wander",
      "Oats Overnight",
      "Palm Tree Crew",
      "Kings League",
      "Happy Dad",
      "Passes",
      "Sesh",
      "Ketone-IQ",
      "SipMargs",
      "Khloud",
      "Eight Sleep",
      "Betr",
      "W",
    ],
  },
  {
    title: "Outcomes",
    names: ["Chronosphere", "Rail", "Aerodome", "Metis", "SpaceX"],
  },
] as const;

const proofPoints = [
  {
    title: "Early conviction",
    description: "Ownership before a category has a clean institutional label.",
  },
  {
    title: "Growth access",
    description:
      "Selective allocation in rounds where reputation, speed, and judgment matter.",
  },
  {
    title: "Real outcomes",
    description:
      "Portfolio companies acquired by Palo Alto Networks, Ripple, DoorDash, and Flock Safety.",
  },
];

function toDataKey(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function getStagePartRank(stagePart: string) {
  const normalized = stagePart.trim().toLowerCase();

  if (normalized.includes("exit")) {
    return 700;
  }

  if (normalized === "ipo") {
    return 650;
  }

  if (normalized === "growth") {
    return 600;
  }

  if (normalized.includes("series e")) {
    return 500;
  }

  if (normalized.includes("series d")) {
    return 450;
  }

  if (normalized.includes("series c")) {
    return 425;
  }

  if (normalized.includes("series b")) {
    return 400;
  }

  if (normalized.includes("series a")) {
    return 300;
  }

  if (normalized.includes("merged")) {
    return 275;
  }

  if (normalized === "seed+") {
    return 250;
  }

  if (normalized === "seed") {
    return 200;
  }

  if (normalized === "pre-seed" || normalized === "first investor") {
    return 150;
  }

  if (normalized === "incubation") {
    return 100;
  }

  return 0;
}

function getStageRank(stage: string) {
  return Math.max(...stage.split("/").map((part) => getStagePartRank(part)));
}

function getSortedStageParts(stage: string) {
  return stage
    .split("/")
    .map((part) => part.trim())
    .filter(Boolean)
    .sort((left, right) => getStagePartRank(right) - getStagePartRank(left));
}

function sortCompanies(companies: Company[]) {
  return [...companies].sort((left, right) => {
    const partneredDifference = Number(left.partnered) - Number(right.partnered);
    if (partneredDifference !== 0) {
      return partneredDifference;
    }

    const rankDifference = getStageRank(right.stage) - getStageRank(left.stage);
    if (rankDifference !== 0) {
      return rankDifference;
    }

    return left.name.localeCompare(right.name);
  });
}

const companyByName = new Map(
  [...softwareCompanies, ...consumerCompanies].map((company) => [company.name, company]),
);

const portfolioGroups = portfolioGroupSpecs.map((group) => ({
  ...group,
  key: toDataKey(group.title),
  companies: sortCompanies(
    group.names
      .map((name) => companyByName.get(name))
      .filter((company): company is Company => Boolean(company)),
  ),
}));

function StageLabel({ stage }: { stage: string }) {
  const stageParts = getSortedStageParts(stage);

  return (
    <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
      {stageParts.map((part, index) => {
        const stageKey = toDataKey(part);
        const isLiquidityEvent =
          stageKey === "ipo" ||
          stageKey === "exit" ||
          part.toLowerCase().includes("exit") ||
          part.toLowerCase().includes("merged");

        return (
          <span
            key={`${part}-${index}`}
            className="inline-flex items-center gap-1"
          >
            {index > 0 ? (
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                /
              </span>
            ) : null}
            <span
              data-stage-part={stageKey}
              className={`font-mono text-[11px] uppercase tracking-[0.14em] ${
                isLiquidityEvent ? "text-green-700" : "text-ink-muted"
              }`}
            >
              {part}
            </span>
          </span>
        );
      })}
    </div>
  );
}

function CompanyRow({
  company,
  index,
}: {
  company: Company;
  index: number;
}) {
  const description = (
    <>
      {company.description}
      {company.ticker ? (
        <>
          {" "}
          <a
            href={company.ticker.url}
            target="_blank"
            rel="noopener noreferrer"
            className="paper-link"
          >
            {company.ticker.label}
          </a>
        </>
      ) : null}
    </>
  );

  return (
    <div
      data-company={toDataKey(company.name)}
      className="portfolio-row border-b border-line py-4"
      style={{ "--row-delay": `${index * 50}ms` } as CSSProperties}
    >
      <div className="space-y-3 md:hidden">
        <div className="flex items-start gap-4">
          <div className="min-w-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              {String(index + 1).padStart(2, "0")}
            </p>
            <a
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="paper-link mt-2 inline-block font-display text-[1.65rem] leading-none tracking-[-0.03em] text-ink sm:text-[1.9rem]"
            >
              {company.name}
            </a>
            {company.personal ? "*" : ""}
          </div>
        </div>

        <p className="text-base leading-7 text-ink-soft">{description}</p>

        <div className="grid grid-cols-2 gap-4 border-t border-line pt-3">
          <div>
            <p className="paper-label mb-2">Stage</p>
            <StageLabel stage={company.stage} />
          </div>
          <div>
            <p className="paper-label mb-2">Since</p>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
              {company.partnered}
            </p>
          </div>
        </div>
      </div>

      <div className="hidden gap-3 md:grid md:grid-cols-[44px_minmax(0,220px)_minmax(0,1fr)_120px_90px] md:gap-6">
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
        <span className="text-base leading-7 text-ink-soft">{description}</span>
        <StageLabel stage={company.stage} />
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
          {company.partnered}
        </span>
      </div>
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
    <div data-portfolio-group={toDataKey(title)}>
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
    <section id="portfolio" className="px-5 py-20 sm:px-6 md:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-t border-line pt-6 lg:grid-cols-[140px_minmax(0,1fr)]">
          <div className="paper-label">03 / Select Investments</div>

          <div className="space-y-10">
            <div className="paper-panel border px-5 py-5 sm:px-6 sm:py-6">
              <p className="paper-label mb-3">Portfolio Proof</p>
              <p className="max-w-4xl font-display text-2xl leading-[1.12] tracking-[-0.03em] text-ink sm:text-3xl md:text-4xl">
                We do not underwrite sectors. We underwrite moments when a
                non-obvious company becomes legible to institutions.
              </p>
              <p className="mt-5 text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
                The portfolio spans AI, defense, fintech, robotics, software,
                and culture-native consumer markets, including{" "}
                <span className="font-semibold text-ink">
                  OpenAI, SpaceX, Anduril, Ramp, Cognition, Polymarket,
                  Physical Intelligence, Flock Safety, and Chronosphere.
                </span>
              </p>
              <p className="mt-4 text-base leading-7 text-ink-soft">
                The common thread is not sector exposure. It is an inflection:
                technical or market insight early enough to matter, paired with
                founders who can convert that insight into company value.
              </p>
              <div className="mt-5 grid gap-3 border-t border-line pt-5 sm:grid-cols-3">
                {proofPoints.map((point) => (
                  <div
                    key={point.title}
                    className="border border-line bg-paper px-3 py-3"
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                      {point.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-ink-soft">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {portfolioGroups.map((group) => (
              <CompanyGroup
                key={group.key}
                title={group.title}
                companies={group.companies}
              />
            ))}

            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
              * Personal investment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
