import type { CSSProperties } from "react";

const aiCompanies = [
  {
    name: "OpenAI",
    description: "Building safe and beneficial AGI.",
    stage: "Growth",
    partnered: "2025",
  },
  {
    name: "Anduril",
    description: "Transforming defense capabilities with advanced technology.",
    stage: "Series E",
    partnered: "2022",
  },
  {
    name: "Ramp",
    description: "Easy-to-use corporate cards.",
    stage: "Seed / Series E",
    partnered: "2019",
  },
  {
    name: "Cognition",
    description: "An applied AI lab building end-to-end software agents.",
    stage: "Series B",
    partnered: "2024",
  },
  {
    name: "Physical Intelligence",
    description: "Bringing general-purpose AI into the physical world.",
    stage: "Seed",
    partnered: "2024",
  },
  {
    name: "Chronosphere",
    description: "Observability platform. Acquired by Palo Alto Networks.",
    stage: "Exit",
    partnered: "2019",
  },
  {
    name: "Aerodome -> Flock Safety",
    description: "Public safety air support rolled into Flock equity.",
    stage: "Exit",
    partnered: "2023",
  },
  {
    name: "Metis",
    description: "Post-training and continual-learning layer for enterprise agents.",
    stage: "Exit",
    partnered: "2025",
  },
  {
    name: "Etched",
    description: "Transformer ASICs.",
    stage: "Series B",
    partnered: "2025",
  },
  {
    name: "Modal",
    description: "AI infrastructure.",
    stage: "Series B",
    partnered: "2025",
  },
  {
    name: "Kela Systems",
    description: "Defense tech for modern conflict.",
    stage: "Series A",
    partnered: "2024",
  },
  {
    name: "Archive",
    description: "End-to-end creator marketing AI.",
    stage: "Seed / Series A",
    partnered: "2022",
  },
];

const consumerCompanies = [
  {
    name: "Polymarket",
    description: "The world's largest prediction market.",
    stage: "Series A",
    partnered: "2021",
  },
  {
    name: "Betr",
    description: "Fast-growing online sports betting, fantasy, and media company.",
    stage: "Incubation",
    partnered: "2021",
  },
  {
    name: "W",
    description: "Personal care brand built to inspire young men to take Ws.",
    stage: "Incubation",
    partnered: "2024",
  },
  {
    name: "Passes",
    description: "Creator commerce platform founded by Lucy Guo.",
    stage: "Seed",
    partnered: "2022",
  },
  {
    name: "Ketone-IQ",
    description: "Energy from ketones, not sugar or caffeine.",
    stage: "Seed",
    partnered: "2022",
  },
  {
    name: "Wander",
    description: "Luxury travel platform with hotel-grade hospitality.",
    stage: "Series A",
    partnered: "2022",
  },
  {
    name: "Kings League",
    description: "Global creator-led 7 vs 7 soccer league.",
    stage: "Series A",
    partnered: "2024",
  },
  {
    name: "Olipop",
    description: "Healthy prebiotic soda.",
    stage: "Series B",
    partnered: "2022",
  },
  {
    name: "SipMargs",
    description: "Sparkling margarita RTD built with Alix Earle.",
    stage: "Seed",
    partnered: "2024",
  },
  {
    name: "Happy Dad",
    description: "Nelk's hard seltzer and tea.",
    stage: "Seed+",
    partnered: "2025",
  },
];

function CompanyRow({
  company,
  index,
}: {
  company: {
    name: string;
    description: string;
    stage: string;
    partnered: string;
  };
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
      <span className="font-display text-2xl leading-none tracking-[-0.03em] text-ink">
        {company.name}
      </span>
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
  companies: {
    name: string;
    description: string;
    stage: string;
    partnered: string;
  }[];
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
                Past investments include category-defining companies across AI,
                robotics, software, and high-growth consumer, including{" "}
                <span className="font-semibold text-ink">
                  OpenAI, Anduril, Ramp, Cognition, Polymarket, Physical
                  Intelligence, Flock Safety, and Chronosphere.
                </span>
              </p>
              <p className="mt-4 text-base leading-7 text-ink-soft">
                Anti Fund focuses on early-stage investments and advisory in AI,
                robotics, software, and high-growth consumer companies with
                differentiated technology and/or distribution advantages.
              </p>
            </div>

            <CompanyGroup title="AI / Robotics / Software" companies={aiCompanies} />
            <CompanyGroup title="Consumer / Culture" companies={consumerCompanies} />
          </div>
        </div>
      </div>
    </section>
  );
}
