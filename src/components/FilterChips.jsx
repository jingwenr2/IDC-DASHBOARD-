function FilterChips({ categories, activeCategory, onSelect }) {
  const chips = [
    { key: 'all', label: 'All', color: '#000000', isAll: true },
    ...categories,
  ]

  return (
    <div className="filters" role="tablist" aria-label="Location categories">
      {chips.map((chip) => {
        const isActive = activeCategory === chip.key
        return (
          <button
            key={chip.key}
            type="button"
            className={`filter-chip ${isActive ? 'filter-chip--active' : ''}`}
            onClick={() => onSelect(chip.key)}
            aria-pressed={isActive}
          >
            <span
              className="filter-dot"
              style={{ background: chip.isAll ? '#999' : chip.color }}
            />
            {chip.label}
          </button>
        )
      })}
    </div>
  )
}

export default FilterChips
