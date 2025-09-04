import React from 'react';
import CourseSection from '../../CourseSection';
import { Microscope, AlertTriangle, Heart, Target, ArrowRight, CheckCircle, Activity, Shield, Zap } from 'lucide-react';

const Module3Block7: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-100 to-gray-200 text-slate-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-slate-200 rounded-full">
              <Microscope className="w-12 h-12 text-slate-600" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Microorganismos en el Contexto Escolar
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto">
            Bacterias, Virus, Hongos y Parásitos que Afectan el Aprendizaje
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introducción */}
        <CourseSection
          title="Introducción a los Microorganismos en el Contexto Escolar"
          icon={<Microscope className="w-8 h-8 text-slate-500" />}
        >
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Microorganismos y su Impacto en el Aprendizaje
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Los microorganismos (bacterias, virus, hongos y parásitos) son una parte natural 
                del entorno escolar y pueden tener un impacto significativo en la salud y el 
                aprendizaje de los estudiantes. Comprender su presencia y efectos es fundamental 
                para el biomagnetismo escolar.
              </p>
              <p>
                <strong>Las infecciones microbianas</strong> no solo causan síntomas físicos, 
                sino que también afectan la capacidad de concentración, memoria, procesamiento 
                cognitivo y rendimiento académico de los estudiantes.
              </p>
              <p>
                <strong>El biomagnetismo</strong> ofrece una herramienta efectiva para identificar 
                y neutralizar microorganismos patógenos, fortalecer el sistema inmunológico y 
                mejorar el bienestar general del estudiante en el entorno educativo.
              </p>
            </div>
          </div>
        </CourseSection>

        {/* Bacterias */}
        <CourseSection
          title="Bacterias en el Entorno Escolar"
          icon={<Microscope className="w-8 h-8 text-slate-500" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              Las bacterias son microorganismos unicelulares que pueden causar infecciones en el 
              entorno escolar. Su presencia puede afectar significativamente la salud y el 
              rendimiento académico de los estudiantes.
            </p>
          </div>

          <div className="space-y-8">
            {/* Streptococcus */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Microscope className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Streptococcus</h3>
                  <p className="text-sm text-gray-500">Bacterias grampositivas que causan infecciones respiratorias</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Tipos principales:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Streptococcus pyogenes:</strong> Faringitis, amigdalitis, fiebre escarlatina<br/>
                    <strong>Streptococcus pneumoniae:</strong> Neumonía, otitis media, sinusitis<br/>
                    <strong>Streptococcus mutans:</strong> Caries dental, problemas de salud bucal
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Pares biomagnéticos:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Streptococcus pyogenes:</strong> Amígdalas (-) → Amígdalas (+), Timo (-) → Timo (+)<br/>
                    <strong>Streptococcus pneumoniae:</strong> Pulmón (-) → Pulmón (+), Senos (-) → Senos (+)<br/>
                    <strong>Streptococcus mutans:</strong> Diente (-) → Diente (+), Encía (-) → Encía (+)
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Impacto escolar:</p>
                  <p className="text-sm leading-relaxed">
                    Dificultad para tragar, dolor de garganta, fiebre, fatiga, ausentismo escolar, 
                    problemas de concentración, dificultad para comer en el comedor escolar.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolo biomagnético:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Fase 1:</strong> Identificar pares específicos según el tipo de infección<br/>
                    <strong>Fase 2:</strong> Aplicar imanes en pares desequilibrados<br/>
                    <strong>Fase 3:</strong> Fortalecer sistema inmune (Timo, Bazo, Ganglios)<br/>
                    <strong>Fase 4:</strong> Protocolo de mantenimiento y prevención
                  </p>
                </div>
              </div>
            </div>

            {/* Staphylococcus */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 rounded-full mr-4">
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Staphylococcus</h3>
                  <p className="text-sm text-gray-500">Bacterias que causan infecciones de piel y tejidos blandos</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Tipos principales:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Staphylococcus aureus:</strong> Infecciones de piel, forúnculos, impétigo<br/>
                    <strong>Staphylococcus epidermidis:</strong> Infecciones de dispositivos médicos<br/>
                    <strong>MRSA:</strong> Staphylococcus aureus resistente a meticilina
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Pares biomagnéticos:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Staphylococcus aureus:</strong> Piel (-) → Piel (+), Ganglios (-) → Ganglios (+)<br/>
                    <strong>Infecciones cutáneas:</strong> Área afectada (-) → Área afectada (+)<br/>
                    <strong>Sistema inmune:</strong> Timo (-) → Timo (+), Bazo (-) → Bazo (+)
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Impacto escolar:</p>
                  <p className="text-sm leading-relaxed">
                    Lesiones cutáneas visibles, dolor, picazón, vergüenza social, aislamiento, 
                    problemas de autoestima, dificultad para participar en actividades físicas.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolo biomagnético:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Fase 1:</strong> Trabajar área cutánea afectada<br/>
                    <strong>Fase 2:</strong> Fortalecer sistema inmune local y general<br/>
                    <strong>Fase 3:</strong> Protocolo de desinfección energética<br/>
                    <strong>Fase 4:</strong> Prevención de reinfección
                  </p>
                </div>
              </div>
            </div>

            {/* Escherichia coli */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Escherichia coli</h3>
                  <p className="text-sm text-gray-500">Bacteria intestinal que causa problemas gastrointestinales</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Tipos principales:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>E. coli patógena:</strong> Diarrea, dolor abdominal, fiebre<br/>
                    <strong>E. coli enterohemorrágica:</strong> Síndrome urémico hemolítico<br/>
                    <strong>E. coli uropatógena:</strong> Infecciones del tracto urinario
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Pares biomagnéticos:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>E. coli intestinal:</strong> Intestino (-) → Intestino (+), Colon (-) → Colon (+)<br/>
                    <strong>E. coli urinaria:</strong> Vejiga (-) → Vejiga (+), Riñón (-) → Riñón (+)<br/>
                    <strong>Sistema digestivo:</strong> Estómago (-) → Estómago (+), Páncreas (-) → Páncreas (+)
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Impacto escolar:</p>
                  <p className="text-sm leading-relaxed">
                    Dolor abdominal, diarrea, náuseas, fatiga, ausentismo escolar, 
                    dificultad para concentrarse, problemas de hidratación, vergüenza social.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolo biomagnético:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Fase 1:</strong> Trabajar sistema digestivo completo<br/>
                    <strong>Fase 2:</strong> Neutralizar E. coli específica<br/>
                    <strong>Fase 3:</strong> Restaurar flora intestinal saludable<br/>
                    <strong>Fase 4:</strong> Fortalecer sistema inmune intestinal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Virus */}
        <CourseSection
          title="Virus en el Contexto Escolar"
          icon={<AlertTriangle className="w-8 h-8 text-slate-500" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              Los virus son microorganismos que requieren células huésped para replicarse. 
              En el entorno escolar, las infecciones virales son muy comunes y pueden 
              causar ausentismo significativo y problemas de rendimiento académico.
            </p>
          </div>

          <div className="space-y-8">
            {/* Rinovirus */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-orange-100 rounded-full mr-4">
                  <AlertTriangle className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Rinovirus</h3>
                  <p className="text-sm text-gray-500">Causa principal del resfriado común</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Características:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Transmisión:</strong> Aérea, contacto directo, superficies contaminadas<br/>
                    <strong>Incidencia:</strong> Más común en otoño e invierno<br/>
                    <strong>Duración:</strong> 7-10 días, puede persistir hasta 2 semanas
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Pares biomagnéticos:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Rinovirus:</strong> Nariz (-) → Nariz (+), Senos (-) → Senos (+)<br/>
                    <strong>Sistema respiratorio:</strong> Garganta (-) → Garganta (+), Pulmón (-) → Pulmón (+)<br/>
                    <strong>Sistema inmune:</strong> Timo (-) → Timo (+), Ganglios (-) → Ganglios (+)
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Impacto escolar:</p>
                  <p className="text-sm leading-relaxed">
                    Congestión nasal, estornudos, tos, fatiga, dificultad para concentrarse, 
                    ausentismo escolar, problemas de sueño, irritabilidad.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolo biomagnético:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Fase 1:</strong> Trabajar sistema respiratorio superior<br/>
                    <strong>Fase 2:</strong> Fortalecer sistema inmune<br/>
                    <strong>Fase 3:</strong> Aliviar síntomas específicos<br/>
                    <strong>Fase 4:</strong> Prevención de complicaciones
                  </p>
                </div>
              </div>
            </div>

            {/* Influenza */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Influenza</h3>
                  <p className="text-sm text-gray-500">Virus de la gripe que causa enfermedad respiratoria severa</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Tipos principales:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Influenza A:</strong> Más severa, puede causar pandemias<br/>
                    <strong>Influenza B:</strong> Moderadamente severa, estacional<br/>
                    <strong>Influenza C:</strong> Leve, similar al resfriado común
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Pares biomagnéticos:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Influenza A/B:</strong> Pulmón (-) → Pulmón (+), Corazón (-) → Corazón (+)<br/>
                    <strong>Sistema respiratorio:</strong> Bronquios (-) → Bronquios (+), Diafragma (-) → Diafragma (+)<br/>
                    <strong>Sistema inmune:</strong> Timo (-) → Timo (+), Bazo (-) → Bazo (+)
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Impacto escolar:</p>
                  <p className="text-sm leading-relaxed">
                    Fiebre alta, dolores musculares, fatiga extrema, tos seca, dolor de cabeza, 
                    ausentismo prolongado, dificultad para concentrarse, debilidad general.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolo biomagnético:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Fase 1:</strong> Protocolo de emergencia para fiebre alta<br/>
                    <strong>Fase 2:</strong> Trabajar sistema respiratorio completo<br/>
                    <strong>Fase 3:</strong> Fortalecer sistema inmune y cardiovascular<br/>
                    <strong>Fase 4:</strong> Recuperación y prevención de complicaciones
                  </p>
                </div>
              </div>
            </div>

            {/* Varicela */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-yellow-100 rounded-full mr-4">
                  <Target className="w-8 h-8 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Varicela</h3>
                  <p className="text-sm text-gray-500">Virus que causa enfermedad eruptiva en niños</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Características:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Transmisión:</strong> Aérea, contacto directo con lesiones<br/>
                    <strong>Período de incubación:</strong> 10-21 días<br/>
                    <strong>Contagiosidad:</strong> 1-2 días antes de la erupción hasta que se formen costras
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Pares biomagnéticos:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Varicela:</strong> Piel (-) → Piel (+), Ganglios (-) → Ganglios (+)<br/>
                    <strong>Sistema inmune:</strong> Timo (-) → Timo (+), Bazo (-) → Bazo (+)<br/>
                    <strong>Sistema nervioso:</strong> Cerebro (-) → Cerebro (+), Médula (-) → Médula (+)
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Impacto escolar:</p>
                  <p className="text-sm leading-relaxed">
                    Erupción cutánea, picazón intensa, fiebre, fatiga, ausentismo prolongado, 
                    aislamiento social, problemas de autoestima, dificultad para dormir.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolo biomagnético:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Fase 1:</strong> Trabajar sistema inmune para reducir severidad<br/>
                    <strong>Fase 2:</strong> Aliviar síntomas cutáneos y picazón<br/>
                    <strong>Fase 3:</strong> Prevenir complicaciones (neumonía, encefalitis)<br/>
                    <strong>Fase 4:</strong> Recuperación y prevención de herpes zóster
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Hongos */}
        <CourseSection
          title="Hongos en el Entorno Escolar"
          icon={<Target className="w-8 h-8 text-slate-500" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              Los hongos son microorganismos eucariotas que pueden causar infecciones en el 
              entorno escolar. Las infecciones fúngicas son particularmente problemáticas 
              en ambientes húmedos y mal ventilados.
            </p>
          </div>

          <div className="space-y-8">
            {/* Candida */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <Target className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Candida</h3>
                  <p className="text-sm text-gray-500">Levadura que causa candidiasis</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Tipos principales:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Candida albicans:</strong> Más común, causa candidiasis oral y vaginal<br/>
                    <strong>Candida tropicalis:</strong> Infecciones sistémicas<br/>
                    <strong>Candida glabrata:</strong> Infecciones resistentes a antifúngicos
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Pares biomagnéticos:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Candida oral:</strong> Boca (-) → Boca (+), Lengua (-) → Lengua (+)<br/>
                    <strong>Candida intestinal:</strong> Intestino (-) → Intestino (+), Colon (-) → Colon (+)<br/>
                    <strong>Sistema inmune:</strong> Timo (-) → Timo (+), Bazo (-) → Bazo (+)
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Impacto escolar:</p>
                  <p className="text-sm leading-relaxed">
                    Candidiasis oral (muguet), problemas de deglución, dolor al comer, 
                    mal aliento, fatiga, problemas de concentración, vergüenza social.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolo biomagnético:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Fase 1:</strong> Trabajar área afectada específica<br/>
                    <strong>Fase 2:</strong> Fortalecer sistema inmune<br/>
                    <strong>Fase 3:</strong> Restaurar flora microbiana saludable<br/>
                    <strong>Fase 4:</strong> Prevención de recurrencia
                  </p>
                </div>
              </div>
            </div>

            {/* Aspergillus */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <CheckCircle className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Aspergillus</h3>
                  <p className="text-sm text-gray-500">Moho que causa aspergilosis</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Tipos principales:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Aspergillus fumigatus:</strong> Aspergilosis pulmonar<br/>
                    <strong>Aspergillus flavus:</strong> Aspergilosis alérgica<br/>
                    <strong>Aspergillus niger:</strong> Otomicosis (infección del oído)
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Pares biomagnéticos:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Aspergilosis pulmonar:</strong> Pulmón (-) → Pulmón (+), Bronquios (-) → Bronquios (+)<br/>
                    <strong>Aspergilosis alérgica:</strong> Senos (-) → Senos (+), Nariz (-) → Nariz (+)<br/>
                    <strong>Sistema inmune:</strong> Timo (-) → Timo (+), Ganglios (-) → Ganglios (+)
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Impacto escolar:</p>
                  <p className="text-sm leading-relaxed">
                    Problemas respiratorios, tos crónica, fatiga, dificultad para concentrarse, 
                    ausentismo escolar, problemas de sueño, ansiedad por síntomas.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolo biomagnético:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Fase 1:</strong> Trabajar sistema respiratorio<br/>
                    <strong>Fase 2:</strong> Fortalecer sistema inmune<br/>
                    <strong>Fase 3:</strong> Reducir carga fúngica<br/>
                    <strong>Fase 4:</strong> Prevención de exposición
                  </p>
                </div>
              </div>
            </div>

            {/* Dermatofitos */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-yellow-100 rounded-full mr-4">
                  <Activity className="w-8 h-8 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Dermatofitos</h3>
                  <p className="text-sm text-gray-500">Hongos que causan infecciones de piel, uñas y cabello</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Tipos principales:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Trichophyton:</strong> Tiña del cuerpo, pie de atleta<br/>
                    <strong>Microsporum:</strong> Tiña del cuero cabelludo<br/>
                    <strong>Epidermophyton:</strong> Tiña inguinal, pie de atleta
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Pares biomagnéticos:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Tiña del cuerpo:</strong> Piel (-) → Piel (+), Área afectada (-) → Área afectada (+)<br/>
                    <strong>Pie de atleta:</strong> Pie (-) → Pie (+), Dedos (-) → Dedos (+)<br/>
                    <strong>Sistema inmune:</strong> Timo (-) → Timo (+), Ganglios (-) → Ganglios (+)
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Impacto escolar:</p>
                  <p className="text-sm leading-relaxed">
                    Lesiones cutáneas visibles, picazón, dolor, vergüenza social, 
                    aislamiento, problemas de autoestima, dificultad para participar en deportes.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolo biomagnético:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Fase 1:</strong> Trabajar área cutánea afectada<br/>
                    <strong>Fase 2:</strong> Fortalecer sistema inmune local<br/>
                    <strong>Fase 3:</strong> Prevenir diseminación<br/>
                    <strong>Fase 4:</strong> Prevención de reinfección
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Parásitos */}
        <CourseSection
          title="Parásitos en el Contexto Escolar"
          icon={<Zap className="w-8 h-8 text-slate-500" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              Los parásitos son microorganismos que viven a expensas de un huésped. 
              En el entorno escolar, las infecciones parasitarias pueden causar 
              problemas gastrointestinales y afectar significativamente el rendimiento académico.
            </p>
          </div>

          <div className="space-y-8">
            {/* Oxiuros */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 rounded-full mr-4">
                  <Zap className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Oxiuros</h3>
                  <p className="text-sm text-gray-500">Parásitos intestinales más comunes en niños</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Características:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Transmisión:</strong> Fecal-oral, autoinfección<br/>
                    <strong>Hábitat:</strong> Intestino grueso, región perianal<br/>
                    <strong>Incidencia:</strong> Muy común en niños de 5-10 años
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Pares biomagnéticos:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Oxiuros:</strong> Intestino (-) → Intestino (+), Recto (-) → Recto (+)<br/>
                    <strong>Sistema digestivo:</strong> Colon (-) → Colon (+), Ano (-) → Ano (+)<br/>
                    <strong>Sistema inmune:</strong> Timo (-) → Timo (+), Bazo (-) → Bazo (+)
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Impacto escolar:</p>
                  <p className="text-sm leading-relaxed">
                    Picazón anal, irritabilidad, problemas de sueño, dificultad para concentrarse, 
                    fatiga, problemas de comportamiento, vergüenza social.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolo biomagnético:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Fase 1:</strong> Trabajar sistema digestivo<br/>
                    <strong>Fase 2:</strong> Neutralizar oxiuros específicos<br/>
                    <strong>Fase 3:</strong> Fortalecer sistema inmune<br/>
                    <strong>Fase 4:</strong> Prevención de reinfección
                  </p>
                </div>
              </div>
            </div>

            {/* Giardia */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-orange-100 rounded-full mr-4">
                  <Activity className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Giardia</h3>
                  <p className="text-sm text-gray-500">Protozoo que causa giardiasis</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Características:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Transmisión:</strong> Agua contaminada, alimentos, contacto fecal-oral<br/>
                    <strong>Hábitat:</strong> Intestino delgado<br/>
                    <strong>Incidencia:</strong> Común en áreas con saneamiento deficiente
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Pares biomagnéticos:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Giardia:</strong> Intestino (-) → Intestino (+), Duodeno (-) → Duodeno (+)<br/>
                    <strong>Sistema digestivo:</strong> Estómago (-) → Estómago (+), Páncreas (-) → Páncreas (+)<br/>
                    <strong>Sistema inmune:</strong> Timo (-) → Timo (+), Ganglios (-) → Ganglios (+)
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Impacto escolar:</p>
                  <p className="text-sm leading-relaxed">
                    Diarrea crónica, dolor abdominal, náuseas, fatiga, pérdida de peso, 
                    problemas de concentración, ausentismo escolar, deshidratación.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolo biomagnético:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Fase 1:</strong> Trabajar sistema digestivo superior<br/>
                    <strong>Fase 2:</strong> Neutralizar Giardia específica<br/>
                    <strong>Fase 3:</strong> Restaurar función digestiva<br/>
                    <strong>Fase 4:</strong> Prevención de reinfección
                  </p>
                </div>
              </div>
            </div>

            {/* Amebas */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <Shield className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Amebas</h3>
                  <p className="text-sm text-gray-500">Protozoos que causan amebiasis</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Tipos principales:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Entamoeba histolytica:</strong> Amebiasis intestinal y extraintestinal<br/>
                    <strong>Entamoeba dispar:</strong> No patógena, similar a E. histolytica<br/>
                    <strong>Entamoeba coli:</strong> No patógena, comensal
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Pares biomagnéticos:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Amebiasis intestinal:</strong> Intestino (-) → Intestino (+), Colon (-) → Colon (+)<br/>
                    <strong>Amebiasis hepática:</strong> Hígado (-) → Hígado (+), Vesícula (-) → Vesícula (+)<br/>
                    <strong>Sistema inmune:</strong> Timo (-) → Timo (+), Bazo (-) → Bazo (+)
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Impacto escolar:</p>
                  <p className="text-sm leading-relaxed">
                    Diarrea con sangre, dolor abdominal severo, fiebre, fatiga, 
                    problemas de concentración, ausentismo escolar, desnutrición.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolo biomagnético:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Fase 1:</strong> Trabajar sistema digestivo<br/>
                    <strong>Fase 2:</strong> Neutralizar amebas específicas<br/>
                    <strong>Fase 3:</strong> Fortalecer sistema inmune<br/>
                    <strong>Fase 4:</strong> Prevención de complicaciones
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Prevención y Control */}
        <CourseSection
          title="Prevención y Control de Microorganismos"
          icon={<Shield className="w-8 h-8 text-slate-500" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              La prevención y control de microorganismos en el entorno escolar es fundamental 
              para mantener un ambiente saludable y propicio para el aprendizaje. Un enfoque 
              integral incluye medidas preventivas, fortalecimiento inmunológico y protocolos 
              de tratamiento biomagnético.
            </p>
          </div>

          <div className="space-y-8">
            {/* Medidas Preventivas */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Shield className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Medidas Preventivas</h3>
                  <p className="text-sm text-gray-500">Estrategias para prevenir infecciones en el entorno escolar</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Higiene personal:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Lavado de manos:</strong> Frecuente con agua y jabón, especialmente antes de comer y después de ir al baño<br/>
                    <strong>Higiene bucal:</strong> Cepillado de dientes, uso de enjuague bucal<br/>
                    <strong>Baño regular:</strong> Ducha diaria, cambio de ropa interior
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Limpieza del entorno:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Superficies:</strong> Limpieza regular de mesas, sillas, juguetes, equipos<br/>
                    <strong>Baños:</strong> Desinfección diaria, papel higiénico disponible<br/>
                    <strong>Ventilación:</strong> Aire fresco, circulación adecuada, control de humedad
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Educación sanitaria:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Hábitos saludables:</strong> Enseñar sobre transmisión de enfermedades<br/>
                    <strong>Prevención:</strong> Cubrirse al toser, usar pañuelos desechables<br/>
                    <strong>Alimentación:</strong> Evitar compartir alimentos, agua potable
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolo biomagnético preventivo:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Fase 1:</strong> Rastreo regular del sistema inmune<br/>
                    <strong>Fase 2:</strong> Fortalecimiento de pares principales<br/>
                    <strong>Fase 3:</strong> Prevención de microorganismos específicos<br/>
                    <strong>Fase 4:</strong> Mantenimiento del equilibrio sistémico
                  </p>
                </div>
              </div>
            </div>

            {/* Fortalecimiento Inmunológico */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Fortalecimiento Inmunológico</h3>
                  <p className="text-sm text-gray-500">Estrategias para fortalecer el sistema inmune de los estudiantes</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Alimentación saludable:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Nutrientes esenciales:</strong> Vitaminas C, D, E, zinc, hierro<br/>
                    <strong>Antioxidantes:</strong> Frutas, verduras, frutos secos<br/>
                    <strong>Probióticos:</strong> Yogur, kéfir, alimentos fermentados
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Ejercicio y actividad física:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Actividad regular:</strong> 60 minutos diarios de actividad moderada<br/>
                    <strong>Ejercicio al aire libre:</strong> Exposición a la luz solar, vitamina D<br/>
                    <strong>Deportes escolares:</strong> Participación en actividades físicas
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Descanso y sueño:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Horas de sueño:</strong> 9-11 horas para niños de 6-13 años<br/>
                    <strong>Calidad del sueño:</strong> Ambiente tranquilo, rutina regular<br/>
                    <strong>Descanso activo:</strong> Tiempo de relajación, actividades tranquilas
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolo biomagnético inmunológico:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Fase 1:</strong> Fortalecer Timo (-) → Timo (+)<br/>
                    <strong>Fase 2:</strong> Trabajar Bazo (-) → Bazo (+)<br/>
                    <strong>Fase 3:</strong> Equilibrar Ganglios (-) → Ganglios (+)<br/>
                    <strong>Fase 4:</strong> Mantenimiento del sistema inmune
                  </p>
                </div>
              </div>
            </div>

            {/* Protocolo Integral de Salud Escolar */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-indigo-100 rounded-full mr-4">
                  <Microscope className="w-8 h-8 text-indigo-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Protocolo Integral de Salud Escolar</h3>
                  <p className="text-sm text-gray-500">Enfoque holístico para la salud en el entorno educativo</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Identificación temprana:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Evaluación regular:</strong> Rastreo biomagnético mensual de todos los estudiantes<br/>
                    <strong>Detección de síntomas:</strong> Capacitación del personal para identificar signos tempranos<br/>
                    <strong>Registro de casos:</strong> Documentación de infecciones y patrones
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Tratamiento biomagnético:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Protocolos específicos:</strong> Tratamiento individualizado según microorganismo<br/>
                    <strong>Seguimiento continuo:</strong> Monitoreo de progreso y ajustes necesarios<br/>
                    <strong>Prevención de recurrencia:</strong> Protocolos de mantenimiento
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Coordinación con servicios de salud:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Médicos escolares:</strong> Colaboración con profesionales de la salud<br/>
                    <strong>Servicios de emergencia:</strong> Protocolos para situaciones críticas<br/>
                    <strong>Familias:</strong> Educación y apoyo para el cuidado en casa
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Evaluación y mejora continua:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Métricas de salud:</strong> Ausentismo, incidencia de infecciones, rendimiento académico<br/>
                    <strong>Retroalimentación:</strong> Evaluación de efectividad de protocolos<br/>
                    <strong>Actualización:</strong> Mejora continua basada en evidencia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Próximos Pasos */}
        <div className="bg-gradient-to-r from-slate-100 to-gray-200 rounded-lg p-8 text-slate-800 text-center">
          <h2 className="text-2xl font-bold mb-4">
            ¿Listo para el Seguimiento?
          </h2>
          <p className="text-slate-700 mb-6">
            Ahora que conoces los microorganismos que afectan el entorno escolar, es momento de aprender 
            sobre los criterios de seguimiento, ética y recursos disponibles.
          </p>
          <div className="flex justify-center">
            <ArrowRight className="w-6 h-6 text-slate-700 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module3Block7;