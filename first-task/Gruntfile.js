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
    }
  });
  // load task plugin
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  // create task alias
  grunt.registerTask('default', ['jshint']);
};
