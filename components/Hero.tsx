import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="px-5 pb-0 pt-24 sm:px-6 sm:pb-12 md:px-10 md:pb-20 md:pt-24 lg:px-14"
    >
      <div className="mx-auto max-w-6xl">
        <div className="border-t border-line py-8 sm:py-10 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-center lg:gap-16">
            <div>
              <h1 className="max-w-4xl font-display text-[1.95rem] leading-[0.98] tracking-normal text-ink sm:text-[4rem] md:text-7xl lg:text-[5rem]">
                Capital is a commodity. Attention is not.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-7 text-ink-soft sm:mt-6 sm:text-xl sm:leading-8 md:text-2xl">
                We back technical founders early, then help make their companies
                impossible to ignore.
              </p>
              <div className="mt-5 flex justify-end lg:hidden">
                <Image
                  src="/logo.png"
                  alt=""
                  width={48}
                  height={40}
                  className="h-auto w-10"
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
