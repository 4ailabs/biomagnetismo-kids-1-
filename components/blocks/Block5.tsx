import React from 'react';
import CourseSection from '../CourseSection';
import { 
    AcademicCapIcon, 
    UserGroupIcon, 
    SparklesIcon, 
    TimelineIcon, 
    BrainIcon, 
    DocumentArrowDownIcon, 
    HeartIcon 
} from '../icons';

const Block5: React.FC = () => {
  return (
    <div className="space-y-12">
        <CourseSection title="Propósito del Bloque" icon={<AcademicCapIcon />}>
            <p className="mb-4">
                Este bloque busca integrar todo lo aprendido a lo largo del módulo, comprender cómo cada etapa de la vida temprana —desde la concepción hasta los primeros tres meses— deja huellas en el campo energético y cómo el biomagnetismo puede ayudar a armonizar esas huellas.
            </p>
            <p>
                El objetivo no es solo “recordar” conceptos, sino aprender a ver el síntoma como un mensaje del sistema, interpretar ese mensaje y, finalmente, actuar de forma que devuelva el equilibrio.
            </p>
        </CourseSection>

        <CourseSection title="Principio Sistémico Central" icon={<UserGroupIcon />}>
            <blockquote className="border-l-4 border-teal-500 pl-4 italic text-slate-800 text-xl font-semibold">
                “No hay síntomas en el bebé que no hablen también de la madre”
            </blockquote>
            <p className="mt-4">
                Este principio nos invita a mirar más allá del cuerpo físico del bebé y reconocer que:
            </p>
            <ul className="list-disc list-outside ml-5 space-y-2 mt-2">
                <li>Madre y bebé comparten un campo energético en la gestación y en los primeros meses.</li>
                <li>El estado emocional y mental de la madre influye directamente en la regulación fisiológica del bebé.</li>
                <li>El bebé puede ser portavoz de tensiones familiares no resueltas, incluso anteriores a su concepción.</li>
            </ul>
        </CourseSection>

        <CourseSection title="El Campo Energético Compartido" icon={<SparklesIcon />}>
            <p>
                En los primeros meses de vida, el bebé no tiene una frontera energética claramente diferenciada de la madre. Esto significa:
            </p>
            <ul className="list-disc list-outside ml-5 space-y-2 mt-2">
                <li><span className="font-semibold">Vibración compartida:</span> Si la madre vive estrés, tristeza o miedo, estas frecuencias pueden reflejarse en el cuerpo del bebé.</li>
                <li><span className="font-semibold">Resonancia biológica:</span> Los pares biomagnéticos aplicados a la madre pueden equilibrar también al bebé.</li>
                <li><span className="font-semibold">Vínculo de regulación:</span> El contacto, la voz y la presencia de la madre son reguladores naturales del sistema nervioso del bebé.</li>
            </ul>
        </CourseSection>

        <CourseSection title="Línea de Vida Energética" icon={<TimelineIcon />}>
             <p>Una herramienta para visualizar el recorrido energético desde la gestación hasta los primeros meses.</p>
             <div className="mt-4 p-4 bg-slate-50 rounded-lg border">
                <h4 className="font-semibold text-slate-800 mb-2">Estructura de la Línea:</h4>
                <ol className="list-decimal list-inside ml-2 space-y-3">
                    <li>
                        <span className="font-semibold">Fase 1 – Vida intrauterina</span>
                        <ul className="list-disc list-outside ml-10 mt-1 text-sm text-slate-600">
                            <li>Shocks vivenciales gestacionales</li>
                            <li>Pares biomagnéticos para esta etapa</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">Fase 2 – Nacimiento y primer mes</span>
                        <ul className="list-disc list-outside ml-10 mt-1 text-sm text-slate-600">
                             <li>Patologías y desequilibrios frecuentes</li>
                             <li>Pares de intervención inmediata</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">Fase 3 – Primer trimestre</span>
                        <ul className="list-disc list-outside ml-10 mt-1 text-sm text-slate-600">
                            <li>Cambios fisiológicos y shocks postnatales</li>
                            <li>Pares de adaptación</li>
                        </ul>
                    </li>
                </ol>
             </div>
        </CourseSection>
        
        <CourseSection title="Ejercicio de Integración Energética" icon={<BrainIcon />}>
            <p className="font-semibold text-slate-800">Objetivo: Consolidar el aprendizaje y activar la percepción de la historia energética.</p>
            <div className="mt-4 p-4 border-l-4 border-teal-200 bg-teal-50/50 rounded-lg">
                <h4 className="font-semibold text-slate-700 mb-2">Instrucciones:</h4>
                <ol className="list-decimal list-outside ml-5 space-y-2">
                    <li>Colócate en un lugar tranquilo, con el cuerpo relajado.</li>
                    <li>Visualiza un hilo de luz que comienza en el momento de tu concepción y recorre cada etapa de tu vida temprana.</li>
                    <li>En cada tramo, imagina cómo el campo magnético se armoniza con cada intervención que aprendiste.</li>
                    <li>Finaliza visualizando una imagen de conexión plena entre madre y bebé, caracterizada por calma, seguridad y amor.</li>
                </ol>
            </div>
        </CourseSection>

        <CourseSection title="Recursos para Continuar" icon={<DocumentArrowDownIcon />}>
            <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-teal-700">Resumen de Pares y Shocks</h4>
                    <p className="text-sm text-slate-600 mt-1">Documento PDF con todos los pares estudiados en el curso y su función.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-teal-700">Plantilla de Línea de Vida Energética</h4>
                    <p className="text-sm text-slate-600 mt-1">Para aplicar en casos reales y documentar observaciones.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-teal-700">Guía de Observación en Casa</h4>
                    <p className="text-sm text-slate-600 mt-1">Señales físicas y energéticas que pueden indicar un desequilibrio y cuándo intervenir.</p>
                </div>
            </div>
        </CourseSection>

        <CourseSection title="Cierre Reflexivo" icon={<HeartIcon />}>
            <blockquote className="border-l-4 border-teal-500 pl-4 italic text-slate-800">
                El aprendizaje de este módulo no termina aquí. La integración de la información requiere práctica, observación y, sobre todo, la disposición a mirar la historia completa de cada bebé y familia con respeto, sensibilidad y precisión terapéutica.
            </blockquote>
        </CourseSection>

    </div>
  );
};

export default Block5;