import React from "react";

const TopBar = () => {
  return (
    <div className="w-full bg-[#010409] text-white border-b border-white/5 relative z-[70]">
      {/* High-tech top accent line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-40" />
      
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        {/* Contact HUD */}
        <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.25em]">
          <div className="flex items-center gap-2 group cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]" />
            <span className="text-slate-400 group-hover:text-white transition-colors">info@scait.co.in</span>
          </div>
          <div className="hidden md:flex items-center gap-2 border-l border-white/10 pl-6">
            <span className="text-cyan-400">SUPPORT_LINE:</span>
            <span className="text-slate-400">020-69034270</span>
          </div>
        </div>

        {/* Action Badges */}
        <div className="flex items-center gap-5">
          {["Media", "Career", "Branches"].map((item) => (
            <a 
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-cyan-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;