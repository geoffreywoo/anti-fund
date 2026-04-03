const testimonials = [
  {
    quote:
      "Geoff was one of the earliest investors for both Ramp and Paribus, and he is a trusted advisor and a key strategic sounding board. With Ramp, Geoff has directly boosted our topline revenue and growth by introducing us to and helping us close key customers and hire superstar executives. Geoff is on my shortlist to bring onboard for any company I'm involved with.",
    name: "Eric Glyman",
    role: "CEO & Co-founder,",
    companyName: "Ramp",
    companyUrl: "https://ramp.com/",
    profileUrl: "https://x.com/eglyman",
  },
  {
    quote:
      "Awesome working with Jake Paul, Geoffrey Woo and Anti Fund!!",
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
    role: "CTO & Co-founder,",
    companyName: "Chronosphere",
    companyUrl: "https://chronosphere.io/",
    profileUrl: "https://www.linkedin.com/in/robskillington/",
  },
  {
    quote:
      "Thanks for all of support! Couldn't ask for a better partner.",
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
  {
    quote:
      'No other GP on the AngelList platform - out of hundreds of qualifying investors - beats the Anti Fund along both of these axes. It follows that Geoff and Jake may be able to justify a claim to being the "best investors on AngelList", in the sense that there\'s no other GP that dominates them along the data-driven axes that we believe can help to predict future investment performance.',
    name: "Abraham Othman",
    role:
      "Former Chief Data Scientist, AngelList & CIO, Strawberry Tree Management Company LLC",
  },
];

export default function Testimonials() {
  return (
    <section
      id="proof"
      className="px-5 py-20 sm:px-6 md:px-10 md:py-28 lg:px-14"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-t border-line pt-6 lg:grid-cols-[140px_minmax(0,1fr)]">
          <div className="paper-label">05 / Founder Proof</div>

          <div className="space-y-10">
            <p className="max-w-3xl text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
              The strongest proof is not a slogan. It is what founders,
              operators, and close observers say after seeing the work up
              close.
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
                    <blockquote
                      className={`max-w-4xl font-display leading-[1.2] tracking-[-0.02em] text-ink ${
                        testimonial.quote.length > 240
                          ? "text-lg sm:text-xl md:text-[1.65rem]"
                          : "text-xl sm:text-2xl md:text-[2rem]"
                      }`}
                    >
                      "{testimonial.quote}"
                    </blockquote>
                    <figcaption className="mt-4">
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                        {testimonial.profileUrl ? (
                          <a
                            href={testimonial.profileUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="underline decoration-1 underline-offset-4 transition-colors duration-200 hover:text-ink"
                          >
                            {testimonial.name}
                          </a>
                        ) : (
                          testimonial.name
                        )}
                      </p>
                      <p className="mt-1 text-base leading-7 text-ink-soft">
                        {testimonial.companyName && testimonial.companyUrl ? (
                          <>
                            {testimonial.role}{" "}
                            <a
                              href={testimonial.companyUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="underline decoration-1 underline-offset-4 transition-colors duration-200 hover:text-ink"
                            >
                              {testimonial.companyName}
                            </a>
                          </>
                        ) : (
                          testimonial.role
                        )}
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
