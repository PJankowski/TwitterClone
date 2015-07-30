var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    sass = require('gulp-sass'),
    gulpif = require('gulp-if'),
    sourcemaps = require('gulp-sourcemaps'),
    minifyCss = require('gulp-minify-css'),
    path = require('path'),
    jshint = require('gulp-jshint'),
    lr = require('gulp-livereload');

var scripts = [
  'client/app.js',
  'client/app/**/*.js',
  'server/**/*.js'
];

gulp.task('sass', function () {
  gulp.src('client/sass/main.sass')
    .pipe(sass())
    .pipe(gulp.dest('client/css/'));
});

gulp.task('lint', function(){
  gulp.src(scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('server', function () {

  lr.listen();

  nodemon({
    script: 'server.js',
    ext: 'js html sass',
    env: {'NODE_ENV': 'development'},
    tasks: function(changedFiles){
      var tasks = [];
      changedFiles.forEach(function(file){
        if(path.extname(file) == '.sass' && !~tasks.indexOf('sass')) tasks.push('sass');
        if(path.extname(file) == '.js' && !~tasks.indexOf('lint')) tasks.push('lint');
      });
      return tasks;
    }
  })
  .on('restart', function(){
    gulp.src('server.js')
      .pipe(lr());
  });
});

gulp.task('serve', ['sass', 'lint', 'server']);

gulp.task('default', ['serve']);