'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('./');
// var debug = require('gulp-debug');

gulp.task('sass', function() {
	return sass('fixture/source', {
		sourcemap: 'inline'
	})
	.on('error', function (err) {
	  console.error('Error', err.message);
   })
	// .pipe(debug({verbose: true}))
	.pipe(sourcemaps.write('../maps'))
	.pipe(gulp.dest('fixture/result'));
});
