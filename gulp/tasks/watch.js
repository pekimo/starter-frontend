'use strict';

var gulp = require('gulp');
var config = require('../config').watch;

gulp.task('watch:sass', function() {
  return gulp.watch(config.sass, ['sass']);
});

gulp.task('watch:js', function() {
  return gulp.watch(config.js, ['js:app', 'js:background']);
});

gulp.task('watch:tests', function() {
  return gulp.watch(config.tests, ['js:tests']);
});

gulp.task('watch', ['watch:sass', 'watch:js', 'watch:tests']);
