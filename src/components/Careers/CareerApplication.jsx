import React, { useState } from "react";

const CareerApplication = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    position: "",
    coverLetter: "",
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cv") {
      setFormData({ ...formData, cv: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div id="application" className="py-30 bg-[#000000] text-neutral-200 flex items-center justify-center p-6 selection:bg-emerald-500/30">
      <div className="w-full max-w-2xl bg-[#111111] border border-neutral-800 rounded-3xl p-8 md:p-12 shadow-2xl">
        
        {/* Header Section */}
        <header className="mb-10">
          <h2 className="text-3xl font-light tracking-tight text-white mb-2"> Join AXSTAR </h2>
          <p className="text-neutral-500 text-sm">Fill out the form below to start your journey with us.</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative">
              <label className="block text-xs uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] mb-2 group-focus-within:text-emerald-400 transition-colors">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                required
                placeholder="Jane"
                onChange={handleChange}
                className="w-full bg-transparent border-b border-neutral-800 py-2 focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-neutral-700"
              />
            </div>

            <div className="group relative">
              <label className="block text-xs uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] mb-2 group-focus-within:text-emerald-400 transition-colors">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                required
                placeholder="Doe"
                onChange={handleChange}
                className="w-full bg-transparent border-b border-neutral-800 py-2 focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-neutral-700"
              />
            </div>
          </div>

          {/* Position Selection */}
          <div className="group">
            <label className="block text-xs uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] mb-2 group-focus-within:text-emerald-400 transition-colors">
              Applying For
            </label>
            <select
              name="position"
              required
              onChange={handleChange}
              className="w-full bg-transparent border-b border-neutral-800 py-2 focus:outline-none focus:border-emerald-500 transition-colors appearance-none cursor-pointer"
            >
              <option value="" className="bg-[#111111]">Select a role</option>
              <option className="bg-[#111111]">Frontend Developer</option>
              <option className="bg-[#111111]">Backend Developer</option>
              <option className="bg-[#111111]">UI/UX Designer</option>
              <option className="bg-[#111111]">Full Stack Developer</option>
            </select>
          </div>

          {/* Cover Letter */}
          <div className="group">
            <div className="flex justify-between items-end mb-2">
              <label className="block text-xs uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] group-focus-within:text-emerald-400 transition-colors">
                Cover Letter
              </label>
              <span className="text-[10px] text-neutral-600 italic">{formData.coverLetter.length} / 200</span>
            </div>
            <textarea
              name="coverLetter"
              rows="3"
              maxLength="200"
              placeholder="Tell us what drives you..."
              onChange={handleChange}
              className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 focus:outline-none focus:border-emerald-500 transition-colors resize-none placeholder:text-neutral-700"
            />
          </div>

          {/* CV Upload - Minimalist Dropzone */}
          <div>
            <label className="block text-xs uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] mb-3"> Curriculum Vitae </label>
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-neutral-800 rounded-2xl cursor-pointer hover:bg-neutral-900/40 hover:border-neutral-700 transition-all group">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <p className="text-sm text-neutral-400 group-hover:text-emerald-400 transition-colors">
                  {formData.cv ? formData.cv.name : "Drop CV or Click to Browse"}
                </p>
                <p className="text-[10px] text-neutral-600 mt-1 uppercase tracking-tighter">PDF, DOCX (Max 50MB)</p>
              </div>
              <input type="file" name="cv" className="hidden" onChange={handleChange} />
            </label>
          </div>

          {/* Action Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-black font-semibold py-4 rounded-xl  hover:scale-[1.01] active:scale-[0.98] transition-all duration-200 shadow-xl cursor-pointer shadow-white/5"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default CareerApplication;