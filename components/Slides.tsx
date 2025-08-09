import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  content: string[];
  type: 'title' | 'content' | 'key-points' | 'summary';
}

const Slides: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const slides: Slide[] = [
    {
      id: 1,
      title: t('slides.welcome.title'),
      content: [t('slides.welcome.subtitle')],
      type: 'title'
    },
    {
      id: 2,
      title: t('slides.fundamentals.title'),
      content: [
        t('slides.fundamentals.point1'),
        t('slides.fundamentals.point2'),
        t('slides.fundamentals.point3'),
        t('slides.fundamentals.point4')
      ],
      type: 'key-points'
    },
    {
      id: 3,
      title: t('slides.conflicts.title'),
      content: [
        t('slides.conflicts.survival'),
        t('slides.conflicts.protection'),
        t('slides.conflicts.separation'),
        t('slides.conflicts.identity'),
        t('slides.conflicts.territory')
      ],
      type: 'key-points'
    },
    {
      id: 4,
      title: t('slides.systemic.title'),
      content: [
        t('slides.systemic.point1'),
        t('slides.systemic.point2'),
        t('slides.systemic.point3'),
        t('slides.systemic.point4')
      ],
      type: 'key-points'
    },
    {
      id: 5,
      title: t('slides.protocol.title'),
      content: [
        t('slides.protocol.step1'),
        t('slides.protocol.step2'),
        t('slides.protocol.step3'),
        t('slides.protocol.step4'),
        t('slides.protocol.step5')
      ],
      type: 'key-points'
    },
    {
      id: 6,
      title: t('slides.shocks.title'),
      content: [
        t('slides.shocks.intro'),
        t('slides.shocks.example1'),
        t('slides.shocks.example2'),
        t('slides.shocks.example3')
      ],
      type: 'content'
    },
    {
      id: 7,
      title: t('slides.sensations.title'),
      content: [
        t('slides.sensations.intro'),
        t('slides.sensations.example1'),
        t('slides.sensations.example2'),
        t('slides.sensations.example3')
      ],
      type: 'content'
    },
    {
      id: 8,
      title: t('slides.belonging.title'),
      content: [
        t('slides.belonging.loyalty'),
        t('slides.belonging.sacrifice'),
        t('slides.belonging.guilt'),
        t('slides.belonging.direction')
      ],
      type: 'key-points'
    },
    {
      id: 9,
      title: t('slides.conclusion.title'),
      content: [
        t('slides.conclusion.point1'),
        t('slides.conclusion.point2'),
        t('slides.conclusion.point3')
      ],
      type: 'summary'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 8000); // 8 seconds per slide
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  const currentSlideData = slides[currentSlide];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="relative w-full h-full bg-white overflow-hidden">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-teal-600 to-blue-600 text-white p-6 z-10">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Biomagnetismo Kids - Módulo 1</h1>
            <div className="flex items-center space-x-6">
              <button
                onClick={toggleAutoPlay}
                className="flex items-center space-x-3 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors text-lg"
              >
                {isAutoPlay ? <Pause size={20} /> : <Play size={20} />}
                <span>{isAutoPlay ? 'Pausar' : 'Auto'}</span>
              </button>
              <button
                onClick={onClose}
                className="p-3 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Slide Content - Full Screen */}
        <div className="absolute inset-0 pt-24 pb-32 px-12 flex items-center justify-center">
          <div className="w-full max-w-6xl text-center">
            {/* Slide Title */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-12 leading-tight">
              {currentSlideData.title}
            </h2>

            {/* Slide Content */}
            <div className="space-y-8">
              {currentSlideData.content.map((item, index) => (
                <div key={index} className="text-3xl md:text-4xl lg:text-5xl text-slate-700 leading-relaxed">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Large Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-white/90 hover:bg-white text-slate-700 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
        >
          <ChevronLeft size={32} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-white/90 hover:bg-white text-slate-700 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
        >
          <ChevronRight size={32} />
        </button>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <span className="text-white text-2xl font-semibold">
                {currentSlide + 1} / {slides.length}
              </span>
              <div className="flex space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-4 h-4 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={prevSlide}
                className="flex items-center space-x-3 px-6 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors text-lg"
              >
                <ChevronLeft size={24} />
                <span>Anterior</span>
              </button>

              <button
                onClick={nextSlide}
                className="flex items-center space-x-3 px-6 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors text-lg"
              >
                <span>Siguiente</span>
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Keyboard Navigation */}
        <div className="absolute inset-0 focus:outline-none" tabIndex={0} onKeyDown={(e) => {
          if (e.key === 'ArrowRight') nextSlide();
          if (e.key === 'ArrowLeft') prevSlide();
          if (e.key === 'Escape') onClose();
          if (e.key === ' ') {
            e.preventDefault();
            toggleAutoPlay();
          }
        }} />
      </div>
    </div>
  );
};

export default Slides;
