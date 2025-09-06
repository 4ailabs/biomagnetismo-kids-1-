import React from 'react';
import { textUtils } from '../src/styles/typography';

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
          <h2 className={`ml-3 sm:ml-4 ${textUtils.title.section} break-words`}>{title}</h2>
        </div>
        <div className={`space-y-3 sm:space-y-4 ${textUtils.body.medium}`}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
