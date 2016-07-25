/*
1.less编译压缩合并
2.js压缩合并
3.img图片复制
4.html压缩
 */

//首先载入gulp模块

var gulp = require('gulp');

var less = require('gulp-less');  //less编译

var cssnano = require('gulp-cssnano'); //css压缩

var concat = require('gulp-concat');  //js合并

var uglify = require('gulp-uglify');  //js压缩混淆

var imagemin = require('gulp-imagemin');  //image压缩

var htmlmin = require('gulp-htmlmin');  //html压缩

var browserSync = require('browser-sync');  //启动一个静态服务器

/*
//注册一个自动监测任务
gulp.task("dist",function(){
    //监测当我们编写的文件改变保存后的时候，对应复制过去的文件也跟着同步改变
    gulp.watch("src/index.html",["copy"]);
    gulp.watch("src/style/*.less",["style"]);

});


gulp.task('serve', function() {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});




*/

//1.less编译压缩合并
gulp.task('style',function(){
    //找到我们要编译的文件路径
    //执行什么操作
    //复制到什么路径下
    //src里面可以写匹配条件
    //我们希望最终能合并成一个文件，有加下划线的文件最终将不会被匹配
    gulp.src(['src/styles/*.less','!src/styles/_*.less'])
    .pipe(less())
    .pipe(cssnano())
    .pipe(gulp.dest('dist/styles/'))
    .pipe(browserSync.reload({
        stream : true
    }));
});

//2.js合并 混淆
gulp.task('script',function(){
    //先合并文件，再混淆
    gulp.src('src/script/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/script/'))
    .pipe(browserSync.reload({
        stream : true
    }));
});

//3.html压缩
gulp.task('html',function(){
    /*
        collapseWhitespace合并空白折叠行
        removeComments  去除注释
        browserSync.reload() 文件修改的时候，html文件自动刷新
     */
    gulp.src('src/*.html')
    .pipe(htmlmin({
        collapseWhitespace : true,
        removeComments : true
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.reload({
        stream : true
    })); 
});

//4.压缩图片，复制
gulp.task('image',function(){
    gulp.src('src/images/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
    .pipe(browserSync.reload({
        stream : true
    }));
});


gulp.task('serve',function(){
    browserSync({
        server :{
            baseDir : ['dist/']
        }
    },function(err,bs){
        console.log(123);
    });

    //当我们启动静态服务器的时候，同步更新修改的文件

    gulp.watch("src/*.html",["html"]);
    gulp.watch("src/styles/*.less",["style"]);
    gulp.watch("src/scripts/*.less",["script"]);
    gulp.watch("src/images/*.less",["image"]);


});