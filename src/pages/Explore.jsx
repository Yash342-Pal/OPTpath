
import { useMemo, useState } from "react";
import OpportunityCard from "../components/OpportunityCard";
import opportunities from "../data/opportunities";

const categories = ["All", "Technology", "Education", "Income", "Business"];

export default function Explore({ profile, navigate }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredOpportunities = useMemo(() => {
    return opportunities.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;

      const query = search.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags.some((tag) => tag.toLowerCase().includes(query));

      const matchesProfile =
        !profile ||
        item.audience.includes(profile.status);

      return matchesCategory && matchesSearch && matchesProfile;
    });
  }, [activeCategory, search, profile]);

  return (
    <section className="section-container explore-page">
      <div className="explore-heading">
        <span className="eyebrow">YOUR OPTIONS, ALL IN ONE PLACE</span>
        <h1>Explore <span className="gradient-text">opportunities.</span></h1>
        <p>
          Discover different ways to learn, work, earn, and build your future.
        </p>
      </div>

      {profile && (
        <div className="profile-summary">
          <div className="summary-avatar">
            {(profile.name || "Y").charAt(0).toUpperCase()}
          </div>
          <div>
            <strong>
              {profile.name ? `Welcome, ${profile.name}` : "Your profile is ready"}
            </strong>
            <p>
              {profile.status} · {profile.education} · {profile.interest}
            </p>
          </div>
          <button className="text-link" onClick={() => navigate("profile")}>
            Edit profile →
          </button>
        </div>
      )}

      <div className="explore-toolbar">
        <div className="search-box">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search skills, careers, or opportunities..."
            aria-label="Search opportunities"
          />
        </div>

        <button className="btn btn-secondary" onClick={() => {
          setSearch("");
          setActiveCategory("All");
        }}>
          Reset filters
        </button>
      </div>

      <div className="category-filters" aria-label="Filter opportunities">
        {categories.map((category) => (
          <button
            key={category}
            className={
              activeCategory === category
                ? "filter-chip selected"
                : "filter-chip"
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="results-heading">
        <div>
          <h2>{profile ? "Options for your situation" : "Discover your options"}</h2>
          <p>
            {filteredOpportunities.length} opportunities found
            {profile ? ` for ${profile.status.toLowerCase()}s` : ""}
          </p>
        </div>
      </div>

      {filteredOpportunities.length > 0 ? (
        <div className="opportunity-grid">
          {filteredOpportunities.map((item) => (
            <OpportunityCard
              key={item.id}
              item={item}
              onExplore={setSelectedItem}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span>⌕</span>
          <h3>No matching opportunities yet</h3>
          <p>Try another search or change your category filter.</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              setSearch("");
              setActiveCategory("All");
            }}
          >
            Show all opportunities
          </button>
        </div>
      )}

      {selectedItem && (
        <div
          className="modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedItem(null);
          }}
        >
          <section
            className="detail-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="opportunity-title"
          >
            <button
              className="modal-close"
              onClick={() => setSelectedItem(null)}
              aria-label="Close details"
            >
              ×
            </button>

            <span className="opportunity-icon">{selectedItem.icon}</span>
            <span className="category-tag">{selectedItem.category}</span>
            <h2 id="opportunity-title">{selectedItem.title}</h2>
            <p>{selectedItem.description}</p>

            <div className="detail-facts">
              <div>
                <span className="muted-label">TIMEFRAME</span>
                <strong>{selectedItem.duration}</strong>
              </div>
              <div>
                <span className="muted-label">STARTING LEVEL</span>
                <strong>{selectedItem.level}</strong>
              </div>
            </div>

            <h3>Skills and topics to explore</h3>
            <div className="tag-list">
              {selectedItem.tags.map((tag) => (
                <span className="skill-tag" key={tag}>{tag}</span>
              ))}
            </div>

            <p className="privacy-note">
              This is a suggested starting point, not a guarantee of eligibility,
              employment, or income. Verify requirements before committing.
            </p>

            <button
              className="btn btn-primary btn-large submit-btn"
              onClick={() => {
                setSelectedItem(null);
                navigate("profile");
              }}
            >
              Refine my recommendations →
            </button>
          </section>
        </div>
      )}
    </section>
  );
}
