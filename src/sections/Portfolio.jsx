import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  { title: "Zynapse AI", category: "Platform Dev", color: "bg-slate-900" },
  { title: "QuantumFlow", category: "Fintech App", color: "bg-slate-800" },
  { title: "GreenLedge", category: "Eco-Tech UI", color: "bg-slate-700" },
  { title: "AeroSpaceX", category: "Corporate Web", color: "bg-slate-900" },
];

const Portfolio = () => {
  const targetRef = useRef(null);
  
  // Track the scroll progress of this specific section
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Map vertical scroll (0 to 1) to horizontal movement (1% to -75%)
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-slate-50">
      {/* Sticky container that stays on screen while we scroll down */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Fixed Title Section on the left */}
        <div className="px-6 md:px-20 mb-20 md:mb-0 w-[100vw] md:w-[35vw] shrink-0">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl font-extrabold text-slate-900 tracking-tighter leading-[0.9]"
          >
            Selected <br /> Works.
          </motion.h2>
          <p className="mt-6 text-xl text-slate-500 font-medium">Scroll down to explore our digital masterpieces.</p>
        </div>

        {/* Horizontally moving project cards */}
        <motion.div style={{ x }} className="flex gap-8 px-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative h-[60vh] w-[80vw] md:w-[45vw] overflow-hidden rounded-[2rem] ${project.color} p-10 text-white flex flex-col justify-between hover:scale-[1.02] transition-transform duration-500 shadow-2xl border border-white/10`}
            >
              {/* Background Gradient for premium feel */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10" />

              <div className="relative z-20 flex justify-between items-start">
                <span className="px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold tracking-wide border border-white/20 uppercase">
                  {project.category}
                </span>
                
                {/* Arrow that pops up on hover */}
                <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 cursor-pointer shadow-xl">
                  <ArrowRight size={28} />
                </div>
              </div>

              <h3 className="relative z-20 text-5xl md:text-7xl font-bold tracking-tight mb-2">
                {project.title}
              </h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;