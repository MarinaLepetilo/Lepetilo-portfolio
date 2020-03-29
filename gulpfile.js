var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();


function css_style(done) {

    gulp.src('./sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            erroeLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer(
            ['last 15 versions', '> 1%', 'ie 8', 'ie 7'], 
            { cascade: true }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());

    done();
}

function sync(done) {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 3000
    });
    done();
}

function browserReload(done) {
    browserSync.reload();
    done();
}

function print(done) {
    console.log('Hi!');
    done();
}

function watchSass() {
    gulp.watch("./sass/**/*", css_style);
}

function watchFiles() {
    gulp.watch("./sass/**/*", css_style);
    gulp.watch("./**/*.html", browserReload);
    gulp.watch("./**/*.js", browserReload);
}

// gulp.task(css_style);
// gulp.task(print);

gulp.task('default', gulp.parallel(watchSass, sync));
gulp.task(sync);
// exports.default = defaultSomeTask;
