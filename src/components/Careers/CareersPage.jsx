import React from 'react'
import { Helmet } from 'react-helmet-async'
import CareersHero from './CareersHero'
import CareerApplication from './CareerApplication'
import ScrollToTopCareers from './ScrollToTopCareers'

const CareersPage = () => {
  return (
    <div>
        <Helmet>
            <title>Careers at Axstar | Join Our AI Tech Team in Colombo, Sri Lanka</title>
            <meta name="description" content="Build the future of digital solutions with Axstar. We are hiring passionate tech enthusiasts worldwide. Explore open developer roles and grow with us today." />
            <meta property="og:image" content="https://axstartech.com/axstartechog.webp" />
            <meta property="og:title" content="Careers at Axstar | Join Our AI Tech Team in Colombo, Sri Lanka" />
            <meta property="og:description" content="Build the future of digital solutions with Axstar. We are hiring passionate tech enthusiasts worldwide. Explore open developer roles and grow with us today." />
        </Helmet>
        <CareersHero />
        <CareerApplication />
        <ScrollToTopCareers />
    </div>
  )
}

export default CareersPage