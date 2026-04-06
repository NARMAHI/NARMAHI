import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-16 tracking-tight text-zinc-900">Trusted by founders who demand the best.</motion.h2>
          <motion.div variants={fadeUp} className="bg-zinc-50 p-12 md:p-16 rounded-[2.5rem] border border-zinc-100 text-left relative shadow-sm">
            <span className="text-8xl absolute top-4 left-6 text-zinc-200 font-serif leading-none">"</span>
            <p className="text-2xl md:text-3xl font-light text-zinc-700 leading-relaxed relative z-10 pl-6 md:pl-10">
              Narmahi didn't just build our website; they engineered a platform that scaled seamlessly. Their ongoing maintenance feels like having an elite in-house tech team.
            </p>
            <div className="mt-12 pl-6 md:pl-10 flex items-center gap-4">
              <div className="w-14 h-14 bg-zinc-200 rounded-full border-2 border-white shadow-sm"></div>
              <div>
                <h4 className="font-semibold text-zinc-900 text-lg">Sarah Jenkins</h4>
                <p className="text-sm text-zinc-500 uppercase tracking-wider font-medium mt-1">CEO, TechFlow USA</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}