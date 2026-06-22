"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight, Phone, MessageCircle, CheckCircle2, AlertCircle,
  Users, CreditCard, Fingerprint, BellRing, CalendarClock, BarChart3,
  Dumbbell, Zap, ChevronDown, Star,
  Briefcase, MapPin, ArrowUpRight, ScanLine, Wrench,
  Package, Receipt, Settings, PieChart, FileSpreadsheet,
} from "lucide-react";


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

const modules = [
  {
    icon: Users, tag: "MEMBERS", accent: "text-neon-green",
    title: "Member Management",
    desc: "Complete member database with powerful search, filters and bulk operations.",
    bullets: [
      "Member list with Active / Expired / Absentee filters",
      "Add & edit member with photo upload",
      "Member profile with QR code generation & download",
      "Attendance calendar — monthly view & visit count",
      "Payment history per member",
      "Bulk Excel import & export",
      "SMS reminders for dues & renewals",
    ],
  },
  {
    icon: CreditCard, tag: "BILLING", accent: "text-electric-cyan",
    title: "Payments & Billing",
    desc: "Flexible billing that handles every payment scenario your gym faces.",
    bullets: [
      "Payment list with date / mode / status filters",
      "Dues & Expired tab — members with pending dues",
      "Auto-calculation of balance dues & expiry dates",
      "Cash, Card, UPI, Bank Transfer & Cheque modes",
      "Category-based plans — Gym, Zumba, Group Classes",
      "Monthly / Quarterly / 6-month / Annual / Special offer plans",
    ],
  },
  {
    icon: ScanLine, tag: "CHECK-IN", accent: "text-electric-blue",
    title: "Attendance & Check-in",
    desc: "Fast, accurate check-ins via QR, camera scanner or hardware barcode reader.",
    bullets: [
      "Camera-based QR code scanner (html5-qrcode)",
      "Hardware barcode scanner support",
      "Check-in & check-out with duration tracking",
      "Standalone Scanner Kiosk mode (no nav, full-screen)",
      "Attendance log — Today / 7 days / Month / Custom",
      "Duplicate scan prevention with audio feedback",
    ],
  },
  {
    icon: CalendarClock, tag: "CLASSES", accent: "text-neon-green",
    title: "Class Management",
    desc: "Schedule and manage every class type your gym offers, all in one place.",
    bullets: [
      "Class types: Zumba, Yoga, Dance, HIIT, Kids Dance, Gym",
      "Trainer assignment per class",
      "Multiple time slots per class (day + start/end times)",
      "Enrolled members list per class",
    ],
  },
  {
    icon: Briefcase, tag: "STAFF", accent: "text-electric-cyan",
    title: "Staff Management",
    desc: "Manage your entire team with role-based access and individual credentials.",
    bullets: [
      "Roles: Trainer, Staff, Manager, Receptionist",
      "Staff profile with salary & joining date",
      "Create login credentials (Firebase auth per staff)",
      "Admin: full access · Staff: check-in only",
      "Staff QR code for identification",
    ],
  },
  {
    icon: BarChart3, tag: "ANALYTICS", accent: "text-electric-blue",
    title: "Dashboard & Analytics",
    desc: "Live business intelligence so you always know where your gym stands.",
    bullets: [
      "Revenue (all-time & monthly), active & expired members",
      "Daily check-ins at a glance",
      "Members expiring in the next 7 days",
      "Revenue vs Expenses bar chart (6 months)",
      "Member status pie chart",
      "Revenue breakdown by membership plan",
    ],
  },
  {
    icon: Wrench, tag: "EQUIPMENT", accent: "text-neon-green",
    title: "Equipment Management",
    desc: "Track every piece of equipment and never miss a service date again.",
    bullets: [
      "Equipment list with purchase date & price",
      "Next service date tracking",
      "Service status: Overdue / Due Soon / Good",
    ],
  },
  {
    icon: Package, tag: "INVENTORY", accent: "text-electric-cyan",
    title: "Supplements Inventory",
    desc: "Keep supplement stock under control with real-time quantity tracking.",
    bullets: [
      "Stock tracking with quantity & price",
      "Status: Out of Stock / Low Stock / In Stock",
    ],
  },
  {
    icon: Receipt, tag: "EXPENSES", accent: "text-electric-blue",
    title: "Expense Tracking",
    desc: "Monitor every rupee going out — by category, month and payment mode.",
    bullets: [
      "Categories: Rent, Electricity, Salaries, Equipment, Supplements, Maintenance, Marketing",
      "Monthly expense tracking & category breakdown",
      "Payment mode tracking per expense",
    ],
  },
  {
    icon: Settings, tag: "SETTINGS", accent: "text-neon-green",
    title: "Gym Settings",
    desc: "Configure your gym profile, plans and display preferences with ease.",
    bullets: [
      "Gym name, location & contact details",
      "Membership plan CRUD — price, duration, category",
      "Dark / Light mode toggle",
    ],
  },
];

const steps = [
  { num: "01", title: "Book a Free Demo", desc: "Our team walks you through GymOS live in 15 minutes — tailored to your gym's needs." },
  { num: "02", title: "We Set Up Everything", desc: "We migrate your existing member data, configure your plans and set up staff logins. Go live in 48 hours." },
  { num: "03", title: "Your Gym Runs Itself", desc: "Renewals, reminders, billing and attendance run on autopilot. You focus on growth." },
];

const allFeatures = [
  "Unlimited members & staff accounts",
  "Member QR code profiles & attendance calendar",
  "Bulk Excel import & export",
  "SMS renewal & due reminders",
  "Multi-mode billing — Cash, UPI, Card, Bank Transfer",
  "Auto dues calculation & expiry tracking",
  "Camera & hardware QR / barcode check-in",
  "Standalone kiosk mode for reception desk",
  "Class scheduling — Zumba, Yoga, HIIT, Dance & more",
  "Role-based staff access with Firebase auth",
  "Equipment service tracking",
  "Supplements inventory management",
  "Expense tracking by category",
  "Revenue vs Expenses analytics dashboard",
  "Membership plan CRUD in Settings",
  "Dark / Light mode",
];

const plans = [
  {
    name: "Monthly", price: "₹799", period: "/month", saving: null,
    tagline: "Pay month to month, cancel anytime", popular: false,
  },
  {
    name: "Annual", price: "₹8,999", period: "/year", saving: "Save ₹589 vs monthly",
    tagline: "Best value — one payment for the full year", popular: true,
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar", role: "Owner, PowerFit Gym", city: "Bangalore", members: "320 members", rating: 5,
    text: "The QR check-in kiosk at our reception desk is a game changer. Members just scan and walk in. Pending dues dropped 60% in the first month with the SMS reminders.",
  },
  {
    name: "Priya Sharma", role: "Owner, FitZone Studio", city: "Hyderabad", members: "480 members", rating: 5,
    text: "We run Zumba, Yoga and HIIT classes and the class scheduling module handles all of it. Trainer assignment, time slots, enrolled members — everything in one screen.",
  },
  {
    name: "Arun Menon", role: "Owner, IronEdge Gym", city: "Chennai", members: "3 branches", rating: 5,
    text: "The dashboard is what sold me. Revenue vs expenses chart, members expiring in 7 days, plan-wise breakdown — I check it every morning on my phone.",
  },
];

const faqs = [
  {
    q: "What modules does GymOS include?",
    a: "GymOS includes 10 modules: Member Management (QR profiles, attendance calendar, bulk Excel import/export, SMS reminders), Payments & Billing (multi-mode, auto dues calculation), Attendance & Check-in (QR camera scanner, hardware barcode, kiosk mode), Class Management (Zumba/Yoga/HIIT/Dance), Staff Management (role-based Firebase auth), Dashboard & Analytics, Equipment Management, Supplements Inventory, Expense Tracking and Gym Settings.",
  },
  {
    q: "How does the QR code check-in work?",
    a: "Each member gets a unique QR code on their profile which they can download. At check-in, you can scan it using the built-in camera-based QR scanner (html5-qrcode) or a hardware barcode scanner. GymOS also has a standalone Kiosk mode — a full-screen popup with no navigation — perfect for the reception desk. Check-in and check-out are both tracked with duration, and duplicate scans are blocked with audio feedback.",
  },
  {
    q: "Can I manage different membership plans — Gym, Zumba, Group Classes?",
    a: "Yes. GymOS supports category-based membership plans for Gym, Zumba and Group Classes separately. Each category can have its own Monthly, Quarterly, 6-month, Annual or Special offer plans with custom pricing and duration. You manage all plans from the Settings module.",
  },
  {
    q: "How does billing and dues tracking work?",
    a: "GymOS auto-calculates each member's balance dues and expiry date based on their plan and payment history. The Dues & Expired tab shows all members with pending dues at a glance. You can record payments in Cash, Card, UPI, Bank Transfer or Cheque, and the system sends SMS reminders automatically for renewals and dues.",
  },
  {
    q: "How does staff access control work?",
    a: "You can create individual login credentials for each staff member using Firebase Auth. Four roles are supported — Trainer, Staff, Manager and Receptionist. Admins get full access to all modules; Staff role gets check-in only access. Each staff member also gets their own QR code, and you can track salary and joining date in their profile.",
  },
  {
    q: "Does GymOS track equipment and supplements?",
    a: "Yes. The Equipment Management module lets you log every piece of equipment with purchase date, price and next service date. Service status is shown as Overdue, Due Soon or Good so you never miss a maintenance. The Supplements Inventory module tracks stock quantity and price with Out of Stock / Low Stock / In Stock alerts.",
  },
  {
    q: "What analytics does the dashboard show?",
    a: "The GymOS dashboard shows all-time and monthly revenue, active vs expired member counts, daily check-ins, and members expiring in the next 7 days. It also has a 6-month Revenue vs Expenses bar chart, a Member Status pie chart and revenue breakdown by membership plan.",
  },
  {
    q: "How much does GymOS cost?",
    a: "GymOS is priced at ₹799/month or ₹8,999/year (saves ₹589 vs monthly). Both plans include every module — unlimited members, all check-in modes, class scheduling, staff management, equipment, inventory, analytics and more. No setup fees and free data migration included.",
  },
];

const cities = [
  "Bangalore", "Mumbai", "Hyderabad", "Chennai", "Delhi NCR",
  "Pune", "Kolkata", "Ahmedabad", "Jaipur", "Surat",
  "Lucknow", "Indore", "Chandigarh", "Kochi", "Coimbatore",
  "Nagpur", "Vizag", "Bhopal",
];

function DemoForm() {
  const [form, setForm] = useState({ name: "", gymName: "", phone: "", city: "", members: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.phone) { setError("Please fill in your name and phone number."); return; }

    const lines = [
      `👋 Hi! I'd like a free demo of GymOS.`,
      ``,
      `👤 Name: ${form.name}`,
      form.gymName ? `🏋️ Gym: ${form.gymName}` : null,
      `📞 Phone: ${form.phone}`,
      form.city ? `📍 City: ${form.city}` : null,
      form.members ? `👥 Members: ${form.members}` : null,
    ].filter(Boolean).join("\n");

    const url = `https://wa.me/918147814232?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const inputCls = "w-full px-4 py-3 rounded-md bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 text-sm font-sans focus:outline-none focus:border-neon-green/30 focus:bg-white/[0.05] transition-all duration-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {[
        { label: "Your Name *", name: "name", type: "text", placeholder: "Your Name" },
        { label: "Phone Number *", name: "phone", type: "tel", placeholder: "+91 98765 43210" },
        { label: "Gym / Studio Name", name: "gymName", type: "text", placeholder: "Your Gym Name" },
        { label: "City", name: "city", type: "text", placeholder: "e.g. Bangalore, Chennai" },
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
      <button type="submit"
        className="group w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-neon-green text-dark-950 font-heading font-medium text-sm hover:bg-neon-mint transition-all duration-300">
        <MessageCircle size={15} /> SEND ON WHATSAPP
      </button>
      <p className="text-center text-gray-600 text-[11px] font-mono">Opens WhatsApp with your details pre-filled</p>
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
              <span className="text-white">// Gym ERP</span>
              <br />
              <span className="gradient-text">built for India</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg leading-relaxed max-w-lg">
              Complete gym management system — members, billing, QR check-in, class scheduling, staff access, equipment, inventory and analytics. Everything your gym needs, nothing it doesn't.
            </motion.p>
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400 max-w-md">
              {[
                "QR & barcode check-in kiosk",
                "Auto dues & SMS reminders",
                "Multi-mode billing (UPI/Cash/Card)",
                "Zumba / Yoga / HIIT class scheduling",
                "Role-based staff access",
                "Revenue vs Expenses analytics",
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
          <motion.div ref={formRef} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-lg card-premium p-8 shadow-2xl shadow-black/50">
            <p className="text-sm font-mono uppercase tracking-widest text-neon-green/80 mb-1">Book a demo</p>
            <h2 className="font-heading text-2xl font-medium text-white mb-5">See everything live in 15 mins</h2>
            <DemoForm />
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

      {/* ─── MODULES ─── */}
      <Section className="py-28 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-blue/[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <motion.div variants={fadeUp}>
              <p className="text-sm font-mono uppercase tracking-widest text-neon-green/80 mb-4">What's inside</p>
              <h2 className="font-heading text-4xl sm:text-5xl font-light text-white leading-tight">
                Ten modules.
                <br />
                <span className="gradient-text-alt">One complete ERP.</span>
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} custom={1} className="text-gray-400 text-lg leading-relaxed max-w-md">
              Every feature built from real feedback from Indian gym owners — nothing generic, nothing missing.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map(({ icon: Icon, tag, title, desc, bullets, accent }, i) => (
              <motion.div key={title} variants={fadeUp} custom={i % 3}>
                <div className="group rounded-lg card-premium glass-hover p-7 h-full transition-all duration-500">
                  <div className="flex items-start justify-between mb-5">
                    <Icon size={22} className={accent} />
                    <span className="font-mono text-[9px] uppercase tracking-widest text-gray-600">{tag}</span>
                  </div>
                  <h3 className="font-heading text-lg font-medium text-white mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                  <ul className="space-y-1.5">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-gray-500 text-xs font-sans leading-snug">
                        <span className={`w-1 h-1 rounded-full shrink-0 mt-1.5 bg-current ${accent}`} /> {b}
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
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-mono uppercase tracking-widest text-electric-blue mb-4">Transparent Pricing</p>
            <h2 className="font-heading text-4xl sm:text-5xl font-light text-white mb-4">
              Gym software <span className="gradient-text-warm">pricing in India</span>
            </h2>
            <p className="text-gray-500 text-sm font-mono">No setup fees · No hidden charges · Free data migration · Cancel anytime</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {plans.map((plan, i) => (
                <motion.div key={plan.name} variants={fadeUp} custom={i}
                  className={`relative rounded-lg p-8 transition-all duration-500 ${plan.popular
                    ? "border border-neon-green/30 bg-white/[0.04] backdrop-blur-xl shadow-[0_0_60px_rgba(0,255,136,0.06)]"
                    : "card-premium"}`}>
                  {plan.popular && (
                    <span className="absolute -top-3.5 left-6 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-neon-green text-dark-950 text-[10px] font-heading font-medium uppercase tracking-widest whitespace-nowrap">
                      <Zap size={10} fill="currentColor" /> Best Value
                    </span>
                  )}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="font-heading text-xl font-medium text-white mb-1">{plan.name}</h3>
                      <p className="text-gray-600 text-xs font-mono">{plan.tagline}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-heading text-3xl font-light text-white leading-none">
                        {plan.price}
                        <span className="text-sm text-gray-500 font-mono ml-1">{plan.period}</span>
                      </p>
                      {plan.saving && <p className="text-neon-green/70 text-xs font-mono mt-1">{plan.saving}</p>}
                    </div>
                  </div>
                  <button onClick={scrollToForm}
                    className={`group w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md font-heading font-medium text-sm transition-all duration-300 ${plan.popular
                      ? "bg-neon-green text-dark-950 hover:bg-neon-mint"
                      : "bg-white/[0.04] border border-white/[0.08] text-white hover:bg-white/[0.08] hover:border-neon-green/20"}`}>
                    Start Free Demo
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} custom={1} className="rounded-lg card-premium p-8">
              <p className="text-xs font-mono uppercase tracking-widest text-neon-green/70 mb-5">Everything included in both plans</p>
              <ul className="space-y-2.5">
                {allFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-gray-400 text-sm font-sans">
                    <CheckCircle2 size={13} className="text-neon-green shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
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
              Complete gym management ERP for Indian gyms, yoga studios, CrossFit boxes and fitness centres.
            </p>
            <p className="text-gray-700 text-xs font-mono">by Devloft Technologies, Bangalore</p>
          </div>
          <div>
            <p className="font-heading font-medium text-white mb-4 text-sm">Modules</p>
            <ul className="space-y-2 text-sm text-gray-600 font-sans">
              {["Member Management", "Payments & Billing", "QR Attendance", "Class Scheduling", "Staff Management", "Analytics Dashboard"].map((s) => (
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
          <p>Gym ERP · Member Management · QR Attendance · Class Scheduling</p>
        </div>
      </footer>
    </div>
  );
}
