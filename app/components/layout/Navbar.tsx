"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "../ui/ThemeToggle"; // Path check kar lein agar different hai

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full z-[100] flex justify-center pt-6">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`flex items-center justify-between px-6 md:px-8 transition-all duration-500 rounded-full border border-black/5 dark:border-white/10 ${scrolled
          ? "w-[95%] md:w-[85%] lg:w-[70%] bg-white/70 dark:bg-black/40 backdrop-blur-xl py-3 shadow-xl"
          : "w-[95%] bg-transparent py-5"
          }`}
      >
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-8 h-8 bg-[#FFD700] rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500 flex items-center justify-center shadow-lg">
            <span className="text-black font-black -rotate-45 group-hover:-rotate-90 transition-transform duration-500 text-xs">S</span>
          </div>
          <span className="text-xl font-bold tracking-tighter font-jakarta dark:text-white text-slate-900">
            SHAH<span className="text-[#FFD700]">RUKH</span>
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Services", "Portfolio", "Youtube", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors group"
            >
              {item}
              <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-[#FFD700] transition-all duration-300 group-hover:w-full group-hover:left-0" />
            </Link>
          ))}
        </div>

        {/* Action Area */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          <Link
            href="#contact"
            className="gold-glow-button bg-[#FFD700] text-black px-5 md:px-6 py-2 md:py-2.5 rounded font-bold text-[10px] md:text-xs uppercase tracking-widest hidden sm:block"
          >
            Book a Discovery Call
          </Link>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;