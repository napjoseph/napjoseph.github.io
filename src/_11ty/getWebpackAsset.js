const fs = require('fs');
const path = require('path');
const util = require('util');
const readFile = util.promisify(fs.readFile);

const env = process.env.ELEVENTY_ENV;
const isDev = env === 'development';

module.exports = async function webpackAsset(name) {
  // Assets *should* not be hashed on development.
  if (isDev) {
    return name;
  }

  const manifestData = await readFile(
    path.resolve(__dirname, '..', '_includes', '.webpack', 'manifest.json')
  );
  const manifest = JSON.parse(manifestData);
  return manifest[name];
};
