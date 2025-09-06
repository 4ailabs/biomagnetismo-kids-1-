import React, { useState, useEffect } from 'react';
import { Menu, ArrowUp } from 'lucide-react';
import { textUtils } from '../src/styles/typography';

interface FloatingBackButtonProps {
  currentBlock?: number | null;
  blockTitle?: string;
  onBackToMenu: () => void;
}

const FloatingBackButton: React.FC<FloatingBackButtonProps> = ({
  currentBlock,
  blockTitle,
  onBackToMenu
}) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Mostrar botón después de 200px de scroll
      setShowButton(scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showButton) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="flex flex-col space-y-2">
        {/* Botón de volver al menú */}
        <button
          onClick={onBackToMenu}
          className="group relative overflow-hidden rounded-full p-3 sm:p-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          title="Volver al menú de bloques"
        >
          <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        
        {/* Indicador del bloque actual */}
        {currentBlock && blockTitle && (
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg border border-white/20">
            <span className={`${textUtils.title.card}`}>
              {blockTitle}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingBackButton;
