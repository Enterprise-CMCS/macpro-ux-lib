/* gulpfile.js */

/* See https://designsystem.digital.gov/documentation/getting-started/developers/phase-two-compile/#using-uswds-compile-2

/**
 * Import uswds-compile
 */

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

// uswds.paths.src is where to find USWDS source files
uswds.paths.src.img = "./node_modules/@uswds/uswds/dist/img";
uswds.paths.src.projectSass = "./src/sass";

// uswds.paths.dist is where Gulp will put assets in the project
uswds.paths.dist.theme = "./sass";
uswds.paths.dist.img = "./assets/uswds/img";
uswds.paths.dist.fonts = "./assets/uswds/fonts";
uswds.paths.dist.js = "./assets/uswds/js";
uswds.paths.dist.css = "./assets/uswds/css";

/**
 * Exports
 * Add as many as you need
 */
exports.compile = uswds.compile;
exports.compileSass = uswds.compileSass;
exports.init = uswds.init;
exports.watch = uswds.watch;
