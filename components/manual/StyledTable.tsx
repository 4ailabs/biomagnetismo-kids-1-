import React from 'react';

interface StyledTableProps {
  headers: string[];
  data: (string | React.ReactNode)[][];
}

const StyledTable: React.FC<StyledTableProps> = ({ headers, data }) => {
  return (
    <div className="overflow-hidden rounded-2xl shadow-xl border border-white/20 bg-white/90 backdrop-blur-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-teal-500 to-blue-500">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-4 sm:px-6 py-4 sm:py-5 text-left text-xs sm:text-sm font-bold text-white uppercase tracking-wider border-b border-white/20"
                >
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <span className="truncate">{header}</span>
                    <div className="w-1 h-1 bg-white rounded-full opacity-60 flex-shrink-0"></div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50 transition-all duration-200 group"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-4 sm:px-6 py-4 sm:py-5 text-xs sm:text-sm text-slate-700 group-hover:text-slate-900 transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      {cellIndex === 0 && (
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full mr-2 sm:mr-3 group-hover:scale-125 transition-transform duration-200 flex-shrink-0"></div>
                      )}
                      <span className="group-hover:font-medium transition-all duration-200 break-words leading-relaxed">
                        {cell}
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StyledTable;
