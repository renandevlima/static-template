const gulp = require('gulp');
const { watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const rename = require("gulp-rename");
const minify = require('gulp-minify');

const paths = {
  css: {
    src: [
      "assets/src/scss/*.scss",
      "assets/src/scss/**/*.scss"
    ],
    dist: "assets/dist/css"
  },
  js: {
    src: [
      "assets/src/js/*.js"
    ],
    dist: "assets/dist/js"
  }
}

gulp.task('sass', gulp.series(function () {
  return gulp.src(paths.css.src)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(rename(function (path) {
      path.basename += ".min";
      path.extname = ".css";
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.css.dist));
}));

gulp.task('scripts', gulp.series(function () {
  return gulp.src(paths.js.src)
    .pipe(sourcemaps.init())
    .pipe(minify())
    .pipe(rename(function (path) {
      path.basename += ".min";
      path.extname = ".js";
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.js.dist))
}));

gulp.task('watch', gulp.series( function() {
  gulp.watch(paths.css.src, gulp.parallel( ['sass'] ));
  gulp.watch(paths.js.src, gulp.parallel( ['scripts'] ));
}));

gulp.task('default', gulp.series( ['sass', 'scripts'] ));