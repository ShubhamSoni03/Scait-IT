import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/sca_logo.png";


const NavigationSuite = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const services = [
    { name: "Active Networking", to: "/services/active-networking" },
    { name: "Wireless / Mobility", to: "/services/wireless-mobility" },
    { name: "Structured Cabling", to: "/services/structured-cabling" },
    { name: "Surveillance Solution", to: "/services/surveillance-solution" },
    { name: "Data Centre", to: "/services/data-centre" },
    { name: "Audio / Video Solutions", to: "/services/audio-video-solutions" },
    { name: "Access Control", to: "/services/access-control-system" },
    { name: "Touch Panel & Kiosk", to: "/services/touch-panel-kiosk" },
    { name: "Deployment Solutions", to: "/services/deployment-solutions" },
    { name: "Industrial PC", to: "/services/industrial-pc" },
  ];

  // Subtle floating animation that won't shift layout alignment
  const floatingVariant = {
    animate: {
      y: [0, -4, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <header className="fixed w-full top-0 z-50 flex flex-col">


      {/* Main Nav: Dark glassmorphism with Violet Gradient Accents */}
      <div className="w-full bg-[#030712]/70 border-b border-violet-500/20 backdrop-blur-xl relative">
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">

          {/* LOGO SECTION */}
          <Link to="/" className="relative flex items-center shrink-0">
            <div className="absolute inset-0 bg-violet-600/20 blur-2xl rounded-full" />
            <img
              src={logo}
              alt="SCA IT Logo"
              className="h-10 md:h-12 w-auto object-contain relative z-10"
            />
          </Link>

          {/* DESKTOP NAV: Fixes alignment issues seen in image */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10 h-full">
            {[
              { label: "Home", to: "/" },
              { label: "Certifications", to: "/certifications" },
              { label: "Customers", to: "/customer" },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                variants={floatingVariant}
                animate="animate"
                transition={{ delay: idx * 0.2 }}
                className="h-full flex items-center"
              >
                <Link
                  to={item.to}
                  className="relative text-[11px] font-black uppercase tracking-[0.25em] text-slate-300 hover:text-violet-400 transition-all group py-2"
                >
                  {item.label}
                  {/* Violet Glow Underline */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-violet-600 to-fuchsia-500 shadow-[0_0_15px_#8b5cf6] group-hover:w-full transition-all duration-500" />
                </Link>
              </motion.div>
            ))}

            {/* About Dropdown */}
            <motion.div variants={floatingVariant} animate="animate" className="relative group h-full flex items-center">
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-300 group-hover:text-violet-400 cursor-pointer">
                About_Us
              </span>
              <div className="absolute left-0 top-[70%] pt-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="w-56 bg-[#0b0f1a]/95 border border-violet-500/20 backdrop-blur-2xl py-3 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                  {["Company Profile", "Our Mission", "Our Director"].map((item) => (
                    <Link key={item} to={`/about/${item.toLowerCase().replace(" ", "-")}`} className="block px-6 py-3 text-[10px] font-bold text-slate-400 hover:text-violet-400 hover:bg-violet-500/10 uppercase tracking-widest transition-all">
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Services Dropdown */}
            <motion.div variants={floatingVariant} animate="animate" className="relative group h-full flex items-center">
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-300 group-hover:text-violet-400 cursor-pointer">
                Services
              </span>
              <div className="absolute right-[-100px] top-[70%] pt-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="w-[600px] bg-[#0b0f1a]/95 border border-violet-500/20 backdrop-blur-2xl p-8 rounded-2xl grid grid-cols-2 gap-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
                  <div className="col-span-2 text-[10px] font-mono text-violet-500 mb-2 tracking-[0.4em] uppercase opacity-50">Industrial_Protocols</div>
                  {services.map((s) => (
                    <Link key={s.to} to={s.to} className="py-2.5 text-[10px] font-bold text-slate-400 hover:text-white border-b border-white/5 uppercase tracking-wider transition-all hover:border-violet-500/50 hover:pl-2">
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* FIXED CONTACT BUTTON: Fixed width and overflow issues */}
            <motion.div variants={floatingVariant} animate="animate" className="shrink-0 ml-4">
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-transparent text-violet-400 text-[11px] font-black uppercase tracking-[0.25em] relative overflow-hidden group border border-violet-500/40 hover:border-violet-400 transition-all"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Initialize_Contact
                </span>
                {/* Violet Gradient Fill */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-violet-500 text-3xl">☰</button>
        </div>
      </div>

      {/* Persistent Violet Bottom Scanline */}
      <motion.div
        animate={{ opacity: [0.3, 0.8, 0.3], scaleX: [0.9, 1, 0.9] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"
      />
    </header>
  );
};

export default NavigationSuite;