/**
 * Generate files specific to the styles folder
 */

'use strict';

var styleFiles = function styleFiles() {
  if (this.jsPreprocessor === 'none') {
    this.template('src/shared/_scripts/main.js', 'src/_scripts/main.js');
    this.template('src/shared/_modules/link/link.js', 'src/_modules/link/link.js');
  }
  else {
    this.template('src/shared/_scripts/libraries/svg4everybody.js', 'src/_scripts/libraries/svg4everybody.js');
    this.template('src/shared/_scripts/app.es6.js', 'src/_scripts/app.js');
    this.template('src/shared/_scripts/vendor.js', 'src/_scripts/vendor.js');
    this.template('src/shared/_modules/link/link.es6.js', 'src/_modules/atoms/link/link.js');
  }
};

module.exports = styleFiles;
