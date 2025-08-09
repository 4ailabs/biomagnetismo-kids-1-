import React from 'react';
import { BABY_REGULATION_POINTS } from '../constants';

interface BabyRegulationPoint {
    point: string;
    resonance: string;
    benefit: string;
}

interface BabyRegulationTableProps {
    data: BabyRegulationPoint[];
}

const BabyRegulationTable: React.FC<BabyRegulationTableProps> = ({ data }) => {
    // Agrupar los puntos por categorías
    const basicPoints = data.slice(0, 10);
    const additionalPoints = data.slice(10, 20);
    const specificPoints = data.slice(20);

    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 shadow-lg p-6">
            <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-blue-800 mb-3">
                    🍼 Puntos Clave de Regulación para Bebés
                </h3>
                <p className="text-blue-600 text-lg">
                    Sistema completo de regulación energética para el desarrollo óptimo del bebé
                </p>
                <div className="mt-4 flex justify-center space-x-4 text-sm text-blue-500">
                    <span className="bg-blue-100 px-3 py-1 rounded-full">Total: {data.length} puntos</span>
                    <span className="bg-blue-100 px-3 py-1 rounded-full">3 categorías</span>
                </div>
            </div>
            
            {/* PUNTOS BÁSICOS */}
            <div className="mb-8">
                <h4 className="text-xl font-bold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">
                    🔵 Puntos Básicos de Regulación (10 puntos)
                </h4>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {basicPoints.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg border border-blue-100 p-4 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h5 className="font-semibold text-blue-900 text-sm mb-1">
                                        {item.point}
                                    </h5>
                                    <p className="text-blue-700 text-xs mb-2">
                                        <span className="font-medium">Resonancia:</span> {item.resonance}
                                    </p>
                                    <p className="text-blue-600 text-xs leading-relaxed">
                                        {item.benefit}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* PUNTOS ADICIONALES */}
            <div className="mb-8">
                <h4 className="text-xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">
                    🟢 Puntos Adicionales para Regulación Completa (10 puntos)
                </h4>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {additionalPoints.map((item, index) => (
                        <div key={index + 10} className="bg-white rounded-lg border border-green-100 p-4 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                    <span className="text-green-600 font-bold text-sm">{index + 11}</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h5 className="font-semibold text-green-900 text-sm mb-1">
                                        {item.point}
                                    </h5>
                                    <p className="text-green-700 text-xs mb-2">
                                        <span className="font-medium">Resonancia:</span> {item.resonance}
                                    </p>
                                    <p className="text-green-600 text-xs leading-relaxed">
                                        {item.benefit}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* PUNTOS ESPECÍFICOS PARA BEBÉS */}
            <div className="mb-8">
                <h4 className="text-xl font-bold text-purple-700 mb-4 border-b-2 border-purple-200 pb-2">
                    🟣 Puntos Específicos para Bebés (10 puntos)
                </h4>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {specificPoints.map((item, index) => (
                        <div key={index + 20} className="bg-white rounded-lg border border-purple-100 p-4 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                    <span className="text-purple-600 font-bold text-sm">{index + 21}</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h5 className="font-semibold text-purple-900 text-sm mb-1">
                                        {item.point}
                                    </h5>
                                    <p className="text-purple-700 text-xs mb-2">
                                        <span className="font-medium">Resonancia:</span> {item.resonance}
                                    </p>
                                    <p className="text-purple-600 text-xs leading-relaxed">
                                        {item.benefit}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* PROTOCOLO MEJORADO */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-4 text-lg">💡 Protocolo de Aplicación para Bebés</h4>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h5 className="font-semibold text-blue-700 mb-2">⚡ Protocolo Básico:</h5>
                        <ul className="text-blue-700 text-sm space-y-1">
                            <li>• <strong>Tiempo:</strong> 8-12 minutos por par (adaptado a la tolerancia)</li>
                            <li>• <strong>Intensidad:</strong> Imanes suaves (800-1200 gauss)</li>
                            <li>• <strong>Orden:</strong> Comenzar por Timo-Bazo, luego según necesidad</li>
                            <li>• <strong>Evaluación:</strong> Observar cambios en respiración, tono y estado emocional</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-semibold text-purple-700 mb-2">🎯 Protocolo Avanzado:</h5>
                        <ul className="text-purple-700 text-sm space-y-1">
                            <li>• <strong>Sesión completa:</strong> 3-4 pares por sesión (máximo 45 minutos)</li>
                            <li>• <strong>Frecuencia:</strong> 2-3 veces por semana para casos crónicos</li>
                            <li>• <strong>Secuencia:</strong> Básicos → Adicionales → Específicos</li>
                            <li>• <strong>Monitoreo:</strong> Respuesta del bebé y ajuste del protocolo</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BabyRegulationTable;
