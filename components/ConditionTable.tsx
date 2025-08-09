import React, { useState } from 'react';
import { ConditionData } from '../types';
import { ChevronDownIcon } from './icons';

interface ConditionTableProps {
  data: ConditionData[];
}

const ConditionTable: React.FC<ConditionTableProps> = ({ data }) => {
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
            aria-controls={`condition-content-${item.id}`}
          >
            <span className="font-semibold text-slate-800 text-lg">{item.name}</span>
            <ChevronDownIcon
              className={`h-6 w-6 text-slate-500 transform transition-transform duration-300 ${expandedId === item.id ? 'rotate-180' : ''}`}
            />
          </button>
          <div
            id={`condition-content-${item.id}`}
            className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedId === item.id ? 'max-h-screen' : 'max-h-0'}`}
          >
            <div className="p-6 pt-0 space-y-4 text-slate-700 leading-relaxed">
              <div>
                <h4 className="font-semibold text-slate-600">Descripción:</h4>
                <p>{item.description}</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-600">Causas energéticas:</h4>
                <p>{item.causes}</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-600">Pares recomendados:</h4>
                <ul className="list-disc list-outside ml-5 space-y-1">
                  {item.pairs.map((pair, index) => (
                    <li key={index}>{pair}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConditionTable;
