var gulp             = require('gulp');
var pug              = require("gulp-pug2");
var sass             = require('gulp-sass');
var browserSync      = require('browser-sync');


gulp.task('default', ['pug','sass']);

// var src = {
//     scss: 'source_files/*.scss',
//     pug: 'source_files/*.pug',
// };


// компиляция pug
gulp.task('pug', function() {
  return gulp.src('source_files/*.pug')
      .pipe(pug({ yourTemplate: 'Locals' }))
      .pipe(gulp.dest('destination'));
});

// var dest = {
// 	root:'destination'
// }

// Compile sass into CSS
gulp.task('sass', function() {
    return gulp.src('source_files/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('destination/css'));
});

// gulp.task('browser-sync', function() {
//     browserSync({
//         server: dest.root
// });

//     gulp.watch(src.scss, ['sass']);
//     gulp.watch(src.pug, ['pug']);
// });

// var pug = require('gulp-pug');

// gulp.task('build', function build() {
//   return gulp.src('views/**.pug')
//     .pipe(pug(options))
//     .pipe(gulp.dest('out'));
// });
