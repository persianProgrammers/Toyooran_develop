const fs = require('fs');

let mockDataRaw = fs.readFileSync('src/data/mockData.ts', 'utf8');

// The user wants ALL product codes to start with TS instead of KT.
// And we should probably change the IDs too to match (e.g. ts-001)

// Let's replace "code": "KT- with "code": "TS-
mockDataRaw = mockDataRaw.replace(/"code":\s*"KT-/g, '"code": "TS-');

// Also replace the IDs: "id": "kt- with "id": "ts-
mockDataRaw = mockDataRaw.replace(/"id":\s*"kt-/g, '"id": "ts-');

// Let's also check if "models": ["KT-001"] is there
mockDataRaw = mockDataRaw.replace(/"models":\s*\[\s*"KT-/g, '"models": [\n      "TS-');
mockDataRaw = mockDataRaw.replace(/"KT-/g, '"TS-'); // Just replace any remaining "KT- inside quotes for good measure, like Catalog_KT-001.pdf

fs.writeFileSync('src/data/mockData.ts', mockDataRaw);
console.log("All KT codes changed to TS codes in mockData.ts");
