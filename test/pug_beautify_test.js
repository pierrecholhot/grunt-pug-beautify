'use strict';

var grunt = require('grunt');

exports.pug_beautify = {
  indent: function(test) {
    test.expect(1);
    var actual = grunt.file.read('tmp/indent.jade');
    var expected = grunt.file.read('test/expected/indent.jade');
    test.equal(actual, expected, 'should un-indenting extra spaces');
    test.done();
  },
  empty_lines: function(test) {
    test.expect(1);
    var actual = grunt.file.read('tmp/new_lines.jade');
    var expected = grunt.file.read('test/expected/new_lines.jade');
    test.equal(actual, expected, 'should remove empty new lines');
    test.done();
  }
};
