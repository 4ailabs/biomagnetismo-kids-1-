// Sistema de tipografía unificado para la aplicación
export const typography = {
  // Tamaños de fuente
  fontSizes: {
    xs: 'text-xs',      // 12px
    sm: 'text-sm',      // 14px
    base: 'text-base',  // 16px
    lg: 'text-lg',      // 18px
    xl: 'text-xl',      // 20px
    '2xl': 'text-2xl',  // 24px
    '3xl': 'text-3xl',  // 30px
    '4xl': 'text-4xl',  // 36px
    '5xl': 'text-5xl',  // 48px
    '6xl': 'text-6xl',  // 60px
  },

  // Pesos de fuente
  fontWeights: {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
  },

  // Alturas de línea
  lineHeights: {
    tight: 'leading-tight',
    snug: 'leading-snug',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
    loose: 'leading-loose',
  },

  // Colores de texto
  textColors: {
    primary: 'text-slate-900',
    secondary: 'text-slate-700',
    tertiary: 'text-slate-600',
    muted: 'text-slate-500',
    light: 'text-slate-400',
    white: 'text-white',
  },

  // Títulos principales
  headings: {
    h1: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight',
    h2: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight',
    h3: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 leading-tight',
    h4: 'text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-slate-800 leading-tight',
    h5: 'text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-slate-700 leading-tight',
    h6: 'text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-slate-700 leading-tight',
  },

  // Subtítulos
  subtitles: {
    primary: 'text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 leading-relaxed',
    secondary: 'text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed',
    tertiary: 'text-sm sm:text-base md:text-lg lg:text-xl text-slate-500 leading-relaxed',
  },

  // Texto del cuerpo
  body: {
    large: 'text-base sm:text-lg text-slate-700 leading-relaxed',
    medium: 'text-sm sm:text-base text-slate-700 leading-relaxed',
    small: 'text-xs sm:text-sm text-slate-600 leading-relaxed',
  },

  // Texto de navegación
  navigation: {
    primary: 'text-sm sm:text-base font-medium text-slate-700',
    secondary: 'text-xs sm:text-sm font-medium text-slate-600',
    button: 'text-sm sm:text-base font-medium text-white',
  },

  // Texto de botones
  buttons: {
    primary: 'text-sm sm:text-base font-medium text-white',
    secondary: 'text-sm sm:text-base font-medium text-slate-700',
    small: 'text-xs sm:text-sm font-medium text-white',
  },

  // Texto de tarjetas
  cards: {
    title: 'text-sm sm:text-base lg:text-lg font-semibold text-slate-700',
    subtitle: 'text-xs sm:text-sm text-slate-500',
    content: 'text-xs sm:text-sm text-slate-600',
  },

  // Texto de formularios
  forms: {
    label: 'text-sm sm:text-base font-medium text-slate-700',
    input: 'text-sm sm:text-base text-slate-900',
    placeholder: 'text-sm sm:text-base text-slate-400',
    error: 'text-xs sm:text-sm text-red-600',
    help: 'text-xs sm:text-sm text-slate-500',
  },

  // Texto de tablas
  tables: {
    header: 'text-xs sm:text-sm font-semibold text-slate-700',
    cell: 'text-xs sm:text-sm text-slate-600',
    caption: 'text-xs text-slate-500',
  },

  // Texto de alertas
  alerts: {
    success: 'text-sm sm:text-base text-green-700',
    warning: 'text-sm sm:text-base text-yellow-700',
    error: 'text-sm sm:text-base text-red-700',
    info: 'text-sm sm:text-base text-blue-700',
  },
};

// Clases de utilidad para tipografía
export const textUtils = {
  // Títulos responsivos
  title: {
    main: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight',
    section: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 leading-tight',
    subsection: 'text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-slate-800 leading-tight',
    card: 'text-base sm:text-lg md:text-xl font-semibold text-slate-700 leading-tight',
  },

  // Subtítulos responsivos
  subtitle: {
    main: 'text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 leading-relaxed',
    section: 'text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed',
    card: 'text-sm sm:text-base text-slate-500 leading-relaxed',
  },

  // Texto del cuerpo responsivo
  body: {
    large: 'text-base sm:text-lg text-slate-700 leading-relaxed',
    medium: 'text-sm sm:text-base text-slate-700 leading-relaxed',
    small: 'text-xs sm:text-sm text-slate-600 leading-relaxed',
  },

  // Navegación responsiva
  nav: {
    primary: 'text-sm sm:text-base font-medium text-slate-700',
    secondary: 'text-xs sm:text-sm font-medium text-slate-600',
  },

  // Botones responsivos
  button: {
    primary: 'text-sm sm:text-base font-medium text-white',
    secondary: 'text-sm sm:text-base font-medium text-slate-700',
    small: 'text-xs sm:text-sm font-medium text-white',
  },
};

export default typography;
