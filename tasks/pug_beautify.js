'use strict';

var pugBeautify = require('pug-beautify');
var chalk = require('chalk');

module.exports = function(grunt) {

  function beautify(src, opts) {
    var out = pugBeautify(src, opts);
    if (opts.omit_empty_lines) { out = out.replace(/^\s*[\r\n]/gm, ''); }
    return out;
  }

  grunt.registerMultiTask('pug_beautify', 'Beautify Pug files (.jade)', function() {

    var totalFiles = 0;

    var options = this.options({
      fill_tab: false,
      omit_div: true,
      tab_size: 2,
      omit_empty_lines: false
    });

    this.files.forEach(function(file) {
      var filePath = file.src[0];
      if (!filePath) { return; }

      try {
        var input = grunt.file.read(filePath);
        var output = beautify(input, options);
        grunt.file.write(file.dest, output);
        grunt.verbose.writeln('Beautified ' + chalk.cyan(file.dest));
      } catch (err) {
        grunt.warn(filePath + '\n' + err);
        return;
      }

      totalFiles++;

    });

    grunt.log.writeln('Beautified ' + chalk.cyan(totalFiles) + ' files');

    if (this.files.length !== totalFiles) {
      grunt.warn(chalk.red(this.files.length - totalFiles) + ' failed');
    }

  });

};
