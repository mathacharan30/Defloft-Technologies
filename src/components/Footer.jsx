import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-950 overflow-hidden">
      {/* Top border */}
      <div className="h-px bg-white/[0.06]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        {/* Top section — large brand + CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-md">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <span className="font-heading text-xl font-medium text-neon-green leading-none">
                D
              </span>
              <div className="flex flex-col">
                <span className="font-heading text-[17px] font-medium text-white leading-tight tracking-tight">
                  Devloft
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 leading-tight">
                  Technologies
                </span>
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Building scalable digital & ERP solutions for modern enterprises.
              <br />
              From concept to deployment — we craft technology that moves
              businesses forward.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Github, href: "#", label: "GitHub" },
              ].map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-md border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-neon-green hover:border-neon-green/20 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter / CTA area */}
          <div className="w-full lg:w-auto lg:min-w-[380px]">
            <div className="rounded-lg card-premium p-8">
              <h3 className="font-heading text-lg font-medium text-white mb-2">
                Let's build something great
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                Ready to start your next project?
              </p>
              <Link
                to="/contact"
                className="group flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-md bg-neon-green text-dark-950 font-heading font-medium text-sm hover:bg-neon-lime transition-all duration-300"
              >
                Get in Touch
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div>
            <h3 className="font-heading text-white font-medium mb-5 text-xs uppercase tracking-[0.15em]">
              Navigate
            </h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Portfolio", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="group flex items-center gap-1.5 text-gray-500 hover:text-neon-green text-sm transition-colors duration-300"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-neon-green transition-all duration-300" />
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-white font-medium mb-5 text-xs uppercase tracking-[0.15em]">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "UI/UX Design",
                "ERP Solutions",
                "Analytics",
                "Cloud",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="group flex items-center gap-1.5 text-gray-500 hover:text-neon-green text-sm transition-colors duration-300"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-neon-green transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2">
            <h3 className="font-heading text-white font-medium mb-5 text-xs uppercase tracking-[0.15em]">
              Reach Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail
                  size={15}
                  className="text-neon-green mt-1 flex-shrink-0 opacity-70"
                />
                <span className="text-gray-500 text-sm">
                  hello@devlofttech.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  size={15}
                  className="text-neon-green mt-1 flex-shrink-0 opacity-70"
                />
                <span className="text-gray-500 text-sm">+91 8147814232</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={15}
                  className="text-neon-green mt-1 flex-shrink-0 opacity-70"
                />
                <span className="text-gray-500 text-sm leading-relaxed">
                  No.804, 772/A, B' Block, 3rd Stage,
                  <br />
                  Vijayanagar, 570017 — Mysore, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs font-mono tracking-wide">
            &copy; {currentYear} DEVLOFT TECHNOLOGIES. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-400 text-xs font-mono tracking-wide transition-colors"
            >
              PRIVACY
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-400 text-xs font-mono tracking-wide transition-colors"
            >
              TERMS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
