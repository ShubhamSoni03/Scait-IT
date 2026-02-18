import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Recommended for smooth floating animations

const servicesData = [
    { id: 1, title: 'ACTIVE NETWORKING', link: '/services/active-networking', description: 'High-performance switching, routing, and wireless solutions for reliable enterprise connectivity.', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80' },
    { id: 2, title: 'WIRELESS / MOBILITY', link: '/services/wireless-mobility', description: 'Seamless indoor/outdoor wireless coverage ensuring total mobility across your workspace.', image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 3, title: 'STRUCTURED CABLING', link: '/services/structured-cabling-solution', description: 'Organized, scalable, and reliable copper/fiber cabling infrastructure for data and voice.', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80' },
    { id: 4, title: 'SURVEILLANCE SOLUTION', link: '/services/surveillance-solution', description: 'Advanced IP-based CCTV monitoring systems for 24/7 premise security and safety.', image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80' },
    { id: 5, title: 'DATA CENTER', link: '/services/data-centre', description: 'Robust data center infrastructure management, cooling, power, and optimization services.', image: 'https://images.pexels.com/photos/1337247/pexels-photo-1337247.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 6, title: 'AUDIO VIDEO SOLUTION', link: '/services/audio-video-solutions', description: 'State-of-the-art boardrooms, conferencing, and AV presentation systems.', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80' },
    { id: 7, title: 'ACCESS CONTROL SYSTEM', link: '/services/access-control-system', description: 'Secure biometric and card-based entry management for improved facility control.', image: 'https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 8, title: 'TOUCH PANEL AND KIOSK', link: '/services/touch-panel-and-kiosk', description: 'Interactive information displays and self-service kiosks for modern engagement.', image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 9, title: 'DEPLOYMENT SOLUTIONS', link: '/services/deployment-solutions', description: 'End-to-end rollout, installation, and logistics services for IT assets nationwide.', image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=600&q=80' },
    { id: 10, title: 'INDUSTRIAL PC', link: '/services/industrial-pc', description: 'Ruggedized computing hardware designed to withstand harsh industrial environments.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80' }
];

const ServiceCard = ({ service }) => (
    <div className="relative group h-[450px] overflow-hidden rounded-3xl border border-white/20 bg-white/40 backdrop-blur-md shadow-2xl transition-all duration-500 hover:-translate-y-2">
        {/* Image Section (Top) */}
        <div className="h-1/2 overflow-hidden relative">
            <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
        </div>

        {/* Content Section (Bottom) */}
        <div className="p-8 flex flex-col justify-between h-1/2 relative z-10">
            <div>
                <span className="text-orange-600 font-bold text-[10px] tracking-[0.3em] uppercase mb-2 block">Enterprise Solution</span>
                <Link to={service.link}>
                    <h3 className="text-xl font-black text-gray-900 mb-3 tracking-tighter uppercase leading-none group-hover:text-orange-600 transition-colors">
                        {service.title}
                    </h3>
                </Link>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 font-medium">
                    {service.description}
                </p>
            </div>

            <div className="flex justify-between items-center mt-4">
                <Link to={service.link} className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all">
                    View Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <div className="text-gray-300 group-hover:text-orange-200 transition-colors font-black text-4xl select-none">
                    0{service.id}
                </div>
            </div>
        </div>
    </div>
);

const Services = () => {
    const [itemsVisible, setItemsVisible] = useState(3);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const extendedServices = [...servicesData, ...servicesData.slice(0, 4)];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setItemsVisible(1);
            else if (window.innerWidth < 1024) setItemsVisible(2);
            else setItemsVisible(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => nextSlide(), 5000);
        return () => clearInterval(interval);
    }, [currentIndex, itemsVisible]);

    const nextSlide = () => {
        setIsTransitioning(true);
        setCurrentIndex(prev => prev + 1);
    };

    const handleTransitionEnd = () => {
        if (currentIndex >= servicesData.length) {
            setIsTransitioning(false);
            setCurrentIndex(0);
        }
    };

    return (
        <section className="relative py-32 bg-slate-50 overflow-hidden">
            
            {/* --- DYNAMIC FLOATING BACKGROUND --- */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Subtle Grid */}
                <div className="absolute inset-0 opacity-[0.03]" 
                    style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
                />
                
                {/* Moving Blobs */}
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-400/20 blur-[120px] rounded-full animate-blob" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-400/10 blur-[120px] rounded-full animate-blob animation-delay-2000" />
                <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] bg-orange-200/30 blur-[100px] rounded-full animate-blob animation-delay-4000" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
                    <div className="text-center md:text-left">
                        <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                            <span className="h-[2px] w-10 bg-orange-500"></span>
                            <span className="text-orange-600 font-black text-xs uppercase tracking-[0.4em]">Service Portfolio</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter uppercase leading-[0.8]">
                            Precision <br /> <span className="text-transparent stroke-gray-900" style={{ WebkitTextStroke: '1px #111827' }}>Solutions</span>
                        </h2>
                    </div>

                    <Link to="/services/active-networking" className="group">
                        <div className="relative px-10 py-5 bg-gray-900 text-white rounded-full font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl">
                            <span className="relative z-10 flex items-center gap-3 uppercase text-xs tracking-widest">
                                Explore All Services
                                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </span>
                            <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </div>
                    </Link>
                </div>

                {/* Slider */}
                <div className="relative">
                    <div className="overflow-visible">
                        <div
                            className={`flex ${isTransitioning ? 'transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)' : ''}`}
                            style={{ transform: `translateX(-${currentIndex * (100 / itemsVisible)}%)` }}
                            onTransitionEnd={handleTransitionEnd}
                        >
                            {extendedServices.map((service, index) => (
                                <div
                                    key={`${service.id}-${index}`}
                                    className="flex-shrink-0 px-4"
                                    style={{ width: `${100 / itemsVisible}%` }}
                                >
                                    <ServiceCard service={service} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Modern Indicators */}
                    <div className="flex gap-4 mt-16 justify-center">
                        {servicesData.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-1 transition-all duration-500 rounded-full ${idx === (currentIndex % servicesData.length) ? 'w-16 bg-orange-500 shadow-[0_0_15px_#f97316]' : 'w-4 bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Custom Styles for Animations */}
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite alternate;
                }
                .animation-delay-2000 { animation-delay: 2s; }
                .animation-delay-4000 { animation-delay: 4s; }
                .stroke-gray-900 { -webkit-text-fill-color: transparent; }
            `}} />
        </section>
    );
};

export default Services;