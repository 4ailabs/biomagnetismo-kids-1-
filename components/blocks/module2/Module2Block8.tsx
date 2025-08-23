import React from 'react';
import { SectionTitle, SubSectionTitle, MinorSectionTitle } from '../../manual/index';
import { BookOpen, Users, Beaker, Lightbulb, Sparkles, Table, Heart, Brain, Baby, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

const Module2Block8: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 sm:p-10 text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full shadow-lg mb-6 sm:mb-8">
          <Baby className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight pb-2 mb-4">
          BLOQUE 8: CONFLICTOLOGÍA DENTAL EN PRIMERA INFANCIA
        </h1>
        <p className="text-lg sm:text-xl text-slate-700 max-w-4xl mx-auto font-medium leading-relaxed mb-4">
          Los dientes que hablan antes que las palabras
        </p>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Descubre cómo los dientes de leche son el disco duro del alma, conteniendo información valiosa sobre el desarrollo emocional y la herencia transgeneracional del niño.
        </p>
      </div>

      {/* Objetivo del Bloque */}
      <section className="bg-slate-100 rounded-lg p-4 sm:p-6 shadow-sm">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-700 mb-3">Objetivo del Bloque</h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Comprender la relación profunda entre la erupción dental y el desarrollo emocional del niño, 
          aprendiendo a interpretar las patologías dentales como manifestaciones de conflictos emocionales 
          y memorias transgeneracionales.
        </p>
      </section>

      {/* Fundamentos */}
      <section className="space-y-6">
        <SectionTitle
          icon={<Brain className="w-6 h-6 text-blue-600" />}
          title="Fundamentos de la Conflictología Dental Pediátrica"
        />
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-400">
          <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            Formación Embrionaria y Memoria
          </h3>
          <div className="space-y-4 text-blue-700">
            <p className="leading-relaxed">
              Los dientes de leche se forman en la misma fase embrionaria que el sistema nervioso central, 
              durante el segundo mes de vida intrauterina. Entre el tercero y cuarto mes se empiezan a formar 
              los dientes definitivos, que ya pueden guardar memoria de las emociones vividas dentro del útero materno.
            </p>
            <p className="leading-relaxed">
              La cronología de la erupción de los dientes de leche se plantea en paralelo al desarrollo 
              neurológico y psicoafectivo del niño, impregnándose de todo lo que sucede alrededor suyo.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-400">
          <h3 className="text-lg font-semibold text-purple-800 mb-4 flex items-center">
            <Heart className="w-5 h-5 mr-2" />
            Los Dientes como "Disco Duro del Alma"
          </h3>
          <div className="space-y-4 text-purple-700">
            <p className="leading-relaxed">
              Los dientes de leche son a menudo fuente de sufrimiento tanto para el niño como para los padres. 
              A pesar de la higiene y del cuidado en la alimentación, la caries parece fortalecerse.
            </p>
            <p className="leading-relaxed">
              Lejos de ser fatídica, la caries es como una ventana abierta sobre lo indecible que actúa 
              de forma oculta en el corazón y la cabeza de nuestros queridos hijos.
            </p>
          </div>
        </div>
      </section>

      {/* Cronología de Erupción */}
      <section className="space-y-6">
        <SectionTitle
          icon={<Clock className="w-6 h-6 text-green-600" />}
          title="Cronología de la Erupción Dental y Significado Emocional"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {/* Cronología Física */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
              Cronología Física Normal
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium">6-7 meses</span>
                <span>Incisivos centrales inferiores</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium">8-10 meses</span>
                <span>Incisivos centrales superiores</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium">9-13 meses</span>
                <span>Incisivos laterales</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium">13-19 meses</span>
                <span>Primeros molares</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium">16-23 meses</span>
                <span>Caninos</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-medium">23-30 meses</span>
                <span>Segundos molares</span>
              </div>
            </div>
          </div>

          {/* Interpretación Emocional */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-blue-600" />
              Interpretación Emocional por Etapas
            </h3>
            <div className="space-y-4 text-sm">
              <div className="p-3 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">6-8 meses: Los Arquetipos Parentales</h4>
                <p className="text-blue-700 text-xs">
                  Los primeros dientes simbolizan la presencia del arquetipo de la madre y del padre en el entorno del niño.
                </p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">8-10 meses: El Vínculo con el Mundo</h4>
                <p className="text-green-700 text-xs">
                  Los incisivos laterales muestran los vínculos del niño con su entorno y el desarrollo sensorial.
                </p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">13-19 meses: La Base Nutricional</h4>
                <p className="text-purple-700 text-xs">
                  Los primeros molares representan la seguridad nutricional y material, las bases sólidas para el desarrollo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Significado Específico */}
      <section className="space-y-6">
        <SectionTitle
          icon={<BookOpen className="w-6 h-6 text-indigo-600" />}
          title="Significado Específico de Cada Tipo de Diente"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {/* Incisivos */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">I</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-800">Los Incisivos</h3>
            </div>
            <h4 className="font-medium text-blue-700 mb-2">"Cortar la Realidad"</h4>
            <div className="space-y-3 text-blue-700 text-sm">
              <p><strong>Función:</strong> Capacidad de "cortar" con situaciones tóxicas</p>
              <p><strong>Patologías:</strong> Fracturas, caries, malposiciones</p>
              <p><strong>Significado:</strong> Dificultad para tomar decisiones o establecer límites</p>
            </div>
          </div>

          {/* Caninos */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 border border-amber-200">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <h3 className="text-lg font-semibold text-amber-800">Los Caninos</h3>
            </div>
            <h4 className="font-medium text-amber-700 mb-2">"La Autoridad Interior"</h4>
            <div className="space-y-3 text-amber-700 text-sm">
              <p><strong>Función:</strong> Autoridad personal y liderazgo</p>
              <p><strong>Patologías:</strong> Malposiciones, agresividad reprimida</p>
              <p><strong>Significado:</strong> Problemas con la autoridad y límites</p>
            </div>
          </div>

          {/* Molares */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <h3 className="text-lg font-semibold text-green-800">Los Molares</h3>
            </div>
            <h4 className="font-medium text-green-700 mb-2">"Triturar la Experiencia"</h4>
            <div className="space-y-3 text-green-700 text-sm">
              <p><strong>Función:</strong> Capacidad de "digerir" experiencias</p>
              <p><strong>Patologías:</strong> Caries, dolor, retraso</p>
              <p><strong>Significado:</strong> Inseguridad sobre bases familiares</p>
            </div>
          </div>
        </div>
      </section>

      {/* Patologías Dentales */}
      <section className="space-y-6">
        <SectionTitle
          icon={<AlertTriangle className="w-6 h-6 text-red-600" />}
          title="Patologías Dentales y Su Significado Emocional"
        />

        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Caries */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Caries en Dientes de Leche</h3>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                  <p className="text-red-700 text-sm">
                    <strong>Caries en incisivos:</strong> Dificultad para "cortar" con situaciones dolorosas
                  </p>
                </div>
                <div className="p-3 bg-amber-50 rounded-lg border-l-4 border-amber-400">
                  <p className="text-amber-700 text-sm">
                    <strong>Caries en caninos:</strong> Problemas con la autoridad y límites
                  </p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                  <p className="text-green-700 text-sm">
                    <strong>Caries en molares:</strong> Inseguridad sobre bases familiares o nutricionales
                  </p>
                </div>
              </div>
            </div>

            {/* Alteraciones */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Alteraciones en la Cronología</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <p className="text-blue-700 text-sm">
                    <strong>Erupción temprana:</strong> Necesidad prematura de autonomía
                  </p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                  <p className="text-purple-700 text-sm">
                    <strong>Erupción tardía:</strong> Resistencia a crecer y madurar
                  </p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                  <p className="text-orange-700 text-sm">
                    <strong>Erupción asimétrica:</strong> Conflictos familiares no resueltos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Información Transgeneracional */}
      <section className="space-y-6">
        <SectionTitle
          icon={<Users className="w-6 h-6 text-purple-600" />}
          title="Información Transgeneracional en los Dientes"
        />

        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
          <p className="text-purple-700 mb-6 leading-relaxed">
            Los dientes guardan dos tipos de mensajes: innatos (de la historia familiar o transgeneracional) 
            o adquiridos (de la propia vivencia del niño).
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Memorias Transgeneracionales */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-purple-800 mb-4">Memorias Transgeneracionales</h3>
              <div className="space-y-2 text-purple-700 text-sm">
                <p>• Traumas familiares no resueltos</p>
                <p>• Patrones de supervivencia ancestrales</p>
                <p>• Conflictos económicos o nutricionales del clan</p>
                <p>• Secretos familiares sobre paternidad o maternidad</p>
                <p>• Experiencias de guerra, hambre o persecución</p>
              </div>
            </div>

            {/* Memorias Adquiridas */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-purple-800 mb-4">Memorias Adquiridas (Propias)</h3>
              <div className="space-y-2 text-purple-700 text-sm">
                <p>• Traumas de nacimiento o primeros meses</p>
                <p>• Separaciones tempranas de los padres</p>
                <p>• Hospitalizaciones o procedimientos médicos</p>
                <p>• Cambios bruscos en el entorno familiar</p>
                <p>• Experiencias de abandono o negligencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protocolo de Evaluación */}
      <section className="space-y-6">
        <SectionTitle
          icon={<Table className="w-6 h-6 text-teal-600" />}
          title="Protocolo de Evaluación de Conflictología Dental"
        />

        <div className="space-y-6">
          {/* Historia Clínica */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-teal-600" />
              1. Historia Clínica Emocional
            </h3>
            <div className="space-y-3">
              <p className="text-gray-700 text-sm"><strong>Preguntas clave para padres:</strong></p>
              <div className="grid gap-2 md:grid-cols-2">
                <p className="text-gray-600 text-sm">• ¿Cómo fue el embarazo y el parto?</p>
                <p className="text-gray-600 text-sm">• ¿Hubo separaciones tempranas madre-bebé?</p>
                <p className="text-gray-600 text-sm">• ¿Qué eventos estresantes ocurrieron durante la formación dental?</p>
                <p className="text-gray-600 text-sm">• ¿Hay historia familiar de problemas dentales?</p>
                <p className="text-gray-600 text-sm">• ¿Cómo es la dinámica familiar actual?</p>
              </div>
            </div>
          </div>

          {/* Observación de Cronología */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-teal-600" />
              2. Observación de la Cronología
            </h3>
            <div className="space-y-3">
              <p className="text-gray-700 text-sm"><strong>Aspectos a evaluar:</strong></p>
              <div className="grid gap-2 md:grid-cols-2">
                <p className="text-gray-600 text-sm">• Orden de aparición de los dientes</p>
                <p className="text-gray-600 text-sm">• Retrasos o adelantos significativos</p>
                <p className="text-gray-600 text-sm">• Asimetrías en la erupción</p>
                <p className="text-gray-600 text-sm">• Diferencias con hermanos o patrones familiares</p>
              </div>
            </div>
          </div>

          {/* Análisis de Patologías */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-teal-600" />
              3. Análisis de las Patologías
            </h3>
            <div className="space-y-3">
              <p className="text-gray-700 text-sm"><strong>Localización y significado:</strong></p>
              <div className="grid gap-2 md:grid-cols-2">
                <p className="text-gray-600 text-sm">• ¿Qué tipo de diente está afectado?</p>
                <p className="text-gray-600 text-sm">• ¿Hay patrón específico de caries?</p>
                <p className="text-gray-600 text-sm">• ¿Las malposiciones siguen un patrón?</p>
                <p className="text-gray-600 text-sm">• ¿Hay correlación con eventos familiares?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabla de Correspondencias */}
      <section className="space-y-6">
        <SectionTitle
          icon={<Table className="w-6 h-6 text-indigo-600" />}
          title="Tabla de Correspondencias: Dientes de Leche y Conflictos Emocionales"
        />

        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium">Diente</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Edad Erupción</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Significado Emocional</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Conflictos Asociados</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Manifestaciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Incisivos centrales inferiores</td>
                  <td className="px-4 py-3 text-sm text-gray-600">6-8 meses</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Arquetipo materno, seguridad básica</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Ausencia/frialdad materna, inseguridad vital</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Retraso, caries, fracturas</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Incisivos centrales superiores</td>
                  <td className="px-4 py-3 text-sm text-gray-600">8-10 meses</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Arquetipo paterno, autoridad</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Ausencia/exceso paterno, problemas autoridad</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Malposiciones, caries</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Incisivos laterales</td>
                  <td className="px-4 py-3 text-sm text-gray-600">9-13 meses</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Vínculos con entorno, conexión social</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Aislamiento, sobreestimulación, vínculos inseguros</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Espaciamientos, asimetrías</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Primeros molares</td>
                  <td className="px-4 py-3 text-sm text-gray-600">13-19 meses</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Seguridad nutricional, bases materiales</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Inseguridad alimentaria, bases familiares inestables</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Caries, dolor, retraso</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Caninos</td>
                  <td className="px-4 py-3 text-sm text-gray-600">16-23 meses</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Autoridad personal, lenguaje, límites</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Problemas con autoridad, dificultades lenguaje</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Mal posición, agresividad</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Segundos molares</td>
                  <td className="px-4 py-3 text-sm text-gray-600">23-30 meses</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Estructuración, autonomía, abandono</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Miedo al abandono, resistencia a estructuración</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Caries múltiples, dolor intenso</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Reflexión del Bloque */}
      <section className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6 border border-teal-200">
        <h3 className="text-xl font-semibold text-teal-800 mb-4 flex items-center">
          <Lightbulb className="w-6 h-6 mr-2" />
          Reflexión del Bloque 8
        </h3>
        <div className="space-y-4 text-teal-700">
          <p className="leading-relaxed">
            La conflictología dental en primera infancia nos revela que nuestros dientes nos conocen, 
            ellos son el testigo de nuestra identidad. En la conflictología dental no hay acusaciones, 
            sino informaciones indispensables para el cambio.
          </p>
          <p className="leading-relaxed">
            Los dientes de leche son mucho más que simples estructuras temporales destinadas a caer. 
            Son el disco duro de nuestra alma, conteniendo información valiosa sobre nuestros primeros 
            años de vida y la herencia emocional que llevamos.
          </p>
          <div className="bg-teal-100 rounded-lg p-4 border-l-4 border-teal-400">
            <p className="font-semibold text-teal-800">
              Mensaje clave: Cada alteración en los dientes de leche es una oportunidad para sanar 
              no solo al niño, sino a todo su sistema familiar, liberando patrones transgeneracionales 
              y creando bases sólidas para un desarrollo saludable.
            </p>
          </div>
          <p className="italic text-teal-600">
            "Los dientes de leche son los primeros maestros emocionales del niño, enseñándole a través 
            de su presencia, ausencia o alteración, las lecciones más profundas sobre seguridad, amor, 
            límites y estructuración."
          </p>
        </div>
      </section>
    </div>
  );
};

export default Module2Block8;
