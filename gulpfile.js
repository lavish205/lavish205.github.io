
var gulp = require('gulp'),
	connect  = require('gulp-connect'),
	port = process.env.port || 8000;

var htmlmin = require('gulp-htmlmin');
var webserver = require('gulp-webserver');
var gutil = require('gulp-util');


gulp.task('minify', function() {
  return gulp.src('./*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});


gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      host: '0.0.0.0',
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

//live reload html
gulp.task('html',function(){
	gulp.src('./index.html')
	.pipe(connect.reload());
});


//live reload html
gulp.task('watch',function(){
	gulp.watch('./index.html',['html'])
});



gulp.task('serve',['minify','watch','webserver'])
