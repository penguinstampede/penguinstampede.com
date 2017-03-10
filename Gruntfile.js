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
      options: {
        bundleExec: true
      },
      build: {}
    },
    connect: {
      server: {
        options: {
          livereload: true,
          port: 9000,
          base: '_site'
        }
      }
    },
    watch: {
      html: {
        files: ['**/*.html', '**/*.md', '**/*.scss', '!_site/**/*.html'],
        tasks: ['jekyll', 'html_pdf']
      }
    },
    scp: {
      staging: {
        options: {
          host: 'jekyll.penguinstampede.com',
          privateKey: 'config/deploy_id_rsa'
        },
        site: {
          files: [{
            cwd: '_site',
            src: '**/*',
            dest: '/home/<%= username %>/jekyll.penguinstampede.com/public_html'
          }]
        }
      }
    }
  })

  grunt.registerTask('default', ['jekyll', 'html_pdf'])
  grunt.registerTask('serve', ['jekyll', 'html_pdf', 'connect', 'watch'])
  grunt.registerTask('deploy', ['jekyll', 'html_pdf'])
}
