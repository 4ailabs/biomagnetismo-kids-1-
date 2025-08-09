import React from 'react';
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

const ManualHeader = () => (
    <header className="text-center mb-12 sm:mb-16">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 sm:p-10">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full shadow-lg mb-6 sm:mb-8">
                <span className="text-2xl sm:text-3xl">📚</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight pb-2">
                MÓDULO 1
            </h1>
            <p className="mt-6 sm:mt-8 text-lg sm:text-xl lg:text-2xl text-slate-700 max-w-4xl mx-auto font-medium px-4 leading-relaxed">
                "El Inicio Invisible: Cuando la Historia Empieza Antes de Nacer"
            </p>
            <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4 text-sm sm:text-base text-slate-500">
                <span className="flex items-center bg-slate-100 rounded-full px-4 sm:px-5 py-2">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 sm:mr-3"></span>
                    Curso: Biomagnetismo Kids
                </span>
                <span className="flex items-center bg-slate-100 rounded-full px-4 sm:px-5 py-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 sm:mr-3"></span>
                    Modalidad: Clase online
                </span>
                <span className="flex items-center bg-slate-100 rounded-full px-4 sm:px-5 py-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 sm:mr-3"></span>
                    Duración: 8 horas
                </span>
            </div>
        </div>
    </header>
);

const ModuleStructure = () => (
    <section className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 sm:p-10 mb-12">
        <SubSectionTitle title="Objetivo General del Módulo" />
         <blockquote className="border-l-4 border-teal-500 pl-6 py-6 my-8 text-lg sm:text-xl text-slate-700 bg-gradient-to-r from-teal-50 to-blue-50 rounded-r-xl shadow-md">
            Comprender cómo las experiencias gestacionales y perinatales influyen en el campo energético del bebé, aprendiendo a identificar, rastrear y equilibrar los desequilibrios mediante pares biomagnéticos específicos para cada etapa de desarrollo.
        </blockquote>

        <SubSectionTitle title="Estructura del Módulo" />
        <div className="mt-8">
            <StyledTable 
                headers={['Bloque', 'Tema', 'Duración', 'Enfoque Principal']}
                data={[
                    [<strong key="b1" className="text-teal-700">1</strong>, 'Vida Intrauterina y Conflictos Biológicos', '70 min', 'Fundamentos teóricos'],
                    [<strong key="b2" className="text-teal-700">2</strong>, 'Rastreo y Protocolos en Gestación', '80 min', 'Técnicas de aplicación'],
                    [<strong key="b3" className="text-teal-700">3</strong>, 'Recién Nacido (0-1 mes)', '70 min', 'Patologías específicas'],
                    [<strong key="b4" className="text-teal-700">4</strong>, 'Desarrollo (1-3 meses)', '60 min', 'Shocks postnatales'],
                    [<strong key="b5" className="text-teal-700">5</strong>, 'Integración Sistémica', '40 min', 'Visión holística'],
                ]}
            />
        </div>
    </section>
);

const Block1Content = () => (
    <>
        <SectionTitle id="block-1" icon={<BookOpen className="w-8 h-8" />} title="BLOQUE 1: Vida Intrauterina y Conflictos Biológicos" />
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 sm:p-10 space-y-10">
            <SubSectionTitle title="Fundamentos Teóricos" />
            <MinorSectionTitle title="El Campo Bioeléctrico Materno-Fetal" />
            <p className="text-base sm:text-lg leading-relaxed">Durante la gestación, madre y bebé forman un <strong>ecosistema energético unificado</strong>. Todo cambio en el campo magnético materno genera resonancia directa en el sistema energético fetal. El bebé absorbe todas las vibraciones maternas con permeabilidad total, mientras sus tejidos registran eventos significativos creando memoria celular. Esta etapa se caracteriza por una plasticidad máxima que permite gran capacidad de adaptación, pero también por una vulnerabilidad extrema a desequilibrios externos.</p>
            <MinorSectionTitle title="Principios Fundamentales" />
            <ul className="list-disc list-outside ml-6 space-y-3 text-base sm:text-lg">
                <li><strong>Ley de Resonancia Materno-Filial:</strong> Todo lo que siente la madre, lo vive el bebé.</li>
                <li><strong>Ley de Impronta Energética:</strong> Los primeros 100 días definen el 70% del patrón energético adulto.</li>
                <li><strong>Ley de Plasticidad Decreciente:</strong> La capacidad de modificación energética es máxima al nacer.</li>
            </ul>

            <SubSectionTitle title="Los 5 Conflictos Biológicos Fundamentales" />
            <ConflictTitle color="bg-red-500" title="CONFLICTO DE SUPERVIVENCIA" />
            <p className="text-base sm:text-lg leading-relaxed mb-6">Este conflicto se activa cuando existe una amenaza real o percibida a la continuidad del embarazo. Las manifestaciones incluyen amenaza de aborto, hemorragias gestacionales, diagnósticos médicos graves y accidentes. El par biomagnético principal es <strong>Suprarrenal - Riñón Derecho</strong>, y su efecto en el bebé se traduce en hipervigilancia, estrés crónico y trastornos del sueño.</p>

            <ConflictTitle color="bg-orange-500" title="CONFLICTO DE PROTECCIÓN" />
            <p className="text-base sm:text-lg leading-relaxed mb-6">Se presenta cuando el entorno es percibido como inseguro o hostil. Incluye situaciones de violencia, agresiones y entornos caóticos. El par principal es <strong>Temporal - Temporal</strong>, manifestándose en el bebé como hipertonía muscular, sobresaltos e hipersensibilidad auditiva.</p>

            <ConflictTitle color="bg-yellow-400" title="CONFLICTO DE SEPARACIÓN" />
            <p className="text-base sm:text-lg leading-relaxed mb-6">Surge por separación física o emocional de figuras importantes. Abarca hospitalización, ausencia del padre, duelo y aislamiento. Se trabaja con <strong>Plexo Solar - Riñón Izquierdo</strong>, generando en el bebé cólicos, dificultades alimentarias y letargia.</p>

            <ConflictTitle color="bg-green-500" title="CONFLICTO DE IDENTIDAD" />
            <p className="text-base sm:text-lg leading-relaxed mb-6">Aparece cuando hay dudas sobre la deseabilidad o identidad del bebé. Incluye embarazo no deseado y expectativas no cumplidas. El par <strong>Hipófisis - Pineal</strong> trabaja estos aspectos, pudiendo causar trastornos del crecimiento y problemas hormonales.</p>

            <ConflictTitle color="bg-blue-500" title="CONFLICTO DE TERRITORIO" />
            <p className="text-base sm:text-lg leading-relaxed mb-8">Se desarrolla por pérdida o amenaza del espacio vital seguro. Engloba mudanzas, pérdida de vivienda y cambios drásticos. El par <strong>Bulbo - Cerebelo</strong> genera en el bebé irritabilidad y dificultades de adaptación.</p>

            <SubSectionTitle title="Lista Completa: 20 Shocks Vivenciales Gestacionales y sus Pares" />
            <div className="mt-8">
                <StyledTable 
                    headers={['#', 'Shock Vivencial', 'Pares Biomagnéticos', 'Beneficios Esperados']}
                    data={[
                        ['1', <strong key="s1">Amenaza de aborto</strong>, 'Suprarrenal–Suprarrenal / Pericardio–Suprarrenal', 'Fortalece eje vital y calma estrés'],
                        ['2', <strong key="s2">Diagnóstico médico alarmante</strong>, 'Bulbo–Suprarrenal / Timo–Suprarrenal', 'Regula sistema nervioso autónomo'],
                        ['3', <strong key="s3">Pérdida de un ser querido</strong>, 'Pericardio–Pulmón / Plexo–Riñón der', 'Libera tensión torácica y mejora energía central'],
                        ['4', <strong key="s4">Separación de pareja o sostén</strong>, 'Plexo–Riñón der / Suprarrenal–Plexo', 'Aumenta sensación de amparo'],
                        ['5', <strong key="s5">Violencia hacia la madre</strong>, 'Temporal izq–Temporal der / Bulbo–Plexo', 'Relaja sistema neurosensorial'],
                        ['6', <strong key="s6">Accidente o caída</strong>, 'Bulbo–Suprarrenal / Occipital–Sacro', 'Restablece coordinación neuromuscular'],
                        ['7', <strong key="s7">Hospitalización prolongada</strong>, 'Plexo–Riñón izq / Estómago–Estómago', 'Reduce tensión abdominal y mejora digestión'],
                        ['8', <strong key="s8">Ruptura de pareja</strong>, 'Suprarrenal–Plexo / Pericardio–Pulmón', 'Refuerza energía vital'],
                        ['9', <strong key="s9">Inseguridad económica</strong>, 'Plexo–Riñón der / Hígado–Páncreas', 'Aumenta confianza y estabilidad'],
                        ['10', <strong key="s10">Embarazo no deseado</strong>, 'Timo–Suprarrenal / Plexo–Riñón izq', 'Refuerza energía de aceptación'],
                        ['11', <strong key="s11">Enfermedad grave de madre</strong>, 'Bulbo–Suprarrenal / Corazón–Suprarrenal', 'Mejora regulación autonómica'],
                        ['12', <strong key="s12">Amenaza de parto prematuro</strong>, 'Hipófisis–Suprarrenal / Plexo–Riñón der', 'Estabiliza energía endocrina'],
                        ['13', <strong key="s13">Malformación fetal</strong>, 'Timo–Suprarrenal / Pericardio–Pulmón', 'Favorece aceptación emocional'],
                        ['14', <strong key="s14">Conflictos familiares</strong>, 'Plexo–Riñón der / Temporal izq–Temporal der', 'Potencia resiliencia mental'],
                        ['15', <strong key="s15">Embarazo tras pérdida</strong>, 'Suprarrenal–Suprarrenal / Pericardio–Plexo', 'Disminuye ansiedad anticipatoria'],
                        ['16', <strong key="s16">Infección grave</strong>, 'Bulbo–Suprarrenal / Hígado–Bazo', 'Apoya recuperación energética'],
                        ['17', <strong key="s17">Estrés laboral extremo</strong>, 'Suprarrenal–Plexo / Estómago–Estómago', 'Calma mental y aumenta energía'],
                        ['18', <strong key="s18">Intervenciones invasivas</strong>, 'Plexo–Riñón der / Bulbo–Plexo', 'Reduce tensión somática'],
                        ['19', <strong key="s19">Catástrofe natural</strong>, 'Bulbo–Suprarrenal / Temporal izq–Temporal der', 'Restaura seguridad'],
                        ['20', <strong key="s20">Aislamiento social extremo</strong>, 'Plexo–Riñón izq / Timo–Plexo', 'Refuerza sensación de conexión'],
                    ]}
                />
            </div>
            <MinorSectionTitle title="Sensaciones Vitales Prenatales" />
            <p className="text-base sm:text-lg leading-relaxed mb-6">
                Las sensaciones vitales prenatales son experiencias emocionales profundas de la madre que se transmiten directamente al bebé durante la gestación, creando patrones energéticos que influyen en su desarrollo y pueden manifestarse como desequilibrios específicos.
            </p>
            
            {/* Tabla de Sensaciones Vitales Prenatales */}
            <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-2xl p-6 sm:p-8 mb-8 border border-white/20">
                <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-6 text-center">Sensaciones Vitales en el Contexto Prenatal</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Amenaza de pérdida</span>
                        </div>
                        <p className="text-xs text-slate-600">Riesgo de aborto, hemorragias</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Inseguridad vital</span>
                        </div>
                        <p className="text-xs text-slate-600">Diagnósticos alarmantes, hospitalización</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Abandono emocional</span>
                        </div>
                        <p className="text-xs text-slate-600">Ausencia del padre, separación</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Violencia gestacional</span>
                        </div>
                        <p className="text-xs text-slate-600">Agresiones, maltrato</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Rechazo fetal</span>
                        </div>
                        <p className="text-xs text-slate-600">Embarazo no deseado, dudas</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Pérdida de sostén</span>
                        </div>
                        <p className="text-xs text-slate-600">Muerte de ser querido, duelo</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Inestabilidad económica</span>
                        </div>
                        <p className="text-xs text-slate-600">Pérdida de trabajo, crisis</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Trauma físico</span>
                        </div>
                        <p className="text-xs text-slate-600">Accidentes, caídas, intervenciones</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Aislamiento social</span>
                        </div>
                        <p className="text-xs text-slate-600">Soledad, falta de apoyo</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Miedo al parto</span>
                        </div>
                        <p className="text-xs text-slate-600">Ansiedad, terror al nacimiento</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Culpa materna</span>
                        </div>
                        <p className="text-xs text-slate-600">Responsabilidad, auto-reproche</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Conflicto de identidad</span>
                        </div>
                        <p className="text-xs text-slate-600">Dudas sobre el rol materno</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Pérdida de control</span>
                        </div>
                        <p className="text-xs text-slate-600">Impotencia, dependencia</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Infección gestacional</span>
                        </div>
                        <p className="text-xs text-slate-600">Enfermedades, virus</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Estrés extremo</span>
                        </div>
                        <p className="text-xs text-slate-600">Trabajo, presión familiar</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Malformación fetal</span>
                        </div>
                        <p className="text-xs text-slate-600">Diagnósticos de anomalías</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Parto prematuro</span>
                        </div>
                        <p className="text-xs text-slate-600">Amenaza de nacimiento temprano</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Pérdida previa</span>
                        </div>
                        <p className="text-xs text-slate-600">Abortos anteriores, miedo</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Catástrofe natural</span>
                        </div>
                        <p className="text-xs text-slate-600">Desastres, evacuación</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Conflicto familiar</span>
                        </div>
                        <p className="text-xs text-slate-600">Disputas, separación</p>
                    </div>
                </div>
                
                {/* Explicación */}
                <div className="mt-6 p-4 bg-white/60 rounded-lg border border-white/20">
                    <p className="text-sm text-slate-700 leading-relaxed">
                        <strong>Contexto Prenatal:</strong> Estas 21 sensaciones vitales están específicamente adaptadas al contexto de la gestación. 
                        Representan experiencias emocionales de la madre que se transmiten directamente al bebé, creando patrones energéticos 
                        que pueden manifestarse como desequilibrios específicos identificables mediante pares biomagnéticos. 
                        Cada sensación tiene su correlación directa con puntos corporales y pares específicos para el trabajo terapéutico.
                    </p>
                </div>
            </div>

            <MinorSectionTitle title="El Niño como Sistema Energético Familiar" />
            <p className="text-base sm:text-lg leading-relaxed mb-6">
                En biomagnetismo pediátrico, es fundamental comprender que el niño no existe de forma aislada, sino como parte de un <strong>sistema energético familiar</strong>. Su campo magnético está interconectado con el de sus padres, hermanos y entorno, creando un ecosistema energético que influye directamente en su desarrollo y salud.
            </p>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 sm:p-8 mb-8">
                <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-6 text-center">Principios del Enfoque Sistémico en Biomagnetismo</h4>
                
                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                            <span className="text-teal-600 text-sm font-bold">1</span>
                        </div>
                        <div>
                            <h5 className="font-semibold text-slate-800 mb-2">Interconexión Energética Familiar</h5>
                            <p className="text-sm text-slate-700 leading-relaxed">
                                El campo energético del niño está directamente conectado con el de sus padres y hermanos. Los desequilibrios familiares se reflejan en el sistema energético infantil, requiriendo un abordaje que considere el sistema completo, no solo al niño de forma aislada.
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 text-sm font-bold">2</span>
                        </div>
                        <div>
                            <h5 className="font-semibold text-slate-800 mb-2">Transmisión Generacional de Patrones</h5>
                            <p className="text-sm text-slate-700 leading-relaxed">
                                Los patrones energéticos se transmiten de generación en generación. Conflictos no resueltos de los padres o abuelos pueden manifestarse en el niño como síntomas específicos, requiriendo pares biomagnéticos que aborden tanto el síntoma actual como su origen familiar.
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                            <span className="text-purple-600 text-sm font-bold">3</span>
                        </div>
                        <div>
                            <h5 className="font-semibold text-slate-800 mb-2">Sensibilidad al Campo Familiar</h5>
                            <p className="text-sm text-slate-700 leading-relaxed">
                                Los niños actúan como "antenas" del sistema familiar, captando y manifestando desequilibrios que otros miembros no perciben. Su mayor sensibilidad energética los convierte en indicadores precisos del estado del sistema familiar completo.
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                            <span className="text-pink-600 text-sm font-bold">4</span>
                        </div>
                        <div>
                            <h5 className="font-semibold text-slate-800 mb-2">Efecto Resonancia Sistémica</h5>
                            <p className="text-sm text-slate-700 leading-relaxed">
                                Cuando se equilibra el campo energético del niño, se produce una resonancia que afecta positivamente al sistema familiar completo. El biomagnetismo pediátrico puede catalizar cambios energéticos en toda la familia, creando un efecto terapéutico multiplicador.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="mt-8 p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg border-l-4 border-teal-500">
                    <p className="text-sm text-slate-700 leading-relaxed">
                        <strong>Abordaje Sistémico:</strong> El trabajo con niños requiere evaluar el sistema familiar completo. 
                        Los pares biomagnéticos deben seleccionarse considerando no solo los síntomas del niño, sino también los patrones familiares subyacentes, creando un efecto terapéutico que beneficie al sistema familiar en su totalidad.
                    </p>
                </div>
            </div>

            <MinorSectionTitle title="Leyes de Pertenencia y Sistémicas del Niño" />
            <p className="text-base sm:text-lg leading-relaxed mb-6">
                En el contexto del biomagnetismo pediátrico, es fundamental comprender las <strong>leyes de pertenencia</strong> que rigen el sistema familiar y cómo estas se manifiestan en el campo energético del niño. Estas leyes determinan la dinámica energética familiar y los patrones que pueden manifestarse como síntomas específicos.
            </p>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 sm:p-8 mb-8">
                <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-6 text-center">Leyes Fundamentales de Pertenencia Sistémica</h4>
                
                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                            <span className="text-red-600 text-sm font-bold">1</span>
                        </div>
                        <div>
                            <h5 className="font-semibold text-slate-800 mb-2">Ley de Lealtad Familiar</h5>
                            <p className="text-sm text-slate-700 leading-relaxed">
                                <strong>"Te seguiré hasta la muerte"</strong> - El niño mantiene una lealtad energética absoluta hacia su sistema familiar. Esta lealtad puede manifestarse como síntomas que "siguen" patrones familiares, requiriendo pares biomagnéticos que aborden tanto la lealtad como el patrón subyacente.
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                            <span className="text-orange-600 text-sm font-bold">2</span>
                        </div>
                        <div>
                            <h5 className="font-semibold text-slate-800 mb-2">Ley de Sacrificio Sistémico</h5>
                            <p className="text-sm text-slate-700 leading-relaxed">
                                <strong>"Prefiero morir yo antes que tú, Mejor muero yo que tú"</strong> - Los niños pueden asumir energéticamente el sufrimiento de otros miembros del sistema familiar. Este sacrificio se manifiesta como síntomas que "protegen" a otros, requiriendo pares que liberen la carga sacrificial y restablezcan el equilibrio.
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                            <span className="text-yellow-600 text-sm font-bold">3</span>
                        </div>
                        <div>
                            <h5 className="font-semibold text-slate-800 mb-2">Ley de Reparación de Culpa</h5>
                            <p className="text-sm text-slate-700 leading-relaxed">
                                <strong>"Reparación de la culpa personal"</strong> - Los niños pueden manifestar síntomas que "reparan" culpas o conflictos no resueltos de generaciones anteriores. El biomagnetismo debe abordar tanto el síntoma actual como el patrón de culpa familiar subyacente.
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-600 text-sm font-bold">4</span>
                        </div>
                        <div>
                            <h5 className="font-semibold text-slate-800 mb-2">Ley de Dirección Energética</h5>
                            <p className="text-sm text-slate-700 leading-relaxed">
                                <strong>"Dirijo mi mirada hacia..."</strong> - Los niños dirigen su energía hacia patrones específicos del sistema familiar. Esta dirección puede manifestarse como síntomas que "miran" hacia conflictos no resueltos, requiriendo pares que reorienten la energía hacia patrones saludables.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 border border-white/20">
                    <h5 className="font-semibold text-slate-800 mb-4 text-center">Aplicación Biomagnética de las Leyes Sistémicas</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white/80 rounded-lg p-4">
                            <h6 className="font-semibold text-slate-800 mb-2">Pares para Lealtad Familiar</h6>
                            <p className="text-xs text-slate-700">Suprarrenal-Suprarrenal, Plexo-Riñón, Pericardio-Pulmón</p>
                        </div>
                        <div className="bg-white/80 rounded-lg p-4">
                            <h6 className="font-semibold text-slate-800 mb-2">Pares para Sacrificio Sistémico</h6>
                            <p className="text-xs text-slate-700">Timo-Suprarrenal, Bulbo-Plexo, Corazón-Suprarrenal</p>
                        </div>
                        <div className="bg-white/80 rounded-lg p-4">
                            <h6 className="font-semibold text-slate-800 mb-2">Pares para Reparación de Culpa</h6>
                            <p className="text-xs text-slate-700">Hipófisis-Pineal, Temporal-Temporal, Occipital-Sacro</p>
                        </div>
                        <div className="bg-white/80 rounded-lg p-4">
                            <h6 className="font-semibold text-slate-800 mb-2">Pares para Dirección Energética</h6>
                            <p className="text-xs text-slate-700">Bulbo-Cerebelo, Plexo-Riñón, Estómago-Estómago</p>
                        </div>
                    </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg border-l-4 border-teal-500">
                    <p className="text-sm text-slate-700 leading-relaxed">
                        <strong>Enfoque Terapéutico Sistémico:</strong> Al aplicar biomagnetismo pediátrico, es esencial identificar qué ley sistémica está activa en el niño. 
                        Los pares deben seleccionarse no solo para tratar síntomas físicos, sino para liberar patrones sistémicos que mantienen al niño en dinámicas familiares desequilibradas.
                    </p>
                </div>
            </div>
        </div>
    </>
);

const Block2Content = () => (
    <>
        <SectionTitle id="block-2" icon={<Beaker className="w-8 h-8" />} title="BLOQUE 2: Rastreo y Protocolos en Gestación" />
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 space-y-8">
            <SubSectionTitle title="Técnica de Rastreo Biomagnético" />
            <p>El <strong>Punto Trauma</strong> es la zona donde se aloja el desequilibrio energético, identificable porque provoca acortamiento de la extremidad derecha al colocar un imán negativo. Representa el epicentro del conflicto biológico.</p>
            <p>El <strong>Punto de Resonancia</strong> es la zona complementaria que equilibra el sistema. Al colocar el imán positivo, corrige el acortamiento. Los riñones actúan frecuentemente como puntos de resonancia universal.</p>
            <MinorSectionTitle title="Algoritmo de Rastreo" />
            <ol className="list-decimal list-outside ml-5 space-y-2">
                <li>Identificar shock vivencial.</li>
                <li>Localizar punto trauma con imán negativo.</li>
                <li>Buscar resonancia (simétrico, riñones, etc.).</li>
                <li>Confirmar nivelación de extremidades.</li>
                <li>Aplicar imanes 15-20 min. en gestantes.</li>
                <li>Verificar resultado post-tratamiento.</li>
            </ol>

            <SubSectionTitle title="Puntos Clave en Gestación" />
            <ul className="list-disc list-outside ml-5 space-y-3">
                <li><strong>Suprarrenal - Riñón Derecho:</strong> Estrés, ansiedad, hipertensión gestacional.</li>
                <li><strong>Hiato - Riñón Derecho:</strong> Reflujo, ansiedad digestiva ("no puedo tragar esta situación").</li>
                <li><strong>Plexo Solar - Riñón Izquierdo:</strong> Tristeza, duelo, separación emocional.</li>
                <li><strong>Hígado - Riñón Derecho:</strong> Sobrecarga tóxica, colestasis gestacional.</li>
                <li><strong>Occipital - Occipital:</strong> Tensión nerviosa, cefaleas, estrés mental.</li>
            </ul>

            <SubSectionTitle title="Adaptaciones para Embarazadas" />
            <MinorSectionTitle title="Precauciones de Seguridad" />
            <p>Contraindicaciones absolutas: evitar campos magnéticos intensos cerca del útero en primer trimestre, no colocar imanes en región pélvica con placenta previa, suspender en amenaza de parto prematuro, y derivar en preeclampsia severa.</p>
            <MinorSectionTitle title="Adaptaciones Técnicas" />
            <p>Usar gaussaje reducido (1000-3000 gauss), tiempo de exposición máximo 15-20 minutos, y evitar presión abdominal directa.</p>
        </div>
    </>
);

const Block3Content = () => (
    <>
        <SectionTitle id="block-3" icon={<Baby className="w-8 h-8" />} title="BLOQUE 3: Recién Nacido (0 a 1 Mes)" />
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 space-y-8">
            <SubSectionTitle title="Características del Sistema Energético Neonatal" />
            <p>El recién nacido presenta un sistema energético en transición, permeable, hipersensible y con memoria gestacional activa. Posee plasticidad extrema, respuesta rápida y una fuerte conexión materno-filial.</p>
            
            <SubSectionTitle title="Patologías Frecuentes en el Primer Mes" />
            <MinorSectionTitle title="Trastornos Digestivos" />
            <ul className="list-disc list-outside ml-5 space-y-2">
                <li><strong>Cólico del Lactante:</strong> Activación del plexo solar por estrés de separación. Par principal: <strong>Plexo Solar - Riñón Izquierdo</strong>.</li>
                <li><strong>Reflujo Gastroesofágico:</strong> Tensión en el hiato esofágico por ansiedad prenatal. Par principal: <strong>Hiato - Hiato</strong>.</li>
                <li><strong>Ictericia Fisiológica:</strong> Sobrecarga hepática. Par principal: <strong>Hígado - Riñón Derecho</strong>.</li>
            </ul>
            <MinorSectionTitle title="Trastornos Dermatológicos" />
            <ul className="list-disc list-outside ml-5 space-y-2">
                <li><strong>Dermatitis Atópica Neonatal:</strong> Activación del sistema inmune por separación. Par principal: <strong>Timo - Timo</strong>.</li>
            </ul>
            
            <SubSectionTitle title="Pares Biomagnéticos Clave en Neonatos" />
            <StyledTable
                headers={['Patología', 'Par Principal', 'Par Secundario', 'Par Terciario']}
                data={[
                    ['Cólico del lactante', 'Plexo Solar - Riñón Izq.', 'Estómago - Estómago', 'Duodeno - Duodeno'],
                    ['Reflujo gastroesofágico', 'Hiato - Hiato', 'Hiato - Riñón Der.', 'Esófago - Esófago'],
                    ['Ictericia fisiológica', 'Hígado - Riñón Der.', 'Vesícula - Duodeno', 'Bazo - Hígado'],
                    ['Dermatitis atópica', 'Timo - Timo', 'Pulmón - Pulmón', 'Suprarrenal - Riñón Der.'],
                    ['Estreñimiento', 'Recto - Recto', 'Sigma - Sigma', 'Duodeno - Riñón Der.'],
                    ['Insomnio neonatal', 'Pineal - Pineal', 'Occipital - Occipital', 'Temporal - Temporal'],
                ]}
            />
        </div>
    </>
);

const Block4Content = () => (
    <>
        <SectionTitle id="block-4" icon={<Rocket className="w-8 h-8" />} title="BLOQUE 4: Desarrollo (1 a 3 Meses)" />
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 space-y-8">
            <SubSectionTitle title="Cambios Fisiológicos y Energéticos" />
            <p>Fase de consolidación energética. Se establecen ritmos circadianos, aparece la sonrisa social, se consolidan patrones de alimentación y sueño, y aumenta la resistencia a estímulos externos.</p>
            
            <SubSectionTitle title="Shocks Postnatales Específicos" />
            <ul className="list-disc list-outside ml-5 space-y-3">
                <li><strong>Hospitalización/Separación Madre-Bebé:</strong> Ruptura del campo protector materno. Par principal: <strong>Plexo Solar - Riñón Izquierdo</strong>.</li>
                <li><strong>Procedimientos Médicos Dolorosos:</strong> Trauma físico y violación del espacio personal. Par principal: <strong>Suprarrenal - Riñón Derecho</strong>.</li>
                <li><strong>Cambio de Lactancia a Fórmula:</strong> Pérdida del vínculo nutricional primario. Par principal: <strong>Estómago - Estómago</strong>.</li>
                <li><strong>Mudanza o Cambio de Entorno:</strong> Pérdida del territorio energético familiar. Par principal: <strong>Bulbo - Cerebelo</strong>.</li>
            </ul>

            <SubSectionTitle title="Protocolos Recomendados" />
            <StyledTable 
                headers={['Shock Postnatal', 'Par Principal', 'Par Modulador', 'Par Integrador', 'Tiempo']}
                data={[
                    ['Separación madre-bebé', 'Plexo Solar - Riñón Izq.', 'Timo - Timo', 'Corazón - Pulmón', '12 min'],
                    ['Procedimientos dolorosos', 'Suprarrenal - Riñón Der.', 'Cervical - Cervical', 'Temporal - Temporal', '10 min'],
                    ['Reacciones post-vacunales', 'Timo - Timo', 'Bazo - Hígado', 'Suprarrenal - Riñón Der.', '15 min'],
                    ['Cambio alimentario', 'Estómago - Estómago', 'Duodeno - Duodeno', 'Plexo Solar - Riñón Izq.', '12 min'],
                    ['Cambio de entorno', 'Bulbo - Cerebelo', 'Occipital - Occipital', 'Pineal - Pineal', '10 min'],
                    ['Conflictos familiares', 'Temporal - Temporal', 'Suprarrenal - Riñón Der.', 'Cervical - Cervical', '15 min'],
                ]}
            />
        </div>
    </>
);

const Block5Content = () => (
    <>
        <SectionTitle id="block-5" icon={<Target className="w-8 h-8" />} title="BLOQUE 5: Integración Sistémica" />
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 space-y-8">
            <SubSectionTitle title="Principio Sistémico Central" />
            <blockquote className="border-l-4 border-teal-500 pl-4 py-2 my-4 text-xl font-semibold text-slate-800 bg-slate-50 rounded-r-lg">
                "No hay síntomas en el bebé que no hablen también de la madre"
            </blockquote>
            <p>Este principio invita a reconocer que madre y bebé comparten un campo energético, y el bebé puede actuar como portavoz de tensiones familiares no resueltas.</p>

            <SubSectionTitle title="El Bebé como Sensor del Sistema Familiar" />
            <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-2xl p-6 sm:p-8 mb-8 border border-white/20">
                <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-6 text-center">Patrones Sistémicos del Bebé</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Bebé "Portavoz"</span>
                        </div>
                        <p className="text-xs text-slate-600">Expresa a través de síntomas lo que la familia no verbaliza</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-orange-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Bebé "Reparador"</span>
                        </div>
                        <p className="text-xs text-slate-600">Intenta sanar duelos o pérdidas familiares</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Bebé "Sacrificial"</span>
                        </div>
                        <p className="text-xs text-slate-600">Absorbe tensiones para mantener una unidad aparente</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Bebé "Espejo"</span>
                        </div>
                        <p className="text-xs text-slate-600">Refleja exactamente el estado emocional de la madre</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Bebé "Ancla"</span>
                        </div>
                        <p className="text-xs text-slate-600">Mantiene a la madre conectada a la realidad</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-purple-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Bebé "Catalizador"</span>
                        </div>
                        <p className="text-xs text-slate-600">Acelera procesos de cambio familiar</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-pink-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Bebé "Sanador"</span>
                        </div>
                        <p className="text-xs text-slate-600">Lleva la energía de curación al sistema</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-indigo-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Bebé "Testigo"</span>
                        </div>
                        <p className="text-xs text-slate-600">Presencia silenciosa que observa todo</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-teal-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Bebé "Transformador"</span>
                        </div>
                        <p className="text-xs text-slate-600">Cambia la dinámica familiar completa</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-cyan-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Bebé "Conector"</span>
                        </div>
                        <p className="text-xs text-slate-600">Une a miembros familiares distanciados</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-emerald-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Bebé "Equilibrador"</span>
                        </div>
                        <p className="text-xs text-slate-600">Restaura el balance energético familiar</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                        <div className="flex items-center mb-3">
                            <span className="w-3 h-3 bg-rose-400 rounded-full mr-3"></span>
                            <span className="font-semibold text-slate-800">Bebé "Activador"</span>
                        </div>
                        <p className="text-xs text-slate-600">Despierta potenciales dormidos en la familia</p>
                    </div>
                </div>
                <div className="mt-6 p-4 bg-white/60 rounded-lg border border-white/20">
                    <p className="text-sm text-slate-700 leading-relaxed">
                        <strong>Dinámica Sistémica:</strong> Cada bebé puede manifestar uno o varios de estos patrones simultáneamente. 
                        La identificación del patrón dominante permite al terapeuta comprender mejor la función sistémica del bebé 
                        y aplicar los pares biomagnéticos más apropiados para cada caso específico.
                    </p>
                </div>
            </div>

            <SubSectionTitle title="Reflexión Guiada: Explorando el Propio Proyecto Sentido" />
            <div className="mt-4 p-4 border-l-4 border-teal-200 bg-teal-50/50 rounded-lg">
                <h4 className="font-semibold text-slate-700 mb-2 flex items-center"><Brain className="w-5 h-5 mr-2"/> Ejercicio de Conexión Intrauterina:</h4>
                <p>Conectar con la concepción, la gestación, el nacimiento y los primeros meses para identificar el patrón energético principal (supervivencia, separación, etc.) y cómo se manifiesta en la vida adulta.</p>
            </div>
            
            <SubSectionTitle title="Material de Apoyo Integral" />
            <div className="space-y-6">
                <div className="p-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 flex items-start group">
                    <Download className="h-8 w-8 text-teal-600 mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"/>
                    <div className="flex-1">
                        <h4 className="font-bold text-lg text-teal-700 mb-2 group-hover:text-teal-800 transition-colors duration-300">Lista Completa de Pares Biomagnéticos</h4>
                        <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                            Visor interactivo con más de 300 pares biomagnéticos organizados por puntos corporales. Incluye búsqueda avanzada y agrupación por regiones anatómicas. Abre en una nueva pestaña para explorar.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                                HTML Interactivo
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                Búsqueda Avanzada
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                300+ Pares
                            </span>
                        </div>
                    </div>
                    <button className="ml-4 px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105" onClick={() => handleResourceAction('pares')}>
                        Ver en Navegador
                    </button>
                </div>
            </div>
        </div>
    </>
);

const ManualFooter = () => (
    <div className="text-center mt-8 sm:mt-12">
        <div className="bg-gradient-to-r from-teal-50 via-blue-50 to-purple-50 rounded-2xl shadow-xl border border-white/20 p-6 sm:p-8">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl">🎉</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 sm:mb-4 leading-tight pb-1">
                ¡Felicitaciones por completar el Módulo 1!
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-slate-700 max-w-3xl mx-auto mb-4 sm:mb-6 px-4 leading-relaxed">
                Has dado el primer paso hacia la especialización en una de las áreas más gratificantes del biomagnetismo. 
                Recuerda que tu sensibilidad como terapeuta será tan importante como la técnica que apliques.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-600 mb-6">
                <span className="flex items-center bg-white/80 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full mr-1.5 sm:mr-2"></span>
                    Módulo Completado
                </span>
                <span className="flex items-center bg-white/80 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mr-1.5 sm:mr-2"></span>
                    Certificación Disponible
                </span>
                <span className="flex items-center bg-white/80 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full mr-1.5 sm:mr-2"></span>
                    Próximo Módulo
                </span>
            </div>
            <div className="border-t border-white/20 pt-4 sm:pt-6">
                <div className="bg-white/60 rounded-xl p-3 sm:p-4">
                    <p className="text-teal-700 font-semibold text-sm sm:text-base"><strong>Método creado por:</strong> Dr. Miguel Ojeda Rios</p>
                    <p className="text-teal-600 text-xs sm:text-sm mt-1">Instituto Centrobioenergética</p>
                    <p className="text-teal-600 text-xs sm:text-sm">www.institutocentrobioenergetica.com</p>
                </div>
            </div>
        </div>
    </div>
);

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
            <ManualFooter />
        </article>
    );
};

export default Manual;