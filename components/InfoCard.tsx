import React from 'react';
import { textUtils } from '../src/styles/typography';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
  color: 'purple' | 'pink' | 'blue' | 'green' | 'orange' | 'teal';
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, items, color, className = "" }) => {
  const colorClasses = {
    purple: 'bg-purple-50 border-purple-200',
    pink: 'bg-pink-50 border-pink-200',
    blue: 'bg-blue-50 border-blue-200',
    green: 'bg-green-50 border-green-200',
    orange: 'bg-orange-50 border-orange-200',
    teal: 'bg-teal-50 border-teal-200'
  };

  const iconColorClasses = {
    purple: 'bg-purple-100 text-purple-600',
    pink: 'bg-pink-100 text-pink-600',
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    orange: 'bg-orange-100 text-orange-600',
    teal: 'bg-teal-100 text-teal-600'
  };

  return (
    <div className={`${colorClasses[color]} rounded-lg p-4 sm:p-6 border ${className}`}>
      <div className="flex items-center mb-3 sm:mb-4">
        <div className={`p-1.5 sm:p-2 rounded-full mr-2 sm:mr-3 ${iconColorClasses[color]}`}>
          {icon}
        </div>
        <h4 className={`${textUtils.title.subsection} text-gray-800`}>{title}</h4>
      </div>
      <ul className={`space-y-1.5 sm:space-y-2 ${textUtils.body.small}`}>
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-gray-400 mr-2 mt-0.5 sm:mt-1 text-xs sm:text-sm">•</span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoCard;
