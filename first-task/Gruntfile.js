module.exports = function(grunt) {
  // config task
  grunt.initConfig({
    jshint: ['Gruntfile.js'],
    less: {
      compile: {
        files: {
          // destination : source
          'build/css/compiled.css': 'public/css/**/*.less'
        }
      }
    },
    concat: {
      js: {
        files: {
          'build/js/bundle.js': 'public/js/**/*.js'
        }
      }
    },
    uglify: {
      bundle: {
        files: {
          'build/js/bundle.min.js': 'public/js/bundle.js'
        }
      }
    },
    sprite: {
      icons: {
        src: 'public/img/icons/*.png',
        dest: 'build/img/icons.png',
        destCss: 'build/css/icons.css'
      }
    }
  });

  // load task plugin
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-spritesmith');

  // create task alias
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('assets', 'Concatenate and minify static JavaScript assets',
    ['concat:js', 'uglify:bundle']);
};
