"use client";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[var(--background)] border-t border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="group flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#FFD700] rounded-lg rotate-45 flex items-center justify-center">
                <span className="text-black font-black -rotate-45 text-xs">S</span>
              </div>
              <span className="text-xl font-bold tracking-tighter font-jakarta dark:text-white text-slate-900">
                SHAH<span className="text-[#FFD700]">RUKH</span>
              </span>
            </Link>
            <p className="text-slate-500 mt-6 text-lg font-medium italic">
              Architecting AI-driven autonomous systems and high-performance business workflows. Let’s turn your operational bottlenecks into your biggest competitive advantage.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-bold mb-6 text-[var(--foreground)] uppercase text-xs tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              {["Services", "Process", "Comparison", "Testimonials"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-sm text-slate-500 hover:text-[#FFD700] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="font-bold mb-6 text-[var(--foreground)] uppercase text-xs tracking-widest">Connect</h4>
            <ul className="space-y-4">
              {/* Apne sahi links yahan daal dein */}
              <li>
                <a href="https://www.linkedin.com/in/shahrukhamirbutt/" target="_blank" className="text-sm text-slate-500 hover:text-[#FFD700] transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://x.com/shahrukhdev101" target="_blank" className="text-sm text-slate-500 hover:text-[#FFD700] transition-colors">
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="mailto:contact@shahrukhdeveloper.com" className="text-sm text-slate-500 hover:text-[#FFD700] transition-colors">
                  Email Me
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © 2020 - {currentYear} Shahrukh Butt. AI Systems Architect.
          </p>
          <div className="flex gap-8 text-xs text-slate-500">
             <span className="text-[#FFD700]/50 tracking-widest uppercase font-bold">Available for Q1 2026 Projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;