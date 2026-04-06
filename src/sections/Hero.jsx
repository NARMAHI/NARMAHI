import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  // Cinematic text reveal animation
  const text = "We Build Digital Products That Scale.".split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white px-6 overflow-hidden">
      {/* Background ambient glow */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-100 rounded-full blur-[100px] -z-10"
      />

      <div className="max-w-5xl mx-auto text-center z-10 mt-20">
        
        {/* Word-by-word reveal */}
        <div className="flex flex-wrap justify-center gap-x-4 mb-8">
          {text.map((el, i) => (
            <motion.span
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1, // This creates the stagger
                ease: [0.16, 1, 0.3, 1] // Apple's custom ease curve
              }}
              key={i}
              className="text-6xl md:text-[5.5rem] font-extrabold tracking-tighter text-slate-900 leading-[1.1]"
            >
              {el}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto font-medium tracking-tight mb-12"
        >
          Design, development, and long-term maintenance for serious businesses.
        </motion.p>

        {/* Magnetic Button feel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)] hover:shadow-xl w-full sm:w-auto justify-center"
          >
            Start a Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-slate-900 px-8 py-4 rounded-full text-lg font-semibold border border-slate-200 hover:border-slate-900 transition-colors w-full sm:w-auto"
          >
            View Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;