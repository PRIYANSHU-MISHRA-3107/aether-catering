import React from 'react'
import ContactHero from './components/ContactHero'
import ContactCards from './components/ContactCards'
import ContactForm from './components/ContactForm'
import GoogleMap from './components/GoogleMap'
import ContactFAQ from './components/ContactFAQ'

const page = () => {
  return (
    <div>
        <ContactHero/>
        <ContactCards/>
        <ContactForm/>
        <GoogleMap/>
        <ContactFAQ/>
    </div>
  )
}

export default page