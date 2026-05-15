export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="glow" />
        <div className="heroContent">
          <p className="eyebrow">S/Y Unmoored</p>
          <h1>Life beyond the dock.</h1>
          <p className="intro">
            A Norwegian family preparing to leave land behind and sail the world full-time.
            Boats, freedom, finance, long-term cruising and the transition into a different way of life.
          </p>
          <div className="buttons">
            <a className="primary" href="#journey">Explore the Journey</a>
            <a className="secondary" href="mailto:hello@unmoored.no">Contact</a>
          </div>
        </div>
      </section>

      <section id="journey" className="cards">
        <article className="card">
          <h2>The Plan</h2>
          <p>Building toward a long-term liveaboard lifestyle centered around a modern cruising catamaran and financial independence.</p>
        </article>
        <article className="card">
          <h2>The Boats</h2>
          <p>Research, ownership planning, equipment choices, Mediterranean cruising and eventually crossing oceans.</p>
        </article>
        <article className="card">
          <h2>The Transition</h2>
          <p>Leaving behind a traditional working life and designing something slower, freer and more intentional.</p>
        </article>
      </section>

      <footer>© 2026 Unmoored.no — All rights reserved.</footer>
    </main>
  )
}
