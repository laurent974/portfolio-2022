const { src, series, dest } = require("gulp");
const paths = require("./paths");
const gutil = require("gulp-util");
const iconfont = require("gulp-iconfont");
const iconfontCss = require("gulp-iconfont-css");
const runTimestamp = Math.round(Date.now() / 1000);

function iconfontBuild() {
  return src(paths.iconfontFiles + "/**/*.svg")
    .pipe(
      iconfontCss({
        fontName: "icons",
        targetPath: "../../../_assets/sass/font/icons.scss",
        fontPath: "../fonts/",
      })
    )
    .pipe(
      iconfont({
        fontName: "icon",
        prependUnicode: true,
        timestamp: runTimestamp,
      })
    )
    .on("glyphs", function (glyphs, options) {
      console.log(glyphs, options);
    })
    .pipe(dest(paths.jekyllFontFiles))
    .pipe(dest(paths.siteFontFiles))
    .on("error", gutil.log);
}

const iconfontTasks = series(iconfontBuild);

exports.tasks = iconfontTasks;
