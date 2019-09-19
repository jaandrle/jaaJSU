/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
gulp_place("special_functions/IdleCallback.sub.js", "file_once"); /* global rIC, cIC */
gulp_place("classes/IdleValue.sub.js", "file_once"); /* global IdleValue */
/**
 * This NAMESPACE provides features for optimizations.
 * @namespace $optimizier
 * @category namespaces
 */
var $optimizier= {
   /**
    * Prevent multiple calling (typically for "onresize" events) - use google for more detail
    * @method debounce
    * @memberof module:jaaJSU~$optimizier
    * @param {Function} func Function for debounce
    * @param {Number} [wait=150] How much wait for next calling
    * @param {Boolean} [immediate=undefined] First time wait since `wait` (**false**), or call immediate and after wait (**true**) - infact switch *debounce/trottle*
    * @return {Function} Debounced function `fun` (accepts same arguments)
    * @example @lang text
    * graphically (wait= 4symbols)
    * I call (| symbol) fun:    .|||.|.|||..
    *              debounce:    .....|....|.
    *               trottle:    .|.....|....
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
    * Very similar to {@link module:jaaJSU~$optimizier.debounce}, but uses `requestAnimationFrame`
    * @method trottle
    * @memberof module:jaaJSU~$optimizier
    * @param {Function} func
    * @param {Number} [cycles_leap=1] similar to `wait` - how many times calls `requestAnimationFrame`
    * @return {Function} Trottled function `fun`
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
    * @memberof module:jaaJSU~$optimizier
    * @param {Function} fn Conditional function
    * @param {Number} [timeout=2000] Timeout limit for requesting `fn` (ms)
    * @param {Number} [interval=100] Interval for calling `fn` (ms)
    * @return {Promise}
    * @.then {Mixed} result of `fn`
    * @.catch {Error} If timeout
    * @example
    * poll_(()=>document.readyState!=='loading').then(console.log).catch(console.error);
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
    * @memberof module:jaaJSU~$optimizier
    * @param {Function} fn Function which must be called only onetime
    * @param {Object} context Typically `window`
    * @example
    * console_log= $optimizier.once(()=>console.log("hi"));
    * console_log();//=hi
    * console_log();//nothing
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
     * @memberof module:jaaJSU~$optimizier
     * @param {Function} f Function to call later (`delay`+next animation frame)
     * @param {Number} [delay=150] When call `f` (ms)
     */
    timeoutAnimationFrame: function(f, delay= 150){setTimeout(requestAnimationFrame.bind(null, f),delay);},
    /**
     * Promise wrapper around [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
     * @method requestAnimationFrame_
     * @memberof module:jaaJSU~$optimizier
     * @returns {Promise}
     * @example
     * $optimizier.requestAnimationFrame_().then(()=> console.log("Hi")); //-> "Hi"
     * Promise.resolve().then($optimiziers.requestAnimationFrame_).then(()=> console.log("Hi")); //-> "Hi"
     */
    requestAnimationFrame_: function(){ return new Promise(function(resolve){ requestAnimationFrame(resolve); }); },
    /**
     * Promise wrapper around `setTimeout`.
     * 
     * Links:
     *  1) [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)
     *  2) [`setTimeout Arguments`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#Arguments)
     * @method setTimeout_
     * @memberof module:jaaJSU~$optimizier
     * @param {Number} [timeout=0]
     * <br/>- Optional parameter to sets the time delay in milliseconds
     * <br/>- `delay` argument for `setTimeout` — see **Links (2)**
     * @returns {Function}
     * <br/>- **(…params)=> \<Promise\>**
     * <br/>- where `params` are `arg1, ..., argN` arguments for `setTimeout` — see **Links (2)**
     * @example
     * $optimizier.setTimeout_(30)("Hi").then(console.log); //-> "Hi" "after 30ms"
     * Promise.resolve("Hi").then($optimiziers.setTimeout_()).then(console.log); //-> "Hi" "after 0ms"
     */
    setTimeout_: function(timeout= 0){ return (...params)=> new Promise(function(resolve){ setTimeout(resolve, timeout, ...params); }); },
    /**
     * This function creates **\<IdleValue\>**. It is value which is not actually used immediately during assignment but it’s needed later in code. For getting value use {@link module:jaaJSU~getIdleValue}.
     * 
     * This is infact *idle-until-urgent* evaluation pattern.
     * 
     * Internally uses `requestIdleCallback` (`cancelIdleCallback`), or `setTimeout` (`clearTimeout`) as shim/ponyfill.
     * @method setIdleValue
     * @memberof module:jaaJSU~$optimizier
     * @param {Function} initFunction this function is called to get value
     * @returns {IdleValue} argument for {@link module:jaaJSU~getIdleValue} or {@link module:jaaJSU~cancelIdleValue}.
     * @example
     * const formatter_idled= $optimizier.setIdleValue(()=> new Intl.DateTimeFormat('en-US', { timeZone: 'America/Los_Angeles' }));
     * // …
     * console.log($optimizier.getIdleValue(formatter_idled).format(new Date()));
     */
    setIdleValue: function(initFunction){ return new IdleValue(initFunction, "`setIdleValue`: `initFunction` argument must be a function!"); },
    /**
     * Returns result of **\<IdleValue\>**.
     * @method getIdleValue
     * @memberof module:jaaJSU~$optimizier
     * @param {IdleValue} idle_value Output of {@link module:jaaJSU~setIdleValue}
     * @returns {Mixed} Output of `initFunction` — see {@link module:jaaJSU~setIdleValue}
     */
    getIdleValue: function(idle_value){ if(IdleValue.throwErrorIfNotIdleValue(idle_value, "`getIdleValue`: Argument `idle_value` is not `IdleValue`!")) return idle_value.value(); },
    /**
     * Stops **\<IdleValue\>** evaluating. Infact calls `cancelIdleCallback` — see {@link module:jaaJSU~setIdleValue}
     * @method clearIdleValue
     * @memberof module:jaaJSU~$optimizier
     * @param {IdleValue} idle_value Output of {@link module:jaaJSU~setIdleValue}
     * @returns {Mixed|Undefined} returns current value or `undefined` if `initFunction` wasn't called — see see {@link module:jaaJSU~setIdleValue}
     */
    clearIdleValue: function(idle_value){ if(IdleValue.throwErrorIfNotIdleValue(idle_value, "`clearIdleValue`: Argument `idle_value` is not `IdleValue`!")) idle_value.cancel(); }
};
/**
 * Exported name of {@link module:jaaJSU~$optimizier} namespace.
 * @namespace gulp_place("namespaces.$optimizier", "eval_out")
 * @global
 */
gulp_place("global.sub.js", "file_once");/* global gulp_place, export_as */
export_as($optimizier, gulp_place("namespaces.$optimizier", "variable"));