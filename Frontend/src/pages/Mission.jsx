import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const MissionVision = () => {
  // Parallax logic for the background image visibility
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);

  const cards = [
    {
      title: "Our Mission",
      content: "We are committed to providing quality products, expert services, and a positive experience, earning trust through exceptional performance.",
      accent: "from-[#800000] to-[#b30000]",
      icon: "🎯"
    },
    {
      title: "Our Vision",
      content: "To become the fastest-growing, most admired IT infrastructure provider by delivering best-in-class, future-proof solutions.",
      accent: "from-[#0077b6] to-[#00d4ff]",
      icon: "👁️"
    },
    {
      title: "Our Values",
      content: "Integrity, innovation, and customer-centricity are at the heart of our sustainable growth strategy for global clients.",
      accent: "from-[#0077b6] to-[#00d4ff]",
      icon: "💎"
    },
    {
      title: "Our Strategy",
      content: "Leveraging 27+ years of experience to translate complex technical needs into dependable, high-performance networking.",
      accent: "from-[#800000] to-[#b30000]",
      icon: "♟️"
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] font-sans text-slate-300 overflow-hidden">
      
      {/* 1. Cinematic Hero Section with Enhanced Visibility */}
      <section className="relative w-full h-[500px] md:h-[650px] flex items-center justify-center overflow-hidden">
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.img
            style={{ y: y1 }}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.45 }} // Increased opacity from 0.2 to 0.45
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000" 
            alt="Mission Background"
            className="w-full h-full object-cover grayscale-[20%]" // Reduced grayscale for more visibility
          />
          {/* Lighter Gradient Overlay to let image show through more */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/30 via-[#020617]/60 to-[#020617]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#00d4ff] font-mono text-sm tracking-[0.6em] uppercase mb-4 block drop-shadow-lg">
              Our DNA
            </span>
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-6 drop-shadow-2xl">
              PURPOSE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cc0000] to-[#00d4ff]">&</span> GOALS
            </h1>
            
            <div className="flex items-center justify-center space-x-4 text-xs font-bold uppercase tracking-widest text-slate-300 bg-black/40 backdrop-blur-md w-fit mx-auto px-6 py-3 rounded-full border border-white/10">
              <Link to="/" className="hover:text-[#cc0000] transition-colors">Home Page</Link>
              <span className="text-slate-600">/</span>
              <span className="text-white">Mission & Vision</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Interactive Mission Grid */}
      <section className="max-w-7xl mx-auto px-6 py-32 relative">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#800000]/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#0077b6]/15 blur-[120px] rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02, 
                rotateX: index % 2 === 0 ? 1 : -1,
                rotateY: index % 2 === 0 ? -1 : 1
              }}
              transition={{ duration: 0.5 }}
              className="group relative"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${card.accent} rounded-[2.5rem] opacity-0 group-hover:opacity-25 blur-2xl transition duration-500`} />
              
              <div className="relative h-full bg-[#030a1f]/80 border border-white/10 p-10 md:p-14 rounded-[2.5rem] overflow-hidden flex flex-col justify-between backdrop-blur-3xl shadow-2xl">
                <div className="flex justify-between items-start mb-12">
                   <div className="text-4xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{card.icon}</div>
                   <span className="text-slate-800 font-black text-6xl opacity-10 group-hover:opacity-40 group-hover:text-[#cc0000] transition-all duration-700">0{index + 1}</span>
                </div>

                <div className="relative z-10">
                  <div className={`w-12 h-1.5 bg-gradient-to-r ${card.accent} mb-8 group-hover:w-full transition-all duration-700 ease-in-out rounded-full`}></div>
                  <h2 className="text-4xl font-black text-white mb-6 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    {card.title}
                  </h2>
                  <p className="text-xl leading-relaxed text-slate-400 font-light group-hover:text-slate-200 transition-colors">
                    {card.content}
                  </p>
                </div>

                <div className={`absolute -right-4 -bottom-4 w-32 h-32 bg-gradient-to-br ${card.accent} opacity-5 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Corporate Philosophy - High Contrast Section */}
      <section className="relative py-44 bg-[#010409] overflow-hidden border-t border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#cc0000] to-transparent" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="text-7xl text-[#cc0000] opacity-40 font-serif mb-4 block leading-none italic">“</span>
            <blockquote className="text-3xl md:text-5xl font-extralight text-white leading-tight tracking-tighter mb-12">
              Our mission is not just to build infrastructure, but to build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cc0000] to-[#00d4ff] font-black italic">trust and lasting reliability</span> for every client we serve.
            </blockquote>
            <div className="flex flex-col items-center">
               <div className="h-16 w-[1px] bg-gradient-to-b from-[#00d4ff] to-transparent mb-6" />
               <p className="font-bold text-slate-400 tracking-[0.5em] uppercase text-xs">SCA IT Leadership Architecture</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Framework Diagram Placeholder */}
      <div className="py-24 bg-[#010409] flex justify-center px-6">
        <div className="max-w-4xl w-full p-1 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-3xl">
          <div className="bg-black/40 rounded-[calc(1.5rem-1px)] p-12 text-center border border-white/5">
            <h4 className="text-[#00d4ff] font-mono text-xs tracking-widest mb-4 uppercase">Strategic Framework</h4>
            <p className="text-slate-500 text-sm">Translating Global Standards into Local Infrastructure Excellence</p>
            
          </div>
        </div>
      </div>

      {/* Modern Mini Footer */}
      <footer className="py-12 bg-black text-center border-t border-white/5">
        <p className="text-[10px] tracking-[0.7em] text-slate-600 uppercase font-black">
          SCA IT Infrastructure • Precision • Performance • Protection
        </p>
      </footer>
    </div>
  );
};

export default MissionVision;