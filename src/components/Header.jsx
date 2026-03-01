import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Work" },
    { path: "/contact", label: "Contact" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
        scrolled ? "pt-3 px-4" : "pt-0 px-0"
      }`}
    >
      <nav
        className={`transition-all duration-500 ${
          scrolled
            ? "max-w-4xl w-full rounded-2xl bg-dark-950/60 backdrop-blur-xl shadow-2xl shadow-black/30 px-5 py-2.5"
            : "max-w-7xl w-full bg-transparent backdrop-blur-md px-4 sm:px-6 lg:px-8 py-4"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo — custom wordmark style */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={closeMenu}
          >
            <span className="font-heading text-xl font-medium text-neon-green leading-none">
              D
            </span>
            <div
              className={`flex flex-col transition-all duration-300 ${scrolled ? "hidden sm:flex" : "flex"}`}
            >
              <span className="font-heading text-[17px] font-medium text-white leading-tight tracking-tight">
                Devloft
              </span>
              <span
                className={`text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 leading-tight transition-all duration-300 ${scrolled ? "hidden" : "block"}`}
              >
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${scrolled ? "px-3" : "px-4"}`}
              >
                <span
                  className={`font-heading tracking-wide ${isActive(link.path) ? "text-neon-green" : "text-gray-400 hover:text-white"}`}
                >
                  {link.label}
                </span>
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] rounded-full bg-neon-green"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`ml-4 relative group text-sm font-heading font-medium rounded-full bg-gradient-to-bl from-neon-green via-white to-neon-green text-dark-950 hover:bg-neon-lime transition-all duration-300 ${
                scrolled ? "px-5 py-2" : "px-6 py-2.5"
              }`}
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-400 hover:text-neon-green transition-colors p-2 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div
                className={`flex flex-col gap-1 pt-4 pb-3 ${scrolled ? "px-1" : ""}`}
              >
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={closeMenu}
                      className={`block px-4 py-3 rounded-lg text-sm font-heading font-medium transition-all ${
                        isActive(link.path)
                          ? "text-neon-green bg-neon-green/5 border-l-2 border-neon-green"
                          : "text-gray-400 hover:text-white hover:bg-white/[0.02]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                >
                  <Link
                    to="/contact"
                    onClick={closeMenu}
                    className="block mx-2 mt-2 px-5 py-3 text-sm font-heading font-medium rounded-full bg-neon-green text-dark-950 text-center"
                  >
                    Start a Project
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

export default Header;
