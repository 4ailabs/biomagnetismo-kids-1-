import React, { useState } from 'react';
import { ShockData } from '../types';
import { ChevronDownIcon } from './icons';

interface ShockTableProps {
  data: ShockData[];
}

const ShockTable: React.FC<ShockTableProps> = ({ data }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {data.map((item) => (
        <div key={item.id} className="rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-300">
          <button
            onClick={() => handleToggle(item.id)}
            className="w-full p-4 text-left flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 rounded-lg"
            aria-expanded={expandedId === item.id}
            aria-controls={`content-${item.id}`}
          >
            <div className="flex items-start">
              <span className="text-teal-600 font-bold text-lg mr-4">{item.id}.</span>
              <span className="font-semibold text-slate-800 text-lg">{item.shock}</span>
            </div>
            <ChevronDownIcon
              className={`h-6 w-6 text-slate-500 transform transition-transform duration-300 ${expandedId === item.id ? 'rotate-180' : ''}`}
            />
          </button>
          <div
            id={`content-${item.id}`}
            className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedId === item.id ? 'max-h-screen' : 'max-h-0'}`}
          >
            <div className="p-6 pt-0 space-y-4 text-slate-700 leading-relaxed">
              <div>
                <h4 className="font-semibold text-slate-600">Descripción:</h4>
                <p>{item.description}</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-600">Conflicto:</h4>
                <p>{item.conflict}</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-600">Pares Biomagnéticos:</h4>
                <p>{item.pairs}</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-600">Beneficios Esperados:</h4>
                <p>{item.benefits}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShockTable;
