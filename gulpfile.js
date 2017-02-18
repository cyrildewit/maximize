// =========================================================
//
// Gulpfile
//
// =========================================================
//
// https://github.com/cyrildewit/Maximize#readme
// @author Cyril de Wit
// @version 0.0.1
// Copyright 2016. MIT licensed.
//
// =========================================================
//
// Available tasks:
//  `gulp`
//  `gulp build-js`
//  `gulp watch:build-js`
//  `gulp jshint`
//  `gulp watch:jshint`
//  `gulp build-css`
//  `gulp watch:build-css`
//  `gulp build-img`
//  `gulp watch:build-img`
//  `gulp displace-bc`
//  `gulp clean-assets`
//  `gulp watch`
//  `gulp build`
//  `gulp watch:build`
//
// =========================================================

// ***********************************************
// Plugins
// ***********************************************
//
// gulp               : The streaming build system
// gulp-connect-php   : Starts a php server
// browser-sync       : Live CSS Reload & Browser Syncing
// gulp-sourcemaps    : Source map support
// gulp-util          : Utility functions
// gulp-header        : Gulp extension to add header to file(s) in the pipeline
// gulp-rename        : Rename files
// path               : Node.JS path module
// gulp-sass          : Gulp plugin for sass
// gulp-postcss       : PostCSS gulp plugin
// gulp-cssnano       : Minify CSS with cssnano
// autoprefixer       : Parse CSS and add vendor prefixes to CSS rules using values from the Can I Use website
// rucksack-css       : A little bag of CSS superpowers
// gulp-concat        : Concatenates files
// gulp-uglify        : Minify JavaScript with UglifyJS
// gulp-jshint        : JSHint plugin for gulp
// jshint-stylish     : Stylish reporter for JSHint
// gulp-imagemin      : Minify PNG, JPEG, GIF and SVG images
// del                : Delete files and folders
//
// ***********************************************

// Gulp
var gulp = require('gulp');


// Other plugins
var php = require('gulp-connect-php');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var header  = require('gulp-header');
var rename = require('gulp-rename');
var path = require('path');
var del = require('del');


// Styling plugins
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('autoprefixer');
var rucksack = require('rucksack-css');


// JavaScript plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');


// Image plugins
var imagemin = require('gulp-imagemin');


// Package file
var pkg = require('./package.json');


// ***********************************************
// Project Configruation
// ***********************************************

var configuration = {
    environment: {
        source: './src/**/*',
        destination: './public/',
        destinationToScan: './public/**/*.{html,php}',
        suffixes: {
            min: '.min'
        }
    },
    server: {
        base: './public/',
        port: 4000
    },
    sourcemaps: {
        outputDirectory: '../maps/',
        initOptions: {
            loadMaps: true,
            debug: true
        }
    },
    headers: {
        packageJson: {
            pkg: pkg
        },
        templates: {
            one: [
                '/*!\n' +
                ' * <%= pkg.name %>\n' +
                ' * <%= pkg.title %>\n' +
                ' * <%= pkg.homepage %>\n' +
                ' * @author <%= pkg.author %>\n' +
                ' * @version <%= pkg.version %>\n' +
                ' * Copyright ' + new Date().getFullYear() + '. <%= pkg.license %> licensed.\n' +
                ' */' +
                '\n' +
                '\n'
            ].join('')
        }
    },
    scripts: {
        toScan: './src/js/**/*.js',
        toConcatenate: [
            './src/js/modules/moduleOne.js',
            './src/js/modules/jobGenerator.js',
            './src/js/main.js'
        ],
        outputName: 'scripts.js',
        minSuffix: '.min',
        destination: './public/assets/js/',
        uglifySettings: {
            output: {
                quote_style: 1
            }
        }
    },
    styles: {
        toScan: './src/sass/**/*.{sass,scss}',
        toCompile: './src/sass/main.scss',
        destination: './public/assets/css/',
        sass: {
            outputStyle: 'expanded' // nested, compact, expanded, compressed
        },
        postCSS: {
            processors: [
                rucksack,
                autoprefixer({
                    browsers: ['> 5%']
                })
            ]
        }
    },
    images: {
        toScan: './src/img/**/*.{png,jpeg,jpg,svg}',
        destination: './public/assets/img/'
    },
    bower: {
        base: './bower_components/',
        components: [
            'bootstrap/dist/css/bootstrap.min.css',
            'jquery/dist/jquery.min.js'
        ]
    }
};


// ***********************************************
// HTTP Server And Browser-Sync Tasks
// ***********************************************

var config = {
    server: {
        status: 'vhost', // if static => static server configruation, else (or just vhost) => virtual host server configruation
        static: {
            base: './public/',
            port: 4000
        },
        vhost: {
            proxy: 'maximize.local.nowww'
        }
    }
};

gulp.task('browser-sync', function() {
    if (config.server.status === 'static') {
        browserSync.init({
            /**
             * Proxy
             *
             * target: Localhost address with port
             */
            proxy: {
                target: '127.0.0.1:' + config.server.static.port
            },
            port: config.server.port,
            open: true,
            notify: false
        });
    } else {
        browserSync.init({
            /**
             * Proxy
             *
             * target: Virtual host address
             */
            proxy: {
                target: config.server.vhost.proxy
            },
            open: true,
            notify: false
        });
    }
});

// gulp.task('php', function() {
//     php.server({
//         base: configuration.server.base,
//         port: configuration.server.port,
//         keepalive: true
//     });
// });
//
// gulp.task('browserSync', ['php'], function() {
//     browserSync({
//         proxy: '127.0.0.1:' + configuration.server.port,
//         port: configuration.server.port,
//         open: true,
//         notify: false
//     });
// });

gulp.task('reloadBrowserSync', function() {
    browserSync.reload();
});


// ***********************************************
// JavaScript Tasks
// ***********************************************

gulp.task('build-js', function() {
    gulp.src(configuration.scripts.toConcatenate)
        .pipe(sourcemaps.init(configuration.sourcemaps.initOptions))
        .pipe(concat(configuration.scripts.outputName))
        .pipe(gutil.env.type === 'production' ? uglify(configuration.scripts.uglifySettings) : gutil.noop())
        .pipe(gutil.env.type === 'production' ? rename({ suffix: configuration.environment.suffixes.min }) : gutil.noop())
        .pipe(header(configuration.headers.templates.one, configuration.headers.packageJson))
        .pipe(sourcemaps.write(configuration.sourcemaps.outputDirectory))
        .pipe(gulp.dest(configuration.scripts.destination))
        .pipe(browserSync.stream());
});

gulp.task('watch:build-js', function() {
    gulp.watch(configuration.scripts.toScan, ['build-js']);
});

gulp.task('jshint', function() {
    gulp.src(configuration.scripts.toScan)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter('fail'));
});

gulp.task('watch:jshint', function() {
    gulp.watch(configuration.scripts.toScan, ['jshint']);
});


// ***********************************************
// Cascading Style Sheets Tasks
// ***********************************************

gulp.task('build-css', function() {
    gulp.src(configuration.styles.toCompile)
        .pipe(sourcemaps.init(configuration.sourcemaps.initOptions))
        .pipe(sass(configuration.styles.sass).on('error', sass.logError))
        .pipe(postcss(configuration.styles.postCSS.processors))
        .pipe(gutil.env.type === 'production' ? cssnano() : gutil.noop())
        .pipe(gutil.env.type === 'production' ? rename({ suffix: configuration.environment.suffix.min }) : gutil.noop())
        .pipe(header(configuration.headers.templates.one, configuration.headers.packageJson))
        .pipe(sourcemaps.write(configuration.sourcemaps.outputDirectory))
        .pipe(gulp.dest(configuration.styles.destination))
        .pipe(browserSync.stream());
});

gulp.task('watch:build-css', function() {
    gulp.watch(configuration.styles.toScan, ['build-css']);
});


// ***********************************************
// Image Tasks
// ***********************************************

gulp.task('build-img', function() {
    gulp.src(configuration.images.toScan)
        .pipe(imagemin())
        .pipe(gulp.dest(configuration.images.destination));
});

gulp.task('watch:build-img', function() {
    gulp.watch(configuration.images.toScan, ['build-img']);
});


// ***********************************************
// Bower Components Tasks
// ***********************************************

gulp.task('displace-bc', function() {
    configuration.bower.components.forEach(function(file, index) {
        if (path.extname(file) === '.js') {
            gulp.src(configuration.bower.base + file)
                .pipe(gulp.dest(configuration.environment.destination + 'assets/js/vendor/'));
        }
        if (path.extname(file) === '.css') {
            gulp.src(configuration.bower.base + file)
                .pipe(gulp.dest(configuration.environment.destination + 'assets/css/vendor/'));
        }
        browserSync.reload();
    });
});


// ***********************************************
// Watch Task
// ***********************************************

gulp.task('clean-assets', function() {
    return del([
        configuration.environment.destination + 'assets/**/*'
    ]);
});


// ***********************************************
// Watch Task
// ***********************************************

gulp.task('watch', function() {
    gulp.watch(configuration.scripts.toScan, ['build-js', 'jshint']);
    gulp.watch(configuration.styles.toScan, ['build-css']);
    gulp.watch(configuration.images.toScan, ['build-img']);
    gulp.watch(configuration.environment.destinationToScan, ['reloadBrowserSync']);
});


// ***********************************************
// Build Tasks
// ***********************************************

gulp.task('build', [
    'build-js',
    'build-css',
    'build-img',
    'displace-bc'
]);

gulp.task('watch:build', function() {
    gulp.watch(configuration.scripts.toScan, ['build-js']);
    gulp.watch(configuration.styles.toScan, ['build-css']);
    gulp.watch(configuration.images.toScan, ['build-img']);
});


// ***********************************************
// Default Task
// ***********************************************

gulp.task('default', [
    'build',
    'browser-sync',
    'watch'
]);
