const { src, series, dest } = require("gulp");
const paths = require("./paths");
const gutil = require("gulp-util");
const rename = require("gulp-rename");

function fontsBuild() {
  return src(paths.fontFiles + "/**/*.*")
    .pipe(
      rename(function (path) {
        path.dirname = "";
      })
    )
    .pipe(dest(paths.jekyllFontFiles))
    .pipe(dest(paths.siteFontFiles))
    .on("error", gutil.log);
}

const fontsTasks = series(fontsBuild);

exports.tasks = fontsTasks;
