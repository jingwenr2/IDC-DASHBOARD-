import { useMemo, useState } from 'react'

function LocationGrid({ locations, categories }) {
  const [active, setActive] = useState('all')
  const [saved, setSaved] = useState([])

  const categoryOptions = useMemo(
    () => [
      { key: 'all', label: 'All', color: '#f7cdd3' },
      { key: 'eats', label: 'Cafes', color: '#f9d9e0' },
      { key: 'legacy', label: 'History', color: '#e6d3f0' },
      { key: 'sisterly', label: 'Women-centered', color: '#f5c9de' },
      { key: 'rec', label: 'Fun', color: '#f1e0d4' },
    ],
    [],
  )

  const filtered = useMemo(
    () =>
      active === 'all'
        ? locations
        : locations.filter((item) => item.category === active),
    [active, locations],
  )

  const toggleSave = (name) => {
    setSaved((current) =>
      current.includes(name) ? current.filter((item) => item !== name) : [...current, name],
    )
  }

  return (
    <section className="locations-panel" id="locations">
      <div className="section-header">
        <span className="section-marker">Location feed</span>
        <h2>Saved places that feel like a Xiaohongshu post</h2>
      </div>

      <div className="filter-row">
        {categoryOptions.map((option) => (
          <button
            key={option.key}
            type="button"
            className={`filter-pill ${active === option.key ? 'active' : ''}`}
            style={{ borderColor: option.color }}
            onClick={() => setActive(option.key)}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="location-grid">
        {filtered.map((location) => (
          <article key={location.name} className="location-card">
            <div className="photo-polaroid">
              <div className="photo-placeholder">{location.emoji}</div>
              <span className="polaroid-label">{location.categoryLabel}</span>
            </div>
            <div className="location-card-body">
              <div className="location-card-top">
                <div>
                  <span className="category-badge">{location.badge}</span>
                  <h3>{location.name}</h3>
                  <p className="location-place">{location.location}</p>
                </div>
                <button
                  type="button"
                  className={`save-button ${saved.includes(location.name) ? 'saved' : ''}`}
                  onClick={() => toggleSave(location.name)}
                  aria-label="Save this spot"
                >
                  {saved.includes(location.name) ? '💗' : '🤍'}
                </button>
              </div>
              <p className="location-copy">{location.description}</p>
              <div className="tag-row">
                {location.tags.map((tag) => (
                  <span key={tag} className="location-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <a className="map-button" href="#map">
                Open Map
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default LocationGrid
