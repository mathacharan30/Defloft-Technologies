"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ExternalLink, Quote, Star } from "lucide-react";
import Link from "next/link";

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

const reviews = [
  {
    company: "Satvegik",
    category: "Custom Ecommerce Website",
    url: "https://www.satvegik.com",
    accent: "text-neon-green",
    summary:
      "A premium ecommerce platform for stone-ground nut and seed butters, built with a polished customer journey and a reliable business backend.",
    quote:
      "The website not only looks professional but also provides the complete ecommerce infrastructure we needed to grow our business. It has improved the customer experience, streamlined our daily operations, and given Satvegik a much stronger online presence.",
    details: [
      "The site reflects Satvegik's natural, premium brand while keeping product discovery simple across product pages, ingredients, nutrition details, reviews, and related products.",
      "The mobile shopping experience remains smooth and consistent, which was essential because most customers browse and buy from their phones.",
      "Products, inventory, customer accounts, reviews, orders, coupons, inquiries, revenue tracking, PhonePe checkout, and shipment workflows are connected through a structured backend and admin dashboard.",
      "Shiprocket tracking, secure admin access, customer notifications, retry handling, and order timelines give the business a dependable foundation for long-term growth.",
    ],
  },
  {
    company: "Deep Fitness",
    category: "Fitness Coaching App",
    url: "https://www.deepfitness.in/",
    accent: "text-electric-blue",
    summary:
      "A fitness coaching platform with separate member and trainer flows for workouts, diet planning, member management, and progress tracking.",
    quote:
      "The developer delivered an app that looks professional, supports our real workflow, and gives both trainers and members a much better experience. It feels like a strong foundation for Deep Fitness as we continue building our digital coaching system.",
    details: [
      "The app presents Deep Fitness with premium black and gold branding, clean cards, a smooth splash screen, bottom navigation, and dark mode.",
      "Members can view today's workout, exercise details, sets, reps, rest time, trainer notes, images, diet plans, macros, water tracking, and progress metrics.",
      "Trainers can search members, add clients, record measurements, assign workout and diet plans, and share account invites through WhatsApp.",
      "Supabase authentication, database storage, server-side member creation, structured fitness tables, and row-level security keep the product practical and trustworthy.",
    ],
  },
  {
    company: "Sri Sai Tours & Travels",
    category: "Travel Business Website",
    url: "https://www.srisaitoursandtravelsmys.in",
    accent: "text-electric-cyan",
    summary:
      "A customer-friendly tours and travels website designed to make packages easy to compare and inquiries easy to start.",
    quote:
      "The website feels like it was built with our actual business flow in mind, not from a generic template. It represents Sri Sai Tours & Travels in a clean, trustworthy, and customer-friendly way.",
    details: [
      "Tour packages are clearly presented with destination photos, duration, short descriptions, and starting prices for common Mysore, Bangalore, Ooty, Coorg, Tirupati, and multi-day routes.",
      "FAQ sections help answer booking, customization, and inclusion questions before customers contact the business.",
      "WhatsApp and call buttons are placed throughout the site so mobile visitors can quickly start a conversation.",
      "The gallery, fleet photos, contact details, Google Maps access, mobile navigation, and loading polish create a smoother inquiry experience.",
    ],
  },
];

function CustomerReviews() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative pt-36 pb-24 bg-dark-950">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-mono uppercase tracking-widest text-neon-green/80 mb-6"
          >
            Customer Review
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight max-w-4xl"
          >
            Trusted by businesses that{" "}
            <span className="gradient-text">build with us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl leading-relaxed"
          >
            Real feedback from companies using Devloft-built products across
            ecommerce, fitness coaching, and travel experiences.
          </motion.p>
        </div>
      </section>

      {/* Reviews */}
      <Section className="py-20 bg-dark-900/40 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5">
            {reviews.map((review, i) => (
              <motion.article key={review.company} variants={fadeUp} custom={i}>
                <div className="group rounded-lg card-premium p-6 sm:p-8 lg:p-10 transition-all duration-500">
                  <div className="grid lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-4">
                      <div className="flex items-center gap-2 mb-5">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            size={15}
                            className={`${review.accent} fill-current`}
                          />
                        ))}
                      </div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-gray-600 mb-3">
                        {review.category}
                      </p>
                      <h2 className="font-heading text-2xl sm:text-3xl font-light text-white mb-4">
                        {review.company}
                      </h2>
                      <p className="text-gray-500 text-sm leading-relaxed mb-7">
                        {review.summary}
                      </p>
                      <a
                        href={review.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group/link inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white/[0.04] border border-white/[0.06] text-white text-sm font-heading font-medium hover:border-neon-green/20 hover:text-neon-green transition-all duration-300"
                      >
                        View site
                        <ExternalLink
                          size={15}
                          className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                        />
                      </a>
                    </div>

                    <div className="lg:col-span-8">
                      <div className="flex items-start gap-4 mb-7">
                        <Quote
                          size={28}
                          className={`${review.accent} flex-shrink-0 opacity-70`}
                        />
                        <p className="font-heading text-xl sm:text-2xl font-light text-white leading-relaxed">
                          {review.quote}
                        </p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3">
                        {review.details.map((detail, index) => (
                          <div
                            key={index}
                            className="rounded-md border border-white/[0.05] bg-dark-950/40 p-4"
                          >
                            <span className="font-mono text-[10px] text-gray-700 block mb-3">
                              0{index + 1}
                            </span>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              {detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-28 bg-dark-950 relative">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeUp}>
            <div className="rounded-lg card-premium p-12 sm:p-16">
              <p className="text-sm font-mono uppercase tracking-widest text-neon-green/80 mb-4">
                Your project next
              </p>
              <h2 className="font-heading text-3xl sm:text-5xl font-light text-white mb-5">
                Build a product your{" "}
                <span className="gradient-text-warm">customers trust</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                From public websites to operational backends, we design and
                develop digital systems that support real business workflows.
              </p>
              <Link
                href="/contact"
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

export default CustomerReviews;
