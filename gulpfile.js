/**
 * Created by Magicwager on 2017/3/16.
 */
var gulp = require('gulp');
var less = require('gulp-less');
var clean = require('gulp-clean');
var babel = require('gulp-babel');
var copy = require('gulp-copy');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var util = require('gulp-util');
var minifycss = require('gulp-minify-css');
var koa = require('koa');
var app = koa();
var cfg = require('./conf/config');
var browserify = require('gulp-browserify');
var DevServer = require("portal-fe-devServer");
var serverConfig = cfg.serverConfig;

// 编译 src 下所有的 html,js 文件到 dist 目录
gulp.task('copy:demos', function () {
    gulp.src([
        'demos/**/**/*.html',
        'demos/**/**/*.js',
        'demos/**/**/*.json',
        'demos/**/**/*.png',
        'demos/**/**/*.jpg',
        'demos/**/**/*.gif',
        'demos/**/**/*.ico',
        'demos/**/**/*.css',
    ])
        .pipe(rename(function (path) {
            path.dirname += '';
        }))
        .pipe(gulp.dest("./dist"));
});

// 匹配所有 less文件进行 less 编译
gulp.task('less', function () {
    gulp.src('demos/**/*.less')
        .pipe(less())
        .pipe(rename(function (path) {
            path.extname = ".css"
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('less:dist', function () {
    gulp.src(['demos/**/*.less'])
        .pipe(less())
        .pipe(minifycss())
        .pipe(rename(function (path) {
            path.extname = ".css"
        }))
        .pipe(gulp.dest('dist'));
    gulp.src(['demos/**/*.css'])
        .pipe(minifycss())
        .pipe(gulp.dest('dist'));
});
//
gulp.task('browserify',function(){
    gulp.src('./demos/second_stage_demos/index.js')
        .pipe(browserify({
            transform:'reactify',
        }))
        .pipe(gulp.dest('dist'))
});
//监听文件改动，执行相应任务
gulp.task('watch', function () {
    console.log('监听文件改动，执行相应任务');
    gulp.watch('demos/**/**/*.less', ['less']);
    gulp.watch('demos/**/**/*.js', ['browserify']);
    gulp.watch([ 'demos/**/**/*.html', 'demos/**/**/*.js', 'demos/**/**/*.css'], [ 'copy:demos']);
});

//清空 dist 目录下的资源
gulp.task('clean', function () {
    console.log('清空 dist 目录下的资源')
    gulp.src('dist/*', {
        read: false
    })
        .pipe(clean({
            force: true
        }));
});

//
gulp.task('dev-server', function () {
    serverConfig.app = app;
    var mockServer = new DevServer(serverConfig);
    mockServer.start(serverConfig);
});

gulp.task('before', [ 'copy:demos', 'less']);
gulp.task('default', ['before', 'browserify','dev-server', 'watch']);
//gulp.task('trans-test', ['translate', 'dev-server','watch']);
