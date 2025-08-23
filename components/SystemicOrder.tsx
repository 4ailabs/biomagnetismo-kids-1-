import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpenIcon, UserGroupIcon, HeartIcon, BeakerIcon, LightBulbIcon } from './icons';
import CourseSection from './CourseSection';

const SystemicOrder: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-12">
      <section className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 text-center">
        <UserGroupIcon className="w-12 h-12 mx-auto mb-4 text-slate-600" />
        <h2 className="text-xl font-semibold text-slate-700 mb-3">{t('systemicOrder.title')}</h2>
        <p className="text-base text-slate-600 max-w-4xl mx-auto leading-relaxed">
          {t('systemicOrder.intro')}
        </p>
      </section>

      <CourseSection title={t('systemicOrder.contextTitle')} icon={<BookOpenIcon />}>
        <div className="space-y-8">
          <p className="text-slate-700 leading-relaxed text-lg">
            {t('systemicOrder.contextIntro')}
          </p>
        </div>
      </CourseSection>

      <CourseSection title="Posiciones Sistémicas Fundamentales" icon={<UserGroupIcon />}>
        <div className="space-y-8">
          
          {/* Primer Hijo */}
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">{t('systemicOrder.positions.firstChild.title')}</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-800 mb-4">Características Sistémicas</h4>
                <ul className="space-y-3 text-slate-700">
                  {(t('systemicOrder.positions.firstChild.characteristics', { returnObjects: true }) as string[]).map((characteristic: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>{characteristic.split(':')[0]}:</strong> {characteristic.split(':')[1]}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-800 mb-4">Signatura Biomagnética</h4>
                <div className="space-y-3">
                  {(t('systemicOrder.positions.firstChild.biomagneticSignature', { returnObjects: true }) as string[]).map((pair: string, index: number) => (
                    <div key={index} className="bg-white/70 rounded-lg p-3">
                      <p className="text-sm text-slate-700">
                        <strong>{pair.split(':')[0]}:</strong> {pair.split(':')[1]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Segundo Hijo */}
          <div className="bg-gradient-to-r from-green-50 to-slate-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">{t('systemicOrder.positions.secondChild.title')}</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-800 mb-4">Características Sistémicas</h4>
                <ul className="space-y-3 text-slate-700">
                  {(t('systemicOrder.positions.secondChild.characteristics', { returnObjects: true }) as string[]).map((characteristic: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>{characteristic.split(':')[0]}:</strong> {characteristic.split(':')[1]}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-800 mb-4">Signatura Biomagnética</h4>
                <div className="space-y-3">
                  {(t('systemicOrder.positions.secondChild.biomagneticSignature', { returnObjects: true }) as string[]).map((pair: string, index: number) => (
                    <div key={index} className="bg-white/70 rounded-lg p-3">
                      <p className="text-sm text-slate-700">
                        <strong>{pair.split(':')[0]}:</strong> {pair.split(':')[1]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hijos Posteriores */}
          <div className="bg-gradient-to-r from-amber-50 to-slate-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">{t('systemicOrder.positions.laterChildren.title')}</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-800 mb-4">Características Sistémicas</h4>
                <ul className="space-y-3 text-slate-700">
                  {(t('systemicOrder.positions.laterChildren.characteristics', { returnObjects: true }) as string[]).map((characteristic: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>{characteristic.split(':')[0]}:</strong> {characteristic.split(':')[1]}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-800 mb-4">Signatura Biomagnética</h4>
                <div className="space-y-3">
                  {(t('systemicOrder.positions.laterChildren.biomagneticSignature', { returnObjects: true }) as string[]).map((pair: string, index: number) => (
                    <div key={index} className="bg-white/70 rounded-lg p-3">
                      <p className="text-sm text-slate-700">
                        <strong>{pair.split(':')[0]}:</strong> {pair.split(':')[1]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hijo Único */}
          <div className="bg-gradient-to-r from-purple-50 to-slate-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">{t('systemicOrder.positions.onlyChild.title')}</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-800 mb-4">Características Sistémicas</h4>
                <ul className="space-y-3 text-slate-700">
                  {(t('systemicOrder.positions.onlyChild.characteristics', { returnObjects: true }) as string[]).map((characteristic: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>{characteristic.split(':')[0]}:</strong> {characteristic.split(':')[1]}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-800 mb-4">Signatura Biomagnética</h4>
                <div className="space-y-3">
                  {(t('systemicOrder.positions.onlyChild.biomagneticSignature', { returnObjects: true }) as string[]).map((pair: string, index: number) => (
                    <div key={index} className="bg-white/70 rounded-lg p-3">
                      <p className="text-sm text-slate-700">
                        <strong>{pair.split(':')[0]}:</strong> {pair.split(':')[1]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CourseSection>

      <CourseSection title={t('systemicOrder.specialSituations.title')} icon={<HeartIcon />}>
        <div className="space-y-8">
          
          {/* Hermano Fallecido */}
          <div className="bg-gradient-to-r from-rose-50 to-slate-50 rounded-2xl p-6 border-l-4 border-rose-400">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">{t('systemicOrder.specialSituations.deadSibling.title')}</h3>
            <p className="text-slate-700 leading-relaxed text-lg mb-6">
              {t('systemicOrder.specialSituations.deadSibling.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-800 mb-4">Impactos Sistémicos</h4>
                <ul className="space-y-2 text-slate-700">
                  {(t('systemicOrder.specialSituations.deadSibling.impacts', { returnObjects: true }) as string[]).map((impact: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-800 mb-4">Abordaje Biomagnético</h4>
                <div className="space-y-3">
                  {(t('systemicOrder.specialSituations.deadSibling.biomagneticApproach', { returnObjects: true }) as string[]).map((pair: string, index: number) => (
                    <div key={index} className="bg-white/70 rounded-lg p-3">
                      <p className="text-sm text-slate-700">
                        <strong>{pair.split(':')[0]}:</strong> {pair.split(':')[1]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hermanastros */}
          <div className="bg-gradient-to-r from-cyan-50 to-slate-50 rounded-2xl p-6 border-l-4 border-cyan-400">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">{t('systemicOrder.specialSituations.halfSiblings.title')}</h3>
            <p className="text-slate-700 leading-relaxed text-lg mb-6">
              {t('systemicOrder.specialSituations.halfSiblings.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-800 mb-4">Impactos Sistémicos</h4>
                <ul className="space-y-2 text-slate-700">
                  {(t('systemicOrder.specialSituations.halfSiblings.impacts', { returnObjects: true }) as string[]).map((impact: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-800 mb-4">Abordaje Biomagnético</h4>
                <div className="space-y-3">
                  {(t('systemicOrder.specialSituations.halfSiblings.biomagneticApproach', { returnObjects: true }) as string[]).map((pair: string, index: number) => (
                    <div key={index} className="bg-white/70 rounded-lg p-3">
                      <p className="text-sm text-slate-700">
                        <strong>{pair.split(':')[0]}:</strong> {pair.split(':')[1]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Adopción */}
          <div className="bg-gradient-to-r from-indigo-50 to-slate-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">{t('systemicOrder.specialSituations.adoption.title')}</h3>
            <p className="text-slate-700 leading-relaxed text-lg mb-6">
              {t('systemicOrder.specialSituations.adoption.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-800 mb-4">Impactos Sistémicos</h4>
                <ul className="space-y-2 text-slate-700">
                  {(t('systemicOrder.specialSituations.adoption.impacts', { returnObjects: true }) as string[]).map((impact: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-800 mb-4">Abordaje Biomagnético</h4>
                <div className="space-y-3">
                  {(t('systemicOrder.specialSituations.adoption.biomagneticApproach', { returnObjects: true }) as string[]).map((pair: string, index: number) => (
                    <div key={index} className="bg-white/70 rounded-lg p-3">
                      <p className="text-sm text-slate-700">
                        <strong>{pair.split(':')[0]}:</strong> {pair.split(':')[1]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CourseSection>

      <CourseSection title={t('systemicOrder.therapeuticApproach.title')} icon={<BeakerIcon />}>
        <div className="space-y-8">
          
          {/* Evaluación */}
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">{t('systemicOrder.therapeuticApproach.assessment.title')}</h3>
            <div className="space-y-4">
              {(t('systemicOrder.therapeuticApproach.assessment.steps', { returnObjects: true }) as string[]).map((step: string, index: number) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                    <span className="text-slate-700 font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed pt-1">
                    <strong>{step.split(':')[0]}:</strong> {step.split(':')[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Intervención */}
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">{t('systemicOrder.therapeuticApproach.intervention.title')}</h3>
            <div className="space-y-3">
              {(t('systemicOrder.therapeuticApproach.intervention.protocol', { returnObjects: true }) as string[]).map((step: string, index: number) => (
                <div key={index} className="bg-white/70 rounded-lg p-4">
                  <p className="text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CourseSection>

      <CourseSection title={t('systemicOrder.therapeuticApproach.phrases.title')} icon={<LightBulbIcon />}>
        <div className="space-y-8">
          
          {/* Frases para Primer Hijo */}
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Frases Sanadoras para el Primer Hijo</h3>
            <div className="space-y-3">
              {(t('systemicOrder.therapeuticApproach.phrases.firstChild', { returnObjects: true }) as string[]).map((phrase: string, index: number) => (
                <div key={index} className="bg-white/70 rounded-lg p-3">
                  <p className="text-slate-700 italic">{phrase}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Frases para Segundo Hijo */}
          <div className="bg-gradient-to-r from-green-50 to-slate-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Frases Sanadoras para el Segundo Hijo</h3>
            <div className="space-y-3">
              {(t('systemicOrder.therapeuticApproach.phrases.secondChild', { returnObjects: true }) as string[]).map((phrase: string, index: number) => (
                <div key={index} className="bg-white/70 rounded-lg p-3">
                  <p className="text-slate-700 italic">{phrase}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Frases para Hermano Fallecido */}
          <div className="bg-gradient-to-r from-rose-50 to-slate-50 rounded-2xl p-6 border-l-4 border-rose-300">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Frases Sanadoras para Niños con Hermano Fallecido</h3>
            <div className="space-y-3">
              {(t('systemicOrder.therapeuticApproach.phrases.withDeadSibling', { returnObjects: true }) as string[]).map((phrase: string, index: number) => (
                <div key={index} className="bg-white/70 rounded-lg p-3">
                  <p className="text-slate-700 italic">{phrase}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nota Final */}
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200 text-center">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Recordatorio Fundamental</h3>
            <p className="text-slate-700 leading-relaxed text-lg">
              El trabajo sistémico requiere honrar a todos los miembros del sistema, especialmente a los excluidos. 
              Cada niño tiene un lugar único e irrepetible en su familia, y nuestro trabajo es ayudarlo a encontrar 
              y ocupar ese lugar con amor y dignidad, liberándolo de cargas que no le corresponden.
            </p>
          </div>
        </div>
      </CourseSection>
    </div>
  );
};

export default SystemicOrder;