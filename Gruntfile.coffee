module.exports = (grunt)->
    @initConfig
        pkg: require './package.json'

        uglify:
            main:
                files:
                    'me-pageloading.min.js': ['me-pageloading.js']

        cssmin:
            main:
                files:
                    'me-pageloading.min.css': ['me-pageloading.css']

    @loadNpmTasks 'grunt-contrib-uglify'
    @loadNpmTasks 'grunt-contrib-cssmin'

    @registerTask 'default', [
        'uglify'
        'cssmin'
    ]
