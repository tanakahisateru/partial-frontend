module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                beautify: true,
                sourceMap: true,
            },
            index: {
                src: [
                    'node_modules/jquery/dist/jquery.min.js',
                    'assets/js/length-check-input.js'
                ],
                dest: 'public/assets/dist/js/all.min.js'
            }
        },
        cssmin: {
            options: {
                sourceMap: true
            },
            index: {
                files: {
                    'public/assets/dist/css/all.min.css': [
                        'node_modules/normalize.css/normalize.css',
                        'assets/css/common.css',
                        'assets/css/index.css'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['uglify','cssmin']);
};