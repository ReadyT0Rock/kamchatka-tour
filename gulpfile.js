const {src, dest, series, watch} = require('gulp');
const sass         = require('gulp-sass')(require('sass'));
const csso         = require('gulp-csso');
const htmlmin      = require('gulp-htmlmin');
const plumber      = require('gulp-plumber');
const sync         = require('browser-sync').create();
const postcss      = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const rename       = require('gulp-rename');
const del          = require('del');
const uglify       = require('gulp-uglify-es').default;
const concat       = require('gulp-concat');
const sourcemap    = require('gulp-sourcemaps');
const squoosh      = require('gulp-libsquoosh');
const svgo         = require('gulp-svgmin');

function styles () {
  return src('source/sass/style.scss')
  .pipe(plumber())
  .pipe(sourcemap.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss([autoprefixer()]))
  .pipe(csso())
  .pipe(rename('style.min.css'))
  .pipe(sourcemap.write())
  .pipe(dest('dist/css'))
};

function html () {
  return src('source/**/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(dest('dist'))
};

function scripts () {
  return src('source/js/script.js')
  .pipe(concat('script.min.js'))
  .pipe(uglify())
  .pipe(dest('dist/js'))
};

function images () {
  return src('source/img/**/*.{jpg,png}')
  .pipe(squoosh())
  .pipe(dest('dist/img'))
};

function svg () {
  return src(['source/img/**/*.svg', '!source/img/sprite.svg'])
  .pipe(svgo())
  .pipe(dest('dist/img'))
};

function copySprite () {
  return src('source/img/sprite.svg')
  .pipe(dest('dist/img'))
};

function copyImages () {
  return src('source/img/**/*.{jpg,png}')
  .pipe(dest('dist/img'))
};

function copySvg () {
  return src('source/img/**/*.svg')
  .pipe(dest('dist/img'))
};

function copy () {
  return src([
    'source/fonts/*.{woff2,woff}',
    'source/*.ico',
    'source/*.webmanifest'
  ], {
    base: 'source'
  })
  .pipe(dest('dist'));
};

function clean () {
  return del('dist');
};

function server () {
  sync.init({
    server: {
      baseDir: './dist',
    },
    cors: true,
    notify: false,
    ui: false,
  });
  watch('source/*.html', series(html)).on('change', sync.reload);
  watch('source/sass/**/*.scss', series(styles)).on('change', sync.reload);
  watch('source/js/**/*', series(scripts)).on('change', sync.reload);
};

exports.default = series(clean, copyImages, copySvg, copy, styles, html, scripts, server);
exports.build = series(clean, images, svg, copySprite, copy, styles, html, scripts, server);
