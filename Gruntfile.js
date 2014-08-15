module.exports = function(grunt){
	
	// Load Grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	
	grunt.initConfig({
		watch: {
			karma: {
				files: ['angular-date-range.js', 'test/{,**/}*.js'],
				tasks: ['karma:unit']
			},
			js: {
				files: ['angular-date-range.js', 'test/{,**/}*.js', '*.css'],
				tasks: ['build']
			}
		},

		bump: {
			options: {
				commitMessage: 'chore: release v%VERSION%',
				commitFiles: ['package.json', 'bower.json', 'angular-date-range.min.js'],
				files: ['package.json', 'bower.json'],
				pushTo: 'origin'
			}
		},

		karma: {
			unit: {
				configFile: 'karma.conf.js',
				singleRun: true
			},
		},

		jshint: {
			all: ['Gruntfile.js', 'angular-date-range.js', 'test/*.js']
		},

		ngmin: {
			dist: {
				files: {
					'angular-date-range.min.js': ['angular-date-range.js']
					
				}
			}
		},

		'npm-contributors': {
			options: {
				commitMessage: 'chore: update contributors'
			}
		},

		uglify: {
			options: {
				mangle: false
			},
			dist: {
				files: {
					'angular-date-range.min.js': ['angular-date-range.min.js'],
					'angular-date-range.min.css': ['angular-date-range.min.css']
				}
			}
		},
		
		copy: {
			example: {
				src: ['angular-date-range.js', 'angular-date-range.css'],
				dest: 'example/',
			}
		}
		
	});
	
	grunt.registerTask('test', [
		'jshint:all',
		'karma:unit'
	]);
	
	grunt.registerTask('build', [
		'jshint:all',
		'ngmin',
		'uglify',
		'copy:example'
	]);
	
	// Default task
	grunt.registerTask('default', ['watch']);
};