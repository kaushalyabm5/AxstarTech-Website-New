import React from 'react'
import { FiBarChart2, FiSearch, FiSettings } from 'react-icons/fi'

const Section2 = () => {
  return (
    <section id='section-1' className="w-full bg-[#000000] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER - Balanced and Standard Sizing */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16 border-b border-gray-800 pb-10">
          <div className="flex items-center gap-4">
            <div className="w-1 h-8 bg-[var(--primary-color)] rounded-full"></div>
            <h2 className="text-2xl font-light md:text-[2.8rem] leading-tight">
              Empower Growth with AI
            </h2>
           
          </div>
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] max-w-md text-sm md:text-base leading-relaxed">
            Unlock smarter decisions, automate processes, and accelerate innovation
            through intelligent AI-driven solutions.
          </p>
        </div>

        {/* BORDERED GRID - Non-Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          
          {/* ITEM 01 */}
          <div className="py-8 md:pr-8 md:border-r border-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-[var(--primary-color)] border border-teal-500/30 px-2 py-1 rounded">01</span>
              <FiSettings className="text-[var(--primary-color)] text-lg" />
            </div>
            <h3 className="text-base font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] uppercase tracking-wider">
              Automate – Make Work Easier
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Cut manual work and speed up workflows with intelligent automation
              that improves accuracy and scales effortlessly.
            </p>
          </div>

          {/* ITEM 02 */}
          <div className="py-8 md:px-8 md:border-r border-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-[var(--primary-color)] border border-teal-500/30 px-2 py-1 rounded">02</span>
              <FiSearch className="text-[var(--primary-color)] text-lg" />
            </div>
            <h3 className="text-base font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] uppercase tracking-wider">
              Analyze – Understand Your Data
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Turn data into insights. Our analytics uncover opportunities and
              strategies to boost revenue and efficiency.
            </p>
          </div>

          {/* ITEM 03 */}
          <div className="py-8 md:pl-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-[var(--primary-color)] border border-teal-500/30 px-2 py-1 rounded">03</span>
              <FiBarChart2 className="text-[var(--primary-color)] text-lg" />
            </div>
            <h3 className="text-base font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] uppercase tracking-wider">
              Transform – Elevate Results
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Maximize performance with AI-driven optimization that identifies
              inefficiencies and keeps your business agile.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Section2