import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { addSubmission } from "../data/submissions";

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

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@devlofttech.com" },
  { icon: Phone, label: "Phone", value: "+91 8147814232" },
  {
    icon: MapPin,
    label: "Office",
    value:
      "No.804, 772/A, B\u2019 Block, 3rd Stage, Vijayanagar 570017 — Mysore, India",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addSubmission(formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  const inputClasses =
    "w-full px-4 py-3.5 rounded-md bg-white/[0.03] backdrop-blur-md border border-white/[0.06] text-white placeholder-gray-600 focus:border-neon-green/30 focus:ring-1 focus:ring-neon-green/10 focus:bg-white/[0.05] outline-none transition-all duration-300 text-sm font-sans";
  const labelClasses =
    "block text-gray-400 text-sm font-heading font-medium mb-2";

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative pt-36 pb-12 bg-dark-950">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-mono uppercase tracking-widest text-neon-green/80 mb-6"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight max-w-3xl"
          >
            Let's <span className="gradient-text">connect</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-xl leading-relaxed"
          >
            Let's discuss how we can help transform your business with
            innovative technology solutions.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <Section className="py-12 bg-dark-900/40 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <motion.div variants={fadeUp} className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-medium text-white mb-4">
                Contact Information
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-10">
                Have a question or ready to start a project? Reach out through
                any of the following channels, and our team will get back to you
                within 24 hours.
              </p>

              <div className="space-y-6 mb-10">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <item.icon
                      size={17}
                      className="text-neon-green mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <h3 className="font-heading text-white font-medium text-sm mb-1">
                        {item.label}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="rounded-lg card-premium p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={17} className="text-neon-green" />
                  <h3 className="font-heading text-white font-medium text-sm">
                    Office Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Monday — Saturday</span>
                    <span className="text-white font-mono text-xs">
                      9:00 AM — 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Sunday</span>
                    <span className="text-gray-600 font-mono text-xs">
                      Closed
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div variants={fadeUp} custom={1} className="lg:col-span-3">
              <div className="rounded-lg card-premium p-8">
                <div className="mb-8">
                  <h2 className="font-heading text-2xl font-medium text-white">
                    Send Us a Message
                  </h2>
                </div>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-md bg-neon-green/10 border border-neon-green/20"
                  >
                    <p className="text-neon-green text-sm font-medium">
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClasses}>
                        Full Name <span className="text-neon-green">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className={labelClasses}>
                        Email Address <span className="text-neon-green">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClasses}>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className={labelClasses}>Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClasses}>
                      Service Interested In{" "}
                      <span className="text-neon-green">*</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className={`${inputClasses} appearance-none cursor-pointer`}
                    >
                      <option value="" className="bg-dark-900">
                        Select a service
                      </option>
                      <option value="web-development" className="bg-dark-900">
                        Web Development
                      </option>
                      <option value="ui-ux-design" className="bg-dark-900">
                        UI/UX Design
                      </option>
                      <option
                        value="erp-implementation"
                        className="bg-dark-900"
                      >
                        ERP Implementation
                      </option>
                      <option
                        value="business-analytics"
                        className="bg-dark-900"
                      >
                        Business Analytics
                      </option>
                      <option value="consulting" className="bg-dark-900">
                        Consulting
                      </option>
                      <option value="other" className="bg-dark-900">
                        Other
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClasses}>
                      Message <span className="text-neon-green">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      required
                      rows="5"
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-neon-green text-dark-950 font-heading font-medium hover:bg-neon-lime transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Map */}
      <Section className="py-28 bg-dark-950 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="mb-10">
            <p className="text-sm font-mono uppercase tracking-widest text-neon-green/80 mb-3">
              Location
            </p>
            <h2 className="font-heading text-3xl font-medium text-white mb-2">
              Find Us
            </h2>
            <p className="text-gray-500">Visit our office in Mysuru</p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            custom={1}
            className="rounded-lg overflow-hidden border border-white/[0.06] h-96"
          >
            <iframe
              src="https://maps.google.com/maps?q=12.320136389047713,76.60644375021546&z=18&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "invert(90%) hue-rotate(180deg) saturate(0.6)",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Devloft Technologies Office Location"
            />
          </motion.div>
        </div>
      </Section>
    </div>
  );
}

export default Contact;
