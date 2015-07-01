var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
  browserSync.init({
    server: './'
  });
  gulp.watch('src/scripts/**/*.js', browserSync.reload);
  gulp.watch('src/styles/**/*.css', browserSync.reload);
  gulp.watch('src/img/**/*', browserSync.reload);
  gulp.watch('*.html', browserSync.reload);
});
