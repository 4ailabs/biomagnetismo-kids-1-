import React from 'react';
import CourseSection from '../../CourseSection';
import { Users, Brain, Heart, Target, ArrowRight, CheckCircle, Activity, Shield, Zap, AlertTriangle } from 'lucide-react';

const Module3Block5: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-100 to-gray-200 text-slate-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-slate-200 rounded-full">
              <Users className="w-12 h-12 text-slate-600" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Enfoque Sistémico Escolar
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto">
            Desórdenes Sistémicos y Conflictología Dental en el Contexto Educativo
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introducción */}
        <CourseSection
          title="Introducción al Enfoque Sistémico Escolar"
          icon={<Users className="w-8 h-8 text-slate-500" />}
        >
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              El Niño como Sistema Integrado
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                El enfoque sistémico en el biomagnetismo escolar reconoce que el niño no es una 
                colección de partes separadas, sino un sistema integrado donde todos los órganos, 
                sistemas y funciones están interconectados y se influyen mutuamente.
              </p>
              <p>
                <strong>Los desórdenes sistémicos</strong> no son problemas aislados, sino manifestaciones 
                de desequilibrios que afectan múltiples sistemas simultáneamente. <strong>La conflictología 
                dental</strong> nos revela cómo los conflictos emocionales se manifiestan físicamente 
                en la boca y los dientes.
              </p>
              <p>
                En el contexto escolar, estos desórdenes sistémicos se manifiestan como problemas 
                de aprendizaje, comportamiento, relaciones sociales y bienestar general. Comprender 
                esta interconexión es fundamental para desarrollar tratamientos efectivos y holísticos.
              </p>
            </div>
          </div>
        </CourseSection>

        {/* Desórdenes Sistémicos */}
        <CourseSection
          title="Desórdenes Sistémicos en el Entorno Escolar"
          icon={<Brain className="w-8 h-8 text-slate-500" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              Los desórdenes sistémicos en escolares no son problemas aislados, sino manifestaciones 
              de desequilibrios que afectan múltiples sistemas simultáneamente. Cada sistema está 
              interconectado y influye en el funcionamiento de los demás.
            </p>
          </div>

          <div className="space-y-8">
            {/* Sistema Nervioso */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Brain className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Sistema Nervioso Central</h3>
                  <p className="text-sm text-gray-500">Desórdenes neurológicos en escolares</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">TDAH (Trastorno por Déficit de Atención):</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Par biomagnético:</strong> Temporal Izq (-) → Temporal Der (+)<br/>
                    <strong>Microorganismo:</strong> Virus del polioma<br/>
                    <strong>Manifestaciones escolares:</strong> Dificultad de concentración, hiperactividad, impulsividad<br/>
                    <strong>Impacto sistémico:</strong> Afecta sistema endocrino (tiroides, suprarrenales) y digestivo
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Ansiedad Escolar:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Par biomagnético:</strong> Plexo Solar (-) → Suprarrenal (+)<br/>
                    <strong>Microorganismo:</strong> Helicobacter pylori<br/>
                    <strong>Manifestaciones escolares:</strong> Evitación, miedo al fracaso, síntomas físicos<br/>
                    <strong>Impacto sistémico:</strong> Afecta sistema digestivo, inmune y cardiovascular
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Depresión Infantil:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Par biomagnético:</strong> Timo (-) → Timo (+)<br/>
                    <strong>Microorganismo:</strong> Streptococcus pneumoniae<br/>
                    <strong>Manifestaciones escolares:</strong> Aislamiento, bajo rendimiento, falta de motivación<br/>
                    <strong>Impacto sistémico:</strong> Afecta sistema inmune, endocrino y digestivo
                  </p>
                </div>
              </div>
            </div>

            {/* Sistema Endocrino */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Sistema Endocrino</h3>
                  <p className="text-sm text-gray-500">Desequilibrios hormonales en escolares</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Problemas de Tiroides:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Par biomagnético:</strong> Tiroides (-) → Tiroides (+)<br/>
                    <strong>Microorganismo:</strong> Virus de Epstein-Barr<br/>
                    <strong>Manifestaciones escolares:</strong> Fatiga, dificultad de concentración, cambios de humor<br/>
                    <strong>Impacto sistémico:</strong> Afecta metabolismo, crecimiento y desarrollo cognitivo
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Desequilibrios Suprarrenales:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Par biomagnético:</strong> Suprarrenal (-) → Suprarrenal (+)<br/>
                    <strong>Microorganismo:</strong> Candida albicans<br/>
                    <strong>Manifestaciones escolares:</strong> Estrés crónico, ansiedad, problemas de sueño<br/>
                    <strong>Impacto sistémico:</strong> Afecta sistema nervioso, inmune y digestivo
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Problemas de Crecimiento:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Par biomagnético:</strong> Hipófisis (-) → Hipófisis (+)<br/>
                    <strong>Microorganismo:</strong> Mycoplasma pneumoniae<br/>
                    <strong>Manifestaciones escolares:</strong> Baja estatura, retraso en desarrollo, autoestima afectada<br/>
                    <strong>Impacto sistémico:</strong> Afecta desarrollo óseo, muscular y cognitivo
                  </p>
                </div>
              </div>
            </div>

            {/* Sistema Inmune */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <Shield className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Sistema Inmune</h3>
                  <p className="text-sm text-gray-500">Desequilibrios inmunológicos en escolares</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Asma Escolar:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Par biomagnético:</strong> Pulmón (-) → Suprarrenal (+)<br/>
                    <strong>Microorganismo:</strong> Virus de la rabia (Axila - Axila)<br/>
                    <strong>Manifestaciones escolares:</strong> Dificultad respiratoria, ausentismo, ansiedad<br/>
                    <strong>Impacto sistémico:</strong> Afecta sistema nervioso, cardiovascular y digestivo
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Alergias Alimentarias:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Par biomagnético:</strong> Intestino (-) → Intestino (+)<br/>
                    <strong>Microorganismo:</strong> Clostridium difficile<br/>
                    <strong>Manifestaciones escolares:</strong> Problemas de concentración, cambios de humor, fatiga<br/>
                    <strong>Impacto sistémico:</strong> Afecta sistema digestivo, nervioso y endocrino
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Infecciones Recurrentes:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Par biomagnético:</strong> Timo (-) → Timo (+)<br/>
                    <strong>Microorganismo:</strong> Streptococcus pyogenes<br/>
                    <strong>Manifestaciones escolares:</strong> Ausentismo frecuente, fatiga, bajo rendimiento<br/>
                    <strong>Impacto sistémico:</strong> Afecta desarrollo físico, cognitivo y social
                  </p>
                </div>
              </div>
            </div>

            {/* Sistema Digestivo */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-orange-100 rounded-full mr-4">
                  <Activity className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Sistema Digestivo</h3>
                  <p className="text-sm text-gray-500">Problemas gastrointestinales en escolares</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Síndrome del Intestino Irritable:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Par biomagnético:</strong> Intestino (-) → Intestino (+)<br/>
                    <strong>Microorganismo:</strong> Escherichia coli<br/>
                    <strong>Manifestaciones escolares:</strong> Dolor abdominal, ansiedad, dificultad de concentración<br/>
                    <strong>Impacto sistémico:</strong> Afecta sistema nervioso, inmune y endocrino
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Reflujo Gastroesofágico:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Par biomagnético:</strong> Estómago (-) → Estómago (+)<br/>
                    <strong>Microorganismo:</strong> Helicobacter pylori<br/>
                    <strong>Manifestaciones escolares:</strong> Dificultad para comer, malestar, problemas de sueño<br/>
                    <strong>Impacto sistémico:</strong> Afecta sistema nervioso, respiratorio y cardiovascular
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Problemas de Absorción:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Par biomagnético:</strong> Páncreas (-) → Páncreas (+)<br/>
                    <strong>Microorganismo:</strong> Candida albicans<br/>
                    <strong>Manifestaciones escolares:</strong> Fatiga, problemas de concentración, bajo rendimiento<br/>
                    <strong>Impacto sistémico:</strong> Afecta desarrollo físico, cognitivo y sistema inmune
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Conflictología Dental */}
        <CourseSection
          title="Conflictología Dental en el Contexto Escolar"
          icon={<Target className="w-8 h-8 text-slate-500" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              La conflictología dental nos revela cómo los conflictos emocionales se manifiestan 
              físicamente en la boca y los dientes. En el contexto escolar, estos conflictos 
              están directamente relacionados con las experiencias del niño en el entorno educativo.
            </p>
          </div>

          <div className="space-y-8">
            {/* Bruxismo Escolar */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 rounded-full mr-4">
                  <Target className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Bruxismo Escolar</h3>
                  <p className="text-sm text-gray-500">"Tengo que morder/aguantar situaciones injustas"</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Par biomagnético:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Principal:</strong> Mandíbula (-) → Mandíbula (+)<br/>
                    <strong>Complementario:</strong> Ángulo (-) → Ángulo (+)
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Microorganismos:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Neisseria gonorreae</strong> (Mandíbula - Mandíbula): Enojo respecto a la vida, fastidio, frustración<br/>
                    <strong>Streptococcus fragilis</strong> (Ángulo - Ángulo): Ira reprimida, no poder expresar lo que se siente
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Manifestaciones escolares:</p>
                  <p className="text-sm leading-relaxed">
                    Rechinamiento de dientes, tensión mandibular, dolores de cabeza, desgaste dental, 
                    especialmente durante el sueño. Relacionado con conflictos de autoridad y frustración académica.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Impacto sistémico:</p>
                  <p className="text-sm leading-relaxed">
                    Afecta sistema nervioso (tensión), sistema digestivo (dificultad para comer), 
                    sistema cardiovascular (estrés) y sistema endocrino (cortisol elevado).
                  </p>
                </div>
              </div>
            </div>

            {/* Problemas de Masticación */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <CheckCircle className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Problemas de Masticación</h3>
                  <p className="text-sm text-gray-500">"No puedo morder/defenderme de lo que me molesta"</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Par biomagnético:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Principal:</strong> Articulación TMJ (-) → Articulación TMJ (+)<br/>
                    <strong>Complementario:</strong> Músculos masticatorios (-) → Músculos masticatorios (+)
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Microorganismos:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Staphylococcus aureus</strong> (TMJ - TMJ): Conflictos de comunicación, no poder expresarse<br/>
                    <strong>Enterococcus faecalis</strong> (Músculos - Músculos): Debilidad, falta de fuerza para defenderse
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Manifestaciones escolares:</p>
                  <p className="text-sm leading-relaxed">
                    Dificultad para morder, masticar y tragar, dolor en la articulación temporomandibular, 
                    limitación en la apertura bucal, problemas para comer en el comedor escolar.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Impacto sistémico:</p>
                  <p className="text-sm leading-relaxed">
                    Afecta sistema digestivo (nutrición), sistema nervioso (dolor), sistema muscular 
                    (tensión) y sistema inmune (inflamación crónica).
                  </p>
                </div>
              </div>
            </div>

            {/* Dolores Dentales */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Dolores Dentales</h3>
                  <p className="text-sm text-gray-500">"Me duele ser quien soy en este lugar"</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Par biomagnético:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Principal:</strong> Diente específico (-) → Diente específico (+)<br/>
                    <strong>Complementario:</strong> Encía (-) → Encía (+)
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Microorganismos:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Streptococcus mutans</strong> (Diente - Diente): Conflictos de identidad, autoestima<br/>
                    <strong>Porphyromonas gingivalis</strong> (Encía - Encía): Conflictos de aceptación social
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Manifestaciones escolares:</p>
                  <p className="text-sm leading-relaxed">
                    Dolor dental constante, sensibilidad, problemas de concentración, evitación de 
                    actividades que requieren hablar o sonreír, aislamiento social.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Impacto sistémico:</p>
                  <p className="text-sm leading-relaxed">
                    Afecta sistema nervioso (dolor crónico), sistema inmune (inflamación), 
                    sistema endocrino (estrés) y sistema cardiovascular (tensión).
                  </p>
                </div>
              </div>
            </div>

            {/* Problemas de Alineación */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <Zap className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Problemas de Alineación</h3>
                  <p className="text-sm text-gray-500">"No encajo en este lugar, no pertenezco aquí"</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Par biomagnético:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Principal:</strong> Maxilar (-) → Maxilar (+)<br/>
                    <strong>Complementario:</strong> Mandíbula (-) → Mandíbula (+)
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Microorganismos:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Actinomyces israelii</strong> (Maxilar - Maxilar): Conflictos de adaptación, cambios familiares<br/>
                    <strong>Fusobacterium nucleatum</strong> (Mandíbula - Mandíbula): Conflictos de pertenencia, identidad
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Manifestaciones escolares:</p>
                  <p className="text-sm leading-relaxed">
                    Maloclusión, dientes apiñados, sobremordida, problemas de pronunciación, 
                    dificultades para comer, autoestima afectada, bullying.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Impacto sistémico:</p>
                  <p className="text-sm leading-relaxed">
                    Afecta sistema nervioso (estrés), sistema digestivo (masticación), 
                    sistema respiratorio (respiración bucal) y sistema endocrino (crecimiento).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Sistema Educativo */}
        <CourseSection
          title="Impacto en el Sistema Educativo"
          icon={<Users className="w-8 h-8 text-slate-500" />}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Rendimiento Académico
              </h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start">
                  <Users className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <p>Los desórdenes sistémicos y problemas dentales afectan directamente el rendimiento académico, causando dificultades de concentración, memoria y procesamiento de información.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Relaciones Sociales
              </h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start">
                  <Heart className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p>Estos problemas también afectan las relaciones sociales, causando aislamiento, dificultades de comunicación y problemas de autoestima en el entorno escolar.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Comportamiento Escolar
              </h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start">
                  <Target className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                  <p>Los desórdenes sistémicos pueden manifestarse como problemas de comportamiento, hiperactividad, agresividad o retraimiento en el entorno escolar.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Ausentismo Escolar
              </h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <p>Los problemas de salud sistémicos y dentales pueden causar ausentismo escolar frecuente, afectando la continuidad del aprendizaje y el desarrollo académico.</p>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Protocolo Sistémico */}
        <CourseSection
          title="Protocolo Sistémico de Intervención"
          icon={<Shield className="w-8 h-8 text-slate-500" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              El protocolo sistémico de intervención reconoce que el niño es un sistema integrado 
              donde todos los componentes están interconectados. La intervención debe abordar 
              múltiples sistemas simultáneamente para lograr resultados efectivos y duraderos.
            </p>
          </div>

          <div className="space-y-8">
            {/* Evaluación Integral */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Shield className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Evaluación Integral</h3>
                  <p className="text-sm text-gray-500">Análisis completo del sistema del niño</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Evaluación multisistémica:</p>
                  <p className="text-sm leading-relaxed">
                    Rastreo completo de todos los sistemas: nervioso, endocrino, inmune, digestivo, 
                    cardiovascular, respiratorio, muscular y esquelético. Identificar interconexiones 
                    y desequilibrios prioritarios.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Mapeo de conflictos:</p>
                  <p className="text-sm leading-relaxed">
                    Identificar conflictos biológicos específicos, microorganismos asociados, 
                    pares biomagnéticos desequilibrados y manifestaciones en el entorno escolar.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Evaluación contextual:</p>
                  <p className="text-sm leading-relaxed">
                    Analizar el impacto del entorno familiar, escolar y social en el desarrollo 
                    de los desórdenes sistémicos y su manifestación en el comportamiento.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Priorización de intervenciones:</p>
                  <p className="text-sm leading-relaxed">
                    Determinar qué sistemas requieren intervención inmediata y cuáles pueden 
                    ser abordados en fases posteriores del tratamiento.
                  </p>
                </div>
              </div>
            </div>

            {/* Tratamiento Multisistémico */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <Target className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Tratamiento Multisistémico</h3>
                  <p className="text-sm text-gray-500">Intervención coordinada en múltiples sistemas</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolo de pares principales:</p>
                  <p className="text-sm leading-relaxed">
                    Trabajar primero los pares biomagnéticos más importantes: Temporal Izq (-) → Temporal Der (+), 
                    Frontal (-) → Occipital (+), Timo (-) → Timo (+), Suprarrenal (-) → Suprarrenal (+).
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolo de sistemas específicos:</p>
                  <p className="text-sm leading-relaxed">
                    Abordar cada sistema afectado con pares específicos: sistema nervioso, endocrino, 
                    inmune, digestivo, cardiovascular, respiratorio, muscular y esquelético.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolo de microorganismos:</p>
                  <p className="text-sm leading-relaxed">
                    Identificar y trabajar con virus, bacterias y parásitos específicos que están 
                    afectando el equilibrio sistémico del niño.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Coordinación de especialistas:</p>
                  <p className="text-sm leading-relaxed">
                    Trabajar en coordinación con pediatras, odontólogos, psicólogos, maestros 
                    y otros especialistas para un abordaje integral.
                  </p>
                </div>
              </div>
            </div>

            {/* Apoyo Educativo */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <Users className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Apoyo Educativo</h3>
                  <p className="text-sm text-gray-500">Estrategias educativas personalizadas</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Adaptaciones curriculares:</p>
                  <p className="text-sm leading-relaxed">
                    Modificar el currículo según las necesidades específicas del niño: tiempos 
                    de descanso, actividades alternativas, métodos de evaluación adaptados.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Estrategias de enseñanza:</p>
                  <p className="text-sm leading-relaxed">
                    Implementar métodos de enseñanza que respeten el ritmo y estilo de aprendizaje 
                    del niño: visual, auditivo, kinestésico, multisensorial.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Apoyo emocional:</p>
                  <p className="text-sm leading-relaxed">
                    Proporcionar apoyo emocional y psicológico en el entorno escolar: técnicas 
                    de relajación, manejo del estrés, desarrollo de habilidades sociales.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Coordinación con la familia:</p>
                  <p className="text-sm leading-relaxed">
                    Mantener comunicación constante con la familia para coordinar estrategias 
                    de apoyo en el hogar y en la escuela.
                  </p>
                </div>
              </div>
            </div>

            {/* Enfoque Holístico */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-indigo-100 rounded-full mr-4">
                  <Brain className="w-8 h-8 text-indigo-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Enfoque Holístico</h3>
                  <p className="text-sm text-gray-500">Visión integral del niño como sistema</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Interconexión de sistemas:</p>
                  <p className="text-sm leading-relaxed">
                    Reconocer que todos los sistemas están interconectados y que un desequilibrio 
                    en uno afecta a todos los demás. El tratamiento debe abordar estas interconexiones.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Desarrollo integral:</p>
                  <p className="text-sm leading-relaxed">
                    Considerar el desarrollo físico, emocional, cognitivo y social del niño como 
                    un proceso integrado que requiere apoyo en todas las dimensiones.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Prevención y promoción:</p>
                  <p className="text-sm leading-relaxed">
                    No solo tratar los problemas existentes, sino prevenir futuros desequilibrios 
                    y promover el desarrollo saludable del niño.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Empoderamiento del niño:</p>
                  <p className="text-sm leading-relaxed">
                    Involucrar al niño en su propio proceso de sanación, enseñándole técnicas 
                    de autocuidado y autoconocimiento que le servirán toda la vida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Próximos Pasos */}
        <div className="bg-gradient-to-r from-slate-100 to-gray-200 rounded-lg p-8 text-slate-800 text-center">
          <h2 className="text-2xl font-bold mb-4">
            ¿Listo para los Casos Clínicos?
          </h2>
          <p className="text-slate-700 mb-6">
            Ahora que conoces el enfoque sistémico, es momento de revisar 
            casos clínicos reales y protocolos de emergencia.
          </p>
          <div className="flex justify-center">
            <ArrowRight className="w-6 h-6 text-slate-700 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module3Block5;