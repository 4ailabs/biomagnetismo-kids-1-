import React from 'react';

interface CourseSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const CourseSection: React.FC<CourseSectionProps> = ({ title, icon, children }) => {
  return (
    <section className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 sm:p-8">
        <div className="flex items-center mb-6">
          <div className="flex-shrink-0 bg-teal-500 text-white rounded-lg p-3 shadow-md">
            {icon}
          </div>
          <h2 className="ml-4 text-2xl font-bold text-slate-900">{title}</h2>
        </div>
        <div className="space-y-4 text-slate-700 leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
