import React from 'react'
import OurSection from '../../component/OurSection'
import OurServices from '../../component/OurServices'
import HeroSection from '../../component/HeroSection'
import SilderSection from '../../component/SilderSection'


export default function Home() {
  return (
    <div>
      <HeroSection/>

    <OurSection/>
    <OurServices/>
    <SilderSection/>
    </div>
  )
}
