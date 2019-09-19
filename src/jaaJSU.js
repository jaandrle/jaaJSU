/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* gulp *//* global gulp_place */
/**
 * @module jaaJSU
 * @version gulp_place("app.version", "eval_out")
 */
(function(module_name, factory) {
    'use strict';//gulp.remove_ifCordova.line
    gulp_place("jaaJSU_export_${app.standalone}.sub.js");
})(gulp_place("app.name", "variable"), function(window, document){
    'use strict';//gulp.remove_ifCordova.line
    var out= {};
    gulp_place("global.sub.js", "file_once");
    gulp_place("namespaces/*.sub.js", "glob");
    return out;
});
