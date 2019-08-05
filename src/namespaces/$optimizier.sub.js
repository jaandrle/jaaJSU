/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/**
 * This NAMESPACE provides features for optimizations.
 * @class $optimizier.{namespace}
 * @static
 */
var $optimizier= {
   /**
    * Prevent multiple calling (typically for "onresize" events) - use google for more detail
    * @method debounce
    * @param {Function} func
    *  * Function for debounce
    * @param {Number} [wait=150]
    *  * How much wait for next calling
    * @param {Boolean} [immediate=undefined]
    *  * First time wait since `wait` (**false**), or call immediate and after wait (**true**) - infact switch *debounce/trottle*
    * @return {Function}
    *  * Debounced function `fun` (accepts same arguments)
    * @example
    *     graphically (wait= 4symbols)
    *     I call (| symbol) fun:    .|||.|.|||..
    *                  debounce:    .....|....|.
    *                   trottle:    .|.....|....
    */
    debounce: function(func, wait, immediate) {
        wait || (wait= 150);
        var timeout, args, context, timestamp;
        return function() {
            context= this; args = [].slice.call(arguments, 0);
            timestamp= new Date();
            let later= function() {
                let time_diff= (new Date()) - timestamp;
                if (time_diff < wait) {
                    timeout= setTimeout(later, wait-time_diff);
                } else {
                    timeout= null;
                    if(!immediate) func.apply(context, args);
                }
            };
            if(immediate&&!timeout) func.apply(context, args);
            if(!timeout) timeout= setTimeout(later, wait);
        };
    },
   /**
    * Very similar to [debounce](#methods_debounce), but uses `requestAnimationFrame`
    * @method trottle
    * @param {Function} func
    * @param {Number} [cycles_leap=1]
    *  * similar to `wait` - how many times calls `requestAnimationFrame`
    * @return {Function}
    *  * Trottled function `fun`
    */
    trottle: function(func, cycles_leap){
        cycles_leap || (cycles_leap= 1);
        var args, context, cycle, counter= 0;
        function check(){
            if(counter===cycles_leap){
                counter= 0;
                cancelAnimationFrame(cycle);
            } else {
                cycle= requestAnimationFrame(check);
            }
        }
        return function(){
            context= this; args = [].slice.call(arguments, 0);
            if(!counter){
                counter++;
                func.apply(context, args);
                cycle= requestAnimationFrame(check);
            }
        };
    },
   /**
    * Calls `.then` when `fn` returns **true**
    * @method poll_
    * @param {Function} fn
    *  * Conditional function
    * @param {Number} [timeout=2000]
    *  * Timeout limit for requesting `fn` (ms)
    * @param {Number} [interval=100]
    *  * Interval for calling `fn` (ms)
    * @return {Promise}
    *  * `.then` **\<Mixed\>**: result of `fn`
    *  * `.catch` **\<Error\>**: If timeout
    * @example
    *     poll_(()=>document.readyState!=='loading').then(console.log).catch(console.error);
    */
    poll_: function(fn, timeout, interval) {
        var endTime= Number(new Date()) + (timeout || 2000);
        interval= interval || 100;

        var checkCondition= function(resolve, reject) {
            var result = fn();
            if(result) {
                resolve(result);
            }
            else if (Number(new Date()) < endTime) {
                setTimeout(checkCondition, interval, resolve, reject);
            }
            else {
                reject(new Error('timed out for ' + fn + ': ' + arguments));
            }
        };
        return new Promise(checkCondition);
    },
   /**
    * Prevent multiple calling of `fn`
    * @method once
    * @param {Function} fn
    *  * Function which must be called only onetime
    * @param {Object} context
    *  * Typically `window`
    * @example
    *     console_log= $optimizier.once(()=>console.log("hi"));
    *     console_log();//=hi
    *     console_log();//nothing
    */
    once: function(fn, context) { 
        var result;
        return function() { 
            if(fn) {
                result = fn.apply(context || this, arguments);
                fn = null;
            }
            return result;
        };
    },
    /**
     * Combination of `setTimeout`->`requestAnimationFrame`
     * @method timeoutAnimationFrame
     * @param {Function} f
     *  * Function to call later (`delay`+next animation frame)
     * @param {Number} [delay=150]
     *  * When call `f` (ms)
     */
    timeoutAnimationFrame: function(f, delay= 150){setTimeout(requestAnimationFrame.bind(null, f),delay);},
    requestAnimationFrame_: function(){ return new Promise(function(resolve){ requestAnimationFrame(resolve); }); },
    setTimeout_: function(timeout){ return (...params)=> new Promise(function(resolve){ setTimeout(resolve, timeout, ...params); }); }
};
gulp_place("global.sub.js", "file_once");/* global gulp_place, export_as */
export_as($optimizier, gulp_place("namespaces.$optimizier", "variable"));