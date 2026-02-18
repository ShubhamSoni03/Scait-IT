import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import D from "../assets/D.jpeg";

const Director = () => {
  return (
    <div className="min-h-screen bg-[#050505] font-sans text-slate-300 overflow-x-hidden">
      
      {/* 1. Industrial Hero Section (Yellow/Green Grading) */}
      <section className="relative w-full h-[450px] md:h-[550px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000" 
            alt="Director Desk"
            className="w-full h-full object-cover"
          />
          {/* Gradient: Dark Green to Golden Yellow Tint */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-[#050505]/80 to-[#bef264]/10" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="max-w-4xl border-l-[6px] border-[#eab308] pl-8 py-4"
          >
            <nav className="flex items-center space-x-2 text-[#bef264] text-xs font-bold uppercase tracking-[0.3em] mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Our Leadership</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight mb-4">
              Visionary <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eab308] to-[#bef264]">Leadership.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl font-light">
              Directing 27 years of engineering excellence toward a sustainable digital future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Message Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-24">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#bef264]/5 blur-[120px] rounded-full -z-10" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: The Director's Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 sticky top-24"
          >
            <div className="relative group">
              {/* Animated Border Glow */}
              <div className="absolute -inset-1 bg-gradient-to-b from-[#eab308] to-[#bef264] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              
              <div className="relative rounded-2xl overflow-hidden bg-[#111] border border-white/10 shadow-2xl">
                <img 
                  src={D}
                  alt="Director" 
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                   <h3 className="text-xl font-black text-white uppercase tracking-tighter">Director Name</h3>
                   <p className="text-[#bef264] text-xs font-bold uppercase tracking-widest">Managing Director</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm">
               <p className="text-xs text-slate-500 leading-relaxed uppercase tracking-widest font-bold">
                 Established: 1997 <br/>
                 Excellence: ISO 9001:2015 <br/>
                 Headquarters: Pune, India
               </p>
            </div>
          </motion.div>

          {/* Right: The Message Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="space-y-10">
              {/* Highlight Quote */}
              <div className="relative">
                <span className="absolute -top-10 -left-6 text-9xl text-[#bef264] opacity-10 font-serif">“</span>
                <p className="text-2xl md:text-3xl font-light text-white leading-snug italic relative z-10">
                  First and foremost, I would like to thank our <span className="text-[#eab308] font-semibold">valued clients</span>, whose continued patronage inspires us to extend the best of services.
                </p>
              </div>

              <div className="w-24 h-1 bg-gradient-to-r from-[#eab308] to-transparent"></div>

              <div className="prose prose-invert max-w-none space-y-6 text-slate-400 text-lg leading-relaxed font-light">
                <p>
                  The SCA Team and myself commit to ensuring that all our clients will get benefits and growth through our partnership. We strongly believe in creating <span className="text-white font-medium">partnerships and delivering value</span> beyond our normal scope.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                   <div className="p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl">
                      <h4 className="text-white font-bold mb-2">Quality Policy</h4>
                      <p className="text-sm">Adhering to ISO 9001:2015 standards to provide total customer satisfaction.</p>
                   </div>
                   <div className="p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl">
                      <h4 className="text-white font-bold mb-2">Human Capital</h4>
                      <p className="text-sm">A dynamic team of over 100+ professionals working 24/7 for you.</p>
                   </div>
                </div>

                <p>
                  We are also committed to our stakeholders by way of maximizing wealth through sustainable growth, optimally balancing commercial objectives and the goal of social services to the nation at large.
                </p>

                <p>
                  I seek continued patronage of our valued customers and cooperation of our employees who have contributed to the growth of the organization.
                </p>
              </div>

              {/* Signature Section */}
              <motion.div 
                whileHover={{ x: 10 }}
                className="pt-12"
              >
                <p className="text-white font-mono tracking-widest uppercase text-sm mb-4">Sincerely,</p>
                <div className="space-y-1">
                  <p className="text-3xl font-serif italic text-white">Director Signature</p>
                  <p className="text-lg font-black text-white tracking-tighter pt-4">Managing Director</p>
                  <p className="text-[#eab308] font-bold text-xs uppercase tracking-[0.3em]">SCA IT Infrastructure Pvt. Ltd.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Modern Minimal Footer */}
      <footer className="py-12 border-t border-white/5 bg-black/50 text-center">
        <p className="text-[10px] tracking-[0.8em] text-slate-600 uppercase">
          Integrity • Innovation • Infrastructure
        </p>
      </footer>
    </div>
  );
};

export default Director;