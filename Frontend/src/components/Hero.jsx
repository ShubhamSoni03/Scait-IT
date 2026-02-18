import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=2000&auto=format&fit=crop", // Reliable Tech/Server room
        smallHeading: "27 Years of Experience",
        mainHeading: "Premier Player in Networking Industry",
        cta: "Explore Our Service"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop", // Professional Corporate Team meeting in modern office
        smallHeading: "Global Reach",
        mainHeading: "Delivering Excellence Across Borders",
        cta: "Explore Our Service"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop", // Cybersecurity/Network abstract blue tech
        smallHeading: "Trusted Partners",
        mainHeading: "Empowering Business Growth",
        cta: "Explore Our Service"
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [textVisible, setTextVisible] = useState(true);
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: false,
        arrows: true,
        // Custom arrows implementation to match "enterprise" look if needed, 
        // but default arrows are often fine or can be styled via CSS. 
        // We'll use default for now or standard Slick classes.
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        beforeChange: (current, next) => {
            setTextVisible(false);
        },
        afterChange: (current) => {
            setCurrentSlide(current);
            setTextVisible(true);
        }
    };

    const activeSlide = slides[currentSlide];

    return (
        <div className="relative w-full h-[600px] overflow-hidden bg-black text-white group ">
            {/* Background Slider */}
            <Slider ref={sliderRef} {...settings} className="h-full w-full">
                {slides.map((slide) => (
                    <div key={slide.id} className="relative h-[600px] w-full outline-none">
                        {/* Overlay for better text readability */}
                        <div className="absolute inset-0 bg-black/50 z-10" />
                        <img
                            src={slide.image}
                            alt={slide.mainHeading}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </Slider>

            {/* Decoupled Text Overlay */}
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <div className="container mx-auto px-4 text-center">
                    {/* 
            We use a key here to force re-render if needed, but since we rely on 
            opacity transitions controlled by 'textVisible', we keep the DOM node 
            stable but toggle classes. 
             
            However, user requested "re-animate in a staged, sequential manner... 
            after each image transition completes".
            The 'textVisible' state goes false->true.
            We can use that to trigger animations.
          */}

                    <div className="overflow-hidden">
                        <h3
                            className={`text-orange-500 font-bold tracking-wider mb-2 text-lg md:text-xl transition-all duration-700 transform
               ${textVisible ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-8'}`}
                        >
                            {activeSlide.smallHeading}
                        </h3>
                    </div>

                    <div className="overflow-hidden my-2">
                        <h1
                            className={`text-4xl md:text-6xl font-extrabold mb-6 transition-all duration-700 transform
              ${textVisible ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-8'}`}
                        >
                            {activeSlide.mainHeading}
                        </h1>
                    </div>

                    <div className="overflow-hidden">
                        <Link to="/services/active-networking" className="pointer-events-auto inline-block">
                            <button
                                className={`bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition-all duration-700 transform
                  ${textVisible ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-8'}`}
                            >
                                {activeSlide.cta}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Custom Arrow Components for ensuring they are visible and styled
const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
        {...props}
        className={
            "absolute left-4 z-30 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-orange-500 text-white flex items-center justify-center rounded-full transition-colors duration-300 opacity-0 group-hover:opacity-100 cursor-pointer" +
            (props.className?.includes("slick-disabled") ? " hidden" : "")
        }
        aria-hidden="true"
        aria-label="Previous"
        type="button"
    >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
    </button>
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
        {...props}
        className={
            "absolute right-4 z-30 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-orange-500 text-white flex items-center justify-center rounded-full transition-colors duration-300 opacity-0 group-hover:opacity-100 cursor-pointer" +
            (props.className?.includes("slick-disabled") ? " hidden" : "")
        }
        aria-hidden="true"
        aria-label="Next"
        type="button"
    >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
    </button>
);

export default Hero;
