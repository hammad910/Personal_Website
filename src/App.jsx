import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Skills from './Components/Skills/Skills'
// import WorkExperience from './Components/WorkExperience/Work_Experience'
import ContactMe from './Components/ContactMe/ContactMe'
import Footer from './Components/Footer/Footer'
import Projects from './Components/Projects/Projects'

function App() {

  useEffect(() => {
    window.gtag('config', 'G-343PGMKT4Y');
  }, []);
  
  return (
    <>
      <Navbar />
      <div className='container'>
        <Hero />
        <Skills />
        <Projects />
        {/* <WorkExperience /> */}
        <ContactMe />
      </div>
      <Footer />
    </>
  )
}

export default App
