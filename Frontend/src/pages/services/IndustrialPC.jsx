import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceHero from '../../components/ServiceHero';
import ServiceCTA from '../../components/ServiceCTA';


const IndustrialPC = () => {
    const serviceName = "Industrial PC";
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
        "Industrial environments require computing hardware that is rugged and reliable. Our Industrial PC solutions are built to withstand harsh conditions, including extreme temperatures, dust, vibration, and moisture.",
        "We offer a wide range of industrial computers, from fanless box PCs to panel PCs and rackmount systems. These systems are designed for long lifecycles and high availability, making them ideal for automation, manufacturing, and process control.",
        "We customize configurations to meet your specific application requirements, ensuring you have the processing power and connectivity needed for your mission-critical operations."
    ];

    return (
        <div className="bg-[#0c0d0e] min-h-screen relative overflow-hidden selection:bg-orange-500/30">

            {/* --- INDUSTRIAL BACKGROUND: SYSTEM LOGS --- */}
            <div className="fixed inset-0 z-0 pointer-events-none flex justify-around opacity-[0.03]">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="text-[10px] font-mono text-orange-500 whitespace-nowrap [writing-mode:vertical-rl] animate-marquee-vertical">
                        CORE_TEMP_STABLE // VOLTAGE_NOMINAL // VIBRATION_SHIELD_ACTIVE // FANLESS_MODE_ON //
                    </div>
                ))}
            </div>

            <div className="relative z-10">
                <ServiceHero title={serviceName} />

                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                            {/* SIDEBAR: STEEL FRAME NAV */}
                            <aside className="lg:col-span-3 order-2 lg:order-1">
                                <div className="sticky top-32 border-2 border-[#1e2022] bg-[#141618] p-1 shadow-2xl">
                                    <div className="border border-white/5 p-6 space-y-8">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 bg-orange-600 rounded-sm rotate-45" />
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Hardware_Spec</span>
                                        </div>
                                        <nav className="flex flex-col gap-2">
                                            {services.map((s) => {
                                                const isActive = location.pathname === s.to;
                                                return (
                                                    <Link key={s.to} to={s.to} className={`group flex items-center gap-3 px-3 py-2 text-[11px] font-bold uppercase transition-all ${isActive ? "text-orange-500 bg-orange-500/5" : "text-slate-500 hover:text-white"}`}>
                                                        <div className={`w-1 h-1 rounded-full ${isActive ? "bg-orange-500 animate-pulse" : "bg-slate-800"}`} />
                                                        {s.name}
                                                    </Link>
                                                );
                                            })}
                                        </nav>
                                    </div>
                                </div>
                            </aside>

                            {/* MAIN CONTENT AREA */}
                            <div className="lg:col-span-9 order-1 lg:order-2 space-y-24">

                                {/* 1. RUGGED CHASSIS VISUAL */}

                                <div className="relative p-1 bg-[#1e2022] rounded-lg group">
                                    <div className="bg-[#0c0d0e] p-10 md:p-16 relative overflow-hidden">
                                        {/* Bolted Corner Accents */}
                                        <div className="absolute top-4 left-4 w-2 h-2 bg-white/10 rounded-full" />
                                        <div className="absolute top-4 right-4 w-2 h-2 bg-white/10 rounded-full" />
                                        <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/10 rounded-full" />
                                        <div className="absolute bottom-4 right-4 w-2 h-2 bg-white/10 rounded-full" />

                                        <div className="flex flex-col md:flex-row items-center gap-16">
                                            {/* Hardware Illustration */}
                                            <div className="w-full md:w-1/2 flex justify-center">
                                                <div className="relative w-64 h-48 bg-[#1e2022] rounded shadow-[20px_20px_0px_#141618] border-t border-white/10">
                                                    <div className="absolute inset-0 flex flex-col justify-around px-8">
                                                        {[...Array(6)].map((_, i) => (
                                                            <div key={i} className="h-[2px] w-full bg-black/40 shadow-inner" />
                                                        ))}
                                                    </div>
                                                    <motion.div
                                                        animate={{ opacity: [0.1, 0.4, 0.1] }}
                                                        transition={{ duration: 3, repeat: Infinity }}
                                                        className="absolute inset-0 bg-orange-600/10"
                                                    />
                                                </div>
                                            </div>

                                            {/* Durability Stats */}
                                            <div className="w-full md:w-1/2 space-y-8">
                                                <div className="inline-block px-3 py-1 border border-orange-600/30 text-orange-500 text-[9px] font-black uppercase tracking-widest">In_Field_Reliability</div>
                                                <h4 className="text-white text-4xl font-black uppercase leading-none tracking-tighter">Built for <br /> <span className="text-orange-600 italic">Extreme_Ops</span></h4>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="border-l-2 border-slate-800 pl-4">
                                                        <p className="text-white font-bold text-sm">-40°C ~ +85°C</p>
                                                        <p className="text-slate-500 text-[9px] uppercase font-bold">Thermal_Range</p>
                                                    </div>
                                                    <div className="border-l-2 border-slate-800 pl-4">
                                                        <p className="text-white font-bold text-sm">IP67 / IK10</p>
                                                        <p className="text-slate-500 text-[9px] uppercase font-bold">Ingress_Rating</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. CONTENT SECTIONS */}
                                <div className="space-y-16">
                                    <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.8]">
                                        Rugged <br /> <span className="text-slate-700">Reliable</span>
                                    </h2>

                                    <div className="grid gap-16 border-t border-white/5 pt-16">
                                        {overview.map((text, i) => (
                                            <div key={i} className="flex flex-col md:flex-row gap-8 items-baseline group">
                                                <span className="text-orange-600 font-mono text-xl font-bold opacity-30 group-hover:opacity-100 transition-opacity tracking-tighter">0{i + 1} //</span>
                                                <p className="text-slate-400 text-xl md:text-2xl leading-relaxed font-medium">
                                                    {text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 3. INDUSTRIAL ICON BAR */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5">
                                    {["Fanless Design", "Shock Resistant", "Dust Proof", "Long Lifecycle"].map((label) => (
                                        <div key={label} className="bg-[#0c0d0e] py-10 px-4 text-center group">
                                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-orange-500 transition-colors">{label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="border-y-4 border-[#1e2022] bg-[#141618]">
                    <ServiceCTA />
                </div>

                <div className="pb-20 relative z-20">

                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee-vertical {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
                .animate-marquee-vertical {
                    animation: marquee-vertical 20s linear infinite;
                }
            `}} />
        </div>
    );
};

export default IndustrialPC;