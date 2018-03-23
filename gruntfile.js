'use strict';

module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		'env': {
			'mochaTest': {
				'NODE_ENV': 'test'
			}

		},

		'eslint': {
			'options': {
				'config': '.eslintrc.json',
				'format': 'junit',
				'outputFile': 'buildresults/eslint-orig.xml'
			},
			'target': ['.']
		},

		'exec': {
			'clean': {
				'command': 'rm -rf buildresults docs'
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
		},

		'xmlstoke': {
			'deleteESLintBugs': {
				'options': {
					'actions': [{
						'type': 'D',
						'xpath': '//failure[contains(@message, \'node_modules\')]/ancestor::testsuite'
					}]
				},
				'files': {
					'buildresults/lint.xml': 'buildresults/eslint-orig.xml'
				}
			},
			'deleteEmptyTestcases': {
				'options': {
					'actions': [{
						'type': 'D',
						'xpath': '//testcase[not(text())]'
					}]
				},
				'files': {
					'buildresults/eslint-no-empty-testcases.xml': 'buildresults/eslint-no-bugs.xml'
				}
			},
			'deleteEmptyTestsuites': {
				'options': {
					'actions': [{
						'type': 'D',
						'xpath': '//testsuite[not(text())]'
					}]
				},
				'files': {
					'buildresults/lint.xml': 'buildresults/eslint-no-empty-testcases.xml'
				}
			}
		},

		'clean': ['buildresults/eslint-orig.xml', 'buildresults/eslint-no-bugs.xml', 'buildresults/eslint-no-empty-testcases.xml']
	});

	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-env');
	grunt.loadNpmTasks('grunt-mocha-istanbul');
	grunt.loadNpmTasks('grunt-xmlstoke');

	grunt.registerTask('default', ['exec:clean', 'env', 'eslint', 'xmlstoke:deleteESLintBugs', 'clean', 'mochaTest', 'mocha_istanbul:coverage', 'exec:docs']);
};
