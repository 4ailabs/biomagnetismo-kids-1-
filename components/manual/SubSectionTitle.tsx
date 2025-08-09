import React from 'react';

interface SubSectionTitleProps {
  title: string;
}

const SubSectionTitle: React.FC<SubSectionTitleProps> = ({ title }) => {
  return (
    <div className="group mb-6">
      <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl px-4 py-3 shadow-md border border-slate-200/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
        <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
        <h3 className="text-xl font-semibold text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
          {title}
        </h3>
        <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover:w-12 transition-all duration-300"></div>
      </div>
    </div>
  );
};

export default SubSectionTitle;
