function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#1e3a5f] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Devloft Technologies</h1>
          <p className="text-lg md:text-xl text-blue-100">
            Empowering businesses through innovative technology solutions since 2015
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Mission */}
            <div>
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                To empower businesses with scalable, innovative technology solutions that drive digital transformation and sustainable growth.
              </p>
              <p className="text-gray-600">
                We are committed to delivering excellence in every project, leveraging cutting-edge technologies and industry best practices to help our clients achieve their strategic objectives.
              </p>
            </div>

            {/* Vision */}
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 mb-4">
                To be the trusted technology partner for enterprises worldwide, recognized for innovation, reliability, and exceptional client outcomes.
              </p>
              <p className="text-gray-600">
                We envision a future where businesses of all sizes can harness the power of technology to unlock their full potential and create lasting value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Excellence */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every project, delivering solutions that exceed expectations.
              </p>
            </div>

            {/* Integrity */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of integrity and transparency in all our dealings.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace innovation and continuously explore new technologies and methodologies.
              </p>
            </div>

            {/* Collaboration */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in collaborative partnerships that drive mutual success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Excellence Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Expertise
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Excellence</h2>
            <p className="text-gray-600 text-lg">
              Deep technical knowledge across multiple domains
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Web Technologies */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Web Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">React</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Angular</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Vue.js</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Node.js</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Python</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Java</span>
              </div>
            </div>

            {/* ERP Systems */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">ERP Systems</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">SAP</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Oracle</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Microsoft Dynamics</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Odoo</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Custom Solutions</span>
              </div>
            </div>

            {/* Cloud Platforms */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Cloud Platforms</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">AWS</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Azure</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Google Cloud</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Digital Ocean</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Kubernetes</span>
              </div>
            </div>

            {/* Data & Analytics */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Data & Analytics</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Power BI</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Tableau</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">SQL</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">MongoDB</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Machine Learning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-[#1e3a5f] text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-2">10+</div>
              <div className="text-lg text-blue-100">Projects Delivered</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-2">2+</div>
              <div className="text-lg text-blue-100">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-2">2+</div>
              <div className="text-lg text-blue-100">Countries Served</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-2">98%</div>
              <div className="text-lg text-blue-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
