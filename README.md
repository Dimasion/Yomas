<p align="center">
  <img src="https://raw.githubusercontent.com/Dimasion/Yomas/master/docs/images/logo.jpg" />
</p>

# Yomas Generator [![npm version](https://badge.fury.io/js/generator-mas.svg)](https://badge.fury.io/js/generator-mas)

Yomas generator based on Yeogurt generator.
Changes:
- Selected one stack of technologies
- Modified jade mixin syntax
- Changed modules design
- Added SVG sprite system
- Ability to add colorful SVG icons

A generator for creating static sites. Helps you harness the power of your favorite tools:
- [Jade](http://jade-lang.com/)
- [Gulp](http://gulpjs.com)
- [ES6/2015](http://gulpjs.com)

# Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Setup](#setup)
- [Gulp Workflow](#gulp-workflow)
- [Sub-Generators](#sub-generators)
- [Guides](#guides)
- [Common Issues](#common-issues)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Testing Generator](#testing-generator)
- [Release History](#release-history)
- [License](#license)

## Features

### Included in every project
- Preview server with [Browsersync](http://www.browsersync.io/)
- Automated build process that includes: compilation of preprocessors (Jade, Sass, etc), minification of CSS and HTML, compression of Javascript, and optimization of images
- [.editorconfig](http://editorconfig.org/) for consistent coding styles within text editors
- [Sourcemaps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) for JavaScript and Stylesheets
- JavaScript Linting with [ESLint](http://eslint.org/)
- System Notifications for build errors via [gulp-notify](https://github.com/mikaelbr/gulp-notify)

### Available Options

- Project/Site naming
- ES6/2015 support using [Babel](https://babeljs.io/)
- [Less](http://lesscss.org/), [Sass](http://sass-lang.com/) (via [node-sass](https://github.com/andrew/node-sass)), or [Stylus](http://learnboost.github.io/stylus/) for Stylesheets
- [Jasmine](http://jasmine.github.io/) or [Mocha](http://mochajs.org/) + [Chai](http://chaijs.com/) for JavaScript unit testing
- [Karma](http://karma-runner.github.io/0.12/index.html) for running unit tests
- [Jade](http://jade-lang.com/) or [Nunjucks](https://mozilla.github.io/nunjucks/) for templating


## Getting Started
This generator utilizes [Yeoman](http://yeoman.io/) and [Gulp](http://gulpjs.com/) to scaffold out projects, automate tasks, and manage front-end dependencies respectively. If this is your first time here, it is recommended you [read about these tools](http://yeoman.io/learning/index.html) before proceeding.

### Installation
There are a few dependencies that this project relies on:

> NOTE: For OSX users
> You may have some issues compiling code during installation of packages. Please install Xcode from App Store first. After Xcode is installed,
open Xcode and go to ***Preferences -> Download -> Command Line Tools -> Install*** to install command line tools.

> NOTE: For Windows users
> You may have some issues compiling [BrowserSync](http://www.browsersync.io/) during installation of packages. Please go to [http://www.browsersync.io/docs/#windows-users](http://www.browsersync.io/docs/#windows-users) for more information on how to get all the needed dependencies.

#### Node.js
Check to see if you already have Node installed. Do this by bringing up a terminal/command prompt and type `node -v`. If the response shows a version at or above `v0.12.x`, you are all set and can proceed to installing Yeoman, Gulp, and Bower. If you see an error and/or your version is too low, navigate to the [Node.js](http://nodejs.org/) website and install Node from there.

#### Yeoman & Gulp
Once you have Node installed, make sure you have these tools by opening up a terminal/command prompt and entering following commands:

| Command  | Response
|---------- |:---------:
| `yo --version`  | at or above `v1.2.1`
| `gulp -v` | `gulp-cli` at or above `v0.3.9`

If you get any errors and/or you're version(s) are too low, you should run `npm install -g yo gulp`.
This will install both tools and update them to their latest versions.


#### Yeogurt
Now that you have all the needed dependencies, you can install this generator with the following command:
```
npm install -g generator-mas
```

That completes installation! So at this point you should have all the needed tools to start working Yeogurt.

## Setup
When starting a new project, you will want to: open up a terminal/command prompt, make a new directory, and navigate into it.

```
mkdir my-new-project && cd $_
```

then, run the Yeogurt generator.

```
yo mas
```

***Optionally***, you can skip the automated installation of npm packages by passing in `--skip-install`. The main reason to use this is if you have spotty/no internet connection, but would still like to generate your project.

```
yo mas --skip-install
```

Follow all the prompts and choose what suits you most for the project you would like to create. When you finish with all of the prompts, your project scaffold will be created and all dependencies will be installed.

> NOTE: If you used the `--skip-install` option, no dependencies will have been installed and your gulp tasks will NOT work.
You will need to run `npm install` in your project's root directory in order to get started running automated tasks

Once everything is installed, you will see a project structure like below:

```
├── gulp/                      # Folder for gulp tasks
├── build/                     # Folder for production build output
├── tmp/                       # Folder for temporary development output
├── src
|   ├── _data                  # JSON/YAML files that add data to templates
|   ├── _images                # Images
|   ├── _layouts               # Layout structure for app
|   |   └── base.jade
|   ├── _modules               # Reusable modules
|   |   └── link
|   |       ├── __tests__
|   |       |   └── link.spec.js
|   |       ├── link.jade
|   |       ├── link.js
|   |       └── link.scss
|   ├── _styles               # Global styles, mixins, variables, etc
|   |   └── main.scss         # Main stylesheet (import everything to this file)
|   ├── _scripts              # Global scripts, base classes, etc
|   |   └── main.js           # Main bootstrap file
|   ├── fonts                 # Fonts (Example, will not be generated)
|   ├── index.jade            # Homepage template
|   ├── favicon.ico
|   └── robots.txt
├── gulpfile.js               # Gulp task configuration
└── package.json              # Dependencies and site/folder configuration
```

Congratulations! You should now have successfully created a Yeogurt project and are ready to start building out your site/app.

Now you can run the following gulp tasks:

- `gulp serve` for previewing your site/app on a development server.
- `gulp serve --production` for previewing a production version of your site/app.
- `gulp` for testing and building a development version of your site.
- `gulp --production` same as `gulp` but builds a production version of your site.
- `gulp test` for linting your scripts and running unit tests.

You can learn more about what tasks are available in the [gulp tasks](#gulp-workflow) section.

## Configuration

In the `package.json` file, within the root of the generated project, you have the ability to configure some project settings:

### Site
| Setting | Description |
|---------|-------
| host    | Host URL of the development server (browserSync)
| port    | Port of the development server (browserSync)
| baseUrl | Root directory of your site

### Main Directories
| Setting | Description |
|---------|-------
| source      | Source folder for all development files (default location for [page subgenerator](https://github.com/larsonjj/generator-mas#page))
| destination | Build folder where production version of site is generated
| temporary   | Temporary folder where development server files are generated

### Source Directories
Folders relative to the `source` configured directory

| Setting | Description |
|---------|-------
| [data](#data-files) | Data folder where JSON/YAML files are loaded into templates
| scripts  | Scripts folder where all `.js` files are located (main.js must be in root of this folder)
| styles   | Styles folder where all stylesheet files are located (main stylesheet must be in root of this folder)
| modules  | Modules folder where all reusable code should live (default location for [module subgenerator](https://github.com/larsonjj/generator-yeogurt#module))
| layouts  | Layouts folder where all layout templates should live (default location for [layout subgenerator](https://github.com/larsonjj/generator-yeogurt#layout))
| images   | Images folder where all `.png, jpeg, jpg, svg, gif` files should live


### Entry files
Files that should be searched for and created by build tasks.
File strings and [Globs](https://github.com/isaacs/node-glob) can be used to process desired file(s).
Ex: `main**.js` will process all files that start with `main` and end with `.js`

| Setting | Description |
|---------|-------
| js     | Tells browserify what file(s) to bundle and generate at your desired build target
| css  | Tells your stylesheet preprocessor (Sass, Less, etc) what file(s) to generate at your desired build target

***Default configuration:***

```json
"//": "CUSTOM CONFIGURATION",
"config": {
  "//": "Local Server Settings",
  "host": "127.0.0.1",
  "port": "9010",
  "baseUrl": "./",
  "//": "Gulp Task Directories",
  "//": "NOTE: folders prefixed with an underscore (_) will have it removed when moved to build target (ex: src/_images -> build/images)",
  "//": "NOTE: folders NOT prefixed with underscore (_) will be copied to build target 1 to 1 (ex: src/fonts -> build/fonts)",
  "directories": {
    "source": "src",
    "destination": "build",
    "temporary": "tmp",
    "//": "Directories relative to `source` directory",
    "modules": "_modules",
    "layouts": "_layouts",
    "images": "_images",
    "styles": "_styles",
    "scripts": "_scripts",
    "data": "_data"
  },
  "//": "Entry files",
  "entries": {
    "js": "main**.js",
    "css": "main**.{scss,sass,styl,less}"
  }
}
```

## Gulp Workflow

### `gulp --production`
Runs [`gulp test`](#gulp-test) and builds out an optimized site through compilation of preprocessors (Jade, Sass, etc), minification of CSS and HTML, uglification of Javascript, and optimization of images.

### `gulp serve`
Starts up a development server that watches files and automatically reloads them to the browser when a change is detected.

**Extra Task Target(s)**

|Tasks| Description
|---------|-------
|`gulp serve --production`|  starts up a server that loads a production version of the site
|`gulp serve --open`|  starts up a server and opens it within your default browser

### `gulp test`
Runs ESLint and Karma to lint and run JavaScript tests, respectively.

**Extra Task Target(s)**

|Tasks| Description
|---------|-------
|`gulp test --watch`| runs [`gulp test`](#gulp-test), but also watches test files and auto runs tests when changes are detected.

> NOTE: test:watch is only available if you chose to unit test your javascript

***Adding the `--debug` option to any gulp task displays extra debugging information (ex. data being loaded into your templates)***

## Sub-Generators

* [mas:page](#page)
* [mas:module](#module)
* [mas:layout](#layout)

***Note: Generators need to be run from the root directory of your app.***

## Default Generators

### Page
Creates a new page.

#### Example:

```
$ yo mas:page contact
```

Produces:

```
src/contact/index.jade
```

#### Example #2: Specifying a layout

```
$ yo mas:page contact --layout=one-col
```

Produces:

```
// Page that extends from 'src/_layouts/one-col'
src/contact/index.jade
```

> NOTE: Pages will default to extending from `src/_layouts/base` if `--layout` is not provided

### Module
Creates a new module.

#### Example:

```
$ yo mas:module header
```

Produces:

```
src/_modules/header/header.jade
src/_modules/header/header.scss
src/_modules/header/header.js
```

#### Example #2: Specifying module as atomic

This is a great way to create modules that adhere to [atomic design](http://patternlab.io/about.html)

```
$ yo mas:module link --atomic=atom
```

Produces:

```
src/_modules/atoms/link/link.jade
src/_modules/atoms/link/link.scss
src/_modules/atoms/link/link.js
```

> NOTE: Possible `--atomic` options: atom, molecule, organism

#### Example #3: Specifying module multiple folder levels deep

```
$ yo mas:module some/cool/link --atomic=atom
```

Produces:

```
src/_modules/atoms/some/cool/link/link.jade
src/_modules/atoms/some/cool/link/link.scss
src/_modules/atoms/some/cool/link/link.js
```

### Layout
Creates a new layout.

#### Example:

```
$ yo mas:layout one-col
```

Produces:

```
src/_layouts/one-col.jade
```

#### Example #2: Specifying another layout to extend from

```
$ yo mas:page contact --layout=one-col
```

Produces:

```
// Layout that extends from 'src/_layouts/one-col'
src/contact/index.jade
```

> NOTE: Layouts will default to extending from 'src/_layouts/base'

## Guides

### Adding third-party libraries
Odds are that you will need to add some third party libraries to your project at some point.
To do so, it is strongly recommended that you install them using [NPM](http://npmjs.com/):

```
npm install [package name] --save
```

#### Scripts

Once installed, you can access scripts within your JavaScript files like so:

```js
// Example using jquery

import $ from 'jquery';

console.log('jQuery imported: ', $);
```

#### Stylesheets

You can also access stylesheets by importing like so:

```scss
// SCSS
@import 'node_modules/bootstrap-sass-official/scss/bootstrap';

// CSS
@import 'node_modules/normalize.css/normalize';
```

### Data Files

If you want to load global data into your templates (jade or nunjucks), you can add JSON/YAML files in `src/_data` folder.

For example, add menu.json in `src/_data` folder:

```json
{
  "name": "Home",
  "link": "/",
  "category": "Page",
  "status": "Development"
}
```

And it will be added to the `site.data` object so it can be used like so:

```jade
div
  h1= site.data.menu.name
```

Which outputs to:

```html
<div>
  <h1>Home</h1>
</div>
```

### Creating a dashboard

Using data files, you can build a nice dashboard for your pages and modules.
You can add an example dashboard to your Yomas project by going to this [Dashboard Example](https://github.com/larsonjj/yeogurt-dashboard-example) repository
and following the instructions in the README.md.

> NOTE: Example dashboard only works with Jade currently

### Using SVN
If you plan on using SVN instead of Git, you will want to setup some default ignores to make sure you aren't committing extraneous/generated files to your codebase. To do this, adhere to the following steps:

#### Step 1
Create a new file in the root of your project named `.svnignore` and give it the following contents:

```
node_modules
*.log
build
tmp
.DS_Store
```

#### Step 2
Run the following command:

```
svn propset svn:ignore -R -F .svnignore .
```

This command will go through your newly created `.svnignore` file and set the specified files/folders to be ignored by SVN.


## Common Issues

### ESLint giving errors for third-party scripts
##### Typical error message:
> jQuery is not defined

When adding third-party scripts, you should always import them to your `_scripts/main.js` file (See [Adding third-party libraries](#adding-third-party-libraries)).
However, if you [shimmed](#using-non-commonjs-modules-with-browserify-shim) the library/package to be global (ex: window.jQuery), ESLint will not know that your new library is defined globally. Thus, giving you errors.

##### Solution
To remedy this situation, all you need to do is open up your `.eslintrc` file in the root directory of you project, and add your new library name to the `global:` property array:

```
// .eslintrc
{
...
  globals: {
    jQuery: true // Tells ESLint that jQuery is defined globally
  }
...
}
```

## Contributing

Anyone and everyone is welcome to contribute. Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md).

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)

## Testing Generator
To run unit tests, you have a couple options:

- `npm test`: This will run all unit tests with Mocha and send the report to [coveralls.io](http://coveralls.io) to be processed. (Don't run this for local testing)
- `npm run localtest`: This is the same as `npm test` only it doesn't send anything to coveralls.io. (Use this for local testing)
- `npm run localtest-report`: This is the same as `npm run localtest`, but it also generates an HTML report of the current code coverage.

## Release History

See [Changelog](https://github.com/larsonjj/generator-yeogurt/blob/master/CHANGELOG.md)
