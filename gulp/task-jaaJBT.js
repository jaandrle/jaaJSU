/* jshint esversion: 6,-W097, -W040, node: true, expr: true, undef: true */
module.exports= function({ app, $gulp_folder, gulp, error, $g, $o, $run }){
    const jaaJBT_start= {
        config: {
            version: "1.1.0",
            root_url: "https://raw.githubusercontent.com/jaandrle/jaaJSU/master/"
        },
        scripts: {}
    };
    return function(cb){
        jaaJBT_start.scripts[ `jaaJSU_${app.standalone}` ]= {
            version: app.version,
            src: app.bin_folder+"jaaJSU.js",
            target_path: "app_js_src_path"
        };
        $o.fs.writeFile("jaaJBT.json", JSON.stringify(jaaJBT_start), cb);
    };
};
