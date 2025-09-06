import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BlockHeaderProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  gradientFrom?: string;
  gradientTo?: string;
  iconBgColor?: string;
  iconTextColor?: string;
}

const BlockHeader: React.FC<BlockHeaderProps> = ({
  icon: Icon,
  title,
  subtitle,
  gradientFrom = 'from-slate-100',
  gradientTo = 'to-gray-200',
  iconBgColor = 'bg-slate-200',
  iconTextColor = 'text-slate-700'
}) => {
  return (
    <div className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} text-slate-800 py-12 sm:py-16 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className={`p-3 sm:p-4 ${iconBgColor} rounded-full shadow-lg`}>
            <Icon className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-slate-700" />
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default BlockHeader;
