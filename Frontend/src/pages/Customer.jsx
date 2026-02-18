import React from "react";
import { motion } from "framer-motion";
import ServiceHero from "../components/ServiceHero";

export default function Customers() {
  const customerList = [
    { id: 1, name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
    // { id: 2, name: 'Hikvision', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Hikvision_logo.svg' },
    { id: 3, name: 'Dell', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg' },
    { id: 4, name: 'HP', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg' },
    // { id: 5, name: 'Honeywell', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Honeywell_logo.svg' },
    // { id: 6, name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
    { id: 7, name: 'Lenovo', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg' },
    // { id: 8, name: 'D-Link', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/66/D-Link_logo.svg' },
  ];

  return (
    <div className="min-h-screen bg-[#030712] overflow-hidden">
      {/* 1. Dynamic Hero Section */}
      <ServiceHero title="Our Customers" />

      {/* 2. Main Grid Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-24">

        {/* Background Decorative Element - Floating Grid */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>

        {/* Section Header */}
        <div className="relative z-10 flex flex-col items-center mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 border border-orange-500/30 rounded-full mb-4"
          >
            <span className="text-orange-500 text-[10px] font-black uppercase tracking-[0.5em]">
              Verified Partnerships
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase italic tracking-tighter">
            Delivering <span className="text-transparent stroke-white">Excellence</span>
          </h2>
        </div>

        {/* --- DYNAMIC CUSTOMER GRID --- */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          {customerList.map((customer, idx) => (
            <motion.div
              key={customer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Technical Frame Decoration */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-orange-600/30 group-hover:border-orange-500 transition-colors" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-white/10 group-hover:border-cyan-500 transition-colors" />

              {/* Main Card */}
              <div className="relative overflow-hidden bg-white/[0.02] border border-white/10 rounded-2xl backdrop-blur-md p-10 flex flex-col items-center justify-center transition-all group-hover:bg-white/[0.05] group-hover:border-orange-500/50">

                {/* Background Scanning Animation (Specific to Card) */}
                <motion.div
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-orange-500/[0.03] to-transparent skew-x-12 pointer-events-none"
                />

                {/* Logo Image */}
                <div className="relative h-48 w-full flex items-center justify-center">
                  <img
                    src={customer.logo}
                    alt={customer.name}
                    className="max-h-full max-w-[80%] object-contain filter grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Bottom Labeling HUD */}
                <div className="w-full mt-8 pt-6 border-t border-white/5 flex items-end justify-between">
                  <div className="space-y-1">
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Client_Identity</p>
                    <h4 className="text-white font-black text-lg uppercase tracking-tight group-hover:text-orange-500 transition-colors">
                      {customer.name}
                    </h4>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Sector</p>
                    <p className="text-cyan-500 font-bold text-xs uppercase">{customer.sector}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Global CSS for Stroke effect */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .stroke-white {
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
        }
      `}} />
    </div>
  );
}