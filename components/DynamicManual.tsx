import React from 'react';
import { useModule } from '../src/contexts/ModuleContext';
import { 
  Block1, Block2, Block3, Block4, Block5,
  Module2Block1, Module2Block2, Module2Block3, Module2Block4, Module2Block5, Module2Block6, Module2Block7, Module2Block8
} from './blocks';
import Manual from './Manual';

const DynamicManual: React.FC = () => {
  const { activeModule } = useModule();

  // Renderizar el módulo 1 (Manual original)
  if (activeModule === 1) {
    return <Manual />;
  }

  // Renderizar módulo 2
  if (activeModule === 2) {
    return (
      <div className="space-y-12">
        <Module2Block1 />
        <Module2Block2 />
        <Module2Block3 />
        <Module2Block4 />
        <Module2Block5 />
        <Module2Block6 />
        <Module2Block7 />
        <Module2Block8 />
      </div>
    );
  }

  // Módulos futuros (3 y 4)
  if (activeModule === 3 || activeModule === 4) {
    return (
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-12 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full shadow-lg mb-6">
          <span className="text-3xl">🚧</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-700 mb-4">
          Módulo {activeModule} en Desarrollo
        </h2>
        <p className="text-lg text-slate-600 max-w-md mx-auto">
          Este módulo estará disponible próximamente. Estamos trabajando para traerte contenido de la más alta calidad.
        </p>
      </div>
    );
  }

  // Fallback
  return <Manual />;
};

export default DynamicManual;
