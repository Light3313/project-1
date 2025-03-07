const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

// Компіляція SCSS → CSS + автооновлення
function compileStyles() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
}

// Запуск сервера з автооновленням
function serve() {
  browserSync.init({ server: './' });
  gulp.watch('src/scss/**/*.scss', compileStyles);
  gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.default = serve;
