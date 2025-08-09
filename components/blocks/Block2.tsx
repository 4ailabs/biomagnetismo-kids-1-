import React from 'react';
import CourseSection from '../CourseSection';
import KeyPointsTable from '../KeyPointsTable';
import { KEY_POINTS_DATA } from '../../constants';
import { BookOpenIcon, BeakerIcon, LightBulbIcon, SparklesIcon, TableCellsIcon, UserGroupIcon } from '../icons';

const Block2: React.FC = () => {
    return (
        <div className="space-y-12">
            <section className="bg-teal-600 text-white rounded-xl shadow-lg p-8 text-center ring-4 ring-teal-200 ring-offset-4 ring-offset-slate-50">
                <h2 className="text-3xl font-bold mb-3">Objetivo del Bloque</h2>
                <p className="text-lg max-w-3xl mx-auto font-light">
                    Capacitar al alumno en la identificación y corrección de desequilibrios energéticos en la etapa gestacional utilizando el rastreo a través de la madre, con un enfoque inverso (punto → resonancia → vivencia).
                </p>
            </section>

            <CourseSection title="Fundamento Teórico" icon={<BookOpenIcon />}>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold text-slate-800 flex items-center">
                            <UserGroupIcon className="w-5 h-5 mr-3 text-teal-600" /> 2.1. Unidad madre-bebé
                        </h3>
                        <p className="mt-2">Durante la gestación, el campo energético y biológico de la madre y el bebé forman un sistema unificado. El campo magnético materno refleja el estado del campo fetal, y un desequilibrio en el bebé puede detectarse y corregirse a través del cuerpo de la madre.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-slate-800">2.2. El conflicto biológico como origen</h3>
                        <ul className="list-disc list-outside ml-5 space-y-2 mt-2">
                            <li>Todo shock vivencial gestacional (susto, duelo, etc.) puede producir una alteración bioeléctrica.</li>
                            <li>Esta alteración interrumpe la inteligencia innata de los tejidos.</li>
                            <li>El biomagnetismo restaura la polaridad natural, facilitando la homeostasis.</li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-xl font-semibold text-slate-800">2.3. El punto trauma y la resonancia</h3>
                        <ul className="list-disc list-outside ml-5 space-y-2 mt-2">
                            <li><span className="font-semibold">Punto trauma:</span> Lugar donde se detecta el acortamiento de una pierna al colocar un imán negativo.</li>
                            <li><span className="font-semibold">Resonancia:</span> Segundo punto donde, al colocar un imán positivo, se equilibra la longitud de las piernas.</li>
                            <li>Puede ser simétrica o estar en otra zona (ej. riñones).</li>
                        </ul>
                    </div>
                </div>
            </CourseSection>
            
            <CourseSection title="Algoritmo Inverso de Rastreo Gestacional" icon={<BeakerIcon />}>
                <ol className="list-decimal list-outside ml-5 space-y-3">
                    <li><span className="font-semibold">Preparación:</span> Madre recostada, pies visibles, imán negativo y mapa corporal listos.</li>
                    <li><span className="font-semibold">Rastreo sistemático:</span> Comenzar por puntos maestros (ver tabla) y observar acortamiento.</li>
                    <li><span className="font-semibold">Si marca:</span> Buscar resonancia en: mismo punto → riñón derecho → riñón izquierdo → otros puntos.</li>
                    <li><span className="font-semibold">Confirmar:</span> Colocar ambos imanes y verificar alineación de pies.</li>
                    <li><span className="font-semibold">Registrar:</span> Anotar punto trauma, resonancia y posible vivencia asociada.</li>
                </ol>
            </CourseSection>

            <CourseSection title="Tabla de Puntos Clave y Beneficios Terapéuticos" icon={<TableCellsIcon />}>
                <KeyPointsTable data={KEY_POINTS_DATA} />
            </CourseSection>

            <CourseSection title="Ejemplo Práctico" icon={<LightBulbIcon />}>
                <ul className="list-disc list-outside ml-5 space-y-2">
                    <li><span className="font-semibold">Situación:</span> Alumna coloca imán negativo en <span className="font-mono bg-slate-100 px-1 rounded">frontal</span> de la madre → hay acortamiento.</li>
                    <li><span className="font-semibold">Resonancia:</span> Se prueba en <span className="font-mono bg-slate-100 px-1 rounded">riñón derecho</span> → alineación confirmada.</li>
                    <li><span className="font-semibold">Vivencia asociada:</span> Posible susto o diagnóstico médico durante embarazo.</li>
                    <li><span className="font-semibold">Beneficio esperado:</span> Reducción de sobrealerta fetal y estabilización neuroendocrina.</li>
                </ul>
            </CourseSection>

            <CourseSection title="Reflexión Final del Bloque" icon={<SparklesIcon />}>
                <blockquote className="border-l-4 border-teal-500 pl-4 italic text-slate-800">
                    “Cuando trabajamos a través del cuerpo de la madre, estamos tocando la historia que el bebé aún no puede contar, pero que ya vive en su cuerpo.”
                </blockquote>
            </CourseSection>
        </div>
    );
};

export default Block2;