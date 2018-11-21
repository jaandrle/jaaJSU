    /* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
    /* global factory, module_name, gulp_place *///gulp.keep.line
    let window_export= factory(window, document);
    Object.keys(window_export).forEach(key=> window[key]= window_export[key]);
    window[module_name+"_version"]= gulp_place("app.version", "variable");