
import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  language: 'ru' | 'en';
  onLanguageChange: (lang: 'ru' | 'en') => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, onLanguageChange }) => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => onLanguageChange(language === 'ru' ? 'en' : 'ru')}
      className="glass-card border-white/20 hover:bg-white/10 flex items-center gap-2"
    >
      <Globe className="h-4 w-4" />
      {language === 'ru' ? 'EN' : 'RU'}
    </Button>
  );
};

export default LanguageToggle;
