/**
 * Generate files specific to the styles folder
 */

'use strict';

var styleFiles = function styleFiles() {
  if (this.cssOption === 'less') {
    this.template('src/shared/_styles/main.less', 'src/_styles/main.less');
    this.template('src/shared/_styles/link/link.less', 'src/_modules/link/link.less');
  }
  if (this.cssOption === 'sass') {
    if (this.sassSyntax === 'sass') {
      this.template('src/shared/_styles/main.sass', 'src/_styles/main.sass');
      this.template('src/shared/_styles/link/link.sass', 'src/_modules/link/link.sass');
    }
    else {
      this.template('src/shared/_styles/main.scss', 'src/_styles/main.scss');
      this.template('src/shared/_styles/link/link.scss', 'src/_modules/atoms/link/link.scss');
      this.template('src/shared/_styles/checkbox/checkbox.scss', 'src/_modules/atoms/forms/checkbox/checkbox.scss');
      this.template('src/shared/_styles/includes/bootstrap-grid.scss', 'src/_styles/includes/bootstrap-grid.scss');
      this.template('src/shared/_styles/settings/_layout.scss', 'src/_styles/settings/_layout.scss');
      this.template('src/shared/_styles/settings/_typography.scss', 'src/_styles/settings/_typography.scss');
      this.template('src/shared/_styles/settings/_variables.scss', 'src/_styles/settings/_variables.scss');
      this.template('src/shared/_styles/settings/_fonts.scss', 'src/_styles/settings/_fonts.scss');
      this.template('src/shared/_styles/settings/_mixins.scss', 'src/_styles/settings/_mixins.scss');
      this.template('src/shared/_styles/settings/_media.scss', 'src/_styles/settings/_media.scss');
      this.template('src/shared/_styles/settings/_forms.scss', 'src/_styles/settings/_forms.scss');
    }
  }
  if (this.cssOption === 'stylus') {
    this.template('src/shared/_styles/main.styl', 'src/_styles/main.styl');
    this.template('src/shared/_styles/link/link.styl', 'src/_modules/link/link.styl');
  }
};

module.exports = styleFiles;
