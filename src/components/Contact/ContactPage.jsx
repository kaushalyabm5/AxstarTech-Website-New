import React from 'react'
import { Helmet } from 'react-helmet-async'
import ContactHero from './ContactHero'
import ContactSection from './ContactSection'
import ScrollToTopContact from './ScrollToTopContact'

const axstarSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Axstar",
  "alternateName": "Axstar Tech",
  "description": "AI-Powered Software, Web & Mobile App Development Company in Sri Lanka specializing in scalable SaaS and MVPs.",
  "url": "https://axstartech.com",
  "logo": "https://axstartech.com/axstar_logo.png",
  "image": "https://axstartech.com/axstar_logo.png",
  "telephone": "+94711191251",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Maya Mawatha, 3rd Lane, Kottawa",
    "addressLocality": "Pannipitiya",
    "addressRegion": "Colombo",
    "postalCode": "10230",
    "addressCountry": "LK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "6.839960891684893",
    "longitude": "79.98519896055288"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/axstartech",
    "https://web.facebook.com/profile.php?id=61587551161680",
    "https://www.instagram.com/axstartech/"
  ]
};

const ContactPage = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Axstar | AI Software & App Development in Colombo</title>
        <meta name="description" content="Ready to build your next digital product? Contact Axstar in Colombo for a free consultation on AI solutions, web apps, mobile development, and MVP services." />
        <meta property="og:image" content="https://axstartech.com/axstartechog.webp" />
        <meta property="og:title" content="Contact Axstar | AI Software & App Development in Colombo" />
        <meta property="og:description" content="Ready to build your next digital product? Contact Axstar in Colombo for a free consultation on AI solutions, web apps, mobile development, and MVP services." />
        <script type="application/ld+json">
          {JSON.stringify(axstarSchema)}
        </script>
      </Helmet>
      <ContactHero />
      <ContactSection />
      <ScrollToTopContact />
    </div>
  )
}

export default ContactPage