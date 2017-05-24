var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');

gulp.task('styles', function() {
  gulp.src('assets/raw_css/*.css')
  .pipe(concat('all-raw-styles.min.css'))
  .pipe(minify())
  .pipe(gulp.dest('gulped'));
});
