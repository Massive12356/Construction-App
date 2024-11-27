import React from 'react'
import Header from './Sections/Header'
import Hero from './Sections/Hero'
import Services from './Sections/Services'
import About from './Sections/About'
import Portfolio from './Sections/Portfolio'
import Working from './Sections/Working'
import Testimonials from './Sections/Testimonials'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'

const App = () => {
  return (
    <>
    <Header/>
    <Hero />
    <About />
    <Services />
    <Portfolio />
    <Working />
    <Testimonials />
    <Contact />
    <Footer />
    </>
  )
}

export default App