import React from 'react';

interface SectionTitleProps {
  id?: string;
  icon: React.ReactNode;
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ id, icon, title }) => {
  return (
    <div id={id} className="group relative mb-6 sm:mb-8">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-50 via-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
        <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
          {/* Icon container */}
          <div className="flex-shrink-0 flex justify-center sm:justify-start">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="text-white text-lg sm:text-2xl">
                {icon}
              </div>
            </div>
          </div>
          
          {/* Title */}
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-teal-700 group-hover:via-blue-700 group-hover:to-purple-700 transition-all duration-300 leading-tight pb-1">
              {title}
            </h2>
            <div className="mt-2 w-16 sm:w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mx-auto sm:mx-0 group-hover:w-24 sm:group-hover:w-32 transition-all duration-300"></div>
          </div>
          
          {/* Decorative element */}
          <div className="hidden lg:block flex-shrink-0">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
