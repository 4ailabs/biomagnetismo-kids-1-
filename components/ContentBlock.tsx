import React from 'react';
import { textUtils } from '../src/styles/typography';

interface ContentBlockProps {
  title: string;
  content: string | React.ReactNode;
  className?: string;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ title, content, className = "" }) => {
  return (
    <div className={`bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg ${className}`}>
      <h3 className={`${textUtils.title.subsection} mb-4 sm:mb-6 text-gray-800`}>
        {title}
      </h3>
      {typeof content === 'string' ? (
        <div className={`${textUtils.body.medium} text-gray-600 leading-relaxed`}>
          {content}
        </div>
      ) : (
        <div className="space-y-3 sm:space-y-4">
          {content}
        </div>
      )}
    </div>
  );
};

export default ContentBlock;
