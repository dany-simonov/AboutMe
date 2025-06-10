
import { useState, useEffect } from 'react';
import { Moon, Sun, Github, Mail, Phone, MapPin, ExternalLink, Calendar, Award, Code, Database, BarChart3, Palette, Globe, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  const skills = [
    'Python', 'Data Analysis', 'Machine Learning', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SQL', 'MySQL', 'SQLite',
    'JavaScript', 'HTML', 'CSS', 'React', 'Flask', 'bs4', 'requests', 'PyQt5', 'Microsoft Office', 'Power BI', 'Tableau',
    'Figma', 'XML Parsing', '3D Modeling', 'Photopolymer 3D Printing', 'Web Design', 'Mobile Development', 'API Integration'
  ];

  const projects = [
    {
      title: "StudySphere Educational Platform",
      description: "AI-powered educational platform with 13 neural networks, frontend in HTML/CSS/JS, backend integration, and mobile support",
      tech: ["HTML", "CSS", "JavaScript", "AI", "Neural Networks"],
      status: "Active Development",
      highlight: "AI-Assistant Integration"
    },
    {
      title: "DANO Data Analysis Olympiad",
      description: "Top 200 out of 7619 participants in national data analysis olympiad",
      tech: ["Python", "Data Analysis", "Statistics"],
      status: "Achievement",
      highlight: "Top 200/7619"
    },
    {
      title: "T-Bank Hackathon Winner",
      description: "Web developer and UI/UX designer for restaurant bill splitting app",
      tech: ["Web Development", "UI/UX", "React"],
      status: "Completed",
      highlight: "Hackathon Winner"
    },
    {
      title: "IT Purple Hack",
      description: "Product analyst developing CLTV system for client retention",
      tech: ["Analytics", "CLTV", "Business Intelligence"],
      status: "Completed",
      highlight: "Product Analytics"
    }
  ];

  const education = [
    {
      institution: "School №2123 named after Migel Erlandess",
      program: "11th grade Mathematical Vertical Plus",
      period: "Current"
    },
    {
      institution: "Industrial Programming (Python) - Yandex Lyceum",
      period: "19.09.2024 - 15.04.2025"
    },
    {
      institution: "Summer School of Programming Engineering - FKN NIU HSE",
      period: "01.07.2024 - 12.07.2024"
    },
    {
      institution: "Data Analysis Megaintensive - FKN NIU HSE",
      period: "14.04.2024 - 21.04.2024"
    },
    {
      institution: "Winter School of Programming Engineering - FKN NIU HSE",
      period: "24.02.2024 - 29.02.2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-foreground relative overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/50 to-slate-900"></div>
      <div className="fixed inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating Elements */}
      <div className="fixed top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-float"></div>
      <div className="fixed bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="fixed top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl gradient-text">
            Daniil Simonov
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            className="glass-card border-white/20 hover:bg-white/10"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </header>

      <div className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative">
          <div className="container mx-auto px-6 text-center">
            <div className="animate-fade-in-up">
              <div className="w-48 h-48 mx-auto mb-8 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full blur-md opacity-75 animate-glow"></div>
                <img 
                  src="/lovable-uploads/3d998283-9685-472e-9b4f-f844d8350953.png"
                  alt="Daniil Simonov"
                  className="relative w-full h-full object-cover rounded-full border-4 border-white/20"
                />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">Daniil Simonov</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                17 years old • Moscow
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Data Analyst & Full-Stack Developer passionate about creating innovative solutions 
                with Python, Machine Learning, and modern web technologies
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Button asChild className="glass-card glow-border">
                  <a href="https://github.com/dany-simonov" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" className="glass-card">
                  <a href="mailto:dany.ssimon2007@yandex.ru">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact
                  </a>
                </Button>
                <Button asChild variant="outline" className="glass-card">
                  <a href="tel:+79013874945">
                    <Phone className="mr-2 h-4 w-4" />
                    Call
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Marquee */}
        <section className="py-12 border-y border-border/50 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10">
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-x">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex-shrink-0 mx-8">
                  <span className="text-lg font-semibold text-primary whitespace-nowrap">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="glass-card hover:scale-105 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                        {project.highlight}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs bg-secondary/50 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Status: {project.status}
                      </span>
                      <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900/50 via-purple-900/50 to-slate-900/50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="gradient-text">Experience & Achievements</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass-card text-center">
                <CardContent className="p-6">
                  <Award className="h-12 w-12 mx-auto mb-4 text-yellow-500" />
                  <h3 className="text-2xl font-bold mb-2">Top 200</h3>
                  <p className="text-muted-foreground">
                    Out of 7619 participants in DANO National Data Analysis Olympiad
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card text-center">
                <CardContent className="p-6">
                  <Zap className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-2">Hackathon Winner</h3>
                  <p className="text-muted-foreground">
                    Multiple hackathon victories including T-Bank, Purple Hack, and Nuclear IT
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card text-center">
                <CardContent className="p-6">
                  <Code className="h-12 w-12 mx-auto mb-4 text-blue-500" />
                  <h3 className="text-2xl font-bold mb-2">Full-Stack Dev</h3>
                  <p className="text-muted-foreground">
                    Experienced in both frontend and backend development with modern technologies
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="gradient-text">Education</span>
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="glass-card hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{edu.institution}</h3>
                        {edu.program && (
                          <p className="text-muted-foreground mb-2">{edu.program}</p>
                        )}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.period}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="py-20 bg-gradient-to-r from-slate-900/50 via-purple-900/50 to-slate-900/50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="gradient-text">Technical Skills</span>
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="glass-card text-center">
                <CardContent className="p-6">
                  <Code className="h-12 w-12 mx-auto mb-4 text-blue-500" />
                  <h3 className="font-bold mb-2">Programming</h3>
                  <p className="text-sm text-muted-foreground">Python, JavaScript, HTML, CSS</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card text-center">
                <CardContent className="p-6">
                  <Database className="h-12 w-12 mx-auto mb-4 text-green-500" />
                  <h3 className="font-bold mb-2">Data & Analytics</h3>
                  <p className="text-sm text-muted-foreground">Pandas, NumPy, SQL, Power BI</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card text-center">
                <CardContent className="p-6">
                  <Globe className="h-12 w-12 mx-auto mb-4 text-purple-500" />
                  <h3 className="font-bold mb-2">Web Development</h3>
                  <p className="text-sm text-muted-foreground">React, Flask, APIs</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card text-center">
                <CardContent className="p-6">
                  <Palette className="h-12 w-12 mx-auto mb-4 text-pink-500" />
                  <h3 className="font-bold mb-2">Design & 3D</h3>
                  <p className="text-sm text-muted-foreground">Figma, 3D Modeling, UI/UX</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="gradient-text">Let's Connect</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Ready to work on exciting projects together? Let's discuss how we can create something amazing.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Card className="glass-card">
                <CardContent className="p-6 flex items-center">
                  <Mail className="h-6 w-6 mr-3 text-primary" />
                  <div className="text-left">
                    <p className="font-semibold">Email</p>
                    <a href="mailto:dany.ssimon2007@yandex.ru" className="text-muted-foreground hover:text-primary transition-colors">
                      dany.ssimon2007@yandex.ru
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardContent className="p-6 flex items-center">
                  <Phone className="h-6 w-6 mr-3 text-primary" />
                  <div className="text-left">
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+79013874945" className="text-muted-foreground hover:text-primary transition-colors">
                      +7 901 387 49 45
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardContent className="p-6 flex items-center">
                  <MapPin className="h-6 w-6 mr-3 text-primary" />
                  <div className="text-left">
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">Moscow, Russia</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-border/50 bg-background/50">
          <div className="container mx-auto px-6 text-center">
            <p className="text-muted-foreground mb-4">
              Built with React, TypeScript, and Tailwind CSS
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 Daniil Simonov. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
