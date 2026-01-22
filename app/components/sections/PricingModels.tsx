"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const solutions = [
    {
        name: "AI Workflow Sprint",
        tag: "Efficiency First",
        logic: "Operational Mapping",
        ideal: "For law firms and agencies needing to automate lead intake and manual paperwork.",
        useCase: "A partner wanting to reclaim 10+ hours a week by automating document generation and client follow-ups.",
        deliverables: [
            "1 Strategic Operations Dashboard",
            "AI-Driven Automation Engine",
            "Secure Client Data Management",
            "Automated Reporting System",
            "Process Mapping & UI Design"
        ],
        highlight: false
    },
    {
        name: "AI Agent Ecosystem",
        tag: "Autonomous Staff",
        logic: "Task-Based Intelligence",
        ideal: "For businesses needing 'Digital Workers' to handle sales, support, or data entry 24/7.",
        useCase: "Real estate or construction firms managing hundreds of vendor queries and inventory updates autonomously.",
        deliverables: [
            "Dual-Agent Dashboards (Admin + Staff)",
            "Autonomous Communication Layer",
            "AI Document & Image Processing",
            "Real-time Efficiency Analytics",
            "Custom Notification & Action System"
        ],
        highlight: true // Most Popular
    },
    {
        name: "Enterprise AI Architecture",
        tag: "Full-Scale Transformation",
        logic: "Departmental Intelligence",
        ideal: "For large firms needing separate AI interfaces for different departments (Sales, HR, Logistics).",
        useCase: "A complex platform that automates the entire lifecycle—from lead to delivery with zero manual friction.",
        deliverables: [
            "Up to 4 Specialized AI Interfaces",
            "Complex Multi-Step Workflows",
            "Deep API & Legacy Integrations",
            "Real-time Logic Sync (Websockets)",
            "Enterprise-Grade Data Security"
        ],
        highlight: false
    }
];

const PricingModels = () => {
    return (
        <section className="md:py-24 py-12 bg-[var(--background)]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center md:mb-16 mb-10">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 text-[var(--foreground)] tracking-tight">
                        Execution<span className="gold-gradient"> Models</span>
                    </h2>
                    <p className="text-slate-500 text-lg font-medium italic">
                        No vague promises. Choose the model that matches your product's complexity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {solutions.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`relative p-10 rounded-[45px] border-2 transition-all duration-500 flex flex-col h-full ${
                                item.highlight
                                    ? "border-[#FFD700] bg-[#FFD700]/5 shadow-[0_20px_80px_rgba(255,215,0,0.15)] ring-2 ring-[#FFD700]/20" 
                                    : "border-slate-800 bg-[#0B0E14] text-white" // Side cards forced to be black with white text
                            }`}
                        >
                            {item.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFD700] text-black text-[10px] font-black px-6 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg z-20">
                                    Recommended
                                </div>
                            )}

                            <div className="mb-8 relative z-10">
                                <p className="text-[#FFD700] text-xs font-black uppercase tracking-[0.3em] mb-3">{item.tag}</p>
                                {/* Heading forced to be white for side cards, and theme-dependent for center card */}
                                <h3 className={`text-3xl font-black mb-4 ${item.highlight ? "text-[var(--foreground)]" : "text-white"}`}>
                                    {item.name}
                                </h3>
                                <span className="inline-block px-4 py-1.5 rounded-xl bg-white/5 text-[#FFD700] border border-[#FFD700]/20 font-bold text-xs">
                                    {item.logic}
                                </span>
                            </div>

                            <div className="flex-grow relative z-10">
                                <div className={`mb-8 p-5 rounded-2xl border ${
                                    item.highlight 
                                    ? "bg-black/5 dark:bg-white/5 border-black/5 dark:border-white/5" 
                                    : "bg-white/5 border-white/5"
                                }`}>
                                    <p className="text-[10px] font-black uppercase text-slate-400 mb-2">Best For:</p>
                                    <p className={`text-sm font-semibold leading-relaxed ${item.highlight ? "text-slate-600 dark:text-slate-300" : "text-slate-300"}`}>
                                        {item.useCase}
                                    </p>
                                </div>

                                <div className="space-y-4 mb-10">
                                    {item.deliverables.map((feature, index) => (
                                        <div key={index} className={`flex items-start gap-3 text-sm ${item.highlight ? "text-slate-500 dark:text-slate-400" : "text-slate-400"}`}>
                                            <span className="text-[#FFD700] mt-1">✦</span>
                                            <span className="font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Link href="#contact" className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] text-center transition-all duration-300 ${
                                item.highlight
                                    ? "bg-[#FFD700] text-black shadow-xl shadow-yellow-500/20 hover:scale-[1.02]"
                                    : "bg-white/10 border border-white/10 text-white hover:bg-white hover:text-black"
                                }`}>
                                BOOK A DISCOVERY CALL
                            </Link >
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingModels;