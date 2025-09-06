const fs = require('fs');
const path = require('path');

// Función para corregir tarjetas superpuestas
function fixCardOverlap(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;
    
    // Patrones a reemplazar para evitar tarjetas sobre tarjetas
    const replacements = [
      // Reemplazar bg-white con shadow dentro de CourseSection
      {
        from: /className="bg-white rounded-lg shadow-lg p-6"/g,
        to: 'className="bg-slate-50 rounded-lg p-6 border border-slate-200"'
      },
      {
        from: /className="bg-white rounded-xl shadow-lg p-6"/g,
        to: 'className="bg-slate-50 rounded-xl p-6 border border-slate-200"'
      },
      {
        from: /className="bg-white rounded-lg shadow-md p-6"/g,
        to: 'className="bg-slate-50 rounded-lg p-6 border border-slate-200"'
      },
      {
        from: /className="bg-white rounded-xl shadow-md p-6"/g,
        to: 'className="bg-slate-50 rounded-xl p-6 border border-slate-200"'
      },
      // Reemplazar títulos con tipografía unificada
      {
        from: /className="text-lg font-semibold text-gray-800"/g,
        to: 'className={`${textUtils.title.subsection} text-gray-800`}'
      },
      {
        from: /className="text-base font-semibold text-gray-800"/g,
        to: 'className={`${textUtils.title.card} text-gray-800`}'
      },
      // Reemplazar texto del cuerpo
      {
        from: /className="space-y-2 text-sm text-gray-600"/g,
        to: 'className={`space-y-2 ${textUtils.body.small}`}'
      },
      {
        from: /className="space-y-3 text-sm text-gray-600"/g,
        to: 'className={`space-y-3 ${textUtils.body.small}`}'
      },
      {
        from: /className="space-y-4 text-sm text-gray-600"/g,
        to: 'className={`space-y-4 ${textUtils.body.small}`}'
      }
    ];
    
    // Aplicar reemplazos
    replacements.forEach(({ from, to }) => {
      if (content.match(from)) {
        content = content.replace(from, to);
        updated = true;
      }
    });
    
    if (updated) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed card overlap: ${filePath}`);
    } else {
      console.log(`⏭️  No changes needed: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
}

// Directorio de bloques del módulo 3
const module3Dir = path.join(__dirname, '../components/blocks/module3');

// Archivos a corregir
const filesToFix = [
  'Module3Block1.tsx',
  'Module3Block2.tsx',
  'Module3Block3.tsx',
  'Module3Block4.tsx',
  'Module3Block5.tsx',
  'Module3Block6.tsx',
  'Module3Block7.tsx',
  'Module3Block8.tsx'
];

console.log('🔧 Fixing card overlap issues in Module 3 blocks...\n');

filesToFix.forEach(file => {
  const filePath = path.join(module3Dir, file);
  if (fs.existsSync(filePath)) {
    fixCardOverlap(filePath);
  } else {
    console.log(`⚠️  File not found: ${filePath}`);
  }
});

console.log('\n✨ Card overlap fix completed!');
