/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global define, factory, module, module_name *///gulp.keep.line
let window_export;
if (typeof define === 'function' && define.amd) {
    define([], function(){
        return factory(window, document);
    });
} else if (typeof exports !== 'undefined') {
    module.exports = factory(window, document);
} else {
    window_export= factory(window, document);
    Object.keys(window_export).forEach(key=> window[key]= window_export[key]);
    window[module_name+"_version"]= gulp_place("app.version", "variable");
}