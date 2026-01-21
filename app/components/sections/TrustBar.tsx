"use client";
import { motion } from "framer-motion";

const TrustBar = () => {
    const row1 = [
        "EarthLink", "Bostadsval", "EGameX", "Kommercia",
        "Learn Italiano", "Prime Transfers", "Abiz Consultant", "Climax", "Offical League", "GFuel", "Tilal", "Khazina Collection", "Jeffre Star", "Allbirds", "Siani Law Firm",
        "Chatton Capital", "JustLoud", "Diamond Aesthetic", "My Digital Prof",
        "Batreek", "Music Fund", "French Dandy", "Petgolu", "Grunt Style", "Steve Madden", "Adamson Ahdoot", "SSD Law Firm", "Ferrante & koenig", "HHJ Trial Attorneys", "Baker Love"
    ];

    const row2 = [
        "Chatton Capital", "JustLoud", "Diamond Aesthetic", "My Digital Prof",
        "Batreek", "Music Fund", "French Dandy", "Petgolu", "Grunt Style", "Steve Madden", "Adamson Ahdoot", "SSD Law Firm", "Ferrante & koenig", "HHJ Trial Attorneys", "Baker Love",
        "EarthLink", "Bostadsval", "EGameX", "Kommercia",
        "Learn Italiano", "Prime Transfers", "Abiz Consultant", "Climax", "Offical League", "GFuel", "Tilal", "Khazina Collection", "Jeffre Star", "Allbirds", "Siani Law Firm"
    ];

    // Animation helper component
    const ScrollingRow = ({ items, direction = 1 }: { items: string[], direction?: number }) => (
        <div className="flex overflow-hidden select-none">
            <motion.div
                animate={{
                    x: direction > 0 ? [-2000, 0] : [0, -2000],
                }}
                transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="flex flex-nowrap gap-12 md:gap-24 md:py-4 pr-12 md:pr-24"
            >
                {/* We duplicate the items to create a seamless loop */}
                {[...items, ...items, ...items, ...items].map((brand, i) => (
                    <span
                        key={i}
                        className="text-xl md:text-3xl font-black font-jakarta text-[var(--foreground)] opacity-30 hover:opacity-100 hover:text-[var(--primary-gold)] transition-all duration-300 whitespace-nowrap"
                    >
                        {brand}
                    </span>
                ))}
            </motion.div>
        </div>
    );

    return (
        <section className="py-5 md:py-20 bg-[var(--background)] border-y border-black/5 dark:border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <div className="text-center mb-5 md:mb-20">
                    <h2 className="text-4xl md:text-6xl font-black font-jakarta text-[var(--foreground)] tracking-tight">
                        Global <span className="gold-gradient">Partnerships</span>
                    </h2>
                    <p className="text-slate-500 mt-6 text-lg font-medium italic"> Trusted by 60+ forward-thinking companies worldwide.</p>
                </div>
            </div>



            <div className="relative flex flex-col gap-8">
                {/* Row 1: Left to Right */}
                <ScrollingRow items={row1} direction={1} />

                {/* Row 2: Right to Left */}
                <ScrollingRow items={row2} direction={-1} />

                {/* Gradient Fades for the edges */}
                <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
};

export default TrustBar;