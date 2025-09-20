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

// Lazy loading para Módulo 4
const Module4Block1 = lazy(() => import('./blocks/module4/Module4Block1'));
const Module4Block2 = lazy(() => import('./blocks/module4/Module4Block2'));
const Module4Block3 = lazy(() => import('./blocks/module4/Module4Block3'));
const Module4Block4 = lazy(() => import('./blocks/module4/Module4Block4'));
const Module4Block5 = lazy(() => import('./blocks/module4/Module4Block5'));
const Module4Block6 = lazy(() => import('./blocks/module4/Module4Block6'));

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

  // Renderizar módulo 4
  if (activeModule === 4) {
    return (
      <Suspense fallback={<BlockLoader />}>
        <div className="space-y-12">
          <Module4Block1 />
          <Module4Block2 />
          <Module4Block3 />
          <Module4Block4 />
          <Module4Block5 />
          <Module4Block6 />
        </div>
      </Suspense>
    );
  }

  // Fallback
  return <Manual />;
};

export default DynamicManual;
