var gulp          = require('gulp');
var htmlhint      = require("gulp-htmlhint");
var scss          = require('gulp-sass');
var sourcemaps    = require('gulp-sourcemaps');
var cleanCSS      = require('gulp-clean-css');
var gulpStyleLint = require('gulp-stylelint');
var gutil         = require('gulp-util');
var browsersync   = require('browser-sync').create();
var autoprefixer  = require('gulp-autoprefixer');
var del           = require('del');

var isProduction = false;

if ( gutil.env.production === true ) { // ENABLE CSS MINIFICATION USE WITH '--production' FLAG
  isProduction = true;
}


var paths = {
	htm:'./www/*.html',
  root:'./',
	scssPartials:'./www/scss/**/*.scss',
  scssMain:'./www/scss/*.scss'
}

paths.scssAll = [paths.scssMain, paths.scssPartials];


gulp.task('server', function() {
  browsersync.init({
    server: {
      baseDir: "./www/",
      startPath: "index.html"
    }
  });
});

gulp.task('stylelint',function(){
  if(isProduction){
    return gulp
    .src(paths.scssAll)
    .pipe(
      gulpStyleLint({
        reporters: [
          {formatter: 'string', console: true}
        ]
      })
    );
  }
})

gulp.task('styles', ['stylelint'], function() {

  //del(['./www/dist/css/bundledstyle.css'], function(err){

   // if(err){
    //  console.log('del error = ' + err);
   //   return;
    //}

    return gulp.src(paths.scssMain)
      .pipe(sourcemaps.init({
        loadMaps:true
      }))
      .pipe(scss())
      .pipe(autoprefixer({
        browsers: ['last 4 versions', '> 1%']
      }))
      /*.pipe(rename({suffix: '.min'}))*/
      .pipe(isProduction ? cleanCSS({
        restructuring: false,
        advanced: false // OTHERWISE REMOVES CSS THAT HAS VENDOR PREFIXES LIKE display: flex
      }) : gutil.noop())
      .pipe(sourcemaps.write('.',{
        sourceRoot: '.'
      }))
      .pipe(gulp.dest('./www/dist/css'))
  //});

});

gulp.task('htmlhint',function(){
  if(isProduction){
    gulp.src(paths.htm)
      .pipe(htmlhint('.htmlhintrc'))
      .pipe(htmlhint.failReporter());
  }
});

gulp.task('watch',function(){
  gulp.watch(paths.scssAll,['styles','htmlhint'],function(){
    browsersync.reload();
  });
  gulp.watch([paths.htm]).on('change', browsersync.reload);
});

gulp.task('default', ['styles', 'htmlhint','server', 'watch']);