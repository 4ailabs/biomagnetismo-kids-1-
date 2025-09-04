import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface Module {
  id: number;
  title: string;
  subtitle: string;
  color: string;
  isActive: boolean;
}

interface ModuleContextType {
  activeModule: number;
  modules: Module[];
  setActiveModule: (moduleId: number) => void;
}

const ModuleContext = createContext<ModuleContextType | undefined>(undefined);

export const useModule = () => {
  const context = useContext(ModuleContext);
  if (context === undefined) {
    throw new Error('useModule must be used within a ModuleProvider');
  }
  return context;
};

interface ModuleProviderProps {
  children: ReactNode;
}

export const ModuleProvider: React.FC<ModuleProviderProps> = ({ children }) => {
  const [activeModule, setActiveModuleState] = useState(1);

  const modules: Module[] = [
    {
      id: 1,
      title: "MÓDULO 1",
      subtitle: "Biomagnetismo Prenatal: Gestación y Perinatología",
      color: "from-teal-400 to-blue-500",
      isActive: true
    },
    {
      id: 2,
      title: "MÓDULO 2", 
      subtitle: "Del Apego a la Autonomía: Patrones Energéticos de 3 Meses a 5 Años",
      color: "from-pink-400 to-purple-500",
      isActive: false
    },
    {
      id: 3,
      title: "MÓDULO 3",
      subtitle: "Aprender Sin Perderme a Mí Mismo: Patrones Energéticos de 5-12 Años",
      color: "from-emerald-400 to-teal-500", 
      isActive: false
    },
    {
      id: 4,
      title: "MÓDULO 4",
      subtitle: "Por definir",
      color: "from-orange-400 to-amber-500",
      isActive: false
    }
  ];

  const setActiveModule = (moduleId: number) => {
    setActiveModuleState(moduleId);
  };

  const value: ModuleContextType = {
    activeModule,
    modules: modules.map(module => ({
      ...module,
      isActive: module.id === activeModule
    })),
    setActiveModule
  };

  return (
    <ModuleContext.Provider value={value}>
      {children}
    </ModuleContext.Provider>
  );
};

// Hook personalizado para detectar el módulo desde la URL
export const useModuleFromRoute = () => {
  const location = useLocation();
  const { setActiveModule } = useModule();
  
  useEffect(() => {
    const pathMatch = location.pathname.match(/\/modulo\/(\d+)/);
    if (pathMatch) {
      const moduleId = parseInt(pathMatch[1]);
      setActiveModule(moduleId);
    }
  }, [location.pathname, setActiveModule]);
};
