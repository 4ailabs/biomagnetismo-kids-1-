import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BlockSelector from './components/BlockSelector';
import Manual from './components/Manual';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-tr from-indigo-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <main className="max-w-6xl mx-auto py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
          <div className="sticky top-4 sm:top-6 z-20 mb-10 sm:mb-12">
            <BlockSelector />
          </div>
          <div className="relative">
            <Manual />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
