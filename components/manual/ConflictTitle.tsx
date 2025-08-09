import React from 'react';

interface ConflictTitleProps {
  color: string;
  title: string;
}

const ConflictTitle: React.FC<ConflictTitleProps> = ({ color, title }) => {
  return (
    <div className="group mb-4">
      <div className={`inline-flex items-center space-x-3 ${color} text-white rounded-xl px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform`}>
        <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-300"></div>
        <h4 className="text-lg font-bold group-hover:text-xl transition-all duration-300">
          {title}
        </h4>
        <div className="w-6 h-0.5 bg-white rounded-full group-hover:w-10 transition-all duration-300"></div>
      </div>
    </div>
  );
};

export default ConflictTitle;
