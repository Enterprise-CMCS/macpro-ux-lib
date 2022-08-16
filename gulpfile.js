/* gulpfile.js */

const uswds = require("@uswds/compile");

/**
 * USWDS version
 * Set the version of USWDS you're using (2 or 3)
 */

uswds.settings.version = 3;

/**
 * Path settings
 * Set as many as you need
 */
uswds.paths.dist.css = "./assets/css";
uswds.paths.dist.fonts = "./assets/fonts";
uswds.paths.dist.img = "./assets/img";
uswds.paths.dist.js = "./assets/js";
uswds.paths.dist.theme = "./assets/theme";
/**
 * Exports
 * Add as many as you need
 */

exports.init = uswds.init;
exports.compile = uswds.compile;
exports.compileSass = uswds.compileSass;

sass({
    includePaths: [
      "./node_modules/@uswds/uswds/packages",
    ],
  })