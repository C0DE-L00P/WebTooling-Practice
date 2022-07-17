const { src } = require('gulp');
const gulp = require('gulp');


// ---------------------------------- Images

const imagemin = require('gulp-imagemin');

function imgMinify(){
    return src('images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
}


// ---------------------------------- HTML

const htmlmin = require('gulp-htmlmin');

function htmlMinify(){
    return src('*.html')
    .pipe(htmlmin({collapseWhitespace: true,removeComments: true}))
    .pipe(gulp.dest('dist'));
}


// ---------------------------------- JS

const concat = require('gulp-concat');
const terser = require('gulp-terser');

function jsMinify(){
    return src('js/*')
    .pipe(concat('all.min.js'))
    .pipe(terser())
    .pipe(gulp.dest('dist/js'));
}


// ---------------------------------- CSS

const clean = require('gulp-clean-css');

function cssMinify(){
    return src('css/*')
    .pipe(concat('all.min.css'))
    .pipe(clean())
    .pipe(gulp.dest('dist/css'));
}

module.exports = {imgMinify,htmlMinify,jsMinify,cssMinify};