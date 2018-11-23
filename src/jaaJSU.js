/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* gulp *//* global gulp_place */
(function(module_name, factory) {
    'use strict';
    gulp_place("jaaJSU_export_${app.standalone}.sub.js");
})(gulp_place("app.name", "variable"), function(window, document){
    'use strict';
    var out= {};
    gulp_place("global.sub.js", "file_once");
    gulp_place("namespaces/*.sub.js", "blob");
    return out;
});