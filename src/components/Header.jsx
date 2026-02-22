import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const isActive = (path) => {
    return location.pathname === path
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="text-lg sm:text-xl font-semibold text-gray-800">
              Devloft <span className="text-blue-600">Technologies</span>
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium hover:text-blue-700 transition ${
                isActive('/') ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-blue-600 transition ${
                isActive('/about') ? 'text-blue-600 font-medium' : 'text-gray-600'
              }`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`hover:text-blue-600 transition ${
                isActive('/services') ? 'text-blue-600 font-medium' : 'text-gray-600'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/portfolio" 
              className={`hover:text-blue-600 transition ${
                isActive('/portfolio') ? 'text-blue-600 font-medium' : 'text-gray-600'
              }`}
            >
              Portfolio
            </Link>
            <Link 
              to="/contact" 
              className={`hover:text-blue-600 transition ${
                isActive('/contact') ? 'text-blue-600 font-medium' : 'text-gray-600'
              }`}
            >
              Contact
            </Link>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 hover:text-blue-600 transition p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-4 pb-4">
            <Link 
              to="/" 
              onClick={closeMenu}
              className={`font-medium hover:text-blue-700 transition px-4 py-2 rounded-lg ${
                isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-gray-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={closeMenu}
              className={`hover:text-blue-600 transition px-4 py-2 rounded-lg ${
                isActive('/about') ? 'text-blue-600 font-medium bg-blue-50' : 'text-gray-600'
              }`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              onClick={closeMenu}
              className={`hover:text-blue-600 transition px-4 py-2 rounded-lg ${
                isActive('/services') ? 'text-blue-600 font-medium bg-blue-50' : 'text-gray-600'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/portfolio" 
              onClick={closeMenu}
              className={`hover:text-blue-600 transition px-4 py-2 rounded-lg ${
                isActive('/portfolio') ? 'text-blue-600 font-medium bg-blue-50' : 'text-gray-600'
              }`}
            >
              Portfolio
            </Link>
            <Link 
              to="/contact" 
              onClick={closeMenu}
              className={`hover:text-blue-600 transition px-4 py-2 rounded-lg ${
                isActive('/contact') ? 'text-blue-600 font-medium bg-blue-50' : 'text-gray-600'
              }`}
            >
              Contact
            </Link>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition mx-4">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
