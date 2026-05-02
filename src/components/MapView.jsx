import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

function MapView({ locations }) {
  const mapCenter = [40.7128, -73.9858]

  const createPinIcon = (color) => {
    return L.divIcon({
      className: 'custom-location-pin',
      html: `<div style="background: ${color}; width: 32px; height: 32px; border-radius: 50%; border: 3px solid white; box-shadow: 0 8px 16px rgba(0,0,0,0.2);"></div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -20],
    })
  }

  const categoryColors = {
    eats: '#e86180',
    legacy: '#c19bd3',
    sisterly: '#f5c8dc',
    rec: '#f1d4b8',
  }

  return (
    <div className="map-wrapper">
      <MapContainer
        center={mapCenter}
        zoom={12}
        scrollWheelZoom={false}
        className="interactive-map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location) => (
          <Marker
            key={location.name}
            position={[location.lat, location.lng]}
            icon={createPinIcon(categoryColors[location.category] || '#e86180')}
          >
            <Popup className="location-popup">
              <div className="popup-content">
                <h4>{location.name}</h4>
                <p className="popup-category">{location.categoryLabel}</p>
                <p className="popup-address">{location.location}</p>
                <p className="popup-description">{location.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default MapView
