import React from 'react'
import { Helmet } from 'react-helmet-async'
import ProjectsHero from './ProjectsHero'
import ProjectShowcase from './ProjectShowcase'
import ScrollToTopProjects from './ScrollToTopProjects'

const PrivatePortfolioPage = () => {
  return (
    <div>
      <Helmet>
        <title>Portfolio — Private View</title>
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta name="description" content="" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
      </Helmet>
      <ProjectsHero />
      <ProjectShowcase showAll={true} />
      <ScrollToTopProjects />
    </div>
  )
}

export default PrivatePortfolioPage
