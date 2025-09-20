import React from 'react';
import { textUtils } from '../src/styles/typography';

interface ConflictCardProps {
  number: number;
  title: string;
  age: string;
  icon: React.ReactNode;
  color: 'purple' | 'pink' | 'blue' | 'green' | 'orange' | 'teal';
  description: string;
  par: string;
  microorganisms?: string;
  manifestations?: string[];
  className?: string;
}

const ConflictCard: React.FC<ConflictCardProps> = ({ 
  number, 
  title, 
  age, 
  icon, 
  color, 
  description, 
  par, 
  microorganisms, 
  manifestations, 
  className = "" 
}) => {
  const colorClasses = {
    purple: 'bg-purple-100 text-purple-600',
    pink: 'bg-pink-100 text-pink-600',
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    orange: 'bg-orange-100 text-orange-600',
    teal: 'bg-teal-100 text-teal-600'
  };

  const bgColorClasses = {
    purple: 'bg-purple-50 border-purple-200',
    pink: 'bg-pink-50 border-pink-200',
    blue: 'bg-blue-50 border-blue-200',
    green: 'bg-green-50 border-green-200',
    orange: 'bg-orange-50 border-orange-200',
    teal: 'bg-teal-50 border-teal-200'
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg p-8 ${className}`}>
      <div className="flex items-center mb-6">
        <div className={`p-3 rounded-full mr-4 ${colorClasses[color]}`}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">
            {number}. {title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Edad: {age}</p>
        </div>
      </div>
      
      <div className={`${bgColorClasses[color]} rounded-lg p-4 mb-4`}>
        <p className="text-gray-700 italic text-lg">
          {description}
        </p>
      </div>
      
      <div className="space-y-4 text-gray-600">
        <div>
          <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
          <p className="text-sm">{par}</p>
        </div>
        
        {microorganisms && (
          <div>
            <p className="font-semibold text-gray-800 mb-1">Microorganismos asociados:</p>
            <p className="text-sm">{microorganisms}</p>
          </div>
        )}
        
        {manifestations && manifestations.length > 0 && (
          <div>
            <p className="font-semibold text-gray-800 mb-1">Manifestaciones clínicas:</p>
            <ul className="text-sm space-y-1 ml-4">
              {manifestations.map((manifestation, index) => (
                <li key={index}>• {manifestation}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConflictCard;
