import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpenIcon, HeartIcon } from './icons';
import CourseSection from './CourseSection';

const VitalSensationsModule2: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-12 w-full overflow-hidden">
      <section className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 text-center">
        <HeartIcon className="w-12 h-12 mx-auto mb-4 text-slate-600" />
        <h2 className="text-xl font-semibold text-slate-700 mb-3">{t('vitalSensationsModule2.title')}</h2>
        <p className="text-base text-slate-600 max-w-4xl mx-auto leading-relaxed">
          {t('vitalSensationsModule2.intro')}
        </p>
      </section>

      <CourseSection title={t('vitalSensationsModule2.contextTitle')} icon={<BookOpenIcon />}>
        <div className="space-y-8">
          <p className="text-slate-700 leading-relaxed text-lg">
            {t('vitalSensationsModule2.contextIntro')}
          </p>

          {/* 3-9 meses - Etapa del Apego */}
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">{t('vitalSensationsModule2.byStage.attachment.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(t('vitalSensationsModule2.byStage.attachment.sensations', { returnObjects: true }) as string[]).map((sensation: string, index: number) => {
                const colors = ['bg-blue-100', 'bg-indigo-100', 'bg-sky-100', 'bg-cyan-100', 'bg-teal-100'];
                const colorIndex = index % colors.length;
                return (
                  <div key={index} className={`${colors[colorIndex]} rounded-lg p-4 shadow-sm border border-white/20`}>
                    <p className="text-sm font-medium text-slate-800">
                      <strong>{sensation.split(':')[0]}:</strong> {sensation.split(':')[1]}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 9-18 meses - Etapa de Exploración */}
          <div className="bg-gradient-to-r from-green-50 to-slate-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">{t('vitalSensationsModule2.byStage.exploration.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(t('vitalSensationsModule2.byStage.exploration.sensations', { returnObjects: true }) as string[]).map((sensation: string, index: number) => {
                const colors = ['bg-green-100', 'bg-emerald-100', 'bg-lime-100', 'bg-teal-100', 'bg-cyan-100'];
                const colorIndex = index % colors.length;
                return (
                  <div key={index} className={`${colors[colorIndex]} rounded-lg p-4 shadow-sm border border-white/20`}>
                    <p className="text-sm font-medium text-slate-800">
                      <strong>{sensation.split(':')[0]}:</strong> {sensation.split(':')[1]}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 18 meses-3 años - Etapa de Autonomía */}
          <div className="bg-gradient-to-r from-amber-50 to-slate-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">{t('vitalSensationsModule2.byStage.autonomy.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(t('vitalSensationsModule2.byStage.autonomy.sensations', { returnObjects: true }) as string[]).map((sensation: string, index: number) => {
                const colors = ['bg-amber-100', 'bg-yellow-100', 'bg-orange-100', 'bg-red-100', 'bg-pink-100'];
                const colorIndex = index % colors.length;
                return (
                  <div key={index} className={`${colors[colorIndex]} rounded-lg p-4 shadow-sm border border-white/20`}>
                    <p className="text-sm font-medium text-slate-800">
                      <strong>{sensation.split(':')[0]}:</strong> {sensation.split(':')[1]}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3-5 años - Etapa de Iniciativa */}
          <div className="bg-gradient-to-r from-purple-50 to-slate-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">{t('vitalSensationsModule2.byStage.initiative.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(t('vitalSensationsModule2.byStage.initiative.sensations', { returnObjects: true }) as string[]).map((sensation: string, index: number) => {
                const colors = ['bg-purple-100', 'bg-violet-100', 'bg-indigo-100', 'bg-blue-100', 'bg-sky-100'];
                const colorIndex = index % colors.length;
                return (
                  <div key={index} className={`${colors[colorIndex]} rounded-lg p-4 shadow-sm border border-white/20`}>
                    <p className="text-sm font-medium text-slate-800">
                      <strong>{sensation.split(':')[0]}:</strong> {sensation.split(':')[1]}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Transversales */}
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">{t('vitalSensationsModule2.byStage.transversal.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(t('vitalSensationsModule2.byStage.transversal.sensations', { returnObjects: true }) as string[]).map((sensation: string, index: number) => {
                const colors = ['bg-slate-100', 'bg-gray-100', 'bg-zinc-100', 'bg-stone-100', 'bg-neutral-100'];
                const colorIndex = index % colors.length;
                return (
                  <div key={index} className={`${colors[colorIndex]} rounded-lg p-4 shadow-sm border border-white/20`}>
                    <p className="text-sm font-medium text-slate-800">
                      <strong>{sensation.split(':')[0]}:</strong> {sensation.split(':')[1]}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Nota importante */}
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Aplicación Terapéutica</h3>
            <p className="text-slate-700 leading-relaxed">
              Cada una de estas sensaciones vitales tiene correlación directa con puntos corporales específicos 
              y pares biomagnéticos para el trabajo terapéutico. Utiliza las técnicas de rastreo y los protocolos 
              establecidos en cada bloque del módulo para identificar y tratar los desequilibrios energéticos 
              correspondientes. La identificación precisa de la sensación vital permite aplicar el tratamiento 
              más efectivo para restaurar el equilibrio del niño.
            </p>
          </div>
        </div>
      </CourseSection>
    </div>
  );
};

export default VitalSensationsModule2;