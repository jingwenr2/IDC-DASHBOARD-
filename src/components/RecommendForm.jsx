import { useState } from 'react'

function RecommendForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    category: 'eats',
    description: '',
    email: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you'd send this to a backend
    console.log('Recommendation submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', location: '', category: 'eats', description: '', email: '' })
    setTimeout(() => {
      setSubmitted(false)
      setIsOpen(false)
    }, 2000)
  }

  return (
    <>
      <section className="recommend-cta">
        <div className="cta-content">
          <div className="cta-text">
            <span className="cta-tag">✨ Share</span>
            <h2>Know a hidden gem we missed?</h2>
            <p>Help us build the ultimate Girlhood NYC guide. Recommend your favorite spot.</p>
          </div>
          <button type="button" className="button button-primary" onClick={() => setIsOpen(true)}>
            💌 Recommend a Place
          </button>
        </div>
      </section>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setIsOpen(false)}>
              ✕
            </button>

            {submitted ? (
              <div className="modal-success">
                <div className="success-emoji">💗</div>
                <h3>Thanks for the rec!</h3>
                <p>We'll review and add it soon.</p>
              </div>
            ) : (
              <>
                <h2>Recommend a Place</h2>
                <form onSubmit={handleSubmit} className="recommend-form">
                  <div className="form-group">
                    <label htmlFor="name">Place Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="e.g., Cozy Corner Cafe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="location">Address</label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      placeholder="e.g., 123 Main St, Brooklyn, NY"
                      value={formData.location}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select name="category" id="category" value={formData.category} onChange={handleChange}>
                      <option value="eats">🥐 Eats & Cafes</option>
                      <option value="legacy">🏛️ Legacy Spots</option>
                      <option value="sisterly">👭 Sisterly Sites</option>
                      <option value="rec">🎨 Fun & Creative</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="description">Why do you love it?</label>
                    <textarea
                      id="description"
                      name="description"
                      placeholder="Tell us what makes this place special..."
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows="4"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email (optional)</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="button button-primary button-full">
                    Submit Recommendation
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default RecommendForm
