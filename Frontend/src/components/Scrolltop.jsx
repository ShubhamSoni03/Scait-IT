import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0, y: 20 }}
                    whileHover={{ 
                        scale: 1.1, 
                        boxShadow: "0px 0px 20px rgba(79, 70, 229, 0.6)" 
                    }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[999] p-4 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 text-white shadow-2xl border border-white/20 group"
                    aria-label="Scroll to top"
                >
                    {/* The Arrow Icon */}
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2.5} 
                            d="M5 10l7-7m0 0l7 7m-7-7v18" 
                        />
                    </svg>

                    {/* Subtle Pulse Rings */}
                    <span className="absolute inset-0 rounded-full bg-indigo-500/40 animate-ping -z-10" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;