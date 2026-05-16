import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  service: "",
  message: "",
};

const ContactSection = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [submitStatus, setSubmitStatus] = useState({
    type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitStatus({ type: "", message: "" });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus({
        type: "error",
        message: "Email service is not configured yet. Please try again later.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          from_name: `${formData.firstName} ${formData.lastName}`.trim(),
          from_email: formData.email,
          service: formData.service,
          message: formData.message,
          reply_to: formData.email,
        },
        publicKey
      );

      setFormData(initialFormData);
      setSubmitStatus({
        type: "success",
        message: "Thanks, your message has been sent. We will get back to you soon.",
      });
    } catch (error) {
      console.error("EmailJS contact form error:", error);
      setSubmitStatus({
        type: "error",
        message: "Something went wrong while sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  {/* First Name */}
                  <div className="space-y-2">
                    <input
                      name="firstName"
                      type="text"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#050505] border border-neutral-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] transition-all placeholder:text-neutral-600"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="space-y-2">
                    <input
                      name="lastName"
                      type="text"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#050505] border border-neutral-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] transition-all placeholder:text-neutral-600"
                    />
                  </div>

                  {/* Email */}
                  <div className="sm:col-span-2 space-y-2">
                    <input
                      name="email"
                      type="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#050505] border border-neutral-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] transition-all placeholder:text-neutral-600"
                    />
                  </div>

                  {/* Select Dropdown */}
                  <div className="sm:col-span-2 space-y-2 relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#050505] border border-neutral-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-black">What are you interested in?</option>
                      <option value="Web Development" className="bg-black">Web Development</option>
                      <option value="UI/UX Design" className="bg-black">UI/UX Design</option>
                      <option value="Branding" className="bg-black">Branding</option>
                    </select>
                    {/* Custom Arrow */}
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                      ↓
                    </div>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2 space-y-2">
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#050505] border border-neutral-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] transition-all placeholder:text-neutral-600 resize-none"
                    ></textarea>
                  </div>

                  {submitStatus.message && (
                    <p
                      className={`sm:col-span-2 text-sm ${
                        submitStatus.type === "success" ? "text-emerald-400" : "text-red-400"
                      }`}
                      role="status"
                    >
                      {submitStatus.message}
                    </p>
                  )}

                  {/* Submit Button & Disclaimer */}
                  <div className="sm:col-span-2 pt-2 flex flex-col md:flex-row items-center gap-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-black hover:bg-[var(--primary-color)] cursor-pointer font-bold px-10 py-4 rounded-xl transition-all duration-300 transform active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
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
