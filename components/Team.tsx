import Image from "next/image";
import type { ReactNode } from "react";

type TeamMember = {
  name: string;
  title: string;
  summary: string;
  profileUrl?: string;
  bio?: ReactNode;
};

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="paper-link"
    >
      {children}
    </a>
  );
}

const team: TeamMember[] = [
  {
    name: "Geoff Woo",
    title: "Co-founder & Managing Partner",
    summary: "Entrepreneur and computer scientist; co-founder of Archive, Ketone-IQ, and W.",
    profileUrl: "https://geoffreywoo.com",
    bio: (
      <>
        Geoff Woo is an entrepreneur and computer scientist. He co-founded{" "}
        <ExternalLink href="https://archive.com">Archive</ExternalLink>,{" "}
        <ExternalLink href="https://ketone.com">Ketone-IQ</ExternalLink>, and{" "}
        <ExternalLink href="https://getw.com">W</ExternalLink>. His first
        company, Glassmap (YC S11), was{" "}
        <ExternalLink href="https://techcrunch.com/2012/11/01/groupon-quietly-acquires-location-based-social-recommendations-startup-glassmap/">
          acquired by Groupon
        </ExternalLink>
        . A Stanford Computer Science graduate, he is a co-inventor and
        co-author of numerous{" "}
        <ExternalLink href="https://patents.google.com/?inventor=Geoffrey+Woo">
          US patents
        </ExternalLink>{" "}
        and{" "}
        <ExternalLink href="https://scholar.google.com/scholar?hl=en&q=%22Geoffrey+Woo%22">
          peer-reviewed science papers
        </ExternalLink>
        .
      </>
    ),
  },
  {
    name: "Jake Paul",
    title: "Co-founder & Managing Partner",
    summary: "Entrepreneur and professional boxer; founder of Most Valuable Promotions.",
    profileUrl: "https://en.wikipedia.org/wiki/Jake_Paul",
    bio: (
      <>
        Jake Paul is an entrepreneur and professional boxer. His Paul vs Tyson
        event reached 65M peak concurrent streams on Netflix, and he was among
        Google's five{" "}
        <ExternalLink href="https://trends.withgoogle.com/year-in-search/2024/">
          most-searched athletes
        </ExternalLink>{" "}
        in 2024. He founded{" "}
        <ExternalLink href="https://mostvaluablepromotions.com">
          Most Valuable Promotions
        </ExternalLink>
        {" "}and co-founded <ExternalLink href="https://betr.app">Betr</ExternalLink>{" "}
        and{" "}
        <ExternalLink href="https://getw.com">W</ExternalLink>.
      </>
    ),
  },
  {
    name: "Logan Paul",
    title: "General Partner",
    summary: "Co-founder of PRIME, host of Impaulsive, and professional wrestler.",
    profileUrl: "https://www.instagram.com/loganpaul/",
    bio: (
      <>
        Logan Paul is an entrepreneur, creator, and professional wrestler. He
        co-founded <ExternalLink href="https://drinkprime.com">PRIME</ExternalLink>,
        hosts Impaulsive, and brings global consumer, media, and distribution
        experience.
      </>
    ),
  },
  {
    name: "Steve Han",
    title: "Partner",
    summary: "Former investor at March Capital; previously at Deutsche Bank.",
    bio: (
      <>
        Steve Han previously invested at March Capital and worked at Deutsche
        Bank. Born in Korea and raised across India and China, he studied
        Economics and Environmental Economics & Policy at UC Berkeley.
      </>
    ),
  },
  {
    name: "Laura Brady",
    title: "Managing Director, Capital Formation",
    summary: "CEO of Jake Paul's family office; 15 years in capital markets.",
    bio: (
      <>
        Laura Brady is CEO of Jake Paul's family office. She was previously
        EVP at Strive and spent 15 years in capital markets at Bank of America
        and Knight Capital. She holds a BA in Government from Harvard University.
      </>
    ),
  },
];

export default function Team() {
  return (
    <section id="team" className="page-section">
      <div className="mx-auto max-w-6xl">
        <div className="section-frame">
          <div className="paper-label">Team</div>

          <div className="space-y-6 sm:space-y-8">
            <h2 className="section-heading">
              People behind the fund.
            </h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] lg:items-start">
              <figure className="w-full max-w-[560px] lg:max-w-[280px]">
                <div className="overflow-hidden border border-line bg-paper-alt">
                  <Image
                    src="/team-general-partners.jpg"
                    alt="Geoff Woo, Jake Paul, and Logan Paul seated together."
                    width={2048}
                    height={2560}
                    sizes="(min-width: 1280px) 280px, (min-width: 1024px) 25vw, (min-width: 640px) 560px, calc(100vw - 40px)"
                    className="aspect-[4/3] h-auto w-full object-cover object-[center_42%] lg:aspect-[4/5] lg:object-center"
                  />
                </div>
                <figcaption className="mt-2 paper-label sm:mt-3">General Partners</figcaption>
              </figure>

              <div data-team-roster className="border-y border-line">
                {team.map((member) => (
                  <article
                    key={member.name}
                    className="border-b border-line py-4 last:border-b-0"
                  >
                    <div>
                      <h3 className="font-body text-lg font-medium leading-snug text-ink sm:text-xl">
                        {member.profileUrl ? (
                          <a
                            href={member.profileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="paper-link"
                          >
                            {member.name}
                          </a>
                        ) : (
                          member.name
                        )}
                      </h3>
                      <p className="mt-1 font-body text-xs leading-relaxed text-ink-muted">
                        {member.title}
                      </p>
                      <p className="mt-2 font-body text-[15px] leading-relaxed text-ink-soft">
                        {member.summary}
                      </p>
                      {member.bio && (
                        <details data-team-bio className="mt-1">
                          <summary className="min-h-11 w-fit cursor-pointer py-3 font-body text-xs leading-relaxed text-ink-muted hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                            Full biography
                          </summary>
                          <p className="max-w-3xl pb-2 pt-1 font-body text-[15px] leading-relaxed text-ink-soft">
                            {member.bio}
                          </p>
                        </details>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
