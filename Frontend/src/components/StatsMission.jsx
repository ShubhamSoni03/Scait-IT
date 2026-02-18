import React, { useState, useEffect, useRef } from 'react';

const CountUp = ({ end, duration = 600 }) => {
    const [count, setCount] = useState(0);
    const [isDone, setIsDone] = useState(false);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );
        if (countRef.current) observer.observe(countRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTimestamp = null;
        
        // Ease-out function: fast start, slow end
        const easeOutQuad = (t) => t * (2 - t);

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const elapsed = timestamp - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);
            
            // Apply easing to the progress
            const easedProgress = easeOutQuad(progress);
            
            setCount(Math.floor(easedProgress * end));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                setIsDone(true);
            }
        };
        
        window.requestAnimationFrame(step);
    }, [isVisible, end, duration]);

    return (
        <span 
            ref={countRef} 
            className={`inline-block transition-transform duration-300 ${isDone ? 'scale-110 text-white' : 'scale-100'}`}
        >
            {count.toLocaleString()}
        </span>
    );
};

const StatsMission = () => {
    return (
        <div className="relative z-20 font-sans">
            <div className="absolute left-0 right-0 top-0 -translate-y-1/2 px-4 z-30">
                <div className="container mx-auto">
                    <div className="bg-orange-500 rounded-2xl shadow-[0_20px_50px_rgba(234,88,12,0.3)] py-10 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center">
                        
                        {/* Stat 1 */}
                        <div className="flex flex-col items-center justify-center p-4 border-b md:border-b-0 md:border-r border-orange-400/30">
                            <h3 className="text-5xl font-black mb-1 tracking-tighter">
                                <CountUp end={27} duration={500} />
                            </h3>
                            <p className="text-xs uppercase font-bold tracking-widest opacity-80">Years of Trust</p>
                        </div>

                        {/* Stat 2 */}
                        <div className="flex flex-col items-center justify-center p-4 border-b md:border-b-0 md:border-r border-orange-400/30">
                            <h3 className="text-5xl font-black mb-1 tracking-tighter">
                                <CountUp end={250} duration={700} />+
                            </h3>
                            <p className="text-xs uppercase font-bold tracking-widest opacity-80">Happy Customers</p>
                        </div>

                        {/* Stat 3 */}
                        <div className="flex flex-col items-center justify-center p-4 border-b md:border-b-0 lg:border-r border-orange-400/30">
                            <h3 className="text-5xl font-black mb-1 tracking-tighter">
                                <CountUp end={250} duration={700} />+
                            </h3>
                            <p className="text-xs uppercase font-bold tracking-widest opacity-80">Employees</p>
                        </div>

                        {/* Stat 4 */}
                        <div className="flex flex-col items-center justify-center p-4">
                            <h3 className="text-5xl font-black mb-1 tracking-tighter">
                                <CountUp end={5000} duration={900} />+
                            </h3>
                            <p className="text-xs uppercase font-bold tracking-widest opacity-80">Projects Done</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Blue Section */}
            <section className="bg-blue-600 pt-56 pb-24 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <span className="bg-blue-500/30 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
                            Our Impact
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight">
                            WE DON'T JUST BUILD,<br/>WE DELIVER RESULTS.
                        </h2>
                    </div>
                    {/* Mission/Vision Cards here */}
                </div>
            </section>
        </div>
    );
};

export default StatsMission;