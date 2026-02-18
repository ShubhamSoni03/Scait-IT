import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CompanyProfile = () => {
  const services = [
    {
      title: "Annual Maintenance Of LAN Networking",
      icon: "https://cdn-icons-png.flaticon.com/512/3159/3159044.png",
      desc: "Comprehensive support for high-uptime environments."
    },
    {
      title: "Supply Of Networking Components",
      icon: "https://cdn-icons-png.flaticon.com/512/2885/2885417.png",
      desc: "Top-tier hardware sourcing from global vendors."
    },
    {
      title: "Enterprise LAN, WAN",
      icon: "https://cdn-icons-png.flaticon.com/512/906/906206.png",
      desc: "Seamless connectivity for distributed architectures."
    },
    {
      title: "Array Of Wi-Fi Network",
      icon: "https://cdn-icons-png.flaticon.com/512/93/93158.png",
      desc: "High-density wireless solutions for modern workspaces."
    },
    {
      title: "Network Solutions",
      icon: "https://cdn-icons-png.flaticon.com/512/1162/1162539.png",
      desc: "Tailored IT strategies for business growth."
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] font-sans text-slate-300 overflow-x-hidden selection:bg-maroon-500/30">

      {/* 1. Dynamic Hero Section with Blue/Maroon Glow */}
      <section className="relative w-full h-[500px] md:h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
            alt="Tech Banner"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay: Rocket Blue to Deep Maroon */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0077b6]/40 via-[#020617] to-[#800000]/30" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl border-l-[6px] border-[#cc0000] pl-8 py-4"
          >
            <nav className="flex items-center space-x-2 text-[#00b4d8] text-xs font-bold uppercase tracking-[0.3em] mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Profile</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6">
              SCA IT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#ff4d4d]">
                INFRASTRUCTURE
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-xl font-light leading-relaxed">
              Engineering the backbone of digital enterprises with 27 years of tactical excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Brand Story - Diagonal Floating Effect */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            whileHover={{ y: -10, rotate: -1 }}
            className="relative group cursor-pointer"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#ff0000] to-[#0077b6] rounded-2xl opacity-20 group-hover:opacity-40 blur-2xl transition-all duration-700" />
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
              className="relative rounded-2xl shadow-2xl border border-white/5 grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
              alt="Security"
            />
            <div className="absolute -bottom-10 -right-6 bg-gradient-to-br from-[#800000] to-[#b30000] p-10 rounded-2xl shadow-2xl">
              <span className="text-6xl font-black text-white block tracking-tighter">27+</span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/80">Years Expertise</span>
            </div>
          </motion.div>

          <div className="space-y-10">
            <div className="space-y-2">
              <span className="text-[#00b4d8] font-mono text-sm tracking-widest uppercase">01. Identity</span>
              <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Deep-Rooted <br /> <span className="text-slate-500">Infrastructure</span> Intelligence
              </h3>
            </div>

            <p className="text-lg text-slate-400 leading-relaxed font-light">
              Our force of <strong>120+ professionals</strong> operates at the intersection of security and scalability. We don't just supply hardware; we architect the nervous system of your business.
            </p>

            <div className="flex flex-col md:flex-row gap-6 pt-4">
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#800000] to-[#cc0000] rounded-full text-white font-bold text-sm text-center shadow-lg shadow-maroon-900/40"
                >
                  Immediate Support
                </motion.div>
              </Link>
              <a href="mailto:info@scait.co.in" className="flex items-center justify-center px-8 py-4 border border-white/10 rounded-full text-white font-bold text-sm hover:bg-white/5 transition-all">
                info@scait.co.in
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Grid - Floating "Glow" Hover Effect */}
      <section className="bg-[#030a1f] py-32 px-6 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-[#cc0000] font-mono text-sm tracking-[0.5em] uppercase mb-4">Tactical Services</h2>
              <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Capabilities.</h3>
            </div>
            <p className="text-slate-500 text-sm max-w-xs text-right hidden md:block uppercase tracking-widest leading-loose">
              High-availability networking for global operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="group relative p-12 bg-[#020617] border border-white/5 rounded-[2.5rem] overflow-hidden"
              >
                {/* Hover Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0077b6]/0 to-[#800000]/0 group-hover:from-[#0077b6]/10 group-hover:to-[#800000]/10 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="w-16 h-16 mb-10 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-[#00b4d8] group-hover:shadow-[0_0_20px_rgba(0,180,216,0.2)] transition-all duration-500">
                    <img src={service.icon} alt={service.title} className="w-8 h-8 group-hover:brightness-125" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-[#00b4d8] transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Action Section - Deep Sky Rocket Blue / Red Gradient */}
      <section className="py-40 relative flex flex-col items-center">
        {/* Sky Rocket Blue Background Flare */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0077b6]/20 blur-[160px] rounded-full pointer-events-none" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="space-y-12"
          >
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">
              SECURE THE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cc0000] to-[#00b4d8]">FUTURE STACK</span>
            </h2>


          </motion.div>
        </div>
      </section>

      {/* Modern Footer Grading */}
      <footer className="py-20 border-t border-white/5 bg-[#010409] px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] tracking-[0.5em] font-bold text-slate-700 uppercase">
            Architecture & Intelligence 2025
          </div>
          <div className="flex gap-10">
            <span className="text-[#800000] font-black tracking-tighter text-xl">SCA IT</span>
            <div className="h-6 w-px bg-white/10" />
            <span className="text-slate-500 text-[10px] uppercase tracking-[0.4em] pt-2">Pune • Mumbai • Global</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CompanyProfile;