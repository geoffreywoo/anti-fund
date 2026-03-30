const team = [
  {
    name: "Geoffrey Woo",
    title: "Co-founder & Managing Partner",
    credential:
      "Serial founder. Sold Glassmap (YC S11) to Groupon. Built Archive & Ketone-IQ. Stanford CS.",
  },
  {
    name: "Jake Paul",
    title: "Co-founder & Managing Partner",
    credential:
      "Record-breaking boxer. 65M peak concurrent on Netflix. 70M+ followers. Built Most Valuable Promotions, Betr, W.",
  },
  {
    name: "Logan Paul",
    title: "General Partner",
    credential:
      "Professional wrestler. Built Prime & Lunchly. Host of Impaulsive. Global cultural force.",
  },
  {
    name: "Steve Han",
    title: "Partner",
    credential:
      "Previously March Capital & Deutsche Bank. Dual degrees, UC Berkeley. ROK Army veteran.",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-32 md:py-40 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl">
        <p className="font-mono text-xs text-gold tracking-[0.25em] uppercase mb-16">
          Team
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {team.map((member) => (
            <div
              key={member.name}
              className="group"
            >
              <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-[-0.03em] text-warm-white group-hover:text-gold transition-colors duration-300">
                {member.name}
              </h3>
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold-dim mt-3">
                {member.title}
              </p>
              <p className="text-warm-gray mt-4 leading-[1.7] text-[15px]">
                {member.credential}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
