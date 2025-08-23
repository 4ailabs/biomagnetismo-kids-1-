import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Table, Beaker, Lightbulb, Sparkles } from 'lucide-react';
import CourseSection from '../../CourseSection';

const Module2Block3: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div id="block-3" className="space-y-12 w-full overflow-hidden">
      <section className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 text-center">
        <h2 className="text-xl font-semibold text-slate-700 mb-3">Objetivo del Bloque</h2>
        <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Aprender a manejar la etapa más desafiante de la primera infancia (18 meses-3 años) usando biomagnetismo 
          para equilibrar berrinches, desarrollar autonomía saludable y facilitar el desarrollo del lenguaje.
        </p>
      </section>

      <CourseSection title="Fundamentos Teóricos" icon={<BookOpen />}>
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-4 break-words">La Gran Transformación: De Bebé a Niño</h3>
            <p className="text-slate-700 leading-relaxed text-base break-words">
              Entre los 18 meses y 3 años ocurre una revolución silenciosa. El bebé que dependía completamente 
              de otros ahora quiere hacerlo todo solo. Su cerebro está desarrollando el concepto de "yo", 
              y con eso viene una necesidad imperiosa de control y autonomía. Los "terribles dos años" no son 
              terribles - son necesarios para el desarrollo saludable de la identidad.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg mt-4">
              Pero esta transición no siempre es suave. Cuando el deseo de autonomía se encuentra con la 
              frustración de las limitaciones, nace el berrinche. Y aquí es donde el biomagnetismo se convierte 
              en un aliado invaluable para equilibrar esta tormenta emocional.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Entendiendo los Berrinches Desde el Biomagnetismo</h3>
            <p className="text-slate-700 leading-relaxed text-lg mb-6">
              Un berrinche no es simplemente "mal comportamiento". Es una descarga energética intensa cuando el 
              sistema nervioso del niño se sobrecarga. Desde la perspectiva biomagnética, los berrinches indican 
              desequilibrios específicos que podemos corregir:
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                <h4 className="font-bold text-slate-700 text-lg mb-2">Berrinche por Frustración</h4>
                <p className="text-sm text-slate-600">Cuando no puede hacer algo que quiere</p>
                <p className="text-xs text-slate-500 mt-1">Conflicto: Territorio/Control</p>
              </div>
              <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                <h4 className="font-bold text-slate-700 text-lg mb-2">Berrinche por Límites</h4>
                <p className="text-sm text-slate-600">Cuando se le dice "no" a algo que desea</p>
                <p className="text-xs text-slate-500 mt-1">Conflicto: Territorio/Autonomía</p>
              </div>
              <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                <h4 className="font-bold text-slate-700 text-lg mb-2">Berrinche por Comunicación</h4>
                <p className="text-sm text-slate-600">Cuando no puede expresar lo que necesita</p>
                <p className="text-xs text-slate-500 mt-1">Conflicto: No ser escuchado</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-4 break-words">El Desarrollo del Lenguaje y la Frustración</h3>
            <p className="text-slate-700 leading-relaxed text-base break-words">
              Esta etapa presenta una paradoja fascinante: el niño sabe exactamente lo que quiere, pero aún 
              no tiene las palabras para expresarlo. Su comprensión supera por mucho su capacidad de expresión, 
              creando una brecha frustrante que puede manifestarse como berrinches, regresiones o incluso 
              síntomas físicos.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg mt-4">
              El biomagnetismo puede acelerar el desarrollo del lenguaje equilibrando los centros neurológicos 
              responsables de la comunicación, reduciendo así la frustración y mejorando la expresión.
            </p>
          </div>
        </div>
      </CourseSection>

      <CourseSection title="Pares Biomagnéticos para Berrinches y Autonomía" icon={<Beaker />}>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-6 border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-4">Protocolo Anti-Berrinches (18m-3a)</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-slate-800 mb-3">Para Berrinches Explosivos</h5>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li><strong>Suprarrenal (-) → Suprarrenal (+):</strong> Calma la hiperactivación del estrés</li>
                  <li><strong>Temporal Izq (-) → Temporal Der (+):</strong> Equilibra la sobrecarga sensorial</li>
                  <li><strong>Bulbo Raquídeo (-) → Plexo Solar (+):</strong> Regula el sistema nervioso autónomo</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-slate-800 mb-3">Para Desarrollo del Lenguaje</h5>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li><strong>Lengua (-) → Hioides (+):</strong> Facilita articulación y expresión</li>
                  <li><strong>Temporal Izq (-) → Frontal (+):</strong> Activa centros del lenguaje</li>
                  <li><strong>Pericardio (-) → Timo (+):</strong> Mejora la comunicación emocional</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-white/70 rounded-lg p-4">
              <h6 className="font-semibold text-slate-800 mb-2">Aplicación Práctica:</h6>
              <p className="text-sm text-slate-600">
                Durante un berrinche, espera a que el niño se calme ligeramente, luego aplica 
                <strong> Suprarrenal-Suprarrenal</strong> por 10-15 minutos. La mayoría de niños se relajan 
                visiblemente durante la aplicación.
              </p>
            </div>
          </div>
        </div>
      </CourseSection>

      <CourseSection title="Guía de Intervención Inmediata" icon={<Table />}>
        <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4 break-words">Protocolo de Emergencia para Berrinches</h3>
          <p className="text-slate-700 leading-relaxed text-lg mb-6">
            Cuando te encuentres con un berrinche activo, aquí tienes un protocolo de emergencia 
            que ha demostrado ser efectivo en miles de casos:
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                <span className="text-slate-700 font-bold">1</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg mb-2">Mantén la Calma Energética</h4>
                <p className="text-slate-700 leading-relaxed">
                  Los niños absorben nuestra energía. Si tú estás desregulado, ellos no pueden regularse. 
                  Respira profundo y centra tu propia energía antes de actuar.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                <span className="text-slate-700 font-bold">2</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg mb-2">Espera el Momento Adecuado</h4>
                <p className="text-slate-700 leading-relaxed">
                  No intentes colocar imanes durante el pico del berrinche. Espera a que la intensidad 
                  baje ligeramente - el niño seguirá molesto, pero podrá tolerar el contacto.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                <span className="text-slate-700 font-bold">3</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg mb-2">Aplica el Par de Emergencia</h4>
                <p className="text-slate-700 leading-relaxed">
                  <strong>Suprarrenal (-) → Suprarrenal (+)</strong> es tu mejor aliado. La mayoría de 
                  niños se relajan visiblemente en los primeros 5 minutos de aplicación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CourseSection>

      <CourseSection title="Casos Clínicos Reales" icon={<Lightbulb />}>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center">
                <span className="text-slate-700 font-bold text-lg">M</span>
              </div>
              <div>
                <h5 className="font-bold text-slate-800 text-xl mb-3">Mateo, 2 años: "El Rey de los Berrinches"</h5>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Mateo tenía berrinches de más de una hora. Se tiraba al suelo, gritaba, se golpeaba 
                  la cabeza contra el piso. Sus padres habían probado de todo - tiempo fuera, 
                  ignorarlo, premios, castigos. Nada funcionaba. La familia estaba agotada.
                </p>
                <div className="bg-white/70 rounded-lg p-4">
                  <p className="text-slate-600 text-sm mb-2"><strong>Su cuerpo hablaba:</strong> "Tengo tanto que decir y no encuentro las palabras. Me siento fuera de control y necesito límites que me contengan, no que me castiguen"</p>
                  <p className="text-slate-600 text-sm mb-2"><strong>Intervención:</strong> Suprarrenal (-) → Suprarrenal (+) + Temporal Izq (-) → Temporal Der (+)</p>
                  <p className="text-slate-600 text-sm"><strong>El cambio:</strong> Después de 4 sesiones, los berrinches se redujeron a 10 minutos máximo. Mateo comenzó a usar palabras como "enojado" y "frustrado".</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-slate-700 font-bold text-lg">L</span>
              </div>
              <div>
                <h5 className="font-bold text-slate-800 text-xl mb-3">Luna, 30 meses: "La Niña Silenciosa"</h5>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Luna apenas hablaba 15 palabras a los 30 meses. No combinaba palabras, no pedía 
                  cosas, solo señalaba o lloraba. Los padres estaban preocupados por retraso del lenguaje, 
                  pero las evaluaciones no mostraban problemas cognitivos ni auditivos.
                </p>
                <div className="bg-white/70 rounded-lg p-4">
                  <p className="text-slate-600 text-sm mb-2"><strong>Su cuerpo hablaba:</strong> "Tengo miedo de que mis palabras no sean suficientes, prefiero no intentar que intentar y fallar"</p>
                  <p className="text-slate-600 text-sm mb-2"><strong>Intervención:</strong> Lengua (-) → Hioides (+) + Pericardio (-) → Timo (+)</p>
                  <p className="text-slate-600 text-sm"><strong>El cambio:</strong> En 6 semanas pasó de 15 a 80 palabras, comenzó a formar frases de 2-3 palabras y, lo más importante, recuperó la confianza para comunicarse.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CourseSection>

      <CourseSection title="Reflexión Final" icon={<Sparkles />}>
        <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-8 shadow-md border-l-4 border-slate-200 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-slate-800 mb-4 break-words">Los Berrinches Como Maestros</h3>
            <p className="text-slate-700 leading-relaxed text-lg mb-6">
              Esta etapa nos enseña que los berrinches no son el enemigo - son el síntoma. Detrás de cada 
              explosión emocional hay un niño pequeño tratando de comunicar algo importante. Nuestro trabajo 
              no es eliminar los berrinches, sino entender qué están tratando de decirnos.
            </p>
            <blockquote className="text-xl font-medium text-slate-800 italic mb-6">
              "La autonomía saludable nace cuando el niño siente que tiene voz, 
              pero también sabe que hay brazos amorosos listos para sostenerlo."
            </blockquote>
            <div className="bg-white/70 rounded-lg p-4 text-left">
              <h4 className="font-semibold text-slate-800 mb-2">Lo que recordarás siempre:</h4>
              <p className="text-slate-600 text-sm mb-2">• Los berrinches son comunicación, no manipulación</p>
              <p className="text-slate-600 text-sm mb-2">• El biomagnetismo calma el sistema nervioso para que la razón pueda emerger</p>
              <p className="text-slate-600 text-sm">• Tu calma energética es el regalo más poderoso que puedes dar</p>
            </div>
          </div>
        </div>
      </CourseSection>
    </div>
  );
};

export default Module2Block3;