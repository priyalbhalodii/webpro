import React from 'react'
import OurSection from '../../component/OurSection'
import HeroSection from '../../component/HeroSection'
import SilderSection from '../../component/SilderSection'
import OurServices from '../../component/OurServices'
import OurProgessSection from '../../component/OurProgessSection'
import OurWorkSection from '../../component/OurWorkSection'
import OurResultSection from '../../component/OurResultSection'
import CardSection from '../../component/CardSection'
import OurClients from '../../component/OurClients'


export default function Home() {
  return (
    <div>
      <HeroSection/>
    <div>
    <OurSection/>
    <SilderSection/>
    </div>
    <OurServices/>
    <OurProgessSection/>
    <OurResultSection/>
    <CardSection/>
    <OurClients/>
    </div>
  )
}
