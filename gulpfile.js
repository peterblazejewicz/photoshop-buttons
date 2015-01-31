'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var sass = require('gulp-ruby-sass');
//
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './',
      index: 'index.html',
      port: 8000
    },
    open: true
  });
});
//
gulp.task('browser-sync-reload', function() {
  browserSync.reload();
});
//
gulp.task('sass', function () {
  return sass('sass/style.scss')
    .pipe(plumber())
    .pipe(gulp.dest('stylesheets'))
    .pipe(browserSync.reload({stream: true}));
});
//
gulp.task('default', ['sass', 'browser-sync'], function() {
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('*.html', ['browser-sync-reload']);
});