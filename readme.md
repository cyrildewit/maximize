# Maximize v0.0.1

<a href="https://david-dm.org/cyrildewit/maximize" title="Dependency status">
    <img src="https://david-dm.org/cyrildewit/maximize.svg" />
</a>
&nbsp;
<a href="https://david-dm.org/cyrildewit/maximize#info=devDependencies" title="devDependency status">
    <img src="https://david-dm.org/cyrildewit/maximize/dev-status.svg" />
</a>

> Maximize is Powerful, Flexible and Lightweight starter kit for Web Develoment using Gulp as Build System.

## Overview
[Maximize](https://github.com/cyrildewit/maximize) is a powerful, flexible and lightweight starter kit for web development. It's designed to be flexible and useful for various projects. The environment of Maximize is really simple to understand.

### Features
Here are some of the main features of Maximize:

* Gulp: Built-in HTTP Server with PHP and Browsersync support for live browser reloading.
* Gulp: Lints, minify and concatenates your JavaScipt files.
* Gulp: Compiles and minify your Sass files (.sass and .scss).
* Gulp: PostCSS for transforming CSS with JavaScript (default: rucksack-css and autoprefixer).
* Gulp: Sourcemaps for JavaScript &amp; CSS.
* Gulp: Minify your images (PNG, JPEG, GIF and SVG).
* Gulp: Displacer for your Bower components (from the `bower_components` folder to the public folder).
* Sass: Built-in Sass OOCSS setup.
* PHP: Basic built-in PHP application setup for faster front-end development.

## Documentation
In this documention you will find some helpful information about the use of this starter kit. If you have any questions about Maximize or if you find some grammer mistakes, then feel free to contact me at: info(at)cyrildewit.nl.

**In this documentation:**

1. [Getting Started](#getting-started)
2. [Gulpfile](#gulpfile)
3. [Sass OOCSS Setup](#sass-oocss-setup)
4. [JavaScript Application Setup](#javascript-application-setup)
4. [PHP Application Setup](#php-application-setup)

## Getting Started

### Dependencies
Make sure these are installed first.

* [Node.js](http://nodejs.org)
* [Gulp](http://gulpjs.com) `(sudo) npm install -g gulp`
* [Bower](https://bower.io) `(sudo) npm install -g bower`

### Quick Start
1. Download the latest version of Maximize (using git clone, the download link or open in desktop).
    * `git clone https://github.com/cyrildewit/maximize.git`
    * Click on the green button with 'Clone or download' at the top of GitHub.com. Then click on 'Download ZIP'.
    * Click on the gree button with 'Clone or download' at the top of GitHub.com. Then click on 'Open in Desktop'.
2. In bash/terminal/command line, `cd` into your project directory.
3. Run `npm install` to install the required packages.
4. When it's done installing, run one of the task runners to get going:
	* `gulp` automatically compiles files and applies changes using BrowserSync.
    * See the full list of task in the next chapter!

### Gulp Tasks
Maximize offers you some useful tasks to simplify your development of web development projects. We highly recommend you to read the `Gulpfile` chapter carefully.

## Gulpfile
Gulp is a build system, meaning that you can use it to automate common tasks in the development of a website. It's built on Node.js, so you can use JavaScript (or something like CoffeeScript, if you so choose) to define tasks.

### List of possible tasks

* `gulp`
* `gulp build-js`
* `gulp watch:build-js`
* `gulp jshint`
* `gulp watch:jshint`
* `gulp build-css`
* `gulp watch:build-css`
* `gulp build-img`
* `gulp watch:build-img`
* `gulp displace-bc`
* `gulp clean-assets`
* `gulp watch`
* `gulp build`
* `gulp watch:build`

<br>

#### Command: `Gulp`
This task build the CSS, JS and image files, then starts a HTTP server with PHP and Browsersync support and then it will start a watcher.

This task executes the `build`, `browserSync` and `watch` task.

| subject           | summary           |
| ----------------- | ----------------- |
| Used packages     | <ul><li>`gulp`</li></ul> |
| Used customizable properties | none   |

<br>

#### Command: `gulp build-js` &amp; `gulp watch:build-js`
This task concatenates all the JavaScript files, gives it a header based upon the `package.json` file. If the production environment variable is used, then it will also minify the output and gives it a prefix.

| subject           | summary           |
| ----------------- | ----------------- |
| Used packages     | <ul><li>`gulp`</li><li>`gulp-sourcemaps`</li><li>`gulp-concat`</li><li>`gulp-util`</li><li>`gulp-uglify`</li><li>`gulp-rename`</li><li>`gulp-header`</li><li>`browser-sync`</li></ul> |
| Used customizable properties | See the next table! |

| property          | type             |
| ------------------------------------ | -------- |
| configuration.scripts.toConcatenate  | `Array`  |
| configuration.scripts.outputName     | `String` |
| configuration.scripts.uglifySettings | `Object` |
| configuration.scripts.destination    | `String` |
| configuration.scripts.toScan         | `String` |

<br>

#### Command: `gulp jshint` &amp; `gulp watch:jshint`
This task lints all the JavaScript files and show the result inside the command line.

By using the prefixed task `watch:jshint`, it will automatically be executed on change.

| subject           | summary           |
| ----------------- | ----------------- |
| Used packages | <ul><li>`gulp`</li><li>`jshint`</li><li>`gulp-jshint`</li><li>`gulp-stylish`</li></ul> |
| Used files | <ul><li>`.jshintrc`</li></ul> |
| Used customizable properties | See the next table! |

| property                     | type     |
| ---------------------------- | -------- |
| configuration.scripts.toScan | `String` |

<br>

#### Command: `gulp build-css` &amp; `gulp watch:build-css`
This task compiles Sass to CSS, change the CSS with PostCSS and gives it a header based upon the `package.json` file. If the production environment variable is used, then it will also minify the output and gives it a prefix.

By using the prefixed task `watch:build-css`, it will automatically be executed on change.

| subject           | summary           |
| ----------------- | ----------------- |
| Used packages | <ul><li>`gulp`</li><li>`gulp-sourcemaps`</li><li>`gulp-sass`</li><li>`gulp-postcss`</li><li>`gulp-header`</li><li>`gulp-cssnano`</li><li>`gulp-rename`</li><li>`browser-sync`</li></ul> |
| Used files | <ul><li>`.jshintrc`</li></ul> |
| Used customizable properties | See the next table! |

| property                                | type     |
| --------------------------------------- | -------- |
| configuration.styles.toCompile          | `String` |
| configuration.styles.sass               | `Object` |
| configuration.styles.postCSS.processors | `Array`  |
| configuration.styles.destination        | `String` |
| configuration.styles.toScan             | `String` |

<br>

#### Command: `gulp build-img` &amp; `gulp watch:build-img`
This task will minify images. It supports PNG, JPEG, GIF and SVG images.

By using the prefixed task `watch:build-img`, it will automatically be executed on change.

| subject           | summary           |
| ----------------- | ----------------- |
| Used packages     | <ul><li>`gulp`</li><li>`gulp-imagemin`</li></ul> |
| Used customizable properties | See the next table! |

| property                         | type     |
| -------------------------------- | -------- |
| configuration.images.toScan      | `String` |
| configuration.images.destination | `String` |

<br>

#### Command: `gulp bc-displace`
This task displace the installed bower components. Fill in the exact files that you want to displace. The logic inside the task will found out what the destination is.

It currently supports the JavaScript extension `.js` and the Cascading Style Sheets extension `.css`. If you need more, please create and issue and we will add it in the next update.

| subject           | summary           |
| ----------------- | ----------------- |
| Used packages     | <ul><li>`gulp`</li><li>`path`</li></ul> |
| Used customizable properties | See the next table! |

| property                       | type    |
| ------------------------------ | ------- |
| configuration.bower.components | `Array` |

<br>

#### Command: `gulp clean-assets`
This task deletes every file and folder inside the assets directory.

| subject           | summary           |
| ----------------- | ----------------- |
| Used packages     | <ul><li>`gulp`</li><li>`del`</li></ul> |
| Used customizable properties | none |

<br>

#### Command: `gulp watch`
This task will watch your: JavaScript files and build/lint them, Sass files and build them, images and build them and reload browserSync when you edit HTML &amp; PHP files inside the `public/` directory.

| subject           | summary           |
| ----------------- | ----------------- |
| Used packages      | <ul><li>`gulp`</li></ul> |
| Used customizable properties | none |

<br>

#### Command: `gulp build`
This task executes the `build-js`, `build-css`, `build-img` and `displace-bc` task.

| subject           | summary           |
| ----------------- | ----------------- |
| Used packages     | <ul><li>`gulp`</li></ul> |
| Used Customizable Properties | none |

<br>

#### Command: `gulp browserSync`
This task starts a HTTP server with PHP and BrwoserSync support. It's build for the `gulp` / `gulp default` task.

| subject           | summary           |
| ----------------- | ----------------- |
| Used packages | <ul><li>`gulp`</li><li>`gulp`</li><li>`gulp-connect-php`</li><li>`browser-sync`</li></ul> |
| Used customizable properties | See the next table! |

| property                  | type     |
| ------------------------- | -------- |
| configuration.server.base | `String` |
| configuration.server.port | `Number` |

<br>

## Sass OOCSS Setup
Write an explaination of the Sass OOCSS Setup Application Setup.

This feature is currently in development.

## JavaScript Application Setup
Write an explaination of the JavaScript Application Setup.

This feature is currently in development.

## PHP Application Setup
Write an explaination of the PHP Application Setup.

This feature is currently in development.

## To do
See the project GitHub [issue tracker](https://github.com/cyrildewit/Maximize/issues).

## Milestones
See the project GitHub [milestone tracker](https://github.com/cyrildewit/Maximize/milestones).

## Changelog
See the `changelog file` for more details.

* v1.0.0 | Initial version

## License
The code is available under the MIT License - Created by [Cyril de Wit](https://github.com/cyrildewit "Github profile page of Cyril de Wit")
