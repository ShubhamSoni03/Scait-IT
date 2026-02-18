import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceHero from '../../components/ServiceHero';
import ServiceCTA from '../../components/ServiceCTA';


const TouchPanelKiosk = () => {
    const serviceName = "Touch Panel and Kiosk";
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
        "Interactive touch panels and kiosks are transforming how businesses engage with customers and employees. We provide custom interactive solutions for wayfinding, self-service, information display, and collaborative workspaces.",
        "Our durable and responsive hardware is paired with intuitive software interfaces to deliver engaging user experiences. Whether for retail, hospitality, healthcare, or corporate environments, our kiosks serve multifold purposes efficiently.",
        "We handle the entire lifecycle, from hardware selection and installation to content management and maintenance, ensuring your interactive points remain operational and effective."
    ];

    return (
        <div className="bg-[#0f0716] min-h-screen relative overflow-hidden selection:bg-fuchsia-500/30">

            {/* --- AMBIENT FLUID BACKGROUND --- */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-fuchsia-600/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-violet-600/10 blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10">
                <ServiceHero title={serviceName} />

                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                            {/* SIDEBAR: NEON GLASS NAV */}
                            <aside className="lg:col-span-3 order-2 lg:order-1">
                                <div className="sticky top-32 p-[1px] bg-gradient-to-b from-fuchsia-500/30 to-transparent rounded-2xl">
                                    <div className="bg-[#1a0b2e]/80 backdrop-blur-2xl p-6 rounded-2xl space-y-6">
                                        <div className="flex items-center gap-2 px-2">
                                            <div className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full shadow-[0_0_8px_#d946ef]" />
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Interface_Menu</span>
                                        </div>
                                        <nav className="flex flex-col gap-1">
                                            {services.map((s) => {
                                                const isActive = location.pathname === s.to;
                                                return (
                                                    <Link key={s.to} to={s.to} className={`px-4 py-3 rounded-xl text-[11px] font-bold uppercase transition-all ${isActive ? "bg-fuchsia-500/20 text-fuchsia-400 shadow-inner" : "text-slate-500 hover:text-white hover:bg-white/5"}`}>
                                                        {s.name}
                                                    </Link>
                                                );
                                            })}
                                        </nav>
                                    </div>
                                </div>
                            </aside>

                            {/* MAIN CONTENT AREA */}
                            <div className="lg:col-span-9 order-1 lg:order-2 space-y-20">

                                {/* 1. INTERACTIVE MOCKUP VISUAL */}

                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600 blur-2xl opacity-10 group-hover:opacity-20 transition-opacity" />
                                    <div className="relative bg-[#1a0b2e] border border-white/10 rounded-[2.5rem] p-1 shadow-2xl overflow-hidden">
                                        <div className="bg-[#0f0716] rounded-[2.3rem] p-10 md:p-16 flex flex-col md:flex-row gap-12 items-center">
                                            {/* Simulated Touch Panel */}
                                            <div className="w-full md:w-1/2 aspect-video bg-[#1a0b2e] rounded-xl border border-fuchsia-500/30 relative flex items-center justify-center overflow-hidden shadow-2xl">
                                                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-transparent" />
                                                <div className="grid grid-cols-2 gap-4 p-6 w-full h-full relative z-10">
                                                    {[...Array(4)].map((_, i) => (
                                                        <motion.div
                                                            key={i}
                                                            whileHover={{ scale: 1.05 }}
                                                            className="bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-[8px] text-fuchsia-400 font-mono tracking-tighter text-center px-2"
                                                        >
                                                            TOUCH_MODULE_0{i + 1}
                                                        </motion.div>
                                                    ))}
                                                </div>
                                                <motion.div
                                                    animate={{ x: [0, 50, -30, 0], y: [0, -40, 20, 0] }}
                                                    transition={{ duration: 5, repeat: Infinity }}
                                                    className="absolute w-8 h-8 bg-fuchsia-500/20 blur-xl rounded-full"
                                                />
                                            </div>

                                            {/* Quick Specs */}
                                            <div className="w-full md:w-1/2 space-y-6">
                                                <h4 className="text-white text-3xl font-black uppercase tracking-tighter">Ultra-Responsive <br /> <span className="text-fuchsia-500">Interfaces</span></h4>
                                                <div className="space-y-4">
                                                    {["10-Point Multi-Touch", "4K Crystal Display", "24/7 Hardened Glass"].map(spec => (
                                                        <div key={spec} className="flex items-center gap-3 text-slate-400">
                                                            <div className="w-4 h-[1px] bg-fuchsia-500" />
                                                            <span className="text-xs font-bold uppercase tracking-widest">{spec}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. OVERVIEW TEXT WITH FLUID ACCENTS */}
                                <div className="relative">
                                    <div className="absolute -left-12 top-0 text-[120px] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter">
                                        TOUCH
                                    </div>
                                    <motion.h2
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-12 relative z-10"
                                    >
                                        Human <br /> <span className="text-fuchsia-500 italic">Experience</span>
                                    </motion.h2>

                                    <div className="space-y-12 relative z-10 max-w-4xl">
                                        {overview.map((text, i) => (
                                            <motion.p
                                                key={i}
                                                initial={{ opacity: 0, x: 20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.2 }}
                                                className="text-slate-400 text-xl md:text-2xl font-light leading-relaxed"
                                            >
                                                {text}
                                            </motion.p>
                                        ))}
                                    </div>
                                </div>

                                {/* 3. USAGE NODES */}
                                <div className="flex flex-wrap gap-4 py-12 border-y border-white/5">
                                    {["Wayfinding", "Self-Checkout", "Digital Concierge", "Lobby Display"].map((tag) => (
                                        <span key={tag} className="px-6 py-3 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/5 text-fuchsia-300 text-[10px] font-black uppercase tracking-widest hover:bg-fuchsia-500 hover:text-white transition-all cursor-default">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="border-t border-white/5 bg-[#1a0b2e]/40 backdrop-blur-xl">
                    <ServiceCTA />
                </div>

                <div className="pb-20 relative z-20">

                </div>
            </div>
        </div>
    );
};

export default TouchPanelKiosk;