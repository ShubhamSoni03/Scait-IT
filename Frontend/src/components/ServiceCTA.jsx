import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServiceCTA = () => {
    return (
        <section className="relative w-full py-20 md:py-28 bg-[#020617] overflow-hidden">
            {/* --- TECH BACKGROUND ELEMENTS --- */}
            <div className="absolute inset-0 z-0">
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" 
                    style={{ backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
                />
                {/* Glowing Ambient Orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/10 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="relative group p-8 md:p-16 bg-[#0b0f1a]/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                    
                    {/* Animated Border Accent */}
                    <div className="absolute top-0 left-0 w-24 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-700" />
                    <div className="absolute bottom-0 right-0 w-24 h-[2px] bg-cyan-500 group-hover:w-full transition-all duration-700" />

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        
                        {/* LEFT: TEXT CONTENT */}
                        <div className="flex flex-col items-start text-left max-w-2xl">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-3 mb-4"
                            >
                                <span className="w-12 h-[1px] bg-orange-500" />
                                <span className="text-orange-500 font-black tracking-[0.4em] text-[10px] md:text-xs uppercase">
                                    Strategic_IT_Partnership
                                </span>
                            </motion.div>
                            
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
                                Need High-Tech <span className="text-cyan-500 italic">Advisory</span> <br /> For Your Business?
                            </h2>
                            
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                                        <span className="text-orange-500 animate-pulse">☎</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Immediate_Response</p>
                                        <p className="text-xl text-white font-mono font-bold tracking-tighter">+020-69034270</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: INTERACTIVE BUTTON */}
                        <div className="relative flex-shrink-0">
                            {/* Pulse Rings */}
                            <div className="absolute inset-0 scale-110 bg-orange-500/20 rounded-xl blur-xl animate-pulse" />
                            
                            <Link to="/contact">
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative px-10 py-5 bg-orange-600 text-white font-black text-xs uppercase tracking-[0.3em] overflow-hidden group shadow-[0_0_30px_rgba(234,88,12,0.3)] border border-orange-500"
                                >
                                    {/* Slide-over effect */}
                                    <div className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                                    
                                    <span className="relative z-10 group-hover:text-orange-600 transition-colors duration-300 flex items-center gap-3">
                                        Get A Free Quote 
                                        <span className="text-lg group-hover:translate-x-2 transition-transform">→</span>
                                    </span>
                                </motion.button>
                            </Link>
                        </div>
                    </div>

                    {/* Background "Ghost" Text for Tech feel */}
                    <div className="absolute -bottom-10 -right-10 text-[120px] font-black text-white/[0.02] pointer-events-none select-none">
                        SCA_IT
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceCTA;