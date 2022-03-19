const { src, series, dest } = require("gulp");
const gutil = require("gulp-util");
const run = require("gulp-run");

function jekyllBuild() {
  const shellCommand = "bundle exec jekyll build --config _config.yml";

  return src(".", { allowEmpty: true })
    .pipe(run(shellCommand))
    .on("error", gutil.log);
}

const jekyllTasks = series(jekyllBuild);

exports.tasks = jekyllTasks;
