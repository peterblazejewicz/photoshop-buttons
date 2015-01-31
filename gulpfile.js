'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
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
gulp.task('default', ['browser-sync'], function() {
  gulp.watch('*.html', [browserSync.reload]);
});