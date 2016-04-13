// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
cljs.nodejs.enable_util_print_BANG_.call(null);
app.core.yaml = cljs.nodejs.require.call(null,"js-yaml");
app.core.handler = (function app$core$handler(event,context){
return context.succeed(app.core.yaml.safeDump(cljs.core.clj__GT_js.call(null,event)));
});

//# sourceMappingURL=core.js.map