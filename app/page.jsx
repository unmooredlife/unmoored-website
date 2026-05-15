export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

        <div className="relative z-10 max-w-5xl">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-neutral-400">
            S/Y Unmoored
          </p>

          <h1 className="mb-8 text-6xl font-semibold leading-tight md:text-8xl">
            Life beyond the dock.
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-neutral-300 md:text-xl">
            A Norwegian family preparing to leave land behind and sail the world full-time.
            Boats, freedom, finance, long-term cruising and the transition into a different way of life.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#journey"
              className="rounded-2xl bg-white px-8 py-4 text-sm font-medium text-black transition hover:scale-105"
            >
              Explore the Journey
            </a>

            <a
              href="mailto:hello@unmoored.no"
              className="rounded-2xl border border-white/20 px-8 py-4 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      <section
        id="journey"
        className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 md:grid-cols-3"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <h2 className="mb-4 text-2xl font-semibold">The Plan</h2>
          <p className="leading-7 text-neutral-300">
            Building toward a long-term liveaboard lifestyle centered around a modern cruising catamaran and financial independence.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <h2 className="mb-4 text-2xl font-semibold">The Boats</h2>
          <p className="leading-7 text-neutral-300">
            Research, ownership planning, equipment choices, Mediterranean cruising and eventually crossing oceans.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <h2 className="mb-4 text-2xl font-semibold">The Transition</h2>
          <p className="leading-7 text-neutral-300">
            Leaving behind a traditional working life and designing something slower, freer and more intentional.
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-neutral-500">
        © 2026 Unmoored.no — All rights reserved.
      </footer>
    </main>
  )
}
