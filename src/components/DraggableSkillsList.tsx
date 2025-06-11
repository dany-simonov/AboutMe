
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
    // Python & Data Science
    { name: "Python", category: "language", icon: Code2, color: "text-blue-500" },
    { name: "Pandas", category: "data", icon: BarChart3, color: "text-purple-500" },
    { name: "NumPy", category: "data", icon: BarChart3, color: "text-green-500" },
    { name: "Seaborn", category: "data", icon: BarChart3, color: "text-orange-500" },
    { name: "Matplotlib", category: "data", icon: BarChart3, color: "text-red-500" },
    { name: "Flask", category: "web", icon: Globe, color: "text-emerald-500" },
    { name: "g4f", category: "ai", icon: Bot, color: "text-violet-500" },
    { name: "Requests", category: "parsing", icon: Globe, color: "text-yellow-500" },
    { name: "BeautifulSoup", category: "parsing", icon: Code2, color: "text-teal-500" },
    { name: "FastAPI", category: "web", icon: Globe, color: "text-cyan-500" },
    
    // Git & VCS
    { name: "GitHub", category: "vcs", icon: GitBranch, color: "text-gray-500" },
    { name: "GitLab", category: "vcs", icon: GitBranch, color: "text-orange-600" },
    { name: "GitHub Actions", category: "devops", icon: GitBranch, color: "text-blue-600" },
    
    // Design
    { name: "Figma", category: "design", icon: Palette, color: "text-purple-600" },
    { name: "FigJam", category: "design", icon: Palette, color: "text-pink-500" },
    { name: language === 'ru' ? "Интерфейсы" : "Interfaces", category: "design", icon: Palette, color: "text-indigo-500" },
    { name: language === 'ru' ? "Прототипы" : "Prototypes", category: "design", icon: Palette, color: "text-rose-500" },
    
    // Analytics
    { name: language === 'ru' ? "A/B-тестирование" : "A/B Testing", category: "analytics", icon: BarChart3, color: "text-amber-500" },
    { name: language === 'ru' ? "Z-тесты" : "Z-tests", category: "analytics", icon: BarChart3, color: "text-lime-500" },
    { name: language === 'ru' ? "T-тесты" : "T-tests", category: "analytics", icon: BarChart3, color: "text-emerald-600" },
    
    // Databases
    { name: "SQL", category: "database", icon: Database, color: "text-blue-600" },
    { name: "SQLite", category: "database", icon: Database, color: "text-gray-600" },
    { name: "MySQL", category: "database", icon: Database, color: "text-orange-500" },
    
    // Web
    { name: "JavaScript", category: "web", icon: Code2, color: "text-yellow-600" },
    { name: "HTML", category: "web", icon: FileCode, color: "text-red-600" },
    { name: "CSS", category: "web", icon: FileCode, color: "text-blue-500" },
    
    // Markup
    { name: "XML", category: "markup", icon: FileCode, color: "text-green-600" },
    { name: "KML", category: "markup", icon: FileCode, color: "text-purple-500" },
    
    // Tools
    { name: "Excel", category: "tools", icon: Wrench, color: "text-green-700" },
    { name: "Notion", category: "tools", icon: Wrench, color: "text-gray-700" },
    
    // BI
    { name: "Power BI", category: "bi", icon: BarChart3, color: "text-yellow-500" },
    { name: "Tableau", category: "bi", icon: BarChart3, color: "text-blue-700" },
    
    // DevOps
    { name: "Docker", category: "devops", icon: Cloud, color: "text-blue-400" },
    
    // API
    { name: "REST API", category: "api", icon: Globe, color: "text-green-500" },
    
    // Testing
    { name: language === 'ru' ? "Unit-тесты" : "Unit tests", category: "testing", icon: TestTube, color: "text-red-500" },
    { name: "unittest", category: "testing", icon: TestTube, color: "text-orange-400" },
    { name: "pytest", category: "testing", icon: TestTube, color: "text-green-400" },
    
    // AI
    { name: "Voice Assistant", category: "ai", icon: Bot, color: "text-purple-400" },
    { name: "AI Integration", category: "ai", icon: Bot, color: "text-cyan-400" }
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

  const getCategoryTitle = (category: string) => {
    const titles = {
      ru: {
        language: "Языки программирования",
        data: "Анализ данных",
        web: "Веб-разработка",
        design: "Дизайн",
        analytics: "Аналитика",
        database: "Базы данных",
        markup: "Разметка",
        tools: "Инструменты",
        bi: "Business Intelligence",
        devops: "DevOps",
        api: "API",
        testing: "Тестирование",
        ai: "Искусственный интеллект",
        vcs: "Система контроля версий",
        parsing: "Парсинг"
      },
      en: {
        language: "Programming Languages",
        data: "Data Analysis",
        web: "Web Development",
        design: "Design",
        analytics: "Analytics",
        database: "Databases",
        markup: "Markup",
        tools: "Tools",
        bi: "Business Intelligence",
        devops: "DevOps",
        api: "API",
        testing: "Testing",
        ai: "Artificial Intelligence",
        vcs: "Version Control",
        parsing: "Parsing"
      }
    };
    return titles[language][category as keyof typeof titles[typeof language]] || category;
  };

  const groupedSkills = skills.reduce((acc, skill, index) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push({ ...skill, originalIndex: index });
    return acc;
  }, {} as Record<string, Array<Skill & { originalIndex: number }>>);

  return (
    <div className="space-y-8">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        <span className="gradient-text">
          {language === 'ru' ? 'Технические навыки' : 'Technical Skills'}
        </span>
      </h2>
      
      {Object.entries(groupedSkills).map(([category, categorySkills]) => (
        <div key={category} className="space-y-4">
          <h3 className="text-xl font-semibold text-center text-primary">
            {getCategoryTitle(category)}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categorySkills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <Card 
                  key={`${skill.name}-${skill.originalIndex}`}
                  className="glass-card text-center cursor-move hover:scale-105 transition-all duration-300 group"
                  draggable
                  onDragStart={(e) => handleDragStart(e, skill.originalIndex)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, skill.originalIndex)}
                  style={{
                    opacity: draggedIndex === skill.originalIndex ? 0.5 : 1,
                    transform: draggedIndex === skill.originalIndex ? 'rotate(2deg) scale(1.05)' : 'none'
                  }}
                >
                  <CardContent className="p-4">
                    <IconComponent className={`h-8 w-8 mx-auto mb-2 ${skill.color} group-hover:scale-110 transition-transform`} />
                    <p className="text-sm font-medium text-foreground">{skill.name}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      ))}
      
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
