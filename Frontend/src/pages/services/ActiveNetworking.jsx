import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceHero from '../../components/ServiceHero';
import ServiceCTA from '../../components/ServiceCTA';


const ActiveNetworking = () => {
    const serviceName = "Active Networking";
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
        "Active Networking is the backbone of any modern IT infrastructure. It involves the switches, routers, and firewalls that actively direct data traffic within your network. We specialize in designing and implementing robust active networking solutions that ensure high availability, redundancy, and security.",
        "Our team of certified engineers works with top-tier networking hardware to build networks that are resilient and scalable. We assess your current infrastructure and future needs to design a solution that optimizes performance and minimizes latency.",
        "From core switching to edge routing, we handle every aspect of your active network. We also provide ongoing monitoring and maintenance to ensure your network remains healthy and secure against evolving threats."
    ];

    return (
        <div className="bg-[#020617] min-h-screen relative overflow-hidden selection:bg-cyan-500/30">

            {/* Background Data Flow Particles */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{ backgroundImage: `radial-gradient(#38bdf8 1px, transparent 0)`, backgroundSize: '40px 40px' }}
                />
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-[1px] h-[80px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-20"
                        initial={{ top: "-20%", left: `${Math.random() * 100}%` }}
                        animate={{ top: "120%" }}
                        transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
                    />
                ))}
            </div>

            <div className="relative z-10">
                <ServiceHero title={serviceName} />

                {/* --- MAIN GRID LAYOUT (Sidebar + Content) --- */}
                <section className="py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                            {/* LEFT SIDEBAR: SYSTEM DIRECTORY */}
                            <aside className="lg:col-span-3 order-2 lg:order-1">
                                <div className="sticky top-32 space-y-2 bg-[#0b0f1a]/50 backdrop-blur-xl border border-white/5 p-6 rounded-2xl shadow-2xl">
                                    <div className="flex items-center gap-2 mb-6 px-2">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Service_Directory</span>
                                    </div>

                                    <nav className="space-y-1">
                                        {services.map((service) => {
                                            const isActive = location.pathname === service.to;
                                            return (
                                                <Link
                                                    key={service.to}
                                                    to={service.to}
                                                    className={`group flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 border ${isActive
                                                        ? "bg-cyan-500/10 border-cyan-500/50 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                                                        : "border-transparent text-slate-500 hover:text-white hover:bg-white/5"
                                                        }`}
                                                >
                                                    <span className="text-[11px] font-bold uppercase tracking-wider">{service.name}</span>
                                                    {isActive && <motion.div layoutId="activeInd" className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />}
                                                </Link>
                                            );
                                        })}
                                    </nav>
                                </div>
                            </aside>

                            {/* RIGHT CONTENT: DASHBOARD & TEXT */}
                            <div className="lg:col-span-9 order-1 lg:order-2 space-y-16">

                                {/* 1. The Dashboard Feature */}
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                                    <div className="relative bg-[#0b0f1a] border border-white/10 rounded-2xl p-8 md:p-12 overflow-hidden">
                                        <div className="flex flex-col md:flex-row gap-10 items-center">
                                            {/* Live HUD Component */}
                                            <div className="w-full md:w-1/3">
                                                <div className="relative w-40 h-40 mx-auto">
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                                        className="absolute inset-0 border-2 border-dashed border-cyan-500/30 rounded-full"
                                                    />
                                                    <div className="absolute inset-4 border border-white/10 rounded-full flex items-center justify-center bg-[#020617]">
                                                        <div className="text-center">
                                                            <div className="text-2xl font-black text-white">99<span className="text-cyan-500">%</span></div>
                                                            <div className="text-[8px] font-mono text-slate-500 uppercase">Uptime_Stable</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* HUD Stats */}
                                            <div className="flex-1 space-y-6 w-full">
                                                <div className="flex justify-between items-end">
                                                    <span className="text-[10px] font-black text-cyan-500 uppercase tracking-widest">Global_Bandwidth</span>
                                                    <span className="text-white font-mono text-xs">88.4 GB/s</span>
                                                </div>
                                                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                                    <motion.div initial={{ width: 0 }} whileInView={{ width: '88%' }} className="h-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]" />
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                                        <div className="text-[9px] text-slate-500 uppercase mb-1">Latency</div>
                                                        <div className="text-xl font-bold text-orange-500">0.02ms</div>
                                                    </div>
                                                    <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                                        <div className="text-[9px] text-slate-500 uppercase mb-1">Packets</div>
                                                        <div className="text-xl font-bold text-white">4.2M/s</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent h-1/2 w-full animate-scan-y pointer-events-none" />
                                    </div>
                                </div>

                                {/* 2. Overview Text */}
                                <div className="border-l-2 border-orange-600 pl-8">
                                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-10 leading-none">
                                        Active <span className="text-cyan-500">Infrastructure</span>
                                    </h2>
                                    <div className="space-y-8">
                                        {overview.map((text, i) => (
                                            <p key={i} className="text-slate-400 text-lg leading-relaxed font-medium">
                                                {text}
                                            </p>
                                        ))}
                                    </div>
                                    <div className="mt-12 flex flex-wrap gap-4">
                                        {["Core Switching", "Edge Routing", "Cyber Security", "Load Balancing"].map(tag => (
                                            <span key={tag} className="px-5 py-2 border border-white/10 rounded-lg text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 hover:border-orange-500 hover:text-white transition-all">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <div className="border-y border-white/5 bg-[#0b0f1a]/40 backdrop-blur-xl">
                    <ServiceCTA />
                </div>

                <div className="pb-20 relative z-20">

                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes scan-y {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(200%); }
                }
                .animate-scan-y {
                    animation: scan-y 6s linear infinite;
                }
            `}} />
        </div>
    );
};

export default ActiveNetworking;