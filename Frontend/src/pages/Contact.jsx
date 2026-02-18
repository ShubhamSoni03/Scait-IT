import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReCAPTCHA from "react-google-recaptcha";
import ServiceHero from '../components/ServiceHero';

const ContactUs = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [statusMessage, setStatusMessage] = useState('');
    const [captchaToken, setCaptchaToken] = useState(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth) - 0.5,
                y: (e.clientY / window.innerHeight) - 0.5,
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

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

        try {
            const response = await fetch('http://localhost:5001/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, token: captchaToken }),
            });
            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setStatusMessage('Message sent successfully! We will get back to you soon.');
                setFormData({ name: '', email: '', phone: '', message: '' });
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
        <div className="bg-[#030712] min-h-screen overflow-hidden">
            <ServiceHero title="Contact Us" />

            <section className="relative py-20 md:py-32">
                {/* --- FLOATING DECORATIONS --- */}
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        animate={{ y: [0, -40, 0], x: mousePos.x * 50 }}
                        transition={{ duration: 15, repeat: Infinity }}
                        className="absolute top-20 left-[10%] w-32 h-32 border border-orange-500/10 rounded-xl"
                    />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* LEFT COLUMN: Info & Map */}
                        <div className="w-full lg:w-1/2 space-y-12">
                            <div>
                                <h4 className="text-orange-500 font-black uppercase tracking-[0.4em] mb-4 text-xs">// Geolocation_Ping</h4>
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase italic tracking-tighter">
                                    Global <span className="text-transparent stroke-white">HQ</span>
                                </h2>

                                {/* --- THE MAP INTERFACE --- */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="relative p-1 bg-gradient-to-br from-orange-600/40 to-cyan-600/40 rounded-3xl overflow-hidden shadow-2xl"
                                >
                                    {/* Map HUD Overlay */}
                                    <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/10">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                            <span className="text-[10px] font-mono text-white uppercase tracking-widest">Signal: Stable</span>
                                        </div>
                                    </div>

                                    {/* Google Maps Embed */}
                                    <div className="w-full h-80 md:h-[400px] rounded-[22px] overflow-hidden grayscale invert-[0.9] contrast-[1.2] opacity-80 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-700">
                                        <iframe
                                            title="SCAIT Location"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0471243187!2d73.78051!3d18.52456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43100c34f393!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />
                                    </div>

                                    {/* Scanning line effect on Map */}
                                    <motion.div
                                        animate={{ top: ['0%', '100%'] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        className="absolute left-0 w-full h-[2px] bg-orange-500/20 shadow-[0_0_15px_#ea580c] z-10 pointer-events-none"
                                    />
                                </motion.div>
                            </div>

                            {/* Contact Details HUD */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { label: 'Support_Node', val: '+020-69034270' },
                                    { label: 'Global_Relay', val: 'support@scait.co.in' }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-4 bg-white/5 border-l-2 border-orange-600 backdrop-blur-sm">
                                        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{item.label}</div>
                                        <div className="text-white font-bold">{item.val}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Contact Form */}
                        <div className="w-full lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="relative bg-white/[0.03] backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10"
                            >
                                <h3 className="text-2xl font-black text-white mb-2 uppercase italic tracking-tighter">Transmission Input</h3>
                                <p className="text-slate-500 text-xs mb-10 font-mono tracking-widest uppercase">Required fields marked with *</p>

                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Source Name *"
                                        required
                                        className="w-full bg-white/5 border-b border-white/10 py-4 outline-none focus:border-orange-500 transition-all text-white font-mono text-sm"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Access Email *"
                                        required
                                        className="w-full bg-white/5 border-b border-white/10 py-4 outline-none focus:border-orange-500 transition-all text-white font-mono text-sm"
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Comm Frequency (Phone) *"
                                        className="w-full bg-white/5 border-b border-white/10 py-4 outline-none focus:border-orange-500 transition-all text-white font-mono text-sm"
                                    />
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Message Parameters..."
                                        required
                                        rows="4"
                                        className="w-full bg-white/5 border-b border-white/10 py-4 outline-none focus:border-orange-500 transition-all text-white font-mono text-sm resize-none"
                                    />

                                    <div className="mb-4 transform scale-90 origin-left">
                                        <ReCAPTCHA
                                            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                                            onChange={(token) => setCaptchaToken(token)}
                                            theme="dark"
                                        />
                                    </div>

                                    {statusMessage && (
                                        <div className={`p-4 rounded-lg text-sm font-mono tracking-wide ${status === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                                            {statusMessage}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className={`w-full bg-orange-600 hover:bg-orange-500 text-white font-black py-5 rounded-xl uppercase tracking-[0.3em] text-xs transition-colors shadow-[0_0_20px_rgba(234,88,12,0.3)] flex justify-center items-center gap-2 ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {status === 'submitting' ? 'Transmitting...' : <>Execute Transmission <span className="text-xl">→</span></>}
                                    </button>
                                </form>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{ __html: `.stroke-white { -webkit-text-stroke: 1px rgba(255,255,255,0.2); }` }} />
        </div>
    );
};

export default ContactUs;