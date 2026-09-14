const fs = require('fs');
const path = require('path');
const srcDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(srcDir);
for (const file of files) {
  if (file.endsWith('.jsx')) {
    const p = path.join(srcDir, file);
    let c = fs.readFileSync(p, 'utf-8');
    c = c.replace(/bg-cyber-navy\/10/g, 'bg-transparent');
    c = c.replace(/bg-cyber-black\/80/g, 'bg-transparent');
    c = c.replace(/<section([^>]*?)bg-white([^>]*?)>/g, '<section$1bg-transparent$2>');
    fs.writeFileSync(p, c, 'utf-8');
  }
}
