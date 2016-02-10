'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', ['js:app', 'js:background', 'sass']);

gulp.task('compile', function() {
  return runSequence('clean', ['build', 'copy'], 'html');
});
