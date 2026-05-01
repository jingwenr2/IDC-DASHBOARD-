function Hero() {
  return (
    <section className="hero-panel" id="hero">
      <div className="hero-text">
        <span className="hero-tag">Girlhood NYC</span>
        <h1>Girlhood NYC</h1>
        <p className="hero-subtitle">A Young Women’s Survival Guide to Hidden City Gems</p>
        <p className="hero-lead">
          NYC is not just Times Square. This is our soft, hidden, cultural, and girlhood-centered map of the city.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#locations">
            Start Exploring
          </a>
          <a className="button button-secondary" href="#map">
            View Map
          </a>
        </div>
      </div>
      <div className="hero-frame">
        <div className="hero-photo-card">
          <div className="photo-decor top-left">♡</div>
          <div className="photo-frame">
            <div className="photo-faux-image">New York vibes</div>
          </div>
          <div className="photo-caption">Hidden gems in the city</div>
        </div>
        <div className="hero-notebook">
          <div className="note-chip">NYC must go</div>
          <div className="note-card">Soft city diary energy ✨</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
