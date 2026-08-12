import Image from "next/image";
import type { ReactNode } from "react";

type TeamMember = {
  name: string;
  title: string;
  profileUrl?: string;
  bio: ReactNode;
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
    profileUrl: "https://geoffreywoo.com",
    bio: (
      <>
        Geoff Woo is an entrepreneur and engineer. He co-founded{" "}
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
    bio: (
      <>
        Steve Han previously invested at March Capital and worked at Deutsche
        Bank. Born in Korea and raised across India and China, he studied
        Economics and Environmental Economics & Policy at UC Berkeley and
        served in the ROK Army.
      </>
    ),
  },
];

export default function Team() {
  return (
    <section id="team" className="px-5 py-14 sm:px-6 sm:py-20 md:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 border-t border-line pt-5 sm:gap-8 sm:pt-6 lg:grid-cols-[140px_minmax(0,1fr)] lg:gap-10">
          <div className="paper-label">03 / Team</div>

          <div className="space-y-6 sm:space-y-8">
            <h2 className="font-display text-[2.15rem] leading-[1.04] text-ink sm:text-4xl md:text-5xl">
              Team.
            </h2>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-[minmax(0,420px)_minmax(0,1fr)] md:items-start">
              <figure>
                <div className="overflow-hidden border border-line bg-paper-alt">
                  <Image
                    src="/team-general-partners.jpg"
                    alt="Geoff Woo, Jake Paul, and Logan Paul seated together."
                    width={2048}
                    height={2560}
                    className="aspect-[4/3] h-auto w-full object-cover object-[center_42%] md:aspect-[4/5] md:object-center"
                  />
                </div>
                <figcaption className="mt-2 paper-label sm:mt-3">General Partners</figcaption>
              </figure>

              <div data-team-roster className="border-y border-line">
                {team.map((member, index) => (
                  <article
                    key={member.name}
                    className="grid grid-cols-[28px_minmax(0,1fr)] gap-x-3 border-b border-line py-5 last:border-b-0 sm:grid-cols-[36px_minmax(0,1fr)] sm:gap-x-4 sm:py-6"
                  >
                    <span className="font-mono text-[11px] uppercase text-ink-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-[1.45rem] leading-none text-ink sm:text-3xl">
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
                      <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-muted sm:mt-2 sm:text-[11px] sm:tracking-normal">
                        {member.title}
                      </p>
                      <p className="mt-3 max-w-3xl text-[0.95rem] leading-6 text-ink-soft sm:mt-4 sm:text-base sm:leading-7">
                        {member.bio}
                      </p>
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
