type Testimonial = {
  quote: string;
  name: string;
  role: string;
  companyName?: string;
  companyUrl?: string;
  profileUrl?: string;
  context?: string;
};

const founderTestimonials: Testimonial[] = [
  {
    quote:
      "Geoff was one of the earliest investors for both Ramp and Paribus, and he is a trusted advisor and a key strategic sounding board. With Ramp, Geoff has directly boosted our topline revenue and growth by introducing us to and helping us close key customers and hire superstar executives. Geoff is on my shortlist to bring onboard for any company I'm involved with.",
    name: "Eric Glyman",
    context: "Ramp was a personal investment by Geoff Woo.",
    role: "CEO & Co-founder,",
    companyName: "Ramp",
    companyUrl: "https://ramp.com/",
    profileUrl: "https://x.com/eglyman",
  },
  {
    quote: "Awesome working with Jake Paul, Geoff Woo and Anti Fund!!",
    name: "Sam Blond",
    role: "CEO,",
    companyName: "Monaco",
    companyUrl: "https://www.monaco.com/",
    profileUrl: "https://x.com/samdblond",
  },
  {
    quote:
      "Geoff was one of our first investors and committed to backing Chronosphere before our company was even set up. He is incredibly networked in tech and investor circles and has been a key strategic thought partner. He is one of those rare humans that wields deep technical, product, and business expertise.",
    name: "Rob Skillington",
    context: "Chronosphere was a personal investment by Geoff Woo.",
    role: "CTO & Co-founder,",
    companyName: "Chronosphere",
    companyUrl: "https://chronosphere.io/",
    profileUrl: "https://www.linkedin.com/in/robskillington/",
  },
  {
    quote: "Thanks for all of support! Couldn't ask for a better partner.",
    name: "Aryan Shah",
    role: "CEO,",
    companyName: "Metis",
    companyUrl: "https://www.withmetis.ai/",
    profileUrl: "https://www.linkedin.com/in/aryan-shah1/",
  },
  {
    quote:
      "Geoff is an incredible visionary with sharp intuition. As our earliest investor, he has consistently given advice that proves true time and time again. His strong connections with the most influential minds in Silicon Valley are the exact fuel that early-stage founders can only dream of. Essentially, he brings his A-game. Founders just need to bring theirs.",
    name: "Gun Choi",
    role: "CEO & Co-founder,",
    companyName: "Linedot",
    companyUrl: "https://www.linedot.ai/",
  },
  {
    quote:
      "Geoff and Steve are one of the best partners to have as a founder. They are incredibly well connected - Geoff introduced us to Karim from Ramp who became our investor. Steve is always responsive, pushing us to think in unconventional angles. I would highly recommend Anti Fund to any exceptional founders.",
    name: "Yoon Yang",
    role: "CEO & Co-founder,",
    companyName: "Pensive",
    companyUrl: "https://www.pensive.com/",
    profileUrl: "https://www.linkedin.com/in/yoonseok-yang/",
  },
  {
    quote:
      "Anti Fund was our first investor and a key sounding board for strategic decisions. They're direct and candid when it matters, skipping unnecessary niceties in favor of clear, actionable support. Geoff has been my most valuable investor from the start, pushing me towards market-validated technical verticals and a business development approach focused on generating meaningful signal before noise.",
    name: "Gianluca Bencomo",
    role: "CEO & Co-founder,",
    companyName: "Efference",
    companyUrl: "https://efference.ai/",
    profileUrl: "https://x.com/gianlucabencomo",
  },
];

const featuredNames = ["Gianluca Bencomo", "Eric Glyman"];
const featuredFounderTestimonials = featuredNames.map(
  (name) => founderTestimonials.find((testimonial) => testimonial.name === name)!,
);
const additionalFounderTestimonials = founderTestimonials.filter(
  (testimonial) => !featuredNames.includes(testimonial.name),
);

function TestimonialFigure({
  testimonial,
  index,
  compact = false,
  inverse = false,
}: {
  testimonial: Testimonial;
  index: number;
  compact?: boolean;
  inverse?: boolean;
}) {
  return (
    <figure
      className={`grid grid-cols-[28px_minmax(0,1fr)] gap-x-3 md:grid-cols-[44px_minmax(0,1fr)] md:gap-6 ${
        inverse ? "" : "border-b border-line py-5 last:border-b-0 sm:py-6"
      }`}
    >
      <span
        className={`font-mono text-[11px] uppercase tracking-[0.08em] ${
          inverse ? "text-paper/55" : "text-ink-muted"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <blockquote
          className={`max-w-[58ch] font-display leading-[1.35] tracking-[-0.01em] ${
            inverse ? "text-paper" : "text-ink"
          } ${
            compact || testimonial.quote.length > 240
              ? "text-xl md:text-[1.5rem]"
              : "text-2xl md:text-[1.75rem]"
          }`}
        >
          "{testimonial.quote}"
        </blockquote>
        <figcaption className="mt-3 sm:mt-4">
          <p
            className={`font-mono text-[11px] uppercase tracking-[0.08em] ${
              inverse ? "text-paper/65" : "text-ink-muted"
            }`}
          >
            {testimonial.profileUrl ? (
              <a
                href={testimonial.profileUrl}
                target="_blank"
                rel="noreferrer"
                className={`underline decoration-1 underline-offset-4 transition-colors duration-200 ${
                  inverse ? "decoration-paper/40 hover:text-white" : "hover:text-ink"
                }`}
              >
                {testimonial.name}
              </a>
            ) : (
              testimonial.name
            )}
          </p>
          <p
            className={`mt-1 text-base leading-7 ${
              inverse ? "text-paper/75" : "text-ink-soft"
            }`}
          >
            {testimonial.companyName && testimonial.companyUrl ? (
              <>
                {testimonial.role}{" "}
                <a
                  href={testimonial.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`underline decoration-1 underline-offset-4 transition-colors duration-200 ${
                    inverse ? "decoration-paper/40 hover:text-white" : "hover:text-ink"
                  }`}
                >
                  {testimonial.companyName}
                </a>
              </>
            ) : (
              testimonial.role
            )}
          </p>
          {testimonial.context ? (
            <p className={`mt-2 text-sm leading-6 ${inverse ? "text-paper/75" : "text-ink-muted"}`}>
              {testimonial.context}
            </p>
          ) : null}
        </figcaption>
      </div>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section
      id="proof"
      className="page-section"
    >
      <div className="mx-auto max-w-6xl">
        <div className="section-frame">
          <div className="paper-label">05 / Founder References</div>

          <div className="section-body">
            <div>
              <h2 className="section-heading">
                What founders say after the wire.
              </h2>
              <p className="section-lede">
                The useful measure of a venture partner is the work founders can
                name.
              </p>
            </div>

            <div>
              <p className="paper-label mb-3">Operating Evidence</p>
              <div
                data-featured-reference
                className="bg-ink px-4 py-6 sm:px-7 sm:py-10 md:px-10"
              >
                <TestimonialFigure
                  testimonial={featuredFounderTestimonials[0]}
                  index={0}
                  inverse
                />
              </div>
              <div className="border-b border-line">
                {featuredFounderTestimonials.slice(1).map((testimonial, index) => (
                  <TestimonialFigure
                    key={testimonial.name}
                    testimonial={testimonial}
                    index={index + 1}
                  />
                ))}
              </div>
            </div>

            <details data-founder-references className="group border-y border-line">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 sm:min-h-16 sm:gap-6 sm:py-5 [&::-webkit-details-marker]:hidden">
                <span className="font-display text-[1.4rem] leading-none text-ink sm:text-3xl">
                  More founder references
                </span>
                <span
                  aria-hidden="true"
                  className="font-mono text-lg text-ink-muted transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="border-t border-line">
                {additionalFounderTestimonials.map((testimonial, index) => (
                  <TestimonialFigure
                    key={testimonial.name}
                    testimonial={testimonial}
                    index={index + featuredFounderTestimonials.length}
                  />
                ))}


              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
