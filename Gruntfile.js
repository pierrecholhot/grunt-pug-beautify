/*
 * grunt-pug-beautify
 * https://github.com/pierrecholhot/grunt-pug-beautify
 *
 * Copyright (c) 2016 Pierre Cholhot
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    clean: { tests: ['tmp'] },
    nodeunit: { tests: ['test/*_test.js'] },
    pug_beautify: {
      all: {
        expand: true,
        cwd: 'test/fixtures/',
        src: '*.jade',
        dest: 'tmp/',
        options: { omit_empty_lines: true }
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.registerTask('test', ['clean', 'pug_beautify', 'nodeunit']);
  grunt.registerTask('default', ['test']);
};
