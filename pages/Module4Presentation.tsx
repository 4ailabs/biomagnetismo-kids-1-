import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, Clock, Users, Target, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Module4Presentation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl shadow-lg mb-8">
            <Heart className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Módulo 4: Biomagnetismo Adolescente
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            "El Cuerpo Que Cambia, la Identidad Que Despierta"
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
            Programa Intensivo de 1 Día - Patrones Energéticos de 12-18 Años
          </p>
          
          <Link
            to="/modulo/4/bloque/1"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-lg font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Comenzar Módulo
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

        {/* Module Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-4">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Duración</h3>
            <p className="text-gray-600">1 día intensivo</p>
            <p className="text-sm text-gray-500">8 horas de contenido</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 rounded-xl mb-4">
              <Users className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Dirigido a</h3>
            <p className="text-gray-600">Terapeutas biomagnéticos</p>
            <p className="text-sm text-gray-500">con experiencia en población infantil</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-xl mb-4">
              <Target className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Edad Objetivo</h3>
            <p className="text-gray-600">12-18 años</p>
            <p className="text-sm text-gray-500">Adolescencia</p>
          </div>
        </div>

        {/* Module Structure */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Estructura del Programa
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Bloque 1</h3>
              <p className="text-gray-600 mb-2">Marco Teórico - Conflictos Biológicos Adolescentes</p>
              <p className="text-sm text-gray-500">90 minutos</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Neurobiología de la adolescencia</li>
                <li>• Los 7 conflictos fundamentales</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Bloque 2</h3>
              <p className="text-gray-600 mb-2">Sensaciones Específicas de la Adolescencia</p>
              <p className="text-sm text-gray-500">45 minutos</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Las 20 sensaciones viscerales</li>
                <li>• Clasificación por función</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Bloque 3</h3>
              <p className="text-gray-600 mb-2">Patologías Adolescentes Específicas</p>
              <p className="text-sm text-gray-500">90 minutos</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Acné juvenil</li>
                <li>• Trastornos menstruales</li>
                <li>• Ansiedad y gastritis</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Bloque 4</h3>
              <p className="text-gray-600 mb-2">Técnicas de Rastreo Adolescente</p>
              <p className="text-sm text-gray-500">75 minutos</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Adaptaciones del rastreo</li>
                <li>• Lista de rastreo prioritario</li>
                <li>• Hologramas adolescentes</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Bloque 5</h3>
              <p className="text-gray-600 mb-2">Casos Clínicos y Crisis</p>
              <p className="text-sm text-gray-500">90 minutos</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Casos reales</li>
                <li>• Protocolos de crisis</li>
                <li>• Intervención de emergencia</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Bloque 6</h3>
              <p className="text-gray-600 mb-2">Herramientas Prácticas y Cierre</p>
              <p className="text-sm text-gray-500">60 minutos</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Técnicas de autoregulación</li>
                <li>• Mapeo corporal</li>
                <li>• Protocolos de seguimiento</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Características Principales
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Enfoque Neurobiológico</h3>
                  <p className="text-gray-600">
                    Basado en la neurobiología específica de la adolescencia, incluyendo poda sináptica, 
                    mielinización del lóbulo frontal y hiperactivación del sistema límbico.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Sensaciones Específicas</h3>
                  <p className="text-gray-600">
                    15 sensaciones viscerales específicas de la adolescencia, clasificadas en 
                    transformación, conflicto y resistencia.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Protocolos de Crisis</h3>
                  <p className="text-gray-600">
                    Protocolos específicos para crisis suicida, autolesión y consumo de sustancias, 
                    con derivación obligatoria cuando sea necesario.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Técnicas Adaptadas</h3>
                  <p className="text-gray-600">
                    Adaptaciones específicas del rastreo bioenergético para adolescentes, respetando 
                    su autonomía emergente y necesidad de explicaciones científicas.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Herramientas Prácticas</h3>
                  <p className="text-gray-600">
                    Técnicas de autoregulación validadas científicamente, incluyendo TIPP, 
                    respiración 4-7-8 y comunicación asertiva.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Casos Reales</h3>
                  <p className="text-gray-600">
                    Casos clínicos reales con evaluación biomagnética, protocolos aplicados y 
                    evolución del tratamiento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-100 to-pink-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              ¿Listo para Comenzar?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Sumérgete en el fascinante mundo del biomagnetismo adolescente y aprende 
              a acompañar esta etapa crucial del desarrollo humano.
            </p>
            <Link
              to="/modulo/4/bloque/1"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-lg font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Comenzar Módulo 4
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Module4Presentation;
