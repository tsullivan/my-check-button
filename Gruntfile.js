module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		// https://github.com/gruntjs/grunt-contrib-less
		less: {
			dev: {
				files: {
					// example page css
					"examples/css/page.css": "examples/less/page.less"
				},
				options: {
					paths: "examples"
				}
			}
		},

		// https://github.com/gruntjs/grunt-contrib-watch
		watch: {
			styles: {
				files: ["examples/less/page.less", "less/*.less"],
				tasks: ["less"]
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("default", ["less"]);
	grunt.registerTask("build", ["default"]);
};
