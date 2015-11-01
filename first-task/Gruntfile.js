module.exports = function(grunt) {
  // config task
  grunt.initConfig({
    jshint: {
      client: [
        'public/js/**/*.js',
        '!public/js/vendor',
      ],
    },
    less: {
      compile: {
        files: {
          // destination : source
          'build/css/compiled.css': 'public/css/**/*.less',
        },
      },
    },
    concat: {
      js: {
        files: {
          'build/js/bundle.js': 'public/js/**/*.js',
        },
      },
    },
    uglify: {
      bundle: {
        files: {
          'build/js/bundle.min.js': 'public/js/bundle.js',
        },
      },
    },
    sprite: {
      icons: {
        src: 'public/img/icons/*.png',
        dest: 'build/img/icons.png',
        destCss: 'build/css/icons.css',
      },
    },
    clean: {
      js: 'build/js',
      css: 'build/css',
      less: 'public/**/*.css',
    },
    timestamp: {
      options: {
        file: '/test/timestamp',
      },
    },
  });

  // load task plugin
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // create task alias
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('assets', 'Concatenate and minify static JavaScript assets',
    ['concat:js', 'uglify:bundle']);
  grunt.registerTask('timestamp', function() {
    var options = this.options({
      file: '.timestamp',
    });
    var timestamp = +new Date();
    var contents = timestamp.toString();
    grunt.file.write(options.file, contents);
  });
};
