var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


/* Reload task */
gulp.task('bs-reload', function () {
    browserSync.reload();
});

/* Prepare Browser-sync for localhost */
gulp.task('browser-sync', function() {
    browserSync.init(['index.html'], {
        files: ['.html'],

        /*
        I like to use a vhost, WAMP guide: https://www.kristengrote.com/blog/articles/how-to-set-up-virtual-hosts-using-wamp, XAMP guide: http://sawmac.com/xampp/virtualhosts/
        */
        proxy: 'maximize.local'
        /* For a static server you would use this: */
        /*
        server: {
            baseDir: './'
        }
        */
    });
});


/* Watch scss, js and html files, doing different things with each. */
gulp.task('default', ['browser-sync'], function () {
    gulp.watch(['index.html'], ['bs-reload']);
});
