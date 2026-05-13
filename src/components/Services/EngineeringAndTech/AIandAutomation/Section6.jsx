import React from 'react'
import { FaCogs, FaComments, FaLightbulb } from 'react-icons/fa'

const Section6 = () => {
  return (
    <div className="w-full bg-[black]/0 text-white py-30 mt-7 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-5xl font-light leading-tight mb-6">
            Why Choose Our <br /> AI Solutions
          </h2>
 
          <div className="w-24 h-[1px] bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] mb-6"></div>

          <p className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-sm md:text-base max-w-md">
            We deliver intelligent, scalable AI solutions that transform how your business operates, makes decisions, and engages with customers. By combining advanced machine learning, automation, and natural language capabilities, we help you unlock efficiency, reduce costs, and create more human-centered digital experiences.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* CARD 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between text-center md:text-left bg-gradient-to-r from-[#111] to-[#1a1a1a] p-5 rounded-xl border border-gray-800 hover:border-gray-600 transition">

            {/* ICON */}
            <div className="text-2xl text-cyan-400 mb-3 md:mb-0 md:order-2">
              <FaLightbulb />
            </div>

            {/* TEXT */}
            <div className="md:order-1">
              <h4 className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] font-medium">
                Enhanced Decision Making
              </h4>
              <p className="text-sm text-neutral-400 mt-1">
                Tailored machine learning models designed to solve domain-specific challenges using structured and unstructured data.
              </p>
            </div>

          </div>

          {/* CARD 2 */}
          <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between text-center md:text-left bg-gradient-to-r from-[#111] to-[#1a1a1a] p-5 rounded-xl border border-gray-800 hover:border-gray-600 transition">

            {/* ICON */}
            <div className="text-2xl text-purple-400 mb-3 md:mb-0 md:order-2">
              <FaCogs />
            </div>

            {/* TEXT */}
            <div className="md:order-1">
              <h4 className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] font-medium">
                Streamlined Operations
              </h4>
              <p className="text-sm text-neutral-400 mt-1">
                Streamline operations with AI-powered automation from workflows to decision-making, reducing time and cost.
              </p>
            </div>

          </div>

          {/* CARD 3 */}
          <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between text-center md:text-left bg-gradient-to-r from-[#111] to-[#1a1a1a] p-5 rounded-xl border border-gray-800 hover:border-gray-600 transition">

            {/* ICON */}
            <div className="text-2xl text-green-400 mb-3 md:mb-0 md:order-2">
              <FaComments />
            </div>

            {/* TEXT */}
            <div className="md:order-1">
              <h4 className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] font-medium">
                Human-like Interactions
              </h4>
              <p className="text-sm text-neutral-400 mt-1">
                Deploy smart virtual assistants, chatbots, and interview agents that understand, engage, and respond like humans.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Section6