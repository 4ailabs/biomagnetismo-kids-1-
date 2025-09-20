import React from 'react';
import { textUtils } from '../src/styles/typography';

interface SimpleSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const SimpleSection: React.FC<SimpleSectionProps> = ({ title, icon, children, className = "" }) => {
  return (
    <section className={`mb-8 sm:mb-12 ${className}`}>
      <div className="flex items-start sm:items-center mb-4 sm:mb-6">
        <div className="flex-shrink-0 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg p-2 sm:p-3 shadow-md">
          {icon}
        </div>
        <h2 className={`ml-3 sm:ml-4 ${textUtils.title.section} break-words`}>{title}</h2>
      </div>
      <div className="space-y-4 sm:space-y-6">
        {children}
      </div>
    </section>
  );
};

export default SimpleSection;
