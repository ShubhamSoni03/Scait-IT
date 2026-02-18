import React from "react";
import { Link } from "react-router-dom";

export default function Partners() {
  // You can populate this with your partner logos (Cisco, HP, etc.)
  const partnerList = [
    { id: 1, name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
    { id: 2, name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { id: 3, name: 'Dell', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg' },
    { id: 4, name: 'VMware', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg' },
    { id: 5, name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
    { id: 6, name: 'Lenovo', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg' },
  ];

  return (
    <div className="min-h-screen bg-[#030712]">
      {/* 1. Hero Section (Matched to Site Design System) */}
      <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-slate-900">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000"
            alt="Partners Banner"
            className="w-full h-full object-cover opacity-30 scale-105"
          />
        </div>

        {/* Content Container with Side Border and Breadcrumb */}
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between border-l-4 border-orange-500 pl-6">
            {/* Title */}
            <div>
              <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-xs mb-2 block">
                Global Network
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Our Partners
              </h1>
            </div>

            {/* Breadcrumb Feature */}
            <div className="text-gray-300 text-sm md:text-base font-medium mt-4 md:mt-0">
              <Link to="/">
                <span className="hover:text-orange-500 transition-colors cursor-pointer">Home Page</span>
              </Link>
              <span className="mx-2">→</span>
              <span className="text-orange-500">Our Partners</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <h3 className="text-orange-500 tracking-[0.15em] font-bold uppercase text-sm mb-2">
              Collaborative Growth
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight uppercase">
              Technology Partners <br /> & Global Alliances
            </h2>
          </div>
          <div className="hidden md:block w-24 h-[2px] bg-white/10 mb-4"></div>
        </div>

        {/* Partners Grid - Consistent 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {partnerList.map((partner) => (
            <div key={partner.id} className="group flex flex-col cursor-pointer">
              {/* LOGO CONTAINER */}
              <div className="relative w-full aspect-[4/3] p-8 border border-white/10 rounded-lg bg-white/[0.02] backdrop-blur-md overflow-hidden transition-all duration-300 group-hover:bg-white group-hover:border-transparent group-hover:shadow-xl group-hover:shadow-orange-500/20">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[0.9] filter brightness-0 invert group-hover:filter-none"
                />
                <div className="absolute inset-0 bg-orange-500/0 transition-colors duration-300"></div>
              </div>

              {/* Label */}
              <div className="mt-6 flex items-center justify-between">
                <p className="text-[12px] font-bold text-gray-400 uppercase tracking-[0.12em] group-hover:text-orange-500 transition-colors">
                  {partner.name}
                </p>
                <div className="h-[1px] w-12 bg-white/10 group-hover:w-20 group-hover:bg-orange-500 transition-all"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}