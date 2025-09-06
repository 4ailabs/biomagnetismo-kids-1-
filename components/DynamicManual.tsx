import React, { Suspense, lazy } from 'react';
import { useModule } from '../src/contexts/ModuleContext';
import { Loader2 } from 'lucide-react';
import Manual from './Manual';

// Lazy loading para Módulo 2
const Module2Block1 = lazy(() => import('./blocks/module2/Module2Block1'));
const Module2Block2 = lazy(() => import('./blocks/module2/Module2Block2'));
const Module2Block3 = lazy(() => import('./blocks/module2/Module2Block3'));
const Module2Block4 = lazy(() => import('./blocks/module2/Module2Block4'));
const Module2Block5 = lazy(() => import('./blocks/module2/Module2Block5'));
const Module2Block6 = lazy(() => import('./blocks/module2/Module2Block6'));
const Module2Block7 = lazy(() => import('./blocks/module2/Module2Block7'));
const Module2Block8 = lazy(() => import('./blocks/module2/Module2Block8'));
const Module2Block9 = lazy(() => import('./blocks/module2/Module2Block9'));

// Lazy loading para Módulo 3
const Module3Block1 = lazy(() => import('./blocks/module3/Module3Block1'));
const Module3Block2 = lazy(() => import('./blocks/module3/Module3Block2'));
const Module3Block3 = lazy(() => import('./blocks/module3/Module3Block3'));
const Module3Block4 = lazy(() => import('./blocks/module3/Module3Block4'));
const Module3Block5 = lazy(() => import('./blocks/module3/Module3Block5'));
const Module3Block6 = lazy(() => import('./blocks/module3/Module3Block6'));
const Module3Block7 = lazy(() => import('./blocks/module3/Module3Block7'));
const Module3Block8 = lazy(() => import('./blocks/module3/Module3Block8'));

// Loading component
const BlockLoader: React.FC = () => (
  <div className="flex items-center justify-center py-16">
    <div className="text-center">
      <Loader2 className="w-8 h-8 animate-spin text-slate-500 mx-auto mb-4" />
      <p className="text-slate-600">Cargando contenido...</p>
    </div>
  </div>
);

const DynamicManual: React.FC = () => {
  const { activeModule } = useModule();

  // Renderizar el módulo 1 (Manual original)
  if (activeModule === 1) {
    return <Manual />;
  }

  // Renderizar módulo 2
  if (activeModule === 2) {
    return (
      <Suspense fallback={<BlockLoader />}>
        <div className="space-y-12">
          <Module2Block1 />
          <Module2Block2 />
          <Module2Block3 />
          <Module2Block4 />
          <Module2Block5 />
          <Module2Block6 />
          <Module2Block7 />
          <Module2Block8 />
          <Module2Block9 />
        </div>
      </Suspense>
    );
  }

  // Renderizar módulo 3
  if (activeModule === 3) {
    return (
      <Suspense fallback={<BlockLoader />}>
        <div className="space-y-12">
          <Module3Block1 />
          <Module3Block2 />
          <Module3Block3 />
          <Module3Block4 />
          <Module3Block5 />
          <Module3Block6 />
          <Module3Block7 />
          <Module3Block8 />
        </div>
      </Suspense>
    );
  }

  // Módulos futuros (4)
  if (activeModule === 4) {
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
