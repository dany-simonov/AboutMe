
import { useState, useEffect, useCallback } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  opacity: number;
  scale: number;
}

const CursorParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
    
    const newParticle: Particle = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
      opacity: 1,
      scale: 1,
    };

    setParticles(prev => [...prev.slice(-10), newParticle]);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          opacity: particle.opacity - 0.05,
          scale: particle.scale - 0.02,
        })).filter(particle => particle.opacity > 0)
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 rounded-full"
          style={{
            left: particle.x - 4,
            top: particle.y - 4,
            opacity: particle.opacity,
            transform: `scale(${particle.scale})`,
            transition: 'opacity 0.1s ease-out, transform 0.1s ease-out',
          }}
        />
      ))}
      
      {/* Основной курсор */}
      <div
        className="absolute w-4 h-4 border-2 border-primary rounded-full pointer-events-none transition-all duration-100 ease-out"
        style={{
          left: mousePos.x - 8,
          top: mousePos.y - 8,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent)',
        }}
      />
    </div>
  );
};

export default CursorParticles;
