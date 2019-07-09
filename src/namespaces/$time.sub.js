/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
gulp_place("jaaJSU - $time.sub.js", "file");/* global $time */
gulp_place("special_functions/$time_${app.standalone}.sub.js");

gulp_place("global.sub.js", "file_once");/* global gulp_place, export_as */
export_as($time, gulp_place("namespaces.$time", "variable"));