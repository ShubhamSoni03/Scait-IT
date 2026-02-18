import React from 'react';
import { Link } from 'react-router-dom';

const ServiceOverview = () => {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Subtle Pattern Background (CSS Dots) */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }}></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Column: Text Content */}
                    <div className="w-full lg:w-1/2">
                        <h4 className="text-orange-500 font-bold uppercase tracking-wider mb-4 text-sm">
                            EXPERIENCED SERVICES
                        </h4>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            We Provide All<br />
                            Kinds Of IT<br />
                            Services
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            We specialize in delivering comprehensive IT infrastructure solutions, ensuring your business stays connected, secure, and efficient. From data center management to advanced networking, we have you covered.
                        </p>

                        <Link to="/services/active-networking">
                            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2 group">
                                Explore More
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </Link>
                    </div>

                    {/* Right Column: 2x2 Grid */}
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Card 1: Data Center */}
                            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-start border border-transparent">
                                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6 text-orange-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Center</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Comprehensive infrastructure management for reliable and secure data operations.
                                </p>
                            </div>

                            {/* Card 2: Structured Cabling (Border Highlight) */}
                            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-start border border-orange-500 relative">
                                {/* Optional: "Featured" badge or just the border as requested. Keeping strictly to border/highlight as per prompt. */}
                                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6 text-orange-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Structured Cabling Solutions</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Organized copper and fiber fiber cabling infrastructure ensuring scalability.
                                </p>
                            </div>

                            {/* Card 3: Active Networking */}
                            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-start border border-transparent">
                                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6 text-orange-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Active Networking</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    High-performance switching and routing for enterprise-grade connectivity.
                                </p>
                            </div>

                            {/* Card 4: Deployment Solutions */}
                            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-start border border-transparent">
                                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6 text-orange-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 10-4 0 2 2 0 004 0zm14 0a2 2 0 10-4 0 2 2 0 004 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Deployment Solutions</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Efficient logistics and installation services for nationwide IT rollouts.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServiceOverview;
