import React from "react";


export default function Media() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-64">
        {/* Using a placeholder or another asset for the banner background */}
        <div className="absolute inset-0 bg-slate-800">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000"
            alt="Certifications Banner"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-4 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Media
          </h1>
          <p className="text-sm text-gray-200 mt-2">
            Home Page <span className="mx-2">—</span>   Media
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h3 className="text-orange-500 tracking-widest font-bold uppercase text-sm">
            Our Validated Expertise
          </h3>
          <h2 className="text-2xl md:text-4xl font-bold mt-2 text-gray-900">
            ACHIEVEMENTS & RECOGNITION
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Certificate Card 1 */}
          <div className="group border rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-gray-50">
            <div className="p-4 bg-white">
              <img
              /*  src=  ✅ FIXED: Variable used here */
                alt="Professional Certification"
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4 border-t text-center">
              <p className="font-semibold text-gray-800">Official Certification</p>
            </div>
          </div>

          {/* You can add more cards here later by importing more images */}
          
        </div>
      </section>
    </div>
  );
}