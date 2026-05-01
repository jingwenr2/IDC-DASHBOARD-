function CategoryCards({ categories }) {
  return (
    <section className="category-panel" id="categories">
      <div className="section-header">
        <span className="section-marker">Categories</span>
        <h2>Saved city routines for every NYC mood</h2>
      </div>
      <div className="category-grid">
        {categories.map((category) => (
          <article key={category.key} className="category-card">
            <div className="category-sticker">{category.emoji}</div>
            <div>
              <h3>{category.label}</h3>
              <p>{category.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CategoryCards
