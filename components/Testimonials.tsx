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

const featured = founderTestimonials.find((item) => item.name === "Gianluca Bencomo")!;
const additional = founderTestimonials.filter((item) => item !== featured);

function TestimonialFigure({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="py-5">
      <blockquote className="max-w-[72ch] text-base leading-relaxed text-ink">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-3 text-sm leading-relaxed text-ink-soft">
        {testimonial.profileUrl ? (
          <a href={testimonial.profileUrl} target="_blank" rel="noreferrer" className="paper-link font-medium">{testimonial.name}</a>
        ) : <span className="font-medium">{testimonial.name}</span>}
        <span> · {testimonial.role} </span>
        {testimonial.companyName && testimonial.companyUrl ? (
          <a href={testimonial.companyUrl} target="_blank" rel="noreferrer" className="paper-link">{testimonial.companyName}</a>
        ) : null}
        {testimonial.context ? <p className="mt-1 text-xs text-ink-muted">{testimonial.context}</p> : null}
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <div id="proof" aria-label="Founder references">
      <div data-featured-reference className="border-l-2 border-accent-quiet pl-5 sm:pl-6">
        <TestimonialFigure testimonial={featured} />
      </div>
      <details data-founder-references className="disclosure mt-3">
        <summary>More founder references</summary>
        <div className="divide-y divide-line">
          {additional.map((testimonial) => <TestimonialFigure key={testimonial.name} testimonial={testimonial} />)}
        </div>
      </details>
    </div>
  );
}
