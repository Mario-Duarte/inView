const { watch, series, parallel, src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const util = require('gulp-util');
const concat = require('gulp-concat');

let basename = 'inView';
let prefix = 'jQuery-';
let extname = '.js';
let extnamemin = '.min.js';

function compile(cb) {
	return src('./src/*.js')
	.pipe(concat('all.js'))
	.pipe(babel({
				presets: ['@babel/env']
		}))
		.pipe(rename({
			basename: basename,
			prefix: prefix,
			extname: extname
		}))
		.pipe(dest("./"));
	cb();
}

function minify(cb) {
	return src('./'  + prefix + basename + extname)
	.pipe(uglify())
	.pipe(rename({
		basename: basename,
		prefix: prefix,
		extname: extnamemin
	}))
	.pipe(dest("./"));
	cb();
}

if (util.env.env === 'prod' && util.env.watch ) {
	util.log(util.colors.magenta('Gulp is now building scripts with minify'));
	exports.build = series(compile, minify);
	util.log(util.colors.magenta('Gulp is now watching for changes on: "./src"'));
	watch('./src/*.js', series(compile, minify));
} else if ( util.env.env === 'prod' && !util.env.watch ) {
	util.log(util.colors.magenta('Gulp is now building scripts with minify'));
	exports.build = series(compile, minify);
} else if ( !util.env.env && util.env.watch ) {
	util.log(util.colors.magenta('Gulp is now building sripts'));
	exports.build = series(compile);
	util.log(util.colors.magenta('Gulp is now watching for changes on: "./src"'));
	watch('./src/*.js', compile);
} else {
	util.log(util.colors.magenta('Gulp is now building sripts'));
	exports.build = series(compile);
}
