import { Target, Users, Award, TrendingUp, ArrowRight } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation-Driven',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give your business a competitive advantage.',
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your success is our priority. We work closely with you to understand your needs and exceed your expectations.',
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in code quality, security, and performance across all our projects.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Our solutions are built to grow with your business, ensuring long-term success and adaptability.',
    },
  ];

  const stats = [
    { number: '10+', label: 'Successful Projects', description: 'Delivered across various industries' },
    { number: '95%', label: 'Client Satisfaction', description: 'Based on project completion surveys' },
    { number: '4+', label: 'Years Experience', description: 'In modern software development' },
    { number: '24/7', label: 'Support Available', description: 'Ongoing maintenance and support' },
  ];

  const team = [
    {
      name: 'Shaaf Iqbal Mughal',
      role: 'Software Engineer',
      expertise: 'Full-Stack Development, Mobile App Development',
      experience: '3+ years',
    },
    {
      name: 'Khizer Jamil',
      role: 'Software Engineer',
      expertise: 'Full-Stack Development, UI/UX Designer',
      experience: '3+ years',
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section">About Code Bex</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a passionate team of software engineers dedicated to creating 
            innovative solutions that transform businesses and drive digital success.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Building the Future of Software
            </h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between innovative technology and practical 
                business solutions, Code Bex has grown into a trusted partner for companies seeking 
                digital transformation.
              </p>
              <p>
                Our journey began with a simple belief: that great software should not only solve 
                problems but should anticipate future needs and scale seamlessly. This philosophy 
                drives everything we do, from initial concept to final deployment.
              </p>
              <p>
                Today, we combine cutting-edge technologies with proven methodologies to deliver 
                solutions that are not just functional, but exceptional. Every line of code we 
                write, every interface we design, and every system we architect is crafted with 
                precision and purpose.
              </p>
            </div>

            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline mt-8 group"
            >
              Work With Us
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="card-gradient text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Values</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-gradient-blue rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Talented professionals who bring passion, expertise, and innovation to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name}
                className="card-gradient text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Avatar placeholder */}
                <div className="w-24 h-24 bg-gradient-blue rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>

                <h4 className="text-xl font-bold text-foreground mb-2">{member.name}</h4>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-2">{member.expertise}</p>
                <p className="text-muted-foreground text-xs">
                  <span className="font-semibold">Experience:</span> {member.experience}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement CTA */}
        <div className="mt-20">
          <div className="bg-gradient-card border border-border rounded-2xl p-8 lg:p-12 text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              To empower businesses through innovative software solutions that drive growth, 
              efficiency, and competitive advantage in an ever-evolving digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
              >
                View Our Work
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-hero"
              >
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;