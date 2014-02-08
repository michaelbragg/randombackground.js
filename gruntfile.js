module.exports = function(grunt) {

  grunt.initConfig({

    // Config

    pkg: grunt.file.readJSON('package.json'),
    jquery: grunt.file.readJSON('randombackground.jquery.json'),

    meta: {
      banner: '/*\n' +
        ' *  <%= jquery.title || jquery.name %> - v<%= jquery.version %>\n' +
        ' *  <%= jquery.description %>\n' +
        ' *  <%= jquery.homepage %>\n' +
        ' *\n' +
        ' *  Made by <%= jquery.author.name %>\n' +
        ' *  Under <%= jquery.licenses[0].type %> License\n' +
        ' */\n' +
        '\n'
    },

    // Code Testing

    jshint: {
      options: {
        browser: true,
        curly: true,
        eqeqeq: true,
        eqnull: true,
        indent: 2,
        laxbreak: true,
        laxcomma: true,
        quotmark: 'single',
        trailing: true,
        undef: true,
        globals: {
          console: true,
          module: true,
          jQuery: true
        }
      },
      src: ['gruntfile.js', 'src/jquery.randombackground.js']
    },

    // Build

    concat: {
      dist: {
        src: ['src/jquery.randombackground.js'],
        dest: 'dist/jquery.randombackground.js'
      },
      options: {
        banner: '<%= meta.banner %>'
      }
    },

    uglify: {
      my_target: {
        src: ['dist/jquery.randombackground.js'],
        dest: 'dist/jquery.randombackground.min.js'
      },
      options: {
        banner: '<%= meta.banner %>'
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', 'dev');
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('dev', ['test', 'concat', 'uglify']);
  grunt.registerTask('dist', ['dev']);

};