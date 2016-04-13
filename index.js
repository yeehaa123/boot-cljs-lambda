try {
    require("source-map-support").install();
} catch(err) {
}
require("./target/main.out/goog/bootstrap/nodejs.js");
require("./target/main.out/cljs/core.js");
require("./target/main.out/cljs/nodejs.js");
require("./target/main.out/app/core.js");
goog.require("app.core");
exports.handler = app.core.handler;
