"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface Project {
  id: number;
  name: string;
  title: string;
  short_description: string;
  tags: string;
  banner_image: string;
  category: string;
}

const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const cleanHTML = (html: string) => html.replace(/<[^>]*>?/gm, '');

  const parseTags = (tagStr: string) => {
    try {
      const parsed = JSON.parse(tagStr);
      if (Array.isArray(parsed) && parsed.length > 0) {
        if (parsed.length === 1 && parsed[0].includes(',')) {
          return parsed[0].split(',').map((t: string) => t.trim());
        }
        return parsed;
      }
      return [];
    } catch (e) {
      return typeof tagStr === 'string' ? tagStr.split(',').map(t => t.trim()) : [];
    }
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/portfolio");
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="work" className="py-24 bg-[var(--background)] overflow-hidden">
      <div className="max-w-7xl  mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-4xl md:text-6xl font-black font-jakarta tracking-tight text-[var(--foreground)]">
            Proven <span className="gold-gradient">Results</span>
          </h2>
          <p className="text-slate-500 mt-6 text-lg font-medium italic">
            Drag to explore projects that helped founders scale to the next level.
          </p>
        </div>

        {/* Navigation Hint */}
        <div className="hidden md:flex gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
          <span>Drag to slide</span>
          <span className="text-[#FFD700]">→</span>
        </div>
      </div>

      {loading ? (
        <div className="flex gap-8 px-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="min-w-[350px] md:min-w-[500px] h-[500px] rounded-[40px] bg-slate-100 dark:bg-white/5 animate-pulse" />
          ))}
        </div>
      ) : (
        <motion.div
          ref={carouselRef}
          className="cursor-grab active:cursor-grabbing px-6"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -((projects.length * 532) - window.innerWidth + 48) }}
            className="flex gap-8 w-max"
          >
            {projects.map((project) => {
              const projectTags = parseTags(project.tags).slice(0, 3);

              return (
                <motion.div
                  key={project.id}
                  className="w-[320px] md:w-[500px] bg-white dark:bg-[#0B0E14] rounded-[45px] overflow-hidden border border-slate-200 dark:border-white/5 flex flex-col h-[600px] shadow-2xl shadow-black/5 group"
                >
                  {/* Image Section */}
                  <div className="h-[55%] bg-slate-100 dark:bg-[#030712] relative overflow-hidden">
                    <img
                      src={`http://127.0.0.1:8000/uploads/portfolio/${project.banner_image}`}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 pointer-events-none"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://placehold.co/800x500/111/gold?text=Project+View";
                      }}
                    />

                    <div className="absolute top-6 left-6 flex flex-wrap gap-2 pr-6">
                      {projectTags.map((tag: string) => (
                        <span key={tag} className="px-3 py-1 bg-black/70 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-[#FFD700] border border-[#FFD700]/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-black text-[#FFD700] uppercase tracking-[0.3em]">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {project.name}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black mb-4 text-slate-900 dark:text-slate-100 group-hover:text-[#FFD700] transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm font-medium line-clamp-3 mb-6">
                      {cleanHTML(project.short_description)}
                    </p>

                    <div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/5">
                      <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white group/btn transition-all">
                        <span className="border-b-2 border-[#FFD700] pb-1">Explore Case Study</span>
                        <span className="bg-[#FFD700] text-black rounded-full w-8 h-8 flex items-center justify-center group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Portfolio;