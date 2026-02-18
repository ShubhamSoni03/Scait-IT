import React, { useState, useEffect } from 'react';


// Real Partner Logos
const partnersData = [
    { id: 1, name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
    { id: 2, name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    // { id: 3, name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Cloud_logo.svg' },
    { id: 4, name: 'VMware', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg' },
    // { id: 5, name: 'Intel', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Intel_logo_%282023%29.svg' },
    { id: 6, name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
];


const PartnerCard = ({ partner }) => (
    <div className="bg-white border border-gray-100 shadow-sm rounded-lg h-32 flex items-center justify-center p-6 mx-2 hover:shadow-md transition-shadow grayscale hover:grayscale-0">
        <img
            src={partner.logo}
            alt={partner.name}
            className="max-h-16 max-w-[80%] object-contain opacity-70 hover:opacity-100 transition-opacity"
            onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerText = partner.name; }}
        />
    </div>
);


const PartnerSlider = () => {
    // Responsive State
    const [itemsVisible, setItemsVisible] = useState(5);


    // Carousel State
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);


    // Seamless Loop Data Preparation
    const CLONE_COUNT = 5;
    const extendedPartners = [...partnersData, ...partnersData.slice(0, CLONE_COUNT)];
    const totalRealItems = partnersData.length;


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


    const handleTransitionEnd = () => {
        if (currentIndex >= totalRealItems) {
            setIsTransitioning(false);
            setCurrentIndex(currentIndex % totalRealItems);
        }
    };


    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">


                {/* Header */}
                <div className="text-center mb-16">
                    <h4 className="text-orange-500 font-bold uppercase tracking-wider mb-3 text-sm">
                        PARTNERS
                    </h4>
                    <h2 className="text-4xl font-extrabold text-gray-900">
                        Our Alliance
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
                            {extendedPartners.map((partner, index) => (
                                <div
                                    key={`${partner.id}-${index}`}
                                    className="flex-shrink-0"
                                    style={{ width: `${100 / itemsVisible}%` }}
                                >
                                    <PartnerCard partner={partner} />
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


export default PartnerSlider;
