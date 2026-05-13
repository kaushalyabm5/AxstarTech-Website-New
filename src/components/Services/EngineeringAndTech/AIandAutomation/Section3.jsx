import React from 'react'
import { FaCalendarAlt, FaChartLine, FaDatabase, FaHeadset, FaKeyboard, FaNetworkWired, FaRobot, FaShieldAlt, FaSync } from 'react-icons/fa'

const Section3 = () => {
  return (
    <section className="bg-black py-20 px-5 mt-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          

           

           <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[1rem] font-medium tracking-[0.4em] uppercase mb-4 block">
            Explore the Power of AI with Axstar
          </span>
        <h2 className="text-3xl font-light md:text-5xl leading-tight text-[#e9e7e2] mb-16">Explore Our AI Solutions </h2>
          
        </div>

        <div className="space-y-24">
          
          {/* CATEGORY 1: CHATBOTS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-neutral-800 pt-10">
            <div className="lg:col-span-4">
              <h1 className="text-3xl sm:text-4xl font-semibold leading-tight mb-4 text-white">
                AI Chatbots & Virtual Assistants
              </h1>

              
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] font-medium">
                24/7 Engagement & Lead Capture
              </p>
            </div>
            
            <div className="lg:col-span-8 space-y-10">
              <div className="flex gap-6">
                <div className="text-[var(--primary-color)] text-2xl mt-1"><FaHeadset /></div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-300 mb-2">Instant Customer Support</h3>
                  <p className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-sm leading-relaxed">We deploy custom-trained AI bots that answer customer inquiries instantly, 24/7, across your website and social media.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-[var(--primary-color)] text-2xl mt-1"><FaDatabase /></div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-300 mb-2">Automated Lead Collection</h3>
                  <p className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-sm leading-relaxed">Your chatbot doesn't just talk; it qualifies leads, collects contact information, and books meetings directly into your calendar.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-[var(--primary-color)] text-2xl mt-1"><FaNetworkWired /></div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-300 mb-2">Multi-Platform Integration</h3>
                  <p className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-sm leading-relaxed">Whether it’s WhatsApp, Instagram, or your website, your brand remains responsive everywhere.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CATEGORY 2: WORKFLOW */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-neutral-800 pt-10">
            <div className="lg:col-span-4">
              <h1 className="text-3xl sm:text-4xl font-semibold leading-tight mb-4 text-white">
                Intelligent Workflow Automation
              </h1>
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] font-medium">
                Connecting Your Business Ecosystem
              </p>
            </div>
            
            <div className="lg:col-span-8 space-y-10">
              <div className="flex gap-6">
                <div className="text-[var(--primary-color)] text-2xl mt-1"><FaSync /></div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-300 mb-2">Tool Synchronization</h3>
                  <p className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-sm leading-relaxed">We build the "digital bridges" that allow your apps to share data automatically (e.g., your Website → CRM → Email Marketing).</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-[var(--primary-color)]] text-2xl mt-1"><FaRobot /></div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-300 mb-2">Zero-Touch Processes</h3>
                  <p className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-sm leading-relaxed">Automate repetitive workflows like invoice generation, client onboarding emails, and data syncing between departments.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-[var(--primary-color)] text-2xl mt-1"><FaShieldAlt /></div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-300 mb-2">Error Elimination</h3>
                  <p className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-sm leading-relaxed">By removing manual data entry between platforms, we eliminate human error and ensure data integrity.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CATEGORY 3: CUSTOM BOTS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-neutral-800 pt-10">
            <div className="lg:col-span-4">
              <h1 className="text-3xl sm:text-4xl font-semibold leading-tight mb-4 text-white">
                Custom Task Bots
              </h1>
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] font-medium">
                Precision & Time Recovery
              </p>
            </div>
            
            <div className="lg:col-span-8 space-y-10">
              <div className="flex gap-6">
                <div className="text-[var(--primary-color)] text-2xl mt-1"><FaKeyboard /></div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-300 mb-2">Automated Data Entry</h3>
                  <p className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-sm leading-relaxed">Custom bots that extract information from documents or emails and input them into your databases instantly.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-[var(--primary-color)] text-2xl mt-1"><FaCalendarAlt /></div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-300 mb-2">Smart Scheduling</h3>
                  <p className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-sm leading-relaxed">AI-powered scheduling bots that manage complex team calendars, recurring appointments, and follow-up reminders.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-[var(--primary-color)] text-2xl mt-1"><FaChartLine /></div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-300 mb-2">Research & Reporting</h3>
                  <p className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-sm leading-relaxed">Specialized bots that gather market data or generate weekly performance reports, delivering them straight to your inbox.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FINAL DESCRIPTION */}
        <div className="mt-24 border-t border-neutral-800 pt-16 flex justify-center text-center">
          <p className="max-w-5xl text-base sm:text-lg md:text-[1.7rem] bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] leading-relaxed">
            As a professional AI development firm, we help your business work smarter and grow faster with practical, high-impact solutions. At Axstar, we make advanced technology simple, helping you achieve more with less effort.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Section3