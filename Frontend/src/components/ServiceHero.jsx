import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const ServiceHero = ({ title }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const { scrollY } = useScroll();
    
    // Parallax for background depth
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Normalizing mouse position to a range of -0.5 to 0.5
            setMousePos({
                x: (e.clientX / window.innerWidth) - 0.5,
                y: (e.clientY / window.innerHeight) - 0.5,
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section 
            className="relative h-[450px] md:h-[550px] flex items-center overflow-hidden bg-[#030712] font-sans cursor-crosshair"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            
            {/* --- THE "FLUX" BACKGROUND --- */}
            <div className="absolute inset-0 z-0">
                {/* 1. Interactive Vector Grid - Warps toward mouse */}
                <motion.div 
                    animate={{ 
                        x: mousePos.x * (isHovered ? 60 : 30), 
                        y: mousePos.y * (isHovered ? 60 : 30),
                        opacity: isHovered ? 0.6 : 0.4
                    }}
                    style={{ 
                        backgroundImage: `linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                    className="absolute inset-0 transition-opacity duration-500"
                />

                {/* 2. Magnetic Glow Follower */}
                <motion.div 
                    animate={{ 
                        x: mousePos.x * window.innerWidth, 
                        y: mousePos.y * window.innerHeight,
                        opacity: isHovered ? 1 : 0
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-600/10 blur-[100px] rounded-full pointer-events-none"
                />

                {/* 3. Rotating Blueprint Circles */}
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    style={{ y: y1 }}
                    className="absolute -right-20 -top-20 w-[600px] h-[600px] border-[1px] border-orange-500/10 rounded-full flex items-center justify-center pointer-events-none"
                >
                    <div className="w-[80%] h-[80%] border-[1px] border-cyan-500/5 rounded-full border-dashed" />
                </motion.div>
            </div>

            {/* --- THE HUD INTERFACE --- */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
                    
                    <div className="lg:col-span-8">
                        {/* Dynamic Breadcrumb HUD */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <div className="flex gap-1">
                                <motion.div 
                                    animate={{ height: isHovered ? [16, 24, 16] : 16 }}
                                    transition={{ repeat: Infinity, duration: 1 }}
                                    className="w-1 bg-orange-600" 
                                />
                                <div className="w-1 h-4 bg-orange-600/40" />
                            </div>
                            <nav className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 flex gap-3">
                                <Link to="/" className="hover:text-white transition-colors">Root</Link>
                                <span>/</span>
                                <Link to="/services" className="hover:text-white transition-colors">Directory</Link>
                                <span>/</span>
                                <span className="text-orange-500">{title}</span>
                            </nav>
                        </motion.div>

                        {/* Large Title with Hover "Shatter" Effect */}
                        <div className="relative inline-block group">
                            <motion.h1 
                                animate={{ 
                                    x: isHovered ? mousePos.x * 20 : 0,
                                    y: isHovered ? mousePos.y * 20 : 0
                                }}
                                className="text-6xl md:text-9xl font-black text-white leading-none tracking-tighter uppercase relative z-10 transition-shadow duration-500 group-hover:drop-shadow-[0_0_15px_rgba(234,88,12,0.4)]"
                            >
                                {title}
                            </motion.h1>
                            
                            {/* Layered Shadow Effect (Hover) */}
                            <motion.h1 
                                animate={{ 
                                    x: isHovered ? mousePos.x * -40 : 0,
                                    y: isHovered ? mousePos.y * -40 : 0,
                                    opacity: isHovered ? 0.4 : 0
                                }}
                                className="absolute top-0 left-0 -z-10 text-6xl md:text-9xl font-black text-cyan-500 leading-none tracking-tighter uppercase blur-sm"
                            >
                                {title}
                            </motion.h1>
                        </div>
                    </div>

                    {/* Corner Detail Element */}
                    <motion.div 
                        animate={{ opacity: isHovered ? 1 : 0.6 }}
                        className="hidden lg:block lg:col-span-4 border-l border-white/10 pl-8"
                    >
                        <div className="space-y-4">
                            <div className="text-[9px] font-mono text-slate-500 uppercase leading-relaxed">
                                System Status: <span className={isHovered ? "text-orange-500" : "text-cyan-500"}>
                                    {isHovered ? "Analyzing..." : "Active"}
                                </span><br/>
                                Sync: <span className="text-cyan-500">100%</span>
                            </div>
                            <div className="h-[1px] w-full bg-gradient-to-r from-orange-600 to-transparent" />
                            <p className="text-slate-400 text-xs font-medium max-w-[200px] leading-relaxed">
                                Interactive interface engaged. Move cursor to scan metadata layers.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Bottom Technical Frame */}
            <div className="absolute bottom-0 left-0 right-0 h-12 flex items-center justify-between px-6 border-t border-white/5 bg-white/[0.02] backdrop-blur-sm">
                <div className="text-[8px] font-mono text-slate-600 tracking-[0.5em] uppercase">
                    {isHovered ? `Cursor_Pos: [${mousePos.x.toFixed(2)} , ${mousePos.y.toFixed(2)}]` : "Transmission_Active // Sector_7G"}
                </div>
                <div className="flex gap-4">
                    <motion.div 
                        animate={{ scale: isHovered ? 1.5 : 1 }}
                        className="w-2 h-2 rounded-full bg-orange-600 shadow-[0_0_10px_#ea580c]" 
                    />
                </div>
            </div>

        </section>
    );
};

export default ServiceHero;