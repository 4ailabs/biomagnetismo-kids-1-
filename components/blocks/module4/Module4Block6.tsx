import React from 'react';
import SimpleSection from '../../SimpleSection';
import InfoCard from '../../InfoCard';
import ContentBlock from '../../ContentBlock';
import BlockHeader from '../../BlockHeader';
import { textUtils } from '../../../src/styles/typography';
import { Heart, Brain, Users, Target, CheckCircle, ArrowRight, Wrench, BookOpen } from 'lucide-react';

const Module4Block6: React.FC = () => {
  return (
    <div id="block-6" className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <BlockHeader
        icon={Heart}
        title="Herramientas Prácticas y Cierre"
        subtitle="Técnicas de Autoregulación, Mapeo Corporal y Protocolos de Seguimiento (12-18 años)"
        gradientFrom="from-indigo-100"
        gradientTo="to-purple-200"
        iconBgColor="bg-indigo-200"
        iconTextColor="text-indigo-700"
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-8 sm:py-12 lg:py-16">
        {/* Introducción */}
        <SimpleSection
          title="Herramientas de Autoregulación para Adolescentes"
          icon={<Wrench className="w-8 h-8" />}
        >
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mb-8">
            <h3 className={`${textUtils.title.subsection} mb-6`}>
              Técnicas Validadas Científicamente para Adolescentes
            </h3>
            <div className={`space-y-4 ${textUtils.body.medium}`}>
              <p>
                Los adolescentes requieren herramientas específicas de autoregulación que respeten su 
                necesidad de autonomía y control. Estas técnicas están validadas científicamente y 
                adaptadas a las características neurológicas y emocionales de esta etapa.
              </p>
              <p>
                Cada técnica se relaciona con sensaciones específicas y puede ser aplicada tanto en 
                sesión como enseñada para uso independiente del adolescente.
              </p>
            </div>
          </div>
        </SimpleSection>

        {/* Técnicas Sensoriomotrices */}
        <SimpleSection
          title="Técnicas Sensoriomotrices por Sensación Específica"
          icon={<Brain className="w-8 h-8" />}
        >
          <ContentBlock
            title="¿Qué es la Terapia Sensoriomotriz para Adolescentes?"
            content={
              <div className="space-y-4">
                <p>
                  La <strong>terapia sensoriomotriz</strong> es un enfoque que trabaja directamente con las sensaciones 
                  corporales para procesar y liberar experiencias traumáticas o estresantes. Para adolescentes, 
                  es especialmente efectiva porque trabaja con el cuerpo en lugar de solo con palabras.
                </p>
                <p>
                  <strong>Principio clave:</strong> El cuerpo almacena información que la mente no puede procesar 
                  verbalmente. Al trabajar con las sensaciones físicas, podemos acceder y liberar esta información 
                  de manera segura y efectiva.
                </p>
              </div>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Técnicas para Sensaciones Frecuentes */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Técnicas para Sensaciones Frecuentes</h3>
              
              <div className="space-y-4">
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Presión Social Asfixiante</h4>
                  <p className="text-sm text-gray-600 mb-2">"Me siento observado y juzgado"</p>
                  <p className="text-xs text-gray-700">
                    <strong>Anclaje Corporal:</strong> Mano en corazón y abdomen, respiración profunda
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Intensidad Emocional</h4>
                  <p className="text-sm text-gray-600 mb-2">"Mis emociones me desbordan"</p>
                  <p className="text-xs text-gray-700">
                    <strong>Respiración 4-7-8:</strong> Inhalar 4s, mantener 7s, exhalar 8s
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Extrañeza Corporal</h4>
                  <p className="text-sm text-gray-600 mb-2">"Mi cuerpo ya no me pertenece"</p>
                  <p className="text-xs text-gray-700">
                    <strong>Reconexión:</strong> Tocar suavemente el cuerpo, reconociendo cada zona
                  </p>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Rebeldía Visceral</h4>
                  <p className="text-sm text-gray-600 mb-2">"Siento resistencia profunda"</p>
                  <p className="text-xs text-gray-700">
                    <strong>Liberación:</strong> Tensar y relajar músculos progresivamente
                  </p>
                </div>
              </div>
            </div>

            {/* Protocolo de Aplicación */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Protocolo de Aplicación</h3>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Paso 1: Identificación</h4>
                  <p className="text-xs text-gray-700">
                    Rastrear qué sensación específica está presente usando test muscular
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Paso 2: Aplicación</h4>
                  <p className="text-xs text-gray-700">
                    Aplicar técnica sensoriomotriz correspondiente por 5-10 minutos
                  </p>
                </div>

                <div className="bg-pink-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Paso 3: Verificación</h4>
                  <p className="text-xs text-gray-700">
                    Test muscular para confirmar reducción de la sensación
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Paso 4: Biomagnetismo</h4>
                  <p className="text-xs text-gray-700">
                    Aplicar pares biomagnéticos específicos para la sensación
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 sm:p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">🔬 Principios Científicos de la Terapia Sensoriomotriz</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold mb-2">Neuroplasticidad:</p>
                <p>El cerebro puede crear nuevas conexiones neuronales a través de la experiencia corporal consciente.</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Integración Mind-Body:</p>
                <p>Las experiencias se procesan tanto cognitiva como somáticamente, requiriendo intervención en ambos niveles.</p>
              </div>
            </div>
          </div>
        </SimpleSection>

        {/* Mapeo Corporal */}
        <SimpleSection
          title="Mapeo Corporal Adolescente: Herramienta de Diagnóstico"
          icon={<Target className="w-8 h-8" />}
        >
          <ContentBlock
            title="¿Para qué sirve el Mapeo Corporal en Adolescentes?"
            content={
              <div className="space-y-4">
                <p>
                  El mapeo corporal es una <strong>herramienta de diagnóstico visual</strong> que permite identificar 
                  exactamente qué zonas del cuerpo están afectadas por conflictos energéticos durante la adolescencia. 
                  Es especialmente útil porque los adolescentes tienen dificultad para verbalizar sus sensaciones corporales.
                </p>
                <p>
                  <strong>Utilidad práctica:</strong> Te permite localizar con precisión dónde colocar los imanes 
                  y qué pares biomagnéticos usar, basándote en la información visual que el adolescente proporciona 
                  sobre su experiencia corporal.
                </p>
              </div>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <InfoCard
              icon={<Target className="w-6 h-6" />}
              title="Beneficios del Mapeo"
              color="pink"
              items={[
                "Identifica zonas específicas de conflicto",
                "Localiza puntos exactos para imanes",
                "Reduce tiempo de rastreo biomagnético",
                "Facilita comunicación con adolescentes",
                "Proporciona mapa visual del problema",
                "Permite seguimiento de cambios"
              ]}
            />

            <InfoCard
              icon={<Brain className="w-6 h-6" />}
              title="Aplicación Práctica"
              color="blue"
              items={[
                "Dibujar silueta corporal en papel",
                "Colorear zonas según sensación",
                "Identificar patrones de dolor/tensión",
                "Correlacionar con pares biomagnéticos",
                "Usar como guía para rastreo",
                "Documentar evolución del tratamiento"
              ]}
            />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Protocolo de Mapeo Corporal</h3>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 rounded-lg p-4 sm:p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Paso 1: Preparación</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Ambiente privado y confidencial</li>
                  <li>• Silueta corporal en papel o tablet</li>
                  <li>• Colores para marcar diferentes sensaciones</li>
                  <li>• Explicar el propósito: "ayudar a localizar exactamente dónde te duele o molesta"</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-4 sm:p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Paso 2: Identificación de Zonas</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Zonas más frecuentes en adolescentes:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Cabeza: migrañas, presión</li>
                      <li>• Cuello/hombros: tensión, estrés</li>
                      <li>• Pecho: ansiedad, opresión</li>
                      <li>• Estómago: nervios, dolor</li>
                      <li>• Espalda baja: dolor, tensión</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Código de colores sugerido:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 🔴 Rojo: Dolor intenso</li>
                      <li>• 🟡 Amarillo: Tensión/ansiedad</li>
                      <li>• 🔵 Azul: Tristeza/desconexión</li>
                      <li>• ⚫ Negro: Zonas "muertas"</li>
                      <li>• 🟢 Verde: Zonas que se sienten bien</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-4 sm:p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Paso 3: Correlación con Biomagnetismo</h4>
                <p className="text-gray-700 mb-3">
                  Una vez identificadas las zonas, usar el mapeo para:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Priorizar áreas:</strong> Empezar por las zonas más marcadas</li>
                  <li>• <strong>Seleccionar pares:</strong> Usar pares específicos para cada zona</li>
                  <li>• <strong>Rastrear sistemáticamente:</strong> Seguir un orden lógico</li>
                  <li>• <strong>Verificar cambios:</strong> Re-mapear después del tratamiento</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 sm:p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">💡 Ejemplo Práctico</h4>
            <p className="text-gray-700 text-sm">
              <strong>Adolescente marca:</strong> Rojo en cabeza, amarillo en estómago, azul en pecho<br/>
              <strong>Acción:</strong> Rastrear sensaciones de "presión en cabeza", "nervios en estómago", "opresión en pecho"<br/>
              <strong>Resultado:</strong> Identificar conflictos específicos y aplicar pares biomagnéticos correspondientes
            </p>
          </div>
        </SimpleSection>

        {/* Protocolos de Seguimiento */}
        <SimpleSection
          title="Protocolos de Seguimiento y Evaluación"
          icon={<CheckCircle className="w-8 h-8" />}
        >
          <div className="space-y-8">
            {/* Escala de Bienestar */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-800 leading-tight mb-2">Escala de Bienestar Adolescente (1-10)</h3>
                  <p className="text-sm text-gray-500">Evaluación integral del progreso terapéutico</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                <div className="space-y-6">
                  <div className="bg-green-50 rounded-lg p-4 sm:p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Área Emocional</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Estado de ánimo general</span>
                        <span className="text-sm text-gray-500">(1=deprimido, 10=feliz)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Intensidad emocional</span>
                        <span className="text-sm text-gray-500">(1=no siento, 10=abrumador)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Pensamientos autodestructivos</span>
                        <span className="text-sm text-gray-500">(1=nunca, 10=constantemente)</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Área Social</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Conexión con amigos</span>
                        <span className="text-sm text-gray-500">(1=muy solo, 10=muy conectado)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Aceptación por pares</span>
                        <span className="text-sm text-gray-500">(1=rechazado, 10=aceptado)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-purple-50 rounded-lg p-4 sm:p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Área Familiar</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Comunicación familiar</span>
                        <span className="text-sm text-gray-500">(1=muy mala, 10=excelente)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Comprensión parental</span>
                        <span className="text-sm text-gray-500">(1=nunca, 10=siempre)</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-pink-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Área Corporal</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Aceptación corporal</span>
                        <span className="text-sm text-gray-500">(1=odio mi cuerpo, 10=me encanta)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Comodidad con cambios</span>
                        <span className="text-sm text-gray-500">(1=muy incómodo, 10=muy cómodo)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Protocolo de Seguimiento */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <BookOpen className="w-8 h-8 text-blue-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-800 leading-tight mb-2">Protocolo de Seguimiento</h3>
                  <p className="text-sm text-gray-500">Fases progresivas de tratamiento</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  <div className="bg-red-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Fase 1 (Semanas 1-6)</h4>
                    <div className="space-y-2">
                      <p className="text-gray-700">2 sesiones/semana</p>
                      <p className="text-gray-700">45 minutos cada una</p>
                      <p className="text-sm text-gray-600">Enfoque en estabilización y crisis</p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-4 sm:p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Fase 2 (Semanas 7-16)</h4>
                    <div className="space-y-2">
                      <p className="text-gray-700">1 sesión/semana</p>
                      <p className="text-gray-700">45 minutos cada una</p>
                      <p className="text-sm text-gray-600">Enfoque en desarrollo de habilidades</p>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 sm:p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Fase 3 (Meses 5-8)</h4>
                    <div className="space-y-2">
                      <p className="text-gray-700">1 sesión quincenal</p>
                      <p className="text-gray-700">45 minutos cada una</p>
                      <p className="text-sm text-gray-600">Enfoque en consolidación</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Mantenimiento</h4>
                  <p className="text-gray-700">
                    Según necesidad del adolescente y su familia. Puede incluir sesiones de refuerzo 
                    durante transiciones importantes (cambio de escuela, inicio de relaciones, etc.).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SimpleSection>

        {/* Síntesis y Cierre */}
        <SimpleSection
          title="Síntesis y Cierre del Módulo 4"
          icon={<Heart className="w-8 h-8" />}
        >
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Puntos Clave del Módulo
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-700">
                    <strong>La adolescencia es una metamorfosis normal</strong>, no una patología que requiere "reparación"
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-700">
                    <strong>Los 7 conflictos biológicos</strong> proporcionan marco para entender síntomas específicos
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-700">
                    <strong>Las 20 sensaciones específicas</strong> permiten rastreo preciso de conflictos
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-700">
                    <strong>La adaptación de técnicas</strong> respeta la autonomía emergente del adolescente
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-700">
                    <strong>Los protocolos de crisis</strong> priorizan la seguridad vital
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-700">
                    <strong>El trabajo sistémico</strong> es fundamental para cambios duraderos
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-100 to-purple-200 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-indigo-800 mb-6">
                Mensaje Final
              </h3>
              <div className="space-y-4 text-indigo-700">
                <p className="text-lg leading-relaxed">
                  El adolescente no está "roto" y necesita ser "reparado". Está en proceso de metamorfosis 
                  y requiere acompañamiento respetuoso, con herramientas apropiadas para navegar su 
                  transformación hacia la adultez, honrando tanto su necesidad de diferenciación como 
                  su búsqueda de pertenencia.
                </p>
                <p className="text-xl font-semibold italic">
                  "La adolescencia es el momento donde el capullo se convierte en mariposa. Nuestro trabajo 
                  no es detener la transformación, sino acompañar el proceso con sabiduría y respeto."
                </p>
              </div>
            </div>
          </div>
        </SimpleSection>

        {/* Lista de 40 Pares Biomagnéticos */}
        <SimpleSection
          title="Lista de 40 Pares Biomagnéticos para Adolescentes"
          icon={<BookOpen className="w-8 h-8" />}
        >
          <ContentBlock
            title="Pares Biomagnéticos Específicos para la Adolescencia"
            content={
              <div className="space-y-4">
                <p>
                  Esta lista contiene los <strong>40 pares biomagnéticos más relevantes</strong> para trabajar 
                  con adolescentes de 12-18 años. Cada par está asociado con conflictos específicos de esta etapa 
                  y ha sido seleccionado por su alta frecuencia de aparición en esta población.
                </p>
                <p>
                  <strong>Organización:</strong> Los pares están agrupados por sistemas corporales y ordenados 
                  por prioridad de uso en el rastreo adolescente.
                </p>
              </div>
            }
          />

          <div className="space-y-8">
            {/* Sistema Endocrino y Hormonal */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Sistema Endocrino y Hormonal (10 pares)</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-3">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">1. Tiroides (-) → Paratiroides (+)</p>
                    <p className="text-sm text-gray-600">Metabolismo, cambios puberales, fatiga</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">2. Suprarrenal (-) → Hígado (+)</p>
                    <p className="text-sm text-gray-600">Estrés, rebeldía, rabia contenida</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">3. Ovarios (-) → Testículos (+)</p>
                    <p className="text-sm text-gray-600">Confusión sexual, identidad de género</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">4. Páncreas (-) → Bazo (+)</p>
                    <p className="text-sm text-gray-600">Trastornos alimentarios, control</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">5. Timo (-) → Corazón (+)</p>
                    <p className="text-sm text-gray-600">Inmunidad, presión social, rechazo</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">6. Pineal (-) → Hipófisis (+)</p>
                    <p className="text-sm text-gray-600">Ritmos circadianos, trastornos menstruales</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">7. Hipotálamo (-) → Amígdala (+)</p>
                    <p className="text-sm text-gray-600">Intensidad emocional, miedo social</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">8. Cuerpo Lúteo (-) → Placenta (+)</p>
                    <p className="text-sm text-gray-600">Ciclos menstruales, fertilidad futura</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">9. Próstata (-) → Útero (+)</p>
                    <p className="text-sm text-gray-600">Identidad sexual, desarrollo genital</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">10. Epidídimo (-) → Trompas de Falopio (+)</p>
                    <p className="text-sm text-gray-600">Desarrollo reproductivo, fertilidad</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sistema Digestivo */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <Target className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Sistema Digestivo (10 pares)</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-3">
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">11. Estómago (-) → Duodeno (+)</p>
                    <p className="text-sm text-gray-600">Gastritis, nervios, ansiedad</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">12. Hígado (-) → Vesícula Biliar (+)</p>
                    <p className="text-sm text-gray-600">Rabia, frustración, toxinas</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">13. Intestino Delgado (-) → Intestino Grueso (+)</p>
                    <p className="text-sm text-gray-600">Absorción, eliminación, control</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">14. Esófago (-) → Cardias (+)</p>
                    <p className="text-sm text-gray-600">Reflujo, dificultad para tragar</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">15. Apéndice (-) → Ciego (+)</p>
                    <p className="text-sm text-gray-600">Dolor abdominal, inflamación</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">16. Recto (-) → Ano (+)</p>
                    <p className="text-sm text-gray-600">Control, vergüenza, límites</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">17. Peritoneo (-) → Mesenterio (+)</p>
                    <p className="text-sm text-gray-600">Protección, contención</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">18. Glándulas Salivales (-) → Amígdalas (+)</p>
                    <p className="text-sm text-gray-600">Comunicación, expresión</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">19. Píloro (-) → Bulbo Duodenal (+)</p>
                    <p className="text-sm text-gray-600">Digestión, control de paso</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">20. Yeyuno (-) → Íleon (+)</p>
                    <p className="text-sm text-gray-600">Absorción de nutrientes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sistema Respiratorio */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-cyan-100 rounded-full mr-4">
                  <Users className="w-8 h-8 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Sistema Respiratorio (8 pares)</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-3">
                  <div className="bg-cyan-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">21. Pulmón Derecho (-) → Pulmón Izquierdo (+)</p>
                    <p className="text-sm text-gray-600">Asma, ansiedad, presión social</p>
                  </div>
                  <div className="bg-cyan-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">22. Bronquios (-) → Alvéolos (+)</p>
                    <p className="text-sm text-gray-600">Respiración, intercambio</p>
                  </div>
                  <div className="bg-cyan-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">23. Tráquea (-) → Laringe (+)</p>
                    <p className="text-sm text-gray-600">Comunicación, expresión</p>
                  </div>
                  <div className="bg-cyan-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">24. Diafragma (-) → Músculos Intercostales (+)</p>
                    <p className="text-sm text-gray-600">Respiración, tensión</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-cyan-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">25. Pleura (-) → Mediastino (+)</p>
                    <p className="text-sm text-gray-600">Protección, separación</p>
                  </div>
                  <div className="bg-cyan-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">26. Senos Paranasales (-) → Cornetes (+)</p>
                    <p className="text-sm text-gray-600">Resfriados, alergias</p>
                  </div>
                  <div className="bg-cyan-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">27. Epiglotis (-) → Cuerdas Vocales (+)</p>
                    <p className="text-sm text-gray-600">Comunicación, expresión</p>
                  </div>
                  <div className="bg-cyan-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">28. Faringe (-) → Nasofaringe (+)</p>
                    <p className="text-sm text-gray-600">Respiración, comunicación</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sistema Musculoesquelético */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-orange-100 rounded-full mr-4">
                  <Target className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Sistema Musculoesquelético (12 pares)</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-3">
                  <div className="bg-orange-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">29. Columna Cervical (-) → Columna Dorsal (+)</p>
                    <p className="text-sm text-gray-600">Tensión, postura, estrés</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">30. Columna Lumbar (-) → Sacro (+)</p>
                    <p className="text-sm text-gray-600">Dolor de crecimiento, estabilidad</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">31. Hombro Derecho (-) → Hombro Izquierdo (+)</p>
                    <p className="text-sm text-gray-600">Responsabilidad, carga</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">32. Cadera Derecha (-) → Cadera Izquierda (+)</p>
                    <p className="text-sm text-gray-600">Estabilidad, movimiento</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">33. Rodilla Derecha (-) → Rodilla Izquierda (+)</p>
                    <p className="text-sm text-gray-600">Flexibilidad, resistencia</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">34. Tobillo Derecho (-) → Tobillo Izquierdo (+)</p>
                    <p className="text-sm text-gray-600">Equilibrio, dirección</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-orange-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">35. Codo Derecho (-) → Codo Izquierdo (+)</p>
                    <p className="text-sm text-gray-600">Acción, límites</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">36. Muñeca Derecha (-) → Muñeca Izquierda (+)</p>
                    <p className="text-sm text-gray-600">Manejo, control</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">37. Mandíbula (-) → ATM (+)</p>
                    <p className="text-sm text-gray-600">Tensión, bruxismo, expresión</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">38. Omóplato Derecho (-) → Omóplato Izquierdo (+)</p>
                    <p className="text-sm text-gray-600">Postura, carga emocional</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">39. Fémur Derecho (-) → Fémur Izquierdo (+)</p>
                    <p className="text-sm text-gray-600">Estabilidad, soporte</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">40. Húmero Derecho (-) → Húmero Izquierdo (+)</p>
                    <p className="text-sm text-gray-600">Acción, movimiento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">📋 Protocolo de Uso de los 40 Pares</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold mb-2">Orden de Prioridad:</p>
                <ul className="space-y-1">
                  <li>• 1-10: Sistema Endocrino (prioridad alta)</li>
                  <li>• 11-20: Sistema Digestivo (prioridad alta)</li>
                  <li>• 21-28: Sistema Respiratorio (prioridad media)</li>
                  <li>• 29-40: Sistema Musculoesquelético (prioridad baja)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Criterios de Selección:</p>
                <ul className="space-y-1">
                  <li>• Pares con localizaciones anatómicas específicas</li>
                  <li>• Alta frecuencia en conflictos adolescentes</li>
                  <li>• Relación directa con cambios puberales</li>
                  <li>• Efectividad demostrada en biomagnetismo</li>
                  <li>• Seguridad para población 12-18 años</li>
                </ul>
              </div>
            </div>
          </div>
        </SimpleSection>

        {/* Recursos Complementarios */}
        <SimpleSection
          title="Recursos Prácticos y Herramientas"
          icon={<BookOpen className="w-8 h-8" />}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">📋 Checklist de Sesión</h4>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2" />
                  <span>Consentimiento informado del adolescente</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2" />
                  <span>Mapeo corporal inicial</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2" />
                  <span>Rastreo de sensaciones (20 específicas)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2" />
                  <span>Aplicación de técnicas sensoriomotrices</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2" />
                  <span>Colocación de pares biomagnéticos</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2" />
                  <span>Verificación post-tratamiento</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">🚨 Protocolo de Crisis</h4>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="bg-red-50 p-3 rounded-lg">
                  <p className="font-semibold text-red-800">Señales de Alerta:</p>
                  <ul className="mt-1 space-y-1 text-red-700">
                    <li>• Ideación suicida o autolesiones</li>
                    <li>• Crisis de pánico severa</li>
                    <li>• Episodio psicótico</li>
                    <li>• Intoxicación por sustancias</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <p className="font-semibold text-yellow-800">Acciones Inmediatas:</p>
                  <ul className="mt-1 space-y-1 text-yellow-700">
                    <li>• Mantener al adolescente seguro</li>
                    <li>• Contactar familia/emergencias</li>
                    <li>• Derivar a servicios especializados</li>
                    <li>• Documentar todo el episodio</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">📚 Materiales Necesarios</h4>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-semibold text-blue-800 mb-2">Para Biomagnetismo:</p>
                  <ul className="space-y-1 text-blue-700">
                    <li>• Imanes de 1000-1500 gauss</li>
                    <li>• Lista de 40 pares biomagnéticos</li>
                    <li>• Cinta métrica para rastreo</li>
                    <li>• Registro de sesiones</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="font-semibold text-green-800 mb-2">Para Mapeo Corporal:</p>
                  <ul className="space-y-1 text-green-700">
                    <li>• Siluetas corporales en papel</li>
                    <li>• Colores para marcar sensaciones</li>
                    <li>• Lápices/marcadores</li>
                    <li>• Tabla de correlación con pares</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">📞 Red de Derivación</h4>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="font-semibold text-purple-800 mb-2">Emergencias:</p>
                  <ul className="space-y-1 text-purple-700">
                    <li>• Línea Nacional de Crisis: 911</li>
                    <li>• Línea de Prevención Suicidio: 988</li>
                    <li>• Hospital más cercano</li>
                    <li>• Servicios de urgencia 24/7</li>
                  </ul>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <p className="font-semibold text-indigo-800 mb-2">Especialistas:</p>
                  <ul className="space-y-1 text-indigo-700">
                    <li>• Psiquiatras de adolescentes</li>
                    <li>• Psicólogos especializados</li>
                    <li>• Terapeutas familiares</li>
                    <li>• Centros de tratamiento</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SimpleSection>

        {/* Cierre Final */}
        <div className="bg-gradient-to-r from-indigo-100 to-purple-200 rounded-lg p-8 text-indigo-800 text-center">
          <h2 className="text-3xl font-bold mb-6">
            🎉 ¡MÓDULO 4 COMPLETO! 🎉
          </h2>
          <h3 className="text-2xl font-semibold mb-4">
            BIOMAGNETISMO ADOLESCENTE
          </h3>
          <p className="text-xl italic mb-6">
            "El Cuerpo Que Cambia, la Identidad Que Despierta"
          </p>
          <p className="text-lg text-indigo-700 mb-6">
            Programa Intensivo de 1 Día - ¡Felicitaciones por completar este módulo especializado!
          </p>
          <div className="flex justify-center">
            <Heart className="w-8 h-8 text-indigo-700 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module4Block6;
