const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      
      // Fix buttons to have white text instead of text-gray-900 since the background is dark blue now
      content = content.replace(/className="([^"]*bg-gradient-to-r[^"]*)text-gray-900/g, 'className="$1text-white');
      
      // Fix background colors back to cyber variables which we changed in tailwind config
      // Wait, earlier I replaced bg-cyber-black with bg-white/80 and bg-cyber-navy with bg-blue-50.
      // I should revert that and let tailwind use the new cyber variables!
      content = content.replace(/bg-white\/80/g, 'bg-cyber-black/80');
      content = content.replace(/bg-blue-50/g, 'bg-cyber-navy/10');
      
      fs.writeFileSync(fullPath, content, 'utf-8');
    }
  }
}

walkDir(srcDir);
