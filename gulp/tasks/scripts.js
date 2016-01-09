var gulp = require("gulp");


// Concatenate & Minify JS
gulp.task("scripts", function (cb) {

    //es.concat(

        return gulp.src([
                global.config.js.src + "/app.js",
                global.config.js.src + "/utils/**/*.js"
            ])

            .pipe(plugins.jshint())
            .pipe(plugins.jshint.reporter("default"))

            .pipe(plugins.concat("app.js"))
            .pipe(gulp.dest(global.config.js.dist))
            .pipe(plugins.rename({ suffix: ".min" }))
            .pipe(plugins.uglify({ preserveComments: "some" }))
            .pipe(gulp.dest(global.config.js.dist));

    //).on("end", cb);
});