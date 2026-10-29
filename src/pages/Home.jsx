
import OpportunityCard from "../components/OpportunityCard";
import opportunities from "../data/opportunities";

export default function Home({ navigate, profile }) {
  const featured = opportunities.slice(0, 3);

  return (
    <>
      <section className="hero section-container">
        <div className="hero-content">
          <span className="eyebrow">
            <span className="status-dot" /> YOUR NEXT CHAPTER STARTS HERE
          </span>

          <h1>
            Find your direction.
            <br />
            <span className="gradient-text">Build your future.</span>
          </h1>

          <p className="hero-description">
            Whether you're a student, a graduate, or figuring things out,
            discover opportunities that fit your situation and help you take
            your next step.
          </p>

          <div className="hero-actions">
            <button
              className="btn btn-primary btn-large"
              onClick={() => navigate("profile")}
            >
              {profile ? "Update my profile" : "Discover my path"} <span>→</span>
            </button>

            <button
              className="btn btn-secondary btn-large"
              onClick={() => navigate("explore")}
            >
              Explore opportunities
            </button>
          </div>

          <div className="hero-note">
            <span className="note-check">✓</span>
            <span>Made for different backgrounds, not just one career path.</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow" />

          <div className="path-card">
            <div className="path-card-header">
              <div>
                <span className="muted-label">YOUR JOURNEY</span>
                <h3>Every step counts.</h3>
              </div>
              <span className="path-symbol">↗</span>
            </div>

            <div className="journey-list">
              <div className="journey-item">
                <div className="journey-icon blue">◎</div>
                <div>
                  <strong>Understand yourself</strong>
                  <span>Start with your current situation</span>
                </div>
                <span className="journey-number">01</span>
              </div>

              <div className="journey-connector" />

              <div className="journey-item">
                <div className="journey-icon green">⌕</div>
                <div>
                  <strong>Explore your options</strong>
                  <span>Discover paths worth considering</span>
                </div>
                <span className="journey-number">02</span>
              </div>

              <div className="journey-connector" />

              <div className="journey-item">
                <div className="journey-icon orange">↗</div>
                <div>
                  <strong>Take your next step</strong>
                  <span>Turn ideas into action</span>
                </div>
                <span className="journey-number">03</span>
              </div>
            </div>

            <div className="path-card-bottom">
              <span className="sparkle">✳</span>
              <span>Your journey. Your pace. Your choices.</span>
            </div>
          </div>

          <div className="floating-note">
            <span>✦</span>
            <div>
              <strong>Many possibilities</strong>
              <p>One step at a time</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        <div className="section-container stats-inner">
          <div>
            <strong>01</strong>
            <span>Know where you stand</span>
          </div>
          <div>
            <strong>02</strong>
            <span>Discover your options</span>
          </div>
          <div>
            <strong>03</strong>
            <span>Choose your next move</span>
          </div>
        </div>
      </section>

      <section className="section-container section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">POSSIBILITIES AROUND YOU</span>
            <h2>There is more than one way forward.</h2>
            <p>Explore different directions based on what matters to you.</p>
          </div>
          <button className="text-link heading-link" onClick={() => navigate("explore")}>
            View all opportunities →
          </button>
        </div>

        <div className="opportunity-grid">
          {featured.map((item) => (
            <OpportunityCard
              key={item.id}
              item={item}
              onExplore={() => navigate("explore")}
            />
          ))}
        </div>
      </section>

      <section className="section-container section-block">
        <div className="cta-banner">
          <div>
            <span className="eyebrow">YOUR NEXT STEP</span>
            <h2>Not sure where to start?</h2>
            <p>Tell us a little about yourself and explore possible paths.</p>
          </div>
          <button className="btn btn-light btn-large" onClick={() => navigate("profile")}>
            Get started <span>→</span>
          </button>
        </div>
      </section>
    </>
  );
}
