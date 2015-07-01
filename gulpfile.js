var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function() {
  gulp.src(['src/styles/**/*.css'])
  .pipe(sourcemaps.init())
  .pipe(gulp.dest('dist/styles'))
  .pipe(minifyCss())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('dist/styles'))
  .pipe(browserSync.stream());
});

gulp.task('default', function() {
  browserSync.init({
    server: './'
  });
  gulp.watch('src/scripts/**/*.js', browserSync.reload);
  gulp.watch('src/styles/**/*.css', ['styles']);
  gulp.watch('src/img/**/*', browserSync.reload);
  gulp.watch('*.html', browserSync.reload);
});
