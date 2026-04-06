import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section className="py-40 px-6 overflow-hidden bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-24 tracking-tighter text-zinc-900"
        >
          How we turn ideas <br/><span className="text-zinc-400">into empires.</span>
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-8 relative before:absolute before:top-1/2 before:left-0 before:w-full before:h-[1px] before:bg-zinc-200 before:-z-10 hidden md:flex">
          {['Idea', 'Design', 'Development', 'Scaling', 'Maintenance'].map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="flex-1 bg-white p-8 border border-zinc-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <span className="text-xs font-bold text-zinc-400 mb-6 block tracking-widest">0{idx + 1}</span>
              <h3 className="text-xl font-semibold text-zinc-900">{step}</h3>
            </motion.div>
          ))}
        </div>
        
        <div className="flex flex-col gap-4 md:hidden">
          {['Idea', 'Design', 'Development', 'Scaling', 'Maintenance'].map((step, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm">
              <span className="text-xs font-bold text-zinc-400 mb-2 block tracking-widest">0{idx + 1}</span>
              <h3 className="text-xl font-semibold text-zinc-900">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}