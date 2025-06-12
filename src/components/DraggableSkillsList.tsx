
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Database, Globe, Palette, BarChart3, GitBranch, Wrench, TestTube, Bot, FileCode, Cloud } from 'lucide-react';

interface Skill {
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface DraggableSkillsListProps {
  language: 'ru' | 'en';
}

const DraggableSkillsList = ({ language }: DraggableSkillsListProps) => {
  const [skills, setSkills] = useState<Skill[]>([
    // Languages & Core Programming
    { name: "Python", category: "language", icon: Code2, color: "text-blue-500" },
    { name: "JavaScript", category: "web", icon: Code2, color: "text-yellow-600" },
    
    // Python Libraries & Data Science
    { name: "Pandas", category: "data", icon: BarChart3, color: "text-purple-500" },
    { name: "NumPy", category: "data", icon: BarChart3, color: "text-green-500" },
    { name: "Seaborn", category: "data", icon: BarChart3, color: "text-orange-500" },
    { name: "Matplotlib", category: "data", icon: BarChart3, color: "text-red-500" },
    
    // Web Frameworks
    { name: "Flask", category: "web", icon: Globe, color: "text-emerald-500" },
    { name: "FastAPI", category: "web", icon: Globe, color: "text-cyan-500" },
    
    // AI & Machine Learning
    { name: "g4f", category: "ai", icon: Bot, color: "text-violet-500" },
    { name: "Voice Assistant", category: "ai", icon: Bot, color: "text-purple-400" },
    { name: "AI Integration", category: "ai", icon: Bot, color: "text-cyan-400" },
    
    // Data Parsing & Requests
    { name: "Requests", category: "parsing", icon: Globe, color: "text-yellow-500" },
    { name: "BeautifulSoup", category: "parsing", icon: Code2, color: "text-teal-500" },
    
    // Version Control & DevOps
    { name: "GitHub", category: "vcs", icon: GitBranch, color: "text-gray-500" },
    { name: "GitLab", category: "vcs", icon: GitBranch, color: "text-orange-600" },
    { name: "GitHub Actions", category: "devops", icon: GitBranch, color: "text-blue-600" },
    { name: "Docker", category: "devops", icon: Cloud, color: "text-blue-400" },
    
    // Web Technologies
    { name: "HTML", category: "web", icon: FileCode, color: "text-red-600" },
    { name: "CSS", category: "web", icon: FileCode, color: "text-blue-500" },
    { name: "REST API", category: "api", icon: Globe, color: "text-green-500" },
    
    // Databases
    { name: "SQL", category: "database", icon: Database, color: "text-blue-600" },
    { name: "SQLite", category: "database", icon: Database, color: "text-gray-600" },
    { name: "MySQL", category: "database", icon: Database, color: "text-orange-500" },
    
    // Design & Prototyping
    { name: "Figma", category: "design", icon: Palette, color: "text-purple-600" },
    { name: "FigJam", category: "design", icon: Palette, color: "text-pink-500" },
    { name: language === 'ru' ? "Интерфейсы" : "Interfaces", category: "design", icon: Palette, color: "text-indigo-500" },
    { name: language === 'ru' ? "Прототипы" : "Prototypes", category: "design", icon: Palette, color: "text-rose-500" },
    
    // Analytics & Testing
    { name: language === 'ru' ? "A/B-тестирование" : "A/B Testing", category: "analytics", icon: BarChart3, color: "text-amber-500" },
    { name: language === 'ru' ? "Z-тесты" : "Z-tests", category: "analytics", icon: BarChart3, color: "text-lime-500" },
    { name: language === 'ru' ? "T-тесты" : "T-tests", category: "analytics", icon: BarChart3, color: "text-emerald-600" },
    
    // Unit Testing
    { name: language === 'ru' ? "Unit-тесты" : "Unit tests", category: "testing", icon: TestTube, color: "text-red-500" },
    { name: "unittest", category: "testing", icon: TestTube, color: "text-orange-400" },
    { name: "pytest", category: "testing", icon: TestTube, color: "text-green-400" },
    
    // Business Intelligence
    { name: "Power BI", category: "bi", icon: BarChart3, color: "text-yellow-500" },
    { name: "Tableau", category: "bi", icon: BarChart3, color: "text-blue-700" },
    
    // Markup Languages
    { name: "XML", category: "markup", icon: FileCode, color: "text-green-600" },
    { name: "KML", category: "markup", icon: FileCode, color: "text-purple-500" },
    
    // Tools & Productivity
    { name: "Excel", category: "tools", icon: Wrench, color: "text-green-700" },
    { name: "Notion", category: "tools", icon: Wrench, color: "text-gray-700" }
  ]);

  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    
    if (draggedIndex === null || draggedIndex === dropIndex) return;

    const newSkills = [...skills];
    const draggedItem = newSkills[draggedIndex];
    
    // Remove the dragged item
    newSkills.splice(draggedIndex, 1);
    
    // Insert at the new position
    newSkills.splice(dropIndex, 0, draggedItem);
    
    setSkills(newSkills);
    setDraggedIndex(null);
  };

  return (
    <div className="space-y-12">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        <span className="gradient-text">
          {language === 'ru' ? 'Технические навыки' : 'Technical Skills'}
        </span>
      </h2>
      
      {/* Apple-style compact grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card 
                key={`${skill.name}-${index}`}
                className="glass-card aspect-square cursor-move hover:scale-105 transition-all duration-300 group border-white/10"
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index)}
                style={{
                  opacity: draggedIndex === index ? 0.5 : 1,
                  transform: draggedIndex === index ? 'rotate(2deg) scale(1.05)' : 'none'
                }}
              >
                <CardContent className="p-3 h-full flex flex-col items-center justify-center">
                  <IconComponent className={`h-6 w-6 mb-2 ${skill.color} group-hover:scale-110 transition-transform`} />
                  <p className="text-xs font-medium text-foreground text-center leading-tight">
                    {skill.name}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      
      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground">
          {language === 'ru' 
            ? '💡 Перетаскивайте карточки для изменения порядка' 
            : '💡 Drag cards to reorder them'
          }
        </p>
      </div>
    </div>
  );
};

export default DraggableSkillsList;
