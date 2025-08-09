import React from 'react';
import CourseSection from '../CourseSection';
import ShockTable from '../ShockTable';
import { SHOCK_DATA } from '../../constants';
import { BookOpenIcon, TableCellsIcon, BeakerIcon, LightBulbIcon, SparklesIcon } from '../icons';

const Block1: React.FC = () => {
    return (
        <div className="space-y-12">
            <section className="bg-teal-600 text-white rounded-xl shadow-lg p-8 text-center ring-4 ring-teal-200 ring-offset-4 ring-offset-slate-50">
                <h2 className="text-3xl font-bold mb-3">Objetivo General</h2>
                <p className="text-lg max-w-3xl mx-auto font-light">
                    Comprender cómo las experiencias gestacionales influyen en el campo energético del bebé y aprender a identificar y equilibrar los desequilibrios usando pares biomagnéticos.
                </p>
            </section>

            <CourseSection title="Fundamentos Teóricos" icon={<BookOpenIcon />}>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold text-slate-800">1.1. El inicio invisible</h3>
                        <p>La vida intrauterina es el primer entorno donde el ser humano experimenta sensaciones, emociones y estímulos. Todo lo que vive la madre es percibido por el bebé, no solo a través de la bioquímica (hormonas, neurotransmisores), sino también por resonancia energética.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-slate-800">1.2. Conflictos biológicos fundamentales</h3>
                        <ul className="list-disc list-outside ml-5 space-y-2 mt-2">
                            <li><span className="font-semibold">Supervivencia:</span> cuando el bebé percibe que su vida está en riesgo.</li>
                            <li><span className="font-semibold">Protección:</span> cuando la madre pierde su sensación de seguridad.</li>
                            <li><span className="font-semibold">Pertenencia:</span> cuando hay rechazo, ausencia o abandono.</li>
                            <li><span className="font-semibold">Territorio:</span> cambios abruptos en el entorno vital.</li>
                            <li><span className="font-semibold">Identidad:</span> mensajes o sensaciones contradictorias sobre su llegada.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-slate-800">1.3. Principios de biomagnetismo aplicados</h3>
                        <ul className="list-disc list-outside ml-5 space-y-2 mt-2">
                            <li>Todo conflicto biológico produce un desequilibrio en el campo bioeléctrico.</li>
                            <li>Este desequilibrio altera la inteligencia innata de los tejidos.</li>
                            <li>El rastreo biomagnético permite detectar y equilibrar estos puntos mediante la colocación de un par biomagnético.</li>
                            <li>En embarazadas, se aplican adaptaciones para proteger la seguridad materno-fetal.</li>
                        </ul>
                    </div>
                </div>
            </CourseSection>

            <CourseSection title="Shocks Vivenciales Gestacionales y Pares Biomagnéticos" icon={<TableCellsIcon />}>
                <ShockTable data={SHOCK_DATA} />
            </CourseSection>

            <CourseSection title="Algoritmo de Rastreo en Vida Intrauterina" icon={<BeakerIcon />}>
                <ol className="list-decimal list-outside ml-5 space-y-3">
                    <li><span className="font-semibold">Identificar la vivencia</span> (mediante relato materno, historia clínica o intuición terapéutica).</li>
                    <li><span className="font-semibold">Localizar el punto trauma</span> (colocar imán negativo en la zona sintomática o correlacionada).</li>
                    <li><span className="font-semibold">Buscar resonancia:</span> Simétrico, Riñón derecho o izquierdo, u órganos clave según vivencia.</li>
                    <li><span className="font-semibold">Confirmar ajuste:</span> Si los pies se nivelan, el par ha sido encontrado.</li>
                    <li><span className="font-semibold">Aplicar 20 minutos</span> (respetando protocolos de seguridad en embarazo).</li>
                    <li><span className="font-semibold">Verificar post-tratamiento:</span> Observar cambios en movilidad, respiración y tono emocional.</li>
                </ol>
            </CourseSection>

            <CourseSection title="Cierre del Bloque" icon={<SparklesIcon />}>
                <ul className="list-disc list-outside ml-5 space-y-2">
                    <li>Recordar: “Todo lo que la madre siente, el bebé lo vive”.</li>
                    <li>El biomagnetismo en esta etapa no solo es terapéutico, sino preventivo.</li>
                    <li>Preparar para el siguiente bloque: rastreo y protocolos en embarazadas.</li>
                </ul>
            </CourseSection>
        </div>
    );
};

export default Block1;