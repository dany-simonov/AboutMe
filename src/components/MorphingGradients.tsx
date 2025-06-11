
import { useEffect, useState } from 'react';

const MorphingGradients = () => {
  const [gradientIndex, setGradientIndex] = useState(0);

  const gradients = [
    'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(45deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(45deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(45deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(45deg, #ff9a9e 0%, #fecfef 100%)',
    'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex(prev => (prev + 1) % gradients.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [gradients.length]);

  return (
    <div className="fixed inset-0 z-0">
      {gradients.map((gradient, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-2000 ease-in-out"
          style={{
            background: gradient,
            opacity: index === gradientIndex ? 0.1 : 0,
          }}
        />
      ))}
    </div>
  );
};

export default MorphingGradients;
