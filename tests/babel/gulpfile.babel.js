'use strict';

import plugins  from 'gulp-load-plugins';
// import yargs    from 'yargs';
import gulp     from 'gulp';


// Load all Gulp plugins into one variable
const $ = plugins();

// Check for --production flag
const PRODUCTION = !!(yargs.argv.production);

// Load settings from settings.yml
//

//
gulp.task('default', function() {
    console.log('dd');
});
