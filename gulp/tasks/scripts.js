var gulp = require("gulp");
var jshint = require("gulp-jshint");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");


// Concatenate & Minify JS
gulp.task("scripts", function (cb) {

    //es.concat(

    return gulp.src([
            global.config.js.src + "/app.js",
            global.config.js.src + "/utils/**/*.js"
        ])

        .pipe(jshint())
        .pipe(jshint.reporter("default"))

        .pipe(concat("app.js"))
        .pipe(gulp.dest(global.config.js.dist))
        .pipe(rename({ suffix: ".min" }))
        .pipe(uglify({ preserveComments: "some" }))
        .pipe(gulp.dest(global.config.js.dist));

    //).on("end", cb);
});