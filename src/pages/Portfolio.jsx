import { useState } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const categories = ['All Projects', 'Web Development', 'UI/UX Design', 'ERP', 'Analytics'];

  const filteredProjects = activeFilter === 'All Projects' 
    ? projectsData.projects 
    : projectsData.projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0a1f44] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our successful projects across various industries and technologies
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-64 bg-gradient-to-br from-blue-600 to-blue-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44] to-transparent opacity-60"></div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0a1f44] mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Project Link */}
                    <a
                      href={project.link}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      View Project
                      <svg
                        className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-gray-400 mb-4">
                <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No projects found</h3>
              <p className="text-gray-500">No projects available in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1e3a5f] rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Let's Build Something Amazing Together</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to start your project? Get in touch with us and let's discuss how we can help you achieve your goals.
            </p>
            <Link to="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
