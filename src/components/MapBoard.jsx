import MapView from './MapView.jsx'

function MapBoard({ locations }) {
  return (
    <section className="mapboard-panel" id="map">
      <div className="section-header">
        <span className="section-marker">Interactive map</span>
        <h2>Explore Girlhood NYC locations across the boroughs</h2>
      </div>
      <MapView locations={locations} />
    </section>
  )
}

export default MapBoard
