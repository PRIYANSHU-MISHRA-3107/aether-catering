import React from 'react'
import MenuHero from './components/MenuHero'
import MenuCategories from './components/MenuCategories'
import SignatureDishes from './components/SignatureDishes'
import CompleteMenu from './components/CompleteMenuShowcase'
import MenuCTA from './components/MenuCTA'


const page = () => (
  <div>
    <MenuHero />
    <MenuCategories />
    <SignatureDishes />
    <CompleteMenu />
    <MenuCTA/>
  </div>
)

export default page