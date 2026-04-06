import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-extrabold tracking-tighter text-slate-900">
          NARMAHI.
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-slate-900 transition-colors">Services</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Work</a>
          <a href="#" className="hover:text-slate-900 transition-colors">About</a>
        </div>
        <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors">
          Let's Talk
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;