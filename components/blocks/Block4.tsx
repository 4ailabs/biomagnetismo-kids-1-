import React from 'react';
import CourseSection from '../CourseSection';
import PostnatalShockAccordion from '../PostnatalShockAccordion';
import PathologyTable from '../PathologyTable';
import { POSTNATAL_SHOCKS_DATA, PATHOLOGIES_DATA_1_3_MONTHS } from '../../constants';
import { BookOpenIcon, ExclamationTriangleIcon, TableCellsIcon, BeakerIcon, LightBulbIcon, HeartIcon, UserGroupIcon } from '../icons';

const Block4: React.FC = () => {
    return (
        <div className="space-y-12">
            <section className="bg-teal-600 text-white rounded-xl shadow-lg p-8 text-center ring-4 ring-teal-200 ring-offset-4 ring-offset-slate-50">
                <h2 className="text-3xl font-bold mb-3">Objetivo del Bloque</h2>
                <p className="text-lg max-w-3xl mx-auto font-light">
                    Dominar la evaluación y tratamiento de desequilibrios energéticos en el bebé durante su segundo y tercer mes de vida, identificando shocks postnatales, cambios fisiológicos y su abordaje con biomagnetismo.
                </p>
            </section>

            <CourseSection title="Contexto General" icon={<UserGroupIcon />}>
                <p>
                    Del mes a los tres meses, el bebé vive una etapa de transición adaptativa donde:
                </p>
                <ul className="list-disc list-outside ml-5 space-y-2 mt-2">
                    <li>Ha superado la fase más crítica de adaptación respiratoria y digestiva.</li>
                    <li>Comienza a integrar patrones neurológicos más estables, aunque aún frágiles.</li>
                    <li>El vínculo madre-bebé ya está establecido, pero puede alterarse por separaciones, rutinas forzadas o intervenciones.</li>
                    <li>El campo bioeléctrico del bebé se expande y estabiliza, pero sigue siendo permeable a estímulos externos y al campo emocional de la madre.</li>
                </ul>
            </CourseSection>

            <CourseSection title="Fundamentos Teóricos" icon={<BookOpenIcon />}>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold text-slate-800">2.1 Cambios fisiológicos clave</h3>
                        <ul className="list-disc list-outside ml-5 space-y-2 mt-2">
                            <li><span className="font-semibold">Sistema nervioso:</span> Se desarrolla la mielinización de vías motoras y sensoriales, aumentando la capacidad de respuesta y regulación. Sin embargo, un sistema nervioso aún inmaduro se sobrecarga fácilmente.</li>
                            <li><span className="font-semibold">Sistema digestivo:</span> Aunque hay maduración en la producción de enzimas, persisten problemas como gases, cólico y reflujo, especialmente si hay cambios bruscos de alimentación.</li>
                            <li><span className="font-semibold">Sistema inmune:</span> La inmunidad materna (transferida por placenta y lactancia) sigue siendo predominante, pero empieza a activarse la propia respuesta inmune del bebé.</li>
                            <li><span className="font-semibold">Campo energético:</span> Según la bioenergética, la expansión de su aura y la estabilización de ejes magnéticos corporales dependen de que no haya shocks ni bloqueos persistentes.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-slate-800">2.2 Perspectiva bioenergética</h3>
                        <p>En biomagnetismo, esta etapa se caracteriza por:</p>
                        <ul className="list-disc list-outside ml-5 space-y-2 mt-2">
                            <li><span className="font-semibold">Pares persistentes:</span> algunos puntos trabajados en el recién nacido siguen activos.</li>
                            <li><span className="font-semibold">Nuevos puntos adaptativos:</span> aparecen pares relacionados con la interacción con el entorno.</li>
                            <li><span className="font-semibold">Importancia del rastreo indirecto:</span> trabajar a través del cuerpo de la madre sigue siendo una vía segura y efectiva.</li>
                        </ul>
                    </div>
                </div>
            </CourseSection>
            
            <CourseSection title="Shocks Postnatales Frecuentes y su Impacto" icon={<ExclamationTriangleIcon />}>
                <PostnatalShockAccordion data={POSTNATAL_SHOCKS_DATA} />
            </CourseSection>

            <CourseSection title="Patologías y desequilibrios frecuentes (1–3 meses)" icon={<TableCellsIcon />}>
                <PathologyTable data={PATHOLOGIES_DATA_1_3_MONTHS} />
            </CourseSection>

            <CourseSection title="Algoritmo de rastreo" icon={<BeakerIcon />}>
                <ol className="list-decimal list-outside ml-5 space-y-3">
                    <li>Iniciar rastreo por puntos maestros: Riñones, Timo, Hígado, Estómago.</li>
                    <li>Identificar pares activos sin partir de la vivencia, sino del marcador magnético.</li>
                    <li>Una vez detectado el par, evaluar si existe un evento postnatal que lo pueda haber activado.</li>
                    <li>Aplicar imanes (baja intensidad) por 15–20 minutos.</li>
                    <li>Documentar hallazgos y recomendar seguimiento.</li>
                </ol>
            </CourseSection>

            <CourseSection title="Ejemplo clínico" icon={<LightBulbIcon />}>
                <div className="bg-slate-100 p-4 rounded-lg border border-slate-200">
                    <h4 className="font-semibold text-slate-800">Caso: Bebé de 2,5 meses con llanto persistente nocturno.</h4>
                    <ul className="list-disc list-outside ml-5 space-y-2 mt-2">
                        <li><span className="font-semibold">Rastreo inicial:</span> Hígado derecho positivo → resonancia en Intestino delgado.</li>
                        <li><span className="font-semibold">Interpretación:</span> sobrecarga digestiva posiblemente por cambio de fórmula.</li>
                        <li><span className="font-semibold">Protocolo aplicado:</span> Hígado derecho – Intestino delgado (20 min) + Timo – Plexo solar (15 min).</li>
                        <li><span className="font-semibold">Resultado:</span> mejoría del sueño y reducción de gases a las 48 h.</li>
                    </ul>
                </div>
            </CourseSection>

            <CourseSection title="Recomendaciones prácticas" icon={<HeartIcon />}>
                 <ul className="list-disc list-outside ml-5 space-y-2">
                    <li>En sesiones online, enseñar a los padres ubicación y técnica segura de colocación.</li>
                    <li>Utilizar imanes pequeños y suaves (1000–1200 gauss) para bebés.</li>
                    <li>Registrar en un formato de seguimiento los pares aplicados y la evolución de síntomas.</li>
                </ul>
            </CourseSection>
        </div>
    );
};

export default Block4;