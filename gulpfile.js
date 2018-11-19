/* jshint esversion: 6, undef: true, node: true */
/* \CONFIG\ */
const config= {
    /* \APP depend consts\ */
    app: {
        name: "jaaJSU",
        version: "0.1",
        build: "0001",
        src_folder: "src/",
        bin_folder: "bin/",
        standalone: ["standalone", "cordova"][0],
        namespaces_rename: {$optimizier: "$optimiziers"},
        sequence: ['javascript'] //!... pro preskoceni sequence
    },
    /* /APP depend consts/ */
    /* \Gulp - requires\ */
    $gulp_folder: "./gulp/",
    gulp: require('gulp'),
    error: error()
};
(function(c){
    const $run= require(c.$gulp_folder+'gulp-crossplatform')();
    const {$g,$o}= require(c.$gulp_folder+'gulp-requires')(config.gulp);
    c.$g= $g; c.$o= $o; c.$run= $run;
})(config);
    /* /Gulp - requires/ */
/* /CONFIG/ */
/* \Tasks\ */
var c_output= "", if_error= 0;
const tasks= ['default', 'javascript'], tasks_length= tasks.length;
for(let i=0, task; i<tasks_length; i++){ task= tasks[i]; config.gulp.task(task, require(config.$gulp_folder+'task-'+task)(config)); }
/* /Tasks/ */
/* \Global functions\ */
function error(){
    function getText(){     return c_output; }
    function addText(err){  c_output+= err; }
    function getNum(){      return if_error; }
    function addNum(num=1){ if_error+= num; }
    function handler(err){  addNum(); config.$g.util.log(config.$g.util.colors.red('[Error]'), err.toString()); }
    return { getText, addText, getNum, addNum, handler };
}
/* /Global functions/ */
