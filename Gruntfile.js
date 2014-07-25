'use strict';

module.exports = function(grunt) {


  var cfg = {
    host : '127.0.0.1',
    port : 9000,
    livereload : 35729
  }
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      dev : "dist"
      
    },
    copy: {
      dev : {
        files: [
          {expand : true, cwd : 'src', src : ['**', '!lib/**'], dest : 'dist'},
          {expand : true, cwd : 'src/lib/angular', src : 'angular.js', dest : 'dist/lib'},
          {expand : true, cwd : 'src/lib/angular-route', src : 'angular-route.js', dest : 'dist/lib'},
          {expand : true, cwd : 'src/lib', src : 'sea.js', dest : 'dist/lib'}

        ]
      }
      
    },
    connect : {
      options : {

      },
      dev : {
        options: {
          port: cfg.port,
          base: 'dist',
          open : {
            target: cfg.host + ':' + cfg.port,
            appName: 'chrome',
            callback: function() {}
          }
        }
      }
    },
    watch: {
      dev: {
        files: 'src/**/*',
        tasks: ['copy'],
        options : {
          livereload : true
        }
      }
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Default task.
  grunt.registerTask('dev', ['clean', 'copy', 'connect', 'watch']);

};
