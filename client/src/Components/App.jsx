import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import Experience from './Experience.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Footer from './Footer.jsx';
import Contact from './Contact.jsx';

export default function App() {
  return (
    <div className='scroll-smooth'>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-10 px-6'>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )

}