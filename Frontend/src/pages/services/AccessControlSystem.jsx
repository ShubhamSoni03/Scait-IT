import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceHero from '../../components/ServiceHero';
import ServiceCTA from '../../components/ServiceCTA';


const AccessControlSystem = () => {
    const serviceName = "Access Control System";
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
        "Controlling who enters your facility is a fundamental aspect of security. We offer sophisticated Access Control Systems that allow you to manage and monitor movement within your premises effectively.",
        "Our solutions range from simple card readers to advanced biometric systems and mobile access credentials. You can easily grant or revoke access rights, track employee attendance, and integrate with other security systems.",
        "We prioritize user convenience without compromising security, ensuring a smooth flow of authorized personnel while keeping unauthorized individuals out."
    ];

    return (
        <div className="bg-[#020617] min-h-screen relative overflow-hidden selection:bg-cyan-500/30">

            {/* --- CYBER-VAULT OVERLAY: FLOATING HEXAGONS --- */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
                <svg className="w-full h-full">
                    <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                        <path d="M25 0 L50 14.4 L50 43.4 L25 57.8 L0 43.4 L0 14.4 Z" fill="none" stroke="#0ea5e9" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#hexagons)" />
                </svg>
            </div>

            <div className="relative z-10">
                <ServiceHero title={serviceName} />

                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                            {/* --- SIDEBAR: ENCRYPTED NAV --- */}
                            <aside className="lg:col-span-3 order-2 lg:order-1">
                                <div className="sticky top-32">
                                    <div className="bg-[#0b0f1a] border border-cyan-500/20 p-6 rounded-lg relative overflow-hidden group">
                                        {/* Security Scanner Line Animation */}
                                        <motion.div
                                            animate={{ top: ['0%', '100%', '0%'] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                            className="absolute left-0 right-0 h-[2px] bg-cyan-500 shadow-[0_0_15px_#0ea5e9] z-20 opacity-30"
                                        />

                                        <h3 className="text-cyan-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-8 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-cyan-500 animate-pulse" /> Security_Levels
                                        </h3>

                                        <nav className="flex flex-col gap-1">
                                            {services.map((s) => {
                                                const isActive = location.pathname === s.to;
                                                return (
                                                    <Link
                                                        key={s.to}
                                                        to={s.to}
                                                        className={`group flex flex-col px-3 py-3 transition-all ${isActive ? "bg-cyan-500/10 border-l-2 border-cyan-500" : "hover:bg-white/5 border-l-2 border-transparent"}`}
                                                    >
                                                        <span className={`text-[10px] font-black uppercase tracking-widest ${isActive ? "text-cyan-400" : "text-slate-500 group-hover:text-slate-300"}`}>
                                                            {s.name}
                                                        </span>
                                                        <span className="text-[7px] font-mono text-slate-600 mt-1 uppercase">Auth_Required</span>
                                                    </Link>
                                                );
                                            })}
                                        </nav>
                                    </div>
                                </div>
                            </aside>

                            {/* --- MAIN CONTENT: BIOMETRIC INTERFACE --- */}
                            <div className="lg:col-span-9 order-1 lg:order-2 space-y-20">

                                {/* 1. TOP INTERACTIVE VISUAL */}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="relative p-8 bg-[#0b0f1a] border border-white/5 rounded-2xl overflow-hidden group"
                                    >
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-600 to-transparent" />
                                        <div className="flex justify-between items-start mb-12">
                                            <div className="p-3 bg-cyan-500/10 rounded-lg">
                                                <div className="w-6 h-6 border-2 border-cyan-500 rounded-full border-t-transparent animate-spin" />
                                            </div>
                                            <span className="text-cyan-500 font-mono text-[9px]">ENCRYPT_V2</span>
                                        </div>
                                        <h4 className="text-white text-2xl font-black uppercase tracking-tighter mb-4">Identity <br /> Verification</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">Multi-factor authentication protocols including facial geometry and encrypted RFID tokens.</p>
                                    </motion.div>

                                    <div className="relative p-8 bg-cyan-500/5 border border-cyan-500/20 rounded-2xl group overflow-hidden">
                                        <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all" />
                                        <div className="text-orange-500 font-black text-[9px] uppercase tracking-widest mb-12 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-orange-600 rounded-full animate-ping" /> Real-Time_Audit
                                        </div>
                                        <h4 className="text-white text-2xl font-black uppercase tracking-tighter mb-4">Instant <br /> Revocation</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">Manage personnel rights globally from a single unified cloud dashboard.</p>
                                    </div>
                                </div>

                                {/* 2. MAIN DESCRIPTION */}
                                <div className="relative">
                                    <div className="absolute -left-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-500 to-transparent opacity-30" />
                                    <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-12">
                                        The_Digital <br /> <span className="text-cyan-500 italic">Gatekeeper</span>
                                    </h2>

                                    <div className="grid gap-12 max-w-4xl">
                                        {overview.map((text, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: 30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.2 }}
                                                className="group relative"
                                            >
                                                <div className="absolute -left-12 top-2 text-cyan-900 font-mono text-4xl font-bold opacity-20 group-hover:opacity-100 transition-opacity">
                                                    0{i + 1}
                                                </div>
                                                <p className="text-slate-400 text-xl md:text-2xl font-light leading-relaxed group-hover:text-white transition-colors">
                                                    {text}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* 3. CREDENTIAL NODES */}
                                <div className="flex flex-wrap gap-4 py-16 border-t border-white/5">
                                    {["Biometric Scan", "Mobile HID", "RFID Proximity", "Smart Cards", "Visitor QR"].map((tech) => (
                                        <div key={tech} className="px-6 py-4 bg-[#0b0f1a] border border-cyan-500/10 rounded-sm flex items-center gap-4 group hover:border-cyan-500 transition-all">
                                            <div className="w-2 h-2 bg-cyan-500 shadow-[0_0_8px_#0ea5e9]" />
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-white">{tech}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="border-y border-white/5 bg-[#0b0f1a]/50 backdrop-blur-3xl">
                    <ServiceCTA />
                </div>

                <div className="pb-20 relative z-20">

                </div>
            </div>
        </div>
    );
};

export default AccessControlSystem;