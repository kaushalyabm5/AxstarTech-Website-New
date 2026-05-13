import React from 'react'
import { FaChartLine, FaPlug, FaTools } from 'react-icons/fa'

const Section4 = () => {
  return (
    <div className="w-full bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section: Centered */}
        <div className="mb-2 border-b border-zinc-800 pb-1 text-center">
          
         

          <div className="text-center mb-16">
          
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[1rem] font-medium tracking-[0.4em] uppercase mb-4 block">
            Explore the Power of AI with Axstar
          </span>
           
        <h2 className="text-3xl font-light md:text-5xl leading-tight text-[#e9e7e2] mb-1">How We Decode AI <br />
            for Your Business</h2>
          
        </div>
        </div>

        {/* Horizontal Process Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800">
          
          {/* Card 1 */}
          <div className="group py-12 lg:px-10 transition-all duration-500">
            <div className="flex flex-col items-center text-center h-full">
              <div className="flex justify-between items-center w-full mb-12">
                {/* Spacer to keep icon centered */}
                <span className="text-5xl font-bold text-transparent opacity-0 select-none">01</span>
                
                <div className="p-4 bg-zinc-900 rounded-xl group-hover:bg-[var(--primary-color)] transition-colors duration-500">
                  <FaTools className="text-white text-2xl" />
                </div>
                
                <span className="text-5xl font-bold text-zinc-900 group-hover:text-zinc-800 transition-colors">01</span>
              </div>
              
              <h3 className="text-white text-2xl font-semibold mb-6">
                Practical AI Implementation
              </h3>
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] leading-relaxed">
                We focus on solutions that solve real business problems reducing overhead, increasing speed, and eliminating errors.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group py-12 lg:px-10 transition-all duration-500">
            <div className="flex flex-col items-center text-center h-full">
              <div className="flex justify-between items-center w-full mb-12">
                <span className="text-5xl font-bold text-transparent opacity-0 select-none">02</span>
                
                <div className="p-4 bg-zinc-900 rounded-xl group-hover:bg-[var(--primary-color)] transition-colors duration-500">
                  <FaPlug className="text-white text-2xl" />
                </div>
                
                <span className="text-5xl font-bold text-zinc-900 group-hover:text-zinc-800 transition-colors">02</span>
              </div>
              
              <h3 className="text-white text-2xl font-semibold mb-6">
                Seamless Integration
              </h3>
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] leading-relaxed">
                Our AI solutions are designed to plug directly into your existing infrastructure without disrupting your current workflow.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group py-12 lg:px-10 transition-all duration-500">
            <div className="flex flex-col items-center text-center h-full">
              <div className="flex justify-between items-center w-full mb-12">
                <span className="text-5xl font-bold text-transparent opacity-0 select-none">03</span>
                
                <div className="p-4 bg-zinc-900 rounded-xl group-hover:bg-[var(--primary-color)] transition-colors duration-500">
                  <FaChartLine className="text-white text-2xl" />
                </div>
                
                <span className="text-5xl font-bold text-zinc-900 group-hover:text-zinc-800 transition-colors">03</span>
              </div>
              
              <h3 className="text-white text-2xl font-semibold mb-6">
                Scalable Intelligence
              </h3>
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] leading-relaxed">
                As your business grows, our Machine Learning and Automation models evolve with you, handling more complex tasks over time.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Section4