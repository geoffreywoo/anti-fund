const advantages = [
  {
    name: "See what others miss",
    description:
      "We recognize hard-won technical truth before the market has a name for it.",
  },
  {
    name: "Make the right people care",
    description:
      "We help the right talent, customers, partners, and public understand why the company matters.",
  },
  {
    name: "Show up when it matters",
    description:
      "We work with founders on product decisions, key hires, customer introductions, and the next financing.",
  },
];

export default function Edge() {
  return (
    <section
      id="edge"
      className="page-section"
    >
      <div className="mx-auto max-w-6xl">
        <div className="section-frame">
          <div className="paper-label">01 / The Anti Fund Edge</div>

          <div>
            <h2 className="section-heading">
              Technical conviction. Cultural firepower.
            </h2>
            <p className="section-lede">
              We study the technology, pressure-test the market, and back founders
              with a view the crowd has missed. Then we help them reach the people
              who matter: customers, talent, partners, and their next investors.
            </p>

            <div className="mt-8 grid border-y border-line sm:mt-10 md:grid-cols-3">
              {advantages.map((advantage) => (
                <article
                  key={advantage.name}
                  className="border-b border-line py-5 last:border-b-0 sm:py-6 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  <h3 className="font-display text-2xl leading-[1.15] tracking-[-0.015em] text-ink">
                    {advantage.name}
                  </h3>
                  <p className="mt-3 text-base leading-[1.6] text-ink-soft">
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
