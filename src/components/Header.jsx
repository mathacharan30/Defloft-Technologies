import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()
  
  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="text-xl font-semibold text-gray-800">
              Devloft <span className="text-blue-600">Technologies</span>
            </span>
          </Link>
          
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
        </div>
      </nav>
    </header>
  )
}

export default Header
