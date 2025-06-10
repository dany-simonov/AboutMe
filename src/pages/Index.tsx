import { useState, useEffect } from 'react';
import { Moon, Sun, Github, Mail, MapPin, ExternalLink, Calendar, Award, Code, Database, BarChart3, Palette, Globe, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import LanguageToggle from '@/components/LanguageToggle';
import { translations } from '@/data/translations';

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');

  const t = translations[language];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === 'ru' 
      ? "Даниил Симонов - Fullstack-разработчик и Аналитик данных"
      : "Daniil Simonov - Full-Stack Developer & Data Analyst";
  }, [language]);

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
            {t.name}
          </div>
          <div className="flex items-center gap-3">
            <LanguageToggle language={language} onLanguageChange={setLanguage} />
            <Button
              variant="outline"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="glass-card border-white/20 hover:bg-white/10"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
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
                  src="/lovable-uploads/4fde7527-9e75-4a2c-b56a-4e33a2a94a31.png"
                  alt={t.name}
                  className="relative w-full h-full object-cover rounded-full border-4 border-white/20"
                />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">{t.name}</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                {t.age} • {t.location}
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                {t.description}
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Button asChild className="glass-card glow-border">
                  <a href="https://t.me/dany_simonov" target="_blank" rel="noopener noreferrer">
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.614 7.608c-.121.567-.444.708-.895.442l-2.468-1.82-1.191 1.146c-.132.132-.243.243-.497.243l.177-2.506 4.582-4.14c.199-.177-.043-.275-.309-.098L9.67 11.854l-2.468-.77c-.537-.168-.546-.537.113-.794l9.64-3.715c.447-.168.84.105.693.785z"/>
                    </svg>
                    Telegram
                  </a>
                </Button>
                <Button asChild variant="outline" className="glass-card">
                  <a href="mailto:dany.ssimon2007@yandex.ru">
                    <Mail className="mr-2 h-4 w-4" />
                    {t.contact}
                  </a>
                </Button>
                <Button asChild variant="outline" className="glass-card">
                  <a href="https://github.com/dany-simonov" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
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
              {[...t.skills, ...t.skills].map((skill, index) => (
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
              <span className="gradient-text">{t.featuredProjects}</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {t.projects.map((project, index) => (
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
                        {language === 'ru' ? 'Статус:' : 'Status:'} {project.status}
                      </span>
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="opacity-50 group-hover:opacity-100 transition-opacity"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
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
              <span className="gradient-text">{t.experienceAchievements}</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass-card text-center">
                <CardContent className="p-6">
                  <Award className="h-12 w-12 mx-auto mb-4 text-yellow-500" />
                  <h3 className="text-2xl font-bold mb-2">{t.experienceCards[0].title}</h3>
                  <p className="text-muted-foreground">
                    {t.experienceCards[0].description}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card text-center">
                <CardContent className="p-6">
                  <Zap className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-2">{t.experienceCards[1].title}</h3>
                  <p className="text-muted-foreground">
                    {t.experienceCards[1].description}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card text-center">
                <CardContent className="p-6">
                  <Code className="h-12 w-12 mx-auto mb-4 text-blue-500" />
                  <h3 className="text-2xl font-bold mb-2">{t.experienceCards[2].title}</h3>
                  <p className="text-muted-foreground">
                    {t.experienceCards[2].description}
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
              <span className="gradient-text">{t.education}</span>
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {t.educationData.map((edu, index) => (
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
              <span className="gradient-text">{t.technicalSkills}</span>
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="glass-card text-center">
                <CardContent className="p-6">
                  <Code className="h-12 w-12 mx-auto mb-4 text-blue-500" />
                  <h3 className="font-bold mb-2">{t.programming}</h3>
                  <p className="text-sm text-muted-foreground">Python, JavaScript, HTML, CSS</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card text-center">
                <CardContent className="p-6">
                  <Database className="h-12 w-12 mx-auto mb-4 text-green-500" />
                  <h3 className="font-bold mb-2">{t.dataAnalytics}</h3>
                  <p className="text-sm text-muted-foreground">Pandas, NumPy, SQL, Power BI</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card text-center">
                <CardContent className="p-6">
                  <Globe className="h-12 w-12 mx-auto mb-4 text-purple-500" />
                  <h3 className="font-bold mb-2">{t.webDevelopment}</h3>
                  <p className="text-sm text-muted-foreground">React, Flask, APIs</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card text-center">
                <CardContent className="p-6">
                  <Palette className="h-12 w-12 mx-auto mb-4 text-pink-500" />
                  <h3 className="font-bold mb-2">{t.designAnd3D}</h3>
                  <p className="text-sm text-muted-foreground">Figma, {language === 'ru' ? '3D-моделирование' : '3D Modeling'}, UI/UX</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="gradient-text">{t.letsConnect}</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              {t.connectDescription}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Card className="glass-card">
                <CardContent className="p-6 flex items-center">
                  <svg className="h-6 w-6 mr-3 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.614 7.608c-.121.567-.444.708-.895.442l-2.468-1.82-1.191 1.146c-.132.132-.243.243-.497.243l.177-2.506 4.582-4.14c.199-.177-.043-.275-.309-.098L9.67 11.854l-2.468-.77c-.537-.168-.546-.537.113-.794l9.64-3.715c.447-.168.84.105.693.785z"/>
                  </svg>
                  <div className="text-left">
                    <p className="font-semibold">Telegram</p>
                    <a href="https://t.me/dany_simonov" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      @dany_simonov
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardContent className="p-6 flex items-center">
                  <Mail className="h-6 w-6 mr-3 text-primary" />
                  <div className="text-left">
                    <p className="font-semibold">{t.contactCards[0].label}</p>
                    <a href="mailto:dany.ssimon2007@yandex.ru" className="text-muted-foreground hover:text-primary transition-colors">
                      {t.contactCards[0].value}
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardContent className="p-6 flex items-center">
                  <MapPin className="h-6 w-6 mr-3 text-primary" />
                  <div className="text-left">
                    <p className="font-semibold">{t.contactCards[2].label}</p>
                    <p className="text-muted-foreground">{t.contactCards[2].value}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-border/50 bg-background/50">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm text-muted-foreground">
              {t.footerText}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;

```
