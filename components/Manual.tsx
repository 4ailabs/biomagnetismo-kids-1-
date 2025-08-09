import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  BookOpen, 
  Beaker, 
  Sparkles, 
  Users, 
  AlertTriangle, 
  GraduationCap, 
  Brain, 
  Download,
  Baby,
  Rocket,
  Target
} from 'lucide-react';
import { SectionTitle, SubSectionTitle, MinorSectionTitle, ConflictTitle, StyledTable } from './manual/index';

// Función para abrir archivos en nueva pestaña
const openFileInNewTab = (url: string) => {
  window.open(url, '_blank');
};

const handleResourceAction = (type: string) => {
  if (type === 'pares') {
    openFileInNewTab('/resources/lista-pares-biomagneticos.html');
  }
};

const ManualHeader = () => {
    const { t } = useTranslation();
    
    return (
        <header className="text-center mb-12 sm:mb-16">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 sm:p-10">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full shadow-lg mb-6 sm:mb-8">
                    <span className="text-2xl sm:text-3xl">📚</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight pb-2">
                    {t('header.title')}
                </h1>
                <p className="mt-6 sm:mt-8 text-lg sm:text-xl lg:text-2xl text-slate-700 max-w-4xl mx-auto font-medium px-4 leading-relaxed">
                    {t('header.subtitle')}
                </p>
                <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4 text-sm sm:text-base text-slate-500">
                    <span className="flex items-center bg-slate-100 rounded-full px-4 sm:px-5 py-2">
                        <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 sm:mr-3"></span>
                        {t('header.course')}
                    </span>
                    <span className="flex items-center bg-slate-100 rounded-full px-4 sm:px-5 py-2">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 sm:mr-3"></span>
                        {t('header.modality')}
                    </span>
                    <span className="flex items-center bg-slate-100 rounded-full px-4 sm:px-5 py-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 sm:mr-3"></span>
                        {t('header.duration')}
                    </span>
                </div>
            </div>
        </header>
    );
};

const ModuleStructure = () => {
    const { t } = useTranslation();
    
    return (
        <section className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 sm:p-10 mb-12">
            <SubSectionTitle title={t('moduleStructure.objective')} />
             <blockquote className="border-l-4 border-teal-500 pl-6 py-6 my-8 text-lg sm:text-xl text-slate-700 bg-gradient-to-r from-teal-50 to-blue-50 rounded-r-xl shadow-md">
                {t('moduleStructure.objectiveText')}
            </blockquote>

            <SubSectionTitle title={t('moduleStructure.structureTitle')} />
            <div className="mt-8">
                <StyledTable 
                    headers={[t('moduleStructure.tableHeaders.block'), t('moduleStructure.tableHeaders.topic'), t('moduleStructure.tableHeaders.focus')]}
                    data={[
                        [<strong key="b1" className="text-teal-700">1</strong>, t('moduleStructure.blocks.block1.title'), t('moduleStructure.blocks.block1.focus')],
                        [<strong key="b2" className="text-teal-700">2</strong>, t('moduleStructure.blocks.block2.title'), t('moduleStructure.blocks.block2.focus')],
                        [<strong key="b3" className="text-teal-700">3</strong>, t('moduleStructure.blocks.block3.title'), t('moduleStructure.blocks.block3.focus')],
                        [<strong key="b4" className="text-teal-700">4</strong>, t('moduleStructure.blocks.block4.title'), t('moduleStructure.blocks.block4.focus')],
                        [<strong key="b5" className="text-teal-700">5</strong>, t('moduleStructure.blocks.block5.title'), t('moduleStructure.blocks.block5.focus')],
                    ]}
                />
            </div>
        </section>
    );
};

const Block1Content = () => {
    const { t } = useTranslation();
    
    return (
        <>
            <SectionTitle id="block-1" icon={<BookOpen className="w-8 h-8" />} title={t('block1.title')} />
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 sm:p-10 space-y-10">
                <SubSectionTitle title={t('block1.fundamentals.title')} />
                <MinorSectionTitle title={t('block1.fundamentals.bioelectricField.title')} />
                <p className="text-base sm:text-lg leading-relaxed">{t('block1.fundamentals.bioelectricField.content')}</p>
                <MinorSectionTitle title={t('block1.fundamentals.principles.title')} />
                <ul className="list-disc list-outside ml-6 space-y-3 text-base sm:text-lg">
                    <li><strong>{t('block1.fundamentals.principles.resonance')}</strong></li>
                    <li><strong>{t('block1.fundamentals.principles.imprint')}</strong></li>
                    <li><strong>{t('block1.fundamentals.principles.plasticity')}</strong></li>
                </ul>

                <SubSectionTitle title={t('block1.conflicts.title')} />
                <ConflictTitle color="bg-red-500" title={t('block1.conflicts.survival.title')} />
                <p className="text-base sm:text-lg leading-relaxed mb-6">{t('block1.conflicts.survival.content')}</p>

                <ConflictTitle color="bg-orange-500" title={t('block1.conflicts.protection.title')} />
                <p className="text-base sm:text-lg leading-relaxed mb-6">{t('block1.conflicts.protection.content')}</p>

                <ConflictTitle color="bg-yellow-400" title={t('block1.conflicts.separation.title')} />
                <p className="text-base sm:text-lg leading-relaxed mb-6">{t('block1.conflicts.separation.content')}</p>

                <ConflictTitle color="bg-green-500" title={t('block1.conflicts.identity.title')} />
                <p className="text-base sm:text-lg leading-relaxed mb-6">{t('block1.conflicts.identity.content')}</p>

                <ConflictTitle color="bg-blue-500" title={t('block1.conflicts.territory.title')} />
                <p className="text-base sm:text-lg leading-relaxed mb-8">{t('block1.conflicts.territory.content')}</p>

                <SubSectionTitle title={t('block1.systemicApproach.title')} />
                <p className="text-base sm:text-lg leading-relaxed mb-6">
                    {t('block1.systemicApproach.intro')}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <h5 className="font-semibold text-slate-800 mb-3 flex items-center">
                            <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                            {t('block1.systemicApproach.principles.interconnection.title')}
                        </h5>
                        <p className="text-sm text-slate-700">
                            {t('block1.systemicApproach.principles.interconnection.content')}
                        </p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <h5 className="font-semibold text-slate-800 mb-3 flex items-center">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                            {t('block1.systemicApproach.principles.generational.title')}
                        </h5>
                        <p className="text-sm text-slate-700">
                            {t('block1.systemicApproach.principles.generational.content')}
                        </p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <h5 className="font-semibold text-slate-800 mb-3 flex items-center">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                            {t('block1.systemicApproach.principles.sensitivity.title')}
                        </h5>
                        <p className="text-sm text-slate-700">
                            {t('block1.systemicApproach.principles.sensitivity.content')}
                        </p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <h5 className="font-semibold text-slate-800 mb-3 flex items-center">
                            <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                            {t('block1.systemicApproach.principles.resonance.title')}
                        </h5>
                        <p className="text-sm text-slate-700">
                            {t('block1.systemicApproach.principles.resonance.content')}
                        </p>
                    </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg border-l-4 border-teal-500">
                    <p className="text-sm text-slate-700 leading-relaxed">
                        <strong>{t('block1.systemicApproach.approach')}</strong>
                    </p>
                </div>

                <SubSectionTitle title={t('block1.gestationalShocks.title')} />
                <StyledTable
                    headers={t('block1.gestationalShocks.headers', { returnObjects: true }) as string[]}
                    data={t('block1.gestationalShocks.data', { returnObjects: true }) as string[][]}
                />

                <SubSectionTitle title={t('block1.vitalSensations.title')} />
                <p className="text-base sm:text-lg leading-relaxed mb-6">
                    {t('block1.vitalSensations.intro')}
                </p>
                
                <MinorSectionTitle title={t('block1.vitalSensations.contextTitle')} />
                <p className="text-base sm:text-lg leading-relaxed mb-6">
                    {t('block1.vitalSensations.contextIntro')}
                </p>
                
                <ul className="list-disc list-outside ml-6 space-y-3 text-base sm:text-lg">
                    {(t('block1.vitalSensations.sensations', { returnObjects: true }) as string[]).map((sensation: string, index: number) => (
                        <li key={index}><strong>{sensation}</strong></li>
                    ))}
                </ul>

                <SubSectionTitle title={t('block1.belongingLaws.title')} />
                <p className="text-base sm:text-lg leading-relaxed mb-6">
                    {t('block1.belongingLaws.intro')}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <h5 className="font-semibold text-slate-800 mb-3 flex items-center">
                            <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                            {t('block1.belongingLaws.laws.loyalty.title')}
                        </h5>
                        <p className="text-sm text-slate-700">
                            {t('block1.belongingLaws.laws.loyalty.content')}
                        </p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <h5 className="font-semibold text-slate-800 mb-3 flex items-center">
                            <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                            {t('block1.belongingLaws.laws.sacrifice.title')}
                        </h5>
                        <p className="text-sm text-slate-700">
                            {t('block1.belongingLaws.laws.sacrifice.content')}
                        </p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <h5 className="font-semibold text-slate-800 mb-3 flex items-center">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                            {t('block1.belongingLaws.laws.guilt.title')}
                        </h5>
                        <p className="text-sm text-slate-700">
                            {t('block1.belongingLaws.laws.guilt.content')}
                        </p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <h5 className="font-semibold text-slate-800 mb-3 flex items-center">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                            {t('block1.belongingLaws.laws.direction.title')}
                        </h5>
                        <p className="text-sm text-slate-700">
                            {t('block1.belongingLaws.laws.direction.content')}
                        </p>
                    </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg border-l-4 border-teal-500">
                    <p className="text-sm text-slate-700 leading-relaxed">
                        <strong>{t('block1.belongingLaws.therapeutic')}</strong>
                    </p>
                </div>
            </div>
        </>
    );
};

const Block2Content = () => {
    const { t } = useTranslation();
    
    return (
        <>
            <SectionTitle id="block-2" icon={<Beaker className="w-8 h-8" />} title={t('block2.title')} />
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 space-y-8">
                <SubSectionTitle title={t('block2.tracing.title')} />
                <p>{t('block2.tracing.traumaPoint')}</p>
                <p>{t('block2.tracing.resonancePoint')}</p>
                <MinorSectionTitle title={t('block2.algorithm.title')} />
                <ol className="list-decimal list-outside ml-5 space-y-2">
                    {(t('block2.algorithm.steps', { returnObjects: true }) as string[]).map((step: string, index: number) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>

                <SubSectionTitle title={t('block2.keyPoints.title')} />
                <ul className="list-disc list-outside ml-5 space-y-3">
                    {(t('block2.keyPoints.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
                        <li key={index}><strong>{point.split(':')[0]}:</strong> {point.split(':')[1]}</li>
                    ))}
                </ul>

                <SubSectionTitle title={t('block2.adaptations.title')} />
                <MinorSectionTitle title={t('block2.adaptations.safety.title')} />
                <p>{t('block2.adaptations.safety.content')}</p>
                <MinorSectionTitle title={t('block2.adaptations.technical.title')} />
                <p>{t('block2.adaptations.technical.content')}</p>
            </div>
        </>
    );
};

const Block3Content = () => {
    const { t } = useTranslation();
    
    return (
        <>
            <SectionTitle id="block-3" icon={<Baby className="w-8 h-8" />} title={t('block3.title')} />
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 space-y-8">
                <SubSectionTitle title={t('block3.characteristics.title')} />
                <p>{t('block3.characteristics.content')}</p>
                
                <SubSectionTitle title={t('block3.pathologies.title')} />
                <MinorSectionTitle title={t('block3.pathologies.digestive.title')} />
                <ul className="list-disc list-outside ml-5 space-y-2">
                    <li><strong>{t('block3.pathologies.digestive.colic')}</strong></li>
                    <li><strong>{t('block3.pathologies.digestive.reflux')}</strong></li>
                    <li><strong>{t('block3.pathologies.digestive.jaundice')}</strong></li>
                </ul>
                <MinorSectionTitle title={t('block3.pathologies.dermatological.title')} />
                <ul className="list-disc list-outside ml-5 space-y-2">
                    <li><strong>{t('block3.pathologies.dermatological.dermatitis')}</strong></li>
                </ul>
                
                <SubSectionTitle title={t('block3.biomagneticPairs.title')} />
                <StyledTable
                    headers={t('block3.biomagneticPairs.headers', { returnObjects: true }) as string[]}
                    data={t('block3.biomagneticPairs.data', { returnObjects: true }) as string[][]}
                />
            </div>
        </>
    );
};

const Block4Content = () => {
    const { t } = useTranslation();
    
    return (
        <>
            <SectionTitle id="block-4" icon={<Rocket className="w-8 h-8" />} title={t('block4.title')} />
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 space-y-8">
                <SubSectionTitle title={t('block4.changes.title')} />
                <p>{t('block4.changes.content')}</p>
                
                <SubSectionTitle title={t('block4.postnatalShocks.title')} />
                <ul className="list-disc list-outside ml-5 space-y-3">
                    {(t('block4.postnatalShocks.shocks', { returnObjects: true }) as string[]).map((shock: string, index: number) => (
                        <li key={index}><strong>{shock.split(':')[0]}:</strong> {shock.split(':')[1]}</li>
                    ))}
                </ul>

                <SubSectionTitle title={t('block4.protocols.title')} />
                <StyledTable 
                    headers={t('block4.protocols.headers', { returnObjects: true }) as string[]}
                    data={t('block4.protocols.data', { returnObjects: true }) as string[][]}
                />
            </div>
        </>
    );
};

const Block5Content = () => {
    const { t } = useTranslation();
    
    return (
        <>
            <SectionTitle id="block-5" icon={<Target className="w-8 h-8" />} title={t('block5.title')} />
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 space-y-8">
                <SubSectionTitle title={t('block5.integration.title')} />
                <p>{t('block5.integration.content')}</p>

                <SubSectionTitle title={t('block5.systemicApproach.title')} />
                <p>{t('block5.systemicApproach.content')}</p>
            </div>
        </>
    );
};

const BioenergeticProtocol = () => {
    const { t } = useTranslation();
    
    return (
        <>
            <SectionTitle id="bioenergetic-protocol" icon={<Brain className="w-8 h-8" />} title={t('bioenergeticProtocol.title')} />
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 sm:p-10 space-y-10">
                <SubSectionTitle title={t('bioenergeticProtocol.fundamentals.title')} />
                <p className="text-base sm:text-lg leading-relaxed mb-6">
                    {t('bioenergeticProtocol.fundamentals.content')}
                </p>

                <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6 border-l-4 border-teal-500">
                    <h4 className="font-bold text-slate-800 mb-4 text-center">{t('bioenergeticProtocol.objective.title')}</h4>
                    <p className="text-sm text-slate-700 leading-relaxed">
                        {t('bioenergeticProtocol.objective.content')}
                    </p>
                </div>

                <SubSectionTitle title={t('bioenergeticProtocol.steps.title')} />
                
                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                            <span className="text-teal-600 text-sm font-bold">1</span>
                        </div>
                        <div>
                            <h5 className="font-semibold text-slate-800 mb-2">{t('bioenergeticProtocol.steps.identification.title')}</h5>
                            <p className="text-sm text-slate-700 leading-relaxed">
                                {t('bioenergeticProtocol.steps.identification.content')}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 text-sm font-bold">2</span>
                        </div>
                        <div>
                            <h5 className="font-semibold text-slate-800 mb-2">{t('bioenergeticProtocol.steps.recession.title')}</h5>
                            <p className="text-sm text-slate-700 leading-relaxed">
                                {t('bioenergeticProtocol.steps.recession.content')}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                            <span className="text-purple-600 text-sm font-bold">3</span>
                        </div>
                        <div>
                            <h5 className="font-semibold text-slate-800 mb-2">{t('bioenergeticProtocol.steps.selection.title')}</h5>
                            <p className="text-sm text-slate-700 leading-relaxed">
                                {t('bioenergeticProtocol.steps.selection.content')}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                            <span className="text-pink-600 text-sm font-bold">4</span>
                        </div>
                        <div>
                            <h5 className="font-semibold text-slate-800 mb-2">{t('bioenergeticProtocol.steps.application.title')}</h5>
                            <p className="text-sm text-slate-700 leading-relaxed">
                                {t('bioenergeticProtocol.steps.application.content')}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-600 text-sm font-bold">5</span>
                        </div>
                        <div>
                            <h5 className="font-semibold text-slate-800 mb-2">{t('bioenergeticProtocol.steps.consciousness.title')}</h5>
                            <p className="text-sm text-slate-700 leading-relaxed">
                                {t('bioenergeticProtocol.steps.consciousness.content')}
                            </p>
                        </div>
                    </div>
                </div>

                <SubSectionTitle title={t('bioenergeticProtocol.considerations.title')} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <h5 className="font-semibold text-slate-800 mb-3 flex items-center">
                            <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                            {t('bioenergeticProtocol.considerations.muscleTest.title')}
                        </h5>
                        <p className="text-sm text-slate-700">
                            {t('bioenergeticProtocol.considerations.muscleTest.content')}
                        </p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <h5 className="font-semibold text-slate-800 mb-3 flex items-center">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                            {t('bioenergeticProtocol.considerations.recession.title')}
                        </h5>
                        <p className="text-sm text-slate-700">
                            {t('bioenergeticProtocol.considerations.recession.content')}
                        </p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <h5 className="font-semibold text-slate-800 mb-3 flex items-center">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                            {t('bioenergeticProtocol.considerations.selection.title')}
                        </h5>
                        <p className="text-sm text-slate-700">
                            {t('bioenergeticProtocol.considerations.selection.content')}
                        </p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <h5 className="font-semibold text-slate-800 mb-3 flex items-center">
                            <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                            {t('bioenergeticProtocol.considerations.consciousness.title')}
                        </h5>
                        <p className="text-sm text-slate-700">
                            {t('bioenergeticProtocol.considerations.consciousness.content')}
                        </p>
                    </div>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg border-l-4 border-teal-500">
                    <p className="text-sm text-slate-700 leading-relaxed">
                        <strong>{t('bioenergeticProtocol.integrated')}</strong>
                    </p>
                </div>
            </div>
        </>
    );
};

const ManualFooter = () => {
    const { t } = useTranslation();
    
    return (
        <div className="text-center mt-8 sm:mt-12">
            <div className="bg-gradient-to-r from-teal-50 via-blue-50 to-purple-50 rounded-2xl shadow-xl border border-white/20 p-6 sm:p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg mb-4 sm:mb-6">
                    <span className="text-xl sm:text-2xl">🎉</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 sm:mb-4 leading-tight pb-1">
                    {t('footer.title')}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-slate-700 max-w-3xl mx-auto mb-4 sm:mb-6 px-4 leading-relaxed">
                    {t('footer.content')}
                </p>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-600 mb-6">
                    <span className="flex items-center bg-white/80 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full mr-1.5 sm:mr-2"></span>
                        {t('footer.badges.completed')}
                    </span>
                    <span className="flex items-center bg-white/80 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mr-1.5 sm:mr-2"></span>
                        {t('footer.badges.certification')}
                    </span>
                    <span className="flex items-center bg-white/80 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full mr-1.5 sm:mr-2"></span>
                        {t('footer.badges.nextModule')}
                    </span>
                </div>
                <div className="border-t border-white/20 pt-4 sm:pt-6">
                    <div className="bg-white/60 rounded-xl p-3 sm:p-4">
                        <p className="text-teal-700 font-semibold text-sm sm:text-base"><strong>{t('footer.author.title')}</strong> {t('footer.author.name')}</p>
                        <p className="text-teal-600 text-xs sm:text-sm mt-1">{t('footer.author.institute')}</p>
                        <p className="text-teal-600 text-xs sm:text-sm">{t('footer.author.website')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Manual: React.FC = () => {
    return (
        <article className="space-y-12 sm:space-y-16">
            <ManualHeader />
            <ModuleStructure />
            <Block1Content />
            <Block2Content />
            <Block3Content />
            <Block4Content />
            <Block5Content />
            <BioenergeticProtocol />
            <ManualFooter />
        </article>
    );
};

export default Manual;