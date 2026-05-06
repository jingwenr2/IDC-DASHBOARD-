import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import CategoryCards from './components/CategoryCards.jsx'
import LocationGrid from './components/LocationGrid.jsx'
import MapBoard from './components/MapBoard.jsx'
import RecommendForm from './components/RecommendForm.jsx'
import TeamRoles from './components/TeamRoles.jsx'
import { categories, locations } from './data/locations.js'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Hero />
      <About />
      <CategoryCards categories={categories} />
      <LocationGrid locations={locations} categories={categories} />
      <RecommendForm />
      <MapBoard locations={locations} />
      <TeamRoles />
      <footer className="footer-bar">
        Made with love for THE4101, Girlhood NYC ♡
      </footer>
    </div>
  )
}

export default App
