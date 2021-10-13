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
                    'assets/js/index.js'
                ],
                dest: 'public/assets/dist/js/index.min.js'
            }
        },
        cssmin: {
            options: {
                sourceMap: true
            },
            index: {
                files: {
                    'public/assets/dist/css/index.min.css': [
                        'node_modules/normalize.css/normalize.css',
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