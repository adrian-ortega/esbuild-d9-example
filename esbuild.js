const esbuild = require('esbuild');
const { sassPlugin } = require('esbuild-sass-plugin');

esbuild.build({
  entryPoints: [
    'src/main.js'
  ],
  plugins: [
    sassPlugin()
  ],
  outdir: 'dist',
  bundle: true,
  sourcemap: true,
  // minify: true,

  platform: 'browser',

  // Important if we want to assign a global variable
  // which is used to store the exports of the entry point
  //
  // globalName: 'CSULBD9',

  target: [
    'esnext'
  ]
});