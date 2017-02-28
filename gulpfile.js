const gulp = require('gulp');
const browserSync = require('browser-sync');
const path = require('path');
const Server = require('karma').Server;

gulp.task('browserSync', () => {
	browserSync.init({
		server: {
			baseDir: 'public'
		}
	});
});

gulp.task('watch', ['browserSync'], () => {
	gulp.watch('public/index.html', browserSync.reload);
	gulp.watch('public/partials/*.html', browserSync.reload);
	gulp.watch('public/css/*.css', browserSync.reload);
	gulp.watch('public/js/*.js', browserSync.reload);
});

gulp.task('test', (done) => {
  new Server({
    configFile: path.join(__dirname, 'karma.conf.js'),
    singleRun: true
  }, done).start();
});