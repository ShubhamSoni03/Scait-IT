import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceHero from '../../components/ServiceHero';
import ServiceCTA from '../../components/ServiceCTA';


const DeploymentSolutions = () => {
    const serviceName = "Deployment Solutions";
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
        "Rolling out new technology across multiple locations can be a logistical challenge. Our Deployment Solutions take the burden off your internal teams. We manage the entire deployment process, from staging and configuration to logistics and on-site installation.",
        "Our experienced project managers coordinate every detail to ensure timely and consistent rollouts. We have a nationwide network of technicians ready to deploy hardware and software solutions efficiently.",
        "By trusting us with your deployment needs, you minimize disruption to your business and ensure that your new technology is up and running correctly from day one."
    ];

    return (
        <div className="bg-[#0a0a0b] min-h-screen relative overflow-hidden selection:bg-amber-500/30">

            {/* --- LOGISTICAL GRID BACKGROUND --- */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
                <div className="absolute inset-0"
                    style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #f59e0b 1px, transparent 0)`, backgroundSize: '60px 60px' }}
                />
            </div>

            <div className="relative z-10">
                <ServiceHero title={serviceName} />

                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                            {/* SIDEBAR: GOLD ACCENTED DIRECTORY */}
                            <aside className="lg:col-span-3 order-2 lg:order-1">
                                <div className="sticky top-32 space-y-4">
                                    <div className="h-[1px] w-full bg-gradient-to-r from-amber-500 to-transparent mb-6" />
                                    <nav className="flex flex-col gap-3">
                                        {services.map((s) => {
                                            const isActive = location.pathname === s.to;
                                            return (
                                                <Link
                                                    key={s.to}
                                                    to={s.to}
                                                    className={`group relative py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all ${isActive ? "text-amber-500" : "text-slate-500 hover:text-white"}`}
                                                >
                                                    <span className="relative z-10">{s.name}</span>
                                                    {isActive && <motion.div layoutId="goldBar" className="absolute -left-4 top-0 bottom-0 w-1 bg-amber-500 shadow-[0_0_10px_#f59e0b]" />}
                                                </Link>
                                            );
                                        })}
                                    </nav>
                                </div>
                            </aside>

                            {/* MAIN CONTENT AREA */}
                            <div className="lg:col-span-9 order-1 lg:order-2 space-y-24">

                                {/* 1. INTERACTIVE DEPLOYMENT MAP (Visual Feature) */}

                                <div className="relative bg-[#111113] border border-white/5 p-10 rounded-3xl overflow-hidden">
                                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                                        {[
                                            { step: "01", title: "Staging", desc: "Config & Testing" },
                                            { step: "02", title: "Logistics", desc: "Global Transit" },
                                            { step: "03", title: "Installation", desc: "On-Site Rollout" }
                                        ].map((item, i) => (
                                            <React.Fragment key={i}>
                                                <div className="text-center group">
                                                    <div className="w-16 h-16 rounded-full border border-amber-500/20 flex items-center justify-center mx-auto mb-4 group-hover:border-amber-500 transition-colors">
                                                        <span className="text-amber-500 font-mono text-xl font-bold">{item.step}</span>
                                                    </div>
                                                    <h4 className="text-white font-bold uppercase tracking-widest mb-1">{item.title}</h4>
                                                    <p className="text-slate-500 text-[10px] uppercase font-mono">{item.desc}</p>
                                                </div>
                                                {i < 2 && (
                                                    <div className="hidden md:block flex-1 h-[1px] bg-gradient-to-r from-amber-500/50 to-transparent relative">
                                                        <motion.div
                                                            animate={{ x: ['0%', '100%'], opacity: [0, 1, 0] }}
                                                            transition={{ duration: 2, repeat: Infinity }}
                                                            className="absolute top-[-2px] w-2 h-4 bg-amber-500/30 blur-sm"
                                                        />
                                                    </div>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] to-transparent pointer-events-none" />
                                </div>

                                {/* 2. OVERVIEW TEXT SECTION */}
                                <div className="max-w-4xl">
                                    <motion.h2
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        className="text-4xl md:text-7xl font-black text-white leading-none uppercase tracking-tighter mb-12"
                                    >
                                        Global_Execution <br /> <span className="text-amber-500 underline decoration-white/10 underline-offset-8">Localized_Care</span>
                                    </motion.h2>

                                    <div className="grid gap-12">
                                        {overview.map((text, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex gap-8 group"
                                            >
                                                <div className="text-amber-500 font-mono text-xs font-bold py-2">STAGE_{i + 1}</div>
                                                <p className="text-slate-400 text-lg md:text-xl leading-relaxed group-hover:text-slate-100 transition-colors">
                                                    {text}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* 3. DEPLOYMENT STATS BAR */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
                                    {[
                                        { label: "Nationwide", val: "Network" },
                                        { label: "Zero", val: "Disruption" },
                                        { label: "End-to-End", val: "Management" },
                                        { label: "24/7", val: "Staging" }
                                    ].map((stat, i) => (
                                        <div key={i} className="bg-white/5 p-8 border border-white/5 text-center group hover:bg-amber-500/10 transition-colors">
                                            <p className="text-amber-500 font-black text-2xl uppercase mb-1">{stat.val}</p>
                                            <p className="text-slate-500 text-[9px] uppercase tracking-[0.3em]">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="border-t border-white/5 bg-[#0a0a0b]">
                    <ServiceCTA />
                </div>

                <div className="pb-20 relative z-20">

                </div>
            </div>
        </div>
    );
};

export default DeploymentSolutions;