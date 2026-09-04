import Image from "next/image";
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
    description: "Corporate cards and finance automation.",
    stage: "Seed / Series B / Series E",
    partnered: "2019",
    personal: true,
  },
  {
    name: "Chronosphere",
    url: "https://chronosphere.io/",
    description: "Cloud observability platform; acquired by Palo Alto Networks for $3.35B.",
    stage: "Seed / Exit",
    partnered: "2019",
    personal: true,
  },
  {
    name: "Aerodome",
    url: "https://www.aerodome.com/",
    description: "Public-safety drone infrastructure; acquired by Flock Safety.",
    stage: "Seed / Exit",
    partnered: "2023",
  },
  {
    name: "Rail",
    url: "https://rail.io/",
    description: "Stablecoin payments infrastructure; acquired by Ripple for $200M.",
    stage: "Seed / Exit",
    partnered: "2022",
  },
  {
    name: "Metis",
    url: "https://www.withmetis.ai/",
    description:
      "Continual-learning infrastructure for enterprise agents; acquired by DoorDash in March 2026.",
    stage: "Seed / Exit",
    partnered: "2025",
  },
  {
    name: "OpenAI",
    url: "https://openai.com/",
    description: "Frontier AI research and products.",
    stage: "Growth",
    partnered: "2025",
  },
  {
    name: "SpaceX",
    url: "https://www.spacex.com/",
    description:
      "Space and launch infrastructure, including the former xAI position and additional ownership purchased in the $1.77T IPO.",
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
    description: "Autonomous defense systems and manufacturing.",
    stage: "Series E",
    partnered: "2022",
  },
  {
    name: "Helion",
    url: "https://www.helionenergy.com/",
    description: "Commercial fusion energy.",
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
    name: "General Matter",
    url: "https://generalmatter.com/",
    description: "Nuclear fuel infrastructure.",
    stage: "Growth",
    partnered: "2026",
  },
  {
    name: "General Galactic",
    url: "https://www.gengalactic.com/",
    description: "Spacecraft and propulsion for orbital logistics.",
    stage: "Seed",
    partnered: "2026",
  },
  {
    name: "Aeon",
    url: "https://www.aeonindustrial.com/",
    description: "Autonomous tactical systems for U.S. and allied defense.",
    stage: "Seed",
    partnered: "2026",
  },
  {
    name: "Westmag",
    url: "https://www.westmag.com/",
    description: "American-made motors and actuators for drones and robots.",
    stage: "Seed",
    partnered: "2025",
  },
  {
    name: "Orbital",
    url: "https://orbital.inc/",
    description: "AI compute infrastructure in low Earth orbit.",
    stage: "Pre-Seed",
    partnered: "2026",
  },
  {
    name: "Trajectory",
    url: "https://trajectory.ai/",
    description: "Continual-learning infrastructure for production AI.",
    stage: "Seed",
    partnered: "2025",
  },
  {
    name: "Enigma",
    url: "https://enigma.inc/",
    description: "AI models and interfaces for intuitive human-robot interaction.",
    stage: "Seed",
    partnered: "2026",
  },
  {
    name: "Efference",
    url: "https://efference.ai/",
    description: "Perception and compute infrastructure for robotics.",
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
    description: "AI-native sales infrastructure for startups.",
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
    description: "Applied AI systems and end-to-end software agents.",
    stage: "Series B / Series C / Series D",
    partnered: "2024",
  },
  {
    name: "Etched",
    url: "https://www.etched.com/",
    description: "Purpose-built chips for transformer inference.",
    stage: "Series B",
    partnered: "2025",
  },
  {
    name: "Modal",
    url: "https://modal.com/",
    description: "Cloud infrastructure for AI and data workloads.",
    stage: "Series B / Series C",
    partnered: "2025",
  },
  {
    name: "Lighter",
    url: "https://lighter.xyz/",
    description: "Verifiable exchange infrastructure built with custom ZK systems.",
    stage: "Series B",
    partnered: "2025",
  },
  {
    name: "Entropy",
    url: "https://x.com/entropyio?s=11",
    description:
      "Perpetual futures for private-market and other hard-to-access assets.",
    stage: "Seed",
    partnered: "2026",
  },
  {
    name: "Liquid",
    url: "https://www.liquid.trade/",
    description:
      "24/7, non-custodial trading across crypto, stocks, commodities, FX, and prediction markets.",
    stage: "Series A",
    partnered: "2026",
  },
  {
    name: "Polymarket",
    url: "https://polymarket.com/",
    description: "Global prediction-market platform.",
    stage: "Series A",
    partnered: "2021",
  },
  {
    name: "Kela Systems",
    url: "https://kelasys.com/",
    description: "Defense systems for modern military operations.",
    stage: "Series A",
    partnered: "2024",
  },
  {
    name: "Archive",
    url: "https://archive.com/",
    description: "AI-powered creator marketing infrastructure.",
    stage: "Seed / Series A",
    partnered: "2022",
  },
  {
    name: "Creed",
    url: "https://usecreed.com/",
    description: "AI-guided Bible study and prayer.",
    stage: "Seed",
    partnered: "2025",
  },
  {
    name: "Pensive",
    url: "https://www.pensive.com/",
    description: "AI grading and tutoring for higher education.",
    stage: "Seed",
    partnered: "2025",
  },
  {
    name: "Merge",
    url: "https://www.merge.io/",
    description: "Brain-computer interfaces.",
    stage: "Seed",
    partnered: "2025",
  },
  {
    name: "Physical Intelligence",
    url: "https://www.physicalintelligence.company/",
    description: "General-purpose AI for the physical world.",
    stage: "Seed",
    partnered: "2024",
  },
  {
    name: "WithCoverage",
    url: "https://withcoverage.com/",
    description: "Insurance and risk infrastructure for ambitious businesses.",
    stage: "Seed",
    partnered: "2024",
  },
  {
    name: "Cluely",
    url: "https://cluely.com/",
    description: "Real-time AI desktop assistance.",
    stage: "Seed",
    partnered: "2025",
  },
  {
    name: "Poke.com",
    url: "https://poke.com/",
    description: "Personal AI agent acquired by Cognition in July 2026.",
    stage: "Seed / Exit",
    partnered: "2025",
  },
  {
    name: "Melius",
    url: "https://www.melius.com/",
    description: "Creative workspace for AI agents and generative models.",
    stage: "Seed",
    partnered: "2025",
  },
  {
    name: "Natural",
    url: "https://www.natural.co/",
    description: "Payments infrastructure for AI agents.",
    stage: "Seed",
    partnered: "2025",
  },
];

const consumerCompanies: Company[] = [
  {
    name: "Betr",
    url: "https://betr.app/",
    description: "Sports betting, fantasy, and media.",
    stage: "Incubation",
    partnered: "2021",
  },
  {
    name: "W",
    url: "https://getw.com/",
    description: "Men's personal care.",
    stage: "Incubation",
    partnered: "2024",
  },
  {
    name: "Passes",
    url: "https://www.passes.com/",
    description: "Creator commerce infrastructure.",
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
    description: "Ketone-based energy and performance products.",
    stage: "Seed",
    partnered: "2022",
  },
  {
    name: "SipMargs",
    url: "https://www.sipmargs.com/",
    description: "Sparkling margarita ready-to-drink beverages.",
    stage: "Seed",
    partnered: "2024",
  },
  {
    name: "Khloud",
    url: "https://khloudfoods.com/",
    description: "High-protein popcorn.",
    stage: "Seed",
    partnered: "2025",
  },
  {
    name: "Happy Dad",
    url: "https://happydad.com/",
    description: "Hard seltzer and ready-to-drink beverages.",
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
    description: "Live entertainment and lifestyle platform.",
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
    description: "Prebiotic soda.",
    stage: "Series B",
    partnered: "2022",
  },
  {
    name: "Eight Sleep",
    url: "https://www.eightsleep.com/",
    description: "Temperature-controlled sleep systems.",
    stage: "Seed",
    partnered: "2021",
    personal: true,
  },
];

const portfolioGroupSpecs = [
  {
    title: "AI, Infrastructure & National Resilience",
    names: [
      "OpenAI",
      "Anduril",
      "Helion",
      "Saronic",
      "General Matter",
      "General Galactic",
      "Aeon",
      "Westmag",
      "Orbital",
      "Trajectory",
      "Enigma",
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
      "Entropy",
      "Liquid",
      "Polymarket",
      "Archive",
      "WithCoverage",
      "Cluely",
      "Melius",
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
    title: "Acquisitions & Public Listings",
    names: ["Chronosphere", "Rail", "Aerodome", "Metis", "Poke.com", "SpaceX"],
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

function formatSeriesLabel(letters: string[]) {
  const sortedLetters = [...new Set(letters)].sort();

  if (sortedLetters.length === 1) {
    return `Series ${sortedLetters[0]}`;
  }

  const isContiguous = sortedLetters.every(
    (letter, index) =>
      index === 0 ||
      letter.charCodeAt(0) === sortedLetters[index - 1].charCodeAt(0) + 1,
  );

  if (isContiguous) {
    return `Series ${sortedLetters[0]}-${sortedLetters[sortedLetters.length - 1]}`;
  }

  if (sortedLetters.length === 2) {
    return `Series ${sortedLetters[0]} & ${sortedLetters[1]}`;
  }

  return `Series ${sortedLetters.slice(0, -1).join(", ")} & ${
    sortedLetters[sortedLetters.length - 1]
  }`;
}

function formatStageLabel(stage: string) {
  if (stage === "IPO / xAI Series D / Merged into SpaceX") {
    return "xAI Series D \u00B7 SpaceX merger \u00B7 IPO";
  }

  const parts = stage
    .split("/")
    .map((part) => part.trim())
    .filter(Boolean);
  const seriesLetters = parts
    .map((part) => part.match(/^Series ([A-Z])$/i)?.[1]?.toUpperCase())
    .filter((letter): letter is string => Boolean(letter));
  const seriesLabel = seriesLetters.length
    ? formatSeriesLabel(seriesLetters)
    : null;
  let hasInsertedSeries = false;

  return parts
    .flatMap((part) => {
      if (/^Series [A-Z]$/i.test(part)) {
        if (hasInsertedSeries || !seriesLabel) {
          return [];
        }

        hasInsertedSeries = true;
        return [seriesLabel];
      }

      if (part.toLowerCase() === "exit") {
        return ["Acquired"];
      }

      if (part.toLowerCase().includes("merged into spacex")) {
        return ["SpaceX merger"];
      }

      return [part];
    })
    .join(" \u00B7 ");
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
  const isLiquidityEvent = /exit|ipo|merged/i.test(stage);

  return (
    <span
      data-stage-part={toDataKey(stage)}
      className={isLiquidityEvent ? "text-green-700" : "text-ink-muted"}
    >
      {formatStageLabel(stage)}
    </span>
  );
}

function CompanyLogo({ company }: { company: Company }) {
  const needsDarkSurface = ["Creed", "Natural", "Orbital", "Rail"].includes(
    company.name,
  );

  return (
    <span
      className={`portfolio-logo relative flex size-[1.35rem] shrink-0 items-center justify-center overflow-hidden transition-transform duration-200 ease-out md:size-7 ${
        needsDarkSurface ? "rounded-[3px] bg-ink p-1" : ""
      }`}
    >
      <Image
        src={`/portfolio-logos/${toDataKey(company.name)}.png`}
        alt=""
        width={28}
        height={28}
        unoptimized
        data-portfolio-logo={toDataKey(company.name)}
        className="size-full object-contain"
      />
    </span>
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
      className="group portfolio-row -mx-1 border-b border-line px-1 py-4 transition-colors duration-200 ease-out hover:bg-paper-alt/60 focus-within:bg-paper-alt/60 xl:mx-0"
      style={{
        "--row-delay": `${Math.min(index * 24, 240)}ms`,
      } as CSSProperties}
    >
      <div>
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <div className="min-w-0">
            <a
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="paper-link inline-flex max-w-full items-center gap-2 font-display text-[1.25rem] leading-[1.15] tracking-normal text-ink sm:text-[1.45rem]"
            >
              <CompanyLogo company={company} />
              <span>{company.name}</span>
            </a>
            {company.personal ? (
              <span
                aria-label="Personal investment"
                className="ml-0.5 align-top font-mono text-[10px] text-ink-muted"
              >
                *
              </span>
            ) : null}
          </div>

          <div
            data-portfolio-meta
            className="flex max-w-full flex-wrap items-center justify-end gap-x-1.5 font-mono text-[11px] uppercase leading-[1.5] tracking-[0.06em] text-ink-muted"
          >
            <span>
              Invested{" "}
              <span data-partnered>{company.partnered}</span>
            </span>
            <span aria-hidden="true">{"\u00B7"}</span>
            <StageLabel stage={company.stage} />
          </div>
        </div>

        <p className="mt-2 text-[15px] leading-[1.55] text-ink-soft">
          {description}
        </p>
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
      <p className="paper-label mb-2.5 sm:mb-3">{title}</p>
      <div className="grid border-t border-line xl:grid-cols-2 xl:gap-x-8">
        {companies.map((company, index) => (
          <CompanyRow key={company.name} company={company} index={index} />
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="page-section">
      <div className="mx-auto max-w-6xl">
        <div className="section-frame">
          <div className="paper-label">06 / Portfolio</div>

          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="section-heading">
                Selected investments.
              </h2>
            </div>

            <div
              data-portfolio-index
              data-mobile-layout="compact"
              className="space-y-7 sm:space-y-9 md:space-y-10"
            >
              {portfolioGroups.map((group) => (
                <CompanyGroup
                  key={group.key}
                  title={group.title}
                  companies={group.companies}
                />
              ))}
              <p className="font-mono text-[11px] uppercase leading-[1.5] tracking-[0.08em] text-ink-muted">
                * Personal investment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
