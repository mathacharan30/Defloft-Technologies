import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  Eye,
  Award,
  Shield,
  Lightbulb,
  Users,
  Code,
  Database,
  Cloud,
  BarChart3,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

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

const values = [
  {
    icon: Award,
    title: "Excellence",
    desc: "We strive for excellence in every project, delivering solutions that exceed expectations.",
    accent: "amber",
  },
  {
    icon: Shield,
    title: "Integrity",
    desc: "We maintain the highest standards of integrity and transparency in all our dealings.",
    accent: "indigo",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We embrace innovation and continuously explore new technologies and methodologies.",
    accent: "teal",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "We believe in collaborative partnerships that drive mutual success.",
    accent: "rose",
  },
];

const techAreas = [
  {
    icon: Code,
    title: "Web Technologies",
    techs: ["React", "Angular", "Vue.js", "Node.js", "Python", "Java"],
  },
  {
    icon: Database,
    title: "ERP Systems",
    techs: ["SAP", "Oracle", "Microsoft Dynamics", "Odoo", "Custom Solutions"],
  },
  {
    icon: Cloud,
    title: "Cloud Platforms",
    techs: ["AWS", "Azure", "Google Cloud", "Digital Ocean", "Kubernetes"],
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    techs: ["Power BI", "Tableau", "SQL", "MongoDB", "Machine Learning"],
  },
];

const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "2+", label: "Enterprise Clients" },
  { value: "2+", label: "Countries Served" },
  { value: "98%", label: "Client Satisfaction" },
];

function About() {
  const accentStyles = {
    amber: {
      icon: "text-neon-green",
      border: "hover:border-neon-green/15",
      dot: "bg-neon-green",
    },
    indigo: {
      icon: "text-electric-blue",
      border: "hover:border-electric-blue/15",
      dot: "bg-electric-blue",
    },
    teal: {
      icon: "text-electric-cyan",
      border: "hover:border-electric-cyan/15",
      dot: "bg-electric-cyan",
    },
    rose: {
      icon: "text-neon-mint",
      border: "hover:border-neon-mint/15",
      dot: "bg-neon-mint",
    },
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative pt-36 pb-24 bg-dark-950">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm font-mono uppercase tracking-widest text-neon-green/80 mb-6"
              >
                About Us
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-heading text-4xl sm:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight"
              >
                The team behind{" "}
                <span className="gradient-text">Devloft Technologies</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-400 max-w-xl leading-relaxed"
              >
                Empowering businesses through innovative technology solutions —
                from startups to enterprise.
              </motion.p>
            </div>

            {/* Work collage */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div className="space-y-2 sm:space-y-3">
                  <div className="rounded-lg card-premium p-1.5 overflow-hidden">
                    <img
                      src="/images/Web 3.png"
                      alt="Web Development Project"
                      className="w-full h-28 sm:h-36 object-cover rounded"
                    />
                  </div>
                  <div className="rounded-lg card-premium p-1.5 overflow-hidden">
                    <img
                      src="/images/Dashboards 3.webp"
                      alt="Analytics Dashboard"
                      className="w-full h-32 sm:h-44 object-cover rounded"
                    />
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3 pt-4 sm:pt-6">
                  <div className="rounded-lg card-premium p-1.5 overflow-hidden">
                    <img
                      src="/images/UX 2.png"
                      alt="UI/UX Design"
                      className="w-full h-32 sm:h-44 object-cover rounded"
                    />
                  </div>
                  <div className="rounded-lg card-premium p-1.5 overflow-hidden">
                    <img
                      src="/images/ERP 1.jpg"
                      alt="ERP Solutions"
                      className="w-full h-28 sm:h-36 object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <Section className="py-28 bg-dark-900/40 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              variants={fadeUp}
              className="group rounded-lg card-premium p-10 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-8">
                <Target size={22} className="text-neon-green" />
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gray-600 block">
                    01
                  </span>
                  <h2 className="font-heading text-2xl font-medium text-white">
                    Our Mission
                  </h2>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-3">
                To empower businesses with scalable, innovative technology
                solutions that drive digital transformation and sustainable
                growth.
              </p>
              <p className="text-gray-500 leading-relaxed">
                We are committed to delivering excellence in every project,
                leveraging cutting-edge technologies and industry best practices
                to help our clients achieve their strategic objectives.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={1}
              className="group rounded-lg card-premium p-10 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-8">
                <Eye size={22} className="text-electric-blue" />
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gray-600 block">
                    02
                  </span>
                  <h2 className="font-heading text-2xl font-medium text-white">
                    Our Vision
                  </h2>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-3">
                To be the trusted technology partner for enterprises worldwide,
                recognized for innovation, reliability, and exceptional client
                outcomes.
              </p>
              <p className="text-gray-500 leading-relaxed">
                We envision a future where businesses of all sizes can harness
                the power of technology to unlock their full potential and
                create lasting value.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section className="py-28 bg-dark-950 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <motion.div variants={fadeUp} className="lg:col-span-5">
              <p className="text-sm font-mono uppercase tracking-widest text-electric-cyan mb-4">
                Our values
              </p>
              <h2 className="font-heading text-4xl sm:text-5xl font-light text-white leading-tight">
                Principles that
                <br />
                <span className="gradient-text-warm">guide us</span>
              </h2>
            </motion.div>
            <motion.div
              variants={fadeUp}
              custom={1}
              className="lg:col-span-5 lg:col-start-8 flex items-end"
            >
              <p className="text-gray-400 text-lg leading-relaxed">
                Everything we build is anchored in these core beliefs.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((item, i) => (
              <motion.div key={i} variants={fadeUp} custom={i}>
                <div className="group h-full rounded-lg card-premium p-8 transition-all duration-500">
                  <div className="mb-6">
                    <item.icon
                      size={22}
                      className={accentStyles[item.accent].icon
                        .split(" ")
                        .pop()}
                    />
                  </div>
                  <h3 className="font-heading text-xl font-medium text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Technical Excellence */}
      <Section className="py-28 bg-dark-900/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-sm font-mono uppercase tracking-widest text-electric-blue mb-4">
              Our expertise
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-light text-white">
              Technical <span className="gradient-text-alt">excellence</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
            {techAreas.map((area, i) => (
              <motion.div key={i} variants={fadeUp} custom={i}>
                <div className="group rounded-lg card-premium p-8 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <area.icon size={20} className="text-electric-cyan" />
                    <h3 className="font-heading text-xl font-medium text-white">
                      {area.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {area.techs.map((tech, j) => (
                      <span
                        key={j}
                        className="px-3 py-1.5 rounded-md bg-dark-950/60 border border-white/[0.06] text-gray-400 text-sm hover:border-neon-green/15 hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section className="py-28 bg-dark-950 relative">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div key={i} variants={fadeUp} custom={i}>
                <div className="text-center rounded-lg card-premium p-10 transition-colors duration-500">
                  <div className="font-heading text-4xl sm:text-5xl font-light gradient-text mb-3">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-xs font-mono uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

export default About;
