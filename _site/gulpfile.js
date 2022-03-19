const { task, parallel } = require("gulp");
const browserSync = require("browser-sync").create();
const scss = require("./_assets/gulp/sass");
const js = require("./_assets/gulp/js");
const iconfont = require("./_assets/gulp/iconfont");
const fonts = require("./_assets/gulp/fonts");
const jekyll = require("./_assets/gulp/jekyll");

/* Tache par défault */
task(
  "default",
  parallel(scss.tasks, js.tasks, iconfont.tasks, fonts.tasks, jekyll.tasks)
);

/* Watch */
task("watch", function (callback) {
  browserSync.reload();
  callback();
});

/* Browser sync + jekyll build serve */
task("serve", function () {
  browserSync.init({
    server: paths.siteDir,
    ghostMode: false, // Toggle to mirror clicks, reloads etc (performance)
    logFileChanges: true,
    logLevel: "debug",
    open: true, // Toggle to auto-open page when starting
  });
  gulp.watch(["_config.yml"], ["watch"]);
  // Watch .scss files and pipe changes to browserSync
  gulp.watch("_assets/scss/**/*.scss", [scss.tasks]);
  // Watch .js files
  gulp.watch("_assets/js/**/*.js", [js.tasks]);
  // Watch icons files and pipe changes to browserSync
  gulp.watch("_assets/icons/**/*", [iconfont.taks]);
  // Watch posts
  gulp.watch("_posts/**/*.+(md|markdown|MD)", ["watch"]);
  // Watch drafts if --drafts flag was passed
  if (module.exports.drafts) {
    gulp.watch("_drafts/*.+(md|markdown|MD)", ["watch"]);
  }
  // Watch html and markdown files
  gulp.watch(["**/*.+(html|md|markdown|MD)", "!_site/**/*.*"], ["watch"]);
  // Watch RSS feed
  gulp.watch("feed.xml", ["watch"]);
  // Watch data files
  gulp.watch("_data/**.*+(yml|yaml|csv|json)", ["watch"]);
});
