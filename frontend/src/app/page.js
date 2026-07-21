import CuisineShowcase from '@/Components/CuisineShowcase'
import Experiences from '@/Components/Experiences'
import CateringPackages from '@/Components/experiences/CateringPackage'
import CuisineSection from '@/Components/experiences/CuisineSection'
import FeaturedEvents from '@/Components/experiences/FeaturedEvents'
import FinalCTA from '@/Components/experiences/FinalCTA'
import OurStory from '@/Components/experiences/OurStory'
import ProcessSection from '@/Components/experiences/ProcessSection'
import SignatureGallery from '@/Components/experiences/SignatureGallery'
import Footer from '@/Components/Footer'
import Hero from '@/Components/Hero'
import TestimonialsSection from '@/Components/TestimonialsSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <Experiences/>
      <CuisineShowcase/>
      <SignatureGallery/>
      <ProcessSection/>
      <FeaturedEvents/>
      <CuisineSection/>
      <TestimonialsSection/>
      <OurStory/>
      <CateringPackages/>
      <FinalCTA/>
      <Footer/>
    </div>
  )
}

export default page