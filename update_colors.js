const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\seema\\OneDrive\\Desktop\\saint_d_school_website\\school';
const files = ['style.css', 'index.html', 'about.html', 'academics.html', 'results.html', 'hostel.html', 'gallery.html', 'contact.html', 'shared.js'];

files.forEach(file => {
  const filePath = path.join(dir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace Forest RGB
    content = content.replace(/1,\s*71,\s*46/g, '10, 37, 64');
    
    // Replace Sage RGB
    content = content.replace(/204,\s*213,\s*174/g, '230, 240, 250');
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
});
