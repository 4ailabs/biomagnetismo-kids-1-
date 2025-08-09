import React, { useState } from 'react';
import { ShockData } from '../types';
import { ChevronDownIcon } from './icons';

interface ShockTableProps {
  data: ShockData[];
}

const ShockTable: React.FC<ShockTableProps> = ({ data }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getShockColor = (id: number) => {
    const colors = [
      { bg: 'from-red-50 to-pink-50', border: 'border-red-200', circle: 'from-red-500 to-pink-500', icon: '💔' },
      { bg: 'from-orange-50 to-amber-50', border: 'border-orange-200', circle: 'from-orange-500 to-amber-500', icon: '⚠️' },
      { bg: 'from-yellow-50 to-orange-50', border: 'border-yellow-200', circle: 'from-yellow-500 to-orange-500', icon: '😰' },
      { bg: 'from-blue-50 to-indigo-50', border: 'border-blue-200', circle: 'from-blue-500 to-indigo-500', icon: '😢' },
      { bg: 'from-purple-50 to-violet-50', border: 'border-purple-200', circle: 'from-purple-500 to-violet-500', icon: '😨' }
    ];
    return colors[(id - 1) % colors.length];
  };

  return (
    <div className="space-y-6">
      {/* Header informativo mejorado */}
      <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-6 sm:p-8 border border-red-200 shadow-xl">
        <div className="text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl sm:text-3xl">💔</span>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-red-700 mb-3">Shocks Vivenciales Gestacionales</h3>
          <p className="text-base sm:text-lg text-red-600 max-w-2xl mx-auto">Eventos traumáticos que afectan el desarrollo fetal y requieren atención biomagnética</p>
        </div>
      </div>

      {/* Lista de shocks con diseño mejorado */}
      <div className="grid gap-6">
        {data.map((item) => {
          const color = getShockColor(item.id);
          const isExpanded = expandedId === item.id;
          
          return (
            <div 
              key={item.id} 
              className={`bg-gradient-to-br ${color.bg} rounded-2xl border-2 ${color.border} shadow-xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1`}
            >
              <button
                onClick={() => handleToggle(item.id)}
                className="w-full p-6 sm:p-8 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-red-500 focus-visible:ring-offset-2 rounded-2xl"
                aria-expanded={isExpanded}
                aria-controls={`content-${item.id}`}
              >
                <div className="flex items-start space-x-4 sm:space-x-6">
                  {/* Número y icono más grandes */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${color.circle} rounded-full flex items-center justify-center flex-shrink-0 transform transition-all duration-300 hover:scale-110 shadow-lg`}>
                    <span className="text-white font-bold text-xl sm:text-2xl">{item.id}</span>
                  </div>
                  
                  {/* Contenido principal */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-2xl sm:text-3xl">{color.icon}</span>
                      <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 leading-tight">{item.shock}</h4>
                    </div>
                    
                    {/* Descripción visible siempre */}
                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    
                    {/* Indicador de expansión */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm sm:text-base font-medium text-slate-600">
                        {isExpanded ? 'Ocultar detalles' : 'Ver detalles completos'}
                      </span>
                      <ChevronDownIcon
                        className={`h-6 w-6 sm:h-8 sm:w-8 text-slate-500 transform transition-transform duration-300 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </div>
                </div>
              </button>
              
              {/* Contenido expandido */}
              <div
                id={`content-${item.id}`}
                className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-screen' : 'max-h-0'}`}
              >
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 space-y-6">
                  {/* Conflicto */}
                  <div className="bg-white/90 rounded-xl p-5 sm:p-6 border border-white/50 shadow-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-2xl">⚡</span>
                      <h5 className="font-bold text-slate-700 text-lg sm:text-xl">Conflicto Biológico</h5>
                    </div>
                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed">{item.conflict}</p>
                  </div>
                  
                  {/* Pares Biomagnéticos */}
                  <div className="bg-white/90 rounded-xl p-5 sm:p-6 border border-white/50 shadow-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-2xl">🧲</span>
                      <h5 className="font-bold text-slate-700 text-lg sm:text-xl">Pares Biomagnéticos</h5>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-mono">{item.pairs}</p>
                    </div>
                  </div>
                  
                  {/* Beneficios */}
                  <div className="bg-white/90 rounded-xl p-5 sm:p-6 border border-white/50 shadow-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-2xl">✨</span>
                      <h5 className="font-bold text-slate-700 text-lg sm:text-xl">Beneficios Esperados</h5>
                    </div>
                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed">{item.benefits}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShockTable;
