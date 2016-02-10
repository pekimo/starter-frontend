'use strict';

var gulp = require('gulp');
var useref = require('gulp-useref');
var config = require('../config').html;

gulp.task('html', function () {
  var assets = useref.assets();

  return gulp.src(config.path)
    .pipe(assets)
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest(config.dest));
});
