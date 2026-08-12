const advantages = [
  {
    name: "Technical conviction",
    description:
      "We recognize hard-won technical truth before the market has a name for it.",
  },
  {
    name: "Earned attention",
    description:
      "We help the right talent, customers, partners, and public understand why the company matters.",
  },
  {
    name: "Founder leverage",
    description:
      "We stay close when product, narrative, talent, and timing can compound the mission.",
  },
];

export default function Edge() {
  return (
    <section
      id="edge"
      className="px-5 pb-14 pt-6 sm:px-6 sm:pb-20 sm:pt-8 md:px-10 md:pb-28 lg:px-14"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 border-t border-line pt-5 sm:gap-8 sm:pt-6 lg:grid-cols-[140px_minmax(0,1fr)] lg:gap-10">
          <div className="paper-label">01 / The Anti Fund Edge</div>

          <div>
            <h2 className="max-w-4xl font-display text-[2.15rem] leading-[1.04] text-ink sm:text-4xl md:text-5xl">
              See the future early. Make it impossible to ignore.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-[1.65] text-ink-soft sm:mt-5 sm:text-lg sm:leading-8">
              Capital can fund a company. Attention recruits talent, earns trust,
              and shapes categories. Anti Fund pairs technical judgment with
              uncommon reach to help breakthroughs become defining companies.
            </p>

            <div className="mt-8 grid border-y border-line sm:mt-10 md:grid-cols-3">
              {advantages.map((advantage) => (
                <article
                  key={advantage.name}
                  className="border-b border-line py-5 last:border-b-0 sm:py-6 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  <h3 className="font-display text-2xl leading-[1.08] text-ink">
                    {advantage.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-[1.6] text-ink-soft sm:mt-3 sm:text-base sm:leading-7">
                    {advantage.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
