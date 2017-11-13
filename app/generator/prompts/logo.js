/**
 * Generate logo prompt
 */

'use strict';

var logoPrompt = function logoPrompt() {
  var yeogurtLogo = 'Welcome to'.green + ' Yomas';

  // have Yeogurt greet the user.
  this.log(yeogurtLogo);
};

module.exports = logoPrompt;
