import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceHero from '../../components/ServiceHero';
import ServiceCTA from '../../components/ServiceCTA';


const DataCentre = () => {
    const serviceName = "Data Centre";
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
        "Your data center is the heart of your IT operations. We provide end-to-end data center solutions, from design and construction to maintenance and modernization. We focus on efficiency, reliability, and scalability to ensure your critical data is always available.",
        "Our services include precision cooling, power management, rack systems, and environmental monitoring. We help you build a data center that is energy-efficient and optimized for high-density computing.",
        "Whether you are building a new data center or upgrading an existing facility, our experts ensure that your infrastructure meets the highest standards of performance and security."
    ];

    return (
        <div className="bg-[#08080a] min-h-screen relative selection:bg-blue-500/30">

            {/* --- MINIMALIST AMBIENCE --- */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-900/20 blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10">
                <ServiceHero title={serviceName} />

                <section className="py-32 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                            {/* --- MINIMAL SIDEBAR --- */}
                            <aside className="lg:col-span-3 order-2 lg:order-1">
                                <div className="sticky top-40">
                                    <div className="text-[10px] font-black text-blue-500 tracking-[0.5em] uppercase mb-8 opacity-50">
                                        Infrastructure_Index
                                    </div>
                                    <nav className="space-y-4">
                                        {services.map((s) => {
                                            const isActive = location.pathname === s.to;
                                            return (
                                                <Link
                                                    key={s.to}
                                                    to={s.to}
                                                    className={`block text-xs font-bold uppercase tracking-widest transition-all duration-500 ${isActive ? "text-white pl-4 border-l-2 border-blue-600" : "text-slate-600 hover:text-slate-400 pl-0"}`}
                                                >
                                                    {s.name}
                                                </Link>
                                            );
                                        })}
                                    </nav>
                                </div>
                            </aside>

                            {/* --- BREATHING CONTENT --- */}
                            <div className="lg:col-span-9 order-1 lg:order-2 space-y-32">

                                {/* 1. OVERSIZED TYPOGRAPHY SECTION */}
                                <div className="max-w-3xl">
                                    <motion.h2
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-12"
                                    >
                                        The <span className="text-transparent stroke-white stroke-2" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Central</span> <br />
                                        <span className="text-blue-600">Nerve</span> Center
                                    </motion.h2>

                                    <div className="space-y-12">
                                        {overview.map((text, i) => (
                                            <motion.p
                                                key={i}
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: i * 0.2 }}
                                                className="text-slate-400 text-xl md:text-2xl leading-relaxed font-light"
                                            >
                                                {text}
                                            </motion.p>
                                        ))}
                                    </div>
                                </div>

                                {/* 2. MODULAR COMPONENT VISUAL */}

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                                    {[
                                        { label: "Precision Cooling", val: "N+1 Redundancy" },
                                        { label: "Power Systems", val: "Tier III Standards" },
                                        { label: "Rack Solutions", val: "High Density" }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ backgroundColor: "rgba(37, 99, 235, 0.05)" }}
                                            className="p-12 border border-white/5 bg-[#0c0c0e] transition-colors"
                                        >
                                            <div className="text-blue-500 font-mono text-xs mb-8">MODULE_0{i + 1}</div>
                                            <h4 className="text-white text-xl font-bold uppercase mb-2">{item.label}</h4>
                                            <p className="text-slate-500 text-sm font-mono tracking-tighter">{item.val}</p>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* 3. TECHNICAL SPECIFICATION BAR */}
                                <div className="relative py-20 border-y border-white/5 flex flex-col md:flex-row justify-between gap-12">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-slate-600 text-[10px] uppercase font-black tracking-widest">Environmental_Control</span>
                                        <span className="text-white text-4xl font-light">Integrated <span className="font-black">BMS</span></span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-slate-600 text-[10px] uppercase font-black tracking-widest">Scalability_Index</span>
                                        <span className="text-white text-4xl font-light">Future <span className="font-black">Ready</span></span>
                                    </div>
                                    {/* Abstract Line Animation */}
                                    <motion.div
                                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                        className="absolute right-0 top-1/2 w-32 h-[1px] bg-blue-600 hidden lg:block"
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <div className="mt-20">
                    <ServiceCTA />
                </div>

                <div className="pb-20 relative z-20">

                </div>
            </div>
        </div>
    );
};

export default DataCentre;