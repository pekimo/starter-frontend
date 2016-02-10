'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var config = require('../config').scripts;

function js(config) {
  return browserify({entries: [config.path]})
    .transform('babelify', {presets: ['es2015']})
    .bundle()
    .pipe(source(config.fileName))
    .pipe(gulp.dest(config.dest));
}

gulp.task('js:background', function () {
  return js(config.background);
});

gulp.task('js:app', function () {
  return js(config.app);
});

gulp.task('js:tests', function() {
  return js(config.tests);
});
