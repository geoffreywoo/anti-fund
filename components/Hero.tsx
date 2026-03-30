import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Ambient glow behind logo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(0,200,130,0.07),transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04),transparent_70%)] pointer-events-none" />

      <div className="relative flex flex-col items-center text-center">
        {/* Logo */}
        <div className="animate-fade-up mb-10 md:mb-14">
          <Image
            src="/logo.png"
            alt="Anti Fund"
            width={400}
            height={331}
            className="w-[220px] min-[390px]:w-[260px] md:w-[340px] lg:w-[420px] h-auto drop-shadow-[0_0_60px_rgba(0,200,130,0.15)]"
            priority
          />
        </div>

        {/* Tagline */}
        <div className="animate-fade-up delay-200 max-w-2xl">
          <p className="text-xl md:text-2xl lg:text-[1.75rem] text-warm-gray leading-relaxed tracking-[-0.01em]">
            Technology creates value. Culture creates demand.
          </p>
          <p className="text-xl md:text-2xl lg:text-[1.75rem] text-warm-white leading-relaxed tracking-[-0.01em] mt-2 font-medium">
            We back founders who command both.
          </p>
        </div>
      </div>

      <div className="absolute bottom-12 left-6 md:left-16 lg:left-24 animate-fade-up delay-500">
        <a
          href="#thesis"
          className="group flex items-center gap-3 text-muted hover:text-gold transition-colors font-mono text-xs tracking-[0.2em] uppercase"
        >
          <span className="block w-8 h-px bg-muted group-hover:bg-gold group-hover:w-12 transition-all" />
          Scroll
        </a>
      </div>
    </section>
  );
}
