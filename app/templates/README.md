# <%= _.titleize(projectName) %> readme

Generated on <%= (new Date).toISOString().split('T')[0] %> using
[<%= pkg.name %>@<%= pkg.version %>](https://github.com/larsonjj/generator-yeogurt)

## Description

This is an example readme file.
Describe your site/app here.

## Technologies used

JavaScript
- [Rollup](https://rollupjs.org/guide/en) with ES6/2015 support through [Babel](https://babeljs.io/)
- [Node](https://nodejs.org/)<% if (testFramework === 'jasmine' || testFramework === 'mocha') { %>

Testing
- [Karma](http://karma-runner.github.io/0.13/index.html)<% if (testFramework === 'jasmine') { %>
- [Jasmine](http://jasmine.github.io/)<% } else if (testFramework === 'mocha') { %>
- [Mocha](http://mochajs.org/)<% } %><% } %>

Styles<% if (cssOption === 'sass') { %>
- [Sass](http://sass-lang.com/) via ([node-sass](https://github.com/sass/node-sass))<% } else if (cssOption === 'less') { %>
- [Less](http://lesscss.org/)<% } else if (cssOption === 'stylus') { %>
- [Stylus](https://learnboost.github.io/stylus/)<% } %>

Markup<% if (htmlOption === 'jade') { %>
- [Jade](http://jade-lang.com/)<% } else if (htmlOption === 'nunjucks') { %>
- [Nunjucks](https://mozilla.github.io/nunjucks/)<% } %>

Optimization
- [Imagemin](https://github.com/imagemin/imagemin)
- [Uglify](https://github.com/mishoo/UglifyJS)

Server
- [BrowserSync](http://www.browsersync.io/)

Linting
- [ESlint](http://eslint.org/)

Automation
- [Gulp](http://gulpjs.com)

Code Management
- [Editorconfig](http://editorconfig.org/)
- [Git](https://git-scm.com/)


## Automated tasks

This project uses [Gulp](http://gulpjs.com) to run automated tasks for development and production builds.
The tasks are as follows:

`npm run dev`: Compiles preprocessors and boots up development server
`npm run build`: Will run all production tasks so you can view the site/app in it's final optimized form

`gulp test`: Lints all `*.js` file in the `source` folder using eslint<% if (testFramework === 'jasmine' || testFramework === 'mocha') { %> and runs all `*.test.js` file unit tests through [Karma](http://karma-runner.github.io/0.13/index.html) and <% if (testFramework === 'jasmine') { %>Jasmine<% } else if (testFramework === 'mocha') { %>Mocha + Chai<% } %>
`gulp test --watch`: Same as `gulp test` but will constantly watch `*.test.js` files and rerun tests when changes are detected<% } %>

***Adding the `--debug` option to any gulp task displays extra debugging information (ex. data being loaded into your templates)***
