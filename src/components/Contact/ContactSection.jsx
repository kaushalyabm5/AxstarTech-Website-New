import React from "react";

const ContactSection = () => {
  return (
    <section id="contact-form" className="w-full bg-[#000000] py-20 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Main Layout Grid */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">

          {/* 1. Left Content: Brand & Reach (Fixed width on desktop, full on mobile) */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50">
                <span className="text-[var(--primary-color)] text-xs font-bold tracking-widest uppercase">
                  Contact Us
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-tight">
                Let’s create <br className="hidden md:block" />
                something epic.
              </h2>

              <p className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-base md:text-lg leading-relaxed max-w-md">
                Have a project idea, business inquiry, or collaboration opportunity? We’d love to hear from you. Whether you're looking for AI solutions, custom software development, web & mobile applications, or digital growth services the team at Axstar is ready to help.
              </p>

              <div className="pt-8 space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-[var(--primary-color)] transition-colors">
                    <span className="text-[var(--primary-color)]">@</span>
                  </div>
                  <span className="text-white font-medium">Info@axstartech.com</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-[var(--primary-color)] transition-colors">
                    <span className="text-[var(--primary-color)]">#</span>
                  </div>
                  <span className="text-white font-medium">+94 71 119 1251</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Right Content: The Form Card */}
          <div className="w-full lg:w-3/5">
            <div className="relative group">
              {/* Decorative Gradient Glow (Desktop Only) */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>

              <div className="relative bg-neutral-900 border border-neutral-800 p-6 sm:p-10 rounded-2xl shadow-2xl">
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  {/* First Name */}
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-full bg-[#050505] border border-neutral-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] transition-all placeholder:text-neutral-600"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-full bg-[#050505] border border-neutral-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] transition-all placeholder:text-neutral-600"
                    />
                  </div>

                  {/* Email */}
                  <div className="sm:col-span-2 space-y-2">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full bg-[#050505] border border-neutral-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] transition-all placeholder:text-neutral-600"
                    />
                  </div>

                  {/* Select Dropdown */}
                  <div className="sm:col-span-2 space-y-2 relative">
                    <select className="w-full bg-[#050505] border border-neutral-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] appearance-none cursor-pointer">
                      <option className="bg-black">What are you interested in?</option>
                      <option className="bg-black">Web Development</option>
                      <option className="bg-black">UI/UX Design</option>
                      <option className="bg-black">Branding</option>
                    </select>
                    {/* Custom Arrow */}
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                      ↓
                    </div>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2 space-y-2">
                    <textarea
                      placeholder="Message"
                      rows="4"
                      className="w-full bg-[#050505] border border-neutral-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] transition-all placeholder:text-neutral-600 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button & Disclaimer */}
                  <div className="sm:col-span-2 pt-2 flex flex-col md:flex-row items-center gap-6">
                    <button
                      type="submit"
                      className="w-full md:w-auto bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-black hover:bg-[var(--primary-color)] cursor-pointer font-bold px-10 py-4 rounded-xl transition-all duration-300 transform active:scale-95"
                    >
                      Send Message
                    </button>


                  </div>

                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;