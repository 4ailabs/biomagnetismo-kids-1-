import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  BookOpen, 
  Beaker, 
  Baby, 
  Rocket, 
  Target 
} from 'lucide-react';

const BlockSelector: React.FC = () => {
  const { t } = useTranslation();

  const blocks = [
    { id: 1, title: t('blockSelector.block1'), icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'from-green-400 to-emerald-500' },
    { id: 2, title: t('blockSelector.block2'), icon: <Beaker className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'from-pink-400 to-rose-500' },
    { id: 3, title: t('blockSelector.block3'), icon: <Baby className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'from-blue-400 to-cyan-500' },
    { id: 4, title: t('blockSelector.block4'), icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'from-purple-400 to-violet-500' },
    { id: 5, title: t('blockSelector.block5'), icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'from-orange-400 to-amber-500' },
  ];

  const handleScroll = (blockId: number) => {
    const element = document.getElementById(`block-${blockId}`);
    if (element) {
      const yOffset = -120; // Offset to account for the sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-3 sm:p-4 border border-white/20">
      <div className="text-center mb-3 sm:mb-4">
        <h2 className="text-base sm:text-lg font-semibold text-slate-700 mb-2">{t('blockSelector.title')}</h2>
        <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mx-auto"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
        {blocks.map((block) => (
          <button
            key={block.id}
            onClick={() => handleScroll(block.id)}
            className={`
              group relative overflow-hidden rounded-xl p-3 sm:p-4 text-center transition-all duration-300 
              bg-white/80 hover:bg-white shadow-lg hover:shadow-xl border border-white/20
              hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 
              focus:ring-offset-2 focus:ring-teal-500
            `}
          >
            {/* Background gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${block.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            
            {/* Icon */}
            <div className="relative z-10 mb-2 sm:mb-3">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full group-hover:from-white group-hover:to-slate-50 transition-all duration-300">
                <div className="text-slate-600 group-hover:text-slate-800 transition-colors duration-300">
                  {block.icon}
                </div>
              </div>
            </div>
            
            {/* Title */}
            <div className="relative z-10">
              <span className="text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors duration-300 leading-tight">
                {block.title}
              </span>
            </div>
            
            {/* Hover indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlockSelector;