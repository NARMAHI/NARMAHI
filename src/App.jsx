import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight, ArrowRight, ArrowLeft, ChevronRight, ChevronDown,
  Code, Smartphone, BrainCircuit, Globe, MonitorSmartphone, Cpu, Terminal, Layers, Activity, Zap,
  X, PhoneCall, Mail, Send, User, Briefcase, MessageSquare, MessageCircle, Phone,
  Check, ShieldCheck, Shield, Target, Eye, Calendar, DollarSign, Search, Map, MapPin, PenTool, Rocket, TrendingUp, Quote, Sparkles, Play
} from "lucide-react";
import divinePanditImg from "./assets/images/divine-pandit-2.png";
import careerPathAiImg from "./assets/images/careerpath-ai.png";
import localRankImg from "./assets/images/local-rank.png";
import ecommerceImg from "./assets/images/ecommerce.png";

/* =========================================
   0. PREMIUM ANIMATION & COLORS
   ========================================= */
const ease = [0.22, 1, 0.36, 1];

/* =========================================
   1. SPLASH SCREEN
   ========================================= */
const Preloader = () => {
  return (
    <motion.div
      key="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: ease }}
      className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-[#030508] text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00D09E_0%,transparent_40%)] opacity-10 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center justify-center relative z-10 px-4"
      >
        <div className="relative inline-flex flex-col items-center">
          <div className="flex items-start">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-[1000] tracking-tighter uppercase leading-none m-0 p-0 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
              NARMAHI
            </h1>
            <sup className="text-sm sm:text-lg md:text-2xl font-bold ml-1 md:ml-2 leading-none absolute -right-4 sm:-right-6 md:-right-10 top-0 text-[#00D09E]">
              ™
            </sup>
          </div>

          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
            className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#00D09E] to-transparent mt-4 mb-3 origin-center"
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
            className="text-[8px] sm:text-[9px] md:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 w-full text-zinc-400"
          >
            <span className="hover:text-white transition-colors">BUILD</span>
            <span className="text-[5px] sm:text-[6px] md:text-[8px] text-[#00D09E]">&bull;</span>
            <span className="hover:text-white transition-colors">LAUNCH</span>
            <span className="text-[5px] sm:text-[6px] md:text-[8px] text-[#00D09E]">&bull;</span>
            <span className="hover:text-white transition-colors">GROW</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* =========================================
   INQUIRY MODAL (POPUP FORM WITH WEB3FORMS)
   ========================================= */
const InquiryModal = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        e.target.reset();
        setTimeout(() => {
          setStatus("idle");
          onClose();
        }, 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (!isOpen) return null;
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100000] flex items-center justify-center p-0 sm:p-6 md:p-12">
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
          className="absolute inset-0 bg-[#030508]/90 backdrop-blur-xl cursor-pointer"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full h-full sm:h-auto max-w-5xl bg-white sm:rounded-3xl md:rounded-[2.5rem] shadow-[0_0_80px_rgba(0,208,158,0.15)] z-10 overflow-hidden flex flex-col md:flex-row max-h-screen sm:max-h-[95vh] md:max-h-[90vh] border-0 sm:border border-white/10"
        >
          <button onClick={onClose} className="absolute top-4 right-4 md:top-6 md:right-6 p-2 md:p-2.5 bg-white/80 sm:bg-white/80 backdrop-blur-md rounded-full hover:bg-zinc-100 transition-colors z-50 shadow-sm border border-zinc-200 group">
            <X className="w-4 h-4 md:w-5 md:h-5 text-[#13262F] group-hover:scale-110 transition-transform" />
          </button>

          <div className="hidden md:flex md:w-2/5 bg-[#0A0F12] p-12 flex-col justify-between relative overflow-hidden text-white">
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#00D09E]/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <h3 className="text-4xl lg:text-5xl font-[1000] tracking-tighter mb-6 leading-[1.1]">Let's Build Your <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D09E] to-emerald-400">Empire.</span></h3>
              <p className="text-zinc-400 font-medium leading-relaxed mb-12 text-sm lg:text-base">
                Stop settling for basic templates. Tell us what you need, and we'll engineer the perfect digital solution.
              </p>
              <div className="space-y-8">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00D09E] mb-4">What happens next?</h4>
                {[
                  { num: 1, title: "Review & Audit", desc: "Our experts analyze your project details." },
                  { num: 2, title: "Discovery Call", desc: "We schedule a quick call to align on goals." },
                  { num: 3, title: "Custom Blueprint", desc: "You receive a transparent plan and pricing." }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-5 group">
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-lg transition-colors ${idx === 0 ? 'bg-[#00D09E] text-[#13262F]' : 'bg-white/5 text-white border border-white/10 group-hover:border-[#00D09E]/50'}`}>{step.num}</div>
                      {idx !== 2 && <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent my-2" />}
                    </div>
                    <div className="pt-1">
                      <h5 className="font-bold text-sm text-white group-hover:text-[#00D09E] transition-colors">{step.title}</h5>
                      <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full h-full md:w-3/5 p-6 sm:p-8 md:p-12 overflow-y-auto bg-[#FAFAFA]">
            <div className="md:hidden mb-6 mt-2">
              <h3 className="text-3xl sm:text-4xl font-[1000] text-[#13262F] mb-2 tracking-tight">Start Project.</h3>
              <p className="text-zinc-500 font-medium text-sm">Fill out the details below, and our team will reach out shortly.</p>
            </div>

            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20">
                <div className="w-20 h-20 bg-[#00D09E]/20 rounded-full flex items-center justify-center">
                  <Check className="w-10 h-10 text-[#00D09E]" />
                </div>
                <h3 className="text-2xl font-black text-[#13262F]">Protocol Received!</h3>
                <p className="text-zinc-500 font-medium">Our engineers will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">

                {/* 👇 CHANGE THIS TO YOUR REAL WEB3FORMS KEY 👇 */}
                <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-1.5 sm:mb-2 ml-1">Full Name</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-[#00D09E] transition-colors" />
                      <input type="text" name="Name" required placeholder="John Doe" className="w-full bg-white border border-zinc-200 rounded-xl pl-11 sm:pl-12 pr-4 py-3 sm:py-3.5 text-[#13262F] text-sm font-medium focus:outline-none focus:border-[#00D09E] focus:ring-4 focus:ring-[#00D09E]/10 transition-all shadow-sm" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-1.5 sm:mb-2 ml-1">Email Address</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-[#00D09E] transition-colors" />
                      <input type="email" name="Email" required placeholder="john@company.com" className="w-full bg-white border border-zinc-200 rounded-xl pl-11 sm:pl-12 pr-4 py-3 sm:py-3.5 text-[#13262F] text-sm font-medium focus:outline-none focus:border-[#00D09E] focus:ring-4 focus:ring-[#00D09E]/10 transition-all shadow-sm" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-1.5 sm:mb-2 ml-1">Phone Number</label>
                    <div className="relative group">
                      <PhoneCall className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-[#00D09E] transition-colors" />
                      <input type="tel" name="Phone" required placeholder="+91 90000 00000" className="w-full bg-white border border-zinc-200 rounded-xl pl-11 sm:pl-12 pr-4 py-3 sm:py-3.5 text-[#13262F] text-sm font-medium focus:outline-none focus:border-[#00D09E] focus:ring-4 focus:ring-[#00D09E]/10 transition-all shadow-sm" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-1.5 sm:mb-2 ml-1">Business Type</label>
                    <div className="relative group">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-[#00D09E] transition-colors" />
                      <input type="text" name="Business Type" placeholder="e.g. Real Estate" className="w-full bg-white border border-zinc-200 rounded-xl pl-11 sm:pl-12 pr-4 py-3 sm:py-3.5 text-[#13262F] text-sm font-medium focus:outline-none focus:border-[#00D09E] focus:ring-4 focus:ring-[#00D09E]/10 transition-all shadow-sm" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-1.5 sm:mb-2 ml-1">Budget Range</label>
                    <div className="relative group">
                      <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-[#00D09E] transition-colors" />
                      <select name="Budget" className="w-full bg-white border border-zinc-200 rounded-xl pl-11 sm:pl-12 pr-4 py-3 sm:py-3.5 text-[#13262F] text-sm font-medium focus:outline-none focus:border-[#00D09E] focus:ring-4 focus:ring-[#00D09E]/10 transition-all shadow-sm appearance-none cursor-pointer">
                        <option>Select Budget...</option>
                        <option>₹10,000 - ₹25,000</option>
                        <option>₹25,000 - ₹50,000</option>
                        <option>₹50,000 - ₹1,00,000+</option>
                        <option>Not Sure Yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-1.5 sm:mb-2 ml-1">Project Timeline</label>
                    <div className="relative group">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-[#00D09E] transition-colors" />
                      <select name="Timeline" className="w-full bg-white border border-zinc-200 rounded-xl pl-11 sm:pl-12 pr-4 py-3 sm:py-3.5 text-[#13262F] text-sm font-medium focus:outline-none focus:border-[#00D09E] focus:ring-4 focus:ring-[#00D09E]/10 transition-all shadow-sm appearance-none cursor-pointer">
                        <option>Select Timeline...</option>
                        <option>As soon as possible</option>
                        <option>Within 1 Month</option>
                        <option>1-3 Months</option>
                        <option>Flexible</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-1 sm:pt-2">
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-1.5 sm:mb-2 ml-1">Project Details</label>
                  <div className="relative group">
                    <MessageSquare className="absolute left-4 top-3.5 sm:top-4 w-4 h-4 text-zinc-400 group-focus-within:text-[#00D09E] transition-colors" />
                    <textarea name="Message" required rows="3" placeholder="I need a custom website/app..." className="w-full bg-white border border-zinc-200 rounded-xl pl-11 sm:pl-12 pr-4 py-3 sm:py-3.5 text-[#13262F] text-sm font-medium focus:outline-none focus:border-[#00D09E] focus:ring-4 focus:ring-[#00D09E]/10 transition-all shadow-sm resize-none"></textarea>
                  </div>
                </div>

                {status === "error" && <p className="text-red-500 text-xs font-bold text-center">Something went wrong. Please try again.</p>}

                <button type="submit" disabled={status === "submitting"} className="w-full bg-[#13262F] text-white px-6 sm:px-8 py-4 rounded-xl font-bold text-xs sm:text-sm hover:bg-[#00D09E] hover:text-[#13262F] transition-all flex items-center justify-center gap-2 uppercase tracking-[0.2em] shadow-lg hover:shadow-[0_15px_30px_rgba(0,208,158,0.3)] mt-2 sm:mt-4 group pb-safe disabled:opacity-50">
                  {status === "submitting" ? "Transmitting..." : "Submit Protocol"}
                  {status !== "submitting" && <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </button>

                <p className="text-center text-[9px] md:text-[10px] text-zinc-400 font-bold uppercase tracking-[0.2em] mt-4 sm:mt-6 flex items-center justify-center gap-1.5 sm:gap-2 pb-6 sm:pb-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00D09E]" /> Your information is 100% secure.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

/* =========================================
   2. NAVBAR
   ========================================= */
const Navbar = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-[#030508]/90 backdrop-blur-xl border-b border-white/5 py-3 sm:py-4 shadow-2xl" : "bg-transparent py-5 sm:py-8"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="text-xl sm:text-2xl font-[1000] tracking-tighter text-white">NARMAHI<span className="text-[#00D09E]">.</span></div>
        <div className="hidden md:flex gap-10 text-[11px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
          {['About', 'Services', 'Process', 'Work'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors relative group">
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#00D09E] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        <button onClick={onOpenModal} className="bg-white text-[#030508] px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-[9px] sm:text-[10px] font-black hover:bg-[#00D09E] transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,208,158,0.4)] hover:scale-105 active:scale-95 uppercase tracking-[0.2em] cursor-pointer">
          Get Started
        </button>
      </div>
    </nav>
  );
};

/* =========================================
   3. HERO SECTION (INTERACTIVE 3D PARALLAX + LIVE TERMINAL)
   ========================================= */
const Hero = ({ onOpenModal }) => {
  const [showContact, setShowContact] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    setMousePos({ x: x * 10, y: y * -10 });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] md:min-h-screen pt-28 sm:pt-32 pb-16 md:pb-24 bg-[#000000] overflow-hidden selection:bg-[#00D09E] selection:text-[#000000] flex flex-col justify-between"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
        <motion.div animate={{ rotate: 360, scale: [1, 1.1, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-[120vw] h-[120vw] md:w-[80vw] md:h-[80vw] max-w-[1200px] max-h-[1200px] opacity-20 md:opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00D09E] to-transparent rounded-full blur-[80px] md:blur-[120px] mix-blend-screen transform -translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-indigo-600 to-transparent rounded-full blur-[80px] md:blur-[120px] mix-blend-screen transform translate-x-1/4 translate-y-1/4"></div>
        </motion.div>
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full flex flex-col items-center pt-4 sm:pt-10 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-5xl mx-auto mb-6 sm:mb-8"
        >
          <h1 className="text-[2.75rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[7.5rem] font-[1000] text-white tracking-tighter md:leading-[0.85]">
            Engineer the <br className="hidden sm:block" />
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00D09E] via-teal-300 to-indigo-400 animate-gradient-x mt-1 sm:mt-0">
              impossible.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}
          className="text-sm sm:text-lg md:text-xl text-zinc-400 font-medium text-center max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2"
        >
          We build high-performance digital infrastructure for global leaders.
          <span className="text-white font-bold block sm:inline mt-1 sm:mt-0"> Zero templates. 100% bespoke code.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0"
        >
          <button onClick={onOpenModal} className="relative group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-4 bg-white text-black rounded-full font-black uppercase tracking-widest text-[10px] sm:text-[11px] overflow-hidden transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(0,208,158,0.4)] hover:scale-105 active:scale-95 flex items-center justify-center gap-2 sm:gap-3">
            <div className="absolute inset-0 bg-[#00D09E] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
            <span className="relative z-10 group-hover:text-black transition-colors duration-300 flex items-center gap-2">
              Deploy Project <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button onClick={() => setShowContact(true)} className="group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-4 bg-transparent border border-white/20 text-white hover:bg-white/10 rounded-full font-bold uppercase tracking-widest text-[10px] sm:text-[11px] transition-all flex items-center justify-center gap-2 sm:gap-3 backdrop-blur-md">
            <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00D09E]" /> Access Terminal
          </button>
        </motion.div>
      </div>

      <div className="relative w-full max-w-[1000px] mx-auto mt-12 sm:mt-16 md:mt-24 px-4 md:px-0 z-10 flex-1 flex items-center justify-center perspective-[2000px]">
        <motion.div
          initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, delay: 0.6, type: "spring", bounce: 0.1 }}
          style={{ transform: `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`, transformStyle: "preserve-3d" }}
          className="w-full relative transition-transform duration-200 ease-out will-change-transform"
        >
          <div className="bg-[#050505]/90 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-[2rem] shadow-[0_10px_50px_rgba(0,208,158,0.1)] md:shadow-[0_20px_100px_rgba(0,208,158,0.15)] overflow-hidden w-full aspect-auto sm:aspect-[16/9] max-h-[500px] relative z-10">
            <div className="h-10 md:h-12 border-b border-white/10 bg-white/[0.03] flex items-center justify-between px-4 md:px-6">
              <div className="flex gap-1.5 md:gap-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-zinc-700 hover:bg-red-500 transition-colors cursor-pointer" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-zinc-700 hover:bg-yellow-500 transition-colors cursor-pointer" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-zinc-700 hover:bg-green-500 transition-colors cursor-pointer" />
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1 md:py-1.5 rounded-md bg-black/60 border border-white/5 text-[9px] md:text-[10px] font-mono text-zinc-400">
                <Code className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#00D09E]" /> root@narmahi-core:~
              </div>
              <div className="w-8 md:w-10"></div>
            </div>

            <div className="p-4 sm:p-6 md:p-8 grid grid-cols-1 gap-4 md:gap-6 h-full font-mono text-[10px] sm:text-xs md:text-sm overflow-x-auto">
              <div className="flex flex-col gap-1.5 sm:gap-2 whitespace-nowrap sm:whitespace-normal min-w-max sm:min-w-0">
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="text-zinc-500">
                                    // Initializing Narmahi Enterprise Engine...
                </motion.p>
                <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2 }}>
                  <span className="text-purple-400">import</span> {`{ Core, Security, Scale }`} <span className="text-purple-400">from</span> <span className="text-emerald-400">'@narmahi/system'</span>;
                </motion.p>
                <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2.5 }} className="mt-1 sm:mt-2">
                  <span className="text-blue-400">const</span> agency = <span className="text-blue-400">new</span> <span className="text-yellow-200">Core</span>();
                </motion.p>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className="mt-1 sm:mt-2">
                  <p>agency.<span className="text-yellow-200">deploy</span>({`{`}</p>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.2 }} className="pl-4 sm:pl-6">architecture: <span className="text-orange-300">'Microservices'</span>,</motion.p>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.4 }} className="pl-4 sm:pl-6">latency: <span className="text-orange-300">'&lt; 15ms global'</span>,</motion.p>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.6 }} className="pl-4 sm:pl-6">design: <span className="text-orange-300">'Awwwards_Level'</span></motion.p>
                  <p>{`});`}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.5 }}
                  className="mt-4 sm:mt-6 flex items-center gap-2 sm:gap-3 bg-[#00D09E]/10 border border-[#00D09E]/30 p-2 sm:p-3 rounded-lg w-fit"
                >
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-[#00D09E] animate-pulse" />
                  <span className="text-[#00D09E] font-bold tracking-widest uppercase text-[8px] sm:text-[10px]">System Online. Ready to scale.</span>
                </motion.div>
                <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} className="w-1.5 h-3 sm:w-2 sm:h-4 bg-white mt-1 sm:mt-2" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showContact && (
          <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 sm:p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowContact(false)} className="absolute inset-0 bg-black/90 backdrop-blur-xl cursor-pointer" />
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="relative w-full max-w-lg bg-[#050505] rounded-2xl md:rounded-[2rem] shadow-[0_0_100px_rgba(0,208,158,0.15)] overflow-hidden border border-white/10 flex flex-col font-mono">
              <div className="relative pt-8 pb-5 px-6 md:pt-10 md:pb-6 md:px-8 text-left border-b border-white/5 bg-[#0A0A0A]">
                <button onClick={() => setShowContact(false)} className="absolute top-4 right-4 md:top-6 md:right-6 z-20 text-zinc-500 hover:text-[#00D09E] transition-colors"><X className="w-5 h-5" /></button>
                <div className="flex items-center gap-2.5 md:gap-3 mb-1.5 md:mb-2">
                  <Terminal className="w-4 h-4 md:w-5 md:h-5 text-[#00D09E]" />
                  <h3 className="text-lg md:text-xl font-bold text-white tracking-tight uppercase">Initiate_Contact</h3>
                </div>
                <p className="text-zinc-500 text-[8px] md:text-[10px] uppercase tracking-widest">Connect directly to core infrastructure.</p>
              </div>
              <div className="p-6 md:p-8 space-y-3 md:space-y-4">
                <a href="mailto:narmahi.business@gmail.com" className="group flex items-center justify-between p-3 md:p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#00D09E]/50 hover:bg-[#00D09E]/5 transition-all">
                  <div>
                    <p className="text-[8px] md:text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Protocol: SMTP</p>
                    <p className="text-xs md:text-sm font-bold text-white group-hover:text-[#00D09E] transition-colors break-all">narmahi.business@gmail.com</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-[#00D09E] transition-colors hidden sm:block" />
                </a>
                <a href="tel:+919301106640" className="group flex items-center justify-between p-3 md:p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#00D09E]/50 hover:bg-[#00D09E]/5 transition-all">
                  <div>
                    <p className="text-[8px] md:text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Protocol: VOIP_01</p>
                    <p className="text-xs md:text-sm font-bold text-white group-hover:text-[#00D09E] transition-colors">+91 93011 06640</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-[#00D09E] transition-colors hidden sm:block" />
                </a>
                <a href="tel:+918005672895" className="group flex items-center justify-between p-3 md:p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#00D09E]/50 hover:bg-[#00D09E]/5 transition-all">
                  <div>
                    <p className="text-[8px] md:text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Protocol: VOIP_02</p>
                    <p className="text-xs md:text-sm font-bold text-white group-hover:text-[#00D09E] transition-colors">+91 80056 72895</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-[#00D09E] transition-colors hidden sm:block" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

/* =========================================
   4. ABOUT SECTION
   ========================================= */
const About = () => {
  return (
    <section id="about" className="py-20 md:py-40 bg-[#FDFDFD] px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-indigo-50/50 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-24 items-center">

          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8 }}
              className="relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-xl sm:shadow-2xl aspect-[4/5] bg-zinc-100 group border border-zinc-200"
            >
              <div className="absolute inset-0 bg-[#13262F]/20 z-10 group-hover:bg-[#13262F]/10 transition-colors duration-700" />
              <img
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop"
                alt="Narmahi AI & Engineering"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                loading="lazy"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute bottom-4 sm:bottom-8 left-4 right-4 sm:left-6 sm:right-6 md:left-8 md:right-8 bg-white/90 backdrop-blur-2xl border border-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] z-20 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#00D09E] rounded-full flex items-center justify-center shrink-0 shadow-md">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 text-[#13262F]" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-[1000] text-[#13262F] tracking-tight">Fractional CTO</h4>
                </div>
                <p className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-widest leading-relaxed">Strategic guidance on scalability, security, and business logic.</p>
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="w-8 sm:w-12 h-[2px] bg-[#00D09E]"></div>
                <h2 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-[#13262F]">The Narmahi Standard</h2>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-[1000] tracking-tighter text-[#13262F] leading-[1.1] sm:leading-[1.05] mb-6 sm:mb-8">
                We don't build websites. We engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D09E] to-teal-600">market leaders.</span>
              </h3>

              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl text-zinc-500 font-medium leading-relaxed max-w-2xl mb-8 sm:mb-12">
                <p>Great companies aren't built on templates. At NARMAHI, we operate as your dedicated technical partner, bridging the gap between visionary ideas and flawless execution.</p>
                <p>From scaling startups to enterprise brands, we build the digital infrastructure that accelerates revenue without the burden of technical debt.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pt-8 sm:pt-10 border-t border-zinc-200">
                <div className="group">
                  <h4 className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-[#13262F] mb-2 sm:mb-3 flex items-center gap-2 sm:gap-3">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-zinc-100 group-hover:bg-[#00D09E]/10 transition-colors"><Code className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00D09E]" /></div> Unbreakable Code
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-500 font-medium leading-relaxed">Modular, highly secure architectures built specifically for hyper-growth and scale.</p>
                </div>
                <div className="group">
                  <h4 className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-[#13262F] mb-2 sm:mb-3 flex items-center gap-2 sm:gap-3">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-zinc-100 group-hover:bg-[#00D09E]/10 transition-colors"><Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00D09E]" /></div> Premium Design
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-500 font-medium leading-relaxed">Psychology-driven, conversion-optimized interfaces that instantly command market authority.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* =========================================
   5. SERVICES SECTION
   ========================================= */
const Services = ({ onOpenModal }) => {
  const packages = [
    { title: "Website Development", badge: "Digital Storefronts", desc: "We engineer lightning-fast, highly secure, and custom-designed web platforms using modern tech stacks.", features: ["Custom Modern Design", "Mobile & Tablet Responsive", "Advanced Lead Generation Forms", "WhatsApp & Google Maps Integration", "Basic SEO Setup"], bonus: ["Free Domain (1 Year)", "Free SSL Security"], isPopular: true },
    { title: "App Development", badge: "Ecosystems of Engagement", desc: "Custom Native iOS and Android applications built for high performance and seamless user journeys.", features: ["Custom Native App Development", "Modern UI / UX Design", "Secure Login & Signup System", "Admin Control Panel", "Push Notifications & APIs"], bonus: ["Play Store Upload Support", "3 Months Free Tech Support"], isPopular: false },
    { title: "UI / UX Design", badge: "Psychology-Driven Interfaces", desc: "Aesthetic means nothing without utility. We craft systematic, user-centric interfaces rooted in behavioral data.", features: ["Wireframing & Prototyping", "User Experience (UX) Planning", "Brand Color & Typography Setup", "Mobile-First Design Approach", "Frictionless Checkout Flows"], bonus: ["Free Competitor UX Audit", "Complete Source File Handoff"], isPopular: false },
    { title: "AI Integration", badge: "Intelligent Automation", desc: "Automate workflows and scale your business using custom AI models and intelligent chatbots.", features: ["Custom ChatGPT Integration", "Automated Customer Support", "Business Workflow Automation", "Intelligent Data Analysis", "API Integration (OpenAI/Claude)"], bonus: ["Free AI Strategy Consultation", "1 Month Post-Launch Fine-Tuning"], isPopular: false }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-zinc-50/50 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#00D09E]/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="text-center mb-12 sm:mb-20">
          <h2 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-[#00D09E] mb-3 sm:mb-4">Core Capabilities</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[1000] tracking-tighter text-[#13262F] mb-4 sm:mb-6">An Engineering Arsenal <br className="hidden md:block" />Built for Revenue.</h3>
          <p className="text-base sm:text-lg text-zinc-500 font-medium max-w-2xl mx-auto px-2">Select the perfect solution to grow your business. We don't just deliver features; we deliver measurable business outcomes.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {packages.map((pkg, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: i * 0.1 }} className={`group relative bg-white rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 ${pkg.isPopular ? 'border-2 border-[#00D09E] shadow-[0_15px_30px_rgba(0,208,158,0.15)] mt-4 sm:mt-0' : 'border border-zinc-200 shadow-md hover:shadow-xl hover:border-zinc-300 mt-4 sm:mt-0'}`}>
              <div className="absolute -top-3.5 sm:-top-4 left-1/2 -translate-x-1/2 w-max z-20">
                <span className={`px-4 sm:px-5 py-1 sm:py-1.5 rounded-full text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] shadow-md ${pkg.isPopular ? 'bg-[#00D09E] text-[#13262F]' : 'bg-[#13262F] text-white'}`}>
                  {pkg.badge}
                </span>
              </div>
              <div className="relative z-10 pt-2">
                <h4 className="text-xl sm:text-2xl font-[1000] tracking-tight text-[#13262F] mt-2 sm:mt-4 mb-2 sm:mb-3">{pkg.title}</h4>
                <p className="text-xs sm:text-sm text-zinc-500 font-medium leading-relaxed pb-4 sm:pb-6 border-b border-zinc-100">{pkg.desc}</p>
                <h5 className="text-[9px] sm:text-[10px] font-bold text-[#13262F] uppercase tracking-[0.2em] mt-4 sm:mt-6 mb-3 sm:mb-4">Includes:</h5>
                <ul className="space-y-3 mb-6 sm:mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00D09E] shrink-0 mt-0.5" strokeWidth={3} />
                      <span className="text-xs sm:text-sm font-medium text-zinc-700 leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative z-10 mt-auto">
                <div className={`bg-zinc-50 border border-zinc-100 p-4 sm:p-5 rounded-xl sm:rounded-2xl mb-5 sm:mb-6 transition-colors duration-300 ${pkg.isPopular ? 'group-hover:bg-[#00D09E]/5 group-hover:border-[#00D09E]/20' : ''}`}>
                  <h5 className="text-[9px] sm:text-[10px] font-bold text-[#13262F] uppercase tracking-[0.2em] flex items-center gap-2 mb-2 sm:mb-3">
                    <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00D09E]" /> Free Bonuses
                  </h5>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {pkg.bonus.map((b, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[10px] sm:text-xs font-bold text-zinc-600">
                        <div className="w-1 h-1 rounded-full bg-[#13262F]" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <button onClick={onOpenModal} className={`w-full block text-center py-3.5 sm:py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-[10px] sm:text-[11px] transition-all duration-300 shadow-md ${pkg.isPopular ? 'bg-[#00D09E] text-[#13262F] hover:bg-[#13262F] hover:text-white hover:shadow-xl' : 'bg-white border border-zinc-200 text-[#13262F] hover:bg-[#13262F] hover:text-white hover:border-[#13262F]'}`}>
                  Discuss Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* =========================================
   6. PROCESS SECTION
   ========================================= */
const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { num: "01", title: "Discovery", icon: Search, desc: "We audit your business goals, analyze your market, and map out the exact technical requirements needed to dominate your niche." },
    { num: "02", title: "Strategy", icon: Map, desc: "We select the optimal modern tech stack and define a ruthless, efficient roadmap for scalable development." },
    { num: "03", title: "Design", icon: PenTool, desc: "Our creative team develops pixel-perfect, conversion-optimized wireframes and high-fidelity psychology-driven prototypes." },
    { num: "04", title: "Development", icon: Terminal, desc: "Senior engineers write clean, robust, and scalable code—building a flawless frontend and a bulletproof, secure backend." },
    { num: "05", title: "Launch", icon: Rocket, desc: "Rigorous QA testing, seamless server deployment, and App Store optimization to ensure a perfect, crash-free go-live event." },
    { num: "06", title: "Growth", icon: TrendingUp, desc: "Post-launch data analysis, continuous updates, and scaling infrastructure to handle your exponentially expanding user base." },
  ];

  const nextStep = () => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  const prevStep = () => setActiveStep((prev) => (prev > 0 ? prev - 1 : prev));
  const CurrentIcon = steps[activeStep].icon;

  return (
    <section id="process" className="py-20 md:py-40 bg-[#030508] px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[800px] opacity-20 pointer-events-none flex justify-center items-center">
        <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-[#00D09E] blur-[100px] sm:blur-[150px] mix-blend-screen" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-transparent to-[#00D09E]"></div>
            <h2 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-[#00D09E]">Lifecycle</h2>
            <div className="w-8 sm:w-12 h-[2px] bg-gradient-to-l from-transparent to-[#00D09E]"></div>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-[1000] tracking-tighter text-white leading-[1.1] sm:leading-[1.05]">
            The Narmahi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D09E] to-teal-400 block sm:inline">Blueprint.</span>
          </h3>
        </motion.div>

        <div className="bg-[#0B1015]/80 backdrop-blur-3xl border border-white/10 rounded-3xl md:rounded-[3rem] p-6 sm:p-8 md:p-12 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-20 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00D09E]/50 to-transparent" />

          <div className="mb-10 sm:mb-16 relative px-2 sm:px-0">
            <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-0 right-2 sm:right-0 h-[2px] bg-white/5 rounded-full z-0" />
            <motion.div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-0 h-[2px] bg-[#00D09E] rounded-full z-10 shadow-[0_0_10px_#00D09E]" initial={{ width: "0%" }} animate={{ width: `calc(${(activeStep / (steps.length - 1)) * 100}% - ${window.innerWidth < 640 ? '16px' : '0px'})` }} transition={{ duration: 0.5, ease: "easeInOut" }} />

            <div className="relative z-20 flex justify-between items-center">
              {steps.map((step, i) => (
                <button key={i} onClick={() => setActiveStep(i)} className={`relative flex flex-col items-center group outline-none`}>
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center text-[9px] sm:text-[10px] md:text-xs font-black transition-all duration-500 border-2 cursor-pointer
                      ${activeStep === i ? 'bg-[#00D09E] border-[#00D09E] text-[#030508] shadow-[0_0_20px_rgba(0,208,158,0.5)] scale-110' :
                      activeStep > i ? 'bg-white text-[#030508] border-white' : 'bg-[#0B1015] border-white/10 text-zinc-600 hover:border-white/30 hover:text-white'}`}
                  >
                    {activeStep > i ? <Check className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} /> : step.num}
                  </div>
                  <span className={`hidden md:block absolute -bottom-10 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${activeStep === i ? 'text-[#00D09E]' : 'text-zinc-600'}`}>
                    {step.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 sm:mt-12 md:mt-28 mb-8 sm:mb-10 min-h-[200px] sm:min-h-[250px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div key={activeStep} initial={{ opacity: 0, y: 10, filter: "blur(5px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -10, filter: "blur(5px)" }} transition={{ duration: 0.3, ease: "easeInOut" }} className="w-full flex flex-col lg:grid lg:grid-cols-12 gap-6 sm:gap-8 md:gap-16 items-center">

                <div className="lg:col-span-4 flex justify-center lg:justify-start w-full">
                  <div className="w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-2xl sm:rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex items-center justify-center relative shadow-2xl">
                    <div className="absolute inset-0 bg-[#00D09E]/10 blur-xl sm:blur-2xl rounded-full" />
                    <CurrentIcon className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 text-[#00D09E] relative z-10" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="lg:col-span-8 text-center lg:text-left w-full">
                  <h4 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-2 sm:mb-4">Phase {steps[activeStep].num}</h4>
                  <h5 className="text-2xl sm:text-4xl md:text-5xl font-[1000] text-white mb-3 sm:mb-6 tracking-tighter">{steps[activeStep].title}</h5>
                  <p className="text-sm sm:text-lg md:text-xl text-zinc-400 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    {steps[activeStep].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between pt-6 sm:pt-10 border-t border-white/5">
            <button onClick={prevStep} disabled={activeStep === 0} className={`flex items-center gap-2 sm:gap-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 px-2 py-2 -ml-2 ${activeStep === 0 ? 'opacity-30 cursor-not-allowed text-white' : 'text-zinc-400 hover:text-white hover:-translate-x-1'}`}>
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Prev
            </button>
            <button onClick={nextStep} disabled={activeStep === steps.length - 1} className={`flex items-center gap-2 sm:gap-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 px-2 py-2 -mr-2 ${activeStep === steps.length - 1 ? 'opacity-30 cursor-not-allowed text-white' : 'text-[#00D09E] hover:text-white hover:translate-x-1'}`}>
              Next <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================
   7. PORTFOLIO / CASE STUDIES (REAL IMAGES)
   ========================================= */
const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { title: "Asseta", category: "Asset Management Platform", desc: "A complete UI/UX overhaul and a custom React-based web application with enterprise-grade security.", fullDesc: "Asseta approached us to modernize their legacy asset management system. We rebuilt the entire platform from the ground up, focusing on impenetrable data security, real-time analytics rendering, and an intuitive user interface tailored for high-net-worth financial advisors.", techStack: ["React.js", "Node.js", "AWS Secure Enclave", "Tailwind CSS"], image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
    { title: "Divine Pandit", category: "Native Mobile App", desc: "A robust Native Android/iOS application with complex authentication, real-time chat, and seamless payments.", fullDesc: "We engineered a reliable, real-time matching algorithm to connect users with spiritual guides across the globe. The native mobile application features highly complex authentication flows, secure real-time encrypted chat, and an integrated multi-currency payment gateway.", techStack: ["React Native", "Firebase", "Stripe API", "WebSockets"], image: divinePanditImg },
    { title: "Atmaram Jewellers", category: "E-Commerce App", desc: "Premium jewelry retail application built for high-conversion and scale.", fullDesc: "A high-end heritage jewelry brand needed a digital storefront that reflected their physical luxury. We built a pixel-perfect, lightning-fast e-commerce mobile application featuring AR try-ons, high-resolution media handling, and an ultra-secure checkout process.", techStack: ["Next.js", "Shopify Plus API", "Framer Motion", "Vercel"], image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop" },
    { title: "Career Path AI", category: "AI Platform", desc: "Intelligent platform mapping customized career trajectories.", fullDesc: "An AI-driven educational platform that analyzes thousands of data points to generate custom career trajectories for students. We integrated advanced LLMs to create a conversational interface that acts as a 24/7 personal career counselor.", techStack: ["OpenAI GPT-4", "Python", "React", "PostgreSQL"], image: careerPathAiImg },
    { title: "Local Rank", category: "Support Portal", desc: "Dynamic local business listing and support portal.", fullDesc: "A highly dynamic, SEO-optimized business directory designed to handle millions of local search queries. The platform includes a robust vendor dashboard, automated review fetching, and a complex localized search algorithm.", techStack: ["Next.js (SSR)", "ElasticSearch", "Node.js", "Tailwind"], image: localRankImg },
    { title: "E-Commerce Web", category: "Web Store", desc: "Lightning-fast, high-conversion online store built to scale.", fullDesc: "We developed a bespoke headless e-commerce solution for a rapidly scaling D2C brand. By decoupling the frontend from the backend, we achieved sub-second page load speeds, drastically reducing cart abandonment and boosting organic traffic.", techStack: ["React", "Shopify Storefront API", "GraphQL", "Redis"], image: ecommerceImg },
  ];

  return (
    <section id="work" className="py-20 md:py-32 bg-[#FAFAFA] px-4 sm:px-6 border-y border-zinc-200">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-20 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-4 sm:gap-6 border-b border-zinc-200 pb-6 sm:pb-10">
          <div className="w-full md:w-auto">
            <h2 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-[#00D09E] mb-3 sm:mb-4">Case Studies</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[1000] tracking-tighter text-[#13262F]">Engineering <br className="hidden md:block" />Market Leaders.</h3>
          </div>
          <p className="text-sm sm:text-lg text-zinc-500 font-medium max-w-sm mb-1 sm:mb-2 w-full md:w-auto">Our recent deployments across various global industries.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index} onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: index * 0.1, ease: ease }}
              className="group bg-white rounded-3xl sm:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col border border-zinc-200 hover:border-[#13262F]/20"
            >
              <div className="h-48 sm:h-56 md:h-64 bg-zinc-100 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[#13262F]/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" loading="lazy" />
                <span className="absolute top-4 sm:top-5 left-4 sm:left-5 z-20 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/95 backdrop-blur-xl text-[#13262F] rounded-full text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] shadow-md">
                  {project.category}
                </span>
              </div>

              <div className="p-6 sm:p-8 grow flex flex-col justify-between bg-white relative">
                <div className="absolute top-0 left-6 sm:left-8 right-6 sm:right-8 h-px bg-zinc-100" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-[1000] tracking-tight text-[#13262F] mb-2 sm:mb-3 group-hover:text-[#00D09E] transition-colors">{project.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-500 font-medium line-clamp-3 leading-relaxed mb-4 sm:mb-6">{project.desc}</p>
                </div>
                <div className="flex items-center text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-[#13262F] gap-2 group-hover:text-[#00D09E] transition-colors">
                  View Architecture <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100000] flex items-center justify-center p-0 sm:p-6 md:p-12">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-[#030508]/90 backdrop-blur-xl cursor-pointer" />
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="relative w-full h-full sm:h-auto max-w-4xl bg-white sm:rounded-[2.5rem] shadow-2xl z-10 overflow-hidden flex flex-col max-h-screen sm:max-h-[95vh] border-0 sm:border border-white/10">
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-2.5 bg-white/80 backdrop-blur-md rounded-full hover:bg-zinc-100 transition-colors z-50 shadow-md">
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#13262F]" />
              </button>

              <div className="h-56 sm:h-72 md:h-96 w-full relative shrink-0">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030508] to-transparent opacity-90" />
                <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 md:left-14 pr-6 sm:pr-10">
                  <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-[#00D09E] text-[#13262F] rounded-full text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] mb-2 sm:mb-4 inline-block shadow-lg">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-3xl sm:text-4xl md:text-6xl font-[1000] tracking-tighter text-white">{selectedProject.title}</h3>
                </div>
              </div>

              <div className="p-6 sm:p-10 md:p-14 overflow-y-auto bg-white grow">
                <div className="mb-8 sm:mb-12">
                  <h4 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-[#00D09E] mb-3 sm:mb-4">Project Overview</h4>
                  <p className="text-sm sm:text-lg md:text-xl text-zinc-600 font-medium leading-relaxed max-w-3xl">{selectedProject.fullDesc}</p>
                </div>

                <div className="bg-zinc-50 border border-zinc-200 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl pb-safe">
                  <h4 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-[#13262F] mb-4 sm:mb-6">Stack & Infrastructure</h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {selectedProject.techStack.map((tech, i) => (
                      <span key={i} className="px-3 sm:px-5 py-2 sm:py-2.5 bg-white border border-zinc-200 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold text-[#13262F] shadow-sm flex items-center gap-1.5 sm:gap-2 hover:border-[#00D09E] transition-colors cursor-default">
                        <Code className="w-3 h-3 sm:w-4 sm:h-4 text-[#00D09E]" /> {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

/* =========================================
   8. BLOG / INSIGHTS
   ========================================= */
const Insights = () => {
  return (
    <section className="py-20 md:py-32 bg-white px-4 sm:px-6 border-b border-zinc-100 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-12 sm:mb-16 border-b border-zinc-100 pb-6 sm:pb-10">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="w-8 sm:w-12 h-[2px] bg-[#00D09E]"></div>
              <h2 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-[#13262F]">Perspectives</h2>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[1000] tracking-tighter text-[#13262F]">
              The Narmahi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D09E] to-teal-500">Playbook.</span>
            </h3>
          </motion.div>

          <motion.button initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-[#13262F] transition-colors group mb-1 sm:mb-2 w-fit">
            View All Artifacts <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:col-span-7 group relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden min-h-[300px] sm:min-h-[400px] flex flex-col justify-end cursor-pointer shadow-lg hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all duration-700"
          >
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-[#030508]/40 to-transparent z-10" />
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" alt="Cyber Security & AI" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="relative z-20 p-6 sm:p-8 md:p-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-[#00D09E] text-[#13262F] rounded-full text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em]">Featured</span>
                <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">5 Min Read</span>
              </div>
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-[1000] text-white leading-[1.1] mb-3 sm:mb-4 group-hover:text-[#00D09E] transition-colors duration-300 tracking-tight">
                Beyond the Template: Why Ambitious Brands Need a Fractional CTO.
              </h4>
              <p className="text-xs sm:text-sm text-white/70 font-medium line-clamp-2 max-w-lg">
                Scaling a business requires more than just clean code. Learn how strategic technical leadership bridges the gap between vision and execution.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-5 flex flex-col justify-center gap-1 sm:gap-2">
            {[
              { tag: "Engineering", title: "The Narmahi Standard: Architecting Web Apps for 10x Scalability." },
              { tag: "UI / UX Design", title: "Psychology in UI: How We Engineer 2.5x Conversion Boosts." },
              { tag: "AI Integration", title: "Custom AI Models: A Blueprint for Enterprise Automation.", noBorder: true }
            ].map((article, i) => (
              <motion.a
                key={i} href="#" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                className={`group block py-6 sm:py-8 ${article.noBorder ? '' : 'border-b border-zinc-200 hover:border-[#13262F]'} transition-colors`}
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400">{article.tag}</span>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-300 group-hover:text-[#00D09E] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-black text-[#13262F] tracking-tight leading-snug group-hover:text-[#00D09E] transition-colors">
                  {article.title}
                </h4>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


/* =========================================
   9. FAQ SECTION (SEO OPTIMIZED)
   ========================================= */
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do you offer custom web & mobile app development?",
      answer: "Yes, we specialize in high-performance, bespoke web architectures and native mobile applications. Every project is built from scratch strictly meeting your operational and scalability requirements—no templates, no bloated code."
    },
    {
      question: "How much does a custom digital platform cost?",
      answer: "Pricing depends heavily on project scope, complexity, and the required tech stack. We offer transparent blueprints after our initial discovery call, ensuring you only pay for features that directly impact your revenue and operations."
    },
    {
      question: "What is your development timeline?",
      answer: "A standard MVP (Minimum Viable Product) usually takes 4-8 weeks. Enterprise-scale applications or highly complex mobile apps can take 3-6 months. We prioritize rapid, iterative deployment to get you to market faster."
    },
    {
      question: "Do you provide SEO and post-launch maintenance?",
      answer: "Absolutely. All our platforms are built with deep technical SEO foundations. We also offer dedicated fractional CTO services and ongoing maintenance contracts to scale your infrastructure as your user base grows."
    },
    {
      question: "What technology stack do you use?",
      answer: "We leverage bleeding-edge, enterprise-grade technologies like React, Next.js, Node.js, and AWS. Our tech stack is chosen specifically for maximum security, sub-second latency, and infinite scalability."
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-40 bg-[#FAFAFA] px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00D09E]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 sm:mb-20">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-[2px] bg-[#00D09E]"></div>
            <h2 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-[#13262F]">Common Queries</h2>
            <div className="w-8 sm:w-12 h-[2px] bg-[#00D09E]"></div>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[1000] tracking-tighter text-[#13262F] leading-[1.1]">
            Frequently Asked <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D09E] to-teal-500">Questions.</span>
          </h3>
        </motion.div>

        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-zinc-200 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 sm:px-8 sm:py-8 flex items-center justify-between text-left focus:outline-none"
              >
                <h4 className={`text-sm sm:text-lg md:text-xl font-bold tracking-tight pr-8 transition-colors duration-300 ${openIndex === index ? 'text-[#00D09E]' : 'text-[#13262F]'}`}>
                  {faq.question}
                </h4>
                <div className={`w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-[#00D09E] text-[#13262F] rotate-180 shadow-[0_0_15px_rgba(0,208,158,0.4)]' : 'bg-zinc-100 text-[#13262F] group-hover:bg-zinc-200'}`}>
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 text-sm sm:text-base text-zinc-500 font-medium leading-relaxed border-t border-zinc-100 mt-2 pt-4 sm:pt-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* =========================================
   10. CORPORATE FOOTER
   ========================================= */
const Footer = ({ onOpenModal }) => {
  return (
    <footer id="contact" className="bg-[#030508] text-white pt-16 sm:pt-24 pb-6 sm:pb-8 px-4 sm:px-6 relative z-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[150px] sm:h-[300px] bg-[#00D09E]/10 blur-[60px] sm:blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 sm:gap-10 mb-12 sm:mb-20">
          <div className="max-w-2xl w-full">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D09E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[#00D09E]"></span>
              </span>
              <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-[#00D09E]">
                Operating Globally
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-[1000] tracking-tighter leading-[1.05] md:leading-[0.9]">
              Let's engineer <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-700 block sm:inline">greatness.</span>
            </h2>
          </div>

          <button onClick={onOpenModal} className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-[#030508] px-8 sm:px-10 py-4 sm:py-5 rounded-full font-black uppercase tracking-[0.2em] text-[10px] sm:text-[11px] hover:scale-105 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(0,208,158,0.4)]">
            <div className="absolute inset-0 bg-[#00D09E] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-full"></div>
            <span className="relative z-10 group-hover:text-black transition-colors flex items-center gap-2">
              Start a Project <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 border-y border-white/10 py-10 sm:py-16 mb-10 sm:mb-16">
          <div className="md:col-span-7 flex flex-col justify-center">
            <h4 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-[#00D09E] mb-3 sm:mb-6">Inquiries</h4>
            <a href="mailto:narmahi.business@gmail.com" className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-[1000] tracking-tighter text-white hover:text-[#00D09E] transition-colors duration-500 w-fit break-all">
              narmahi.business@gmail.com
            </a>
            <p className="text-[10px] sm:text-xs font-medium text-zinc-500 mt-3 sm:mt-4 italic">Response time: Usually within 12 hours</p>
          </div>

          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 md:pl-12 md:border-l border-white/10">
            <div>
              <h4 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4 sm:mb-6">Direct Lines</h4>
              <div className="flex flex-col gap-3 sm:gap-4">
                <a href="tel:+919301106640" className="text-base sm:text-lg font-bold text-zinc-300 hover:text-[#00D09E] transition-colors">+91 93011 06640</a>
                <a href="tel:+918005672895" className="text-base sm:text-lg font-bold text-zinc-300 hover:text-[#00D09E] transition-colors">+91 80056 72895</a>
              </div>
            </div>
            <div>
              <h4 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4 sm:mb-6">Socials</h4>
              <div className="flex flex-col gap-3 sm:gap-4">
                <a href="https://linkedin.com/company/narmahi" className="text-xs sm:text-sm font-bold text-zinc-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="https://instagram.com/narmahi.official" className="text-xs sm:text-sm font-bold text-zinc-400 hover:text-white transition-colors">Instagram</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4">
          <div className="text-xl sm:text-2xl font-[1000] tracking-tighter text-white">
            NARMAHI<span className="text-[#00D09E]">.</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
            <p className="w-full sm:w-auto text-center">&copy; {new Date().getFullYear()} Narmahi Engineering.</p>
            <a href="#services" className="hover:text-white transition-colors hidden sm:block">Services</a>
            <a href="#work" className="hover:text-white transition-colors hidden sm:block">Work</a>
          </div>

          <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 rounded-full border border-white/10 text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-1.5 sm:gap-2">
            <Shield className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#00D09E]" /> Secure Infrastructure
          </div>
        </div>
      </div>
    </footer>
  );
};

/* =========================================
   MAIN APP
   ========================================= */
function App() {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="font-sans antialiased bg-white text-[#13262F] selection:bg-[#00D09E]/30 selection:text-[#13262F] overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading && <Preloader />}
      </AnimatePresence>

      {!loading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, ease: ease }}>
          <Navbar onOpenModal={() => setIsModalOpen(true)} />
          <Hero onOpenModal={() => setIsModalOpen(true)} />
          <About />
          <Services onOpenModal={() => setIsModalOpen(true)} />
          <Process />
          <Portfolio />
          <Insights />
          <FAQ />
          <Footer onOpenModal={() => setIsModalOpen(true)} />
        </motion.div>
      )}

      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}

export default App;