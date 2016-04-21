var gulp             = require('gulp');
var pug              = require("gulp-pug2");
var sass             = require('gulp-sass');

// компиляция pug
gulp.task('pug', function() {
  return gulp.src('source_files/*.pug')
      .pipe(pug({ yourTemplate: 'Locals' }))
      .pipe(gulp.dest('destination'));
});


// Compile sass into CSS
gulp.task('sass', function() {
    return gulp.src('source_files/**.scss')
        .pipe(sass())
        .pipe(gulp.dest('destination/CSS'));
});

// var pug = require('gulp-pug');

// gulp.task('build', function build() {
//   return gulp.src('views/**.pug')
//     .pipe(pug(options))
//     .pipe(gulp.dest('out'));
// });
