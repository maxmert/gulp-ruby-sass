# gulp-ruby-sass [![Build Status](https://travis-ci.org/sindresorhus/gulp-ruby-sass.svg?branch=master)](https://travis-ci.org/sindresorhus/gulp-ruby-sass)

> Compile Sass to CSS with [Ruby Sass](http://sass-lang.com/install)

This is slower than [gulp-sass](https://github.com/dlmanning/gulp-sass), but more stable and feature-rich.

*Issues with the output should be reported on the Sass [issue tracker](https://github.com/sass/sass/issues).*


## Install

```sh
$ npm install --save-dev gulp-ruby-sass
```

You also need to have [Ruby](http://www.ruby-lang.org/en/downloads/) and [Sass](http://sass-lang.com/download.html) installed. If you're on OS X or Linux you probably already have Ruby; test with `ruby -v` in your terminal. When you've confirmed you have Ruby, run `gem install sass` to install Sass.


## Usage

```js
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('default', function () {
	return gulp.src('src/scss/app.scss')
		.pipe(sass({sourcemap: true, sourcemapPath: '../scss'}))
		.on('error', function (err) { console.log(err.message); })
		.pipe(gulp.dest('dist/css'));
});
```

Add the files you want to compile to `gulp.src()`.

Handle Sass errors with an `on('error', cb)` listener or a plugin like [plumber](https://github.com/floatdrop/gulp-plumber). gulp-ruby-sass throws errors like a gulp plugin, but also passes the erroring Sass files through the stream if you prefer to see the errors in your browser.

Use [gulp-watch](https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpwatchglob--opts-tasks-or-gulpwatchglob--opts-cb) to automatically recompile your files when you edit them.

**Note to Windows users:** All Sass options expect unix style path separators (`/`). If you're setting paths dynamically, use [slash](https://github.com/sindresorhus/slash) to normalize them.


## API

### sass(options)

#### options


##### sourcemap

Type: `String`  
Default: `inline`  

**Note: Only `inline`, `file` and `none` are supported. Requires [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps).**

Requires Sass `>= 3.4` and gulp-sourcemaps.

- `inline` creates sourcemaps with inline source.
- `file` references sources on disk.
- `none` skips sourcemap creation.

<!-- https://developer.chrome.com/devtools/docs/css-preprocessors -->

###### Recipe

```js
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
	return sass('fixture/source', {
		sourcemap: 'inline'
	})
	.on('error', function (err) {
		console.error('Error', err.message);
	})
	// sourcemaps.init() is automatic, no need to include it
	.pipe(sourcemaps.write('../maps'))
	.pipe(gulp.dest('fixture/result'));
});
```

##### trace

Type: `Boolean`  
Default: `false`

Show a full traceback on error.


##### unixNewlines

Type: `Boolean`  
Default: `false` on Windows, otherwise `true`

Use Unix-style newlines in written files.


##### check

Type: `Boolean`  
Default: `false`

Just check syntax, don't evaluate.


##### style

Type: `String`  
Default: `nested`

Output style. Can be `nested`, `compact`, `compressed`, `expanded`.


##### precision

Type: `Number`  
Default: `3`

How many digits of precision to use when outputting decimal numbers.


##### quiet

Type: `Boolean`  
Default: `false`

Silence warnings and status messages during compilation. **NOTE:** If you set `quiet` to `true` gulp will no longer emit most Sass and Bundler errors.


##### compass

Type: `Boolean`  
Default: `false`

Make Compass imports available and load project configuration (`config.rb` located close to the `gulpfile.js`).


##### debugInfo

Type: `Boolean`  
Default: `false`

Emit output that can be used by the FireSass Firebug plugin.


##### lineNumbers

Type: `Boolean`  
Default: `false`

Emit comments in the generated CSS indicating the corresponding source line.


##### loadPath

Type: `String|Array`

One or more Sass import paths, relative to the gulpfile.


##### require

Type: `String|Array`

Require one or more Ruby libraries before running Sass.


##### cacheLocation

Type: `String`  
Default: `.sass-cache`

The path to put cached Sass files.


##### noCache

Type: `Boolean`  
Default: `false`

Don't cache to sassc files.


##### bundleExec

Type: `Boolean`  
Default: `false`

Run `sass` with [bundle exec](http://gembundler.com/man/bundle-exec.1.html): `bundle exec sass`.


##### container

Type: `String`  
Default: `gulp-ruby-sass`

Name of the temporary directory used to process files. If you have multiple streams with gulp-ruby-sass running at once each will need a unique container name.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
