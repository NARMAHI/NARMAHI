import { motion } from "framer-motion";

const Cta = () => {
  return (
    <section className="py-40 bg-white px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-5xl md:text-8xl font-extrabold tracking-tighter text-slate-900 leading-tight mb-12">
          Let’s Build Something <br className="hidden md:block"/> That Actually Grows.
        </h2>
        <button className="bg-slate-900 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-slate-800 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-slate-900/20">
          Book a Discovery Call
        </button>
      </motion.div>
    </section>
  );
};

export default Cta;