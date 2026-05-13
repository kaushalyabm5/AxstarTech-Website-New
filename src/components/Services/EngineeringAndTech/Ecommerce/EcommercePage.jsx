import React from 'react'
import EcommerceHero from './EcommerceHero'
import EcomSection1 from './EcomSection1'
import EcomSection2 from './EcomSection2'
import EcomSection3 from './EcomSection3'
import EcomSection4 from './EcomSection4'
import EcomSection5 from './EcomSection5'
import ScrollToTopEcom from './ScrollToTopEcom'

const EcommercePage = () => {
  return (
    <div>
        <EcommerceHero />
        <EcomSection1 />
        <EcomSection2 />
        <EcomSection3 />
        <EcomSection4 />
        <EcomSection5 />
        <ScrollToTopEcom />
    </div>
  )
}

export default EcommercePage