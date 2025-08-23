import React from 'react';
import { useTranslation } from 'react-i18next';
import { useModule } from '../src/contexts/ModuleContext';
import PresentationIcon from './icons/PresentationIcon';

const Footer: React.FC = () => {
    const { t } = useTranslation();
    const { activeModule } = useModule();
    
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
                        &copy; {new Date().getFullYear()} Biomagnetismo Kids. {t('footer.badges.completed')}.
                    </p>
                    <p className="text-xs text-slate-500 mb-3 sm:mb-4">
                        {t('footer.content')}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-400">
                        <span className="flex items-center">
                            <span className="w-1 h-1 bg-green-400 rounded-full mr-1.5 sm:mr-2"></span>
                            {t('footer.badges.completed')}
                        </span>
                        <span className="flex items-center">
                            <span className="w-1 h-1 bg-blue-400 rounded-full mr-1.5 sm:mr-2"></span>
                            {t('header.course')}
                        </span>
                        <span className="flex items-center">
                            <span className="w-1 h-1 bg-purple-400 rounded-full mr-1.5 sm:mr-2"></span>
                            {t('footer.badges.certification')}
                        </span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-200/30">
                        <p className="text-teal-600 font-medium text-xs"><strong>{t('footer.author.title')}</strong> {t('footer.author.name')}</p>
                        <p className="text-slate-500 text-xs mt-1">{t('footer.author.institute')}</p>
                        <p className="text-slate-500 text-xs">{t('footer.author.website')}</p>
                    </div>
                    
                    {/* Dynamic Presentation Button */}
                    <div className="mt-4 flex justify-center">
                        <button
                            onClick={() => {
                                const presentationUrl = activeModule === 2 ? '/presentation-modulo2' : '/presentation';
                                window.open(presentationUrl, '_blank');
                            }}
                            className="flex items-center justify-center w-10 h-10 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all duration-300 opacity-60 hover:opacity-100"
                            title={activeModule === 2 ? 'Diapositivas Módulo 2' : t('header.presentation')}
                        >
                            <PresentationIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
