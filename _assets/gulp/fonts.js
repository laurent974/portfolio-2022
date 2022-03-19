const { src, series, dest } = require("gulp");
const paths = require("./paths");
const gutil = require("gulp-util");
const rename = require("gulp-rename");
const browserSync = require("browser-sync");

function fontsBuild() {
  return src(paths.sassFiles + "/main.scss")
    .pipe(
      rename(function (path) {
        path.dirname = "";
      })
    )
    .pipe(dest(paths.jekyllFontFiles))
    .pipe(dest(paths.siteFontFiles))
    .pipe(browserSync.stream())
    .on("error", gutil.log);
}

const fontsTasks = series(fontsBuild);

exports.tasks = fontsTasks;
