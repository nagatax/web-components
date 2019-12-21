// Gulp settings
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

// html
const htmllint = require('gulp-htmllint');
const htmlmin = require('gulp-htmlmin');

// css
const sass = require('gulp-sass');
const sassglob = require('gulp-sass-glob');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');

// delete compiled files
const del = require('del');

// Webpack settings
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpackconfig/webpack.development');

// src and dest
const paths = {
  html: {
    src: './src/html/**/*.html',
    dest: './dist/html',
  },
  sass: {
    src: './src/sass/**/*.scss',
    dest: './dist/css',
  },
  js: {
    src: './src/js/**/*.js',
    dest: './dist/js',
  },
};

// html lint
gulp.task('html', function () {
  return gulp.src(paths.html.src)
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(htmlmin({removeComments: true}))
    .pipe(htmllint())
    .pipe(gulp.dest(paths.html.dest));
});

// sass task
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(sourcemaps.init())
    .pipe(sassglob())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(postcss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'));
});

// javascript task
gulp.task('javascript', function () {
  return webpackStream(webpackConfig, webpack)
    .pipe(gulp.dest(paths.js.dest));
});

// watch task
gulp.task('watch', function () {
  gulp.watch(paths.html.src, gulp.series('html'));
  gulp.watch(paths.sass.src, gulp.series('sass'));
  gulp.watch(paths.js.src, gulp.series('javascript'));
});

// clean task
gulp.task('clean', function () {
  return del([
    './dist/**/*.html',
    './dist/**/*.css',
  ]);
});

// default task
gulp.task('default', gulp.series('clean', 'watch'));
