'use strict';

/* paths */

var _dest = './dist/';
var _src = './src/';
var _tests = './tests/';
var _js = 'js/';
var _css = 'css/';

/* scripts */

module.exports = {
  scripts: {
    app: {
      path: _src + _js + 'app/index.js',
      dest: _src,
      fileName: 'app.build.js'
    },
    background: {
      path: _src + _js + 'background/index.js',
      dest: _src,
      fileName: 'background.build.js'
    },
    tests: {
      path: _tests + 'index.js',
      dest: _tests,
      fileName: 'tests.build.js'
    }
  },
  styles: {
    path: _src + _css + 'index.scss',
    dest: _src,
    fileName: 'app.build.css'
  },
  html: {
    path: _src + '*.html',
    dest: _dest
  },
  copy: {
    base: _src,
    paths: [
      _src + 'fonts/**/*',
      _src + 'img/**/*',
      _src + 'manifest.json'
    ],
    dest: _dest
  },
  watch: {
    sass: _src + _css + '**/*.scss',
    js: _src + _js + '**/*.js',
    tests: _tests + '**/*-tests.js'
  },
  clean: {
    paths: [_dest]
  }
};
