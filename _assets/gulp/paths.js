const paths = {};

// Directory locations.
paths.assetsDir = "_assets/"; // The files Gulp will handle.
paths.jekyllDir = ""; // The files Jekyll will handle.
paths.jekyllAssetsDir = "assets/"; // The asset files Jekyll will handle.
paths.siteDir = "_site/"; // The resulting static site.
paths.siteAssetsDir = "_site/assets/"; // The resulting static site's assets.

// Folder naming conventions.
paths.postFolder = "_posts";
paths.fontFolder = "fonts";
paths.scriptFolder = "js";
paths.stylesFolder = "sass";
paths.iconfontFolder = "icons";

// Asset files locations.
paths.sassFiles = paths.assetsDir + paths.stylesFolder;
paths.jsFiles = paths.assetsDir + paths.scriptFolder;
paths.fontFiles = paths.assetsDir + paths.fontFolder;
paths.iconfontFiles = paths.assetsDir + paths.iconfontFolder;

// Jekyll files locations.
paths.jekyllPostFiles = paths.jekyllDir + paths.postFolder;
paths.jekyllCssFiles = paths.jekyllAssetsDir + paths.stylesFolder;
paths.jekyllJsFiles = paths.jekyllAssetsDir + paths.scriptFolder;
paths.jekyllImageFiles = paths.jekyllAssetsDir + paths.imageFolder;
paths.jekyllFontFiles = paths.jekyllAssetsDir + paths.fontFolder;
paths.jekyllIconfontFiles = paths.jekyllAssetsDir + paths.iconfontFolder;

// Site files locations.
paths.siteCssFiles = paths.siteAssetsDir + paths.stylesFolder;
paths.siteJsFiles = paths.siteAssetsDir + paths.scriptFolder;
paths.siteImageFiles = paths.siteAssetsDir + paths.imageFolder;
paths.siteFontFiles = paths.siteAssetsDir + paths.fontFolder;

// Glob patterns by file type.
paths.sassPattern = "/**/*.scss";
paths.jsPattern = "/**/*.js";
paths.htmlPattern = "/**/*.html";

// Asset files globs
paths.sassFilesGlob = paths.sassFiles + paths.sassPattern;
paths.jsFilesGlob = paths.jsFiles + paths.jsPattern;

// Jekyll files globs
paths.jekyllPostFilesGlob = paths.jekyllPostFiles + paths.markdownPattern;
paths.jekyllHtmlFilesGlob = paths.jekyllDir + paths.htmlPattern;

// Site files globs
paths.siteHtmlFilesGlob = paths.siteDir + paths.htmlPattern;

module.exports = paths;
