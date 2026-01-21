"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "AI Workflows in 14 Days",
    desc: "Stop leaking billable hours. I transform your manual business processes into fully automated AI systems that work 24/7—architected and deployed in just 2 weeks.",
    icon: "🤖",
    color: "from-[#FFD700]/10 to-transparent",
    tag: "Operational Speed"
  },
  {
    title: "Autonomous AI Agents",
    desc: "I build custom digital workers (AI Agents) that handle everything from lead qualification to complex vendor follow-ups without human intervention.",
    icon: "🧠",
    color: "from-blue-500/10 to-transparent",
    tag: "Growth Ready"
  },
  {
    title: "Operational Intelligence",
    desc: "Turn messy data into your biggest advantage. I build real-time dashboards that provide executive visibility and turn complex logic into actionable business growth.",
    icon: "📊",
    color: "from-purple-500/10 to-transparent",
    tag: "Result Driven"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-5 md:py-24 bg-[var(--background)] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="md:mb-20 mb-5 text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black font-jakarta text-[var(--foreground)] tracking-tight leading-tight"
          >
            Architecting for <br />
            <span className="gold-gradient">Intelligence & ROI</span>
          </motion.h2 >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 mt-6 text-lg font-medium italic"
          >
            I bridge the gap between outdated manual workflows and the AI-driven future. No generic templates, just high-performance systems designed to scale your operations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="relative p-8 md:p-10 rounded-[40px] bg-white dark:bg-[#0B0E14] border border-slate-200 dark:border-white/5 overflow-hidden group shadow-xl hover:shadow-[#FFD700]/5 transition-all duration-500"
            >
              {/* Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-[#FFD700]/30 text-[#FFD700] bg-[#FFD700]/5">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-black mb-4 text-[var(--foreground)] tracking-tight">
                  {service.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {service.desc}
                </p>

                <div className="mt-auto pt-8 flex items-center gap-2 text-[#FFD700] font-bold text-sm 
  opacity-100 lg:opacity-0 lg:group-hover:opacity-100 
  transition-all duration-300 transform 
  lg:translate-x-[-10px] lg:group-hover:translate-x-0 cursor-pointer"
                >
                  <span>BOOK A DISCOVERY CALL</span>
                  <span className="text-lg">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;