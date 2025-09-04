import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ArrowRight, Heart, Brain, Users, Target, CheckCircle, Zap, Shield, Activity } from 'lucide-react';

const Module3Presentation: React.FC = () => {
  const navigate = useNavigate();

  const handleStartModule = () => {
    navigate('/manual');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-white/20 rounded-full">
              <BookOpen className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
            Módulo 3: Biomagnetismo Escolar
          </h1>
          <p className="text-2xl sm:text-3xl text-emerald-100 max-w-5xl mx-auto mb-8">
            Aprender Sin Perderme a Mí Mismo: Patrones Energéticos de 5-12 Años
          </p>
          <div className="bg-white/10 rounded-lg p-6 max-w-4xl mx-auto">
            <p className="text-lg text-emerald-100">
              Un enfoque integral para identificar y resolver los conflictos biológicos 
              que afectan el proceso de aprendizaje en niños de 5 a 12 años, utilizando 
              técnicas de biomagnetismo adaptadas al contexto escolar.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Objetivos del Módulo */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Objetivos del Módulo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Brain className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Identificar Conflictos
              </h3>
              <p className="text-gray-600">
                Aprender a reconocer los 8 conflictos biológicos escolares 
                y su manifestación en el comportamiento del niño.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-teal-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Target className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Aplicar Técnicas
              </h3>
              <p className="text-gray-600">
                Dominar las 3 técnicas integradas de rastreo biomagnético 
                específicas para el contexto escolar.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-cyan-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Heart className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Mejorar Aprendizaje
              </h3>
              <p className="text-gray-600">
                Facilitar el proceso de aprendizaje y desarrollo 
                integral del niño en el entorno educativo.
              </p>
            </div>
          </div>
        </div>

        {/* Contenido del Módulo */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Contenido del Módulo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Bloque 1: Fundamentos
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <BookOpen className="w-6 h-6 text-emerald-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">8 Conflictos Escolares</h4>
                    <p className="text-sm text-gray-600">Rendimiento, Competencia, Aceptación, Autoridad, Creatividad, Movimiento, Comunicación, Identidad</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Brain className="w-6 h-6 text-teal-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Impacto en el Aprendizaje</h4>
                    <p className="text-sm text-gray-600">Manifestaciones físicas, emocionales y cognitivas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Bloque 2: Patologías
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Heart className="w-6 h-6 text-pink-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">TDAH, Asma, Bruxismo</h4>
                    <p className="text-sm text-gray-600">Patologías específicas asociadas a conflictos escolares</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Activity className="w-6 h-6 text-red-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Desórdenes Digestivos</h4>
                    <p className="text-sm text-gray-600">Problemas digestivos en el contexto escolar</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Bloque 3: Técnicas
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-yellow-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Rastreo Bioenergético</h4>
                    <p className="text-sm text-gray-600">Detección de frecuencias electromagnéticas</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Biomagnetismo Clásico</h4>
                    <p className="text-sm text-gray-600">Uso de imanes para corrección de pares</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Rastreo Holográfico</h4>
                    <p className="text-sm text-gray-600">Mapeo de patrones energéticos</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Bloque 4: Evaluación
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Herramientas de Evaluación</h4>
                    <p className="text-sm text-gray-600">Escalas de comportamiento y medidas físicas</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Activity className="w-6 h-6 text-indigo-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Mapeo de Sensaciones</h4>
                    <p className="text-sm text-gray-600">Registro de sensaciones corporales y emocionales</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Bloque 5: Sistémico
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-orange-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Enfoque Sistémico</h4>
                    <p className="text-sm text-gray-600">Desórdenes sistémicos y conflictología dental</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Heart className="w-6 h-6 text-pink-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Sistema Familiar</h4>
                    <p className="text-sm text-gray-600">Impacto del sistema familiar en el aprendizaje</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Bloque 6: Casos Clínicos
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Activity className="w-6 h-6 text-teal-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Casos Reales</h4>
                    <p className="text-sm text-gray-600">TDAH, Asma y otros casos de aplicación práctica</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-red-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Protocolos de Emergencia</h4>
                    <p className="text-sm text-gray-600">Manejo de crisis y derivación médica</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Bloque 7: Microorganismos
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Activity className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Bacterias y Virus</h4>
                    <p className="text-sm text-gray-600">Microorganismos asociados a conflictos escolares</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Hongos y Parásitos</h4>
                    <p className="text-sm text-gray-600">Protocolos de rastreo y tratamiento</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Bloque 8: Seguimiento
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-amber-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Criterios de Seguimiento</h4>
                    <p className="text-sm text-gray-600">Evaluación semanal, mensual y a largo plazo</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-indigo-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Ética y Recursos</h4>
                    <p className="text-sm text-gray-600">Consideraciones éticas y recursos disponibles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Características del Módulo */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Características del Módulo
          </h2>
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">8 Bloques</h3>
                <p className="text-gray-600 text-sm">Contenido estructurado y progresivo</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Target className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Técnicas Integradas</h3>
                <p className="text-gray-600 text-sm">3 técnicas complementarias</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Enfoque Sistémico</h3>
                <p className="text-gray-600 text-sm">Visión integral del niño</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Casos Prácticos</h3>
                <p className="text-gray-600 text-sm">Aplicación en situaciones reales</p>
              </div>
            </div>
          </div>
        </div>

        {/* Duración y Metodología */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Duración y Metodología
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Duración del Módulo
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800">8 Sesiones Teóricas</h4>
                    <p className="text-gray-600">2 horas por sesión</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800">4 Sesiones Prácticas</h4>
                    <p className="text-gray-600">3 horas por sesión</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Total: 28 Horas</h4>
                    <p className="text-gray-600">Distribuidas en 4 semanas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Metodología
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-teal-500 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Teoría y Práctica</h4>
                    <p className="text-gray-600">Combinación de conocimientos teóricos y aplicación práctica</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-teal-500 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Casos Clínicos</h4>
                    <p className="text-gray-600">Análisis de casos reales y protocolos de emergencia</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-teal-500 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Evaluación Continua</h4>
                    <p className="text-gray-600">Seguimiento del progreso y ajustes necesarios</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Requisitos Previos */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Requisitos Previos
          </h2>
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Conocimientos Necesarios
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3" />
                    Fundamentos de biomagnetismo
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3" />
                    Anatomía y fisiología básica
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3" />
                    Psicología del desarrollo infantil
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3" />
                    Técnicas de comunicación
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Habilidades Desarrolladas
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3" />
                    Diagnóstico de conflictos escolares
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3" />
                    Aplicación de técnicas biomagnéticas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3" />
                    Evaluación y seguimiento
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3" />
                    Trabajo en equipo multidisciplinario
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-lg p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">
              ¿Listo para Comenzar?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Aprende a identificar y resolver los conflictos biológicos que afectan 
              el aprendizaje de los niños en el contexto escolar. Desarrolla habilidades 
              profesionales en biomagnetismo aplicado a la educación.
            </p>
            <button
              onClick={handleStartModule}
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-colors duration-300 flex items-center mx-auto"
            >
              Comenzar Módulo 3
              <ArrowRight className="w-6 h-6 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module3Presentation;