import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Globe,
  Palette,
  Database,
  BarChart3,
  Sparkles,
  Zap,
  Shield,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

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

const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Custom web apps built with modern frameworks and battle-tested architecture.",
    tag: "DEVELOPMENT",
    img: "/images/Web 2.png",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "User-centered design that merges aesthetics with intentional functionality.",
    tag: "DESIGN",
    img: "/images/UX 1.png",
  },
  {
    icon: Database,
    title: "ERP Implementation",
    desc: "Enterprise resource planning tailored to your operational complexity.",
    tag: "ENTERPRISE",
    img: "/images/ERP 1.jpg",
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    desc: "Data visualization and analytics for sharper decision-making.",
    tag: "DATA",
    img: "/images/Dashboards 2.webp",
  },
];

const whyUs = [
  {
    icon: Sparkles,
    title: "Enterprise Expertise",
    desc: "Deep experience with large-scale enterprise systems and complex integrations.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    desc: "Successfully delivered projects across industries and geographies.",
  },
  {
    icon: Shield,
    title: "Dedicated Support",
    desc: "Round-the-clock support and proactive maintenance for all solutions.",
  },
  {
    icon: Zap,
    title: "Scalable Solutions",
    desc: "Architecture designed to grow alongside your business ambitions.",
  },
];

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We analyze requirements and map a detailed project roadmap.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Intuitive designs and interactive prototypes brought to life.",
  },
  {
    num: "03",
    title: "Develop",
    desc: "Agile sprints with continuous testing and quality assurance.",
  },
  {
    num: "04",
    title: "Deploy",
    desc: "Seamless launch with ongoing optimization and support.",
  },
];

function Home() {
  return (
    <div className="overflow-hidden relative">
      <section className="relative min-h-screen flex items-center justify-center bg-dark-950">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-green/[0.2] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/2 right-1/4 w-[400px] h-[400px] bg-electric-blue/[0.4] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-heading text-5xl sm:text-6xl lg:text-[4.5rem] font-medium tracking-tight mb-8"
              >
                <span className="text-white ">// We build</span>
                <br />
                <span className="gradient-text">digital &amp; ERP</span>
                <br />
                <span className="text-white">solutions</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-md text-gray-200 max-w-lg mb-10 tracking-tight leading-tight"
              >
                Transform your business with enterprise-grade technology. From
                custom web platforms to full ERP deployments — we architect
                solutions built for scale.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-1 px-8 py-4 rounded-full bg-gradient-to-bl from-neon-green via-blue-50 to-blue-300 text-dark-950 font-heading font-medium hover:bg-neon-lime transition-all duration-300"
                >
                  Start a Project
                  <ArrowUpRight
                    size={18}
                    className="opacity-50 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
                <Link
                  to="/services"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full backdrop-blur-md bg-white/[0.04] border border-white/[0.08] text-white font-heading font-medium hover:bg-white/[0.08] hover:border-neon-green/20 transition-all duration-300"
                >
                  Explore Services
                  <ArrowUpRight
                    size={18}
                    className="opacity-50 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-5"
            >
              <div className="relative w-full ">
                {/* Main large image — base layer */}
                <div className="rounded-lg card-premium p-1.5 overflow-hidden z-0">
                  <img
                    src="/images/Web 3.png"
                    alt="NammaDigitals Marketing Website"
                    className="w-full h-auto rounded-md"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-md" />
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -20, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                  className="absolute -bottom-4 -left-5 sm:-bottom-20 sm:-left-20 w-[30%] sm:w-[50%] z-20 rounded-lg overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/50"
                >
                  <img
                    src="/images/Dashboards 3.webp"
                    alt="Analytics Dashboard"
                    className="w-full h-auto"
                  />
                </motion.div>

                {/* UX Design overlay — top right */}
                <motion.div
                  initial={{ opacity: 0, x: 20, y: -20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.9 }}
                  className="absolute -top-5 -right-6 sm:-top-20 sm:-right-20 w-[35%] sm:w-[50%] z-10 rounded-lg overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/50"
                >
                  <img
                    src="/images/UX 2.png"
                    alt="UI/UX Design"
                    className="w-full h-auto"
                  />
                </motion.div>

                {/* Stats badge — bottom right */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="absolute -bottom-10 right-4 sm:right-8 z-30 backdrop-blur-xl bg-black/70 border border-white/[0.08] rounded-lg px-4 py-2.5 sm:px-5 sm:py-3"
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="text-center">
                      <div className="font-heading text-sm sm:text-base font-medium text-white">
                        100+
                      </div>
                      <div className="text-[8px] sm:text-[9px] text-gray-500 font-mono uppercase tracking-wider">
                        Projects
                      </div>
                    </div>
                    <div className="w-px h-6 bg-white/[0.08]" />
                    <div className="text-center">
                      <div className="font-heading text-sm sm:text-base font-medium text-neon-green">
                        98%
                      </div>
                      <div className="text-[8px] sm:text-[9px] text-gray-500 font-mono uppercase tracking-wider">
                        Satisfaction
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICES ═══════════ */}
      <Section className="py-28  relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <motion.div variants={fadeUp}>
              <p className="text-sm font-mono uppercase tracking-widest text-neon-green/80 mb-4">
                What we do
              </p>
              <h2 className="font-heading text-4xl sm:text-5xl font-light text-white leading-tight">
                Services that
                <br />
                <span className="gradient-text-alt">drive growth</span>
              </h2>
            </motion.div>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-gray-400 text-lg leading-relaxed max-w-md"
            >
              Comprehensive technology solutions crafted around your business
              objectives — not the other way around.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <motion.div key={i} variants={fadeUp} custom={i}>
                <div className="group rounded-lg card-premium overflow-hidden transition-all duration-500">
                  <div className="relative overflow-hidden h-40">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-dark-950/20" />
                    <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                      <service.icon size={22} className="text-neon-green" />
                      <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400">
                        {service.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="font-heading text-xl font-medium text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-neon-green transition-colors duration-300"
                    >
                      Learn more{" "}
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════════ FEATURED WORK ═══════════ */}
      <Section className="py-28  relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-blue/[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <motion.div variants={fadeUp}>
              <p className="text-sm font-mono uppercase tracking-widest text-electric-blue mb-4">
                Recent work
              </p>
              <h2 className="font-heading text-4xl sm:text-5xl font-light text-white leading-tight">
                Projects we're
                <br />
                <span className="gradient-text-warm">proud of</span>
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} custom={1}>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 text-sm font-heading font-medium text-gray-400 hover:text-neon-green transition-colors duration-300"
              >
                View all projects
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                img: "/images/Web 1.png",
                title: "Fluidmech Engineering",
                cat: "Web Development",
              },
              {
                img: "/images/Dashboards 1.png",
                title: "Business Performance Dashboard",
                cat: "Analytics",
              },
              {
                img: "/images/UX 3.png",
                title: "Image Media Solutions",
                cat: "UI/UX",
              },
            ].map((project, i) => (
              <motion.div key={i} variants={fadeUp} custom={i}>
                <Link to="/portfolio" className="group block">
                  <div className="rounded-lg card-premium overflow-hidden transition-all duration-500">
                    <div className="relative overflow-hidden h-52">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />
                    </div>
                    <div className="p-5">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-neon-green/70 mb-1.5 block">
                        {project.cat}
                      </span>
                      <h3 className="font-heading text-lg font-medium text-white group-hover:text-neon-green transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════════ WHY CHOOSE US ═══════════ */}
      <Section className="py-28 bg-dark-900/40 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            className="text-center mb-16 max-w-2xl mx-auto"
          >
            <p className="text-sm font-mono uppercase tracking-widest text-electric-blue mb-4">
              Why Devloft
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-light text-white mb-5">
              Why partner <span className="gradient-text">with us</span>
            </h2>
            <p className="text-gray-400 text-lg">
              A team that understands enterprise technology — and cares about
              your outcomes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {whyUs.map((item, i) => (
              <motion.div key={i} variants={fadeUp} custom={i}>
                <div className="group flex items-start gap-5 rounded-lg card-premium p-7 transition-all duration-500">
                  <item.icon
                    size={20}
                    className="text-electric-cyan mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-heading text-lg font-medium text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════════ PROCESS ═══════════ */}
      <Section className="py-28 bg-dark-900/40 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-sm font-mono uppercase tracking-widest text-electric-cyan mb-4">
              Our process
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-light text-white">
              How we <span className="gradient-text-alt">make it happen</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <motion.div key={i} variants={fadeUp} custom={i}>
                <div className="group rounded-lg card-premium p-8 h-full transition-all duration-500">
                  <span className="font-mono text-4xl font-light text-neon-green/10 block mb-6">
                    {step.num}
                  </span>
                  <h3 className="font-heading text-lg font-medium text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════════ CTA ═══════════ */}
      <Section className="py-28 bg-dark-950 relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-neon-green/[0.03] rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeUp}>
            <p className="text-sm font-mono uppercase tracking-widest text-neon-green/80 mb-6">
              Ready?
            </p>
            <h2 className="font-heading text-4xl sm:text-6xl font-light text-white mb-6 leading-tight">
              Let's transform
              <br />
              <span className="gradient-text-warm">your business</span>
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Tell us about your vision, and we'll craft the technology to make
              it real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-10 py-4 rounded-md bg-neon-green text-dark-950 font-heading font-medium hover:bg-neon-lime transition-all duration-300"
              >
                Start a Project
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-md backdrop-blur-md bg-white/[0.04] border border-white/[0.08] text-white font-heading font-medium hover:bg-white/[0.08] hover:border-neon-green/20 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}

export default Home;
