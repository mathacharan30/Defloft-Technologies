"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Users,
  CreditCard,
  Fingerprint,
  BellRing,
  CalendarClock,
  BarChart3,
  Dumbbell,
  Building2,
  Smartphone,
  ShieldCheck,
  Zap,
  TrendingUp,
  Clock,
  Send,
  Loader2,
  CheckCheck,
  Activity,
} from "lucide-react";
import { addSubmission } from "../data/submissions";

// ─── brand ───────────────────────────────────────────────────────────────────
const PRODUCT = "GymOS";
const WHATSAPP_NUM = "918147814232";
const PHONE_NUM = "+91 8147814232";

// ─── motion ──────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};
const stagger = { visible: { transition: { staggerChildren: 0.07 } } };

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
  { icon: Building2, value: "120+", label: "Gyms Running on GymOS" },
  { icon: Users, value: "85,000+", label: "Members Managed" },
  { icon: TrendingUp, value: "30%", label: "Avg. Renewal Increase" },
  { icon: ShieldCheck, value: "99.9%", label: "Uptime" },
];

const problems = [
  {
    icon: AlertCircle,
    title: "Members Tracked in Registers & Excel",
    desc: "Data gets lost, duplicated, and impossible to search when you need it.",
  },
  {
    icon: BellRing,
    title: "Renewals Slip Through the Cracks",
    desc: "Expired memberships go unnoticed — that's revenue walking out the door.",
  },
  {
    icon: CreditCard,
    title: "Manual Billing & Cash Confusion",
    desc: "No clear record of who paid, who's due, or how much you actually earned.",
  },
  {
    icon: BarChart3,
    title: "No Visibility Into Your Business",
    desc: "Zero reports on attendance, revenue, or which plans actually sell.",
  },
];

const features = [
  {
    icon: Users,
    title: "Member Management",
    desc: "Complete member profiles, history, documents and plans in one searchable place.",
  },
  {
    icon: CreditCard,
    title: "Billing & Invoicing",
    desc: "Auto-generate GST invoices, accept online payments, track dues and collections.",
  },
  {
    icon: Fingerprint,
    title: "Attendance & Check-in",
    desc: "Biometric, QR-code and app check-ins with real-time attendance logs.",
  },
  {
    icon: BellRing,
    title: "Automated Reminders",
    desc: "WhatsApp & SMS alerts for renewals, dues and birthdays — fully automated.",
  },
  {
    icon: CalendarClock,
    title: "Trainer & Class Scheduling",
    desc: "Assign trainers, book classes and manage personal training sessions easily.",
  },
  {
    icon: Dumbbell,
    title: "Diet & Workout Plans",
    desc: "Build and share custom diet and workout programs with each member.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    desc: "Live dashboards for revenue, attendance, retention and plan performance.",
  },
  {
    icon: Building2,
    title: "Multi-Branch Support",
    desc: "Run multiple locations from a single login with branch-wise reporting.",
  },
  {
    icon: Smartphone,
    title: "Member Mobile App",
    desc: "Your branded app — members view plans, pay online and track workouts.",
  },
];

const steps = [
  {
    n: "01",
    title: "Book a Free Demo",
    desc: "We show you GymOS live and understand how your gym runs today.",
  },
  {
    n: "02",
    title: "We Set Everything Up",
    desc: "We import your members, plans and billing — you're live in 48 hours.",
  },
  {
    n: "03",
    title: "Run & Grow",
    desc: "Automate renewals, collect payments and watch retention climb.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "₹1,499",
    period: "/month",
    tagline: "For single-location gyms getting started",
    features: [
      "Up to 300 members",
      "Member & billing management",
      "QR-code attendance",
      "WhatsApp renewal reminders",
      "Basic reports",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "₹2,999",
    period: "/month",
    tagline: "For growing gyms that want automation",
    features: [
      "Unlimited members",
      "Biometric + QR + app check-in",
      "Automated WhatsApp & SMS",
      "Trainer & class scheduling",
      "Diet & workout plans",
      "Advanced analytics",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    tagline: "For multi-branch chains & franchises",
    features: [
      "Everything in Pro",
      "Multi-branch management",
      "Branded member mobile app",
      "Custom integrations",
      "Dedicated account manager",
      "On-site onboarding",
    ],
    popular: false,
  },
];

const whyUs = [
  { icon: Zap, title: "Live in 48 Hours", desc: "We handle setup and data migration for you." },
  { icon: MessageCircle, title: "Built for Indian Gyms", desc: "GST billing, WhatsApp & UPI out of the box." },
  { icon: Clock, title: "Fast Local Support", desc: "Real humans in Bangalore, not a ticket queue." },
  { icon: ShieldCheck, title: "Your Data is Safe", desc: "Daily backups and bank-grade security." },
];

// ─── dashboard mockup (hero visual) ──────────────────────────────────────────
function DashboardMock() {
  const bars = [55, 80, 45, 95, 70, 88, 60];
  return (
    <div className="relative w-full max-w-lg">
      <div className="rounded-2xl border border-white/10 bg-[#12121a]/90 backdrop-blur-sm p-5 shadow-2xl shadow-orange-500/10">
        {/* top bar */}
        <div className="flex items-center gap-2 mb-5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5e1a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="ml-3 text-xs text-gray-500 font-mono">{PRODUCT} · Dashboard</span>
        </div>
        {/* stat cards */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { l: "Active Members", v: "1,284", i: Users },
            { l: "This Month", v: "₹4.2L", i: CreditCard },
            { l: "Check-ins Today", v: "342", i: Activity },
          ].map(({ l, v, i: Icon }) => (
            <div key={l} className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-3">
              <Icon size={16} className="text-[#ff7a18] mb-2" />
              <p className="text-white font-bold text-sm leading-none">{v}</p>
              <p className="text-gray-500 text-[10px] mt-1">{l}</p>
            </div>
          ))}
        </div>
        {/* chart */}
        <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-400 text-xs">Weekly Revenue</p>
            <span className="text-[#ff7a18] text-[10px] flex items-center gap-1">
              <TrendingUp size={11} /> +18%
            </span>
          </div>
          <div className="flex items-end gap-2 h-20">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-[#ff5e1a] to-[#ff9a3c]"
                style={{ height: `${h}%`, opacity: 0.55 + (h / 100) * 0.45 }}
              />
            ))}
          </div>
        </div>
        {/* member rows */}
        <div className="space-y-2">
          {[
            { n: "Renewals due this week", c: "23", ok: false },
            { n: "Payments collected today", c: "₹38,500", ok: true },
          ].map(({ n, c, ok }) => (
            <div
              key={n}
              className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2"
            >
              <span className="text-gray-400 text-xs">{n}</span>
              <span
                className={`text-xs font-semibold ${ok ? "text-[#ff7a18]" : "text-white"}`}
              >
                {c}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -inset-6 rounded-3xl bg-[#ff5e1a]/10 blur-3xl -z-10" />
    </div>
  );
}

// ─── main component ──────────────────────────────────────────────────────────
export default function GymLanding() {
  const [form, setForm] = useState({
    name: "",
    gymName: "",
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
    if (!form.name || !form.gymName || !form.phone) {
      setError("Please fill in your name, gym name and phone number.");
      return;
    }
    setSubmitting(true);
    try {
      await addSubmission({
        fullName: form.name,
        company: form.gymName,
        phone: form.phone,
        city: form.city,
        message: form.message,
        source: "gym-erp-landing",
      });
      setSuccess(true);
      setForm({ name: "", gymName: "", phone: "", city: "", message: "" });
      setTimeout(() => setSuccess(false), 6000);
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
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans overflow-x-hidden">
      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/[0.06]">
        <span className="font-heading text-lg font-bold flex items-center gap-2">
          <Dumbbell size={20} className="text-[#ff5e1a]" />
          <span className="text-white">{PRODUCT}</span>
          <span className="text-gray-500 text-xs font-normal hidden sm:inline">
            by Devloft
          </span>
        </span>
        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${WHATSAPP_NUM}`}
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
          >
            <MessageCircle size={15} />
            WhatsApp
          </a>
          <button
            onClick={scrollToForm}
            className="flex items-center gap-2 text-sm bg-[#ff5e1a] text-white font-semibold px-4 py-2 rounded-full hover:bg-[#ff7a18] transition-colors"
          >
            Book Free Demo
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,94,26,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,94,26,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#ff5e1a]/10 blur-[120px] rounded-full -z-0" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-xs font-medium text-[#ff7a18] bg-[#ff5e1a]/10 border border-[#ff5e1a]/20 px-3 py-1.5 rounded-full"
            >
              <Zap size={13} /> All-in-one Gym Management Software
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.1] text-white"
            >
              Run Your Entire Gym
              <br />
              From <span className="text-[#ff5e1a]">One Dashboard</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg"
            >
              {PRODUCT} handles members, billing, attendance and automated
              renewal reminders — so you stop chasing payments and start growing
              your gym.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 text-sm text-gray-300">
              {["No more registers", "Zero missed renewals", "Live in 48 hours"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-[#ff7a18]" />
                  {t}
                </span>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={scrollToForm}
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#ff5e1a] text-white font-semibold text-sm hover:bg-[#ff7a18] transition-colors shadow-lg shadow-[#ff5e1a]/25"
              >
                Book a Free Demo <ArrowRight size={16} />
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUM}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 text-white text-sm font-medium hover:bg-white/5 transition-colors"
              >
                <MessageCircle size={16} className="text-[#ff7a18]" />
                Chat on WhatsApp
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="flex items-center gap-2 text-gray-400 text-sm pt-1">
              <Phone size={15} className="text-[#ff7a18]" />
              <span>{PHONE_NUM}</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <DashboardMock />
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <Section className="py-14 bg-[#101018] border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div key={label} variants={fadeUp} custom={i} className="flex flex-col items-center gap-2">
              <Icon size={26} className="text-[#ff7a18]" />
              <p className="font-heading text-3xl font-bold text-white">{value}</p>
              <p className="text-gray-500 text-sm">{label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── PROBLEMS ── */}
      <Section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Still Running Your Gym on{" "}
              <span className="text-[#ff5e1a]">Registers & Excel?</span>
            </h2>
            <p className="text-gray-400 mt-4 text-base">
              Here's what it's quietly costing you every month.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {problems.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                custom={i}
                className="rounded-2xl border border-white/[0.08] bg-[#12121a]/60 p-6 hover:border-[#ff5e1a]/30 transition-colors"
              >
                <Icon size={26} className="text-[#ff5e1a] mb-4" />
                <h3 className="font-heading font-semibold text-white text-lg mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FEATURES ── */}
      <Section className="py-20 px-6 bg-[#101018] border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Everything Your Gym Needs,{" "}
              <span className="text-[#ff5e1a]">In One Place</span>
            </h2>
            <p className="text-gray-400 mt-3 text-base">
              One platform to manage members, money and operations.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                custom={i % 3}
                className="group rounded-2xl border border-white/[0.08] bg-[#0a0a0f]/60 p-6 hover:border-[#ff5e1a]/40 hover:bg-[#12121a] transition-all"
              >
                <div className="inline-flex p-2.5 rounded-xl bg-[#ff5e1a]/10 mb-4 group-hover:bg-[#ff5e1a]/20 transition-colors">
                  <Icon size={22} className="text-[#ff7a18]" />
                </div>
                <h3 className="font-heading font-semibold text-white text-lg mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Go Live in <span className="text-[#ff5e1a]">3 Simple Steps</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map(({ n, title, desc }, i) => (
              <motion.div key={n} variants={fadeUp} custom={i} className="relative rounded-2xl border border-white/[0.08] bg-[#12121a]/60 p-7">
                <span className="font-heading text-5xl font-bold text-[#ff5e1a]/20">{n}</span>
                <h3 className="font-heading font-semibold text-white text-lg mt-2 mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PRICING ── */}
      <Section className="py-20 px-6 bg-[#101018] border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Simple, <span className="text-[#ff5e1a]">Honest Pricing</span>
            </h2>
            <p className="text-gray-400 mt-3 text-sm">
              No setup fees. No hidden charges. Cancel anytime.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                custom={i}
                className={`relative rounded-2xl p-8 flex flex-col gap-6 ${
                  plan.popular
                    ? "border-2 border-[#ff5e1a] bg-[#12121a] shadow-xl shadow-[#ff5e1a]/10"
                    : "border border-white/[0.10] bg-[#0a0a0f]/60"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#ff5e1a] text-white text-xs font-bold uppercase tracking-wide">
                    <Zap size={12} fill="currentColor" />
                    Most Popular
                  </span>
                )}
                <div>
                  <h3 className="font-heading text-lg font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-gray-500 text-xs mb-4 min-h-[2rem]">{plan.tagline}</p>
                  <p className="font-heading text-4xl font-bold text-white">
                    {plan.price}
                    <span className="text-base text-gray-500 font-normal">{plan.period}</span>
                  </p>
                </div>
                <ul className="space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-gray-300 text-sm">
                      <CheckCircle2 size={16} className="text-[#ff7a18] shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={scrollToForm}
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-colors ${
                    plan.popular
                      ? "bg-[#ff5e1a] text-white hover:bg-[#ff7a18] shadow-lg shadow-[#ff5e1a]/20"
                      : "border border-white/15 text-white hover:bg-white/5"
                  }`}
                >
                  {plan.price === "Custom" ? "Talk to Sales" : "Start Free Demo"}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── WHY US ── */}
      <Section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Why Gyms Choose <span className="text-[#ff5e1a]">{PRODUCT}</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                custom={i}
                className="rounded-2xl border border-white/[0.08] bg-[#12121a]/60 p-6 flex flex-col items-center text-center hover:border-[#ff5e1a]/30 transition-colors"
              >
                <Icon size={26} className="text-[#ff7a18] mb-4" />
                <h3 className="font-heading font-semibold text-white mb-1 text-base">{title}</h3>
                <p className="text-gray-400 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── DEMO / LEAD FORM ── */}
      <section ref={formRef} className="py-20 px-6 bg-[#101018] border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* left copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              See {PRODUCT} Live —{" "}
              <span className="text-[#ff5e1a]">Free Demo</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Tell us about your gym and we'll give you a personalized walkthrough.
              No obligation, no pressure — just see if it's right for you.
            </p>
            <ul className="space-y-3">
              {[
                "30-minute personalized walkthrough",
                "We migrate your existing data for free",
                "Go live within 48 hours",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-gray-300 text-sm">
                  <CheckCircle2 size={17} className="text-[#ff7a18] shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/[0.08] bg-[#0a0a0f]/70 backdrop-blur-sm p-8 space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Your Name <span className="text-[#ff7a18]">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#ff5e1a]/50 focus:ring-1 focus:ring-[#ff5e1a]/30 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Gym / Studio Name <span className="text-[#ff7a18]">*</span>
              </label>
              <input
                type="text"
                name="gymName"
                value={form.gymName}
                onChange={handleChange}
                placeholder="Your Gym Name"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#ff5e1a]/50 focus:ring-1 focus:ring-[#ff5e1a]/30 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Phone Number <span className="text-[#ff7a18]">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#ff5e1a]/50 focus:ring-1 focus:ring-[#ff5e1a]/30 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">City</label>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="Your City"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#ff5e1a]/50 focus:ring-1 focus:ring-[#ff5e1a]/30 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                How many members do you have?
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                placeholder="e.g. ~400 members, 1 branch, currently using Excel"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#ff5e1a]/50 focus:ring-1 focus:ring-[#ff5e1a]/30 transition-all resize-none"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm flex items-center gap-2">
                <AlertCircle size={14} />
                {error}
              </p>
            )}
            {success && (
              <div className="flex items-center gap-2 text-[#ff7a18] text-sm bg-[#ff5e1a]/10 border border-[#ff5e1a]/20 rounded-xl px-4 py-3">
                <CheckCheck size={16} />
                Thanks! We'll call you to schedule your demo shortly.
              </div>
            )}

            <button
              type="submit"
              disabled={submitting || success}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#ff5e1a] text-white font-semibold text-sm hover:bg-[#ff7a18] disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-lg shadow-[#ff5e1a]/20"
            >
              {submitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Submitting…
                </>
              ) : (
                <>
                  Book My Free Demo
                  <Send size={15} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0a0a0f] border-t border-white/[0.06] py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div>
            <p className="font-heading text-base font-bold mb-3 flex items-center gap-2">
              <Dumbbell size={18} className="text-[#ff5e1a]" />
              <span className="text-white">{PRODUCT}</span>
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Gym management software by Devloft Technologies. Built to help
              gyms in India grow without the paperwork.
            </p>
          </div>
          <div>
            <p className="font-heading font-semibold text-white mb-3 text-sm">Contact</p>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={13} className="text-[#ff7a18]" />
                {PHONE_NUM}
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={13} className="text-[#ff7a18]" />
                <a href={`https://wa.me/${WHATSAPP_NUM}`} className="hover:text-white">
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-heading font-semibold text-white mb-3 text-sm">Product</p>
            <ul className="space-y-2 text-sm text-gray-400">
              {["Member Management", "Billing & Invoicing", "Attendance", "Reports & Analytics"].map(
                (s) => (
                  <li key={s}>{s}</li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/[0.05] text-center text-gray-600 text-xs">
          © 2026 Devloft Technologies. {PRODUCT} — Gym Management Software.
        </div>
      </footer>
    </div>
  );
}
