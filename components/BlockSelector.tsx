import React from 'react';
import { useTranslation } from 'react-i18next';
import { useModule } from '../src/contexts/ModuleContext';
import { 
  BookOpen, 
  Beaker, 
  Baby, 
  Rocket, 
  Target,
  Heart,
  Compass,
  Shield,
  Lightbulb,
  Sparkles
} from 'lucide-react';

const BlockSelector: React.FC = () => {
  const { t } = useTranslation();
  const { activeModule } = useModule();

  // Configuración dinámica según el módulo activo
  const getModuleBlocks = () => {
    if (activeModule === 1) {
      return [
        { id: 1, title: "Inicios", subtitle: "Vida Intrauterina y Conflictos", icon: <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, color: 'from-green-400 to-emerald-500' },
        { id: 2, title: "Gestación", subtitle: "Rastreo y Protocolos", icon: <Beaker className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, color: 'from-pink-400 to-rose-500' },
        { id: 3, title: "Neonato", subtitle: "Recién Nacido (0-1 mes)", icon: <Baby className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, color: 'from-blue-400 to-cyan-500' },
        { id: 4, title: "Desarrollo", subtitle: "Shocks Postnatales", icon: <Rocket className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, color: 'from-purple-400 to-violet-500' },
        { id: 5, title: "Cierre", subtitle: "Integración Sistémica", icon: <Target className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, color: 'from-orange-400 to-amber-500' },
      ];
    } else if (activeModule === 2) {
      return [
        { id: 1, title: t('blockSelector.module2.block1'), subtitle: t('blockSelector.module2.subtitles.block1'), icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, color: 'from-pink-400 to-rose-500' },
        { id: 2, title: t('blockSelector.module2.block2'), subtitle: t('blockSelector.module2.subtitles.block2'), icon: <Compass className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, color: 'from-blue-400 to-cyan-500' },
        { id: 3, title: t('blockSelector.module2.block3'), subtitle: t('blockSelector.module2.subtitles.block3'), icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, color: 'from-purple-400 to-violet-500' },
        { id: 4, title: t('blockSelector.module2.block4'), subtitle: t('blockSelector.module2.subtitles.block4'), icon: <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, color: 'from-orange-400 to-amber-500' },
        { id: 5, title: t('blockSelector.module2.block5'), subtitle: t('blockSelector.module2.subtitles.block5'), icon: <Target className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, color: 'from-teal-400 to-emerald-500' },
        { id: 6, title: t('blockSelector.module2.block6'), subtitle: t('blockSelector.module2.subtitles.block6'), icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, color: 'from-indigo-400 to-purple-500' },
        { id: 7, title: t('blockSelector.module2.block7'), subtitle: t('blockSelector.module2.subtitles.block7'), icon: <Compass className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, color: 'from-emerald-400 to-teal-500' },
        { id: 8, title: t('blockSelector.module2.block8'), subtitle: t('blockSelector.module2.subtitles.block8'), icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, color: 'from-rose-400 to-pink-500' },
        { id: 9, title: t('blockSelector.module2.block9'), subtitle: t('blockSelector.module2.subtitles.block9'), icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, color: 'from-violet-400 to-purple-500' },
      ];
    } else {
      // Módulos futuros
      return [
        { id: 1, title: "Bloque 1", subtitle: "Por definir", icon: <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, color: 'from-green-400 to-emerald-500' },
        { id: 2, title: "Bloque 2", subtitle: "Por definir", icon: <Beaker className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, color: 'from-pink-400 to-rose-500' },
        { id: 3, title: "Bloque 3", subtitle: "Por definir", icon: <Baby className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, color: 'from-blue-400 to-cyan-500' },
        { id: 4, title: "Bloque 4", subtitle: "Por definir", icon: <Rocket className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, color: 'from-purple-400 to-violet-500' },
        { id: 5, title: "Bloque 5", subtitle: "Por definir", icon: <Target className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, color: 'from-orange-400 to-amber-500' },
      ];
    }
  };

  const blocks = getModuleBlocks();

  const handleScroll = (blockId: number) => {
    const element = document.getElementById(`block-${blockId}`);
    if (element) {
      const yOffset = -120; // Offset to account for the sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-2 sm:p-3 lg:p-4 border border-white/20">
      <div className="text-center mb-2 sm:mb-3 lg:mb-4">
        <h2 className="text-sm sm:text-base lg:text-lg font-semibold text-slate-700 mb-1 sm:mb-2">
          {activeModule === 1 ? t('blockSelector.title') : t('blockSelector.module2.title')}
        </h2>
        <div className="w-8 sm:w-10 lg:w-12 xl:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mx-auto"></div>
      </div>
      <div className={`grid gap-1.5 sm:gap-2 lg:gap-3 ${
        activeModule === 1 
          ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5' 
          : 'grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8'
      }`}>
        {blocks.map((block) => (
          <button
            key={block.id}
            onClick={() => handleScroll(block.id)}
            className={`
              group relative overflow-hidden rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 text-center transition-all duration-300 
              bg-white/80 hover:bg-white shadow-md hover:shadow-lg border border-white/20
              hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 
              focus:ring-offset-1 sm:focus:ring-offset-2 focus:ring-teal-500
            `}
          >
            {/* Background gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${block.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            
            {/* Icon */}
            <div className="relative z-10 mb-1.5 sm:mb-2 lg:mb-3">
              <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full group-hover:from-white group-hover:to-slate-50 transition-all duration-300">
                <div className="text-slate-600 group-hover:text-slate-800 transition-colors duration-300">
                  {block.icon}
                </div>
              </div>
            </div>
            
            {/* Title */}
            <div className="relative z-10">
              <div className="text-xs sm:text-sm lg:text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors duration-300 leading-tight">
                {block.title}
              </div>
              <div className="text-xs text-slate-500 group-hover:text-slate-600 transition-colors duration-300 leading-tight mt-0.5 sm:mt-1">
                {block.subtitle}
              </div>
            </div>
            
            {/* Hover indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlockSelector;