import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Globe,
  Palette,
  Database,
  BarChart3,
  ArrowRight,
  ArrowUpRight,
  Check,
} from "lucide-react";

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

const servicesData = [
  {
    icon: Globe,
    title: "Website Development",
    short: "Modern web apps",
    desc: "Custom web applications built with modern frameworks — fast, scalable, and designed to convert.",
    accent: "neon-green",
    accentHover: "hover:border-neon-green/20",
    tag: "01",
    img: "/images/Web 3.png",
    items: [
      "Custom web application development",
      "Responsive design for all devices",
      "Progressive Web Apps (PWA)",
      "E-commerce solutions",
      "Content Management Systems",
      "API development and integration",
      "Performance optimization",
      "Security and compliance",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    short: "User-first design",
    desc: "Interfaces that merge aesthetics with function — from research to pixel-perfect delivery.",
    accent: "electric-blue",
    accentHover: "hover:border-electric-blue/20",
    tag: "02",
    img: "/images/UX 1.png",
    items: [
      "User research and analysis",
      "Information architecture",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Interaction design",
      "Usability testing",
      "Design system creation",
      "Accessibility compliance",
    ],
  },
  {
    icon: Database,
    title: "ERP Implementation",
    short: "Enterprise systems",
    desc: "End-to-end ERP deployments tailored to your operational complexity and industry needs.",
    accent: "electric-cyan",
    accentHover: "hover:border-electric-cyan/20",
    tag: "03",
    img: "/images/ERP 1.jpg",
    items: [
      "Requirements analysis and planning",
      "System selection and evaluation",
      "Custom ERP development",
      "Third-party ERP implementation",
      "Data migration and integration",
      "Process automation",
      "Training and change management",
      "Ongoing support and maintenance",
    ],
  },
  {
    icon: BarChart3,
    title: "Business Dashboards",
    short: "Data intelligence",
    desc: "Transform raw data into actionable insights with real-time dashboards and analytics tools.",
    accent: "neon-mint",
    accentHover: "hover:border-neon-mint/20",
    tag: "04",
    img: "/images/Dashboards 1.png",
    items: [
      "Custom dashboard development",
      "Real-time data visualization",
      "KPI tracking and reporting",
      "Predictive analytics",
      "Data warehouse solutions",
      "Business intelligence tools",
      "Mobile analytics applications",
      "Advanced reporting systems",
    ],
  },
];

const accentColorMap = {
  "neon-green": "#00ff88",
  "electric-blue": "#3b82f6",
  "electric-cyan": "#22d3ee",
  "neon-mint": "#00e676",
};

const approach = [
  {
    num: "01",
    title: "Discover",
    desc: "Deep-dive into your goals, users, and constraints.",
  },
  {
    num: "02",
    title: "Architect",
    desc: "Blueprint the solution — systems, flows, and tech stack.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Agile sprints with continuous testing and feedback.",
  },
  {
    num: "04",
    title: "Launch",
    desc: "Seamless deployment with monitoring and iteration.",
  },
];

function ServiceCard({ service, index }) {
  const [expanded, setExpanded] = useState(false);
  const color = accentColorMap[service.accent];

  return (
    <motion.div variants={fadeUp} custom={index}>
      <div
        className={`group relative rounded-lg overflow-hidden border border-white/[0.06] ${service.accentHover} transition-all duration-500`}
      >
        {/* Image header */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />

          {/* Tag + icon overlay */}
          <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
            <span
              className="text-xs font-mono tracking-widest opacity-40"
              style={{ color }}
            >
              {service.tag}
            </span>
            <service.icon size={20} style={{ color }} className="opacity-70" />
          </div>

          {/* Title overlay at bottom */}
          <div className="absolute bottom-5 left-5 right-5">
            <h3 className="font-heading text-2xl font-light text-white mb-1.5">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
              {service.desc}
            </p>
          </div>
        </div>

        {/* Expandable features */}
        <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01]">
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center justify-between px-5 py-4 text-sm text-gray-500 hover:text-white transition-colors"
          >
            <span className="font-heading font-medium">
              {expanded ? "Hide details" : "What's included"}
            </span>
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-xs"
              style={{ color }}
            >
              ▾
            </motion.span>
          </button>

          <motion.div
            initial={false}
            animate={{
              height: expanded ? "auto" : 0,
              opacity: expanded ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
              {service.items.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <Check
                    size={14}
                    className="flex-shrink-0 mt-0.5 opacity-50"
                    style={{ color }}
                  />
                  <span className="text-gray-400 text-sm leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA strip */}
        <div className="border-t border-white/[0.04] px-5 py-3.5 flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-600">
            {service.short}
          </span>
          <Link
            to="/contact"
            className="group/link inline-flex items-center gap-1.5 text-sm font-heading font-medium transition-colors duration-300"
            style={{ color }}
          >
            Get started
            <ArrowUpRight
              size={14}
              className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function Services() {
  return (
    <div className="overflow-hidden">
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative pt-36 pb-16 bg-dark-950">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-mono uppercase tracking-widest text-neon-green/60 mb-6"
            >
              What We Offer
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl sm:text-6xl lg:text-7xl font-light text-white mb-6 leading-[1.1]"
            >
              Technology that{" "}
              <span className="gradient-text">moves business</span> forward
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-500 max-w-xl leading-relaxed"
            >
              Four core disciplines. One integrated approach. Everything your
              digital transformation needs.
            </motion.p>
          </div>

          {/* Service tags strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap gap-3 mt-12"
          >
            {servicesData.map((s, i) => (
              <a
                key={i}
                href={`#service-${i}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/[0.06] text-gray-500 hover:text-white hover:border-white/[0.12] transition-all duration-300 text-sm"
              >
                <s.icon size={14} style={{ color: accentColorMap[s.accent] }} />
                <span className="font-heading font-medium">{s.title}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ SERVICES BENTO GRID ═══════════ */}
      <Section className="py-20 bg-dark-950 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {servicesData.map((service, i) => (
              <div key={i} id={`service-${i}`} className="scroll-mt-24">
                <ServiceCard service={service} index={i} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════════ OUR APPROACH ═══════════ */}
      <Section className="py-28 bg-dark-950 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left text */}
            <motion.div variants={fadeUp} className="lg:col-span-4">
              <p className="text-sm font-mono uppercase tracking-widest text-electric-cyan/60 mb-4">
                Our process
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-light text-white mb-5 leading-tight">
                From concept to{" "}
                <span className="gradient-text-alt">launch</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                A proven four-phase methodology that ensures quality at every
                stage — no shortcuts, no surprises.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 text-neon-green text-sm font-heading font-medium hover:text-neon-lime transition-colors duration-300"
              >
                Start a conversation
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>

            {/* Steps */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {approach.map((step, i) => (
                <motion.div key={i} variants={fadeUp} custom={i}>
                  <div className="group relative rounded-lg border border-white/[0.06] hover:border-white/[0.1] p-7 h-full transition-all duration-500 bg-gradient-to-br from-white/[0.02] to-transparent">
                    <span className="font-mono text-3xl font-light text-white/[0.06] block mb-5">
                      {step.num}
                    </span>
                    <h3 className="font-heading text-lg font-medium text-white mb-2">
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
        </div>
      </Section>

      {/* ═══════════ CTA ═══════════ */}
      <Section className="py-28 bg-dark-950 relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-neon-green/[0.02] rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeUp}>
            <p className="text-sm font-mono uppercase tracking-widest text-neon-green/60 mb-5">
              Custom work
            </p>
            <h2 className="font-heading text-3xl sm:text-5xl font-light text-white mb-5 leading-tight">
              Need something <span className="gradient-text">tailor-made</span>?
            </h2>
            <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
              We build bespoke solutions for unique business challenges. Tell us
              what you're working on.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-10 py-4 rounded-md bg-neon-green text-dark-950 font-heading font-medium hover:bg-neon-lime transition-all duration-300"
            >
              Contact Our Team
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}

export default Services;
