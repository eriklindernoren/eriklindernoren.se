var gulp = require('gulp'),
uglify = require('gulp-uglify'),
prefix = require('gulp-autoprefixer'),
minify = require('gulp-minify-css'),
imagemin = require('gulp-imagemin')
js_concat = require('gulp-concat'),
css_concat = require('gulp-concat-css'),
plumber = require('gulp-plumber'),
browserSync = require('browser-sync'),
reload = browserSync.reload;

gulp.task('browserSync', function() {
    browserSync({
        notify: false,
        open: false,
        server: {
            baseDir: "./"
        }
    });
});

function onError(err){
	console.log(err);
}

gulp.task('default', ['js_concat', 'css_concat', 'watch', 'browserSync']);

gulp.task('watch', function(){
	gulp.watch('./js/source/*.js',['js_concat']);
	gulp.watch('./css/source/*.css',['css_concat']);
	gulp.watch('*.html', reload);
});

gulp.task('js_concat', function() {
	return gulp.src('./js/source/*.js')
	.pipe(plumber({errorHandler: onError}))
	.pipe(js_concat('all.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./js/'))
	.pipe(reload({stream:true}));
});

gulp.task('css_concat', function() {
	return gulp.src('./css/source/*.css')
	.pipe(plumber({errorHandler: onError}))
	.pipe(css_concat('all.css'))
	.pipe(prefix('last 10 versions'))
	.pipe(minify())
	.pipe(gulp.dest('./css/'))
	.pipe(reload({stream:true}));
});

gulp.task('image',function(){
	return gulp.src('./images/*')
	.pipe(plumber({errorHandler: onError}))
	.pipe(imagemin())
	.pipe(gulp.dest('dist'));
});