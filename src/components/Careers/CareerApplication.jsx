import { useState } from "react";
import { supabase } from "../../lib/supabase";

const CareerApplication = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    position: "",
    coverLetter: "",
    cv: null,
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cv") {
      setFormData((prev) => ({ ...prev, cv: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const uploadCV = async (file) => {
    const ext = file.name.split(".").pop();
    const path = `${crypto.randomUUID()}.${ext}`;
    const { error } = await supabase.storage
      .from("career-cvs")
      .upload(path, file);
    if (error) throw error;
    const { data: { publicUrl } } = supabase.storage
      .from("career-cvs")
      .getPublicUrl(path);
    return publicUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      let cvUrl = null;
      if (formData.cv) {
        cvUrl = await uploadCV(formData.cv);
      }

      const { error } = await supabase.from("career_applications").insert({
        first_name: formData.firstName,
        last_name: formData.lastName,
        position: formData.position,
        cover_letter: formData.coverLetter || null,
        cv_url: cvUrl,
      });

      if (error) throw error;

      setStatus("success");
      setFormData({ firstName: "", lastName: "", position: "", coverLetter: "", cv: null });
    } catch (err) {
      setErrorMsg(err.message ?? "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        id="application"
        className="py-30 bg-[#000000] text-neutral-200 flex items-center justify-center p-6"
      >
        <div className="w-full max-w-2xl bg-[#111111] border border-neutral-800 rounded-3xl p-8 md:p-12 shadow-2xl text-center">
          <div className="w-14 h-14 rounded-full bg-[#5dc192]/15 border border-[#5dc192]/20 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-6 h-6 text-[#5dc192]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-light text-white mb-3">Application Received</h2>
          <p className="text-neutral-500 text-sm mb-8">
            Thank you for applying! We'll review your application and get back to you soon.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="text-xs text-neutral-600 hover:text-[#5dc192] transition-colors underline underline-offset-4 cursor-pointer"
          >
            Submit another application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      id="application"
      className="py-30 bg-[#000000] text-neutral-200 flex items-center justify-center p-6 selection:bg-emerald-500/30"
    >
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
                value={formData.firstName}
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
                value={formData.lastName}
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
              value={formData.position}
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
              <span className="text-[10px] text-neutral-600 italic">
                {formData.coverLetter.length} / 200
              </span>
            </div>
            <textarea
              name="coverLetter"
              rows="3"
              maxLength="200"
              value={formData.coverLetter}
              placeholder="Tell us what drives you..."
              onChange={handleChange}
              className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 focus:outline-none focus:border-emerald-500 transition-colors resize-none placeholder:text-neutral-700"
            />
          </div>

          {/* CV Upload */}
          <div>
            <label className="block text-xs uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] mb-3">
              Curriculum Vitae
            </label>
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-neutral-800 rounded-2xl cursor-pointer hover:bg-neutral-900/40 hover:border-neutral-700 transition-all group">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <p className="text-sm text-neutral-400 group-hover:text-emerald-400 transition-colors">
                  {formData.cv ? formData.cv.name : "Drop CV or Click to Browse"}
                </p>
                <p className="text-[10px] text-neutral-600 mt-1 uppercase tracking-tighter">
                  PDF, DOCX (Max 50MB)
                </p>
              </div>
              <input
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleChange}
              />
            </label>
          </div>

          {/* Error */}
          {status === "error" && (
            <p className="text-red-400 text-xs bg-red-500/10 border border-red-900/50 rounded-lg px-3 py-2">
              {errorMsg}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-black font-semibold py-4 rounded-xl hover:scale-[1.01] active:scale-[0.98] transition-all duration-200 shadow-xl cursor-pointer shadow-white/5 disabled:opacity-70 disabled:scale-100"
          >
            {status === "loading" ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CareerApplication;
