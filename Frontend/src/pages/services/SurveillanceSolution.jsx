import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceHero from '../../components/ServiceHero';
import ServiceCTA from '../../components/ServiceCTA';


const SurveillanceSolution = () => {
    const serviceName = "Surveillance Solution";
    const location = useLocation();

    const services = [
        { name: "Active Networking", to: "/services/active-networking" },
        { name: "Wireless / Mobility", to: "/services/wireless-mobility" },
        { name: "Structured Cabling", to: "/services/structured-cabling" },
        { name: "Surveillance Solution", to: "/services/surveillance-solution" },
        { name: "Data Centre", to: "/services/data-centre" },
        { name: "Audio / Video Solutions", to: "/services/audio-video-solutions" },
        { name: "Access Control System", to: "/services/access-control-system" },
        { name: "Touch Panel & Kiosk", to: "/services/touch-panel-kiosk" },
        { name: "Deployment Solutions", to: "/services/deployment-solutions" },
        { name: "Industrial PC", to: "/services/industrial-pc" },
    ];

    const overview = [
        "Security is paramount for any organization. Our Surveillance Solutions provide advanced monitoring capabilities to protect your assets, employees, and premises. We utilize the latest IP camera technology and video management systems to deliver crystal-clear footage and intelligent analytics.",
        "We design surveillance systems that are tailored to your specific security needs, from single-site installations to multi-location enterprise deployments. Our solutions include remote monitoring, motion detection, and automated alerts.",
        "Beyond just recording, our modern surveillance systems can provide valuable business insights through heat mapping and people counting, adding value to your security investment."
    ];

    return (
        <div className="bg-[#050505] min-h-screen relative overflow-hidden selection:bg-red-900 selection:text-white">

            {/* --- ANIMATED OVERLAY: CCTV SCANLINES --- */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
            </div>

            <div className="relative z-10">
                <ServiceHero title={serviceName} />

                <section className="py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                            {/* --- TACTICAL SIDEBAR NAVIGATION --- */}
                            <aside className="lg:col-span-4 order-2 lg:order-1">
                                <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-sm relative overflow-hidden group">
                                    {/* Red Security Glow */}
                                    <div className="absolute -top-24 -left-24 w-48 h-48 bg-red-600/10 blur-[80px] group-hover:bg-red-600/20 transition-all duration-700" />

                                    <h3 className="text-red-600 font-black text-xs uppercase tracking-[0.5em] mb-10 flex items-center gap-4">
                                        <span className="w-8 h-[1px] bg-red-600" /> System_Nodes
                                    </h3>

                                    <div className="grid grid-cols-1 gap-2">
                                        {services.map((s) => {
                                            const isActive = location.pathname === s.to;
                                            return (
                                                <Link
                                                    key={s.to}
                                                    to={s.to}
                                                    className={`relative px-4 py-4 transition-all duration-300 group/item ${isActive ? "bg-red-600/10 text-white" : "text-slate-500 hover:text-slate-200"}`}
                                                >
                                                    {/* Corner Brackets on Hover/Active */}
                                                    {(isActive || location.pathname !== s.to) && (
                                                        <div className={`absolute inset-0 opacity-0 group-hover/item:opacity-100 ${isActive ? 'opacity-100' : ''} transition-opacity`}>
                                                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-600" />
                                                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-600" />
                                                        </div>
                                                    )}
                                                    <span className="text-[10px] font-black uppercase tracking-widest">{s.name}</span>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </aside>

                            {/* --- MAIN CONTENT: THE VIRTUAL MONITOR --- */}
                            <div className="lg:col-span-8 order-1 lg:order-2">
                                <div className="space-y-12">

                                    {/* 1. VISUAL: MULTI-VIEW ANALYTICS */}
                                    <div className="grid grid-cols-2 gap-4 h-[400px]">
                                        <motion.div
                                            whileHover={{ scale: 0.98 }}
                                            className="relative bg-[#0a0a0a] border border-white/5 rounded-tl-[40px] overflow-hidden group"
                                        >
                                            <div className="absolute top-4 left-6 z-20 flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping" />
                                                <span className="text-[9px] font-mono text-red-500 font-bold uppercase">Cam_01_Core</span>
                                            </div>
                                            <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80"
                                                className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
                                                alt="CCTV" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
                                        </motion.div>

                                        <div className="grid grid-rows-2 gap-4">
                                            <div className="bg-red-600/5 border border-red-600/20 p-6 relative overflow-hidden group">
                                                <div className="absolute top-0 right-0 p-2 text-[8px] font-mono text-red-600/40 tracking-[0.3em]">AI_PROC_ACTIVE</div>
                                                <h4 className="text-white text-lg font-black uppercase italic mb-2">Neural_Analytics</h4>
                                                <p className="text-slate-500 text-[10px] leading-relaxed uppercase tracking-widest">Face recognition & Object tracking algorithms initialized.</p>
                                                <div className="mt-4 h-[1px] w-full bg-white/5 relative overflow-hidden">
                                                    <motion.div
                                                        animate={{ x: ['-100%', '100%'] }}
                                                        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                                                        className="absolute inset-0 bg-red-600 w-1/3"
                                                    />
                                                </div>
                                            </div>
                                            <div className="bg-[#0a0a0a] border border-white/5 p-6 flex items-center justify-center">
                                                <div className="text-center">
                                                    <div className="text-4xl font-black text-white italic">24/7</div>
                                                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.4em] mt-2">Persistence</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 2. TEXTUAL CONTENT */}
                                    <div className="relative pt-10">
                                        <motion.h2
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-10"
                                        >
                                            Intelligent <span className="text-red-700">Shield</span>
                                        </motion.h2>

                                        <div className="space-y-10 border-r border-white/5 pr-10">
                                            {overview.map((text, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.2 }}
                                                    className="relative"
                                                >
                                                    <div className="text-[10px] font-mono text-red-700 mb-2 font-bold tracking-widest">ENCRYPTED_DATA_PACKET_{i + 1}</div>
                                                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium hover:text-white transition-colors">
                                                        {text}
                                                    </p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Technical Specs Footer */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10 border-t border-white/5">
                                        {["4K Resolution", "Night Vision", "Motion Alerts", "Cloud Archiving"].map(spec => (
                                            <div key={spec} className="text-center group">
                                                <div className="text-[9px] font-black text-slate-600 uppercase tracking-widest group-hover:text-red-600 transition-colors">{spec}</div>
                                                <div className="h-[1px] w-0 group-hover:w-full bg-red-600 mx-auto mt-2 transition-all duration-500" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="border-y border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
                    <ServiceCTA />
                </div>

                <div className="pb-20 relative z-20">

                </div>
            </div>

            {/* Global Glitch Style */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes glitch-red {
                    0% { text-shadow: 2px 0 0 red, -2px 0 0 blue; }
                    100% { text-shadow: -2px 0 0 red, 2px 0 0 blue; }
                }
                .glitch-text:hover {
                    animation: glitch-red 0.3s infinite;
                }
            `}} />
        </div>
    );
};

export default SurveillanceSolution;