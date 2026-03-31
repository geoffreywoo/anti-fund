import type { CSSProperties } from "react";

const aiCompanies = [
  { name: "OpenAI", description: "Artificial general intelligence" },
  { name: "Anduril", description: "Defense technology and autonomous systems" },
  { name: "Cognition", description: "AI software engineering" },
  { name: "Physical Intelligence", description: "Foundation models for robotics" },
  { name: "Ramp", description: "Corporate finance automation" },
  { name: "Etched", description: "Transformer-specific AI chips" },
  { name: "Flock Safety", description: "Public safety intelligence" },
  { name: "Chronosphere", description: "Cloud-native observability" },
];

const consumerCompanies = [{ name: "Polymarket", description: "Prediction markets" }];

function CompanyRow({
  company,
  index,
}: {
  company: { name: string; description: string };
  index: number;
}) {
  return (
    <div
      className="portfolio-row grid gap-3 border-b border-line py-4 md:grid-cols-[44px_minmax(0,240px)_minmax(0,1fr)] md:gap-6"
      style={{ "--row-delay": `${index * 50}ms` } as CSSProperties}
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="font-display text-2xl leading-none tracking-[-0.03em] text-ink">
        {company.name}
      </span>
      <span className="text-base leading-7 text-ink-soft">{company.description}</span>
    </div>
  );
}

function CompanyGroup({
  title,
  companies,
}: {
  title: string;
  companies: { name: string; description: string }[];
}) {
  return (
    <div>
      <p className="paper-label mb-3">{title}</p>
      <div className="border-y border-line">
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
                Portfolio includes category-defining companies across AI,
                defense, finance, and consumer, including{" "}
                <span className="font-semibold text-ink">
                  OpenAI, Anduril, Ramp, and Polymarket.
                </span>
              </p>
            </div>

            <CompanyGroup title="AI / Robotics / Software" companies={aiCompanies} />
            <CompanyGroup title="Consumer" companies={consumerCompanies} />
          </div>
        </div>
      </div>
    </section>
  );
}
