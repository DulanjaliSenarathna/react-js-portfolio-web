import './App.css'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Portfolio from './components/portfolio/Portfolio'
import Pricing from './components/pricing/Pricing'
import Resume from './components/resume/Resume'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'
import Testimonials from './components/testimonials/Testimonials'

function App() {

  return (
   <div className="main main">
    <Header/>
      <Home/>
      <Services/>
      <Skills/>
      <Portfolio/>
      <Resume/>
      <Testimonials/>
      <Pricing/>
      <Blog/>
      <Contact/>
      <Footer/>
      
   </div>
  )
}

export default App
