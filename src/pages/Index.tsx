
import React, { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Initialize AOS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
    script.onload = () => {
      // @ts-ignore
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100
      });
    };
    document.body.appendChild(script);

    // Back to top button functionality
    const backToTopBtn = document.querySelector('.back-to-top');
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        backToTopBtn?.classList.add('opacity-100');
        backToTopBtn?.classList.remove('opacity-0');
      } else {
        backToTopBtn?.classList.add('opacity-0');
        backToTopBtn?.classList.remove('opacity-100');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center gradient-bg text-white overflow-hidden">
        <div className="wave"></div>
        <div className="container mx-auto px-4 text-center z-10" data-aos="fade-up">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/SreeHariPhoto.jpg" 
              alt="Vemula Sree Hari" 
              className="profile-img w-48 h-48 rounded-full mx-auto mb-8 border-4 border-white shadow-2xl object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face";
              }}
            />
          </div>
          <h1 className="hero-title text-6xl font-bold mb-4 glow-text" data-aos="fade-up" data-aos-delay="200">
            VEMULA SREE HARI
          </h1>
          <p className="hero-subtitle text-2xl mb-8 font-light" data-aos="fade-up" data-aos-delay="400">
            Engineer in Progress. Creator by Instinct.
          </p>
          <div className="flex justify-center space-x-6" data-aos="fade-up" data-aos-delay="600">
            <a href="#about" className="glow-btn">
              <i className="fas fa-user mr-2"></i>
              About Me
            </a>
            <a href="#contact" className="glow-btn">
              <i className="fas fa-envelope mr-2"></i>
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-4xl font-bold text-center mb-16 text-gray-800" data-aos="fade-up">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl card-hover" data-aos="fade-up" data-aos-delay="200">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    <i className="fas fa-graduation-cap mr-3 text-purple-600"></i>
                    Education & Goals
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    I'm currently pursuing my undergraduate degree in <strong>Electrical and Electronics Engineering</strong> 
                    at <strong>Dr. K.V. Subba Reddy Institute of Technology</strong>. My journey combines the technical 
                    precision of electrical engineering with the creative possibilities of web development.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    I'm passionate about bridging the gap between traditional engineering and modern digital solutions, 
                    aiming to contribute to both core electrical systems and innovative web technologies.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    <i className="fas fa-heart mr-3 text-red-500"></i>
                    Interests & Hobbies
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <i className="fas fa-plane text-blue-500 mr-3"></i>
                      <span className="text-gray-600">Traveling & Exploring New Places</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-music text-green-500 mr-3"></i>
                      <span className="text-gray-600">Music & Audio Engineering</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-code text-purple-500 mr-3"></i>
                      <span className="text-gray-600">Web Development & Design</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-bolt text-yellow-500 mr-3"></i>
                      <span className="text-gray-600">Electrical Systems & Innovation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-4xl font-bold text-center mb-16 text-gray-800" data-aos="fade-up">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: 'fab fa-python', name: 'Python', color: 'text-blue-500', bg: 'bg-blue-50' },
              { icon: 'fab fa-html5', name: 'HTML', color: 'text-orange-500', bg: 'bg-orange-50' },
              { icon: 'fab fa-css3-alt', name: 'CSS', color: 'text-blue-600', bg: 'bg-blue-50' },
              { icon: 'fab fa-js-square', name: 'JavaScript', color: 'text-yellow-500', bg: 'bg-yellow-50' },
              { icon: 'fas fa-palette', name: 'Canva', color: 'text-purple-500', bg: 'bg-purple-50' },
              { icon: 'fas fa-lightbulb', name: 'Creative Thinking', color: 'text-green-500', bg: 'bg-green-50' }
            ].map((skill, index) => (
              <div 
                key={skill.name}
                className={`skill-card ${skill.bg} p-6 rounded-xl text-center shadow-lg`}
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <i className={`${skill.icon} ${skill.color} text-4xl mb-4`}></i>
                <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-4xl font-bold text-center mb-16 text-gray-800" data-aos="fade-up">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Hydroelectric Power Generation',
                description: 'Sustainable energy solution utilizing water flow mechanics for efficient power generation with environmental considerations.',
                icon: 'fas fa-water',
                color: 'text-blue-500'
              },
              {
                title: 'LPG Gas Leakage Detection System',
                description: 'Smart safety system using advanced sensors to detect gas leaks and prevent hazardous situations in real-time.',
                icon: 'fas fa-shield-alt',
                color: 'text-red-500'
              },
              {
                title: 'Solar Tracking System',
                description: 'Automated solar panel positioning system that optimizes energy capture by following the sun\'s movement throughout the day.',
                icon: 'fas fa-sun',
                color: 'text-yellow-500'
              }
            ].map((project, index) => (
              <div 
                key={project.title}
                className="project-card relative bg-white rounded-xl p-6 shadow-lg"
                data-aos="fade-up" 
                data-aos-delay={index * 200}
              >
                <div className="mb-4">
                  <i className={`${project.icon} ${project.color} text-3xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title text-4xl font-bold mb-16 text-gray-800" data-aos="fade-up">
            Resume
          </h2>
          <div data-aos="fade-up" data-aos-delay="200">
            <a 
              href="/lovable-uploads/Sree Hari Vemula_INTERN.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glow-btn inline-block"
              onError={(e) => {
                console.log('Resume file not found, using placeholder');
              }}
            >
              <i className="fas fa-download mr-2"></i>
              View My Resume
            </a>
            <p className="text-gray-500 mt-4">Download my complete resume to learn more about my experience and qualifications.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-4xl font-bold text-center mb-16 text-gray-800" data-aos="fade-up">
            Get In Touch
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div 
                className="bg-white rounded-xl p-8 shadow-lg card-hover text-center"
                data-aos="fade-up" 
                data-aos-delay="200"
              >
                <div className="mb-6">
                  <i className="fas fa-envelope text-4xl text-blue-500 mb-4"></i>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">Email</h3>
                  <p className="text-gray-600 mb-4">Let's discuss opportunities and collaborations</p>
                  <a 
                    href="mailto:sreeharivemula07@gmail.com" 
                    className="text-blue-500 hover:text-blue-700 font-medium text-lg"
                  >
                    sreeharivemula07@gmail.com
                  </a>
                </div>
              </div>
              
              <div 
                className="bg-white rounded-xl p-8 shadow-lg card-hover text-center"
                data-aos="fade-up" 
                data-aos-delay="400"
              >
                <div className="mb-6">
                  <i className="fab fa-linkedin text-4xl text-blue-600 mb-4"></i>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">LinkedIn</h3>
                  <p className="text-gray-600 mb-4">Connect with me professionally</p>
                  <a 
                    href="https://www.linkedin.com/in/sree-hari-vemula" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium text-lg"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Vemula Sree Hari. Built with passion and creativity.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="mailto:sreeharivemula07@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <i className="fas fa-envelope text-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/sree-hari-vemula" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button 
        className="back-to-top opacity-0 transition-opacity duration-300"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default Index;
