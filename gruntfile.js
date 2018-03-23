'use strict';

module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.loadNpmTasks('grunt-env');
	grunt.loadNpmTasks('grunt-mocha-istanbul');

	grunt.initConfig({
		'env': {
			'mochaTest': {
				'NODE_ENV': 'test'
			}

		},

		'exec': {
			'clean': {
				'command': 'rm -rf buildresults docs'
			},
			'lint': {
				'command': 'yarn lint'
			},
			'docs': {
				'command': 'yarn docs'
			}
		},

		'mochaTest': {
			'test': {
				'options': {
					'clearRequireCache': false,
					'noFail': false,
					'quiet': false,
					'recursive': true,
					'reporter': 'mocha-junit-reporter',
					'reporterOptions': {
						'mochaFile': './buildresults/tests.xml'
					},
					'require': ['./test/setup_mocks'],
					'timeout': 5000
				},

				'src': ['./test/**/*.js']
			}
		},

		'mocha_istanbul': {
			'coverage': {
				'src': 'test',
				'options': {
					'coverageFolder': 'buildresults',
					'reportFormats': ['cobertura']
				}
			}
		}
	});

	grunt.registerTask('default', ['exec:clean', 'env', 'exec:lint', 'mochaTest', 'mocha_istanbul:coverage', 'exec:docs']);
};

