import React from "react";
import { useParams } from "react-router-dom";

const serviceData = {
  "active-networking": {
    title: "Active Networking",
    description: "We provide high-performance switching, routing, and network security solutions.",
    features: ["Core Switching", "Firewall Protection", "Bandwidth Management"]
  },
  "wireless-mobility": {
    title: "Wireless / Mobility",
    description: "Secure and seamless enterprise-grade Wi-Fi solutions for modern workspaces.",
    features: ["Indoor/Outdoor APs", "Cloud Controllers", "Guest Portals"]
  },
  "structured-cabling": {
    title: "Structured Cabling Solution",
    description: "Robust copper and fiber cabling infrastructure for data and voice.",
    features: ["Cat6/Cat6A Installations", "Fiber Splicing", "Rack Management"]
  },
  // ADD THE REST OF YOUR SERVICES HERE...
};

const ServicePage = () => {
  const { serviceSlug } = useParams();
  const data = serviceData[serviceSlug];

  if (!data) {
    return <div className="py-20 text-center text-red-500">Service Not Found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-900">{data.title}</h1>
      <div className="mt-8">
        <p className="text-xl text-gray-700 mb-6">{data.description}</p>
        
        <h3 className="text-2xl font-semibold mb-4">Key Features:</h3>
        <ul className="list-disc pl-5 space-y-2">
          {data.features.map((feature, index) => (
            <li key={index} className="text-gray-600">{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicePage;