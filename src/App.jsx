import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Submissions from './pages/Submissions'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Login route (no layout) */}
          <Route path="/login" element={<Login />} />
          
          {/* Main routes with layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
            <Route 
              path="submissions" 
              element={
                <ProtectedRoute>
                  <Submissions />
                </ProtectedRoute>
              } 
            />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
