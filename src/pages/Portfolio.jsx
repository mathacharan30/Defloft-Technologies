import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import projectsData from "../data/projects.json";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

function Section({ children, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const categories = [
    "All Projects",
    "Web Development",
    "UI/UX",
    "ERP",
    "Analytics",
  ];

  const filteredProjects =
    activeFilter === "All Projects"
      ? projectsData.projects
      : projectsData.projects.filter((p) => p.category === activeFilter);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative pt-36 pb-24 bg-dark-950">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-mono uppercase tracking-widest text-electric-blue mb-6"
          >
            Our Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight max-w-3xl"
          >
            Our <span className="gradient-text-warm">portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-xl leading-relaxed"
          >
            Explore our successful projects across various industries and
            technologies.
          </motion.p>
        </div>
      </section>

      <section className="py-6 bg-dark-950/80 backdrop-blur-xl sticky top-[72px] z-30 border-b border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-heading font-medium transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-gradient-to-bl from-neon-green to-white text-dark-950"
                    : "bg-white/[0.04] backdrop-blur-md  text-gray-500 hover:text-white hover:border-neon-green/15"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <Section className="py-24 bg-dark-950 relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {filteredProjects.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                  >
                    <div className="group h-full rounded-lg card-premium overflow-hidden transition-all duration-500">
                      {/* Image */}
                      <div className="relative overflow-hidden h-56">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded bg-dark-950/60 backdrop-blur-sm border border-white/[0.06] text-neon-green font-mono text-[10px] uppercase tracking-wider">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-6">
                        <h3 className="font-heading text-lg font-medium text-white mb-2 group-hover:text-neon-green transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech, j) => (
                            <span
                              key={j}
                              className="px-2.5 py-1 rounded-md bg-dark-950/50 border border-white/[0.06] text-gray-500 text-xs font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 rounded-lg card-premium flex items-center justify-center mx-auto mb-4">
                  <ExternalLink size={32} className="text-gray-700" />
                </div>
                <h3 className="font-heading text-xl font-medium text-white mb-2">
                  No projects found
                </h3>
                <p className="text-gray-600">
                  No projects available in this category yet.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-28 bg-dark-900/40 relative">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeUp}>
            <div className="rounded-lg card-premium p-12 sm:p-16">
              <p className="text-sm font-mono uppercase tracking-widest text-neon-green/80 mb-4">
                Start building
              </p>
              <h2 className="font-heading text-3xl sm:text-5xl font-light text-white mb-5">
                Let's build something{" "}
                <span className="gradient-text-warm">amazing</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Ready to start your project? Get in touch and let's discuss how
                we can help bring your vision to life.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-10 py-4 rounded-md bg-neon-green text-dark-950 font-heading font-medium hover:bg-neon-lime transition-all duration-300"
              >
                Start Your Project
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}

export default Portfolio;
