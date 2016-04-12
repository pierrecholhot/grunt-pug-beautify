# grunt-pug-beautify [![Build Status](https://travis-ci.org/pierrecholhot/grunt-pug-beautify.svg?branch=master)](https://travis-ci.org/pierrecholhot/grunt-pug-beautify)

A grunt wrapper for <strike>Jade-Beautify</strike> (now Pug-Beautify).

*Issues regarding rules should be reported on the PugBeautify [issue tracker](https://github.com/vingorius/pug-beautify/issues) as it's the actual beautifier.*

## install

```
$ npm install --save-dev grunt-pug-beautify
```

## usage

```
module.exports = function(grunt) {
  grunt.initConfig({
    pugbeautify: {
      all: {
        expand: true,
        cwd: 'fixtures/',
        src: '*.jade',
        dest: 'dist/',
        options: { omit_empty_lines: true }
      }
    }
  });
  grunt.loadTasks('grunt-pug-beautify');
  grunt.registerTask('default', ['pugbeautify']);
};
```

## API

### options

#### [grunt-pug-beautify](https://github.com/PierreCholhot/grunt-pug-beautify)

In the gruntfile you can specify the following options:

##### omit_empty_lines

- Type: `boolean`
- Default: `'false'`

Omits all empty new lines (except at EOF)

#### [pug-beautify](https://github.com/vingorius/pug-beautify)

You can also specify the following options (parsed by pug-beautify):

##### fill_tab

- Type: `boolean`
- Default: `'true'`

Indent using tabs or spaces

##### omit_div

- Type: `boolean`
- Default: `'false'`

Whether to omit `div` tag [`div.hello(attr=..)` becomes `.hello(attr=..)`]

##### tab_size

- Type: `number`
- Default: `'false'`

When `fill_tab` is set to `false`, indents using spaces, default is 2.

## test

```
npm test
```

## develop

```
npm install
```

## contribute

All code in any code-base should look like a single person typed it, no matter how many people contributed.

## license

MIT © [Pierre Cholhot](http://pierre.cx/)
