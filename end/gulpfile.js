const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('babel', function () {
    return gulp.src('./src/**/*.es').pipe(babel({
        presets: ['es2015','stage-0']
    })).pipe(gulp.dest('dist'));
});
gulp.task('move',['babel'], function () {
    return gulp.src(['./src/**/*.*','!src/**/*.es']).pipe(gulp.dest('dist'));
});

gulp.task('default',['move','babel']);
const watcher = gulp.watch('./src/**/*.es', ['babel']);
watcher.on('change', function(event) {
  console.log('文件被编译:' + event.path);
});
