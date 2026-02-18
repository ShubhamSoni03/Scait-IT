import React from 'react';

const cities = [
    "AHMEDABAD", "BANGALORE", "CHENNAI", "DELHI", "HYDERABAD", "MUMBAI"
];

const CityItem = ({ name }) => (
    <div className="flex items-center gap-3 min-w-max px-4">
        {/* Simple White Line Icon (Building/Location) */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white opacity-90">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
        <span className="text-white font-bold tracking-wide uppercase text-sm md:text-base">
            {name}
        </span>
    </div>
);

const Branches = () => {
    return (
        <section className="w-full flex flex-col md:flex-row shadow-lg md:shadow-none relative z-20">

            {/* Left Column: HQ (Fixed / Distinct) */}
            <div className="bg-gray-900 flex items-center justify-center py-6 px-4 md:px-8 md:w-auto md:min-w-[280px] shrink-0 relative z-20">
                <span className="text-white font-bold text-lg md:text-xl tracking-wider text-center uppercase">
                    Branches-Pune (HQ)
                </span>
            </div>

            {/* Right Column: Cities List (Scrollable) */}
            <div className="bg-orange-500 flex-1 flex items-center overflow-x-auto py-6 px-4 no-scrollbar relative z-10 w-full">
                {/* 
                   Mobile: Flex row with scroll
                   Desktop: Justify around 
                */}
                <div className="flex flex-row items-center gap-8 md:gap-12 min-w-max md:w-full md:min-w-0 md:justify-around mx-auto">
                    {cities.map((city, index) => (
                        <CityItem key={index} name={city} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Branches;
