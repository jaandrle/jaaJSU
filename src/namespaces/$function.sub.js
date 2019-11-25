/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
gulp_place("namespaces/$optimizier.sub.js", "file_once");/* global $optimizier */
/**
 * This NAMESPACE provides features for async (mainly Promise) functions.
 * @namespace $function
 * @category namespaces
 */
/**
 * `function(input){  }`
 * @function function_Mixed2Undefined
 * @memberof module:jaaJSU~$function
 * @inner
 * @category types description
 * @param {Mixed} input
 * @returns {Undefined}
 */
/**
 * `function(input){ return ...; }`
 * @function function_Mixed2Mixed
 * @memberof module:jaaJSU~$function
 * @inner
 * @category types description
 * @param {Mixed} input
 * @returns {Mixed}
 */
/**
 * `function(){ return ...; }`
 * @function function_Undefined2Mixed
 * @memberof module:jaaJSU~$function
 * @inner
 * @category types description
 * @returns {Mixed}
 */
/**
 * `function(...input){ return ...; }`
 * @function function_MultipleMixed2Mixed
 * @memberof module:jaaJSU~$function
 * @inner
 * @category types description
 * @param {...Mixed} input
 * @returns {Mixed}
 */
/**
 * `function(...input){ return function(...){...}; }`
 * @function function_MultipleMixed2Function
 * @memberof module:jaaJSU~$function
 * @inner
 * @category types description
 * @param {...Mixed} input
 * @returns {Function}
 */
/**
 * `function(...Functions){ return function(...){...}; }`
 * @function function_MultipleFunction2Function
 * @memberof module:jaaJSU~$function
 * @inner
 * @category types description
 * @param {...Function} Functions
 * @returns {Function}
 */
var $function= {
    /**
     * Provide **input →⇶ …functions ⇛ reduction → output** functionality.
     * @method branches
     * @memberof module:jaaJSU~$function
     * @public
     * @param {module:jaaJSU~function_reduceCallback} [reduceFun] **By default behaves like 'map'**
     * @param {Function|Mixed} [reduceInitValueCreator=()=>[]] Initial value for `acc` in `reduceFun`.
     * <br/>- **if** not functions, the same behaviour is used as in case of `*.reduce(...)`
     * <br/>- **else** the result of function is used (because of *call-by-reference* in case of **Array**s, **Object**s, …).
     * @returns {Function}
     *  - `...functions`**&lt;…Function&gt;** `=>` **&lt;Function&gt;**
     *      - `...inputs`**&lt;…Mixed&gt;** `=>` **&lt;Mixed&gt;**
     *      - result of `reduceFun`
     * @example
     * const testFunction= $function.branches((acc, curr)=> acc&&curr, true)(
     *     ({ a })=> a==="A",
     *     ({ b })=> b==="B"
     * );
     * testFunction({ a: "A", b: "B" });//= true
     * testFunction({ a: "B", b: "A" });//= false
     */
    branches: function(reduceFun= (acc, res)=> (acc.push(res), acc), reduceInitValueCreator= ()=> []){
        return function mapFunctions(...functions){
            return function inputProccess(...inputs){
                const finalReduceFun= (acc, fun)=> reduceFun(acc, fun(...inputs));
                return functions.reduce(finalReduceFun, typeof reduceInitValueCreator==="function" ? reduceInitValueCreator() : reduceInitValueCreator);
            };
        };
    },
    /**
     * Curried function `...args=> fun=> fun(...args)`
     * @method call
     * @memberof module:jaaJSU~$function
     * @param  {...any} args Arguments for curried output function
     * @return {Function}
     */
    call: function(...args){ return function(fun){ return fun(...args); }; },
    /**
     * EXPERIMENT!: Function composing using `$dom.component` like syntax
     * @method component
     * @memberof module:jaaJSU~$function
     * @param {Function} transform ...
     * @returns {component} `{ pipe, run }`
     */
    component: function(transform){
        let functions= []; const out= { pipe, run };
        return out;

        function pipe(f){ functions.push(f); return out; }
        function run(data){ return functions.reduce((prev,curr)=>curr(prev), typeof transform==="function" ? transform(data) : data);}
    },
    /**
     * Shorthand for `const mixed= ...; if(mixed) fun(mixed);`
     * @method conditionalCall
     * @memberof module:jaaJSU~$function
     * @param {Mixed} mixed If `mixed=true` the `fun` is called
     * @param {module:jaaJSU~$function~function_Mixed2Mixed} fun 'Refular' function as argument accepts `mixed`
     * @return {Boolean|Mixed} **False** or output of `fun`
     */
    conditionalCall: function(mixed,fun){
        if(!mixed) return false;
        if(typeof fun === "function") return fun(mixed);
        return mixed;
    },
    /**
     * Helper for returnin constant
     * @method constant
     * @memberof module:jaaJSU~$function
     * @param {Mixed} constantArg
     * @return {module:jaaJSU~$function~function_Undefined2Mixed} `()=> constantArg`
     * @example
     * $function.constant(5)(10);//= `5`
     */
    constant: constantArg=> ()=> constantArg,
    /**
     * Functional-like alternative for `for(...){functions[nth](..input);}`.
     * @method each
     * @memberof module:jaaJSU~$function
     * @param {...module:jaaJSU~$function~function_Mixed2Undefined} ...functions
     * @return {module:jaaJSU~$function~function_Mixed2Undefined}
     */
    each: function(...functions){ return function(input){ for(let i=0, i_length= functions.length; i<i_length; i++){ functions[i](input); } }; },
    /**
     * @method exception
     * @memberof module:jaaJSU~$function
     * @param {Mixed} _throw What to throw.
     * @throws {Mixed} `_throw`
     */
    exception: function(_throw){ throw _throw; },
    /**
     * @method exceptionError
     * @memberof module:jaaJSU~$function
     * @param {String} message What message to throw as Error.
     * @throws {Error} Error with message `message`.
     */
    exceptionError: function(message){ throw new Error(message); },
    /**
     * `id=> id`
     * @method identity
     * @memberof module:jaaJSU~$function
     * @param {Mixed} id
     * @return {Mixed} `id`
     * @example
     * $function.identity(10);//= `10`
     */
    identity: id=> id,
    /**
     * If `onTest` returns `true` a `onTrue` is called else `onFalse`
     * @param {Function} onTrue Test succcessful function
     * @param {Function} [onFalse= v=> v] Test fail function
     * @param {Function} [onTest= Boolean] Test function
     * @return {...module:jaaJSU~$function~function_MultipleMixed2Mixed} `(...val)=> onTest(...val) ? onTrue(...val) : (typeof onFalse==="function") ? onFalse(...val) : undefined`
     * @example
     * $function.ifElse(v=> v+1)(0);//= `0`
     * $function.ifElse(v=> v+1)(1);//= `2`
     * $function.ifElse(v=> v+1, null, v=> v===1)(1);//= `2`
     * $function.ifElse(v=> v+1, null, v=> v===1)(2);//= `undefined`
     */
    ifElse: function(onTrue, onFalse= v=> v, onTest= Boolean){
        return function(...val){
            if(onTest(...val)) return onTrue(...val);
            if(typeof onFalse==="function") return onFalse(...val);
        };
    },
    /**
     * EXPERIMENT!: "Bind" alternative
     * vs *.bind(?,...) - it depends if/when you prefer to set `this` (`bind`= when you define partial fn or `partial`= when you call it)
     * @method partial
     * @memberof module:jaaJSU~$function
     * @param {Function} fn ...
     * @param {...Mixed} presetArgs ...
     * @returns {Function} ...
     */
    partial: function(fn, ...presetArgs){
        return function partiallyApplied(...laterArgs){ return fn.call(this, ...presetArgs, ...laterArgs); };
    },
    /**
     * Optimized iterator for heavy functions in `functions`. Uses [$optimizier.timeoutAnimationFrame](./$optimizier.{namespace}.html#methods_timeoutAnimationFrame)
     * @method schedule
     * @memberof module:jaaJSU~$function
     * @param {...Functions} functions Array of functions for iteratings
     * @param {Object} def
     * @param {Object} [def.context=window] Parameter for `*.call(context)`
     * @param {Object} [def.delay=150] Parameter for `$optimizier.timeoutAnimationFrame`
     */
    schedule: function(functions, {context= window, delay= 150}= {}){ $optimizier.timeoutAnimationFrame(function loop(){ let process= functions.shift(); process.call(context); if(functions.length > 0) $optimizier.timeoutAnimationFrame(loop, delay); }, delay); },
    /**
     * Created curried function from `fun`: `fun=> (args=[])=> fun(...args)`.
     * @method spread
     * @memberof module:jaaJSU~$function
     * @param {Function} fun
     * @returns {Function}
     */
    spread: function(fun){ return function(args= []){ return fun(...args); }; },
    /**
     * Procedure for creating functional flow (sequention *function1->function2->...*). Particually similar to {@link module:jaaJSU~$function.each}. But, as arguments for current function is used output frome previous function.
     * @method sequention
     * @memberof module:jaaJSU~$function
     * @param {...module:jaaJSU~$function~function_Mixed2Mixed} functions List of functions:
     * <br/>`...functions[nth](__INPUT__){... return __OUTPUT__;}`
     * <br/>`__INPUT__` is `input` (for first function) or `__OUTPUT__`
     * <br/>`__OUTPUT__`! `__OUTPUT__` is used as argument for next function in `...functions`.
     * @return {module:jaaJSU~$function~function_Mixed2Mixed} For given `input` calls all functions in `...functions` (use `input` as arguments for first function). Returns output of last `functions`.
     * @example
     * console.log($function.sequention(
     *      a=>[a+1, a-1],
     *      ([a,b])=>[b-1, a+1]
     *  )(5));//= [3, 7]
     * 
     *  console.log($function.sequention(
     *      a=>a+1,
     *      a=>a+2
     *  )(5));//= [8]
     */
    sequention: function(...functions){return function(input){let current= input; for(let i=0, i_length= functions.length; i<i_length; i++){ current= functions[i](current); } return current; }; },
    /**
     * Helper function for {@link module:jaaJSU~$function.sequentionTry}.
     * @method sequentionCatch
     * @memberof module:jaaJSU~$function
     * @param {Function} fun
     * @returns {Function}
     */
    sequentionCatch: function(fun= $function.identity){
        return function __sequentionCatchInner__(input){ return fun(input); };
    },
    /**
     * Extended version of {@link module:jaaJSU~$function.sequention}. As function in `functions` can be used {@link module:jaaJSU~$function.sequentionCatch} with the same logic as in `Promise`s (`….then(…).catch(…).then(…)`).
     * @method sequention
     * @memberof module:jaaJSU~$function
     * @param {...module:jaaJSU~$function~function_Mixed2Mixed} functions
     * @return {module:jaaJSU~$function~function_Mixed2Mixed}
     * @example
     * const fun= $function.sequentionTry(
     *      $function.ifElse($function.exception, undefined, a=> a>8),
     *      a=> a+1,
     *      $function.sequentionCatch(a=> a%9-1),
     *      a=> a+1
     * );
     * console.log([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ].map(fun));
     * //> Array(13) [2,3,4,5,6,7,8,9,10,0,1,2,3]
     */
    sequentionTry: function(...functions){
        const i_length= functions.length;
        return function(input){
            let current= input, err= false;
            for(let i= 0, is_catch; i<i_length; i++){
                is_catch= functions[i].name==="__sequentionCatchInner__";
                if(err&&is_catch){
                    try{ current= functions[i](current); err= false; }
                    catch(e){ current= e; }
                } else if(!err&&!is_catch) {
                    try{ current= functions[i](current); }
                    catch(e){ current= e; err= true; }
                }
            }
            if(err) throw current;
            return current;
        };
    }
};
gulp_place("global.sub.js", "file_once");/* global gulp_place, export_as */
/**
 * Exported name of {@link module:jaaJSU~$function} namespace.
 * @namespace gulp_place("namespaces.$function", "eval_out")
 * @global
 */
export_as($function, gulp_place("namespaces.$function", "variable"));
