"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 md:pb-20 pb-5 overflow-hidden bg-[var(--background)] transition-colors duration-300">

      {/* Dynamic Background Glows - Adjusted for better mobile blending */}
      <div className="absolute top-[-5%] left-[-10%] w-[50%] h-[40%] bg-[#FFD700]/10 dark:bg-yellow-500/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-[-5%] right-[-10%] w-[50%] h-[40%] bg-[#FFD700]/5 dark:bg-yellow-600/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          {/* Availability Badge */}
          <div className="inline-block px-4 py-2 mt-6 mb-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md">
            <span className="text-[10px] md:text-xs font-black text-[var(--primary-gold)] tracking-[0.2em] uppercase">
              🚀 Limited Slots: 2 MVPs/Month Remaining
            </span>
          </div>

          {/* H1: Primary Hook */}
          <h1 className="text-5xl md:text-6xl font-extrabold font-jakarta leading-[1.05] mb-8 text-[var(--foreground)] tracking-tight">
            Automating Business Operations 
            with <span className="gold-gradient">Custom AI Systems</span>
          </h1>

          {/* H2 equivalent (p tag for SEO hierarchy) */}
          <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 max-w-xl mb-12 leading-relaxed mx-auto lg:mx-0 font-medium italic">I build autonomous AI agents and real-time dashboards that reclaim 20+ hours of your week. Stop fighting with manual workflows get a scalable system in  <span className="text-[var(--foreground)] font-bold decoration-[#FFD700]">14 days</span>
          </p>

          {/* Buttons: Better touch targets for mobile */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <Link
              href="#contact" className="px-10 py-5 bg-[#FFD700] text-black font-black uppercase tracking-widest text-sm rounded-2xl hover:shadow-[0_20px_40px_rgba(255,215,0,0.2)] transition-all active:scale-95">
              Book a Discovery Call
            </Link>
          </div>

          {/* Tech Stack: Clean H3 usage */}
          <div className="mt-16 pt-8 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center gap-4 text-slate-500">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-black opacity-60">The Battle-Tested Stack:</h3>
            <div className="flex gap-4 font-bold text-xs uppercase tracking-widest text-slate-400">
              <span className="hover:text-[var(--primary-gold)] transition-colors cursor-default">Next.js</span>
              <span className="opacity-30">•</span>
              <span className="hover:text-[var(--primary-gold)] transition-colors cursor-default">TypeScript</span>
              <span className="opacity-30">•</span>
              <span className="hover:text-[var(--primary-gold)] transition-colors cursor-default">Supabase</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Visual Element (Responsive Fix: Hidden on mobile, polished on desktop) */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          
          <div className="relative z-10 w-full aspect-square bg-white dark:bg-[#111418] rounded-[60px] border border-black/5 dark:border-white/10 p-5 shadow-[0_50px_100px_rgba(0,0,0,0.1)] dark:shadow-none overflow-hidden">
            <div className="w-full h-full bg-slate-50 dark:bg-[#030406] rounded-[45px] flex flex-col items-center justify-center border border-black/5 dark:border-white/5 relative overflow-hidden group">

               
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD700]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

           
              <div className="relative">
                <span className="text-[var(--primary-gold)] font-jakarta font-black text-9xl opacity-10 dark:opacity-20 select-none tracking-tighter">
                  MVP
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[var(--primary-gold)]/20 blur-[2px]" />
              </div>

              <div className="mt-8 px-6 py-2 bg-black dark:bg-white rounded-full text-white dark:text-black text-[10px] font-black uppercase tracking-[0.3em]">
                Ship in 14 Days
              </div>
            </div>
          </div>

       
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-12 -right-12 w-48 h-48 border-[0.5px] border-[var(--primary-gold)]/30 rounded-full border-dashed"
          />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 border-[0.5px] border-[var(--primary-gold)]/10 rounded-full" />
        </motion.div> */}

        {/* Right Side: Visual Element (Image + Triple Wave) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative hidden lg:block h-[600px] w-full"
        >
          <div className="absolute inset-0 flex items-center justify-center">

            {/* Background Wavy Lines (Image ke piche) */}
            <svg
              viewBox="0 0 800 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full filter blur-[2px] z-0"
            >
              <motion.path
                d="M -100 300 Q 150 150 400 300 T 900 300"
                stroke="url(#goldGradient)"
                strokeWidth="60"
                strokeLinecap="round"
                animate={{
                  d: [
                    "M -100 300 Q 150 150 400 300 T 900 300",
                    "M -100 350 Q 150 500 400 350 T 900 350",
                    "M -100 300 Q 150 150 400 300 T 900 300"
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="opacity-30"
              />
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFD700" stopOpacity="0" />
                  <stop offset="50%" stopColor="#FFD700" />
                  <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            {/* The Image/Mockup Container */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-[85%] aspect-[4/3] group"
            >
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-[#FFD700]/15 blur-3xl rounded-[40px] opacity-50 group-hover:opacity-100 transition-opacity" />

              {/* Image Frame */}
              <div className="relative h-full w-full bg-slate-900 rounded-[40px] border-4 border-white/10 overflow-hidden shadow-2xl">
                {/* Replace the URL below with your actual image path (e.g., /my-photo.jpg) */}
                <img
                  src="mvp.png"
                  alt="Founder Portfolio"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Overlay Gradient on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Floating Label on Image */}
                <div className="absolute bottom-8 left-8">
                  <p className="text-[#FFD700] text-xs font-black uppercase tracking-widest mb-1">Lead Developer</p>
                  <h4 className="text-white text-2xl font-bold tracking-tight">Shahrukh Amir</h4>
                </div>
              </div>

              {/* Small Floating "Stats" Card */}
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-8 top-10 bg-white dark:bg-[#111418] p-4 rounded-2xl shadow-xl border border-white/10 backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold text-[var(--foreground)] uppercase tracking-tight">Available Now</span>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;