'use strict'; 
const gulp = require('gulp'); 
const sass = require('gulp-sass')(require('sass')); 

function buildStyles() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({ sourceMap: false }).on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
} 

function watch() {
  gulp.watch('./sass/**/*.scss', buildStyles);
}

exports.buildStyles = buildStyles; 
exports.watch = watch;
