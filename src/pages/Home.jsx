import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a1f44] via-[#1e3a5f] to-[#0a1f44] text-white py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-8">
            <span className="text-2xl">✨</span>
            <span className="text-sm font-medium">Transforming Businesses Through Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Building Scalable Digital<br />
            <span className="text-white">& ERP Solutions</span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Transform your business with cutting-edge technology and enterprise-grade solutions designed for growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2 shadow-lg">
              Get Started 
              <span>→</span>
            </Link>
            <Link to="/services" className="border-2 border-white/30 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              What We Do
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business objectives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Website Development</h3>
              <p className="text-gray-600">
                Custom web applications built with modern frameworks and best practices.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">UI/UX Design</h3>
              <p className="text-gray-600">
                User-centered design that combines aesthetics with functionality.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">ERP Implementation</h3>
              <p className="text-gray-600">
                Enterprise resource planning solutions tailored to your business needs.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Dashboards & Analytics</h3>
              <p className="text-gray-600">
                Data visualization and analytics tools for informed decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Devloft</h2>
            <p className="text-gray-600 text-lg">
              Partner with a team that understands enterprise technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Expertise</h3>
                  <p className="text-gray-600">
                    Years of experience working with large-scale enterprise systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Track Record</h3>
                  <p className="text-gray-600">
                    Successfully delivered projects across various industries.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dedicated Support</h3>
                  <p className="text-gray-600">
                    24/7 support and maintenance for all our solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable Solutions</h3>
                  <p className="text-gray-600">
                    Built to grow with your business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Approach
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-gray-600 text-lg">
              A proven methodology that delivers results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition border border-gray-200">
              <div className="text-6xl font-bold text-blue-200 mb-4">01</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery & Planning</h3>
              <p className="text-gray-600">
                We analyze your requirements and create a detailed project roadmap.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition border border-gray-200">
              <div className="text-6xl font-bold text-blue-200 mb-4">02</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Design & Prototyping</h3>
              <p className="text-gray-600">
                Our team creates intuitive designs and interactive prototypes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition border border-gray-200">
              <div className="text-6xl font-bold text-blue-200 mb-4">03</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Development & Testing</h3>
              <p className="text-gray-600">
                Agile development with continuous testing and quality assurance.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition border border-gray-200">
              <div className="text-6xl font-bold text-blue-200 mb-4">04</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Deployment & Support</h3>
              <p className="text-gray-600">
                Seamless launch with ongoing support and optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a2540] via-[#1e3a5f] to-[#0a2540] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital transformation goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2 justify-center shadow-lg">
              Start a Project
              <span>→</span>
            </Link>
            <Link to="/portfolio" className="border-2 border-white/30 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
