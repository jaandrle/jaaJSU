/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
gulp_place("namespaces/$optimizier.sub.js", "file_once");/* global $optimizier */
/**
 * This NAMESPACE provides features for async (mainly Promise) functions.
 * @class $function.{namespace}
 * @static
 */
var $function= {
    /**
     * EXPERIMENT!: "Bind" alternative
     * vs *.bind(?,...) - it depends if/when you prefer to set `this` (`bind`= when you define partial fn or `partial`= when you call it)
     * @method partial
     * @param {Function} fn
     *  * ...
     * @param {...Mixed} presetArgs
     *  * ...
     * @returns {Function}
     *  * ...
     */
    partial: function(fn, ...presetArgs){
        return function partiallyApplied(...laterArgs){ return fn.call(this, ...presetArgs, ...laterArgs); };
    },
    /**
     * EXPERIMENT!: Function composing using `$dom.component` like syntax
     * @method component
     * @param {Function} transform
     *  * ...
     * @returns {component}
     *  * `{ pipe, run }`
     */
    component: function(transform){
        let functions= []; const out= { pipe, run };
        return out;

        function pipe(f){ functions.push(f); return out; }
        function run(data){ return functions.reduce((prev,curr)=>curr(prev), typeof transform==="function" ? transform(data) : data);}
    },
    /**
     * Functional-like alternative for `for(...){functions[nth](..input);}`.
     * @method each
     * @param {Function} ...functions
     *  * `...functions[nth](..input){...}`
     *  * List of functions.
     * @return {Function}
     *  * For given `input` calls all functions in `...functions` (use `input` as arguments for these functions)
     *  * `<= input` **\<Mixed\>**: arguments for `...functions`
     */
    each: function(...functions){ return function(input){ for(let i=0, i_length= functions.length; i<i_length; i++){ functions[i](input); } }; },
    /**
     * Procedure for creating functional flow (sequention *function1->function2->...*). Particually similar to [each](#methods_each). But, as arguments for current function is used output frome previous function.
     * @method sequention
     * @param {Function} ...functions
     *  * List of functions.
     *  * `...functions[nth](__INPUT__){... return __OUTPUT__;}`
     *  * `__INPUT__` is `input` (for first function) or `__OUTPUT__`
     *  * `__OUTPUT__`! `__OUTPUT__` is used as argument for next function in `...functions`.
     * @return {Function}
     *  * For given `input` calls all functions in `...functions` (use `input` as arguments for first function)
     *  * `<= input` **\<Mixed\>**: arguments for first function
     * @example
     *     console.log($function.sequention(
     *          a=>[a+1, a-1],
     *          ([a,b])=>[b-1, a+1]
     *      )(5));//= [3, 7]
     * 
     *      console.log($function.sequention(
     *          a=>a+1,
     *          a=>a+2
     *      )(5));//= [8]
     */
    sequention: function(...functions){return function(input){let current= input; for(let i=0, i_length= functions.length; i<i_length; i++){ current= functions[i](current); } return current; }; },
    /**
     * Optimized iterator for heavy functions in `functions`. Uses [$optimizier.timeoutAnimationFrame](./$optimizier.{namespace}.html#methods_timeoutAnimationFrame)
     * @method schedule
     * @param {...Functions} functions
     *  * Array of functions for iteratings
     * @param {Object} def
     * @param {Object} [def.context=window]
     *  * Parameter for `*.call(context)`
     * @param {Object} [def.delay=150]
     *  * Parameter for `$optimizier.timeoutAnimationFrame`
     */
    schedule: function(functions, {context= window, delay= 150}= {}){ $optimizier.timeoutAnimationFrame(function loop(){ let process= functions.shift(); process.call(context); if(functions.length > 0) $optimizier.timeoutAnimationFrame(loop, delay); }, delay); },
    /**
     * Shorthand for `const mixed= ...; if(mixed) fun(mixed);`
     * @method conditionalCall
     * @param {Mixed} mixed
     *  * If `mixed=true` the `fun` is called
     * @param {Function} fun
     *  * 'Refular' function as argument accepts `mixed`
     * @return {Boolean|Mixed}
     *  * **False** or output of `fun`
     */
    conditionalCall: function(mixed,fun){
        if(!mixed) return false;
        if(typeof fun === "function") return fun(mixed);
        return mixed;
    }
};
gulp_place("global.sub.js", "file_once");/* global gulp_place, export_as */
export_as($function, gulp_place("namespaces.$function", "variable"));
