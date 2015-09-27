var Server = require('karma').Server;
var gulp = require('gulp');

gulp.task('default', function (done) {
  return new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});
