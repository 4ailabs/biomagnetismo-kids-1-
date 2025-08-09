import React from 'react';
import { KeyPointData } from '../types';

interface KeyPointsTableProps {
  data: KeyPointData[];
}

const KeyPointsTable: React.FC<KeyPointsTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-100">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
              Punto trauma (Negativo)
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
              Resonancia frecuente
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
              Beneficio terapéutico
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-slate-200">
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{item.point}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">{item.resonance}</td>
              <td className="px-6 py-4 text-sm text-slate-700">{item.benefit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KeyPointsTable;
