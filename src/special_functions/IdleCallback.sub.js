/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global requestIdleCallback, cancelIdleCallback *///gulp.keep.line
/* see https://github.com/GoogleChromeLabs/idlize/ */
const [ rIC, cIC ]= (supports=> {
    if(supports) return [ requestIdleCallback, cancelIdleCallback ];
    /* minimal shim */
    class IdleDeadline {
        constructor(init_time){ this._init_time= init_time; }
        get didTimeout(){ return false; }
        timeRemaining(){ return Math.max(0, 50 - (now() - this._init_time)); }
    }
    return [
        function requestIdleCallback(callback){
            const deadline= new IdleDeadline(now());
            return setTimeout(()=> callback(deadline), 0);
        },
        function cancelIdleCallback(handle){
            clearTimeout(handle);
        }
    ];
    function now(){ return +(new Date());}
})(typeof requestIdleCallback === 'function');