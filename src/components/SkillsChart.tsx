
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface SkillData {
  category: string;
  skills: string[];
  level: number;
  color: string;
}

interface SkillsChartProps {
  skillsData: SkillData[];
}

const SkillsChart = ({ skillsData }: SkillsChartProps) => {
  const [animatedLevels, setAnimatedLevels] = useState<number[]>(skillsData.map(() => 0));

  useEffect(() => {
    const timers = skillsData.map((_, index) => {
      return setTimeout(() => {
        setAnimatedLevels(prev => {
          const newLevels = [...prev];
          newLevels[index] = skillsData[index].level;
          return newLevels;
        });
      }, index * 200);
    });

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [skillsData]);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillsData.map((skill, index) => (
        <Card key={index} className="glass-card hover:scale-105 transition-all duration-300 group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">{skill.category}</h3>
              <span className="text-sm font-semibold" style={{ color: skill.color }}>
                {animatedLevels[index]}%
              </span>
            </div>
            
            <div className="w-full bg-secondary/30 rounded-full h-3 mb-4">
              <div 
                className="h-3 rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  width: `${animatedLevels[index]}%`,
                  backgroundColor: skill.color,
                  boxShadow: `0 0 10px ${skill.color}50`
                }}
              />
            </div>
            
            <div className="flex flex-wrap gap-1">
              {skill.skills.map((skillName, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className="text-xs bg-secondary/50 px-2 py-1 rounded opacity-0 animate-fade-in"
                  style={{ 
                    animationDelay: `${index * 200 + skillIndex * 100}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  {skillName}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SkillsChart;
