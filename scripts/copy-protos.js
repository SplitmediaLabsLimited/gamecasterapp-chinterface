const { copyFileSync, existsSync, mkdirSync } = require('fs');
const { dirname, join } = require('path');

const root = join(__dirname, '..');
const source = join(root, 'src', 'protos', 'stream_list.proto');
const targets = [
  join(root, 'dist', 'protos', 'stream_list.proto'),
  join(root, 'dist', 'protos'),
];

if (!existsSync(source)) {
  console.warn('stream_list.proto not found; skipping proto copy.');
  process.exit(0);
}

mkdirSync(targets[1], { recursive: true });
copyFileSync(source, targets[0]);

console.log('Copied stream_list.proto to dist/protos/');
