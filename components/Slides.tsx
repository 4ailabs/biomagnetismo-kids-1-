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
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl aspect-video bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-teal-600 to-blue-600 text-white p-4 z-10">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Biomagnetismo Kids - Módulo 1</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleAutoPlay}
                className="flex items-center space-x-2 px-3 py-1 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
              >
                {isAutoPlay ? <Pause size={16} /> : <Play size={16} />}
                <span className="text-sm">{isAutoPlay ? 'Pausar' : 'Auto'}</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Slide Content */}
        <div className="absolute inset-0 pt-20 pb-16 px-8 flex items-center justify-center">
          <div className="w-full max-w-4xl text-center">
            {/* Slide Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-8 leading-tight">
              {currentSlideData.title}
            </h2>

            {/* Slide Content */}
            <div className="space-y-6">
              {currentSlideData.content.map((item, index) => (
                <div key={index} className="text-2xl md:text-3xl lg:text-4xl text-slate-700 leading-relaxed">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6">
          <div className="flex items-center justify-between">
            <button
              onClick={prevSlide}
              className="flex items-center space-x-2 px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors"
            >
              <ChevronLeft size={20} />
              <span>Anterior</span>
            </button>

            <div className="flex items-center space-x-4">
              <span className="text-white text-lg">
                {currentSlide + 1} / {slides.length}
              </span>
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center space-x-2 px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors"
            >
              <span>Siguiente</span>
              <ChevronRight size={20} />
            </button>
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
