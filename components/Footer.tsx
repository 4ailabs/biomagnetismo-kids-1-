import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="relative bg-white/80 backdrop-blur-md mt-12 sm:mt-16 border-t border-white/20 shadow-lg">
            <div className="max-w-7xl mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs sm:text-sm">🧲</span>
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                            Biomagnetismo Kids
                        </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 mb-2">
                        &copy; {new Date().getFullYear()} Biomagnetismo Kids. Todos los derechos reservados.
                    </p>
                    <p className="text-xs text-slate-500 mb-3 sm:mb-4">
                        Este material es para fines educativos y de formación profesional.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-400">
                        <span className="flex items-center">
                            <span className="w-1 h-1 bg-green-400 rounded-full mr-1.5 sm:mr-2"></span>
                            Módulo 1 Completado
                        </span>
                        <span className="flex items-center">
                            <span className="w-1 h-1 bg-blue-400 rounded-full mr-1.5 sm:mr-2"></span>
                            Contenido Interactivo
                        </span>
                        <span className="flex items-center">
                            <span className="w-1 h-1 bg-purple-400 rounded-full mr-1.5 sm:mr-2"></span>
                            Certificación Disponible
                        </span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-200/30">
                        <p className="text-teal-600 font-medium text-xs"><strong>Método creado por:</strong> Dr. Miguel Ojeda Rios</p>
                        <p className="text-slate-500 text-xs mt-1">Instituto Centrobioenergética</p>
                        <p className="text-slate-500 text-xs">www.institutocentrobioenergetica.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
