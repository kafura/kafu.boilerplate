var gulp = require('gulp');
var requireDir = require('require-dir');
var dir = requireDir('./gulp/tasks');
var config = require('./gulp/config');

//gulp.task('default', [
//    'scripts',
//    'styles',
//    'static',
//    'imagemin',
//    'svgmin',
//    'svg2png'
//]);

// Clean + run default
//gulp.task('build', ['clean'], function() {
//    gulp.start('default');
//});

//// Install tools and plugins.
//var es = require("event-stream"),
//    del = require("del"),
//    path = require("path"),
//    plugins = require("gulp-load-plugins")();
//



//gulp.task("clean", ["less", "scripts"], function (cb) {
//    //del("./dist/responsive.zip", cb);
//});

gulp.task("watch", function () {
    // Watch for changes to our JS
    gulp.watch(global.config.js.src + "**/*.js", ["scripts"]);

    // Watch for changes to our Sass
    gulp.watch(global.config.less.src + "**/*.less", ["less"]);

});

// Default Task
gulp.task("default", ["less", "scripts"]);
