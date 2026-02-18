import React from 'react';

const servicesList = [
    "Active Networking",
    "Wireless/Mobility",
    "Structured Cabling",
    "Surveillance Solution",
    "Data Centre",
    "Audio/Video Solutions",
    "Access Control System",
    "Touch Panel Kiosk",
    "Deployment Solutions",
    "Industrial PC"
];

// Helper to sanitize service name for URL/ID (e.g. "Active Networking" -> "active-networking")
const getServiceSlug = (name) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

const ServicesSidebar = ({ activeService }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <h3 className="bg-gray-100 text-gray-800 text-lg font-bold p-4 border-b border-gray-200 border-l-4 border-orange-500">
                Our Services
            </h3>
            <ul className="flex flex-col">
                {servicesList.map((service) => {
                    const isActive = activeService === service;
                    return (
                        <li key={service}>
                            <a
                                href={`/services/${getServiceSlug(service)}`}
                                className={`block px-5 py-3 text-sm font-medium transition-all duration-300 border-b border-gray-100 last:border-0 flex justify-between items-center group
                  ${isActive
                                        ? 'bg-orange-500 text-white border-orange-500'
                                        : 'text-gray-600 hover:bg-orange-50 hover:text-orange-500'
                                    }`}
                            >
                                <span>{service}</span>
                                <span className={`text-xs ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-orange-500'}`}>
                                    ➤
                                </span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ServicesSidebar;
