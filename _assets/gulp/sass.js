const { src, series, dest } = require("gulp");
const sass = require("gulp-dart-sass");
const paths = require("./paths");
const cssnano = require("cssnano");
const postcss = require("gulp-postcss");
const gutil = require("gulp-util");
const browserSync = require("browser-sync");
const autoprefixer = require("autoprefixer");

function scssBuild() {
  return src(paths.sassFiles + "/main.scss")
    .pipe(
      postcss([autoprefixer({ BrowsersList: ["last 2 versions"] }), cssnano()])
    )
    .pipe(dest(paths.jekyllCssFiles))
    .pipe(dest(paths.siteCssFiles))
    .pipe(browserSync.stream())
    .on("error", gutil.log);
}

const cssTasks = series(scssBuild);

exports.tasks = cssTasks;
