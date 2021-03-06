goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7577__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7577 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7578__i = 0, G__7578__a = new Array(arguments.length -  0);
while (G__7578__i < G__7578__a.length) {G__7578__a[G__7578__i] = arguments[G__7578__i + 0]; ++G__7578__i;}
  args = new cljs.core.IndexedSeq(G__7578__a,0);
} 
return G__7577__delegate.call(this,args);};
G__7577.cljs$lang$maxFixedArity = 0;
G__7577.cljs$lang$applyTo = (function (arglist__7579){
var args = cljs.core.seq(arglist__7579);
return G__7577__delegate(args);
});
G__7577.cljs$core$IFn$_invoke$arity$variadic = G__7577__delegate;
return G__7577;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7580__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7580 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7581__i = 0, G__7581__a = new Array(arguments.length -  0);
while (G__7581__i < G__7581__a.length) {G__7581__a[G__7581__i] = arguments[G__7581__i + 0]; ++G__7581__i;}
  args = new cljs.core.IndexedSeq(G__7581__a,0);
} 
return G__7580__delegate.call(this,args);};
G__7580.cljs$lang$maxFixedArity = 0;
G__7580.cljs$lang$applyTo = (function (arglist__7582){
var args = cljs.core.seq(arglist__7582);
return G__7580__delegate(args);
});
G__7580.cljs$core$IFn$_invoke$arity$variadic = G__7580__delegate;
return G__7580;
})()
;

return null;
});
