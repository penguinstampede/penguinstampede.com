var path = require('path')

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt) // npm install --save-dev load-grunt-tasks
  grunt.loadNpmTasks('grunt-jekyll')

  grunt.initConfig({
    html_pdf: {
      dist: {
        options: {
          base: 'file://' + path.resolve('_site/index.html'),
          viewportSize: {
            width: (8.5 - (2 * 0.5)) * 300,
            height: (11 - (2 * 0.5)) * 300
          },
          width: '8.5in',
          height: '11in',
          border: '.25in'
        },
        files: {
          '_site/pdf/resume.pdf': ['_site/index.html'],
        },
      }
    },
    jekyll: {
      build : {}
    }
  })

  grunt.registerTask('default', ['jekyll', 'html_pdf'])
}
