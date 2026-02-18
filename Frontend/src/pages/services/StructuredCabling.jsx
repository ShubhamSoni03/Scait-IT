import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceHero from '../../components/ServiceHero';
import ServiceCTA from '../../components/ServiceCTA';


const StructuredCabling = () => {
    const serviceName = "Structured Cabling Solution";
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
        "Structured cabling is the foundation of your business network, providing a standardized architecture for communications cabling. We offer comprehensive structured cabling solutions that support data, voice, video, and other management systems.",
        "Our certified technicians design and install cabling systems that are organized, labeled, and tested to industry standards. This ensures easy maintenance and scalability as your business grows.",
        "We work with copper and fiber optic cabling to deliver high-speed connectivity throughout your facility. A well-implemented structured cabling system reduces downtime and improves overall network performance."
    ];

    return (
        <div className="bg-[#010409] min-h-screen relative overflow-hidden">

            {/* --- UNIQUE BACKGROUND: ARCHITECTURAL BLUEPRINT GRID --- */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, #bef264 1px, transparent 1px), linear-gradient(to bottom, #bef264 1px, transparent 1px)`,
                    backgroundSize: '80px 80px'
                }} />
                {/* Diagonal Technical Lines */}
                <svg className="absolute inset-0 w-full h-full">
                    <line x1="0" y1="0" x2="100%" y2="100%" stroke="#bef264" strokeWidth="0.5" strokeDasharray="10 10" />
                </svg>
            </div>

            <div className="relative z-10">
                <ServiceHero title={serviceName} />

                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                            {/* --- SIDEBAR: LIME ACCENTED NAV --- */}
                            <aside className="lg:col-span-3 order-2 lg:order-1">
                                <div className="sticky top-32 p-1 bg-gradient-to-b from-[#bef264]/20 to-transparent rounded-xl">
                                    <div className="bg-[#010409] backdrop-blur-md p-6 rounded-lg space-y-6">
                                        <h3 className="text-[#bef264] font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                                            <span className="w-2 h-2 bg-[#bef264] rotate-45" /> System_Hierarchy
                                        </h3>
                                        <nav className="flex flex-col gap-2">
                                            {services.map((s) => {
                                                const isActive = location.pathname === s.to;
                                                return (
                                                    <Link key={s.to} to={s.to} className={`group relative px-4 py-2 text-[11px] font-bold uppercase transition-all ${isActive ? "text-[#bef264]" : "text-slate-500 hover:text-white"}`}>
                                                        {isActive && (
                                                            <motion.div layoutId="navGlow" className="absolute inset-0 bg-[#bef264]/5 border-l-2 border-[#bef264]" />
                                                        )}
                                                        <span className="relative z-10">{s.name}</span>
                                                    </Link>
                                                );
                                            })}
                                        </nav>
                                    </div>
                                </div>
                            </aside>

                            {/* --- CONTENT: THE PHYSICAL LAYER VISUAL --- */}
                            <div className="lg:col-span-9 order-1 lg:order-2 space-y-20">

                                {/* Unique Layout: Interactive Cabling Map */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        className="relative p-10 border border-white/5 bg-[#0d1117] overflow-hidden rounded-2xl group"
                                    >
                                        <div className="relative z-10">
                                            <div className="text-[#bef264] text-xs font-mono mb-4">// Physical_Layer_01</div>
                                            <h4 className="text-white text-2xl font-black uppercase mb-4 tracking-tighter">Copper & Fiber <br /> Backbone</h4>
                                            <p className="text-slate-500 text-sm leading-relaxed">High-density backbone implementation for seamless multi-gigabit throughput across enterprise floors.</p>
                                        </div>
                                        {/* Animated Wire Effect */}
                                        <div className="absolute bottom-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                                            <div className="flex gap-1 items-end">
                                                {[...Array(8)].map((_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        animate={{ height: [10, 40, 10] }}
                                                        transition={{ repeat: Infinity, duration: 2, delay: i * 0.1 }}
                                                        className="w-1 bg-[#bef264]"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="relative p-10 border border-[#bef264]/20 bg-[#bef264]/5 overflow-hidden rounded-2xl"
                                    >
                                        <div className="text-white text-xs font-mono mb-4">// Standards_Compliance</div>
                                        <h4 className="text-[#bef264] text-2xl font-black uppercase mb-4 tracking-tighter">TIA/EIA <br /> Certified</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">Every strand is Fluke-tested and certified to meet international networking transmission standards.</p>
                                    </motion.div>
                                </div>

                                {/* Main Text with Architectural Accents */}
                                <div className="relative">
                                    <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#bef264] via-transparent to-transparent" />
                                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-12 italic">
                                        Foundation<span className="text-[#bef264]">_</span>Layer
                                    </h2>

                                    <div className="grid gap-12">
                                        {overview.map((text, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.2 }}
                                                className="group"
                                            >
                                                <div className="flex items-start gap-6">
                                                    <span className="text-[#bef264] font-mono text-xs pt-1">0{i + 1}</span>
                                                    <p className="text-slate-400 text-xl leading-relaxed border-b border-white/5 pb-8 group-hover:text-white transition-colors">
                                                        {text}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Horizontal Feature Bar */}
                                <div className="flex flex-wrap gap-4 py-10 border-t border-white/5">
                                    {["Cat6A / Cat7", "Fiber Optic", "Rack Management", "Cable Audits"].map((tag) => (
                                        <div key={tag} className="px-6 py-3 bg-[#0d1117] border border-white/10 rounded-full flex items-center gap-3 group hover:border-[#bef264] transition-all">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#bef264] group-hover:animate-ping" />
                                            <span className="text-[10px] font-black text-slate-400 uppercase group-hover:text-white">{tag}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="relative border-y border-white/5">
                    <div className="absolute inset-0 bg-[#bef264]/5 backdrop-blur-3xl" />
                    <div className="relative z-10"><ServiceCTA /></div>
                </div>

                <div className="pb-20 relative z-20">

                </div>
            </div>
        </div>
    );
};

export default StructuredCabling;