import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Component Imports
import Hero from '../components/Hero';
import Services from '../components/Services';
import Brands from '../components/Brands';
import StatsMission from '../components/StatsMission';
import ServiceOverview from '../components/ServiceOverview';
import MediaSlider from '../components/MediaSlider';

import ContactSection from '../components/ContactSection';
import PartnerSlider from '../components/PartnerSlider';
import About from '../components/About';
import ScrollToTop from '../components/Scrolltop';

const Home = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <div className="relative bg-[#02040a] text-slate-200 selection:bg-indigo-500/30 min-h-screen">

            {/* 1. PERSISTENT BACKGROUND GLOWS */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full" />
            </div>

            {/* 2. PROGRESS BAR */}
            <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-indigo-500 z-[1000] origin-left" style={{ scaleX }} />

            <main className="relative z-10 flex flex-col items-center pt-6 pb-20">

                {/* HERO AREA */}
                <section className="w-full max-w-[1440px] px-4 md:px-10 mb-16">
                    <Hero />
                </section>

                <div className="w-full max-w-7xl px-4 flex flex-col gap-20">

                    {/* ABOUT: Floating Glass Card */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-900/40 backdrop-blur-md rounded-[3rem] border border-white/5 p-6 md:p-10"
                    >
                        <About />
                    </motion.section>

                    {/* NEW CUSTOMER & STATS DESIGN: The "Impact Center" */}
                    {/* This layout uses full width to ensure Brands and Stats are 100% visible */}
                    <section className="relative w-full py-10">
                        <div className="flex flex-col gap-12 text-center">

                            {/* Brand Logos: Top Row Visibility */}
                            <div className="w-full py-12 bg-white/5 backdrop-blur-sm rounded-[3rem] border border-white/5 shadow-inner">
                                <div className="mb-8 px-4">
                                    <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-indigo-400">Trusted Global Partners</h3>
                                </div>
                                <Brands />
                            </div>

                            {/* Stats Mission: Large Floating Block */}
                            <div className="w-full bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-xl rounded-[3rem] border border-white/10 p-1">
                                <div className="bg-[#02040a]/80 rounded-[2.9rem] py-16 px-4 md:px-12">
                                    <StatsMission />
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* SERVICE OVERVIEW & MEDIA SLIDER */}
                    <section className="bg-slate-900/20 rounded-[4rem] border border-white/5 overflow-hidden">
                        <ServiceOverview />
                        <div className="py-20 border-t border-white/5">
                            <MediaSlider />
                        </div>
                    </section>

                    {/* SERVICES SECTION */}
                    <section className="py-10">
                        <div className="flex items-center gap-6 mb-16">
                            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase whitespace-nowrap">Capabilities</h2>
                            <div className="h-[2px] w-full bg-gradient-to-r from-indigo-500 to-transparent opacity-30" />
                        </div>
                        <Services />
                    </section>



                    {/* CONTACT SECTION */}
                    <motion.section
                        whileHover={{ scale: 0.99 }}
                        className="bg-indigo-600 rounded-[4rem] p-1 shadow-2xl overflow-hidden"
                    >
                        <div className="bg-[#02040a]/90 backdrop-blur-3xl rounded-[3.9rem] py-20 px-6">
                            <ContactSection />
                        </div>
                    </motion.section>

                </div>

                {/* FOOTER */}
                <footer className="w-full mt-32 border-t border-white/5 pt-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                            <PartnerSlider />
                        </div>
                        <div className="mt-20 flex justify-between text-[10px] tracking-[0.5em] text-slate-700 uppercase">
                            <span>Future-Proof Systems</span>
                            <span>© 2025 HOME JX</span>
                        </div>
                    </div>
                </footer>

                <ScrollToTop />
            </main>
        </div>
    );
};

export default Home;