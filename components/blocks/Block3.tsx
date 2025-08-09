import React from 'react';
import CourseSection from '../CourseSection';
import ConditionTable from '../ConditionTable';
import BabyRegulationTable from '../BabyRegulationTable';
import { CONDITIONS_DATA, BABY_REGULATION_POINTS } from '../../constants';
import { BookOpenIcon, TableCellsIcon, BeakerIcon, LightBulbIcon, HeartIcon } from '../icons';

const Block3: React.FC = () => {
    return (
        <div className="space-y-12">
            <section className="bg-teal-600 text-white rounded-xl shadow-lg p-8 text-center ring-4 ring-teal-200 ring-offset-4 ring-offset-slate-50">
                <h2 className="text-3xl font-bold mb-3">Objetivo del Bloque</h2>
                <p className="text-lg max-w-3xl mx-auto font-light">
                    Comprender, identificar y equilibrar los desequilibrios energéticos más frecuentes en los bebés durante su primer mes de vida, aplicando la lógica del Biomagnetismo de forma segura y adaptada a esta etapa.
                </p>
            </section>

            <CourseSection title="Fundamentos Teóricos" icon={<BookOpenIcon />}>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold text-slate-800">2.1 El enfoque del biomagnetismo en el recién nacido</h3>
                        <ul className="list-disc list-outside ml-5 space-y-2 mt-2">
                            <li>Todo síntoma es visto como un mensaje del sistema y no solo como una alteración física.</li>
                            <li>Los imanes ayudan a repolarizar zonas donde el campo bioeléctrico está en desequilibrio, restaurando el flujo de información celular.</li>
                            <li>Se utilizan imanes de baja intensidad para evitar sobrecargas energéticas en tejidos inmaduros.</li>
                            <li>El rastreo puede hacerse directamente sobre el bebé o, en sesiones online, a través de la madre, aprovechando la conexión campo–campo.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-slate-800">2.2 Conceptos clave</h3>
                        <ul className="list-disc list-outside ml-5 space-y-2 mt-2">
                            <li><span className="font-semibold">Punto trauma:</span> el sitio donde se detecta el acortamiento de una extremidad al aplicar un imán negativo.</li>
                            <li><span className="font-semibold">Resonancia:</span> el punto que, al colocar un imán positivo, devuelve la alineación y completa el circuito de repolarización.</li>
                            <li><span className="font-semibold">Par biomagnético:</span> la combinación de punto trauma + punto resonancia que equilibra un conflicto específico.</li>
                            <li><span className="font-semibold">Tiempo de exposición:</span> entre 15 y 20 minutos, adaptado a la tolerancia del bebé.</li>
                        </ul>
                    </div>
                </div>
            </CourseSection>

            <CourseSection title="Patologías y desequilibrios frecuentes en el primer mes" icon={<TableCellsIcon />}>
                <ConditionTable data={CONDITIONS_DATA} />
            </CourseSection>

            <CourseSection title="Puntos Clave de Regulación para Bebés" icon={<TableCellsIcon />}>
                <BabyRegulationTable data={BABY_REGULATION_POINTS} />
            </CourseSection>

            <CourseSection title="Algoritmo de trabajo en esta etapa" icon={<BeakerIcon />}>
                <ol className="list-decimal list-outside ml-5 space-y-3">
                    <li>Iniciar rastreo en puntos maestros (Riñones, Hígado derecho, Estómago, Timo).</li>
                    <li>Identificar punto trauma (acortamiento al aplicar imán negativo).</li>
                    <li>Buscar resonancia: mismo punto, riñones o punto reflejo según patología.</li>
                    <li>Confirmar alineación.</li>
                    <li>Mantener 15–20 min.</li>
                    <li>Registrar resultados y observaciones.</li>
                </ol>
            </CourseSection>

            <CourseSection title="Ejemplos prácticos" icon={<LightBulbIcon />}>
                <ul className="list-disc list-outside ml-5 space-y-2">
                    <li><span className="font-semibold">Caso de cólico:</span> punto trauma en Estómago, resonancia en Colon transverso → tras la sesión, mejora en sueño y calma.</li>
                    <li><span className="font-semibold">Caso de ictericia:</span> punto trauma en Hígado derecho, resonancia en Vesícula → reducción de tono amarillento en días siguientes.</li>
                </ul>
            </CourseSection>
            
            <CourseSection title="Recomendaciones didácticas" icon={<HeartIcon />}>
                 <ul className="list-disc list-outside ml-5 space-y-2">
                    <li>Siempre trabajar con suavidad: imanes pequeños y ligeros.</li>
                    <li>Observar señales de incomodidad del bebé.</li>
                    <li>En modalidad online, trabajar sobre el cuerpo de la madre conectada energéticamente con el bebé.</li>
                    <li>Mantener una actitud de observación amorosa y no invasiva.</li>
                </ul>
            </CourseSection>
        </div>
    );
};

export default Block3;
