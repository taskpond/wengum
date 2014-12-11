var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var source = require("vinyl-source-stream");
var reactify = require('reactify');
var browserify = require('browserify');

// Basic usage
gulp.task('browserify', ['browserify-wengum'], function() {
    var b = browserify();
    b.transform(reactify); // use the reactify transform
    b.add('./server/js/application.js');
    return b.bundle()
        .pipe(source('components.js'))
        .pipe(gulp.dest('./server/dist'));
});

gulp.task('browserify-wengum', function() {
    var b = browserify();
    b.transform(reactify); // use the reactify transform
    b.add('./server/js/WelcomePage.js');
    return b.bundle()
        .pipe(source('WelcomeComponents.js'))
        .pipe(gulp.dest('./server/dist'));
});

// Nodemon to run hapi server
gulp.task('nodemon', ['browserify'], function() {
    nodemon({
        script: 'index.js',
        watch: ['server/js', 'server/views']
    });
});


// Restart the server for changes.
gulp.task('default', ['nodemon'], function() {
    gulp.watch(['./server/js/**', './server/css/**'], ['browserify']);
});

// Restart the server for changes.
gulp.task('wengum', ['nodemon'], function() {
    gulp.watch(['./server/reactComponents/**', './server/css/**'], ['browserify-wengum']);
});
