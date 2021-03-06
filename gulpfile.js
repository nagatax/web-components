// Gulp settings
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const prettierPlugin = require('gulp-prettier-plugin');
const replace = require('gulp-replace');

// html
const htmllint = require('gulp-htmllint');
const htmlmin = require('gulp-htmlmin');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');
const inject = require('gulp-inject');

// css
const sass = require('gulp-sass');
const sassglob = require('gulp-sass-glob');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const stylelint = require('gulp-stylelint');

// image
const imagemin = require('gulp-imagemin');

// delete compiled files
const del = require('del');

// browser sync
const browserSync = require('browser-sync');

// Webpack settings
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpackconfig/webpack.development');

// src and dest
const paths = {
  root: __dirname,
  html: {
    src: ['./src/html/**/*.html'],
    dest: './dist/html',
  },
  sass: {
    src: ['./src/sass/**/*.scss'],
    dest: './dist/css',
  },
  js: {
    src: ['./src/js/**/*.js'],
    dest: './dist/js',
  },
  ejs: {
    src: ['./src/ejs/**/*.ejs', '!./src/ejs/**/_*.ejs'],
    dest: './dist/html',
  },
  image: {
    src: ['./src/img/**/*.jpg'],
    dest: './dist/img'
  },
};

// clean task
gulp.task('clean', () => {
  return del([
    paths.html.dest,
    paths.sass.dest,
  ]);
});

// html task
gulp.task('html', () => {
  const sources = gulp.src([`${paths.sass.dest}/*.css`, `${paths.js.dest}/*.js`]);

  return gulp.src(paths.ejs.src)
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(ejs())
    .pipe(rename({ extname: '.html' }))
    .pipe(inject(sources, { ignorePath: '/dist/'}))
    .pipe(htmlmin({ removeComments: true }))
    .pipe(replace('.css"', `.css?${Date.now().toString()}"`))
    .pipe(replace('.js"', `.js?${Date.now().toString()}"`))
    .pipe(prettierPlugin())
    .pipe(htmllint())
    .pipe(gulp.dest(paths.html.dest));
});

// sass task
gulp.task('sass', () => {
  return gulp.src(paths.sass.src)
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(sourcemaps.init())
    .pipe(sassglob())
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(postcss())
    .pipe(sourcemaps.write())
    .pipe(prettierPlugin())
    .pipe(stylelint())
    .pipe(gulp.dest(paths.sass.dest));
});

// javascript task
gulp.task('javascript', () => {
  return webpackStream(webpackConfig, webpack)
      // .pipe(prettierPlugin())
    .pipe(gulp.dest(paths.js.dest));
});

// image task
gulp.task('image', () => {
  return gulp.src(paths.image.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.image.dest));
});

// browser sync
gulp.task('browsersync', () => {
  return browserSync.init({
    server: {
      baseDir: './dist',
      index: 'html/index/index.html',
    },
    port: 8080,
    reloadOnRestart: true,
  });
});
gulp.task('reload', (done) => {
  browserSync.reload();
  done();
});

// watch task
gulp.task('watch', (done) => {
  gulp.watch(
    paths.ejs.src.concat(paths.html.src, paths.sass.src, paths.js.src),
    gulp.series('clean', 'sass', 'javascript', 'image', 'html', 'reload')
  );
  done();
});

// default task
gulp.task('default', gulp.parallel(gulp.series('clean', 'sass', 'javascript', 'image', 'html', 'browsersync'), 'watch'));
