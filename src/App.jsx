import { useMemo, useState } from 'react'
import FilterChips from './components/FilterChips'
import MapView from './components/MapView'
import locations from './data/locations.json'
import './styles.css'

const categories = [
  { key: 'bites', label: 'Bites', color: '#D85A30' },
  { key: 'landmarks', label: 'Landmarks', color: '#5F5E5A' },
  { key: 'girls', label: 'For the girls', color: '#D4537E' },
  { key: 'hangs', label: 'Hangs', color: '#7F77DD' },
]

const categoryMap = categories.reduce((acc, category) => {
  acc[category.key] = category
  return acc
}, {})

function App() {
  const [activeCategory, setActiveCategory] = useState('all')
  const visibleLocations = useMemo(
    () =>
      activeCategory === 'all'
        ? locations
        : locations.filter((location) => location.category === activeCategory),
    [activeCategory],
  )

  return (
    <div className="app-shell">
      <header className="site-header">
        <div>
          <p className="eyebrow">Girlhood NYC</p>
          <h1 className="site-title">Girlhood NYC</h1>
          <p className="site-tagline">
            Cultural pockets across the city, mapped through young women&apos;s eyes.
          </p>
        </div>
      </header>

      <FilterChips
        categories={categories}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />

      <MapView locations={visibleLocations} categories={categoryMap} />
    </div>
  )
}

export default App
