import React from 'react'
import { Helmet } from 'react-helmet-async'
import ProjectsHero from './ProjectsHero'
import ProjectShowcase from './ProjectShowcase'
import ScrollToTopProjects from './ScrollToTopProjects'

const ProjectsPage = () => {
  return (
    <div>
        <Helmet>
            <title>Portfolio Axstar | Featured AI Web & Mobile App Projects</title>
            <meta name="description" content="Explore Axstar’s portfolio of high-performance web applications, mobile apps, SaaS platforms, and AI-powered MVPs built for startups and businesses worldwide." />
            <meta property="og:image" content="https://axstartech.com/axstartechog.png" />
            <meta property="og:title" content="Portfolio Axstar | Featured AI Web & Mobile App Projects" />
            <meta property="og:description" content="Explore Axstar’s portfolio of high-performance web applications, mobile apps, SaaS platforms, and AI-powered MVPs built for startups and businesses worldwide." />
        </Helmet>
        <ProjectsHero />
        <ProjectShowcase />
        <ScrollToTopProjects />
    </div>
  )
}

export default ProjectsPage