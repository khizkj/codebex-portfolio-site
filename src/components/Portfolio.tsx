import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import nvidiaBlog from '@/assets/nvidia-blog.png';
import webQuran from '@/assets/web-quran.png';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Nvidia Blog Website',
      description: 'Nvidia Blog is your go-to hub for the latest in technology, AI, and gaming innovations. We deliver insightful articles, tutorials, and updates on cutting-edge software, hardware, and industry trends — all with a sleek, Nvidia-inspired design. Whether you\'re a developer, gamer, or tech enthusiast, our blog keeps you ahead of the curve with fresh perspectives and in-depth analysis.',
      image: nvidiaBlog,
      technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
      category: 'Blog Platform',
      link: 'https://nvidiablog.gamer.gd/?i=1',
      featured: true,
    },
    {
      id: 2,
      title: 'Web-Quran',
      description: 'Web-Quran is a centralized platform providing free and easy-to-use APIs for Quran, Hadith, and Prayer Times. Designed for developers, students, and Islamic app creators, our hub makes it simple to integrate authentic Islamic resources into modern applications. With multilingual support, reliable data, and a developer-friendly interface, we aim to empower the global Muslim community through technology.',
      image: webQuran,
      technologies: ['React', 'API Development', 'MongoDB', 'Express.js'],
      category: 'API Platform',
      link: 'https://islamichubapi.free.nf/?i=1',
      featured: true,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses transform 
            their operations with innovative software solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
                onClick={() => window.open(project.link, '_blank')}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Links */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                    <button 
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.link, '_blank');
                      }}
                    >
                      <ExternalLink className="h-5 w-5 text-gray-700" />
                    </button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <button 
                    className="text-primary font-semibold hover:text-primary-dark transition-colors group inline-flex items-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.link, '_blank');
                    }}
                  >
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in working with us on your next project?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-hero"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;