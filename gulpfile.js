var gulp = require('gulp'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    usemin = require('gulp-usemin'),
    mocha = require('gulp-mocha'),
    jasmine = require('gulp-jasmine');

var paths = {
    scripts: [''],
    unitTests: 'test/unit/*',
    integrationTests: 'test/integration/*',
    dist: 'dist/'
};

gulp.task('start', function() {
    connect.server({
        root: 'dist',
        livereload: true
    });
});

gulp.task('unitTests', function() {
    return gulp.src(paths.unitTests, {read: false})
        .pipe(mocha());
});

gulp.task('integrationTests', function() {
    return gulp.src(paths.integrationTests)
        .pipe(jasmine());
});

gulp.task('usemin', function() {
    return gulp.src('./public/index.html')
        .pipe(usemin({
            css: [minifyCss(), 'concat'],
            js: [uglify()]
        }))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('reload', ['usemin'] , function() {
    gulp.src('./dist/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(['./public/**/*'], ['reload']);
});


gulp.task('default', ['watch']);