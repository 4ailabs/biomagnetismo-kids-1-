import React from 'react';
import CourseSection from '../../CourseSection';
import { Award, Heart, Target, ArrowRight, CheckCircle, Activity, Shield, Users, BookOpen } from 'lucide-react';

const Module3Block8: React.FC = () => {
  return (
    <div id="block-8" className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-100 to-gray-200 text-slate-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-slate-200 rounded-full">
              <Award className="w-12 h-12 text-slate-600" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Seguimiento, Ética y Recursos
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto">
            Criterios de Seguimiento, Consideraciones Éticas y Recursos Disponibles
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introducción */}
        <CourseSection
          title="Introducción al Seguimiento, Ética y Recursos"
          icon={<Award className="w-8 h-8 text-slate-500" />}
        >
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Aspectos Fundamentales del Biomagnetismo Escolar
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                El seguimiento, la ética y los recursos son pilares fundamentales en la práctica 
                del biomagnetismo escolar. Un enfoque profesional requiere protocolos de seguimiento 
                rigurosos, consideraciones éticas claras y acceso a recursos adecuados.
              </p>
              <p>
                <strong>El seguimiento continuo</strong> permite evaluar la efectividad del tratamiento, 
                ajustar protocolos según sea necesario y documentar el progreso del estudiante de 
                manera sistemática y profesional.
              </p>
              <p>
                <strong>La ética profesional</strong> garantiza que todas las intervenciones se realicen 
                con el consentimiento apropiado, respetando la confidencialidad y reconociendo las 
                limitaciones del biomagnetismo en el contexto escolar.
              </p>
              <p>
                <strong>Los recursos disponibles</strong> incluyen materiales educativos, apoyo profesional, 
                herramientas tecnológicas y redes de colaboración que facilitan la práctica efectiva 
                del biomagnetismo escolar.
              </p>
            </div>
          </div>
        </CourseSection>

        {/* Criterios de Seguimiento */}
        <CourseSection
          title="Criterios de Seguimiento Biomagnético"
          icon={<CheckCircle className="w-8 h-8 text-slate-500" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              El seguimiento biomagnético en el entorno escolar requiere protocolos específicos 
              que permitan evaluar la efectividad del tratamiento, documentar el progreso del 
              estudiante y ajustar las intervenciones según sea necesario.
            </p>
          </div>

          <div className="space-y-8">
            {/* Seguimiento Semanal */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Seguimiento Semanal</h3>
                  <p className="text-sm text-gray-500">Evaluación detallada de progreso y ajustes necesarios</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Evaluación física:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Síntomas físicos:</strong> Dolor, fatiga, problemas de sueño, apetito, digestión<br/>
                    <strong>Rastreo biomagnético:</strong> Verificación de pares desequilibrados<br/>
                    <strong>Respuesta al tratamiento:</strong> Mejora, estabilidad o empeoramiento de síntomas
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Evaluación emocional:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Estado de ánimo:</strong> Irritabilidad, ansiedad, depresión, euforia<br/>
                    <strong>Comportamiento:</strong> Agresividad, aislamiento, hiperactividad<br/>
                    <strong>Adaptación social:</strong> Relaciones con compañeros y maestros
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Rendimiento académico:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Concentración:</strong> Capacidad de atención, distracción<br/>
                    <strong>Memoria:</strong> Retención de información, recuerdo<br/>
                    <strong>Participación:</strong> Involucramiento en actividades escolares
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolo de seguimiento semanal:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Fase 1:</strong> Entrevista con el estudiante (5-10 minutos)<br/>
                    <strong>Fase 2:</strong> Rastreo biomagnético básico<br/>
                    <strong>Fase 3:</strong> Consulta con maestros (2-3 minutos)<br/>
                    <strong>Fase 4:</strong> Documentación y ajuste de protocolo
                  </p>
                </div>
              </div>
            </div>

            {/* Seguimiento Mensual */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Target className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Seguimiento Mensual</h3>
                  <p className="text-sm text-gray-500">Evaluación integral del progreso y planificación</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Evaluación integral:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Progreso general:</strong> Mejora, estabilidad o regresión en todos los aspectos<br/>
                    <strong>Estabilidad energética:</strong> Equilibrio de pares biomagnéticos<br/>
                    <strong>Adaptación escolar:</strong> Integración exitosa en el entorno educativo
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Análisis de datos:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Comparación mensual:</strong> Progreso respecto al mes anterior<br/>
                    <strong>Patrones de comportamiento:</strong> Identificación de tendencias<br/>
                    <strong>Efectividad del tratamiento:</strong> Análisis de resultados obtenidos
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Planificación:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Ajustes de protocolo:</strong> Modificaciones necesarias en el tratamiento<br/>
                    <strong>Objetivos a corto plazo:</strong> Metas para el próximo mes<br/>
                    <strong>Estrategias adicionales:</strong> Complementos al tratamiento biomagnético
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolo de seguimiento mensual:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Fase 1:</strong> Evaluación completa del estudiante (30 minutos)<br/>
                    <strong>Fase 2:</strong> Rastreo biomagnético detallado<br/>
                    <strong>Fase 3:</strong> Reunión con equipo educativo (15 minutos)<br/>
                    <strong>Fase 4:</strong> Consulta con padres (20 minutos)<br/>
                    <strong>Fase 5:</strong> Documentación y planificación
                  </p>
                </div>
              </div>
            </div>

            {/* Herramientas de Documentación */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <BookOpen className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Herramientas de Documentación</h3>
                  <p className="text-sm text-gray-500">Sistemas para registrar y analizar el progreso</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Registro de sesiones:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Ficha individual:</strong> Datos personales, historial médico, objetivos<br/>
                    <strong>Registro de sesiones:</strong> Fecha, duración, pares trabajados, observaciones<br/>
                    <strong>Evolución de síntomas:</strong> Escalas de intensidad, cambios observados
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Escalas de evaluación:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Escala de bienestar:</strong> 1-10 para evaluar estado general<br/>
                    <strong>Escala de síntomas:</strong> Intensidad de síntomas específicos<br/>
                    <strong>Escala de rendimiento:</strong> Evaluación académica y social
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Reportes periódicos:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Reporte semanal:</strong> Resumen de progreso y observaciones<br/>
                    <strong>Reporte mensual:</strong> Análisis detallado y recomendaciones<br/>
                    <strong>Reporte trimestral:</strong> Evaluación integral y planificación a largo plazo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Consideraciones Éticas */}
        <CourseSection
          title="Consideraciones Éticas en Biomagnetismo Escolar"
          icon={<Shield className="w-8 h-8 text-slate-500" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              La práctica ética del biomagnetismo escolar requiere el cumplimiento de principios 
              fundamentales que protejan los derechos del estudiante, respeten la confidencialidad 
              y garanticen la integridad profesional en todas las intervenciones.
            </p>
          </div>

          <div className="space-y-8">
            {/* Consentimiento Informado */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Shield className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Consentimiento Informado</h3>
                  <p className="text-sm text-gray-500">Fundamento ético para todas las intervenciones</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Consentimiento de los padres:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Información completa:</strong> Explicación detallada del biomagnetismo, beneficios y limitaciones<br/>
                    <strong>Proceso de tratamiento:</strong> Duración, frecuencia, técnicas utilizadas<br/>
                    <strong>Derechos del estudiante:</strong> Posibilidad de retirar el consentimiento en cualquier momento
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Explicación al estudiante:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Lenguaje apropiado:</strong> Adaptado a la edad y nivel de comprensión<br/>
                    <strong>Proceso lúdico:</strong> Explicación mediante juegos y actividades<br/>
                    <strong>Participación activa:</strong> Involucrar al niño en su propio proceso de sanación
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Documentación:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Formulario de consentimiento:</strong> Firmado por ambos padres o tutores legales<br/>
                    <strong>Renovación periódica:</strong> Actualización del consentimiento cada 6 meses<br/>
                    <strong>Registro de cambios:</strong> Documentación de modificaciones en el tratamiento
                  </p>
                </div>
              </div>
            </div>

            {/* Confidencialidad */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <Users className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Confidencialidad</h3>
                  <p className="text-sm text-gray-500">Protección de la información personal del estudiante</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Principios de confidencialidad:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Información privada:</strong> Protección de datos personales y médicos<br/>
                    <strong>Acceso limitado:</strong> Solo personal autorizado puede acceder a la información<br/>
                    <strong>Comunicación segura:</strong> Uso de canales seguros para compartir información
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Excepciones a la confidencialidad:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Riesgo de daño:</strong> Cuando existe peligro para el estudiante o terceros<br/>
                    <strong>Orden judicial:</strong> Cuando es requerido por autoridades competentes<br/>
                    <strong>Consentimiento explícito:</strong> Cuando el estudiante y padres autorizan la divulgación
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolos de información:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Información necesaria:</strong> Solo compartir lo esencial con el equipo educativo<br/>
                    <strong>Reportes periódicos:</strong> Comunicación estructurada con maestros y padres<br/>
                    <strong>Registro de accesos:</strong> Documentación de quién accede a la información
                  </p>
                </div>
              </div>
            </div>

            {/* Límites Profesionales */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <Activity className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Límites Profesionales</h3>
                  <p className="text-sm text-gray-500">Reconocimiento de competencias y limitaciones</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Competencias del biomagnetista:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Área de especialización:</strong> Biomagnetismo y equilibrio energético<br/>
                    <strong>Formación continua:</strong> Actualización constante de conocimientos<br/>
                    <strong>Supervisión profesional:</strong> Trabajo bajo supervisión de profesionales experimentados
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Limitaciones reconocidas:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>No es medicina:</strong> El biomagnetismo no reemplaza la atención médica<br/>
                    <strong>Casos complejos:</strong> Derivación a especialistas cuando sea necesario<br/>
                    <strong>Emergencias médicas:</strong> Reconocimiento de situaciones que requieren atención médica inmediata
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolos de derivación:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Indicadores de derivación:</strong> Síntomas que requieren atención médica<br/>
                    <strong>Red de profesionales:</strong> Contactos con médicos, psicólogos, terapeutas<br/>
                    <strong>Coordinación de cuidados:</strong> Trabajo conjunto con otros profesionales
                  </p>
                </div>
              </div>
            </div>

            {/* Trabajo en Equipo */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-orange-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Trabajo en Equipo</h3>
                  <p className="text-sm text-gray-500">Colaboración interdisciplinaria para el bienestar del estudiante</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Equipo educativo:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Maestros:</strong> Comunicación regular sobre progreso académico y comportamiento<br/>
                    <strong>Psicólogos escolares:</strong> Coordinación en aspectos emocionales y conductuales<br/>
                    <strong>Directivos:</strong> Apoyo institucional y recursos necesarios
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Equipo de salud:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Médicos:</strong> Coordinación en aspectos médicos y farmacológicos<br/>
                    <strong>Terapeutas:</strong> Complemento con otras terapias cuando sea necesario<br/>
                    <strong>Especialistas:</strong> Derivación a especialistas según necesidades específicas
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Familia:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Padres:</strong> Información regular y participación en el proceso<br/>
                    <strong>Familias extendidas:</strong> Inclusión de abuelos y otros cuidadores cuando sea apropiado<br/>
                    <strong>Apoyo familiar:</strong> Estrategias para el hogar y seguimiento en casa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Recursos Disponibles */}
        <CourseSection
          title="Recursos y Herramientas Disponibles"
          icon={<BookOpen className="w-8 h-8 text-slate-500" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              El acceso a recursos adecuados es fundamental para la práctica efectiva del biomagnetismo 
              escolar. Estos recursos incluyen materiales educativos, apoyo profesional, herramientas 
              tecnológicas y redes de colaboración que facilitan el trabajo del biomagnetista.
            </p>
          </div>

          <div className="space-y-8">
            {/* Materiales Educativos */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <BookOpen className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Materiales Educativos</h3>
                  <p className="text-sm text-gray-500">Recursos de aprendizaje y consulta para la práctica profesional</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Guías de protocolos:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Manual de pares biomagnéticos:</strong> Guía completa de pares específicos para escolares<br/>
                    <strong>Protocolos de emergencia:</strong> Procedimientos para situaciones críticas<br/>
                    <strong>Guías de rastreo:</strong> Técnicas específicas para el entorno escolar
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Materiales de apoyo:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Fichas de seguimiento:</strong> Formularios para documentar el progreso<br/>
                    <strong>Escalas de evaluación:</strong> Herramientas para medir mejoras<br/>
                    <strong>Materiales para familias:</strong> Guías de apoyo para padres y cuidadores
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Recursos multimedia:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Videos educativos:</strong> Demostraciones de técnicas y protocolos<br/>
                    <strong>Presentaciones interactivas:</strong> Materiales para capacitación<br/>
                    <strong>Podcasts especializados:</strong> Contenido de actualización profesional
                  </p>
                </div>
              </div>
            </div>

            {/* Apoyo Profesional */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <Users className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Apoyo Profesional</h3>
                  <p className="text-sm text-gray-500">Red de profesionales y programas de desarrollo continuo</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Red de profesionales:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Mentores experimentados:</strong> Biomagnetistas con experiencia en el ámbito escolar<br/>
                    <strong>Supervisión clínica:</strong> Acompañamiento en casos complejos<br/>
                    <strong>Red de consulta:</strong> Acceso a especialistas en diferentes áreas
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Programas de formación:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Capacitación inicial:</strong> Programas de formación básica en biomagnetismo escolar<br/>
                    <strong>Actualización continua:</strong> Cursos de recertificación y actualización<br/>
                    <strong>Especialización avanzada:</strong> Programas de profundización en áreas específicas
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Grupos de estudio:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Grupos locales:</strong> Reuniones presenciales para intercambio de experiencias<br/>
                    <strong>Comunidades virtuales:</strong> Foros online y grupos de discusión<br/>
                    <strong>Conferencias y congresos:</strong> Eventos de actualización y networking
                  </p>
                </div>
              </div>
            </div>

            {/* Tecnología y Herramientas */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <Activity className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Tecnología y Herramientas</h3>
                  <p className="text-sm text-gray-500">Herramientas digitales para optimizar la práctica profesional</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Software de seguimiento:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Sistemas de gestión de casos:</strong> Software para organizar y seguir casos individuales<br/>
                    <strong>Análisis de datos:</strong> Herramientas para analizar patrones y tendencias<br/>
                    <strong>Reportes automatizados:</strong> Generación de reportes de progreso
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Aplicaciones móviles:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Registro de sesiones:</strong> Apps para documentar sesiones en tiempo real<br/>
                    <strong>Comunicación con familias:</strong> Plataformas para mantener contacto con padres<br/>
                    <strong>Acceso a protocolos:</strong> Bases de datos móviles de pares biomagnéticos
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Herramientas de comunicación:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Plataformas de videoconferencia:</strong> Para consultas remotas y supervisión<br/>
                    <strong>Sistemas de mensajería segura:</strong> Comunicación confidencial con el equipo<br/>
                    <strong>Portales web especializados:</strong> Acceso a recursos y actualizaciones
                  </p>
                </div>
              </div>
            </div>

            {/* Recursos de Investigación */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-indigo-100 rounded-full mr-4">
                  <Target className="w-8 h-8 text-indigo-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Recursos de Investigación</h3>
                  <p className="text-sm text-gray-500">Acceso a evidencia científica y estudios de caso</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Bases de datos científicas:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Literatura especializada:</strong> Acceso a estudios sobre biomagnetismo<br/>
                    <strong>Investigaciones escolares:</strong> Estudios específicos en el ámbito educativo<br/>
                    <strong>Meta-análisis:</strong> Revisiones sistemáticas de la evidencia
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Estudios de caso:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Casos exitosos:</strong> Documentación de tratamientos efectivos<br/>
                    <strong>Casos complejos:</strong> Análisis de situaciones desafiantes<br/>
                    <strong>Lecciones aprendidas:</strong> Reflexiones sobre la práctica profesional
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolos de investigación:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Metodologías de estudio:</strong> Guías para investigar en biomagnetismo escolar<br/>
                    <strong>Ética en investigación:</strong> Protocolos para estudios con menores<br/>
                    <strong>Publicación de resultados:</strong> Guías para compartir hallazgos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Criterios de Evaluación Final */}
        <CourseSection
          title="Criterios de Evaluación Final"
          icon={<Target className="w-8 h-8 text-slate-500" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              La evaluación final del tratamiento biomagnético escolar requiere criterios objetivos 
              y subjetivos que permitan determinar la efectividad de la intervención y el logro 
              de los objetivos establecidos para cada estudiante.
            </p>
          </div>

          <div className="space-y-8">
            {/* Indicadores de Éxito */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Indicadores de Éxito</h3>
                  <p className="text-sm text-gray-500">Métricas para evaluar la efectividad del tratamiento</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Mejora académica:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Rendimiento escolar:</strong> Mejora en calificaciones y participación en clase<br/>
                    <strong>Concentración:</strong> Mayor capacidad de atención y enfoque<br/>
                    <strong>Memoria:</strong> Mejor retención y recuerdo de información<br/>
                    <strong>Motivación:</strong> Mayor interés y participación en actividades escolares
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Bienestar físico:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Reducción de síntomas:</strong> Disminución o eliminación de síntomas físicos<br/>
                    <strong>Energía vital:</strong> Mayor vitalidad y resistencia física<br/>
                    <strong>Sueño:</strong> Mejor calidad y duración del sueño<br/>
                    <strong>Alimentación:</strong> Mejor apetito y digestión
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Bienestar emocional:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Estabilidad emocional:</strong> Mayor equilibrio y control emocional<br/>
                    <strong>Autoestima:</strong> Mejor percepción de sí mismo<br/>
                    <strong>Relaciones sociales:</strong> Mejor interacción con compañeros y maestros<br/>
                    <strong>Comportamiento:</strong> Reducción de conductas problemáticas
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Estabilidad energética:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Equilibrio de pares:</strong> Estabilización de pares biomagnéticos<br/>
                    <strong>Resistencia a infecciones:</strong> Menor susceptibilidad a enfermedades<br/>
                    <strong>Recuperación:</strong> Mayor capacidad de recuperación ante estrés<br/>
                    <strong>Mantenimiento:</strong> Capacidad de mantener el equilibrio a largo plazo
                  </p>
                </div>
              </div>
            </div>

            {/* Métricas de Seguimiento */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Target className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Métricas de Seguimiento</h3>
                  <p className="text-sm text-gray-500">Herramientas cuantitativas y cualitativas de evaluación</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Escalas cuantitativas:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Escala de bienestar general:</strong> 1-10 para evaluar estado general<br/>
                    <strong>Escala de síntomas:</strong> Intensidad de síntomas específicos (0-10)<br/>
                    <strong>Escala de rendimiento académico:</strong> Evaluación de maestros (1-5)<br/>
                    <strong>Escala de comportamiento:</strong> Evaluación de conducta (1-5)
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Evaluación cualitativa:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Observación directa:</strong> Comportamiento en el aula y recreo<br/>
                    <strong>Entrevistas:</strong> Conversaciones con estudiante, padres y maestros<br/>
                    <strong>Reportes de maestros:</strong> Evaluación del progreso académico y social<br/>
                    <strong>Feedback de padres:</strong> Observaciones del comportamiento en casa
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Análisis de datos:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Comparación temporal:</strong> Progreso a lo largo del tiempo<br/>
                    <strong>Análisis de tendencias:</strong> Identificación de patrones de mejora<br/>
                    <strong>Correlaciones:</strong> Relación entre tratamiento y resultados<br/>
                    <strong>Estadísticas descriptivas:</strong> Resumen de datos cuantitativos
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Reportes de evaluación:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Reporte mensual:</strong> Evaluación detallada del progreso<br/>
                    <strong>Reporte trimestral:</strong> Análisis integral de resultados<br/>
                    <strong>Reporte final:</strong> Evaluación completa al finalizar el tratamiento<br/>
                    <strong>Recomendaciones:</strong> Sugerencias para el seguimiento futuro
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Plan de Seguimiento a Largo Plazo */}
        <CourseSection
          title="Plan de Seguimiento a Largo Plazo"
          icon={<Heart className="w-8 h-8 text-slate-500" />}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-800">Monitoreo Continuo</h4>
              <p className="text-sm text-gray-600">Seguimiento regular de síntomas y bienestar general del estudiante.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-800">Prevención</h4>
              <p className="text-sm text-gray-600">Estrategias para prevenir recaídas y mantener el equilibrio energético.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-800">Autonomía</h4>
              <p className="text-sm text-gray-600">Desarrollo de herramientas de autocuidado y autonomía del estudiante.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Heart className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-800">Apoyo Continuo</h4>
              <p className="text-sm text-gray-600">Red de apoyo permanente para el estudiante y su familia.</p>
            </div>
          </div>
        </CourseSection>

        {/* Conclusión */}
        <CourseSection
          title="Conclusión del Módulo 3"
          icon={<Award className="w-8 h-8 text-slate-500" />}
        >
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Integración del Conocimiento y Práctica Profesional
            </h3>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                El biomagnetismo escolar representa una herramienta complementaria valiosa para el desarrollo integral 
                de los niños en edad escolar. A través de este módulo, hemos explorado los aspectos fundamentales 
                que hacen del biomagnetismo una práctica efectiva y ética en el entorno educativo.
              </p>
              
              <p>
                <strong>La comprensión de los conflictos biológicos específicos</strong> de la etapa escolar, 
                combinada con el conocimiento de las patologías más comunes, las técnicas de rastreo integradas 
                y los protocolos de evaluación, proporciona una base sólida para intervenciones efectivas.
              </p>
              
              <p>
                <strong>El enfoque sistémico</strong> nos permite entender al niño como un ser integral, 
                donde los aspectos físicos, emocionales, cognitivos y sociales están interconectados. 
                Esta perspectiva holística es fundamental para el éxito del biomagnetismo escolar.
              </p>
              
              <p>
                <strong>Los casos clínicos y protocolos de emergencia</strong> nos preparan para situaciones 
                reales, proporcionando herramientas prácticas para manejar crisis y situaciones complejas 
                que pueden surgir en el entorno escolar.
              </p>
              
              <p>
                <strong>El conocimiento de microorganismos</strong> y su impacto en el aprendizaje nos permite 
                abordar no solo los síntomas, sino también las causas subyacentes de muchos problemas 
                que afectan el rendimiento académico de los estudiantes.
              </p>
              
              <p>
                <strong>El seguimiento, la ética y los recursos</strong> son pilares fundamentales que garantizan 
                una práctica profesional responsable, efectiva y sostenible a largo plazo.
              </p>
            </div>
            
            <div className="mt-8 bg-white rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Compromisos Profesionales
              </h4>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p><strong>Aplicar los principios éticos y profesionales</strong> en cada intervención biomagnética, respetando siempre los derechos del estudiante y las limitaciones de la práctica.</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <p><strong>Mantener un seguimiento continuo y documentado</strong> de cada caso, utilizando las herramientas y protocolos establecidos para evaluar el progreso y ajustar las intervenciones.</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                  <p><strong>Colaborar activamente con el equipo educativo y las familias</strong>, reconociendo que el éxito del biomagnetismo escolar depende del trabajo conjunto y la comunicación efectiva.</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <p><strong>Mantener una formación continua</strong> y actualización constante de conocimientos, aprovechando los recursos disponibles y participando en programas de desarrollo profesional.</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                  <p><strong>Contribuir al desarrollo del campo</strong> a través de la investigación, la documentación de casos y el intercambio de experiencias con otros profesionales.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Impacto Esperado
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Al aplicar estos conocimientos de manera ética y profesional, esperamos contribuir significativamente 
                al bienestar y rendimiento académico de los estudiantes, creando un entorno escolar más saludable 
                y propicio para el aprendizaje. El biomagnetismo escolar, cuando se practica con responsabilidad 
                y conocimiento, puede ser una herramienta poderosa para el desarrollo integral de los niños 
                en edad escolar.
              </p>
            </div>
          </div>
        </CourseSection>

        {/* Casos Clínicos Detallados */}
        <CourseSection
          title="Casos Clínicos Detallados"
          icon={<BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-slate-500" />}
        >
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg p-4 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                Casos Reales de Biomagnetismo Escolar
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                Los siguientes casos ilustran la aplicación práctica de la metodología biomagnética 
                en el contexto escolar, mostrando el protocolo completo desde la identificación de 
                sensaciones hasta la aplicación de pares específicos.
              </p>
            </div>

            {/* Caso 1: TDAH Inatento */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-yellow-100 rounded-full mr-3 sm:mr-4 mb-3 sm:mb-0 self-start">
                  <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">Caso 1: Ana, 8 años - TDAH Inatento</h3>
                  <p className="text-xs sm:text-sm text-gray-500">"Me desconecto para protegerme"</p>
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-blue-50 rounded-lg p-4 sm:p-6">
                    <h4 className="font-semibold text-blue-800 mb-3 text-sm sm:text-base">Presentación Clínica</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-blue-700">
                      <li>• Dificultad extrema para concentrarse en clase</li>
                      <li>• "Se va" mentalmente durante explicaciones</li>
                      <li>• Ansiedad matutina antes de ir al colegio</li>
                      <li>• Dolores de cabeza frecuentes</li>
                      <li>• Bajo rendimiento académico</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 sm:p-6">
                    <h4 className="font-semibold text-green-800 mb-3 text-sm sm:text-base">Protocolo de Rastreo</h4>
                    <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-green-700">
                      <div>
                        <strong>1. Sensación identificada:</strong> Desconexión, falta de contacto
                      </div>
                      <div>
                        <strong>2. Edad del conflicto:</strong> 6 años (primer día de colegio)
                      </div>
                      <div>
                        <strong>3. Par seleccionado:</strong> Temporal Izq (-) → Temporal Der (+)
                      </div>
                      <div>
                        <strong>4. Microorganismo:</strong> Tifus exantemático
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-amber-50 rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-amber-800 mb-3 text-sm sm:text-base">Secuencia de Trabajo Aplicada</h4>
                  <ol className="space-y-2 text-xs sm:text-sm text-amber-700">
                    <li><strong>Test muscular:</strong> Identificó sensación de "desconexión" al nombrar "falta de contacto"</li>
                    <li><strong>Regresión de edad:</strong> Confirmó conflicto a los 6 años, primer día de colegio</li>
                    <li><strong>Selección de par:</strong> Test muscular confirmó Temporal Izq (-) → Temporal Der (+)</li>
                    <li><strong>Aplicación:</strong> Imanes colocados 20 minutos, 3 sesiones semanales</li>
                  </ol>
                </div>
                
                <div className="bg-emerald-50 rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-emerald-800 mb-3 text-sm sm:text-base">Resultados</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs sm:text-sm text-emerald-700">
                    <div>
                      <strong>Inmediatos (1-2 semanas):</strong>
                      <ul className="mt-1 space-y-1">
                        <li>• Reducción ansiedad matutina</li>
                        <li>• Menos dolores de cabeza</li>
                        <li>• Mayor presencia en clase</li>
                      </ul>
                    </div>
                    <div>
                      <strong>A largo plazo (1-2 meses):</strong>
                      <ul className="mt-1 space-y-1">
                        <li>• Mejora concentración sostenida</li>
                        <li>• Incremento rendimiento académico</li>
                        <li>• Mayor confianza en sí misma</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Caso 2: Asma Escolar */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-red-100 rounded-full mr-3 sm:mr-4 mb-3 sm:mb-0 self-start">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">Caso 2: Roberto, 10 años - Asma Escolar</h3>
                  <p className="text-xs sm:text-sm text-gray-500">"Necesito regresar a casa"</p>
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-red-50 rounded-lg p-4 sm:p-6">
                    <h4 className="font-semibold text-red-800 mb-3 text-sm sm:text-base">Presentación Clínica</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-red-700">
                      <li>• Crisis asmáticas principalmente en horario escolar</li>
                      <li>• Silbidos al respirar durante clases</li>
                      <li>• Necesidad de salir del aula frecuentemente</li>
                      <li>• Bajo rendimiento por ausencias</li>
                      <li>• Ansiedad relacionada con el colegio</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 sm:p-6">
                    <h4 className="font-semibold text-green-800 mb-3 text-sm sm:text-base">Protocolo de Rastreo</h4>
                    <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-green-700">
                      <div>
                        <strong>1. Sensación identificada:</strong> Amenaza territorial
                      </div>
                      <div>
                        <strong>2. Edad del conflicto:</strong> 8 años (cambio de maestro)
                      </div>
                      <div>
                        <strong>3. Par seleccionado:</strong> Axila (-) → Axila (+)
                      </div>
                      <div>
                        <strong>4. Microorganismo:</strong> Virus rabia
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-amber-50 rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-amber-800 mb-3 text-sm sm:text-base">Secuencia de Trabajo Aplicada</h4>
                  <ol className="space-y-2 text-xs sm:text-sm text-amber-700">
                    <li><strong>Test muscular:</strong> Identificó sensación de "amenaza territorial" al nombrar "invasión de espacio"</li>
                    <li><strong>Regresión de edad:</strong> Confirmó conflicto a los 8 años, cambio de maestro estricto</li>
                    <li><strong>Selección de par:</strong> Test muscular confirmó Axila (-) → Axila (+)</li>
                    <li><strong>Aplicación:</strong> Imanes colocados 25 minutos, 2 sesiones semanales</li>
                  </ol>
                </div>
                
                <div className="bg-emerald-50 rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-emerald-800 mb-3 text-sm sm:text-base">Resultados</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs sm:text-sm text-emerald-700">
                    <div>
                      <strong>Inmediatos (1-2 semanas):</strong>
                      <ul className="mt-1 space-y-1">
                        <li>• Reducción crisis asmáticas</li>
                        <li>• Menos ansiedad en el colegio</li>
                        <li>• Mayor permanencia en aula</li>
                      </ul>
                    </div>
                    <div>
                      <strong>A largo plazo (1-2 meses):</strong>
                      <ul className="mt-1 space-y-1">
                        <li>• Prácticamente eliminadas las crisis</li>
                        <li>• Mejora rendimiento académico</li>
                        <li>• Mayor confianza en el entorno escolar</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Caso 3: Bruxismo Escolar */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-purple-100 rounded-full mr-3 sm:mr-4 mb-3 sm:mb-0 self-start">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">Caso 3: Carmen, 11 años - Bruxismo Escolar</h3>
                  <p className="text-xs sm:text-sm text-gray-500">"Debo aguantar sin poder expresar"</p>
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-purple-50 rounded-lg p-4 sm:p-6">
                    <h4 className="font-semibold text-purple-800 mb-3 text-sm sm:text-base">Presentación Clínica</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-purple-700">
                      <li>• Rechinar de dientes principalmente nocturno</li>
                      <li>• Dolor mandibular al despertar</li>
                      <li>• Tensión en cuello y hombros</li>
                      <li>• Dificultad para dormir</li>
                      <li>• Irritabilidad durante el día</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 sm:p-6">
                    <h4 className="font-semibold text-green-800 mb-3 text-sm sm:text-base">Protocolo de Rastreo</h4>
                    <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-green-700">
                      <div>
                        <strong>1. Sensación identificada:</strong> Ira reprimida
                      </div>
                      <div>
                        <strong>2. Edad del conflicto:</strong> 9 años (conflicto con compañeros)
                      </div>
                      <div>
                        <strong>3. Par seleccionado:</strong> Mandíbula (-) → Mandíbula (+)
                      </div>
                      <div>
                        <strong>4. Microorganismo:</strong> Neisseria gonorreae
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-amber-50 rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-amber-800 mb-3 text-sm sm:text-base">Secuencia de Trabajo Aplicada</h4>
                  <ol className="space-y-2 text-xs sm:text-sm text-amber-700">
                    <li><strong>Test muscular:</strong> Identificó sensación de "ira reprimida" al nombrar "no puedo expresar mi enojo"</li>
                    <li><strong>Regresión de edad:</strong> Confirmó conflicto a los 9 años, bullying por parte de compañeros</li>
                    <li><strong>Selección de par:</strong> Test muscular confirmó Mandíbula (-) → Mandíbula (+)</li>
                    <li><strong>Aplicación:</strong> Imanes colocados 20 minutos, 3 sesiones semanales</li>
                  </ol>
                </div>
                
                <div className="bg-emerald-50 rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-emerald-800 mb-3 text-sm sm:text-base">Resultados</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs sm:text-sm text-emerald-700">
                    <div>
                      <strong>Inmediatos (1-2 semanas):</strong>
                      <ul className="mt-1 space-y-1">
                        <li>• Reducción bruxismo nocturno</li>
                        <li>• Menos dolor mandibular</li>
                        <li>• Mejor calidad de sueño</li>
                      </ul>
                    </div>
                    <div>
                      <strong>A largo plazo (1-2 meses):</strong>
                      <ul className="mt-1 space-y-1">
                        <li>• Eliminación del bruxismo</li>
                        <li>• Mayor capacidad de expresión</li>
                        <li>• Mejora en relaciones sociales</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Caso 4: Ansiedad Escolar */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-orange-100 rounded-full mr-3 sm:mr-4 mb-3 sm:mb-0 self-start">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">Caso 4: Diego, 7 años - Ansiedad Escolar</h3>
                  <p className="text-xs sm:text-sm text-gray-500">"Puedo ser rechazado públicamente"</p>
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-orange-50 rounded-lg p-4 sm:p-6">
                    <h4 className="font-semibold text-orange-800 mb-3 text-sm sm:text-base">Presentación Clínica</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-orange-700">
                      <li>• Ansiedad extrema antes de ir al colegio</li>
                      <li>• Náuseas y vómitos matutinos</li>
                      <li>• Dificultad para separarse de los padres</li>
                      <li>• Evita participar en clase</li>
                      <li>• Aislamiento social</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 sm:p-6">
                    <h4 className="font-semibold text-green-800 mb-3 text-sm sm:text-base">Protocolo de Rastreo</h4>
                    <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-green-700">
                      <div>
                        <strong>1. Sensación identificada:</strong> Miedo profundo
                      </div>
                      <div>
                        <strong>2. Edad del conflicto:</strong> 6 años (humillación pública)
                      </div>
                      <div>
                        <strong>3. Par seleccionado:</strong> Temporal Izq (-) → Suprarrenal (+)
                      </div>
                      <div>
                        <strong>4. Holograma:</strong> Humillación Pública
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-amber-50 rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-amber-800 mb-3 text-sm sm:text-base">Secuencia de Trabajo Aplicada</h4>
                  <ol className="space-y-2 text-xs sm:text-sm text-amber-700">
                    <li><strong>Test muscular:</strong> Identificó sensación de "miedo profundo" al nombrar "vulnerabilidad"</li>
                    <li><strong>Regresión de edad:</strong> Confirmó conflicto a los 6 años, ridiculizado por compañeros</li>
                    <li><strong>Selección de par:</strong> Test muscular confirmó Temporal Izq (-) → Suprarrenal (+)</li>
                    <li><strong>Aplicación:</strong> Imanes colocados 25 minutos, 3 sesiones semanales</li>
                  </ol>
                </div>
                
                <div className="bg-emerald-50 rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-emerald-800 mb-3 text-sm sm:text-base">Resultados</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs sm:text-sm text-emerald-700">
                    <div>
                      <strong>Inmediatos (1-2 semanas):</strong>
                      <ul className="mt-1 space-y-1">
                        <li>• Reducción ansiedad matutina</li>
                        <li>• Menos náuseas</li>
                        <li>• Mayor facilidad para separarse</li>
                      </ul>
                    </div>
                    <div>
                      <strong>A largo plazo (1-2 meses):</strong>
                      <ul className="mt-1 space-y-1">
                        <li>• Participación activa en clase</li>
                        <li>• Mejora en relaciones sociales</li>
                        <li>• Mayor confianza en sí mismo</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Caso 5: Depresión Infantil */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-gray-100 rounded-full mr-3 sm:mr-4 mb-3 sm:mb-0 self-start">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">Caso 5: Sofía, 12 años - Depresión Infantil</h3>
                  <p className="text-xs sm:text-sm text-gray-500">"He fallado, no valgo lo suficiente"</p>
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                    <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">Presentación Clínica</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                      <li>• Tristeza persistente y apatía</li>
                      <li>• Aislamiento social</li>
                      <li>• Bajo rendimiento académico</li>
                      <li>• Pérdida de interés en actividades</li>
                      <li>• Ideas de autosabotaje</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 sm:p-6">
                    <h4 className="font-semibold text-green-800 mb-3 text-sm sm:text-base">Protocolo de Rastreo</h4>
                    <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-green-700">
                      <div>
                        <strong>1. Sensación identificada:</strong> Devaluación
                      </div>
                      <div>
                        <strong>2. Edad del conflicto:</strong> 11 años (fracaso académico)
                      </div>
                      <div>
                        <strong>3. Par seleccionado:</strong> Frontal (-) → Timo (+)
                      </div>
                      <div>
                        <strong>4. Holograma:</strong> Fracaso Académico Devastador
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-amber-50 rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-amber-800 mb-3 text-sm sm:text-base">Secuencia de Trabajo Aplicada</h4>
                  <ol className="space-y-2 text-xs sm:text-sm text-amber-700">
                    <li><strong>Test muscular:</strong> Identificó sensación de "devaluación" al nombrar "no valgo lo suficiente"</li>
                    <li><strong>Regresión de edad:</strong> Confirmó conflicto a los 11 años, examen reprobado públicamente</li>
                    <li><strong>Selección de par:</strong> Test muscular confirmó Frontal (-) → Timo (+)</li>
                    <li><strong>Aplicación:</strong> Imanes colocados 30 minutos, 2 sesiones semanales</li>
                  </ol>
                </div>
                
                <div className="bg-emerald-50 rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-emerald-800 mb-3 text-sm sm:text-base">Resultados</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs sm:text-sm text-emerald-700">
                    <div>
                      <strong>Inmediatos (1-2 semanas):</strong>
                      <ul className="mt-1 space-y-1">
                        <li>• Mejora en estado de ánimo</li>
                        <li>• Mayor motivación</li>
                        <li>• Inicio de reintegración social</li>
                      </ul>
                    </div>
                    <div>
                      <strong>A largo plazo (1-2 meses):</strong>
                      <ul className="mt-1 space-y-1">
                        <li>• Recuperación completa del ánimo</li>
                        <li>• Mejora significativa en rendimiento</li>
                        <li>• Reconstrucción de autoestima</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Consideraciones Finales */}
            <div className="bg-gradient-to-r from-slate-100 to-gray-200 rounded-lg p-4 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                Consideraciones Importantes en Casos Clínicos
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">Factores de Éxito</h4>
                  <ul className="space-y-2 text-xs sm:text-sm">
                    <li>• <strong>Consistencia:</strong> Aplicación regular de protocolos</li>
                    <li>• <strong>Contexto familiar:</strong> Involucramiento de padres</li>
                    <li>• <strong>Paciencia:</strong> Respeto por los tiempos del niño</li>
                    <li>• <strong>Observación:</strong> Seguimiento detallado de cambios</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">Limitaciones</h4>
                  <ul className="space-y-2 text-xs sm:text-sm">
                    <li>• <strong>No sustituye:</strong> Tratamiento médico convencional</li>
                    <li>• <strong>Individualidad:</strong> Cada caso es único</li>
                    <li>• <strong>Tiempo:</strong> Procesos requieren paciencia</li>
                    <li>• <strong>Colaboración:</strong> Necesita trabajo en equipo</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Próximos Pasos */}
        <div className="bg-gradient-to-r from-slate-100 to-gray-200 rounded-lg p-4 sm:p-6 lg:p-8 text-slate-800 text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            ¡Módulo 3 Completado!
          </h2>
          <p className="text-sm sm:text-base text-slate-700 mb-4 sm:mb-6">
            Has completado exitosamente el módulo de Biomagnetismo Escolar. 
            Ahora tienes las herramientas necesarias para aplicar esta técnica de manera ética y profesional en el entorno educativo.
          </p>
          <div className="flex justify-center">
            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module3Block8;