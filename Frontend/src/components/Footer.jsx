import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const branches = [
  { name: "Pune (HQ)", link: "#", color: "from-orange-500 to-red-600" },
  { name: "Ahmedabad", link: "#", color: "from-blue-400 to-indigo-600" },
  { name: "Bangalore", link: "#", color: "from-purple-400 to-pink-600" },
  { name: "Chennai", link: "#", color: "from-emerald-400 to-teal-600" },
  { name: "Delhi", link: "#", color: "from-amber-400 to-orange-600" },
  { name: "Hyderabad", link: "#", color: "from-cyan-400 to-blue-600" },
  { name: "Mumbai", link: "#", color: "from-rose-400 to-red-600" },
];

const Footer = () => {
  // Enhanced Branch Data with Custom SVG Path Logic


  return (
    <footer className="relative bg-[#020617] text-slate-300 font-sans overflow-hidden">

      {/* 1. NATIONAL PRESENCE (Map/Locations) */}
      <div className="relative border-y border-white/10 bg-gradient-to-r from-[#800000] via-[#020617] to-[#0077b6] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Title */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold tracking-widest uppercase mb-1">National Presence</h3>
              <p className="text-xs text-gray-400 tracking-widest">SERVING ACROSS MAJOR CITIES</p>
            </div>

            {/* City List */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {branches.map((branch, idx) => (
                <a
                  key={idx}
                  href={branch.link}
                  className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 min-w-[100px]"
                >
                  <div className={`p-3 rounded-full bg-gradient-to-br ${branch.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold tracking-wider opacity-80 group-hover:opacity-100">{branch.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN CONTENT - Increased Font Sizes */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">

        {/* Brand Column */}
        <div className="lg:col-span-5 space-y-10">
          <div className="relative inline-block">
            <img src="/logo.png" alt="SCA IT" className="w-56 brightness-0 invert opacity-100" />
            <div className="absolute -bottom-3 left-0 w-20 h-1.5 bg-[#800000]" />
          </div>

          <p className="text-lg md:text-xl leading-relaxed font-light text-slate-400">
            Providing enterprise-grade network infrastructure since 1997. We architect
            <span className="text-white font-bold italic"> Fast, Secure, and Reliable Connections</span> for global digital leadership.
          </p>

          <div className="flex flex-col space-y-6">
            <a href="mailto:info@scait.co.in" className="group flex items-center text-lg hover:text-[#bef264] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mr-5 group-hover:bg-[#800000] transition-all border border-white/10">
                <span className="text-xl">✉</span>
              </div>
              info@scait.co.in
            </a>
            <a href="tel:+919922268493" className="group flex items-center text-lg hover:text-[#bef264] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mr-5 group-hover:bg-[#0077b6] transition-all border border-white/10">
                <span className="text-xl">☎</span>
              </div>
              +91 99222 68493
            </a>
          </div>
        </div>

        {/* Links Column */}
        <div className="lg:col-span-3">
          <h4 className="text-white font-black text-sm md:text-base uppercase tracking-[0.3em] mb-10">Explore</h4>
          <ul className="space-y-6 text-sm md:text-lg font-bold uppercase tracking-widest">
            <li><Link to="/" className="hover:text-[#bef264] transition-colors">• Home</Link></li>
            <li><Link to="/about/company-profile" className="hover:text-[#bef264] transition-colors">• Company Profile</Link></li>
            <li><Link to="/certifications" className="hover:text-[#bef264] transition-colors">• Certifications</Link></li>
            <li><Link to="/customer" className="hover:text-[#bef264] transition-colors">• Our Customers</Link></li>
            <li><Link to="/partners" className="hover:text-[#bef264] transition-colors">• Our Partners</Link></li>
            <li><Link to="/contact" className="hover:text-[#bef264] transition-colors">• Contact Us</Link></li>
          </ul>
        </div>

        {/* Services Column */}
        <div className="lg:col-span-4">
          <h4 className="text-white font-black text-sm md:text-base uppercase tracking-[0.3em] mb-10">Infrastructure</h4>
          <ul className="space-y-6">
            {[
              { label: "Active Networking", link: "/services/active-networking" },
              { label: "Wireless Mobility", link: "/services/wireless-mobility" },
              { label: "Structured Cabling", link: "/services/structured-cabling" },
              { label: "Surveillance Solution", link: "/services/surveillance-solution" },
            ].map((service) => (
              <li key={service.label}>
                <Link
                  to={service.link}
                  className="flex items-center text-base md:text-lg group"
                >
                  <span className="w-2 h-2 rounded-full bg-[#800000] mr-5 group-hover:w-6 group-hover:bg-[#bef264] transition-all duration-300" />
                  <span className="group-hover:text-white transition-colors">{service.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-14 p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] font-black text-[#bef264] mb-3 underline underline-offset-8">Quality Standard</p>
            <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">Strictly adhering to <span className="text-white font-bold">ISO 9001:2015</span> certifications for worldwide operations.</p>
          </div>
        </div>
      </div>

      {/* 3. COPYRIGHT BAR */}
      <div className="border-t border-white/10 py-10 bg-black/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs md:text-sm uppercase tracking-[0.5em] font-bold text-slate-500">
            © {new Date().getFullYear()} SCA IT Infrastructure Pvt. Ltd.
          </p>
          <div className="flex space-x-10 text-[10px] md:text-xs uppercase tracking-[0.4em] font-black text-slate-400">
            <span className="hover:text-[#bef264] cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-[#bef264] cursor-pointer transition-colors">Compliance</span>
            <span className="hover:text-[#bef264] cursor-pointer transition-colors">Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;