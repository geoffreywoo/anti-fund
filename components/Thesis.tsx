export default function Thesis() {
  const antiList = [
    "Technology and culture",
    "Attention",
    "Distribution",
    "Founder instinct",
    "Cultural force",
    "Conviction",
    "Long-term advantage",
  ];

  return (
    <section id="thesis" className="px-5 py-20 sm:px-6 md:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-t border-line pt-6 lg:grid-cols-[140px_minmax(0,1fr)]">
          <div className="paper-label">01 / What We Believe</div>

          <div className="space-y-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              <div className="border-l-2 border-ink pl-4 sm:pl-6">
                <p className="paper-label mb-4">Axiom I</p>
                <blockquote className="font-display text-[2.35rem] leading-[1.04] tracking-[-0.04em] text-ink sm:text-4xl md:text-5xl">
                  The future is forged at the intersection of tech and culture.
                </blockquote>
              </div>

              <div className="border-l-2 border-ink pl-4 sm:pl-6">
                <p className="paper-label mb-4">Axiom II</p>
                <blockquote className="font-display text-[2.35rem] leading-[1.04] tracking-[-0.04em] text-ink sm:text-4xl md:text-5xl">
                  The best founders are anti by definition.
                </blockquote>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
              <div className="space-y-5 text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
                <p>
                  Startups run on two currencies: capital and attention. One is
                  widely available. The other determines who recruits best,
                  launches strongest, and stays top of mind long enough to feel
                  inevitable.
                </p>
                <p>
                  Top founders are not short on meetings. They are short on
                  partners who understand product, distribution, and how belief
                  forms in public before the rest of the market recognizes what
                  is happening.
                </p>
                <p>
                  In a world shaped by feeds, podcasts, group chats, and social
                  media, distribution is no longer downstream of the company.
                  It is part of the company.
                </p>
              </div>

              <div className="space-y-5 text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
                <p>
                  Anti Fund is designed to be complementary to traditional Sand
                  Hill and Wall Street capital. We bring operating judgment,
                  technical taste, and world-class distribution instinct to the
                  same table.
                </p>
                <p>
                  Our partnership reflects the thesis itself: operators,
                  investors, and culture-shaping principals backing founders
                  who do not wait for permission to build the future.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-y border-line py-6 md:mt-12">
          <p className="paper-label mb-4">Key terms</p>
          <div className="flex flex-wrap gap-2.5">
            {antiList.map((item) => (
              <span
                key={item}
                className="inline-flex min-h-[34px] items-center border border-line bg-paper-alt px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
