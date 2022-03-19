const { src, series, dest } = require("gulp");
const paths = require("./paths");
const gutil = require("gulp-util");
const uglify = require("gulp-uglify-es");
const concat = require("gulp-concat");

function jsBuild() {
  return src([paths.jsFiles + "/*.js"])
    .pipe(concat("main.js"))
    .pipe(dest(paths.jekyllJsFiles))
    .pipe(dest(paths.siteJsFiles))
    .on("error", gutil.log);
}

const jsTasks = series(jsBuild);

exports.tasks = jsTasks;
