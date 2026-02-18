import React from 'react';

const HighlightItem = ({ title, icon }) => (
    <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
        <div className="text-blue-400">
            {icon}
        </div>
        <h4 className="text-lg font-semibold text-white">{title}</h4>
    </div>
);

const Highlights = () => {
    return (
        <div className="py-16 bg-blue-900 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us?</h2>
                    <p className="text-blue-100 max-w-2xl mx-auto">
                        We deliver excellence through our commitment to quality and innovation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <HighlightItem
                        title="Expert Team"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m0 0c-.314.026-.626.041-.94.041a3 3 0 00-3.003 3.86m2.846-.62c.995.346 2.062.535 3.172.535S10.29 22.06 11.285 21.71m-2.846-.62M16.5 6.75A4.5 4.5 0 1012 11.25a4.5 4.5 0 004.5-4.5zM12.75 3a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        }
                    />
                    <HighlightItem
                        title="24/7 Support"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        }
                    />
                    <HighlightItem
                        title="Cost Effective"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        }
                    />
                    <HighlightItem
                        title="Secure"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default Highlights;
