const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const autoprefixer = require('autoprefixer');
const uglify = require('gulp-uglify-es').default;
const { deleteAsync } = require('del');
const cssnano = require('cssnano'); 


// Конфігурація проекту
const config = {
  paths: {
    src: {
      scss: [ 'src/scss/**/*.scss', 
              'node_modules/swiper/swiper-bundle.css'], // Додавайте бібліотеки тут (scss/css) ,'node_modules/font-awesome/css/font-awesome.min.css'
      js: 'src/js/**/*.js',
      libs: ['node_modules/swiper/swiper-bundle.js'], // Додавайте бібліотеки тут (js) 
      html: 'src/*.html',
      assets: [ 'src/assets/**/*'] // Зображення, шрифти тощо                'node_modules/font-awesome/fonts/*'
    },
    dist: {
      base: 'dist/',
      css: 'dist/css/',
      js: 'dist/js/',
      assets: 'dist/assets/'
    }
  },
  browsersync: {
    server: { baseDir: 'dist' },
    port: 3000,
    notify: false
  },
  autoprefixer: {
    overrideBrowserslist: ['last 8 versions', '> 1%', 'IE 11']
  }
};

// Очищення папки dist
function clean() {
  return deleteAsync([config.paths.dist.base + '**/*']); 
}

// Обробка стилів
function styles() {
  return src(config.paths.src.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer(config.autoprefixer), cssnano()]))
    .pipe(concat('main.min.css'))
    .pipe(dest(config.paths.dist.css))
    .pipe(browserSync.stream());
}

// Обробка скриптів
function scripts() {
  return src([...config.paths.src.libs, config.paths.src.js])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest(config.paths.dist.js))
    .pipe(browserSync.stream());
}

// Копіювання HTML
function html() {
  return src(config.paths.src.html)
    .pipe(dest(config.paths.dist.base))
    .pipe(browserSync.reload({ stream: true }));
}

// Копіювання ассетів
function assets() {
  return src(config.paths.src.assets, { encoding: false })
    .pipe(dest(config.paths.dist.assets))
    .pipe(browserSync.stream());
}

// Сервер та вотчер
function serve() {
  browserSync.init(config.browsersync);
  
  watch(config.paths.src.scss, styles);
  watch(config.paths.src.js, scripts);
  watch(config.paths.src.html, html);
  watch(config.paths.src.assets, assets);
}

// Збірка проекту
const build = series(
  clean,
  parallel(styles, scripts, html, assets)
);

// Запуск розробки
const dev = series(
  build,
  serve
);

// Експорт задач
exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.html = html;
exports.assets = assets;
exports.build = build;
exports.dev = dev;
exports.default = dev;