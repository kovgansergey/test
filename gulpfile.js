let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");

gulp.task('minify-css', () => {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({
      suffix: ".min",
      extname: ".css"
    }))
    .pipe(gulp.dest('css'));
}); 