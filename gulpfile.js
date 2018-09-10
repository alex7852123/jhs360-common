'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-clean-css');
var babel = require('gulp-babel');
var clean = require('gulp-clean');
var rename = require("gulp-rename");
var VueModule = require('gulp-vue-module');
var vueify = require('gulp-vueify');
 

gulp.task('sass', () => {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin({
            specialComments: '',
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('default', () => {
    gulp.watch(['src/**/*.js'], ['babel']);
    gulp.watch(['src/**/*.vue'], ['vue']);
});

gulp.task('element-ui', () => {
    return gulp.src(['element-ui/index.css'])
        .pipe(cssmin({
            specialComments: '',
        }))
        .pipe(rename({
            basename: 'element-ui'
        }))
        .pipe(gulp.dest('./css/lib'));
});
gulp.task('fonts', () => {
    return gulp.src(['element-ui/fonts/**'])
        .pipe(gulp.dest('./css/lib/fonts'));
});

gulp.task('build', ['sass', 'element-ui', 'fonts']);


gulp.task('vue', () => {
    return gulp.src('src/**/*.vue')
        .pipe(vueify())
        .pipe(rename({
            extname: ".js"
        }))
        .pipe(gulp.dest('lib'));
});

gulp.task('babel', () => {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['es2015', 'stage-2'],
            plugins: [
                "add-module-exports",
                // "transform-es2015-modules-umd",
                "transform-async-to-generator",
                "transform-class-properties",
                "babel-plugin-transform-runtime",
            ]
        }))
        .pipe(gulp.dest('lib'));
});

gulp.task('clean', () => {
    return gulp.src('lib', {
            read: false
        })
        .pipe(clean());
});