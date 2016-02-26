var gulp = require('gulp');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
 
gulp.task('webserver', function() {
  gulp.src('./public/')
    .pipe(webserver({
      livereload: true,
      open: true,
    }));

  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/static/css'));
});