/**
 * Generate files specific to needed images
 */

'use strict';

var imageFiles = function imageFiles() {
  this.copy('src/shared/_images/yeogurt-swirl.png', 'src/_images/yeogurt-swirl.png');
  this.copy('src/shared/_icons/yomas.svg', 'src/_icons/yomas.svg');
  this.copy('src/shared/_icons/sprite/sprite.svg', 'src/_icons/sprite/sprite.svg');
  this.copy('src/shared/_svg/yomas.svg', 'src/_svg/yomas.svg');
};

module.exports = imageFiles;
