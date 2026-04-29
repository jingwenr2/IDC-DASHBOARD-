import { useState } from 'react'

function LocationPopup({ location, category }) {
  const [imageFailed, setImageFailed] = useState(false)
  const hasImage = location.image && !imageFailed

  return (
    <article className="popup-card">
      {hasImage ? (
        <img
          className="popup-image"
          src={location.image}
          alt={location.name}
          width="220"
          height="110"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div
          className="popup-placeholder"
          style={{ backgroundColor: `${category.color}26` }}
        />
      )}
      <div className="popup-copy">
        <p className="popup-category">{category.label}</p>
        <h3>{location.name}</h3>
        <p>{location.description}</p>
      </div>
    </article>
  )
}

export default LocationPopup
