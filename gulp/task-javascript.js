/* jshint esversion: 6,-W097, -W040, browser: true, expr: true */
module.exports= function({app, $gulp_folder, gulp, error, $g, $o, $run}){
    let namespaces= {$string: "$string", $dom: "$dom", $async: "$async", $optimizier: "$optimizier", $time: "$time", $array: "$array", $object: "$object", $function: "$function"};
    if(app.namespaces_rename) Object.keys(app.namespaces_rename).forEach(key=> namespaces[key]= app.namespaces_rename[key]);
    return function(cb){
        let cmd;
        if($run.jshint_advanced){
            cmd= $o.spawn($run.jshint_advanced, [app.src_folder], {});
            cmd.stdout.on('data', function(data){ error.addText(data.toString()+"\n"); });
            cmd.on('close', run);
        } else {
            run(0);
        }
        function run(code){
            let main_stream;
            if(!code){
                main_stream= gulp.src([app.src_folder+"*.js", '!'+app.src_folder+'*.sub.js'])
                    .pipe($g.replace("\"gulp.variable.namespaces\"", "{"+Object.keys(namespaces).reduce((acc,key,i)=> acc+(i ? ", " : "")+namespaces[key]+": "+ key, "")+"}"))
                    .pipe($g.replace("//gulp.import.namespaces", Object.keys(namespaces).reduce((acc,key)=> acc+"//gulp.place."+key+".sub.js\n", "")))
                    .pipe($g.replace(/\/\/gulp\.place\.(.*)/g,function(s, filename){return $o.fs.readFileSync(app.src_folder+filename, 'utf8').replace(/[^\n]*\/\/gulp\.remove\.line/g, "");}))
                    .pipe($g.replace(/\/\/gulp\.place\.(.*)/g,function(s, filename){return $o.fs.readFileSync(app.src_folder+filename, 'utf8').replace(/[^\n]*\/\/gulp\.remove\.line/g, "");}))
                    .pipe($g.replace(/\/\/gulp\.place_OR\.(.*)/g,function(s, filename){return $o.fs.readFileSync(app.src_folder+filename.replace("standalone", app.standalone), 'utf8').replace(/[^\n]*\/\/gulp\.remove\.line/g, "");}))
                    .pipe($g.replace("gulp.variable.version", app.version))
                    .pipe($g.replace("gulp.variable.name", app.name));
    
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
