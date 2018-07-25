'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var path = require('path');
var os = require('os');
var fs = require('fs')
var pjson = require(path.join(process.cwd(), './package.json'));
var config = pjson.config;
var directories = config.directories;

require('colors');

// String splice polyfill
if (!String.prototype.splice) {
  /**
   * {JSDoc}
   *
   * The splice() method changes the content of a string by removing a range of
   * characters and/or adding new characters.
   *
   * @this {String}
   * @param {number} start Index at which to start changing the string.
   * @param {number} delCount An integer indicating the number of old chars to remove.
   * @param {string} newSubStr The String that is spliced in.
   * @return {string} A new string with the spliced substring.
   */
  String.prototype.splice = function(start, delCount, newSubStr) {
      return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
  };
}

var ModuleGenerator = module.exports = function ModuleGenerator() {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  this.option('atomic', {
    desc: 'Defines if this module is used in atomic design. ' +
      'if so, allow it to be put in a atom, molecule, or organism folder',
    type: Boolean,
    required: false
  });

  var fileJSON = this.config.get('config');

  // options
  this.projectName = fileJSON.projectName;
  this.jsFramework = fileJSON.jsFramework;
  this.singlePageApplication = fileJSON.singlePageApplication;
  this.jsOption = fileJSON.jsOption;
  this.jsPreprocessor = 'es6';
  this.jsTemplate = fileJSON.jsTemplate;
  this.cssOption = 'sass';
  this.sassSyntax = 'scss';
  this.testFramework = fileJSON.testFramework;
  this.htmlOption = 'jade';

};

util.inherits(ModuleGenerator, yeoman.generators.NamedBase);

// Prompts
ModuleGenerator.prototype.ask = function ask() {
  const mainStyleFilePath = 'src/_styles/main.scss'
  this.atomic = false;
  if (this.options.atomic) {
    this.atomic = this.options.atomic;

    fs.readFile(mainStyleFilePath, 'utf8', (err, data) => {
      let importString = '@import \'' + this.moduleFile.replace('src', '..').replace(/\\/g, '/') + '\';\n'

      if (data.indexOf(importString) !== -1) {
        console.log('This module exists in main.scss.'.red);
        return false
      }
      if (this.atomic === 'atom') {
        fs.writeFile (mainStyleFilePath, data.splice(data.indexOf('//atoms'), 0, importString), function(err) {
          if (err) throw err;
          console.log('Added atom import to main.scss file.'.green);
        });
      }
      if (this.atomic === 'molecule') {
        fs.writeFile (mainStyleFilePath, data.splice(data.indexOf('//molecules'), 0, importString), function(err) {
          if (err) throw err;
          console.log('Added molecule import to main.scss file.'.green);
        });
      }
      if (this.atomic === 'organism') {
        fs.writeFile (mainStyleFilePath, data.splice(data.indexOf('//organisms'), 0, importString), function(err) {
          if (err) throw err;
          console.log('Added organism import to main.scss file.'.green);
        });
      }
    })
  }

  var moduleDir = config ?
    path.join(directories.source, directories.modules) :
    'src' + '/_modules';

  // Clean each part of the passed in path into usable file paths
  // /each_sdf.SDF => /each_sdf/sdf
  this.path = this.name.split('/')
    .map(function(item) {
      return item.toLowerCase();
    }.bind(this))
    .join('/');
  this.user = os.userInfo().username;
  // Get the last piece of the path
  // Ex: `button` of `cool/awesome/button`
  this.name = this.name.split('/').slice(-1)[0];

  this.moduleFile = path.join(
    moduleDir,
    this.path,
    this.name
  );

  this.testFile = path.join(
    moduleDir,
    this.path,
    'tests',
    this.name
  );

  if (['atom', 'molecule', 'organism'].indexOf(this.atomic) > -1) {
    this.moduleFile = path.join(
      moduleDir,
      this.atomic + 's',
      this.path,
      this.name
    );

    this.testFile = path.join(
      moduleDir,
      this.atomic + 's',
      this.path,
      'tests',
      this.name
    );
  }
  else if (this.atomic) {
    console.error('Error: Incorrect value given for --atomic option: '.red + this.atomic);
    console.error('Error: Only "atom", "molecule", or "organism" are valid values.'.red);
    this.abort = true;
  }
};

ModuleGenerator.prototype.files = function files() {

  if (this.abort) {
    return;
  }
  var htmlSuffix = (this.htmlOption === 'jade') ? '.jade' : '.nunjucks';
  var jsSuffix = (this.jsPreprocessor === 'none') ? '.js' : '.es6.js';
  var cssSuffix = _getCssSuffix(this.cssOption, this.sassSyntax);

  this.template(('module' + htmlSuffix), (this.moduleFile + htmlSuffix));
  this.template(('module' + jsSuffix), (this.moduleFile + '.js'));
  // this.template(('module.test' + jsSuffix), (this.testFile + '.test.js'));
  this.template(('module.css'), (this.moduleFile + cssSuffix));

  function _getCssSuffix(cssOption, sassSyntax) {
    var sassSuffix = (sassSyntax === 'sass') ? '.sass' : '.scss'

    var _result = '.scss';
    _result = (cssOption === 'sass') ? sassSuffix : _result;
    _result = (cssOption === 'stylus') ? '.styl' : _result;

    return _result;
  }
};
