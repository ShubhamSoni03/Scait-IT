import React, { useState, useEffect } from 'react';

// Real IT/Infrastructure Brand Logos (Wikimedia Commons - High Availability)
const brandsData = [
    { id: 1, name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
    // { id: 2, name: 'Hikvision', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Hikvision_logo.svg' },
    { id: 3, name: 'Dell', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg' },
    { id: 4, name: 'HP', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg' },
    // { id: 5, name: 'Honeywell', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Honeywell_logo.svg' },
    // { id: 6, name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
    { id: 7, name: 'Lenovo', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg' },
    // { id: 8, name: 'D-Link', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/66/D-Link_logo.svg' },
];

const BrandCard = ({ brand }) => (
    <div className="bg-white border border-gray-100 shadow-sm rounded-lg h-32 flex items-center justify-center p-6 mx-2 hover:shadow-md transition-shadow grayscale hover:grayscale-0">
        <img
            src={brand.logo}
            alt={brand.name}
            className="max-h-16 max-w-[80%] object-contain opacity-70 hover:opacity-100 transition-opacity"
            onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerText = brand.name; }}
        />
    </div>
);

const Brands = () => {
    // Responsive State
    const [itemsVisible, setItemsVisible] = useState(5); // Default to desktop (5)

    // Carousel State
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    // Seamless Loop Data Preparation
    // Clone first 'itemsVisible' to the end.
    // For safety with resize, let's clone enough (max 5).
    const CLONE_COUNT = 5;
    const extendedBrands = [...brandsData, ...brandsData.slice(0, CLONE_COUNT)];
    const totalRealItems = brandsData.length;

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsVisible(2); // Mobile
            } else if (window.innerWidth < 1024) {
                setItemsVisible(3); // Tablet
            } else {
                setItemsVisible(5); // Desktop
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-slide
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex, itemsVisible]);

    const nextSlide = () => {
        if (currentIndex < totalRealItems) {
            setIsTransitioning(true);
            setCurrentIndex(prev => prev + 1);
        } else {
            // If at end of real items, move to clone (next index), then handle reset in transitionEnd
            setIsTransitioning(true);
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setIsTransitioning(true);
            setCurrentIndex(prev => prev - 1);
        }
    };

    // Handle Seamless Loop Transition End
    const handleTransitionEnd = () => {
        if (currentIndex >= totalRealItems) {
            // We reached the clone start.
            // Disable transition and jump back to 0 or relative position.
            // If we moved 1 step past totalRealItems, we are at index = totalRealItems.
            // This 'index' corresponds visually to index 0.
            setIsTransitioning(false);
            setCurrentIndex(currentIndex % totalRealItems);
        }
    };

    return (
        <section className="pt-20 pb-48 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-12">
                    <h4 className="text-orange-500 font-bold uppercase tracking-wider mb-3 text-sm">
                        WE WORK FOR
                    </h4>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        Our Customers
                    </h2>
                </div>

                {/* Slider Container */}
                <div className="relative group">
                    <div className="overflow-hidden py-4 -my-4 px-2">
                        <div
                            className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
                            style={{
                                transform: `translateX(-${currentIndex * (100 / itemsVisible)}%)`
                            }}
                            onTransitionEnd={handleTransitionEnd}
                        >
                            {extendedBrands.map((brand, index) => (
                                <div
                                    key={`${brand.id}-${index}`}
                                    className="flex-shrink-0"
                                    style={{ width: `${100 / itemsVisible}%` }}
                                >
                                    <BrandCard brand={brand} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 lg:-ml-12 w-10 h-10 rounded-full border border-gray-200 bg-white text-gray-400 hover:text-orange-500 hover:border-orange-500 flex items-center justify-center transition-all shadow-sm hover:shadow-md z-10"
                    >
                        ←
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 lg:-mr-12 w-10 h-10 rounded-full border border-gray-200 bg-white text-gray-400 hover:text-orange-500 hover:border-orange-500 flex items-center justify-center transition-all shadow-sm hover:shadow-md z-10"
                    >
                        →
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Brands;
