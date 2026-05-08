import Image from "next/image";
import type { ReactNode } from "react";

type TeamMember = {
  name: string;
  title: string;
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

function JakeName({ className = "" }: { className?: string }) {
  return (
    <span className={`jake-name ${className}`.trim()}>
      Jake Paul
    </span>
  );
}

const team: TeamMember[] = [
  {
    name: "Geoffrey Woo",
    title: "Co-founder & Managing Partner",
    bio: (
      <>
        <ExternalLink href="https://geoffreywoo.com">Geoffrey Woo</ExternalLink>{" "}
        is co-founder & managing partner of Anti Fund and an entrepreneur. He
        co-founded <ExternalLink href="https://archive.com">Archive</ExternalLink>
        , <ExternalLink href="https://ketone.com">Ketone-IQ</ExternalLink>, and{" "}
        <ExternalLink href="https://getw.com">W</ExternalLink>. He previously
        founded and{" "}
        <ExternalLink href="https://techcrunch.com/2012/11/01/groupon-quietly-acquires-location-based-social-recommendations-startup-glassmap/">
          sold Glassmap (YC S11) to Groupon
        </ExternalLink>
        . He earned a BS with Honors & Distinction in Computer Science, but
        dropped out of the MS program, at Stanford University and is
        co-inventor and co-author of numerous{" "}
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
    bio: (
      <>
        <ExternalLink href="https://en.wikipedia.org/wiki/Jake_Paul">
          Jake Paul
        </ExternalLink>{" "}
        is co-founder & managing partner of Anti Fund and a professional boxer.
        Jake holds the record for the most streamed sporting event in history
        with 65M peak concurrent streams,{" "}
        <ExternalLink href="https://www.netflix.com/tudum/articles/jake-paul-vs-mike-tyson-live-release-date-news">
          Paul vs Tyson on Netflix
        </ExternalLink>
        , was a top 5{" "}
        <ExternalLink href="https://trends.withgoogle.com/year-in-search/2024/">
          most Googled athlete
        </ExternalLink>{" "}
        in 2024, and has 70M+ followers across social media, including 28M+ on{" "}
        <ExternalLink href="https://www.instagram.com/jakepaul/">
          Instagram
        </ExternalLink>{" "}
        and 20M+ on{" "}
        <ExternalLink href="https://www.youtube.com/@jakepaul">
          YouTube
        </ExternalLink>
        . He is founder of{" "}
        <ExternalLink href="https://mostvaluablepromotions.com">
          Most Valuable Promotions
        </ExternalLink>
        , <ExternalLink href="https://betr.app">Betr</ExternalLink>, and{" "}
        <ExternalLink href="https://getw.com">W</ExternalLink>.
      </>
    ),
  },
  {
    name: "Logan Paul",
    title: "General Partner",
    bio: (
      <>
        Logan Paul is general partner of Anti Fund and a professional wrestler.
        He is founder of{" "}
        <ExternalLink href="https://drinkprime.com">Prime</ExternalLink>, the
        fastest growing beverage brand in history, and Lunchly. He also hosts
        Impaulsive, one of the biggest podcasts in the world. He is one of the
        most followed celebrities across social media, including 26M+ on{" "}
        <ExternalLink href="https://www.instagram.com/loganpaul/">
          Instagram
        </ExternalLink>{" "}
        and 23M+ on{" "}
        <ExternalLink href="https://www.youtube.com/@loganpaulvlogs">
          YouTube
        </ExternalLink>
        .
      </>
    ),
  },
  {
    name: "Steve Han",
    title: "Partner",
    bio: (
      <>
        Steve Han is a partner at Anti Fund. He was previously at March
        Capital and Deutsche Bank. Born in Korea and raised across India and
        China, he holds dual degrees in Economics and Environmental Economics
        & Policy from the University of California, Berkeley. Steve served in
        the ROK Army as secretary to the Commanding General of the 17th
        Infantry Division, selected out of 12,000 soldiers.
      </>
    ),
  },
];

export default function Team() {
  return (
    <section id="team" className="px-5 py-20 sm:px-6 md:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-t border-line pt-6 lg:grid-cols-[140px_minmax(0,1fr)]">
          <div className="paper-label">02 / Team</div>

          <div className="space-y-10">
            <p className="max-w-3xl text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
              Anti Fund is built from company building, institutional
              investing, and global distribution. The partnership is unusual on
              purpose: technical judgment, capital formation, and cultural reach
              in one firm.
            </p>

            <figure className="border border-line bg-paper-alt p-3 sm:p-4 md:p-6">
              <div className="grid gap-4 sm:gap-6 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:items-end">
                <div className="overflow-hidden border border-line bg-paper">
                  <Image
                    src="/team-general-partners.jpg"
                    alt="Geoffrey Woo, Jake Paul, and Logan Paul seated together."
                    width={2048}
                    height={2560}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>

                <figcaption className="space-y-3 sm:space-y-4">
                  <p className="paper-label">General Partners</p>
                  <p className="max-w-2xl font-display text-[2rem] leading-[1.08] tracking-[-0.03em] text-ink sm:text-3xl md:text-4xl">
                    Geoffrey Woo, <JakeName className="jake-name-display" />,
                    and Logan Paul.
                  </p>
                  <p className="max-w-2xl text-base leading-7 text-ink-soft">
                    The point is not fame for its own sake. It is surface area:
                    a firm designed for a market where technical products need
                    cultural velocity, and cultural velocity needs real company
                    judgment.
                  </p>
                </figcaption>
              </div>
            </figure>

            <div className="border-y border-line">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className="grid gap-4 border-b border-line py-5 last:border-b-0 md:grid-cols-[44px_minmax(0,260px)_minmax(0,1fr)] md:gap-6 md:py-6"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl leading-none tracking-[-0.03em] text-ink md:text-3xl">
                      {member.name === "Jake Paul" ? (
                        <JakeName className="jake-name-display" />
                      ) : (
                        member.name
                      )}
                    </h3>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                      {member.title}
                    </p>
                  </div>
                  <p className="text-base leading-7 text-ink-soft">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
