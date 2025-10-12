const fs = require('fs');
const path = require('path');

// Configuration
const CSS_FILE = './src/Components/design/App.css';
const SRC_DIR = './src';
const OUTPUT_FILE = './unused-classes-report.txt';

function extractCSSClasses(cssContent) {
  const classRegex = /\.([a-zA-Z0-9_-]+)\s*\{/g;
  const classes = new Set();
  let match;
  
  while ((match = classRegex.exec(cssContent)) !== null) {
    classes.add(match[1]);
  }
  return classes;
}

function extractUsedClassesFromFiles(dir) {
  const usedClasses = new Set();
  
  function scanDirectory(directory) {
    const items = fs.readdirSync(directory);
    
    items.forEach(item => {
      const fullPath = path.join(directory, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        
        // Find className="..." patterns
        const classRegex = /className="([^"]*)"/g;
        let classMatch;
        while ((classMatch = classRegex.exec(content)) !== null) {
          classMatch[1].split(/\s+/).forEach(className => {
            if (className) usedClasses.add(className);
          });
        }
        
        // Find className={'...'} patterns
        const classRegex2 = /className=\{['"]([^'"]*)['"]\}/g;
        while ((classMatch = classRegex2.exec(content)) !== null) {
          classMatch[1].split(/\s+/).forEach(className => {
            if (className) usedClasses.add(className);
          });
        }
      }
    });
  }
  
  scanDirectory(dir);
  return usedClasses;
}

// Main analysis
console.log('🔍 Analyzing CSS usage...\n');

const cssContent = fs.readFileSync(CSS_FILE, 'utf8');
const cssClasses = extractCSSClasses(cssContent);
const usedClasses = extractUsedClassesFromFiles(SRC_DIR);

const unusedClasses = [...cssClasses].filter(cls => !usedClasses.has(cls));
const usedCustomClasses = [...cssClasses].filter(cls => usedClasses.has(cls));

console.log(`📊 Results:`);
console.log(`Total CSS classes defined: ${cssClasses.size}`);
console.log(`Used custom classes: ${usedCustomClasses.length}`);
console.log(`Unused custom classes: ${unusedClasses.length}\n`);

// Save detailed report
const report = `
CSS USAGE ANALYSIS REPORT
Generated: ${new Date().toISOString()}

TOTALS:
--------
Total CSS classes: ${cssClasses.size}
Used classes: ${usedCustomClasses.length}
Unused classes: ${unusedClasses.length}

USED CUSTOM CLASSES:
-------------------
${usedCustomClasses.sort().join('\n')}

UNUSED CUSTOM CLASSES (Potential for removal):
----------------------------------------------
${unusedClasses.sort().join('\n')}

ALL CSS CLASSES:
---------------
${[...cssClasses].sort().join('\n')}
`;

fs.writeFileSync(OUTPUT_FILE, report);
console.log(`📄 Detailed report saved to: ${OUTPUT_FILE}`);
console.log(`\n🎯 Quick summary - Unused classes to check:`);
unusedClasses.slice(0, 20).forEach(cls => console.log(`  • ${cls}`));
if (unusedClasses.length > 20) {
  console.log(`  ... and ${unusedClasses.length - 20} more`);
}