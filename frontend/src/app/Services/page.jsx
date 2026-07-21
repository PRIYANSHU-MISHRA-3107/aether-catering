import React from 'react'
import ServicesHero from './components/ServicesHero'
import AboutCompany from './components/AboutCompany'
import ServicesGrid from './components/ServicesGrid'
import ProcessTimeline from './components/ProcessTimeline'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CallToAction'
import ContactPreview from './components/ContactPreview'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
        <ServicesHero/>
        <AboutCompany/>
        <ServicesGrid/>
        <ProcessTimeline/>
        <WhyChooseUs/>
        <Testimonials/>
        <CallToAction/>
        <ContactPreview/>
        <Footer/>
       

    </div>
  )
}

export default page