import { motion } from "framer-motion";

const stats = [
  { num: "10+", label: "Projects Delivered" },
  { num: "Fast", label: "Delivery Standard" },
  { num: "24/7", label: "Long-Term Support" },
  { num: "100%", label: "Startup Focused" },
];

const Stats = () => {
  return (
    <section className="py-32 bg-slate-900 text-white px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-slate-800 pt-16">
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col gap-2"
          >
            <span className="text-5xl md:text-7xl font-bold tracking-tighter">
              {stat.num}
            </span>
            <span className="text-slate-400 font-medium text-lg tracking-tight">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;