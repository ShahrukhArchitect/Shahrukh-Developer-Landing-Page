"use client";
import { motion } from "framer-motion";

const Comparison = () => {
    return (
        <section className="md:py-24 py-5 bg-[var(--background)] overflow-hidden relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#FFD700]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black font-jakarta text-[var(--foreground)] tracking-tight">
                        The Agency vs <span className="gold-gradient">The Architect</span>
                    </h2>
                    <p className="text-slate-500 mt-6 text-lg font-medium italic">Why pay for massive overheads when you can hire a dedicated AI Specialist?</p>
                </div>

                <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6">

                    {/* Agency Card - Now Visible but "Negative" Vibe */}
                    <motion.div
                        whileHover={{ scale: 0.99 }}
                        className="w-full lg:w-1/2 p-8 md:p-12 rounded-[40px] bg-slate-50 dark:bg-white/5 border border-red-500/20 shadow-lg transition-all duration-500 flex flex-col min-h-[550px]"
                    >
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-8 text-red-500/70 uppercase tracking-wider">Traditional Agency</h3>
                            <div className="space-y-8">
                                <div className="flex gap-4 items-start">
                                    <div className="w-6 h-6 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center text-xs shrink-0 mt-1 font-bold">✕</div>
                                    <p className="text-slate-600 dark:text-slate-400 text-base">3-6 months to deliver (Bloated & slow teams)</p>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-6 h-6 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center text-xs shrink-0 mt-1 font-bold">✕</div>
                                    <p className="text-slate-600 dark:text-slate-400 text-base">Massive overheads & hidden project management fees</p>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-6 h-6 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center text-xs shrink-0 mt-1 font-bold">✕</div>
                                    <p className="text-slate-600 dark:text-slate-400 text-base">Generic manual code that is hard to scale or automate</p>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-6 h-6 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center text-xs shrink-0 mt-1 font-bold">✕</div>
                                    <p className="text-slate-600 dark:text-slate-400 text-base">Communication through interns; 0% direct expert access</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 pt-6 border-t border-red-500/10">
                            <p className="text-red-500/50 font-bold text-center uppercase tracking-tighter italic">High Cost / Low Speed</p>
                        </div>
                    </motion.div>

                    {/* Your Card - Premium AI Architect */}
                    <motion.div
                        initial={{ scale: 1 }}
                        whileInView={{ scale: 1 }}
                        whileHover={{ scale: 1.02 }}
                        className="w-full lg:w-1/2 p-8 md:p-12 rounded-[40px] bg-white dark:bg-[#0B0E14] border-2 border-[#FFD700] shadow-[0_0_60px_rgba(255,215,0,0.15)] relative z-10 flex flex-col min-h-[550px]"
                    >
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FFD700] text-black px-6 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                            Premium Execution
                        </div>

                        <div className="flex-1">
                            <h3 className="text-3xl font-black mb-10 text-[var(--foreground)] tracking-tight">Working with <span className="text-[#FFD700]">Shahrukh</span></h3>

                            <div className="space-y-8">
                                <div className="flex gap-5 items-start">
                                    <div className="w-8 h-8 rounded-xl bg-[#FFD700]/10 text-[#FFD700] flex items-center justify-center shrink-0 shadow-sm">⚡</div>
                                    <div>
                                        <h4 className="font-bold text-[var(--foreground)] text-lg">AI-Accelerated Systems</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Complex AI agents & workflows live in <span className="text-[#FFD700] font-bold text-base">14 days</span>.</p>
                                    </div>
                                </div>

                                <div className="flex gap-5 items-start">
                                    <div className="w-8 h-8 rounded-xl bg-[#FFD700]/10 text-[#FFD700] flex items-center justify-center shrink-0 shadow-sm">🦾</div>
                                    <div>
                                        <h4 className="font-bold text-[var(--foreground)] text-lg">Autonomous Logic</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">I build logic that <span className="text-[#FFD700] font-bold">acts</span> autonomously. Real ROI focused.</p>
                                    </div>
                                </div>

                                <div className="flex gap-5 items-start">
                                    <div className="w-8 h-8 rounded-xl bg-[#FFD700]/10 text-[#FFD700] flex items-center justify-center shrink-0 shadow-sm">🤝</div>
                                    <div>
                                        <h4 className="font-bold text-[var(--foreground)] text-lg">Direct Architect Access</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Direct access to the expert. 0% middleman delays. 100% execution.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="w-full mt-10 py-5 bg-[#FFD700] text-black font-black uppercase tracking-widest rounded-2xl hover:brightness-110 transition-all shadow-[0_10px_30px_rgba(255,215,0,0.3)] active:scale-95">
                            BOOK A DISCOVERY CALL
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Comparison;