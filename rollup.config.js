export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/geev-ng2-module.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng.geevModule',
  globals: {
    '@angular/core': 'ng.core'
  }
}