import React from 'react';

interface CourseSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const CourseSection: React.FC<CourseSectionProps> = ({ title, icon, children }) => {
  return (
    <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 sm:mb-8">
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="flex items-center mb-4 sm:mb-6">
          <div className="flex-shrink-0 bg-teal-500 text-white rounded-lg p-2 sm:p-3 shadow-md">
            {icon}
          </div>
          <h2 className="ml-3 sm:ml-4 text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 break-words">{title}</h2>
        </div>
        <div className="space-y-3 sm:space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          {children}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
