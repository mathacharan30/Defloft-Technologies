"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight, Phone, MessageCircle, CheckCircle2, AlertCircle,
  Users, CreditCard, Fingerprint, BellRing, CalendarClock, BarChart3,
  Dumbbell, Building2, Smartphone, ShieldCheck, Zap, TrendingUp,
  Send, Loader2, CheckCheck, ChevronDown, Star, IndianRupee,
  UserPlus, Briefcase, Megaphone, Activity, MapPin,
} from "lucide-react";
import { addSubmission } from "../data/submissions";

const PRODUCT = "GymOS";
const WHATSAPP_NUM = "918147814232";
const PHONE_NUM = "+91 8147814232";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};
const stagger = { visible: { transition: { staggerChildren: 0.07 } } };

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
  { value: "500+", label: "Gyms Across India", sub: "and growing" },
  { value: "80%", label: "Less Manual Work", sub: "on average" },
  { value: "72%", label: "Fewer Pending Dues", sub: "with auto-reminders" },
  { value: "99%", label: "Customer Retention", sub: "year on year" },
];

const features = [
  {
    icon: MessageCircle, title: "WhatsApp Automation & AI Bot",
    desc: "Auto-reminders for renewals, dues, birthdays and class updates via WhatsApp. 24/7 AI bot handles member queries — zero manual follow-up.",
    bullets: ["Bulk WhatsApp messaging", "Auto renewal & due alerts", "Birthday & anniversary wishes"],
  },
  {
    icon: Fingerprint, title: "Biometric & Turnstile Access",
    desc: "Fingerprint, face recognition, RFID and QR check-in. Expired members are blocked automatically at entry.",
    bullets: ["Fingerprint / face / RFID", "Auto-block expired members", "Real-time attendance logs"],
  },
  {
    icon: CreditCard, title: "Gym Billing & GST Invoicing",
    desc: "Auto-generate GST invoices, accept UPI and card payments. WhatsApp reminders cut pending dues by 72%.",
    bullets: ["UPI / card / cash tracking", "Auto-GST invoices", "Daily collection reports"],
  },
  {
    icon: UserPlus, title: "Lead Management & CRM",
    desc: "Capture leads from Instagram, Facebook and walk-ins. Automated follow-ups track every prospect from enquiry to enrollment.",
    bullets: ["Social media lead capture", "Automated follow-up messages", "Sales funnel insights"],
  },
  {
    icon: Users, title: "Member Management Software",
    desc: "Complete member profiles, photo, documents, membership history and plans — all in one searchable database.",
    bullets: ["Member photo & documents", "Plan & renewal history", "Online member portal"],
  },
  {
    icon: CalendarClock, title: "Class & Trainer Scheduling",
    desc: "Assign trainers, schedule group classes, manage PT sessions and let members book online — no calls, no confusion.",
    bullets: ["Group class booking", "PT session scheduling", "Online self-booking portal"],
  },
  {
    icon: Dumbbell, title: "Diet & Workout Plans",
    desc: "Build and share personalised diet and workout programs with each member digitally via the app.",
    bullets: ["2,000+ workout GIFs library", "Custom diet programs", "Member progress tracking"],
  },
  {
    icon: Briefcase, title: "Staff Management & Payroll",
    desc: "Role-based staff access, attendance tracking, commissions and payroll processing — all in one place.",
    bullets: ["Role-based access control", "Staff attendance & leaves", "Payroll & commissions"],
  },
  {
    icon: BarChart3, title: "Reports & Analytics",
    desc: "Live dashboards for revenue, attendance, membership trends and retention — everything you need to grow.",
    bullets: ["Revenue & collection reports", "Attendance heatmaps", "Membership plan analytics"],
  },
  {
    icon: Building2, title: "Multi-Branch Management",
    desc: "Manage all your gym branches from one login with branch-wise reports, member data and staff control.",
    bullets: ["Single login all branches", "Branch-wise P&L reports", "Centralised member database"],
  },
  {
    icon: Smartphone, title: "Branded Member App",
    desc: "Your own branded gym app — members view plans, pay online, book classes and track workouts.",
    bullets: ["iOS & Android app", "Online payments in-app", "Class & PT booking"],
  },
  {
    icon: Megaphone, title: "Marketing & Promotions",
    desc: "Bulk WhatsApp & SMS campaigns, referral programs and special offer notifications to drive renewals.",
    bullets: ["Bulk WhatsApp campaigns", "Referral tracking", "Festival & offer messages"],
  },
];

const steps = [
  { n: "01", title: "Book a Free Demo", desc: "Our team walks you through GymOS live in 15 minutes — tailored to your gym's needs." },
  { n: "02", title: "We Set Up Everything", desc: "We migrate your existing member data and configure your plans. Go live in 48 hours." },
  { n: "03", title: "Your Gym Runs Itself", desc: "Renewals, reminders, billing and attendance run on autopilot. You focus on growth." },
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
    name: "Rajesh Kumar", role: "Owner, PowerFit Gym", city: "Bangalore",
    members: "320 members", rating: 5,
    text: "I used to spend 2 hours every morning on Excel and WhatsApp follow-ups. With GymOS, renewals happen automatically and my pending dues dropped by over 60% in the first month.",
  },
  {
    name: "Priya Sharma", role: "Owner, FitZone Studio", city: "Hyderabad",
    members: "480 members", rating: 5,
    text: "The biometric integration and WhatsApp automation alone were worth it. Our team was set up in 2 days and the support from Devloft was outstanding.",
  },
  {
    name: "Arun Menon", role: "Owner, IronEdge Gym", city: "Chennai",
    members: "3 branches", rating: 5,
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

function DemoForm({ onSuccess }) {
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
      if (onSuccess) onSuccess();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
        <div className="w-14 h-14 rounded-full bg-[#ff5e1a]/15 flex items-center justify-center">
          <CheckCheck size={28} className="text-[#ff7a18]" />
        </div>
        <h3 className="font-heading text-xl font-bold text-white">We'll call you shortly!</h3>
        <p className="text-gray-400 text-sm">Our team will reach out to schedule your free demo.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {[
        { label: "Your Name *", name: "name", type: "text", placeholder: "Your Name" },
        { label: "Phone Number *", name: "phone", type: "tel", placeholder: "+91 98765 43210" },
        { label: "Gym / Studio Name", name: "gymName", type: "text", placeholder: "Your Gym Name" },
        { label: "City", name: "city", type: "text", placeholder: "e.g. Bangalore, Chennai" },
      ].map(({ label, name, type, placeholder }) => (
        <div key={name}>
          <label className="block text-xs font-medium text-gray-400 mb-1">{label}</label>
          <input type={type} name={name} value={form[name]} onChange={handleChange} placeholder={placeholder}
            className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.05] border border-white/[0.10] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#ff5e1a]/60 focus:ring-1 focus:ring-[#ff5e1a]/30 transition-all" />
        </div>
      ))}
      <div>
        <label className="block text-xs font-medium text-gray-400 mb-1">Number of Members</label>
        <select name="members" value={form.members} onChange={handleChange}
          className="w-full px-3.5 py-2.5 rounded-lg bg-[#1a1a26] border border-white/[0.10] text-gray-300 text-sm focus:outline-none focus:border-[#ff5e1a]/60 transition-all">
          <option value="">Select range</option>
          <option>Under 100</option>
          <option>100 – 300</option>
          <option>300 – 500</option>
          <option>500 – 1000</option>
          <option>1000+</option>
        </select>
      </div>
      {error && <p className="text-red-400 text-xs flex items-center gap-1.5"><AlertCircle size={13} /> {error}</p>}
      <button type="submit" disabled={submitting}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#ff5e1a] text-white font-bold text-sm hover:bg-[#ff7a18] disabled:opacity-60 transition-colors shadow-lg shadow-[#ff5e1a]/20">
        {submitting ? <><Loader2 size={15} className="animate-spin" /> Submitting…</> : <>GET FREE DEMO <ArrowRight size={15} /></>}
      </button>
      <p className="text-center text-gray-600 text-xs">No credit card required · Cancel anytime</p>
    </form>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-2.5">
      {faqs.map((f, i) => (
        <div key={i} className="rounded-xl border border-white/[0.08] bg-[#12121a]/60 overflow-hidden">
          <button onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left gap-4">
            <span className="font-semibold text-white text-sm leading-snug">{f.q}</span>
            <ChevronDown size={16} className={`text-[#ff7a18] shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && (
            <div className="px-5 pb-4">
              <p className="text-gray-400 text-sm leading-relaxed">{f.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function StickyBar({ onDemo }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-white/[0.10] bg-[#0a0a0f]/95 backdrop-blur-md">
      <a href={`tel:+918147814232`}
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white hover:bg-white/5 transition-colors border-r border-white/[0.08]">
        <Phone size={18} className="text-gray-300" />
        <span className="text-[11px] font-semibold text-gray-300">Call Us</span>
      </a>
      <a href={`https://wa.me/918147814232`} target="_blank" rel="noreferrer"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 bg-[#25D366] hover:bg-[#20bd5a] transition-colors border-r border-white/[0.08]">
        <MessageCircle size={18} className="text-white" />
        <span className="text-[11px] font-bold text-white">WhatsApp</span>
      </a>
      <button onClick={onDemo}
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 bg-[#ff5e1a] hover:bg-[#ff7a18] transition-colors">
        <ArrowRight size={18} className="text-white" />
        <span className="text-[11px] font-bold text-white">Demo</span>
      </button>
    </div>
  );
}

export default function GymLanding() {
  const formRef = useRef(null);
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans overflow-x-hidden pb-[60px] md:pb-0">
      <StickyBar onDemo={scrollToForm} />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10 py-3.5 bg-[#0a0a0f]/95 backdrop-blur-md border-b border-white/[0.07]">
        <span className="font-heading text-lg font-bold flex items-center gap-2">
          <Dumbbell size={20} className="text-[#ff5e1a]" />
          <span className="text-white">{PRODUCT}</span>
          <span className="text-gray-600 text-xs font-normal hidden sm:inline">by Devloft</span>
        </span>
        <div className="flex items-center gap-3">
          <a href={`tel:${PHONE_NUM.replace(/\s/g, "")}`} className="hidden md:flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors">
            <Phone size={13} className="text-[#ff7a18]" /> {PHONE_NUM}
          </a>
          <a href={`https://wa.me/${WHATSAPP_NUM}`} target="_blank" rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors">
            <MessageCircle size={13} className="text-[#ff7a18]" /> WhatsApp
          </a>
          <button onClick={scrollToForm}
            className="flex items-center gap-1.5 text-sm bg-[#ff5e1a] text-white font-bold px-4 py-2 rounded-full hover:bg-[#ff7a18] transition-colors">
            Free Demo
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,94,26,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,94,26,0.7) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff5e1a]/8 blur-[150px] rounded-full pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-5">
            <motion.div variants={fadeUp} className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff7a18] bg-[#ff5e1a]/10 border border-[#ff5e1a]/25 px-3 py-1 rounded-full uppercase tracking-wide">
                <Zap size={11} fill="currentColor" /> India's #1 Gym Management Software
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-heading text-[2.1rem] sm:text-5xl xl:text-[3.4rem] font-bold leading-[1.08] text-white">
              Gym Management Software
              <br />Trusted by <span className="text-[#ff5e1a]">500+ Gyms</span>
              <br />Across India
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-400 text-base md:text-[1.05rem] leading-relaxed max-w-xl">
              All-in-one gym management system with WhatsApp automation, biometric access,
              GST billing, lead management and analytics. Your gym runs itself.
            </motion.p>
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300 max-w-md">
              {[
                "WhatsApp AI bot & bulk messaging",
                "Biometric + QR + RFID access",
                "GST billing & UPI payments",
                "Lead management & CRM",
                "Multi-branch dashboard",
                "Staff management & payroll",
              ].map((t) => (
                <span key={t} className="flex items-start gap-1.5"><CheckCircle2 size={14} className="text-[#ff7a18] shrink-0 mt-0.5" /> {t}</span>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-1">
              <button onClick={scrollToForm}
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#ff5e1a] text-white font-bold text-sm hover:bg-[#ff7a18] transition-colors shadow-lg shadow-[#ff5e1a]/25">
                Start 3-Day Free Trial <ArrowRight size={15} />
              </button>
              <a href={`https://wa.me/${WHATSAPP_NUM}`} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 text-white text-sm font-medium hover:bg-white/5 transition-colors">
                <MessageCircle size={15} className="text-[#ff7a18]" /> WhatsApp Us
              </a>
            </motion.div>
            <motion.p variants={fadeUp} className="text-gray-600 text-xs">
              No credit card required &nbsp;·&nbsp; Cancel anytime &nbsp;·&nbsp; Free data migration
            </motion.p>
          </motion.div>

          {/* Right: Hero Demo Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#12121a] border border-white/[0.10] rounded-2xl p-7 shadow-2xl shadow-[#ff5e1a]/5 lg:ml-6">
            <div className="mb-5">
              <h2 className="font-heading text-xl font-bold text-white mb-1">Book Your Free Demo</h2>
              <p className="text-gray-500 text-sm">See everything live in 15 minutes</p>
            </div>
            <DemoForm />
          </motion.div>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <Section className="py-8 bg-[#0d0d15] border-y border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-5">
          <motion.p variants={fadeUp} className="text-center text-gray-600 text-xs uppercase tracking-widest mb-5 font-medium">
            Trusted by gyms across India
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {clientLogos.map((logo) => (
              <span key={logo} className="text-gray-600 text-sm font-semibold hover:text-gray-400 transition-colors">{logo}</span>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* STATS */}
      <Section className="py-14 bg-[#101018] border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-5 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label, sub }, i) => (
            <motion.div key={label} variants={fadeUp} custom={i} className="flex flex-col items-center gap-1">
              <p className="font-heading text-4xl font-bold text-[#ff5e1a]">{value}</p>
              <p className="text-white font-semibold text-sm">{label}</p>
              <p className="text-gray-600 text-xs">{sub}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FEATURES */}
      <Section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <p className="text-[#ff7a18] text-xs font-bold uppercase tracking-widest mb-3">All-In-One Platform</p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Twelve Essentials. <span className="text-[#ff5e1a]">One Software.</span>
              <br />Everything Your Gym Needs.
            </h2>
            <p className="text-gray-400 mt-4 text-base max-w-2xl mx-auto">
              From member check-in to billing, WhatsApp reminders to payroll — GymOS handles it all so you don't have to.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon: Icon, title, desc, bullets }, i) => (
              <motion.div key={title} variants={fadeUp} custom={i % 3}
                className="group rounded-2xl border border-white/[0.08] bg-[#0d0d15] p-6 hover:border-[#ff5e1a]/40 hover:bg-[#12121a] transition-all">
                <div className="inline-flex p-2.5 rounded-xl bg-[#ff5e1a]/10 mb-4 group-hover:bg-[#ff5e1a]/15 transition-colors">
                  <Icon size={21} className="text-[#ff7a18]" />
                </div>
                <h3 className="font-heading font-bold text-white text-base mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{desc}</p>
                <ul className="space-y-1.5">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-gray-400 text-xs">
                      <CheckCircle2 size={12} className="text-[#ff7a18] shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA BANNER */}
      <section className="py-14 px-5 bg-gradient-to-r from-[#ff5e1a]/15 via-[#ff5e1a]/10 to-transparent border-y border-[#ff5e1a]/20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">Your Gym Can Run Itself</h2>
            <p className="text-gray-400 text-base">Book a free 15-minute demo and see WhatsApp, biometrics and billing live.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button onClick={scrollToForm}
              className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#ff5e1a] text-white font-bold text-sm hover:bg-[#ff7a18] transition-colors shadow-lg shadow-[#ff5e1a]/20">
              Activate Free Trial
            </button>
            <a href={`https://wa.me/${WHATSAPP_NUM}`} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-5 py-3.5 rounded-full border border-white/15 text-white text-sm font-medium hover:bg-white/5 transition-colors">
              <MessageCircle size={15} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <Section className="py-20 px-5 bg-[#101018] border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <p className="text-[#ff7a18] text-xs font-bold uppercase tracking-widest mb-3">Simple Onboarding</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Get Your Gym on <span className="text-[#ff5e1a]">GymOS in 3 Steps</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map(({ n, title, desc }, i) => (
              <motion.div key={n} variants={fadeUp} custom={i}
                className="relative rounded-2xl border border-white/[0.08] bg-[#0a0a0f]/80 p-7 text-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#ff5e1a]/15 text-[#ff7a18] font-heading font-bold text-lg mb-4">{n}</span>
                <h3 className="font-heading font-bold text-white text-lg mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* PRICING */}
      <Section className="py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <p className="text-[#ff7a18] text-xs font-bold uppercase tracking-widest mb-3">Transparent Pricing</p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Gym Software <span className="text-[#ff5e1a]">Pricing in India</span>
            </h2>
            <p className="text-gray-400 mt-3 text-sm">No setup fees · No hidden charges · Free data migration · Cancel anytime</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {plans.map((plan, i) => (
              <motion.div key={plan.name} variants={fadeUp} custom={i}
                className={`relative rounded-2xl p-7 flex flex-col gap-5 ${plan.popular ? "border-2 border-[#ff5e1a] bg-[#12121a] shadow-xl shadow-[#ff5e1a]/10" : "border border-white/[0.09] bg-[#0d0d15]"}`}>
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#ff5e1a] text-white text-xs font-bold uppercase tracking-wide whitespace-nowrap">
                    <Zap size={11} fill="currentColor" /> Most Popular
                  </span>
                )}
                <div>
                  <h3 className="font-heading text-lg font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-gray-500 text-xs mb-4 min-h-[2.5rem]">{plan.tagline}</p>
                  <p className="font-heading text-4xl font-bold text-white leading-none">
                    {plan.price}
                    <span className="text-sm text-gray-500 font-normal ml-1">{plan.period}</span>
                  </p>
                  {plan.yearly && <p className="text-[#ff7a18] text-xs mt-1 font-medium">Save 17% · {plan.yearly}</p>}
                </div>
                <ul className="space-y-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-gray-300 text-sm">
                      <CheckCircle2 size={15} className="text-[#ff7a18] shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
                <button onClick={scrollToForm}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm transition-colors ${plan.popular ? "bg-[#ff5e1a] text-white hover:bg-[#ff7a18] shadow-lg shadow-[#ff5e1a]/20" : "border border-white/12 text-white hover:bg-white/5"}`}>
                  {plan.price === "Custom" ? "Contact Sales" : "Start Free Demo"}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section className="py-20 px-5 bg-[#101018] border-y border-white/[0.06]">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <p className="text-[#ff7a18] text-xs font-bold uppercase tracking-widest mb-3">Real Gyms, Real Results</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              500+ Gyms. <span className="text-[#ff5e1a]">Here's What They Say.</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map(({ name, role, city, members, rating, text }, i) => (
              <motion.div key={name} variants={fadeUp} custom={i}
                className="rounded-2xl border border-white/[0.08] bg-[#0a0a0f]/80 p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: rating }).map((_, j) => <Star key={j} size={13} className="text-[#ff7a18]" fill="#ff7a18" />)}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">"{text}"</p>
                <div className="border-t border-white/[0.07] pt-4">
                  <p className="text-white font-semibold text-sm">{name}</p>
                  <p className="text-gray-500 text-xs">{role} · {city}</p>
                  <span className="inline-flex items-center gap-1 mt-1.5 text-[10px] text-[#ff7a18] bg-[#ff5e1a]/10 px-2 py-0.5 rounded-full">
                    <Users size={9} /> {members}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* SECOND FORM */}
      <section ref={formRef} className="py-20 px-5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-[#ff7a18] text-xs font-bold uppercase tracking-widest mb-3">Get Started Today</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Book a Free Demo of <span className="text-[#ff5e1a]">India's Best Gym Software</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Our team gives you a personalised 15-minute live walkthrough of GymOS — no obligation, no card required.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Complete live walkthrough of all features",
                "We migrate your existing member data free",
                "Technical consultation for your setup",
                "Go live within 48 hours",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckCircle2 size={16} className="text-[#ff7a18] shrink-0 mt-0.5" /> {t}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 pt-2 border-t border-white/[0.07]">
              <a href={`tel:${PHONE_NUM.replace(/\s/g, "")}`} className="flex items-center gap-2 text-gray-300 text-sm hover:text-white transition-colors">
                <Phone size={15} className="text-[#ff7a18]" /> {PHONE_NUM}
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUM}`} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-gray-300 text-sm hover:text-white transition-colors">
                <MessageCircle size={15} className="text-[#ff7a18]" /> WhatsApp Us
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/[0.10] bg-[#12121a]/80 backdrop-blur-sm p-7">
            <DemoForm />
          </motion.div>
        </div>
      </section>

      {/* CITY SEO */}
      <Section className="py-16 px-5 bg-[#0d0d15] border-y border-white/[0.06]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-5">
            <MapPin size={16} className="text-[#ff7a18]" />
            <p className="text-white font-semibold text-base">Gym Management Software Across India</p>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2.5">
            {cities.map((city) => (
              <span key={city}
                className="text-sm text-gray-400 bg-white/[0.04] border border-white/[0.07] px-3.5 py-1.5 rounded-full hover:border-[#ff5e1a]/30 hover:text-gray-200 transition-colors cursor-default">
                {city}
              </span>
            ))}
          </motion.div>
          <motion.p variants={fadeUp} className="text-gray-600 text-xs mt-5">
            Gym management software in Bangalore · Chennai · Hyderabad · Mumbai · Pune · Delhi · Kolkata · Ahmedabad · Jaipur · Indore and 200+ cities in India
          </motion.p>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="py-20 px-5">
        <div className="max-w-3xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <p className="text-[#ff7a18] text-xs font-bold uppercase tracking-widest mb-3">FAQs</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Frequently Asked <span className="text-[#ff5e1a]">Questions</span>
            </h2>
            <p className="text-gray-500 mt-3 text-sm">Everything you need to know about GymOS gym management software India.</p>
          </motion.div>
          <motion.div variants={fadeUp}><FAQ /></motion.div>
          <motion.div variants={fadeUp} className="mt-10 rounded-2xl border border-[#ff5e1a]/20 bg-[#ff5e1a]/5 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold text-base mb-1">Still have questions?</p>
              <p className="text-gray-400 text-sm">Talk to our team — we're here to help.</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a href={`https://wa.me/${WHATSAPP_NUM}`} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ff5e1a] text-white text-sm font-bold hover:bg-[#ff7a18] transition-colors">
                <MessageCircle size={14} /> WhatsApp Us
              </a>
              <a href={`tel:${PHONE_NUM.replace(/\s/g, "")}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-white text-sm font-medium hover:bg-white/5 transition-colors">
                <Phone size={14} /> Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-[#080810] border-t border-white/[0.06] py-12 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-heading text-base font-bold mb-3 flex items-center gap-2">
              <Dumbbell size={18} className="text-[#ff5e1a]" />
              <span className="text-white">{PRODUCT}</span>
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              India's best gym management software. Built for gyms, yoga studios, CrossFit boxes and fitness centres across India.
            </p>
            <p className="text-gray-600 text-xs">by Devloft Technologies, Bangalore</p>
          </div>
          <div>
            <p className="font-semibold text-white mb-3 text-sm">Features</p>
            <ul className="space-y-2 text-sm text-gray-500">
              {["Member Management", "Gym Billing & GST", "Biometric Attendance", "WhatsApp Automation", "Lead Management", "Staff & Payroll"].map((s) => <li key={s} className="hover:text-gray-300 transition-colors">{s}</li>)}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white mb-3 text-sm">Top Cities</p>
            <ul className="space-y-2 text-sm text-gray-500">
              {["Bangalore", "Mumbai", "Hyderabad", "Chennai", "Delhi NCR", "Pune"].map((c) => (
                <li key={c} className="hover:text-gray-300 transition-colors">Gym Software {c}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white mb-3 text-sm">Contact</p>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-center gap-2"><Phone size={13} className="text-[#ff7a18]" /> {PHONE_NUM}</li>
              <li><a href={`https://wa.me/${WHATSAPP_NUM}`} className="flex items-center gap-2 hover:text-white transition-colors"><MessageCircle size={13} className="text-[#ff7a18]" /> WhatsApp Us</a></li>
              <li className="flex items-start gap-2"><MapPin size={13} className="text-[#ff7a18] shrink-0 mt-0.5" /> Bangalore, Karnataka, India</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-700 text-xs">
          <p>© 2026 Devloft Technologies · GymOS Gym Management Software India</p>
          <p>Gym Software · Fitness Centre Software · Yoga Studio Management Software</p>
        </div>
      </footer>
    </div>
  );
}
