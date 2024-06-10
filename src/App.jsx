import './App.css'
import Home from './components/home/Home'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'

function App() {

  return (
   <div className="main main">
      <Home/>
      <Services/>
      <Skills/>
      <Portfolio/>
   </div>
  )
}

export default App
