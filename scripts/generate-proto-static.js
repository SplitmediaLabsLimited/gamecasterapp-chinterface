const { execSync } = require('child_process');
const path = require('path');

const root = path.join(__dirname, '..');
const protoPath = path.join(root, 'src', 'protos', 'stream_list.proto');
const outputPath = path.join(root, 'src', 'protos', 'stream_list_static.js');
const pbjs = path.join(
  root,
  'node_modules',
  'protobufjs-cli',
  'bin',
  'pbjs'
);

execSync(
  `node "${pbjs}" -t static-module -w es6 -o "${outputPath}" "${protoPath}"`,
  { stdio: 'inherit' }
);

console.log('Generated stream_list_static.js');
