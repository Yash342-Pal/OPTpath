
export default function OpportunityCard({ item, onExplore }) {
  return (
    <article className="opportunity-card">
      <div className="opportunity-top">
        <span className="opportunity-icon">{item.icon}</span>
        <span className="category-tag">{item.category}</span>
      </div>

      <h3>{item.title}</h3>
      <p>{item.description}</p>

      <div className="opportunity-meta">
        <span>◷ {item.duration}</span>
        <span>↗ {item.level}</span>
      </div>

      <button className="text-link" onClick={() => onExplore(item)}>
        Explore opportunity <span aria-hidden="true">→</span>
      </button>
    </article>
  );
}
