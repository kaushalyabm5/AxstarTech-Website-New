import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

// Assets
import img1 from '../../assets/testimonials/daniel2.png';
import img2 from '../../assets/testimonials/hendry2.png';
import img3 from '../../assets/testimonials/marco1.jpeg';
import img4 from '../../assets/testimonials/michael2.png';
import img5 from '../../assets/testimonials/nalin.jpeg';
import img6 from '../../assets/testimonials/sarah1.jpeg';
import img7 from '../../assets/testimonials/thenuka.jpeg';
import img8 from '../../assets/testimonials/andrew.jpeg';
import img9 from '../../assets/testimonials/kevin.png';
import Testimonials2 from "./Testimonials2";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Kevin Marshall",
    role: "Founder (SaaS Startup)",
    image: img9,
    rating: 4.8,
    description: "Great experience working with Axstar. They understood our vision and built an MVP that perfectly matched our initial product goals.",
  },
  {
    name: "Nalin Prasanga",
    role: "Business Owner- Green Wild Safari Resort",
    image: img5,
    rating: 4,
    description: "The team Axstar delivered a fast, modern website that significantly improved our online presence. Their attention to detail, responsive communication.",
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Manager – Day dream LLC",
    image: img6,
    rating: 5,
    description: "After working with Axstar, our website started ranking better on search engines, and we received more consistent inquiries from potential customers.",
  },
  {
    name: "Marco Rossi",
    role: "Casa di lapasa Pizza",
    image: img3,
    rating: 4.5,
    description: "Axstar created a modern website and digital menu that perfectly matches our restaurant’s style. Our customers love how easy it is to use.",
  },
  {
    name: "Hendry Earns",
    role: "Founder, StartupX",
    image: img2,
    rating: 5,
    description: "Great experience working with the team. The UI/UX design was modern, smooth, and exactly what we needed for our startup.",
  },
];

const Testimonials = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const tweenRef = useRef(null);

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useGSAP(() => {
    const scrollWidth = scrollRef.current.scrollWidth;
    const halfWidth = scrollWidth / 2;

    tweenRef.current = gsap.to(scrollRef.current, {
      x: `-=${halfWidth}`, 
      duration: 50, 
      ease: "none",
      repeat: -1,
      force3D: true,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % halfWidth)
      }
    });

    gsap.from(".testimonial-header", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
    });
  }, { scope: containerRef });

  const handleMouseEnter = () => {
    gsap.to(tweenRef.current, { timeScale: 0.1, duration: 0.8, ease: "power2.out" });
  };
  
  const handleMouseLeave = () => {
    gsap.to(tweenRef.current, { timeScale: 1, duration: 0.8, ease: "power2.inOut" });
  };

  return (
    <section 
      ref={containerRef} 
      className="relative bg-[#000000] py-30 overflow-hidden border-t border-white/5"
    >
      <div className="relative z-10">
        <div className="testimonial-header text-center mb-20 px-6">
          

          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[.8rem] font-medium tracking-[0.4em] uppercase mb-4 block">
           Where client success meets trust
          </span>
          <h3 className="text-4xl md:text-5xl font-light text-[#e9e7e2] tracking-tight">
             What Our Clients Say
          </h3>
        </div>

        <div 
          className="relative w-full overflow-hidden py-4"
          
        >
          <div 
            ref={scrollRef} 
            className="flex gap-4 px-4 will-change-transform"
            style={{ display: 'inline-flex' }} 
          >
            {duplicatedTestimonials.map((item, index) => (
              <div
                key={index}
                className="
                  w-[310px] md:w-[360px] 
                  shrink-0 
                  bg-[#080808]
                  border border-white/10 
                  p-6 
                  rounded-[1rem]
                  flex flex-col justify-between
                  hover:bg-[#0c0c0c]
                  hover:border-[#02b96d]/30
                  transition-all duration-500
                  group
                "
              >
                <div>
                  {/* Compact Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover border rounded-full border-white/10 grayscale-0 group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-zinc-100 text-[.9rem] font-bold tracking-wide uppercase truncate">
                        {item.name}
                      </h4>
                      <p className="text-[9px] bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] uppercase tracking-widest truncate">
                        {item.role.split(',')[0]}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial text - Compact line-clamp */}
                  <p className="text-zinc-400 text-[.9rem] leading-relaxed line-clamp-3 mb-6 font-light italic">
                    "{item.description}"
                  </p>
                </div>

                {/* Footer Data Strip */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="flex text-[#02b96d] text-[.8rem] space-x-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star}>
                          {item.rating >= star ? <FaStar /> : item.rating >= star - 0.5 ? <FaStarHalfAlt /> : <FaRegStar />}
                        </span>
                      ))}
                    </div>
                    <span className="text-[.8rem] font-mono text-zinc-200">{item.rating}</span>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#02b96d]/40 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
     

      <Testimonials2 />
    </section>
  );
};

export default Testimonials;