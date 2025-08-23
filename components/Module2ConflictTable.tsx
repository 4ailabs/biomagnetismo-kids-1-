import React from 'react';
import { Module2ConflictData } from '../types';

interface Module2ConflictTableProps {
  data: Module2ConflictData[];
}

const Module2ConflictTable: React.FC<Module2ConflictTableProps> = ({ data }) => {
  return (
    <div className="overflow-hidden rounded-xl shadow-lg bg-white border border-slate-200">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
            <tr>
              <th className="px-4 py-4 text-left text-sm font-semibold">Conflicto Biológico</th>
              <th className="px-4 py-4 text-left text-sm font-semibold">Sensaciones/Síntomas</th>
              <th className="px-4 py-4 text-left text-sm font-semibold">Par Biomagnético</th>
              <th className="px-4 py-4 text-left text-sm font-semibold">Beneficio Terapéutico</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {data.map((item, index) => (
              <tr 
                key={item.id} 
                className={`hover:bg-slate-50 transition-colors ${
                  index % 2 === 0 ? 'bg-white' : 'bg-slate-25'
                }`}
              >
                <td className="px-4 py-4">
                  <div className="space-y-2">
                    <div className="font-semibold text-slate-900 text-sm">
                      {item.conflict}
                    </div>
                    <div className="text-xs text-slate-600">
                      <span className="inline-flex items-center px-2 py-1 bg-purple-100 text-purple-800 rounded-full font-medium">
                        {item.ageRange}
                      </span>
                    </div>
                    <div className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="text-xs text-slate-700 leading-relaxed">
                    {item.sensations}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="space-y-2">
                    {item.pairs.split(' | ').map((pair, pairIndex) => (
                      <div key={pairIndex} className="text-xs">
                        <span className="font-mono bg-slate-100 px-2 py-1 rounded text-slate-800">
                          {pair}
                        </span>
                      </div>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="text-xs text-slate-700 leading-relaxed">
                    {item.benefits}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Module2ConflictTable;