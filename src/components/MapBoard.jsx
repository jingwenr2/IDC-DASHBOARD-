function MapBoard({ locations }) {
  return (
    <section className="mapboard-panel" id="map">
      <div className="section-header">
        <span className="section-marker">Cute map board</span>
        <h2>NYC scrapbook-style map for presentation purposes</h2>
      </div>
      <p className="mapboard-note">Map layout for presentation purposes.</p>
      <div className="mapboard-layout">
        <div className="map-visual">
          <div className="city-pin top-left">📍</div>
          <div className="city-pin bottom-right">📍</div>
          <div className="map-text">NYC</div>
        </div>
        <div className="map-notes">
          {locations.map((item) => (
            <div key={item.name} className="note-card">
              <div className="note-tag">{item.tag}</div>
              <p className="note-title">{item.name}</p>
              <p className="note-subtitle">{item.mapLabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MapBoard
