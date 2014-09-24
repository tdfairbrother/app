var gulp    = require('gulp')
    , dev     = require('./tasks/development')
    , assets  = require('./tasks/assets');

gulp.task('lib-clean',     assets.clean);
gulp.task('lib-compile',   ['lib-clean'], assets.compile);
gulp.task('dev-server',    dev.devServer);

gulp.task('build',     [ 'lib-compile']);