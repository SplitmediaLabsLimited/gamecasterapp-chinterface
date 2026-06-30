const fs = require('fs');
const path = require('path');

const protoPath = path.join(__dirname, '..', 'src', 'protos', 'stream_list.proto');
const outputPath = path.join(__dirname, '..', 'src', 'protos', 'stream-list-content.js');
const proto = fs.readFileSync(protoPath, 'utf8');

fs.writeFileSync(
  outputPath,
  `export default ${JSON.stringify(proto)};\n`
);

console.log('Generated stream-list-content.js');
