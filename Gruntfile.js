'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    exec: {
      'compile': 'node_modules\\.bin\\gulp compile'
    }
  });

  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', 'exec:compile');
};