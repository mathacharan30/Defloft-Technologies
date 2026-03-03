import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  TrendingDown,
  Target,
  PhoneOff,
  MapPin,
  Clock,
  DollarSign,
  Crosshair,
  Smartphone,
  Headphones,
  Star,
  Send,
  Loader2,
  CheckCheck,
} from "lucide-react";
import { addSubmission } from "../data/submissions";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
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

// ─── data ──────────────────────────────────────────────────────────────────
const stats = [
  { icon: Star, value: "100+", label: "Projects Delivered" },
  { icon: CheckCircle2, value: "98%", label: "Client Satisfaction" },
  { icon: MapPin, value: "Serving", label: "Bangalore Based Businesses" },
];

const problems = [
  {
    icon: AlertCircle,
    title: "No Professional Website",
    desc: "Customers can't find you online or trust your business",
  },
  {
    icon: TrendingDown,
    title: "Not Appearing on Google",
    desc: "Missing out on potential customers searching for your services",
  },
  {
    icon: Target,
    title: "Competitors Getting More Leads",
    desc: "Your competition is winning while you're losing business",
  },
  {
    icon: PhoneOff,
    title: "No Proper Contact System",
    desc: "Losing potential customers due to poor communication",
  },
];

const businessFeatures = [
  "5 Pages",
  "Mobile Responsive",
  "Contact Form",
  "WhatsApp Integration",
  "Google Maps",
  "Basic SEO Setup",
  "7–10 Days Delivery",
];

const premiumFeatures = [
  "10+ Pages",
  "Custom UI Design",
  "Lead Optimization",
  "Speed Optimization",
  "On-Page SEO",
  "WhatsApp + Call Integration",
  "1 Month Free Support",
  "10–15 Days Delivery",
];

const whyUs = [
  { icon: MapPin, title: "Local Team in Bangalore", desc: "Based locally for easy communication" },
  { icon: Clock, title: "Fast Communication", desc: "Quick response to your needs" },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Premium quality at competitive rates" },
  { icon: Crosshair, title: "Conversion-Focused Design", desc: "Built to generate leads and sales" },
  { icon: Smartphone, title: "Mobile-First Approach", desc: "Perfect on all devices" },
  { icon: Headphones, title: "Ongoing Support", desc: "We're here when you need us" },
];

const projects = [
  { img: "/images/Web 1.png", category: "Engineering", title: "Engineering Website" },
  { img: "/images/Web 2.png", category: "Marketing", title: "Marketing and Branding Website" },
  { img: "/images/Web 3.png", category: "Digital", title: "Digital Marketing Website" },
];

const WHATSAPP_NUM = "918147814232";
const PHONE_NUM = "+91 8147814232";

// ─── main component ─────────────────────────────────────────────────────────
export default function LandingPage() {
  const [form, setForm] = useState({
    name: "",
    businessName: "",
    phone: "",
    city: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const formRef = useRef(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.businessName || !form.phone || !form.city) {
      setError("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      await addSubmission({
        fullName: form.name,
        company: form.businessName,
        phone: form.phone,
        city: form.city,
        message: form.message,
        source: "landing-page",
      });
      setSuccess(true);
      setForm({ name: "", businessName: "", phone: "", city: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const scrollToForm = () =>
    formRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-[#020d1a] text-white font-sans overflow-x-hidden">
      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-[#020d1a]/90 backdrop-blur-md border-b border-white/[0.05]">
        <span className="font-heading text-lg font-semibold">
          <span className="text-[#00e5c0]">Devloft</span>{" "}
          <span className="text-white">Technologies</span>
        </span>
        <a
          href={`https://wa.me/${WHATSAPP_NUM}`}
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 text-sm text-[#00e5c0] border border-[#00e5c0]/40 px-4 py-2 rounded-full hover:bg-[#00e5c0]/10 transition-colors"
        >
          <MessageCircle size={15} />
          Chat on WhatsApp
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden bg-gradient-to-br from-[#020d1a] via-[#041525] to-[#020d1a]">
        {/* subtle grid bg */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,229,192,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,192,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* left */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-6"
          >
            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight text-white"
            >
              Website Development
              <br />
              Company in{" "}
              <span className="text-[#00e5c0]">Bangalore</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg"
            >
              We build high-converting, mobile-friendly websites for
              businesses in Bangalore that want more leads and customers.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 text-sm text-[#00e5c0]">
              {["Affordable Pricing", "Fast Delivery", "Local Support"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} />
                  {t}
                </span>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={scrollToForm}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#00e5c0] text-[#020d1a] font-semibold text-sm hover:bg-[#00c9aa] transition-colors shadow-lg shadow-[#00e5c0]/20"
              >
                Get Free Consultation <ArrowRight size={16} />
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUM}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#00e5c0]/50 text-[#00e5c0] text-sm font-medium hover:bg-[#00e5c0]/10 transition-colors"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="flex items-center gap-2 text-[#00e5c0] text-sm pt-1">
              <Phone size={15} />
              <span>{PHONE_NUM}</span>
            </motion.div>
          </motion.div>

          {/* right – device mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md xl:max-w-lg">
              <div className="rounded-2xl border border-white/10 bg-[#0a1929]/60 backdrop-blur-sm p-4 shadow-2xl shadow-[#00e5c0]/5">
                <img
                  src="/images/Web 1.png"
                  alt="Website preview"
                  className="w-full rounded-xl object-cover"
                />
              </div>
              {/* glow */}
              <div className="absolute -inset-4 rounded-3xl bg-[#00e5c0]/5 blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <Section className="py-14 bg-[#041525] border-y border-white/[0.05]">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div key={label} variants={fadeUp} custom={i} className="flex flex-col items-center gap-2">
              <Icon size={28} className="text-[#00e5c0]" />
              <p className="font-heading text-3xl font-bold text-[#00e5c0]">{value}</p>
              <p className="text-gray-400 text-sm">{label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── PROBLEMS ── */}
      <Section className="py-20 px-6 bg-gradient-to-b from-[#020d1a] to-[#041525]">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Is Your Business{" "}
              <span className="text-[#00e5c0]">Losing Customers</span> Online?
            </h2>
            <p className="text-gray-400 mt-4 text-base">
              Don't let these problems hold your business back
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {problems.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                custom={i}
                className="rounded-2xl border border-white/[0.08] bg-[#0a1929]/60 backdrop-blur-sm p-6 hover:border-[#00e5c0]/30 transition-colors"
              >
                <Icon size={28} className="text-[#00e5c0] mb-4" />
                <h3 className="font-heading font-semibold text-white text-lg mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── MID CTA ── */}
      <Section className="py-14 px-6 bg-[#041525] border-y border-white/[0.05]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 variants={fadeUp} className="font-heading text-2xl sm:text-3xl font-bold text-white mb-6">
            Ready to <span className="text-[#00e5c0]">Start Your Project</span>?
          </motion.h2>
          <motion.div variants={fadeUp}>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#00e5c0] text-[#020d1a] font-semibold text-sm hover:bg-[#00c9aa] transition-colors shadow-lg shadow-[#00e5c0]/20"
            >
              Get Free Consultation <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </Section>

      {/* ── PRICING ── */}
      <Section className="py-20 px-6 bg-gradient-to-b from-[#041525] to-[#020d1a]">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Affordable Website <span className="text-[#00e5c0]">Packages</span>
            </h2>
            <p className="text-gray-400 mt-3 text-sm">Transparent pricing. No hidden charges.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Business */}
            <motion.div
              variants={fadeUp}
              custom={0}
              className="rounded-2xl border border-white/[0.10] bg-[#0a1929]/60 p-8 flex flex-col gap-6"
            >
              <div>
                <h3 className="font-heading text-xl font-bold text-white mb-1">Business Package</h3>
                <p className="font-heading text-4xl font-bold text-[#00e5c0]">₹12,000</p>
              </div>
              <ul className="space-y-3">
                {businessFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-gray-300 text-sm">
                    <CheckCircle2 size={16} className="text-[#00e5c0] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToForm}
                className="mt-auto w-full py-3.5 rounded-xl border border-[#00e5c0]/50 text-[#00e5c0] font-semibold text-sm hover:bg-[#00e5c0]/10 transition-colors"
              >
                Choose Business Package
              </button>
            </motion.div>

            {/* Premium */}
            <motion.div
              variants={fadeUp}
              custom={1}
              className="relative rounded-2xl border-2 border-[#00e5c0] bg-[#0a1929]/60 p-8 flex flex-col gap-6 shadow-xl shadow-[#00e5c0]/10"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#00e5c0] text-[#020d1a] text-xs font-bold uppercase tracking-wide">
                  <Star size={12} fill="currentColor" />
                  Most Popular
                </span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-white mb-1">Premium Package</h3>
                <p className="font-heading text-4xl font-bold text-[#00e5c0]">₹25,000</p>
              </div>
              <ul className="space-y-3">
                {premiumFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-gray-300 text-sm">
                    <CheckCircle2 size={16} className="text-[#00e5c0] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToForm}
                className="mt-auto w-full py-3.5 rounded-xl bg-[#00e5c0] text-[#020d1a] font-semibold text-sm hover:bg-[#00c9aa] transition-colors shadow-lg shadow-[#00e5c0]/20"
              >
                Choose Premium Package
              </button>
            </motion.div>
          </div>

          <motion.p variants={fadeUp} className="text-center text-sm text-gray-500 mt-8">
            Need something custom?{" "}
            <button onClick={scrollToForm} className="text-[#00e5c0] hover:underline">
              Contact us
            </button>
          </motion.p>
        </div>
      </Section>

      {/* ── WHY US ── */}
      <Section className="py-20 px-6 bg-gradient-to-b from-[#020d1a] to-[#041525]">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Why Businesses Choose{" "}
              <span className="text-[#00e5c0]">Devloft Technologies</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                custom={i}
                className="rounded-2xl border border-white/[0.08] bg-[#0a1929]/60 p-6 flex flex-col items-center text-center hover:border-[#00e5c0]/30 transition-colors"
              >
                <Icon size={28} className="text-[#00e5c0] mb-4" />
                <h3 className="font-heading font-semibold text-white mb-1 text-base">{title}</h3>
                <p className="text-gray-400 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── RECENT PROJECTS ── */}
      <Section className="py-20 px-6 bg-[#020d1a]">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Our Recent <span className="text-[#00e5c0]">Website Projects</span>
            </h2>
            <p className="text-gray-400 mt-3 text-sm">
              Check out websites we've built for local businesses
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {projects.map(({ img, category, title }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                custom={i}
                className="rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0a1929]/60 hover:border-[#00e5c0]/30 transition-colors group"
              >
                <div className="overflow-hidden h-44">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[#00e5c0] text-xs font-medium mb-1">{category}</p>
                  <h3 className="font-heading font-semibold text-white">{title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── BOTTOM CTA ── */}
      <Section className="py-20 px-6 bg-gradient-to-b from-[#041525] to-[#020d1a]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
          >
            Ready to Grow Your Business <br />
            <span className="text-[#00e5c0]">Online?</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 mb-8 text-base">
            Let's build a website that brings you real customers
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
            <button
              onClick={scrollToForm}
              className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#00e5c0] text-[#020d1a] font-semibold text-sm hover:bg-[#00c9aa] transition-colors shadow-lg shadow-[#00e5c0]/20"
            >
              Start My Website Project <ArrowRight size={16} />
            </button>
            <a
              href={`tel:${PHONE_NUM.replace(/\s/g, "")}`}
              className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#00e5c0]/50 text-[#00e5c0] text-sm font-medium hover:bg-[#00e5c0]/10 transition-colors"
            >
              <Phone size={16} />
              Call Now
            </a>
          </motion.div>
        </div>
      </Section>

      {/* ── CONTACT FORM ── */}
      <section ref={formRef} className="py-20 px-6 bg-[#020d1a]">
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-10"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Get Your <span className="text-[#00e5c0]">Free Quote</span>
            </h2>
            <p className="text-gray-400 mt-3 text-sm">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/[0.08] bg-[#0a1929]/70 backdrop-blur-sm p-8 space-y-5"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Name <span className="text-[#00e5c0]">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#00e5c0]/40 focus:ring-1 focus:ring-[#00e5c0]/20 transition-all"
              />
            </div>

            {/* Business Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Business Name <span className="text-[#00e5c0]">*</span>
              </label>
              <input
                type="text"
                name="businessName"
                value={form.businessName}
                onChange={handleChange}
                placeholder="Your Business Name"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#00e5c0]/40 focus:ring-1 focus:ring-[#00e5c0]/20 transition-all"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Phone Number <span className="text-[#00e5c0]">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#00e5c0]/40 focus:ring-1 focus:ring-[#00e5c0]/20 transition-all"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                City <span className="text-[#00e5c0]">*</span>
              </label>
              <select
                name="city"
                value={form.city}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#0a1929] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-[#00e5c0]/40 focus:ring-1 focus:ring-[#00e5c0]/20 transition-all appearance-none"
                style={{ backgroundImage: "none" }}
              >
                <option value="" className="bg-[#0a1929]">Select your city</option>
                <option value="Mysore" className="bg-[#0a1929]">Mysore</option>
                <option value="Bangalore" className="bg-[#0a1929]">Bangalore</option>
                <option value="Other" className="bg-[#0a1929]">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your project requirements..."
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#00e5c0]/40 focus:ring-1 focus:ring-[#00e5c0]/20 transition-all resize-none"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm flex items-center gap-2">
                <AlertCircle size={14} />
                {error}
              </p>
            )}

            {success && (
              <div className="flex items-center gap-2 text-[#00e5c0] text-sm bg-[#00e5c0]/10 border border-[#00e5c0]/20 rounded-xl px-4 py-3">
                <CheckCheck size={16} />
                Thank you! We'll get back to you within 24 hours.
              </div>
            )}

            <button
              type="submit"
              disabled={submitting || success}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#00e5c0] text-[#020d1a] font-semibold text-sm hover:bg-[#00c9aa] disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-lg shadow-[#00e5c0]/20"
            >
              {submitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Submitting…
                </>
              ) : (
                <>
                  Get Free Quote
                  <Send size={15} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#020d1a] border-t border-white/[0.06] py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* brand */}
          <div>
            <p className="font-heading text-base font-semibold mb-3">
              <span className="text-[#00e5c0]">Devloft</span>{" "}
              <span className="text-white">Technologies</span>
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Building modern, high-converting websites for businesses in
              Bangalore.
            </p>
          </div>

          {/* contact */}
          <div>
            <p className="font-heading font-semibold text-white mb-3 text-sm">
              Contact Us
            </p>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={13} className="text-[#00e5c0]" />
                {PHONE_NUM}
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={13} className="text-[#00e5c0]" />
                34, 2nd Floor, 2nd Cross, Rajagopalnagar Main Rd, Kareemsab Layout, Hegganahalli, Bengaluru, Karnataka 560091
              </li>
            </ul>
          </div>

          {/* services */}
          <div>
            <p className="font-heading font-semibold text-white mb-3 text-sm">
              Services
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "Website Development",
                "Custom Web Design",
                "E-Commerce Solutions",
                "SEO Optimization",
              ].map((s) => (
                <li key={s} className="text-gray-400">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-white/[0.05] text-center text-gray-600 text-xs">
          © 2026 Devloft Technologies. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
