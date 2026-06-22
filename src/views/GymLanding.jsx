"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight, Phone, MessageCircle, CheckCircle2, AlertCircle,
  Users, CreditCard, Fingerprint, BellRing, CalendarClock, BarChart3,
  Dumbbell, Building2, Smartphone, Zap,
  Loader2, CheckCheck, ChevronDown, Star,
  UserPlus, Briefcase, Megaphone, MapPin, ArrowUpRight,
} from "lucide-react";
import { addSubmission } from "../data/submissions";

const WHATSAPP_NUM = "918147814232";
const PHONE_NUM = "+91 8147814232";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

function Section({ children, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.section>
  );
}

const clientLogos = [
  "PowerFit Gym", "IronEdge", "FitZone Studio", "Muscle Factory",
  "Alpha Fitness", "Urban Gym", "The Warrior", "Pulse Fitness",
];

const stats = [
  { value: "500+", label: "Gyms Across India", color: "text-neon-green" },
  { value: "80%", label: "Less Manual Work", color: "text-electric-cyan" },
  { value: "72%", label: "Fewer Pending Dues", color: "text-electric-blue" },
  { value: "99%", label: "Customer Retention", color: "text-neon-green" },
];

const features = [
  {
    icon: MessageCircle, tag: "AUTOMATION",
    title: "WhatsApp Automation & AI Bot",
    desc: "Auto-reminders for renewals, dues, birthdays and class updates. 24/7 AI bot handles member queries — zero manual follow-up.",
    bullets: ["Bulk WhatsApp messaging", "Auto renewal & due alerts", "Birthday & anniversary wishes"],
    accent: "text-neon-green",
  },
  {
    icon: Fingerprint, tag: "ACCESS CONTROL",
    title: "Biometric & Turnstile Access",
    desc: "Fingerprint, face recognition, RFID and QR check-in. Expired members are blocked automatically at entry.",
    bullets: ["Fingerprint / face / RFID", "Auto-block expired members", "Real-time attendance logs"],
    accent: "text-electric-cyan",
  },
  {
    icon: CreditCard, tag: "BILLING",
    title: "Gym Billing & GST Invoicing",
    desc: "Auto-generate GST invoices, accept UPI and card payments. WhatsApp reminders cut pending dues by 72%.",
    bullets: ["UPI / card / cash tracking", "Auto-GST invoices", "Daily collection reports"],
    accent: "text-electric-blue",
  },
  {
    icon: UserPlus, tag: "CRM",
    title: "Lead Management & CRM",
    desc: "Capture leads from Instagram, Facebook and walk-ins. Automated follow-ups track every prospect from enquiry to enrollment.",
    bullets: ["Social media lead capture", "Automated follow-up messages", "Sales funnel insights"],
    accent: "text-neon-green",
  },
  {
    icon: Users, tag: "MEMBERS",
    title: "Member Management Software",
    desc: "Complete member profiles, photo, documents, membership history and plans in one searchable database.",
    bullets: ["Member photo & documents", "Plan & renewal history", "Online member portal"],
    accent: "text-electric-cyan",
  },
  {
    icon: CalendarClock, tag: "SCHEDULING",
    title: "Class & Trainer Scheduling",
    desc: "Assign trainers, schedule group classes, manage PT sessions and let members book online.",
    bullets: ["Group class booking", "PT session scheduling", "Online self-booking portal"],
    accent: "text-electric-blue",
  },
  {
    icon: Dumbbell, tag: "WELLNESS",
    title: "Diet & Workout Plans",
    desc: "Build and share personalised diet and workout programs with each member digitally via the app.",
    bullets: ["2,000+ workout GIFs library", "Custom diet programs", "Member progress tracking"],
    accent: "text-neon-green",
  },
  {
    icon: Briefcase, tag: "OPERATIONS",
    title: "Staff Management & Payroll",
    desc: "Role-based staff access, attendance tracking, commissions and payroll processing — all in one place.",
    bullets: ["Role-based access control", "Staff attendance & leaves", "Payroll & commissions"],
    accent: "text-electric-cyan",
  },
  {
    icon: BarChart3, tag: "ANALYTICS",
    title: "Reports & Analytics",
    desc: "Live dashboards for revenue, attendance, membership trends and retention to sharpen every decision.",
    bullets: ["Revenue & collection reports", "Attendance heatmaps", "Membership plan analytics"],
    accent: "text-electric-blue",
  },
  {
    icon: Building2, tag: "ENTERPRISE",
    title: "Multi-Branch Management",
    desc: "Manage all your gym locations from one login with branch-wise reports, member data and staff control.",
    bullets: ["Single login all branches", "Branch-wise P&L reports", "Centralised member database"],
    accent: "text-neon-green",
  },
  {
    icon: Smartphone, tag: "MOBILE",
    title: "Branded Member App",
    desc: "Your own branded gym app on iOS & Android — members view plans, pay online, book classes and track workouts.",
    bullets: ["iOS & Android app", "Online payments in-app", "Class & PT booking"],
    accent: "text-electric-cyan",
  },
  {
    icon: Megaphone, tag: "MARKETING",
    title: "Marketing & Promotions",
    desc: "Bulk WhatsApp & SMS campaigns, referral programs and special offer notifications to drive renewals.",
    bullets: ["Bulk WhatsApp campaigns", "Referral tracking", "Festival & offer messages"],
    accent: "text-electric-blue",
  },
];

const steps = [
  { num: "01", title: "Book a Free Demo", desc: "Our team walks you through GymOS live in 15 minutes — tailored to your gym's needs." },
  { num: "02", title: "We Set Up Everything", desc: "We migrate your existing member data and configure your plans. Go live in 48 hours." },
  { num: "03", title: "Your Gym Runs Itself", desc: "Renewals, reminders, billing and attendance run on autopilot. You focus on growth." },
];

const plans = [
  {
    name: "Starter", price: "₹999", period: "/month", yearly: "₹9,999/year",
    tagline: "For single-location gyms getting started", popular: false,
    features: ["Up to 500 members", "Member & billing management", "QR-code attendance", "WhatsApp renewal reminders", "GST invoicing", "Basic reports", "Email support"],
  },
  {
    name: "Pro", price: "₹1,999", period: "/month", yearly: "₹19,999/year",
    tagline: "For growing gyms that want full automation", popular: true,
    features: ["Unlimited members", "Biometric + QR + app check-in", "WhatsApp AI bot & bulk messaging", "Lead management & CRM", "Trainer & class scheduling", "Diet & workout plans", "Staff management & payroll", "Advanced analytics", "Priority support"],
  },
  {
    name: "Enterprise", price: "Custom", period: "", yearly: "",
    tagline: "For multi-branch chains & franchises", popular: false,
    features: ["Everything in Pro", "Multi-branch management", "Branded member mobile app", "Turnstile & RFID integration", "Custom integrations & API", "Dedicated account manager", "On-site onboarding"],
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar", role: "Owner, PowerFit Gym", city: "Bangalore", members: "320 members", rating: 5,
    text: "I used to spend 2 hours every morning on Excel and WhatsApp follow-ups. With GymOS, renewals happen automatically and my pending dues dropped by 60% in the first month.",
  },
  {
    name: "Priya Sharma", role: "Owner, FitZone Studio", city: "Hyderabad", members: "480 members", rating: 5,
    text: "The biometric integration and WhatsApp automation alone were worth it. Our team was set up in 2 days and the support from Devloft was outstanding.",
  },
  {
    name: "Arun Menon", role: "Owner, IronEdge Gym", city: "Chennai", members: "3 branches", rating: 5,
    text: "Managing 3 branches used to be a nightmare. Now one dashboard shows everything — revenue, attendance, member counts — for all locations in real time.",
  },
];

const faqs = [
  { q: "What is GymOS gym management software?", a: "GymOS is an all-in-one gym management software built for Indian gyms and fitness studios. It covers member management, billing, GST invoices, biometric attendance, WhatsApp automation, lead management, trainer scheduling, diet plans, staff payroll and analytics — all from one dashboard." },
  { q: "How much does gym management software cost in India?", a: "GymOS starts at ₹999/month (₹9,999/year) for the Starter plan and ₹1,999/month for the Pro plan with unlimited members and full automation. Enterprise pricing is available for multi-branch chains. All plans include free setup and data migration." },
  { q: "Does GymOS support WhatsApp reminders for renewals?", a: "Yes. GymOS automatically sends WhatsApp and SMS reminders to members before their membership expires, for pending dues, birthdays and anniversaries — with a 24/7 AI bot — without any manual work." },
  { q: "Can it manage multiple gym branches?", a: "Yes. GymOS Enterprise supports multi-branch management from one login with branch-wise revenue reports, attendance data and a centralised member database." },
  { q: "Does GymOS support biometric attendance for gyms?", a: "Yes. GymOS integrates with fingerprint devices, face recognition, RFID cards and QR code scanners. Expired or suspended members are automatically blocked at entry." },
  { q: "Is there a free trial for GymOS?", a: "We offer a free 15-minute personalised demo where our team walks you through the software live. We also migrate your existing member data for free and go live within 48 hours." },
  { q: "Which cities does GymOS serve in India?", a: "GymOS serves gyms across all major Indian cities including Bangalore, Mumbai, Hyderabad, Chennai, Delhi NCR, Pune, Kolkata, Ahmedabad, Jaipur, Surat, Lucknow, Indore, Chandigarh, Kochi, Coimbatore, Nagpur, Vizag and more." },
];

const cities = [
  "Bangalore", "Mumbai", "Hyderabad", "Chennai", "Delhi NCR",
  "Pune", "Kolkata", "Ahmedabad", "Jaipur", "Surat",
  "Lucknow", "Indore", "Chandigarh", "Kochi", "Coimbatore",
  "Nagpur", "Vizag", "Bhopal",
];

function DemoForm({ compact = false }) {
  const [form, setForm] = useState({ name: "", gymName: "", phone: "", city: "", members: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.phone) { setError("Please fill in your name and phone number."); return; }
    setSubmitting(true);
    try {
      await addSubmission({ fullName: form.name, company: form.gymName, phone: form.phone, city: form.city, message: `Members: ${form.members}`, source: "gym-erp-landing" });
      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
        <div className="w-12 h-12 rounded-full bg-neon-green/10 border border-neon-green/20 flex items-center justify-center">
          <CheckCheck size={22} className="text-neon-green" />
        </div>
        <h3 className="font-heading text-xl font-medium text-white">We'll call you shortly!</h3>
        <p className="text-gray-500 text-sm">Our team will reach out to schedule your free demo.</p>
      </div>
    );
  }

  const inputCls = "w-full px-4 py-3 rounded-md bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 text-sm font-sans focus:outline-none focus:border-neon-green/30 focus:bg-white/[0.05] transition-all duration-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {[
        { label: "Your Name *", name: "name", type: "text", placeholder: "Your Name" },
        { label: "Phone Number *", name: "phone", type: "tel", placeholder: "+91 98765 43210" },
        { label: "Gym / Studio Name", name: "gymName", type: "text", placeholder: "Your Gym Name" },
        ...(!compact ? [{ label: "City", name: "city", type: "text", placeholder: "e.g. Bangalore, Chennai" }] : []),
      ].map(({ label, name, type, placeholder }) => (
        <div key={name}>
          <label className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-1.5">{label}</label>
          <input type={type} name={name} value={form[name]} onChange={handleChange} placeholder={placeholder} className={inputCls} />
        </div>
      ))}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-1.5">Number of Members</label>
        <select name="members" value={form.members} onChange={handleChange}
          className="w-full px-4 py-3 rounded-md bg-dark-800 border border-white/[0.08] text-gray-400 text-sm font-sans focus:outline-none focus:border-neon-green/30 transition-all duration-200">
          <option value="">Select range</option>
          <option>Under 100</option>
          <option>100 – 300</option>
          <option>300 – 500</option>
          <option>500 – 1000</option>
          <option>1000+</option>
        </select>
      </div>
      {error && <p className="text-red-400 text-xs flex items-center gap-1.5 font-mono"><AlertCircle size={12} /> {error}</p>}
      <button type="submit" disabled={submitting}
        className="group w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-neon-green text-dark-950 font-heading font-medium text-sm hover:bg-neon-mint transition-all duration-300 disabled:opacity-50">
        {submitting
          ? <><Loader2 size={15} className="animate-spin" /> Submitting…</>
          : <>GET FREE DEMO <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" /></>}
      </button>
      <p className="text-center text-gray-600 text-[11px] font-mono">No credit card required · Cancel anytime</p>
    </form>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-2">
      {faqs.map((f, i) => (
        <div key={i} className="rounded-lg card-premium overflow-hidden transition-all duration-300">
          <button onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left gap-4">
            <span className="font-heading font-medium text-white text-sm sm:text-base leading-snug">{f.q}</span>
            <ChevronDown size={16} className={`text-neon-green shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && (
            <div className="px-6 pb-5">
              <p className="text-gray-400 text-sm leading-relaxed font-sans">{f.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function StickyBar({ onDemo }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-white/[0.08] bg-dark-950/95 backdrop-blur-md">
      <a href="tel:+918147814232"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 hover:bg-white/[0.04] transition-colors border-r border-white/[0.06]">
        <Phone size={17} className="text-gray-400" />
        <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500">Call Us</span>
      </a>
      <a href={`https://wa.me/918147814232`} target="_blank" rel="noreferrer"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 bg-[#25D366] hover:bg-[#20bd5a] transition-colors border-r border-white/[0.06]">
        <MessageCircle size={17} className="text-white" />
        <span className="text-[10px] font-mono uppercase tracking-wider text-white font-bold">WhatsApp</span>
      </a>
      <button onClick={onDemo}
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 bg-neon-green hover:bg-neon-mint transition-colors">
        <ArrowRight size={17} className="text-dark-950" />
        <span className="text-[10px] font-mono uppercase tracking-wider text-dark-950 font-bold">Demo</span>
      </button>
    </div>
  );
}

export default function GymLanding() {
  const formRef = useRef(null);
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="overflow-hidden relative pb-[60px] md:pb-0 bg-dark-950">
      <StickyBar onDemo={scrollToForm} />

      {/* ─── NAV ─── */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 bg-dark-950/90 backdrop-blur-md border-b border-white/[0.06]">
        <span className="font-heading text-lg font-medium flex items-center gap-2">
          <Dumbbell size={19} className="text-neon-green" />
          <span className="text-white">GymOS</span>
          <span className="text-gray-600 text-xs font-mono hidden sm:inline">by Devloft</span>
        </span>
        <div className="flex items-center gap-4">
          <a href={`tel:${PHONE_NUM}`} className="hidden md:flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-200">
            <Phone size={13} className="text-neon-green" /> {PHONE_NUM}
          </a>
          <a href={`https://wa.me/${WHATSAPP_NUM}`} target="_blank" rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-200">
            <MessageCircle size={13} className="text-electric-cyan" /> WhatsApp
          </a>
          <button onClick={scrollToForm}
            className="group inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-bl from-neon-green via-blue-50 to-blue-300 text-dark-950 font-heading font-medium text-sm hover:opacity-90 transition-all duration-300">
            Free Demo <ArrowUpRight size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center pt-20 pb-12 bg-dark-950">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-green/[0.08] rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-electric-blue/[0.12] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-7">
            <motion.p variants={fadeUp} className="text-sm font-mono uppercase tracking-widest text-neon-green/80">
              India's #1 Gym Management Software
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-heading text-5xl sm:text-6xl lg:text-[4.2rem] font-medium tracking-tight leading-[1.08]">
              <span className="text-white">Gym Software</span>
              <br />
              <span className="gradient-text">Trusted by 500+</span>
              <br />
              <span className="text-white">Gyms Across India</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg leading-relaxed max-w-lg">
              All-in-one gym management system — WhatsApp automation, biometric access,
              GST billing, lead management and analytics. Your gym runs itself.
            </motion.p>
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400 max-w-md">
              {[
                "WhatsApp AI bot & bulk messaging",
                "Biometric + QR + RFID access",
                "GST billing & UPI payments",
                "Lead management & CRM",
                "Multi-branch dashboard",
                "Staff management & payroll",
              ].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-neon-green shrink-0" /> {t}
                </span>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToForm}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-bl from-neon-green via-blue-50 to-blue-300 text-dark-950 font-heading font-medium hover:opacity-90 transition-all duration-300">
                Start 3-Day Free Trial
                <ArrowUpRight size={17} className="opacity-60 group-hover:opacity-100 transition-opacity" />
              </button>
              <a href={`https://wa.me/${WHATSAPP_NUM}`} target="_blank" rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full backdrop-blur-md bg-white/[0.04] border border-white/[0.08] text-white font-heading font-medium hover:bg-white/[0.08] hover:border-neon-green/20 transition-all duration-300">
                <MessageCircle size={16} className="text-neon-green" /> WhatsApp Us
              </a>
            </motion.div>
            <motion.p variants={fadeUp} className="text-gray-600 text-xs font-mono">
              No credit card required · Cancel anytime · Free data migration
            </motion.p>
          </motion.div>

          {/* Hero form */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-lg card-premium p-8 shadow-2xl shadow-black/50">
            <p className="text-sm font-mono uppercase tracking-widest text-neon-green/80 mb-1">Book a demo</p>
            <h2 className="font-heading text-2xl font-medium text-white mb-5">See everything live in 15 mins</h2>
            <DemoForm compact />
          </motion.div>
        </div>
      </section>

      {/* ─── CLIENT LOGOS ─── */}
      <Section className="py-10 bg-dark-900 border-y border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p variants={fadeUp} className="text-center text-xs font-mono uppercase tracking-widest text-gray-600 mb-5">
            Trusted by gyms across India
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {clientLogos.map((logo) => (
              <span key={logo} className="text-gray-600 text-sm font-heading font-medium hover:text-gray-400 transition-colors duration-200">{logo}</span>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ─── STATS ─── */}
      <Section className="py-20 relative">
        <div className="absolute inset-0 bg-dark-900/40" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label, color }, i) => (
            <motion.div key={label} variants={fadeUp} custom={i} className="flex flex-col items-center gap-2">
              <p className={`font-heading text-4xl sm:text-5xl font-light ${color}`}>{value}</p>
              <p className="text-gray-500 text-sm font-sans leading-tight">{label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─── FEATURES ─── */}
      <Section className="py-28 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-blue/[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <motion.div variants={fadeUp}>
              <p className="text-sm font-mono uppercase tracking-widest text-neon-green/80 mb-4">All-In-One Platform</p>
              <h2 className="font-heading text-4xl sm:text-5xl font-light text-white leading-tight">
                Twelve essentials,
                <br />
                <span className="gradient-text-alt">one software</span>
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} custom={1} className="text-gray-400 text-lg leading-relaxed max-w-md">
              From member check-in to billing, WhatsApp reminders to payroll — GymOS handles it all so you don't have to.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map(({ icon: Icon, tag, title, desc, bullets, accent }, i) => (
              <motion.div key={title} variants={fadeUp} custom={i % 3}>
                <div className="group rounded-lg card-premium glass-hover p-7 h-full transition-all duration-500">
                  <div className="flex items-start justify-between mb-5">
                    <Icon size={22} className={accent} />
                    <span className="font-mono text-[9px] uppercase tracking-widest text-gray-600">{tag}</span>
                  </div>
                  <h3 className="font-heading text-lg font-medium text-white mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                  <ul className="space-y-2">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-gray-500 text-xs font-sans">
                        <span className={`w-1 h-1 rounded-full shrink-0 bg-current ${accent}`} /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── HOW IT WORKS ─── */}
      <Section className="py-28 bg-dark-900/40 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-sm font-mono uppercase tracking-widest text-electric-cyan mb-4">Simple onboarding</p>
            <h2 className="font-heading text-4xl sm:text-5xl font-light text-white">
              How we <span className="gradient-text-alt">make it happen</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((step, i) => (
              <motion.div key={step.num} variants={fadeUp} custom={i}>
                <div className="group rounded-lg card-premium p-8 h-full transition-all duration-500">
                  <span className="font-mono text-4xl font-light text-neon-green/10 block mb-6">{step.num}</span>
                  <h3 className="font-heading text-xl font-medium text-white mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── PRICING ─── */}
      <Section className="py-28 relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-neon-green/[0.03] rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-mono uppercase tracking-widest text-electric-blue mb-4">Transparent Pricing</p>
            <h2 className="font-heading text-4xl sm:text-5xl font-light text-white mb-4">
              Gym software <span className="gradient-text-warm">pricing in India</span>
            </h2>
            <p className="text-gray-500 text-sm font-mono">No setup fees · No hidden charges · Free data migration · Cancel anytime</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {plans.map((plan, i) => (
              <motion.div key={plan.name} variants={fadeUp} custom={i}
                className={`relative rounded-lg flex flex-col gap-6 p-8 transition-all duration-500 ${plan.popular
                  ? "border border-neon-green/30 bg-white/[0.04] backdrop-blur-xl shadow-[0_0_60px_rgba(0,255,136,0.06)]"
                  : "card-premium"}`}>
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-neon-green text-dark-950 text-[10px] font-heading font-medium uppercase tracking-widest whitespace-nowrap">
                    <Zap size={10} fill="currentColor" /> Most Popular
                  </span>
                )}
                <div>
                  <h3 className="font-heading text-xl font-medium text-white mb-1">{plan.name}</h3>
                  <p className="text-gray-600 text-xs font-mono mb-5 min-h-[2rem]">{plan.tagline}</p>
                  <p className="font-heading text-4xl font-light text-white leading-none">
                    {plan.price}
                    <span className="text-sm text-gray-500 font-mono ml-1">{plan.period}</span>
                  </p>
                  {plan.yearly && <p className="text-neon-green/70 text-xs font-mono mt-1">Save 17% · {plan.yearly}</p>}
                </div>
                <ul className="space-y-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-gray-400 text-sm font-sans">
                      <CheckCircle2 size={14} className="text-neon-green shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
                <button onClick={scrollToForm}
                  className={`group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md font-heading font-medium text-sm transition-all duration-300 ${plan.popular
                    ? "bg-neon-green text-dark-950 hover:bg-neon-mint"
                    : "bg-white/[0.04] border border-white/[0.08] text-white hover:bg-white/[0.08] hover:border-neon-green/20"}`}>
                  {plan.price === "Custom" ? "Contact Sales" : "Start Free Demo"}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── TESTIMONIALS ─── */}
      <Section className="py-28 bg-dark-900/40 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <motion.div variants={fadeUp}>
              <p className="text-sm font-mono uppercase tracking-widest text-neon-green/80 mb-4">Real gyms, real results</p>
              <h2 className="font-heading text-4xl sm:text-5xl font-light text-white leading-tight">
                500+ gyms.
                <br />
                <span className="gradient-text">Here's what they say.</span>
              </h2>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map(({ name, role, city, members, rating, text }, i) => (
              <motion.div key={name} variants={fadeUp} custom={i}>
                <div className="group rounded-lg card-premium p-7 h-full transition-all duration-500">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: rating }).map((_, j) => <Star key={j} size={13} className="text-neon-green" fill="#00ff88" />)}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans">"{text}"</p>
                  <div className="border-t border-white/[0.06] pt-5">
                    <p className="font-heading font-medium text-white text-sm">{name}</p>
                    <p className="text-gray-600 text-xs font-mono mt-0.5">{role} · {city}</p>
                    <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-mono text-neon-green/60 bg-neon-green/[0.06] border border-neon-green/10 px-2 py-0.5 rounded-full">
                      <Users size={9} /> {members}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── DEMO FORM SECTION ─── */}
      <section ref={formRef} className="py-28 bg-dark-950 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-neon-green/[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-mono uppercase tracking-widest text-neon-green/80 mb-4">Get started today</p>
            <h2 className="font-heading text-4xl sm:text-5xl font-light text-white mb-6 leading-tight">
              Let's transform
              <br />
              <span className="gradient-text-warm">your gym</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Our team gives you a personalised 15-minute live walkthrough of GymOS — no obligation, no card required.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Complete live walkthrough of all features",
                "We migrate your existing member data free",
                "Technical consultation for your setup",
                "Go live within 48 hours",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-gray-400 text-sm font-sans">
                  <CheckCircle2 size={16} className="text-neon-green shrink-0 mt-0.5" /> {t}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-5 pt-4 border-t border-white/[0.06]">
              <a href={`tel:${PHONE_NUM}`} className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors duration-200">
                <Phone size={14} className="text-neon-green" /> {PHONE_NUM}
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUM}`} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors duration-200">
                <MessageCircle size={14} className="text-electric-cyan" /> WhatsApp Us
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-lg card-premium p-8 shadow-2xl shadow-black/50">
            <DemoForm />
          </motion.div>
        </div>
      </section>

      {/* ─── CITY SEO ─── */}
      <Section className="py-16 bg-dark-900/40 border-y border-white/[0.05]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-6">
            <MapPin size={15} className="text-electric-cyan" />
            <p className="text-sm font-mono uppercase tracking-widest text-gray-500">Gym Management Software Across India</p>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2.5">
            {cities.map((city) => (
              <span key={city}
                className="text-sm text-gray-500 bg-white/[0.03] border border-white/[0.06] px-4 py-1.5 rounded-full font-sans hover:border-neon-green/20 hover:text-gray-300 transition-all duration-200 cursor-default">
                {city}
              </span>
            ))}
          </motion.div>
          <motion.p variants={fadeUp} className="text-gray-700 text-xs font-mono mt-6">
            Gym management software in Bangalore · Chennai · Hyderabad · Mumbai · Pune · Delhi · Kolkata · Ahmedabad · Jaipur · Indore and 200+ cities in India
          </motion.p>
        </div>
      </Section>

      {/* ─── FAQ ─── */}
      <Section className="py-28 bg-dark-950 relative">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <p className="text-sm font-mono uppercase tracking-widest text-electric-blue mb-4">FAQs</p>
            <h2 className="font-heading text-4xl sm:text-5xl font-light text-white">
              Frequently asked <span className="gradient-text-warm">questions</span>
            </h2>
          </motion.div>
          <motion.div variants={fadeUp}><FAQ /></motion.div>
          <motion.div variants={fadeUp}
            className="mt-10 rounded-lg card-premium p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="font-heading font-medium text-white mb-1">Still have questions?</p>
              <p className="text-gray-500 text-sm font-sans">Talk to our team — we're here to help.</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a href={`https://wa.me/${WHATSAPP_NUM}`} target="_blank" rel="noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neon-green text-dark-950 font-heading font-medium text-sm hover:bg-neon-mint transition-all duration-300">
                <MessageCircle size={14} /> WhatsApp Us
              </a>
              <a href={`tel:${PHONE_NUM}`}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-white font-heading font-medium text-sm hover:bg-white/[0.08] hover:border-neon-green/20 transition-all duration-300">
                <Phone size={14} /> Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-dark-900 border-t border-white/[0.05] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-heading text-base font-medium mb-3 flex items-center gap-2">
              <Dumbbell size={17} className="text-neon-green" />
              <span className="text-white">GymOS</span>
            </p>
            <p className="text-gray-600 text-sm font-sans leading-relaxed mb-4">
              India's best gym management software. Built for gyms, yoga studios, CrossFit boxes and fitness centres across India.
            </p>
            <p className="text-gray-700 text-xs font-mono">by Devloft Technologies, Bangalore</p>
          </div>
          <div>
            <p className="font-heading font-medium text-white mb-4 text-sm">Features</p>
            <ul className="space-y-2 text-sm text-gray-600 font-sans">
              {["Member Management", "Gym Billing & GST", "Biometric Attendance", "WhatsApp Automation", "Lead Management", "Staff & Payroll"].map((s) => (
                <li key={s} className="hover:text-gray-400 transition-colors duration-200 cursor-default">{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-heading font-medium text-white mb-4 text-sm">Top Cities</p>
            <ul className="space-y-2 text-sm text-gray-600 font-sans">
              {["Bangalore", "Mumbai", "Hyderabad", "Chennai", "Delhi NCR", "Pune"].map((c) => (
                <li key={c} className="hover:text-gray-400 transition-colors duration-200 cursor-default">Gym Software {c}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-heading font-medium text-white mb-4 text-sm">Contact</p>
            <ul className="space-y-3 text-sm text-gray-600 font-sans">
              <li><a href={`tel:${PHONE_NUM}`} className="flex items-center gap-2 hover:text-gray-300 transition-colors duration-200"><Phone size={13} className="text-neon-green" /> {PHONE_NUM}</a></li>
              <li><a href={`https://wa.me/${WHATSAPP_NUM}`} className="flex items-center gap-2 hover:text-gray-300 transition-colors duration-200"><MessageCircle size={13} className="text-electric-cyan" /> WhatsApp Us</a></li>
              <li className="flex items-start gap-2"><MapPin size={13} className="text-electric-blue shrink-0 mt-0.5" /> Bangalore, Karnataka, India</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-700 text-xs font-mono">
          <p>© 2026 Devloft Technologies · GymOS Gym Management Software India</p>
          <p>Gym Software · Fitness Centre Software · Yoga Studio Management</p>
        </div>
      </footer>
    </div>
  );
}
