const fs = require('fs');
const path = require('path');

// Mapeo de clases de tipografía antiguas a nuevas
const typographyMap = {
  // Títulos
  'text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold': 'textUtils.title.main',
  'text-xl sm:text-2xl lg:text-3xl font-bold': 'textUtils.title.section',
  'text-lg sm:text-xl lg:text-2xl font-bold': 'textUtils.title.subsection',
  'text-base sm:text-lg font-bold': 'textUtils.title.card',
  
  // Subtítulos
  'text-lg sm:text-xl lg:text-2xl text-slate-600': 'textUtils.subtitle.main',
  'text-base sm:text-lg text-slate-600': 'textUtils.subtitle.section',
  'text-sm sm:text-base text-slate-500': 'textUtils.subtitle.card',
  
  // Texto del cuerpo
  'text-base sm:text-lg text-slate-700': 'textUtils.body.large',
  'text-sm sm:text-base text-slate-700': 'textUtils.body.medium',
  'text-xs sm:text-sm text-slate-600': 'textUtils.body.small',
  
  // Navegación
  'text-sm sm:text-base font-medium text-slate-700': 'textUtils.nav.primary',
  'text-xs sm:text-sm font-medium text-slate-600': 'textUtils.nav.secondary',
  
  // Botones
  'text-sm sm:text-base font-medium text-white': 'textUtils.button.primary',
  'text-sm sm:text-base font-medium text-slate-700': 'textUtils.button.secondary',
  'text-xs sm:text-sm font-medium text-white': 'textUtils.button.small',
  
  // Tarjetas
  'text-sm sm:text-base lg:text-lg font-semibold text-slate-700': 'textUtils.cards.title',
  'text-xs sm:text-sm text-slate-500': 'textUtils.cards.subtitle',
  'text-xs sm:text-sm text-slate-600': 'textUtils.cards.content',
};

// Función para actualizar un archivo
function updateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;
    
    // Verificar si ya tiene la importación de textUtils
    if (!content.includes("import { textUtils }")) {
      // Agregar importación después de las otras importaciones
      const importMatch = content.match(/(import.*from.*;\n)/g);
      if (importMatch) {
        const lastImport = importMatch[importMatch.length - 1];
        const importIndex = content.lastIndexOf(lastImport) + lastImport.length;
        content = content.slice(0, importIndex) + 
          "import { textUtils } from '../../../src/styles/typography';\n" + 
          content.slice(importIndex);
        updated = true;
      }
    }
    
    // Reemplazar clases de tipografía
    for (const [oldClass, newClass] of Object.entries(typographyMap)) {
      const regex = new RegExp(oldClass.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      if (content.includes(oldClass)) {
        content = content.replace(regex, `\${${newClass}}`);
        updated = true;
      }
    }
    
    if (updated) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated: ${filePath}`);
    } else {
      console.log(`⏭️  No changes needed: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
  }
}

// Directorio de bloques del módulo 3
const module3Dir = path.join(__dirname, '../components/blocks/module3');

// Archivos a actualizar
const filesToUpdate = [
  'Module3Block1.tsx',
  'Module3Block2.tsx',
  'Module3Block3.tsx',
  'Module3Block4.tsx',
  'Module3Block5.tsx',
  'Module3Block6.tsx',
  'Module3Block7.tsx',
  'Module3Block8.tsx'
];

console.log('🎨 Updating typography in Module 3 blocks...\n');

filesToUpdate.forEach(file => {
  const filePath = path.join(module3Dir, file);
  if (fs.existsSync(filePath)) {
    updateFile(filePath);
  } else {
    console.log(`⚠️  File not found: ${filePath}`);
  }
});

console.log('\n✨ Typography update completed!');
