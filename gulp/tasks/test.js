/**
 * Unit testing with Karma + PhamtomJS
 */
var gulp = require('gulp');
var karma = require('gulp-karma');

gulp.task('test', function() {
    return gulp.src([
            global.config.js.src  + '/app.js',
            global.config.js.src  + '/util/**/*.js',
            //global.config.src  + '/scripts/module/**/*.js',
            global.config.test + '/spec/**/*.js'
        ])
        .pipe(karma({
            configFile: global.config.test + '/karma.config.js'
        }))
        .on('error', function (err) {
            throw err;
        });
});