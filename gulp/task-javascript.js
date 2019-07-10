/* jshint esversion: 6,-W097, -W040, node: true, expr: true, undef: true */
module.exports= function({app, $gulp_folder, gulp, error, $g, $o, $run}){
    let namespaces= {$string: "$string", $dom: "$dom", $async: "$async", $optimizier: "$optimizier", $time: "$time", $array: "$array", $object: "$object", $function: "$function"};
    if(app.namespaces_rename) Object.keys(app.namespaces_rename).forEach(key=> namespaces[key]= app.namespaces_rename[key]);
    const new_line= ()=>"\n";
    const original_doc= `* Original repository can be found at gulp_place("app.homepage", "variable").${new_line()} * @module jaaJSU.{global}`;
    return function(cb){
        /* jshint -W061 */const gulp_place= require("./gulp_place.js")({gulp_replace: $g.replace, fs: $o.fs, variable_eval: (str)=> eval(str)});/* jshint +W061 */
        let cmd;
        cmd= $o.spawn("node", ['node_modules/jshint/bin/jshint', app.src_folder], {});
        cmd.stdout.on('data', function(data){ error.addText(data.toString()+"\n"); });
        cmd.on('close', run);
        function run(code){
            let main_stream;
            if(!code){
                main_stream= gulp.src([app.src_folder+"*.js", '!'+app.src_folder+'*.sub.js'])
                    .pipe($g.replace("* @module jaaJSU.{global}",original_doc))
                    .pipe(gulp_place({folder: "src/", string_wrapper: '"'}))
                    .pipe($g.replace(/\/\* gulp \*\/\/\* global gulp_place \*\/\r?\n/g,""))
                    .pipe($g.replace(/([^\n]*)\/\/gulp\.remove_ifCordova\.line(\r?\n?)/g, (full, pre, after)=>app.standalone==="cordova" ? "" : pre+after));
    
                main_stream
                    .on('error', error.handler)
                    .pipe(gulp.dest(app.bin_folder))
                    .on('end', function minify(){
                        gulp.src([app.bin_folder+"*js", "!"+app.bin_folder+"*-min.js"])
                            //.pipe($g.js_obfuscator())
                            .pipe($g.minify_js({noSource : true}))
                            .on('error', error.handler)
                            //.pipe($g.rename({suffix: ".min"}))
                            .pipe(gulp.dest(app.bin_folder))
                            .on('end', cb);
                    });
            } else {
                $g.util.log($g.util.colors.red('[Error]'), "Error(s) in javascripts!");
                $o.fs.writeFile($gulp_folder+'build.log', error.getText(), cb);
                error.addNum();
            }
        }
    };
};
