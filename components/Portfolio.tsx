const aiCompanies = [
  { name: "OpenAI", description: "Artificial general intelligence" },
  { name: "Anduril", description: "Defense technology & autonomous systems" },
  { name: "Cognition", description: "AI software engineering" },
  { name: "Physical Intelligence", description: "Foundation models for robotics" },
  { name: "Ramp", description: "Corporate finance automation" },
  { name: "Etched", description: "Transformer-specific AI chips" },
  { name: "Flock Safety", description: "Public safety intelligence" },
  { name: "Chronosphere", description: "Cloud-native observability" },
];

const consumerCompanies = [
  { name: "Polymarket", description: "Prediction markets" },
];

function CompanyRow({
  company,
  index,
}: {
  company: { name: string; description: string };
  index: number;
}) {
  return (
    <div className="group flex items-baseline justify-between py-5 border-b border-dark-tertiary/60 hover:border-gold/40 transition-all duration-300">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[10px] text-muted/40 tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-display text-xl md:text-2xl font-bold tracking-[-0.02em] text-warm-white group-hover:text-gold-gradient transition-colors duration-300">
          {company.name}
        </span>
      </div>
      <span className="text-xs text-muted font-mono ml-4 text-right hidden sm:block">
        {company.description}
      </span>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 md:py-40 px-6 md:px-16 lg:px-24 relative">
      {/* Subtle glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04),transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl relative">
        <p className="font-mono text-xs text-gold tracking-[0.25em] uppercase mb-16">
          Select Investments
        </p>

        <div className="mb-20">
          <h3 className="text-muted font-mono text-[10px] tracking-[0.3em] uppercase mb-8">
            AI · Robotics · Software
          </h3>
          {aiCompanies.map((company, i) => (
            <CompanyRow key={company.name} company={company} index={i} />
          ))}
        </div>

        <div>
          <h3 className="text-muted font-mono text-[10px] tracking-[0.3em] uppercase mb-8">
            Consumer
          </h3>
          {consumerCompanies.map((company, i) => (
            <CompanyRow key={company.name} company={company} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
