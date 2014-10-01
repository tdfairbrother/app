var gulp = require('gulp')
    , replace = require('gulp-replace')
    , clean = require('gulp-clean')
    , gulpReact = require('gulp-react')
    , plumber = require('gulp-plumber')
    , configs = require('./webpack.configs')
    , webpack = require('gulp-webpack');

module.exports = {

  clean: function(){
      return gulp.src('./lib/*', { read: false })
          .pipe(clean());
  }, 

  compile: function(){
//      return gulp.src('src/index.jsx')
//          .pipe(webpack( require('./webpack.config.js').production ))
//          .pipe(gulp.dest('lib/'));

      gulp.src('./src/**/*.js')
          .pipe(gulp.dest('./lib'))

      return gulp.src('./src/**/*.jsx')
          .pipe(plumber())
          .pipe(gulpReact({ harmony: true }))
          .pipe(replace(/.jsx/g, ''))
          .pipe(gulp.dest('./lib'));

  }
}
