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

const portfolioGroupSpecs = [
  {
    title: "Exits",
    names: ["Chronosphere", "Metis", "Aerodome"],
  },
  {
    title: "Frontier Infrastructure & Defense",
    names: [
      "OpenAI",
      "SpaceX",
      "Anduril",
      "Etched",
      "Modal",
      "Physical Intelligence",
      "Kela Systems",
      "Merge",
    ],
  },
  {
    title: "Software, Finance & Applied AI",
    names: [
      "Ramp",
      "Erebor",
      "Cognition",
      "Lighter",
      "Polymarket",
      "Archive",
      "WithCoverage",
      "Cluely",
      "Interaction",
      "Natural",
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
      "Ketone-IQ",
      "SipMargs",
      "Khloud",
      "Eight Sleep",
      "Betr",
      "W",
    ],
  },
] as const;

function toDataKey(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function getStagePartRank(stagePart: string) {
  const normalized = stagePart.trim().toLowerCase();

  if (normalized.includes("exit")) {
    return 700;
  }

  if (normalized === "growth") {
    return 600;
  }

  if (normalized === "series e") {
    return 500;
  }

  if (normalized === "series b") {
    return 400;
  }

  if (normalized === "series a") {
    return 300;
  }

  if (normalized === "seed+") {
    return 250;
  }

  if (normalized === "seed") {
    return 200;
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
    const rankDifference = getStageRank(right.stage) - getStageRank(left.stage);
    if (rankDifference !== 0) {
      return rankDifference;
    }

    const partneredDifference = Number(right.partnered) - Number(left.partnered);
    if (partneredDifference !== 0) {
      return partneredDifference;
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
        const isExit = stageKey === "exit" || part.toLowerCase().includes("exit");

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
                isExit ? "text-green-700" : "text-ink-muted"
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
  return (
    <div
      data-company={toDataKey(company.name)}
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
      <StageLabel stage={company.stage} />
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
    <section id="portfolio" className="px-6 py-24 md:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-t border-line pt-6 lg:grid-cols-[140px_minmax(0,1fr)]">
          <div className="paper-label">02 / Select Investments</div>

          <div className="space-y-10">
            <div className="border border-line bg-paper-alt px-6 py-6">
              <p className="paper-label mb-3">Observation 01 / Proof</p>
              <p className="text-lg leading-8 text-ink-soft">
                Past investments include category-defining companies across AI,
                robotics, software, and high-growth consumer, including{" "}
                <span className="font-semibold text-ink">
                  OpenAI, Anduril, Ramp, Cognition, Polymarket, Physical
                  Intelligence, Flock Safety, and Chronosphere.
                </span>
              </p>
              <p className="mt-4 text-base leading-7 text-ink-soft">
                Anti Fund invests across all stages, as the first check or in
                late-stage growth rounds. We look partnering with founders with
                differentiated technology and/or distribution advantages.
              </p>
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
