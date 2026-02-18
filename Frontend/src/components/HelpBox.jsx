import React from 'react';

const HelpBox = () => {
    return (
        <div className="bg-[#f8f9fa] border border-gray-200 p-6 rounded-lg shadow-sm mt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-orange-500 pl-3">
                How Can I Help You?
            </h3>
            <div className="space-y-4 text-gray-600">
                <p className="text-sm leading-relaxed">
                    Contact us for any inquiries or support regarding our services. We are here to help you.
                </p>

                <div className="flex items-start space-x-3">
                    <div className="mt-1 w-8 h-8 flex items-center justify-center bg-orange-100 rounded-full text-orange-500">
                        <span className="text-lg">📞</span>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800">Phone</p>
                        <p className="text-sm hover:text-orange-500 transition-colors cursor-pointer">+91-1234567890</p>
                    </div>
                </div>

                <div className="flex items-start space-x-3">
                    <div className="mt-1 w-8 h-8 flex items-center justify-center bg-orange-100 rounded-full text-orange-500">
                        <span className="text-lg">✉️</span>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800">Email</p>
                        <p className="text-sm hover:text-orange-500 transition-colors cursor-pointer">info@scait.co.in</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpBox;
