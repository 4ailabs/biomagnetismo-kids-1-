import React from 'react';

interface MinorSectionTitleProps {
  title: string;
}

const MinorSectionTitle: React.FC<MinorSectionTitleProps> = ({ title }) => {
  return (
    <div className="group mb-4">
      <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-100 to-blue-100 rounded-lg px-3 py-2 shadow-sm border border-slate-200/50">
        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
        <h4 className="text-lg font-semibold text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
          {title}
        </h4>
      </div>
    </div>
  );
};

export default MinorSectionTitle;
