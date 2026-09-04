import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="hero-section"
    >
      <div className="mx-auto max-w-6xl">
        <div className="hero-frame border-t border-line">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-center lg:gap-16">
            <div className="relative">
              <h1 className="hero-heading">
                <span className="block">Capital is a commodity.</span>{" "}
                <span className="block">Attention is not.</span>
              </h1>

              <p className="hero-lede">
                We back technical founders at formation and category leaders at
                growth. Then we put our capital, judgment, and reach to work.
              </p>
              <div className="hero-actions">
                <a href="#help" className="inline-flex min-h-12 items-center justify-center border border-ink bg-ink px-5 font-mono text-xs uppercase tracking-[0.08em] text-paper transition-colors hover:border-accent hover:bg-accent">
                  For founders
                </a>
                <a href="#investors" className="inline-flex min-h-12 items-center justify-center border border-line-strong px-5 font-mono text-xs uppercase tracking-[0.08em] text-ink transition-colors hover:border-ink hover:bg-paper-alt">
                  For limited partners
                </a>
              </div>
              <div className="absolute bottom-1 right-0 lg:hidden">
                <Image
                  src="/logo.png"
                  alt=""
                  width={48}
                  height={40}
                  className="h-auto w-11"
                />
              </div>
            </div>

            <aside className="hidden border-l border-line pl-10 lg:flex lg:justify-center">
              <Image
                src="/logo.png"
                alt="Anti Fund"
                width={180}
                height={150}
                className="h-auto w-36"
                priority
              />
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
