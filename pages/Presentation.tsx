import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Home,
  BookOpen,
  Beaker,
  Baby,
  Rocket,
  Target,
  Heart,
  Brain,
  Sparkles,
  Lightbulb,
  Users,
  Clock,
  GraduationCap,
  AlertTriangle,
  Table,
  History,
  Download,
  Shield
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Slide {
  id: number;
  title: string;
  content: string[];
  type: 'title' | 'content' | 'key-points' | 'summary' | 'image';
}

const Presentation: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
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
      title: t('slides.pairs.title'),
      content: [
        t('slides.pairs.intro'),
        t('slides.pairs.example1'),
        t('slides.pairs.example2'),
        t('slides.pairs.example3'),
        t('slides.pairs.example4')
      ],
      type: 'key-points'
    },
    {
      id: 10,
      title: t('slides.techniques.title'),
      content: [
        t('slides.techniques.muscleTest'),
        t('slides.techniques.recession'),
        t('slides.techniques.consciousness'),
        t('slides.techniques.feelingPhrases')
      ],
      type: 'key-points'
    },
    {
      id: 11,
      title: t('slides.cases.title'),
      content: [
        t('slides.cases.case1'),
        t('slides.cases.case2'),
        t('slides.cases.case3')
      ],
      type: 'content'
    },
    {
      id: 12,
      title: t('slides.results.title'),
      content: [
        t('slides.results.improvement1'),
        t('slides.results.improvement2'),
        t('slides.results.improvement3'),
        t('slides.results.improvement4')
      ],
      type: 'key-points'
    },
    {
      id: 13,
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

  const goHome = () => {
    navigate('/');
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

  return (
    <div className="min-h-screen bg-black">
      <div className="relative w-full h-screen bg-white overflow-hidden">
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
                onClick={goHome}
                className="flex items-center space-x-3 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors text-lg"
              >
                <Home size={20} />
                <span>Inicio</span>
              </button>
              <button
                onClick={goHome}
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
            {/* Slide Title with Icon */}
            <div className="flex items-center justify-center mb-8">
              {currentSlideData.id === 1 && <BookOpen className="w-16 h-16 text-teal-600 mr-4" />}
              {currentSlideData.id === 2 && <Brain className="w-16 h-16 text-blue-600 mr-4" />}
              {currentSlideData.id === 3 && <AlertTriangle className="w-16 h-16 text-red-600 mr-4" />}
              {currentSlideData.id === 4 && <Users className="w-16 h-16 text-purple-600 mr-4" />}
              {currentSlideData.id === 5 && <Target className="w-16 h-16 text-green-600 mr-4" />}
              {currentSlideData.id === 6 && <Heart className="w-16 h-16 text-pink-600 mr-4" />}
              {currentSlideData.id === 7 && <Sparkles className="w-16 h-16 text-yellow-600 mr-4" />}
              {currentSlideData.id === 8 && <Lightbulb className="w-16 h-16 text-orange-600 mr-4" />}
              {currentSlideData.id === 9 && <Table className="w-16 h-16 text-indigo-600 mr-4" />}
              {currentSlideData.id === 10 && <GraduationCap className="w-16 h-16 text-teal-600 mr-4" />}
              {currentSlideData.id === 11 && <Baby className="w-16 h-16 text-blue-600 mr-4" />}
              {currentSlideData.id === 12 && <Rocket className="w-16 h-16 text-green-600 mr-4" />}
              {currentSlideData.id === 13 && <Target className="w-16 h-16 text-purple-600 mr-4" />}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 leading-tight">
                {currentSlideData.title}
              </h2>
            </div>

            {/* Slide Content with Enhanced Layout */}
            <div className="space-y-6">
              {currentSlideData.content.map((item, index) => (
                <div key={index} className="flex items-center justify-center space-x-4">
                  <div className="flex-shrink-0">
                    {currentSlideData.type === 'key-points' && (
                      <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                    )}
                    {currentSlideData.type === 'content' && (
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">•</span>
                      </div>
                    )}
                    {currentSlideData.type === 'summary' && (
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">✓</span>
                      </div>
                    )}
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-4xl text-slate-700 leading-relaxed font-medium">
                    {item}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Information for Specific Slides */}
            {currentSlideData.id === 1 && (
              <div className="mt-12 p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl border border-teal-200">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <Clock className="w-8 h-8 text-teal-600" />
                  <span className="text-xl text-teal-700 font-semibold">Módulo 1: El Inicio Invisible</span>
                </div>
                <p className="text-lg text-slate-600">Cuando la Historia Empieza Antes de Nacer</p>
              </div>
            )}

            {currentSlideData.id === 3 && (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                    <span className="font-semibold text-red-700">Supervivencia</span>
                  </div>
                  <p className="text-sm text-red-600">Amenaza de aborto, hemorragias</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-6 h-6 text-orange-600" />
                    <span className="font-semibold text-orange-700">Protección</span>
                  </div>
                  <p className="text-sm text-orange-600">Violencia, entornos hostiles</p>
                </div>
              </div>
            )}

            {currentSlideData.id === 5 && (
              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Target className="w-8 h-8 text-green-600" />
                  <span className="text-xl text-green-700 font-semibold">Protocolo Bioenergético</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span>Identificación del conflicto</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span>Recesión de edad</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span>Selección de pares</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span>Conscientización</span>
                  </div>
                </div>
              </div>
            )}
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
          if (e.key === 'Escape') goHome();
          if (e.key === ' ') {
            e.preventDefault();
            toggleAutoPlay();
          }
        }} />
      </div>
    </div>
  );
};

export default Presentation;
