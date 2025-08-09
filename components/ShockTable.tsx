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
    <div className="space-y-4">
      {/* Header informativo */}
      <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-4 sm:p-6 border border-red-200 shadow-lg">
        <div className="text-center mb-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-white text-lg sm:text-xl">💔</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-2">Shocks Vivenciales Gestacionales</h3>
          <p className="text-sm sm:text-base text-red-600">Eventos traumáticos que afectan el desarrollo fetal</p>
        </div>
      </div>

      {/* Lista de shocks */}
      <div className="grid gap-4">
        {data.map((item) => {
          const color = getShockColor(item.id);
          const isExpanded = expandedId === item.id;
          
          return (
            <div 
              key={item.id} 
              className={`bg-gradient-to-br ${color.bg} rounded-xl border ${color.border} shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1`}
            >
              <button
                onClick={() => handleToggle(item.id)}
                className="w-full p-4 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 rounded-xl"
                aria-expanded={isExpanded}
                aria-controls={`content-${item.id}`}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${color.circle} rounded-full flex items-center justify-center flex-shrink-0 transform transition-all duration-300 hover:scale-110`}>
                    <span className="text-white font-bold text-sm sm:text-base">{item.id}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-lg sm:text-xl">{color.icon}</span>
                      <h4 className="text-sm sm:text-base font-semibold text-slate-800">{item.shock}</h4>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-2">{item.description}</p>
                      <ChevronDownIcon
                        className={`h-5 w-5 sm:h-6 sm:w-6 text-slate-500 transform transition-transform duration-300 flex-shrink-0 ml-2 ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </div>
                </div>
              </button>
              
              <div
                id={`content-${item.id}`}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-screen' : 'max-h-0'}`}
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-4">
                  <div className="bg-white/80 rounded-lg p-4 border border-white/50">
                    <h5 className="font-semibold text-slate-700 text-sm sm:text-base mb-2">📝 Descripción:</h5>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{item.description}</p>
                  </div>
                  
                  <div className="bg-white/80 rounded-lg p-4 border border-white/50">
                    <h5 className="font-semibold text-slate-700 text-sm sm:text-base mb-2">⚡ Conflicto:</h5>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{item.conflict}</p>
                  </div>
                  
                  <div className="bg-white/80 rounded-lg p-4 border border-white/50">
                    <h5 className="font-semibold text-slate-700 text-sm sm:text-base mb-2">🧲 Pares Biomagnéticos:</h5>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-mono">{item.pairs}</p>
                  </div>
                  
                  <div className="bg-white/80 rounded-lg p-4 border border-white/50">
                    <h5 className="font-semibold text-slate-700 text-sm sm:text-base mb-2">✨ Beneficios Esperados:</h5>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{item.benefits}</p>
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
