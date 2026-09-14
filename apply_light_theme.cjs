const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace text colors
  content = content.replace(/text-white/g, 'text-gray-900');
  content = content.replace(/text-gray-100/g, 'text-gray-900');
  content = content.replace(/text-gray-300/g, 'text-gray-700');
  content = content.replace(/text-gray-400/g, 'text-gray-600');
  content = content.replace(/text-gray-500/g, 'text-gray-500');

  // Replace bg-cyber-black etc
  content = content.replace(/bg-cyber-black(\/\d+)?/g, 'bg-white/80');
  content = content.replace(/bg-cyber-navy(\/\d+)?/g, 'bg-blue-50');
  
  // Update hover texts
  content = content.replace(/hover:text-white/g, 'hover:text-blue-600');

  // Selection
  content = content.replace(/selection:text-white/g, 'selection:text-white');
  
  fs.writeFileSync(filePath, content, 'utf-8');
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      replaceInFile(fullPath);
    }
  }
}

walkDir(srcDir);
console.log('Replaced colors in JSX files');
