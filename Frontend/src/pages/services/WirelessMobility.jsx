import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceHero from '../../components/ServiceHero';
import ServiceCTA from '../../components/ServiceCTA';


const WirelessMobility = () => {
    const serviceName = "Wireless/Mobility";
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
        "In today's fast-paced business environment, mobility is key to productivity. Our Wireless and Mobility solutions entail designing and deploying secure, high-performance wireless networks that support the growing demand for mobile connectivity.",
        "We provide comprehensive site surveys, network design, and implementation services to ensure seamless coverage and capacity. Whether for a small office or a large campus, our solutions are scalable and robust, ensuring your team stays connected wherever they endure.",
        "Our expertise includes indoor and outdoor wireless access points, wireless controllers, and secure guest access management. We partner with leading OEMs to bring you the best technology the market has to offer."
    ];

    return (
        <div className="bg-[#020617] min-h-screen relative overflow-hidden selection:bg-cyan-500/30">

            {/* --- BACKGROUND SIGNAL WAVES --- */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{ backgroundImage: `radial-gradient(#38bdf8 1px, transparent 0)`, backgroundSize: '40px 40px' }}
                />
                {/* Pulsing Signal Circles */}
                <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cyan-500/20 rounded-full"
                />
            </div>

            <div className="relative z-10">
                <ServiceHero title={serviceName} />

                <section className="py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                            {/* SIDEBAR NAVIGATION */}
                            <aside className="lg:col-span-3 order-2 lg:order-1">
                                <div className="sticky top-32 space-y-2 bg-[#0b0f1a]/50 backdrop-blur-xl border border-white/5 p-6 rounded-2xl">
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
                                                        ? "bg-orange-500/10 border-orange-500/50 text-orange-400 shadow-[0_0_15px_rgba(234,88,12,0.1)]"
                                                        : "border-transparent text-slate-500 hover:text-white hover:bg-white/5"
                                                        }`}
                                                >
                                                    <span className="text-[11px] font-bold uppercase tracking-wider">{service.name}</span>
                                                    {isActive && <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />}
                                                </Link>
                                            );
                                        })}
                                    </nav>
                                </div>
                            </aside>

                            {/* MAIN CONTENT AREA */}
                            <div className="lg:col-span-9 order-1 lg:order-2 space-y-16">

                                {/* 1. SPECTRUM ANALYZER VISUAL (Feature Replacement for Image) */}
                                <div className="relative bg-[#0b0f1a] border border-white/10 rounded-2xl p-8 overflow-hidden group">
                                    <div className="flex flex-col md:flex-row items-center gap-12">

                                        {/* Animated Signal HUD */}
                                        <div className="w-full md:w-1/2 flex justify-center relative">
                                            <div className="relative">
                                                {[...Array(4)].map((_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                                                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
                                                        className="absolute inset-0 border border-cyan-500 rounded-full"
                                                    />
                                                ))}
                                                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                                                    <span className="text-3xl">📶</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Mobility Metrics */}
                                        <div className="w-full md:w-1/2 space-y-6">
                                            <div>
                                                <div className="flex justify-between text-[10px] font-mono text-cyan-500 mb-2">
                                                    <span>SIGNAL_STRENGTH</span>
                                                    <span>-42 dBm</span>
                                                </div>
                                                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: '92%' }}
                                                        className="h-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 pt-4">
                                                <div className="border border-white/5 bg-white/[0.02] p-4 rounded-xl">
                                                    <p className="text-[9px] text-slate-500 uppercase font-black">Roaming_Delay</p>
                                                    <p className="text-xl font-bold text-white tracking-tighter">&lt; 10ms</p>
                                                </div>
                                                <div className="border border-white/5 bg-white/[0.02] p-4 rounded-xl">
                                                    <p className="text-[9px] text-slate-500 uppercase font-black">Capacity</p>
                                                    <p className="text-xl font-bold text-orange-500 tracking-tighter">Unlimited</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Scanline Animation */}
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-500/20 shadow-[0_0_15px_#06b6d4] animate-scan-y" />
                                </div>

                                {/* 2. TEXT CONTENT */}
                                <div className="border-l-2 border-orange-600 pl-8">
                                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-10 leading-none">
                                        Wireless <br /> <span className="text-cyan-500 underline decoration-white/10 underline-offset-8">Mobility</span>
                                    </h2>
                                    <div className="space-y-8">
                                        {overview.map((text, i) => (
                                            <p key={i} className="text-slate-400 text-lg leading-relaxed font-medium">
                                                {text}
                                            </p>
                                        ))}
                                    </div>
                                    <div className="mt-12 flex flex-wrap gap-4">
                                        {["6GHz Spectrum", "Secure Guest Portal", "Mesh Architecture", "Campus Mobility"].map(tag => (
                                            <span key={tag} className="px-5 py-2 border border-white/10 rounded-lg text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 hover:border-cyan-500 hover:text-white transition-all cursor-default">
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
                    100% { transform: translateY(800%); }
                }
                .animate-scan-y {
                    animation: scan-y 8s linear infinite;
                }
            `}} />
        </div>
    );
};

export default WirelessMobility;