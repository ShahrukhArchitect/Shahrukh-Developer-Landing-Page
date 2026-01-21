"use client";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Workflow Mapping",
    desc: "We don't just talk features; we map your manual bottlenecks. I identify exactly where AI agents can reclaim your time and define the system's logic."
  },
  {
    num: "02",
    title: "Architecture Design",
    desc: "Instead of just 'UI', I design the 'Brain' of your system—mapping how data flows between AI agents, your team, and your customers."
  },
  {
    num: "03",
    title: "Rapid AI Integration",
    desc: "The build phase. I develop the core engine, integrate LLMs, and set up autonomous triggers. You see the system coming to life in real-time."
  },
  {
    num: "04",
    title: "Deployment & Scaling",
    desc: "We go live in 14 days. I ensure the system is battle-tested, handle the deployment, and set the foundation for enterprise-grade scaling."
  }
];

const Process = () => {
  return (
    <section id="process" className="md:py-24 py-5 bg-[var(--background)] border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center md:mb-20 mb-3">
          <h2 className="text-4xl md:text-6xl font-black font-jakarta text-[var(--foreground)] tracking-tight">
            The Blueprint for <span className="gold-gradient">Success</span>  
          </h2>
          <p className="text-slate-500 mt-6 text-lg font-medium italic">How we take your idea from 0 to 1.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-white/5 group hover:border-[#FFD700]/30 transition-all"
            >
              <span className="text-5xl font-black text-slate-100 dark:text-slate-800/50 absolute top-4 right-6 group-hover:text-[#FFD700]/10 transition-colors">
                {step.num}
              </span>
              <h3 className="text-xl font-bold mb-4 text-[var(--foreground)] relative z-10">{step.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed relative z-10">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;