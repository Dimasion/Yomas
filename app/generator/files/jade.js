/**
 * Generate files specific to the jade folder
 */

'use strict';

var jadeFiles = function jadeFiles() {
  if (this.htmlOption === 'jade') {
    this.template('src/static/jade/_layouts/base.jade', 'src/_layouts/base.jade');
    this.template('src/static/jade/_modules/link/link.jade', 'src/_modules/atoms/link/link.jade');
    this.template('src/static/jade/_modules/checkbox/checkbox.jade', 'src/_modules/atoms/forms/checkbox/checkbox.jade');
    this.template('src/static/jade/_modules/icon/icon.jade', 'src/_modules/atoms/global/icon/icon.jade');
    this.template('src/static/jade/index.jade', 'src/index.jade');
  }
};

module.exports = jadeFiles;
