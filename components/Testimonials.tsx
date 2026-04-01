const testimonials = [
  {
    quote:
      "Geoff was one of the earliest investors for both Ramp and Paribus, and he is a trusted advisor and a key strategic sounding board. With Ramp, Geoff has directly boosted our topline revenue and growth by introducing us to and helping us close key customers and hire superstar executives. Geoff is on my shortlist to bring onboard for any company I'm involved with.",
    name: "Eric Glyman",
    title: "CEO & Co-founder, Ramp",
  },
  {
    quote:
      "Awesome working with Jake Paul, Geoffrey Woo and Anti Fund!!",
    name: "Sam Blond",
    title: "CEO, Monaco",
  },
  {
    quote:
      "Geoff was one of our first investors and committed to backing Chronosphere before our company was even set up. He is incredibly networked in tech and investor circles and has been a key strategic thought partner. He is one of those rare humans that wields deep technical, product, and business expertise.",
    name: "Rob Skillington",
    title: "CTO & Co-founder, Chronosphere",
  },
  {
    quote:
      "Thanks for all of support! Couldn't ask for a better partner.",
    name: "Aryan Shah",
    title: "CEO, Metis",
  },
];

export default function Testimonials() {
  return (
    <section
      id="proof"
      className="px-6 py-24 md:px-10 md:py-28 lg:px-14"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-t border-line pt-6 lg:grid-cols-[140px_minmax(0,1fr)]">
          <div className="paper-label">05 / Founder Proof</div>

          <div className="space-y-10">
            <p className="max-w-3xl text-lg leading-8 text-ink-soft">
              The strongest proof is not a slogan. It is what founders and
              operators say after working with us in the trenches.
            </p>

            <div className="border-y border-line">
              {testimonials.map((testimonial, index) => (
                <figure
                  key={testimonial.name}
                  className="grid gap-4 border-b border-line py-6 last:border-b-0 md:grid-cols-[44px_minmax(0,1fr)] md:gap-6"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <blockquote className="max-w-4xl font-display text-2xl leading-[1.2] tracking-[-0.02em] text-ink md:text-[2rem]">
                      "{testimonial.quote}"
                    </blockquote>
                    <figcaption className="mt-4">
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                        {testimonial.name}
                      </p>
                      <p className="mt-1 text-base leading-7 text-ink-soft">
                        {testimonial.title}
                      </p>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
