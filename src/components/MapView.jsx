import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import LocationPopup from './LocationPopup'

function createPinIcon(color) {
  return L.divIcon({
    className: 'custom-pin-icon',
    html: `<span style="background:${color};"></span>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -14],
  })
}

function MapView({ locations, categories }) {
  return (
    <div className="map-shell">
      <MapContainer
        center={[40.7128, -73.9858]}
        zoom={12}
        scrollWheelZoom={false}
        zoomControl={true}
        className="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((location) => {
          const category = categories[location.category]
          return (
            <Marker
              key={location.id}
              position={[location.lat, location.lng]}
              icon={createPinIcon(category.color)}
            >
              <Popup>
                <LocationPopup location={location} category={category} />
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </div>
  )
}

export default MapView
