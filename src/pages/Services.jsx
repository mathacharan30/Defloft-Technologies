import { Link } from 'react-router-dom'

function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0a1f44] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation
          </p>
        </div>
      </section>

      {/* Website Development */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#0a1f44] mb-4">Website Development</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Create powerful, scalable web applications that drive business growth and deliver exceptional user experiences.
              </p>
              <Link to="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0a1f44] mb-6">What We Offer</h3>
              <ul className="space-y-4">
                {[
                  'Custom web application development',
                  'Responsive design for all devices',
                  'Progressive Web Apps (PWA)',
                  'E-commerce solutions',
                  'Content Management Systems',
                  'API development and integration',
                  'Performance optimization',
                  'Security and compliance'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* UI/UX Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 order-2 md:order-1">
              <h3 className="text-2xl font-bold text-[#0a1f44] mb-6">What We Offer</h3>
              <ul className="space-y-4">
                {[
                  'User research and analysis',
                  'Information architecture',
                  'Wireframing and prototyping',
                  'Visual design and branding',
                  'Interaction design',
                  'Usability testing',
                  'Design system creation',
                  'Accessibility compliance'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#0a1f44] mb-4">UI/UX Design</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Design intuitive, engaging interfaces that combine beautiful aesthetics with seamless functionality.
              </p>
              <Link to="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ERP Implementation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#0a1f44] mb-4">ERP Implementation</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Streamline your business operations with comprehensive ERP solutions tailored to your industry.
              </p>
              <Link to="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0a1f44] mb-6">What We Offer</h3>
              <ul className="space-y-4">
                {[
                  'Requirements analysis and planning',
                  'System selection and evaluation',
                  'Custom ERP development',
                  'Third-party ERP implementation',
                  'Data migration and integration',
                  'Process automation',
                  'Training and change management',
                  'Ongoing support and maintenance'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Dashboards & Analytics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 order-2 md:order-1">
              <h3 className="text-2xl font-bold text-[#0a1f44] mb-6">What We Offer</h3>
              <ul className="space-y-4">
                {[
                  'Custom dashboard development',
                  'Real-time data visualization',
                  'KPI tracking and reporting',
                  'Predictive analytics',
                  'Data warehouse solutions',
                  'Business intelligence tools',
                  'Mobile analytics applications',
                  'Advanced reporting systems'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#0a1f44] mb-4">Business Dashboards & Analytics</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Transform your data into actionable insights with powerful visualization and analytics tools.
              </p>
              <Link to="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1e3a5f] rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We create tailored solutions for unique business challenges. Let's discuss your specific requirements.
            </p>
            <Link to="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
