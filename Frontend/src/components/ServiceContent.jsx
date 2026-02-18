import React from 'react';
import ServicesSidebar from './ServicesSidebar';
import HelpBox from './HelpBox';

const ServiceContent = ({ title, image, overviewText, activeService }) => {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* Left Content Area - Spans 2 cols */}
                <div className="lg:col-span-2">

                    {/* Service Image */}
                    {image && (
                        <div className="w-full h-[250px] md:h-[400px] mb-8 overflow-hidden rounded-lg shadow-md">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    )}

                    {/* Section Heading */}
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-gray-100 pb-2">
                        Overview
                        <div className="w-16 h-1 bg-orange-500 mt-2 rounded"></div>
                    </h2>

                    {/* Text Content */}
                    <div className="text-gray-600 space-y-4 leading-relaxed text-justify">
                        {Array.isArray(overviewText) ? (
                            overviewText.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))
                        ) : (
                            <p>{overviewText}</p>
                        )}
                    </div>
                </div>

                {/* Right Sidebar Area - Spans 1 col */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24">
                        <ServicesSidebar activeService={activeService || title} />
                        <HelpBox />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceContent;
