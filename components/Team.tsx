const team = [
  {
    name: "Geoffrey Woo",
    title: "Co-founder and Managing Partner",
    credential:
      "Entrepreneur and co-founder of Archive, Ketone-IQ, and W. Previously founded and sold Glassmap (YC S11) to Groupon. Stanford Computer Science.",
  },
  {
    name: "Jake Paul",
    title: "Co-founder and Managing Partner",
    credential:
      "Professional boxer and founder of Most Valuable Promotions, Betr, and W. Held 65M peak concurrent streams on Netflix, ranked among the most Googled athletes in 2024, and reaches 70M+ followers across social media.",
  },
  {
    name: "Logan Paul",
    title: "General Partner",
    credential:
      "Professional wrestler, founder of Prime and Lunchly, and host of Impaulsive. One of the most followed celebrities across social media and a durable force in consumer attention.",
  },
  {
    name: "Steve Han",
    title: "Partner",
    credential:
      "Previously at March Capital and Deutsche Bank advising tech buyouts. Raised across Korea, India, and China. UC Berkeley economics. Served in the ROK Army.",
  },
];

export default function Team() {
  return (
    <section id="team" className="px-6 py-24 md:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-t border-line pt-6 lg:grid-cols-[140px_minmax(0,1fr)]">
          <div className="paper-label">03 / Team</div>

          <div className="space-y-10">
            <p className="max-w-3xl text-lg leading-8 text-ink-soft">
              Anti Fund combines operators, investors, and culture-shaping
              distribution. The team reflects the same thesis as the portfolio:
              tech depth matters, but so does the ability to command attention.
            </p>

            <div className="border-y border-line">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className="grid gap-4 border-b border-line py-6 last:border-b-0 md:grid-cols-[44px_minmax(0,260px)_minmax(0,1fr)] md:gap-6"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl leading-none tracking-[-0.03em] text-ink md:text-3xl">
                      {member.name}
                    </h3>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                      {member.title}
                    </p>
                  </div>
                  <p className="text-base leading-7 text-ink-soft">
                    {member.credential}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
