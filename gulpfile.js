var gulp = require('gulp'),
uglify = require('gulp-uglify'),
prefix = require('gulp-autoprefixer'),
minify = require('gulp-minify-css');

function onError(err){
	console.log(err);
}

gulp.task('default', function () {
	
});

gulp.task('uglify', function(){
	return gulp.src('./js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist'));
});

gulp.task('css', function(){
	return gulp.src('./css/style.css')
	.pipe(prefix())
	.pipe(minify())
	.pipe(gulp.dest('dist'));
});