'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var config = require('../config').styles;

gulp.task('sass', function() {
  return gulp.src(config.path)
    .pipe(sass())
    .pipe(rename(config.fileName))
    .pipe(gulp.dest(config.dest));
});
