import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import certificate1 from "../assets/Certificate/certificate1.jpeg"; 
import certificate2 from "../assets/Certificate/certificate2.jpeg";
import C3 from "../assets/Certificate/C3.jpeg";
import C4 from "../assets/Certificate/C4.jpeg";
import C5 from "../assets/Certificate/C5.jpeg";
import C6 from "../assets/Certificate/C6.jpeg";
import C7 from "../assets/Certificate/C7.jpeg";
import C8 from "../assets/Certificate/C8.jpeg";
import C9 from "../assets/Certificate/C9.jpeg";
import C10 from "../assets/Certificate/C10.jpeg";

export default function Certificate() {
  const certificateList = [
    { id: 1, src: certificate1, title: "ISO 9001:2015 Quality Management", code: "AUTH_SEC_01" },
    { id: 2, src: certificate2, title: "ISO 27001 Information Security", code: "AUTH_SEC_02" },
    { id: 3, src: C3, title: "Network Infrastructure Specialist", code: "AUTH_SEC_03" },
    { id: 4, src: C4, title: "System Deployment Certification", code: "AUTH_SEC_04" },
    { id: 5, src: C5, title: "Advanced Security Systems", code: "AUTH_SEC_05" },
    { id: 6, src: C6, title: "Data Centre Design Expert", code: "AUTH_SEC_06" },
    { id: 7, src: C7, title: "Structured Cabling Specialist", code: "AUTH_SEC_07" },
    { id: 8, src: C8, title: "Audio Visual Solutions Pro", code: "AUTH_SEC_08" },
    { id: 9, src: C9, title: "Industrial Computing Standard", code: "AUTH_SEC_09" },
    { id: 10, src: C10, title: "Wireless Mobility Certification", code: "AUTH_SEC_10" }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white pt-40 pb-20">
      {/* 1. Header Section */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-4xl border-l-4 border-orange-600 pl-8">
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-cyan-500 font-mono text-[11px] tracking-[0.5em] uppercase mb-2"
          >
            Terminal // Compliance_Directory
          </motion.p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic">
            Certifications<span className="text-orange-600">_</span>
          </h1>
        </div>
      </section>

      {/* 2. Grid Section - 2 Photos Per Row */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {certificateList.map((cert, index) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card Frame */}
              <div className="relative bg-[#0b0f1a] border border-white/5 p-4 rounded-sm transition-all duration-500 group-hover:border-cyan-500/40">
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-600 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-600 opacity-0 group-hover:opacity-100 transition-all duration-300" />

                {/* Image Container */}
                <div className="relative aspect-[16/10] bg-[#020617] overflow-hidden flex items-center justify-center p-8">
                  <img
                    src={cert.src}
                    alt={cert.title}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-95 group-hover:scale-100"
                  />
                  
                  {/* Cyber Scan Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 group-hover:animate-scan" />
                </div>

                {/* Info Bar */}
                <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-white/5 pt-6 px-2">
                  <div className="flex flex-col">
                    <span className="text-cyan-500 font-mono text-[10px] mb-1">ID: {cert.code}</span>
                    <h3 className="text-lg font-black uppercase tracking-widest text-white leading-tight">
                      {cert.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-slate-500 group-hover:text-orange-500 transition-colors uppercase">Verified</span>
                    <div className="w-2 h-2 rounded-full bg-orange-600 shadow-[0_0_10px_#ea580c]" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Global Styles for Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}} />
    </div>
  );
}