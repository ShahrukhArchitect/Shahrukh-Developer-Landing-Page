"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const reviews = [
    {
        name: "Jonathan Nixon",
        role: "Managing Partner, Nixon Law",
        text: "Shahrukh built an AI intake system that saves our paralegals 15 hours a week. Truly a systems architect.",
        avatar: "JN"
    },
    {
        name: "Debra Vernon",
        role: "CEO, Asset Growth Real Estate",
        text: "The custom dashboard he built gives me real-time visibility into my portfolio. No more manual Excel tracking!",
        avatar: "DV"
    },
    {
        name: "Scott Kveton",
        role: "Tech Investor & Founder",
        text: "Exceptional speed. He doesn't just code; he understands the business logic behind the automation.",
        avatar: "SK"
    },
    {
        name: "Marcus Thorne",
        role: "Operations Head, BuildRight UK",
        text: "The AI agents Shahrukh deployed handle our vendor follow-ups flawlessly. Our efficiency is up by 40%.",
        avatar: "MT"
    },
    {
        name: "Elena Rodriguez",
        role: "Founder, ScaleUp SaaS",
        text: "From manual chaos to a streamlined AI engine in 14 days. Shahrukh is the secret weapon for any founder.",
        avatar: "ER"
    },
    {
        name: "David Chen",
        role: "Director, Logistics AI",
        text: "His ability to integrate complex LLMs into existing workflows is world-class. Highly recommended.",
        avatar: "DC"
    },
    {
        name: "Sarah Jenkins",
        role: "Product Manager, RetailAI",
        text: "Rare to find someone who masters both UI/UX and deep technical AI architecture.",
        avatar: "SJ"
    },
    {
        name: "James Wilson",
        role: "CEO, HealthSync",
        text: "Best decision for our automation needs. High-quality code and very professional delivery.",
        avatar: "JW"
    },
    {
        name: "Robert Miller",
        role: "Owner, Miller & Associates",
        text: "The automated lead qualification system has doubled our conversion rate. Absolute game changer.",
        avatar: "RM"
    },
    {
        name: "Linda Wu",
        role: "COO, Nexus Solutions",
        text: "Clean architecture and scalable logic. Our system handles 10k+ requests without a hitch.",
        avatar: "LW"
    }
];

const Testimonials = () => {
    // Duplicate reviews for infinite loop effect
    const duplicatedReviews = [...reviews, ...reviews];

    return (
        <section id="testimonials" className="md:py-24 py-5 bg-[var(--background)] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:mb-16 mb-3">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black font-jakarta text-[var(--foreground)] tracking-tight">
                            Trusted by <br />
                            <span className="gold-gradient">Global Leaders</span>
                        </h2>
                        <p className="text-slate-500 mt-6 text-lg font-medium italic">
                            The difference between a developer and an architect is the logic behind the code.
                        </p>
                    </div>
                </div>
            </div>

            {/* Infinite Horizontal Scroll */}
            <div className="flex relative">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 200,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex gap-8 whitespace-nowrap"
                >
                    {duplicatedReviews.map((rev, index) => (
                        <div
                            key={index}
                            // bg-slate-50 nikal kar bg-[#111418] (dark card) laga diya hai
                            className="w-[350px] md:w-[450px] shrink-0 p-8 rounded-[40px] bg-[#111418] border border-white/5 relative group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-[#FFD700]/10 border border-[#FFD700]/20 flex items-center justify-center font-bold text-[#FFD700] text-sm">
                                    {rev.avatar}
                                </div>
                                <div>
                                    {/* text-[var(--foreground)] nikal kar text-white force kar diya */}
                                    <h4 className="font-bold text-white text-lg">{rev.name}</h4>
                                    <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">{rev.role}</p>
                                </div>
                            </div>
                            {/* text-slate-600 nikal kar text-slate-400 kar diya taake dark bg par nazar aaye */}
                            <p className="text-slate-400 italic leading-relaxed text-sm md:text-base whitespace-normal">
                                "{rev.text}"
                            </p>
                            <div className="mt-6 flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-[#FFD700]">★</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Overlays for smooth fade */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />
            </div>
        </section>
    );
};

export default Testimonials;