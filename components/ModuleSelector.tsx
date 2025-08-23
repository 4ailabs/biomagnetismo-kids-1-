import React, { useState } from 'react';
import { useModule } from '../src/contexts/ModuleContext';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

const ModuleSelector: React.FC = () => {
  const { activeModule, modules, setActiveModule } = useModule();
  const [isOpen, setIsOpen] = useState(false);

  const currentModule = modules.find(m => m.id === activeModule);

  const handleModuleChange = (moduleId: number) => {
    setActiveModule(moduleId);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-white/20 hover:bg-white/95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
      >
        <div className="flex items-center space-x-3">
          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentModule?.color}`}></div>
          <span className="font-semibold text-slate-700 text-sm">
            {currentModule?.title}
          </span>
        </div>
        <ChevronDownIcon className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-white/20 overflow-hidden z-50">
          {modules.map((module) => (
            <button
              key={module.id}
              onClick={() => handleModuleChange(module.id)}
              className={`w-full text-left px-4 py-3 hover:bg-slate-50 transition-colors duration-150 flex items-center space-x-3 ${
                module.id === activeModule ? 'bg-teal-50 border-r-2 border-teal-500' : ''
              }`}
            >
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${module.color}`}></div>
              <div className="flex-1">
                <div className="font-semibold text-slate-700 text-sm">
                  {module.title}
                </div>
                <div className="text-xs text-slate-500 mt-1 leading-tight">
                  {module.subtitle}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Overlay para cerrar el dropdown al hacer clic fuera */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default ModuleSelector;
