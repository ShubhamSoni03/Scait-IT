import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [statusMessage, setStatusMessage] = useState('');
    const [captchaToken, setCaptchaToken] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        setStatusMessage('');

        if (!captchaToken) {
            setStatus('error');
            setStatusMessage('Please verify that you are not a robot.');
            return;
        }

        const payload = {
            name: `${formData.firstName} ${formData.lastName}`.trim(),
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            token: captchaToken
        };

        try {
            const response = await fetch('http://localhost:5001/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setStatusMessage('Message sent successfully! We will get back to you soon.');
                setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
                setCaptchaToken(null);
            } else {
                setStatus('error');
                setStatusMessage(data.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            setStatusMessage('Could not connect to server. Please try again later.');
        }
    };
    return (
        <section className="flex flex-col lg:flex-row h-auto">
            {/* Left Column: Image Section */}
            <div className="w-80 lg:w-1/2 relative h-64 lg:h-auto">
                {/* Blue Accent Bar */}
                <div className="absolute top-0 left-0 w-full h-2 bg-blue-500 z-10"></div>

                <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
                    alt="IT Worker"
                    className="w-full h-full object-cover"
                />

                {/* Optional Overlay if needed for contrast, but user asked for clean image */}
                {/* <div className="absolute inset-0 bg-black/10"></div> */}
            </div>

            {/* Right Column: Contact Form */}
            <div className="w-full lg:w-1/2 bg-gray-50 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="max-w-lg mx-auto w-full">
                    <h4 className="text-orange-500 font-bold uppercase tracking-wider mb-2 text-sm">
                        GET IN TOUCH
                    </h4>
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
                        Let's Work Together
                    </h2>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* First Name */}
                            <div>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name*"
                                    required
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-400"
                                />
                            </div>
                            {/* Last Name */}
                            <div>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last Name*"
                                    required
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-400"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Email */}
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Address*"
                                    required
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-400"
                                />
                            </div>
                            {/* Phone */}
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number*"
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-400"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write Your Message"
                                required
                                rows="4"
                                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-400 resize-none"
                            ></textarea>
                        </div>

                        {/* reCAPTCHA */}
                        <div className="mb-4">
                            <ReCAPTCHA
                                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                                onChange={(token) => setCaptchaToken(token)}
                                theme="light"
                            />
                        </div>

                        {/* Status Message */}
                        {statusMessage && (
                            <div className={`p-4 rounded-lg text-sm font-medium ${status === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                                {statusMessage}
                            </div>
                        )}

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className={`bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2 group w-full md:w-auto justify-center ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {status === 'submitting' ? 'Sending...' : 'Send Us Messages'}
                                {!status === 'submitting' && <span className="group-hover:translate-x-1 transition-transform">→</span>}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
