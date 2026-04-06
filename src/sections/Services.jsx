import { motion } from "framer-motion";
import { Code, Smartphone, Palette, Settings } from "lucide-react";

const services = [
  { title: "Website Development", icon: Code, desc: "High-performance, SEO-optimized web applications built for scale." },
  { title: "App Development", icon: Smartphone, desc: "Native and cross-platform mobile experiences that users love." },
  { title: "UI/UX Design", icon: Palette, desc: "Intuitive, premium, and conversion-focused digital designs." },
  { title: "Maintenance & Support", icon: Settings, desc: "Long-term technical partnerships to keep your product flawless." },
];

const Services = () => {
  return (
    <section className="py-32 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-16"
        >
          Expertise.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white p-10 rounded-3xl border border-slate-100 hover:border-slate-900 hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
            >
              <div className="relative z-10 flex flex-col h-full justify-between">
                <service.icon className="w-12 h-12 text-slate-900 mb-8" strokeWidth={1.5} />
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  {/* Hidden description that fades in on hover */}
                  <p className="text-slate-500 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 ease-in-out transform translate-y-4 group-hover:translate-y-0">
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;