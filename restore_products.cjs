const fs = require('fs');
const oldFile = fs.readFileSync('mockData_old.ts', 'utf8');
const currentFile = fs.readFileSync('src/data/mockData.ts', 'utf8');

const oldMatch = oldFile.match(/(export const PRODUCTS: Product\[\] = \[[\s\S]*?\];)/);
if (!oldMatch) {
  console.log("Could not find PRODUCTS in old file");
  process.exit(1);
}

const newFile = currentFile.replace(/export const PRODUCTS: Product\[\] = \[\];/, oldMatch[1]);
fs.writeFileSync('src/data/mockData.ts', newFile);
console.log("Products restored successfully!");
