import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceHero from '../../components/ServiceHero';
import ServiceCTA from '../../components/ServiceCTA';


const AudioVideoSolutions = () => {
    const serviceName = "Audio/Video Solutions";
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
        "Effective communication requires clear and reliable audio-visual technology. Our Audio/Video Solutions are designed to enhance collaboration and engagement in conference rooms, boardrooms, and training centers.",
        "We integrate high-definition displays, video conferencing systems, professional audio equipment, and intuitive control systems. Our goal is to create seamless user experiences that make virtual meetings feel as natural as face-to-face interactions.",
        "From digital signage to large-scale projection systems, we provide AV solutions that communicate your message with impact and clarity."
    ];

    return (
        <div className="bg-[#02040a] min-h-screen relative overflow-hidden selection:bg-teal-500/30">

            {/* --- AUDIO FREQUENCY BACKGROUND --- */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-10">
                <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                        animate={{
                            d: [
                                "M0,500 Q250,400 500,500 T1000,500",
                                "M0,500 Q250,600 500,500 T1000,500",
                                "M0,500 Q250,400 500,500 T1000,500"
                            ]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        stroke="#2dd4bf" strokeWidth="1" fill="transparent"
                    />
                </svg>
            </div>

            <div className="relative z-10">
                <ServiceHero title={serviceName} />

                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                            {/* SIDEBAR: MINIMAL SIGNAL NAV */}
                            <aside className="lg:col-span-3 order-2 lg:order-1">
                                <div className="sticky top-32 space-y-2">
                                    <div className="flex items-center gap-2 mb-6 text-teal-500 font-mono text-[10px] tracking-[0.3em]">
                                        <div className="flex gap-1">
                                            {[...Array(3)].map((_, i) => (
                                                <motion.div key={i} animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, delay: i * 0.2 }} className="w-1 bg-teal-500" />
                                            ))}
                                        </div>
                                        INPUT_SOURCE
                                    </div>
                                    <nav className="space-y-1">
                                        {services.map((s) => {
                                            const isActive = location.pathname === s.to;
                                            return (
                                                <Link
                                                    key={s.to}
                                                    to={s.to}
                                                    className={`block px-4 py-3 rounded-md text-[11px] font-bold uppercase transition-all ${isActive ? "bg-teal-500/10 text-teal-400 border-r-2 border-teal-500" : "text-slate-600 hover:text-white"}`}
                                                >
                                                    {s.name}
                                                </Link>
                                            );
                                        })}
                                    </nav>
                                </div>
                            </aside>

                            {/* MAIN CONTENT AREA */}
                            <div className="lg:col-span-9 order-1 lg:order-2 space-y-24">

                                {/* 1. STUDIO DISPLAY VISUAL (21:9 Aspect Ratio) */}

                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                                    <div className="relative bg-[#080c14] border border-white/5 rounded-2xl overflow-hidden aspect-[21/9] flex items-center justify-center">
                                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-[2s]" />

                                        {/* Playhead / Signal UI Overlay */}
                                        <div className="relative z-10 w-full px-12 flex justify-between items-end pb-8 h-full">
                                            <div className="space-y-1">
                                                <p className="text-teal-400 font-mono text-[10px]">4K_UHD_STREAM</p>
                                                <div className="flex gap-4">
                                                    <div className="w-12 h-1 bg-teal-500" />
                                                    <div className="w-12 h-1 bg-white/20" />
                                                    <div className="w-12 h-1 bg-white/20" />
                                                </div>
                                            </div>
                                            <div className="text-white/20 font-black text-6xl tracking-widest uppercase">Live_AV</div>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. CONTENT SECTIONS */}
                                <div className="max-w-4xl">
                                    <motion.h2
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.8] mb-12"
                                    >
                                        Immersive <br /> <span className="text-teal-500">Clarity.</span>
                                    </motion.h2>

                                    <div className="space-y-12 border-l border-white/5 pl-8 md:pl-12">
                                        {overview.map((text, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: 20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.2 }}
                                                className="group"
                                            >
                                                <p className="text-slate-400 text-xl md:text-2xl font-light leading-relaxed group-hover:text-white transition-colors">
                                                    {text}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* 3. FEATURE CARDS: SIGNAL FLOW */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { label: "Visual Systems", desc: "Large Scale Projection & LED Displays" },
                                        { label: "Audio Fidelity", desc: "Acoustic Treatment & Spatial Audio" },
                                        { label: "Smart Control", desc: "Centralized Automation & Logic" }
                                    ].map((item, i) => (
                                        <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-xl hover:border-teal-500/30 transition-all group">
                                            <div className="text-teal-500 text-xs font-mono mb-4">0{i + 1}</div>
                                            <h4 className="text-white font-bold uppercase tracking-widest mb-2">{item.label}</h4>
                                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="border-y border-white/5 bg-[#080c14]/50 backdrop-blur-xl">
                    <ServiceCTA />
                </div>

                <div className="pb-20 relative z-20">

                </div>
            </div>
        </div>
    );
};

export default AudioVideoSolutions;