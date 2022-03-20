const { src, series, dest } = require("gulp");
const sass = require("gulp-dart-sass");
const paths = require("./paths");
const gutil = require("gulp-util");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const purgecss = require("gulp-purgecss");
const sourcemaps = require("gulp-sourcemaps");
const stylelint = require("gulp-stylelint");

function scssBuild() {
  return src("_assets/sass/main.scss")
    .pipe(sourcemaps.init())
    .pipe(
      stylelint({
        reporters: [{ formatter: "verbose", console: true, fix: true }],
      })
    )
    .pipe(
      sass({
        includePaths: ["node_modules"],
        outputStyle: "compressed",
      })
    )
    .pipe(autoprefixer("last 2 version"))
    .pipe(rename("styles.css"))
    .pipe(
      purgecss({
        content: ["_site/**/*.html"],
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(dest(paths.siteCssFiles))
    .on("error", gutil.log);
}

const cssTasks = series(scssBuild);

exports.tasks = cssTasks;
