import React, { useState, useEffect } from 'react';

// Placeholder Media Images (5 items)
// Using clear, professional Unsplash images representing corporate events/awards/team.
const mediaData = [
    { id: 1, title: 'Corporate Event', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80' },
    { id: 2, title: 'Award Ceremony', image: 'https://images.unsplash.com/photo-1576267423048-15c0040fec78?auto=format&fit=crop&w=600&q=80' },
    { id: 3, title: 'Team Meeting', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80' },
    { id: 4, title: 'Tech Expo', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80' }, // Reusing tech image for expo
    { id: 5, title: 'Office Life', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80' },
];

const MediaCard = ({ item }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mx-3 h-64 border border-gray-100 hover:shadow-lg transition-shadow">
        <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
        />
    </div>
);

const MediaSlider = () => {
    // Responsive State
    const [itemsVisible, setItemsVisible] = useState(3);

    // Carousel State
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    // Seamless Loop Data
    const CLONE_COUNT = 3;
    const extendedMedia = [...mediaData, ...mediaData.slice(0, CLONE_COUNT)];
    const totalRealItems = mediaData.length;

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsVisible(1); // Mobile
            } else if (window.innerWidth < 1024) {
                setItemsVisible(2); // Tablet
            } else {
                setItemsVisible(3); // Desktop
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
                        OUR GALLERY
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        Our Media
                    </h2>
                </div>

                {/* Slider Container */}
                <div className="relative overflow-hidden mb-12">
                    <div
                        className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
                        style={{
                            transform: `translateX(-${currentIndex * (100 / itemsVisible)}%)`
                        }}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {extendedMedia.map((item, index) => (
                            <div
                                key={`${item.id}-${index}`}
                                className="flex-shrink-0 px-2"
                                style={{ width: `${100 / itemsVisible}%` }}
                            >
                                <MediaCard item={item} />
                            </div>
                        ))}
                    </div>
                </div>



            </div>
        </section>
    );
};

export default MediaSlider;
