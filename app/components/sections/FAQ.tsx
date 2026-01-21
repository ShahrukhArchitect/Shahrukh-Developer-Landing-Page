"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        q: "How can you build a complex AI system in just 14 days?",
        a: "I focus on high-impact logic, not fluff. By using a battle-tested modular architecture, I can deploy autonomous agents and custom workflows in weeks, not months. Speed is your competitive advantage—I ensure you use it."
    },
    {
        q: "Why only 2 projects per month?",
        a: "AI implementation requires deep focus and precision. Unlike agencies that juggle 20 projects, I limit my intake to ensure your system’s architecture is flawless, secure, and optimized for maximum ROI."
    },
    {
        q: "Will this AI system actually scale as my business grows?",
        a: "Absolutely. I build using the 'Scale-Ready' stack (Next.js + Supabase/PostgreSQL) and enterprise-grade LLM integrations. Your system will be ready to handle everything from your first 100 leads to 10,000+ automated actions."
    },
    {
        q: "What happens if the AI logic needs tweaking after launch?",
        a: "Deployment is just Day 1. I provide 30 days of hyper-support to monitor your AI agents, refine their prompts, and ensure the workflows are delivering the exact efficiency we planned for."
    },
    {
        q: "Is my business data safe with AI integrations?",
        a: "Data security is my top priority. I implement secure API layers and sign NDAs before any discussion. Your intellectual property and client data remain 100% yours and are never used for training public models."
    }
];

const FAQ = () => {
    // null ka matlab hai sab band hain, index number ka matlab woh wala open hai
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-[var(--background)]">
            <div className="max-w-7xl mx-auto px-6 mb-16 ">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black font-jakarta text-[var(--foreground)] tracking-tight">
                            Still have <span className="gold-gradient">Doubts</span>
                        </h2>
                        <p className="text-slate-500 mt-6 text-lg font-medium italic">
                            The difference between a developer and an architect is the logic behind the code.
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-3xl mx-auto px-6">

                <div className="space-y-4">
                    {faqs.map((faq, i) => {
                        const isOpen = activeIndex === i;

                        return (
                            <div
                                key={i}
                                className={`border rounded-[24px] transition-all duration-300 overflow-hidden ${isOpen
                                    ? "border-[#FFD700] bg-white dark:bg-[#111827] shadow-lg shadow-yellow-500/5"
                                    : "border-slate-200 dark:border-white/5 bg-transparent hover:border-slate-300 dark:hover:border-white/10"
                                    }`}
                            >
                                <button
                                    onClick={() => setActiveIndex(isOpen ? null : i)}
                                    className="w-full p-6 text-left flex justify-between items-center outline-none"
                                >
                                    <span className={`font-bold text-lg transition-colors ${isOpen ? "text-[var(--primary-gold)]" : "text-[var(--foreground)]"}`}>
                                        {faq.q}
                                    </span>
                                    <motion.span
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="text-[#FFD700] text-xl"
                                    >
                                        ↓
                                    </motion.span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-black/5 dark:border-white/5 pt-4 mx-6">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;