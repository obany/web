module.exports = function(config) {
    config.set({
	basePath: __dirname,
	singleRun: true,
	frameworks: [
		'jasmine'
	],
	reporters: [
		'story',
		'coverage-allsources',
		'coverage',
		'html',
		'karma-remap-istanbul'
	],
	browsers: [
		'ChromeHeadless'
	],
	coverageReporter: {
		include: './dist/**/!(app-module-config|entryPoint).js',
		exclude: '',
		reporters: [
			{
				type: 'json',
				dir: './test/reports',
				subdir: '.'
			}
		]
	},
	htmlReporter: {
		outputDir: './test/reports',
		reportName: 'unit'
	},
	remapIstanbulReporter: {
		reports: {
			text: '',
			json: './test/reports/coverage.json',
			html: './test/reports/coverage',
			lcovonly: './test/reports/lcov.info'
		}
	},
	preprocessors: {
		'./dist/**/!(*-bundle|app-module-config|entryPoint).js': [
			'sourcemap',
			'coverage'
		]
	},
	files: [
		{
			pattern: './dist/**/*',
			included: false,
			watched: true,
			includeType: 'fixed'
		},
		{
			pattern: '../unite.json',
			included: false,
			watched: true,
			includeType: 'fixed'
		},
		{
			pattern: './assetsSrc/theme/unite-theme.json',
			included: false,
			watched: true,
			includeType: 'fixed'
		},
		{
			pattern: './test/unit/unit-module-config.js',
			included: true,
			watched: true,
			includeType: 'fixed'
		},
		{
			pattern: './test/unit/unit-bootstrap.js',
			included: true,
			watched: true,
			includeType: 'fixed'
		},
		{
			pattern: './test/unit/dist/**/*.spec.js',
			included: false,
			watched: true,
			includeType: 'fixed'
		}
	]
});
};
/* Generated by UniteJS */
