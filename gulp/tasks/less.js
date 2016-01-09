var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');

var onError = function(err) {
    console.log(err.message);
    this.emit('end');
};

// Concatenate & Minify LESS
gulp.task("less", function (cb) {
    gulp.src(global.config.less.src + "/style.less")
        .pipe(less().on('error', onError))
        .pipe(autoprefixer({
            browsers: ["> 1%", "last 2 versions", "ie 9"],
            cascade: true,
            remove: false
        }))
        .pipe(gulp.dest(global.config.less.dist))
        .pipe(rename({ suffix: ".min" }))
        .pipe(minifyCss())
        .pipe(gulp.dest(global.config.less.dist))
        .on("end", cb);
});