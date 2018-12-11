/* jshint esversion: 6,-W097, -W040, node: true, expr: true, undef: true */
module.exports= function({app, $gulp_folder, gulp, error, $g, $o, $run}){
    const hash_clear= /\s*var h = location\.hash;\r?\n\s*location\.hash = '';\r?\n\s*h = h\.replace\('LINE_', 'LINENUM_'\);\r?\n\s*location\.hash = h;/gm;
    return function(cb){
        gulp.src(['./node_modules/yuidocjs/themes/simple/**/*'])
            .pipe($g.replace("{{htmlTitle}}", "Documentation: "+app.name+"@"+app.version))
            .pipe($g.replace("{{projectVersion}}", app.version))
            .pipe($g.replace("{{title}}</a>", app.name+"</a>: {{moduleName}}"))
            .pipe($g.replace("`[{{name}}{{#if optdefault}}={{optdefault}}{{/if}}]`", "[`{{name}}`{{#if optdefault}}={{optdefault}}{{/if}}]"))
            .pipe($g.replace("`{{paramsList}} `", 
                "{{#params}}"+
                    "{{#if multiple}}...{{/if}}"+
                    "{{#if optional}}"+
                        "[ `{{name}}`{{#if optdefault}} ={{optdefault}}{{/if}} ]"+
                    "{{else}}"+
                        "`{{name}}`"+
                    "{{/if}}"+
                    "{{#unless @last}}, {{/unless}}"+
                "{{/params}}"))
            //.pipe($g.replace("Class {{moduleName}}", "Namespace {{moduleName}}"))
            //old .pipe($g.replace("h = h.replace('LINE_', 'LINENUM_')", "h = h.replace('LINE_', 'LINENUM_').replace('l', 'LINENUM_')"))
            .pipe($g.replace("n.prepend('<a name=\"LINENUM_' + l + '\"></a>');", "n.prepend('<a name=\"l' + l + '\"></a>');"))
            .pipe($g.replace(hash_clear, ""))
            //.pipe($g.replace("Class defined in", "Namespace defined in"))
            .pipe($g.replace("<h3>API Docs - Main Index</h3>", "<h3>This is documentation of "+app.name+"@"+app.version+"</h3>"))
            .pipe($g.replace("<p>Something smart and pretty should probably go here.</p>", "<p><a href='https://github.com/jaandrle/jaaJSU/'>Go to github repository</a></p>"))
            .pipe($g.replace('<script src="{{yuiSeedUrl}}"></script>', '<script src="{{projectAssets}}/from_yahhoapis/yui-min.js"></script>'))
            .pipe($g.replace('<link rel="stylesheet" href="{{yuiGridsUrl}}">', '<link rel="stylesheet" href="{{projectAssets}}/from_yahhoapis/cssgrids-min.css">\n<link rel="stylesheet" href="{{yuiGridsUrl}}">'))
            .pipe($g.replace("var code = Y.all('.prettyprint.linenums');", "Y.all= function(arg, parent= document){"+
                    "let els= typeof arg==='string' ? parent.querySelectorAll(arg) : arg;"+
                    "els.size= ()=>els.length;"+
                    "els.each= (fn)=>[].forEach.call(els, el=> fn(Y.all(el)));"+
                    "els.all= (arg)=>Y.all(arg, els);"+
                    "els.prepend= (arg)=>els.innerHTML= arg+els.innerHTML;"+
                    "return els;}"+
                "\n    var code = Y.all('.prettyprint.linenums');"))
            .on('error', error.handler)
            .pipe(gulp.dest('./gulp/theme/'))
            .on("end", function(){
                let cmd;
                cmd= $o.spawn("node", ['node_modules/yuidocjs/lib/cli', "--themedir", "./gulp/theme", "-o", "./docs", app.src_folder], {});
                cmd.stdout.on('data', a=>$o.fs.appendFileSync($gulp_folder+'build.log', a.toString()));
                cmd.on('close', cb);
            });
    };
};
