const { watch, task, parallel, series } = require("gulp");
const browserSync = require("browser-sync").create();
const scss = require("./_assets/gulp/sass");
const js = require("./_assets/gulp/js");
const iconfont = require("./_assets/gulp/iconfont");
const fonts = require("./_assets/gulp/fonts");
const jekyll = require("./_assets/gulp/jekyll");
const paths = require("./_assets/gulp/paths");

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
  watch(["_config.yml"], series(["watch"]));
  // Watch .scss files and pipe changes to browserSync
  watch("_assets/scss/**/*.scss", series([scss.tasks]));
  // Watch .js files
  watch("_assets/js/**/*.js", series([js.tasks]));
  // Watch icons files and pipe changes to browserSync
  watch("_assets/icons/**/*", series([iconfont.tasks]));
  // Watch posts
  watch("_posts/**/*.+(md|markdown|MD)", series(["watch"]));
  // Watch drafts if --drafts flag was passed
  if (module.exports.drafts) {
    watch("_drafts/*.+(md|markdown|MD)", series(["watch"]));
  }
  // Watch html and markdown files
  watch(["**/*.+(html|md|markdown|MD)", "!_site/**/*.*"], series(["watch"]));
  // Watch RSS feed
  watch("feed.xml", series(["watch"]));
  // Watch data files
  watch("_data/**.*+(yml|yaml|csv|json)", series(["watch"]));
});
