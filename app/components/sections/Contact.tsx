"use client";
import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-[#030712] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Side: Text Content */}
                    <div className="lg:sticky lg:top-24">
                        <h2 className="text-4xl md:text-6xl font-black font-jakarta leading-tight text-white tracking-tight">
                            Ready to <br />
                            <span className="gold-gradient italic">Automate</span> your <br />
                            <span className="text-[#FFD700] underline decoration-wavy">Operations</span>
                        </h2>
                        <p className="text-slate-500 mt-6 text-lg max-w-md font-medium">
                            Stop fighting with manual workflows. Select a time below to discuss how we can scale your business with custom solutions.
                        </p>

                        <div className="mt-12 space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-2xl bg-[#FFD700]/10 border border-[#FFD700]/20 flex items-center justify-center text-[#FFD700]">📧</div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Direct Line</p>
                                    <p className="text-lg font-medium text-white">contact@shahrukhdeveloper.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-2xl bg-[#FFD700]/10 border border-[#FFD700]/20 flex items-center justify-center text-[#FFD700]">🌍</div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Service Area</p>
                                    <p className="text-lg font-medium text-white">Global Execution | PK Base</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Direct Calendly Widget */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#0B0E14] min-h-[650px] rounded-[40px] border-2 border-[#FFD700]/20 shadow-[0_0_50px_rgba(255,215,0,0.05)] overflow-hidden"
                    >
                        <InlineWidget 
                            url="https://calendly.com/shahrukhdeveloper101/30min"  
                            styles={{ height: '650px', width: '100%' }}
                            pageSettings={{
                                backgroundColor: '0b0e14',
                                hideEventTypeDetails: false,
                                hideLandingPageDetails: false,
                                primaryColor: 'ffd700',
                                textColor: 'ffffff'
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;