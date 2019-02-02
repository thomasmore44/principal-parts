 module.exports = function( grunt ) {

  var defaults = {
    js: ['js/data.js',
        'js/helpers.js',
        'js/model.js',
        'js/view.js',
        'js/controller.js',
        'js/app.js']
  };

  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      concat: {
        options: {
          separator: ';'
        },
        dist: {
          src: [defaults.js],
          dest: 'dist/js/bundle.js'
        }
      },
      uglify: {
        dist: {
          files: {
            'dist/js/bundle.min.js' : '<%= concat.dist.dest %>'
          }
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);

};
