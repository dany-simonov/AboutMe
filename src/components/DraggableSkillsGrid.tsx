
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Globe, Palette } from 'lucide-react';

interface SkillCategory {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

interface DraggableSkillsGridProps {
  programming: string;
  dataAnalytics: string;
  webDevelopment: string;
  webDesign: string;
  language: 'ru' | 'en';
}

const DraggableSkillsGrid = ({ programming, dataAnalytics, webDevelopment, webDesign, language }: DraggableSkillsGridProps) => {
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>([
    {
      icon: Code,
      title: programming,
      description: "Python, JavaScript, HTML, CSS",
      color: "text-blue-500"
    },
    {
      icon: Database,
      title: dataAnalytics,
      description: "Pandas, NumPy, SQL, Power BI, Tableau, Plotly",
      color: "text-green-500"
    },
    {
      icon: Globe,
      title: webDevelopment,
      description: "React, Flask, APIs",
      color: "text-purple-500"
    },
    {
      icon: Palette,
      title: webDesign,
      description: language === 'ru' ? 'Figma, Создание прототипов, UI/UX' : 'Figma, Prototyping, UI/UX',
      color: "text-pink-500"
    }
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

    const newCategories = [...skillCategories];
    const draggedItem = newCategories[draggedIndex];
    
    // Remove the dragged item
    newCategories.splice(draggedIndex, 1);
    
    // Insert at the new position
    newCategories.splice(dropIndex, 0, draggedItem);
    
    setSkillCategories(newCategories);
    setDraggedIndex(null);
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {skillCategories.map((category, index) => {
        const IconComponent = category.icon;
        return (
          <Card 
            key={`${category.title}-${index}`}
            className="glass-card text-center cursor-move hover:scale-105 transition-all duration-300"
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            style={{
              opacity: draggedIndex === index ? 0.5 : 1,
              transform: draggedIndex === index ? 'rotate(5deg)' : 'none'
            }}
          >
            <CardContent className="p-6">
              <IconComponent className={`h-12 w-12 mx-auto mb-4 ${category.color}`} />
              <h3 className="font-bold mb-2">{category.title}</h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default DraggableSkillsGrid;
