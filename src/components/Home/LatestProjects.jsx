import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowLeft, HiArrowRight, HiOutlineExternalLink } from 'react-icons/hi';
import { supabase } from '../../lib/supabase';

const LatestProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchLatestProjects = async () => {
      const { data } = await supabase
        .from('portfolio_items')
        .select('id, title, description, thumbnail_url')
        .eq('is_latest_project', true)
        .order('latest_project_order', { ascending: true });
      setProjects(data ?? []);
      setLoading(false);
    };
    fetchLatestProjects();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  // Loading skeleton — same section dimensions
  if (loading) {
    return (
      <section className="relative z-10 min-h-[70vh] py-12 px-6 bg-[#000000] text-white flex flex-col justify-center overflow-hidden">
        <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
          <div className="h-3 w-48 bg-neutral-900 rounded animate-pulse mb-4" />
          <div className="h-10 w-72 bg-neutral-900 rounded animate-pulse mb-16" />
          <div className="relative w-full aspect-video max-h-[320px] md:max-h-[380px] mb-8 rounded-xl bg-neutral-900 animate-pulse" />
          <div className="w-full flex items-center justify-between">
            <div className="h-9 w-32 bg-neutral-900 rounded-full animate-pulse" />
            <div className="flex gap-2">
              <div className="w-12 h-12 bg-neutral-900 rounded-full animate-pulse" />
              <div className="w-12 h-12 bg-neutral-900 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Hide section entirely if no projects are marked as latest
  if (projects.length === 0) return null;

  const current = projects[currentIndex];

  return (
    <section className="relative z-10 min-h-[70vh] py-12 px-6 bg-[#000000] text-white flex flex-col justify-center overflow-hidden">
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center">

        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[.8rem] font-medium tracking-[0.4em] uppercase mb-4 block">
          Showcasing our latest creations
        </span>
        <h2 className="text-3xl text-center font-light md:text-5xl leading-tight text-[#e9e7e2] mb-16">
          Our Latest Projects
        </h2>

        {/* 16:9 Card */}
        <div className="relative w-full aspect-video max-h-[320px] md:max-h-[380px] mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 w-full h-full rounded-xl overflow-hidden group shadow-xl border border-zinc-800/40"
            >
              {current.thumbnail_url ? (
                <img
                  src={current.thumbnail_url}
                  alt={`${current.title} project by Axstar`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-neutral-900" />
              )}

              {/* Text Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/80 to-transparent p-6 md:p-8">
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-1">
                    {current.title}
                  </h3>
                  <p className="text-zinc-400 max-w-lg text-xs md:text-sm line-clamp-2 leading-relaxed">
                    {current.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Navigation */}
        <div className="w-full flex items-center justify-between">

          <a href="/projects">
            <button className="flex cursor-pointer items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-800 text-sm text-zinc-400 hover:text-[#e9e7e2] hover:bg-zinc-800 transition-all duration-300 group">
              All Projects
              <HiOutlineExternalLink className="text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </a>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-baseline gap-1.5">
              <span className="text-xl font-medium text-[#e9e7e2]">0{currentIndex + 1}</span>
              <span className="text-zinc-600 text-[10px] font-mono tracking-tighter uppercase">
                / 0{projects.length}
              </span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="p-3 cursor-pointer rounded-full border border-zinc-800 bg-zinc-900 hover:bg-[#e9e7e2] hover:text-black transition-colors active:scale-95 duration-200"
                aria-label="Previous"
              >
                <HiArrowLeft size={18} />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 cursor-pointer rounded-full border border-zinc-800 bg-zinc-900 hover:bg-[#e9e7e2] hover:text-black transition-colors active:scale-95 duration-200"
                aria-label="Next"
              >
                <HiArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
