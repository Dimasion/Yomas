/**
 * Generate files specific to needed images
 */

'use strict';

var imageFiles = function imageFiles() {
  this.copy('src/shared/_images/yeogurt-swirl.png', 'src/_images/yeogurt-swirl.png');
  this.copy('src/shared/_icons/yomas.svg', 'src/_icons/yomas.svg');
};

module.exports = imageFiles;
