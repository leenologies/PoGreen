var gulp = require('gulp');
var haml = require('gulp-haml');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');




//Haml
gulp.task('haml',function(){
  gulp.src('Haml/index.haml')
  .pipe(plumber())
   .pipe(haml())
   .pipe(gulp.dest('./'));
});
gulp.task('haml-watch',['haml'],browserSync.reload);

//Sass
gulp.task('sass', function(){
     return gulp.src(['Css/Sass/style.scss'])
       .pipe(plumber())
     .pipe(sass())
      //.on('error', handleErrors)
     .pipe(rename(function(path){path.extname = ".css"
   }))
     .pipe(gulp.dest('Css/'));
});

gulp.task('sass-watch', ['sass'],browserSync.reload);



//Javascript
gulp.task('scripts', function(){
  return gulp.src(['js/*.js'])
  .pipe(plumber())
  });


//Watch
gulp.task('watch' , function(){
  browserSync({
     server: {
       basedir: './'
     }

  });
});

   gulp.watch('Css/Sass/style.scss', ['sass-watch']);
   gulp.watch('Haml/index.haml',['haml-watch']);
   gulp.watch('js/main.js', ['scripts']);



//Default gulp task to run
gulp.task('default',function(){
  gulp.run('sass','haml','sass-watch','haml-watch');
});
