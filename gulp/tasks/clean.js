'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var config = require('../config').clean;

gulp.task('clean', function() {
  return gulp.src(config.paths, {read: false})
    .pipe(clean());
});
