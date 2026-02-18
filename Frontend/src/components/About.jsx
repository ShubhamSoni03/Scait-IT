import React from 'react';
import { Link } from 'react-router-dom';
import serverImg from '../assets/server.png';

const About = () => {
    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Images Composition */}
                    <div className="relative">
                        {/* Main Image */}
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop"
                                alt="SCA IT Office Environment"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Experience Badge (Bottom Left) */}
                        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-orange-500 text-white rounded-full w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center shadow-lg z-10 animate-bounce-slow">
                            <span className="text-3xl md:text-4xl font-extrabold leading-none">27</span>
                            <span className="text-xs md:text-sm font-semibold uppercase tracking-wide">Years Exp.</span>
                        </div>

                        {/* Overlapping Secondary Image (Bottom Right) */}
                        <div className="absolute -bottom-10 -right-4 md:-bottom-12 md:-right-12 w-1/2 rounded-xl overflow-hidden shadow-2xl border-4 border-white z-20 hidden md:block">
                            <img
                                src={serverImg}
                                alt="Server Infrastructure"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:pl-10">
                        {/* Accent Heading */}
                        <h4 className="text-orange-500 font-bold uppercase tracking-wider mb-4 text-sm md:text-base">
                            Welcome to SCA IT Infrastructure Pvt. Ltd.
                        </h4>

                        {/* Main Headline */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                            We Have Experience Of More Than <span className="text-orange-500">27 Years</span>
                        </h2>

                        {/* Paragraph Content */}
                        <div className="text-gray-600 text-lg leading-relaxed mb-8 space-y-4">
                            <p>
                                SCA IT Infrastructure Pvt. Ltd. takes this opportunity to introduce itself as a premier player in the Networking Industry. We are dedicated to providing fast, secure, and reliable connections that empower businesses to achieve their potential.
                            </p>
                            <p>
                                With a robust team of certified professionals and a customer-centric approach, we have successfully delivered countless infrastructure projects across the nation.
                                <span className="font-bold text-gray-900 block mt-2">
                                    Our commitment to quality and "Total Customer Satisfaction" drives everything we do.
                                </span>
                            </p>
                        </div>

                        {/* CTA Button */}
                        <Link to="/about/company-profile" className="group bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 w-fit">
                            Explore More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 transform group-hover:translate-x-1 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
