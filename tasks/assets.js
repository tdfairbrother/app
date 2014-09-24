var gulp = require('gulp')
  , clean = require('gulp-clean')
  , gulpReact = require('gulp-react')
  , webpack = require('gulp-webpack');

module.exports = {

  clean: function(){
      return gulp.src('./lib/*', { read: false })
          .pipe(clean());
  }, 

  compile: function(){
      return gulp.src('src/index.jsx')
          .pipe(webpack( require('./webpack.config.js').production ))
          .pipe(gulp.dest('lib/'));

  }
}
