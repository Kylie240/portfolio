import './App.css'
import { Home } from './pages/home'
import { Sidebar } from '../components/sidebar'
import Projects from './pages/projects';
import Footer from '../components/footer';
import Contact from './pages/contact';

function App() {

  return (
    <>
      <Sidebar />
      <Home />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
