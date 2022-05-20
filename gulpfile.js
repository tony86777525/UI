const gulp         = require('gulp');
const plumber      = require('gulp-plumber');
const notify       = require('gulp-notify');
const cssbeautify  = require('gulp-cssbeautify');
const autoprefixer = require('gulp-autoprefixer');
const stylus       = require('gulp-stylus');
const cache        = require('gulp-cached');
const changed      = require('gulp-changed');
const progeny      = require('gulp-progeny');

const compile_src = {
	styl: './assets/stylus/**/*.styl',
}

const compile_dest = {
	css: './assets/css/',
}

function styles() {
	return gulp.src(compile_src.styl)
		.pipe(cache('stylus'))
		.pipe(progeny())
		.pipe(changed('stylus'))
		.pipe(plumber({
			errorHandler: notify.onError('Error: <%= error.message %>')
		}))
		.pipe(stylus())
		.pipe(autoprefixer({
			browsers: ['last 2 version', '> 5%', 'ie >= 10', 'Android >= 4.4'],
			cascade: true
		}))
		.pipe(cssbeautify({
			indent: '\t'
		}))
		.pipe(gulp.dest(compile_dest.css))
		;
}

// 監視処理
function watch() {
	// stylus ファイルの変更を監視する
	gulp.watch(compile_src.styl, styles);
}

exports.watch   = watch;
exports.default = gulp.series(watch);