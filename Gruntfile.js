module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		backstop: {
			setup: {
				options : {
					backstop_path: './bower_components/backstopjs',
					test_path: './tests',
					setup: false,
					configure: true
				}
			},
			test: {
				options : {
					backstop_path: './bower_components/backstopjs',
					test_path: './tests',
					create_references: false,
					run_tests: true
				}
			},
			reference: {
				options : {
					backstop_path: './bower_components/backstopjs',
					test_path: './tests',
					create_references: true,
					run_tests: false
				}
			}
		} // backstop

	});

	grunt.registerTask("default", ["taskName"]);

};
