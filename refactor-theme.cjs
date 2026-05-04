const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');

const replacements = [
  { search: /bg-\[#0B0D0F\]/g, replace: 'dark:bg-[#0B0D0F] bg-slate-50' },
  { search: /bg-\[#121417\]/g, replace: 'dark:bg-[#121417] bg-white' },
  { search: /text-white(?!(\/|\]))/g, replace: 'dark:text-white text-slate-900' },
  { search: /text-gray-300/g, replace: 'dark:text-gray-300 text-slate-700' },
  { search: /text-gray-400/g, replace: 'dark:text-gray-400 text-slate-600' },
  { search: /text-gray-500/g, replace: 'dark:text-gray-500 text-slate-500' },
  { search: /bg-white\/5/g, replace: 'dark:bg-white/5 bg-black/5' },
  { search: /bg-white\/10/g, replace: 'dark:bg-white/10 bg-black/10' },
  { search: /bg-white\/20/g, replace: 'dark:bg-white/20 bg-black/20' },
  { search: /border-white\/5/g, replace: 'dark:border-white/5 border-black/5' },
  { search: /border-white\/10/g, replace: 'dark:border-white/10 border-black/10' },
  { search: /border-white\/20/g, replace: 'dark:border-white/20 border-black/20' },
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      for (const { search, replace } of replacements) {
        content = content.replace(search, replace);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}`);
      }
    }
  }
}

processDirectory(dir);
console.log('Refactoring complete.');
