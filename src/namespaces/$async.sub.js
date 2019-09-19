/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/**
 * This NAMESPACE provides features for async (mainly Promise) functions.
 * @namespace $async
 * @category namespaces
 */
/**
 * This kind of function schould returns `Promise`.
 * @function function_Undefined2Promise
 * @memberof module:jaaJSU~$async
 * @inner
 * @category types descriptions
 * @returns {Promise}
 */
/**
 * This kind of function schould returns `Promise`.
 * @function function_MultipleMixed2Promise
 * @memberof module:jaaJSU~$async
 * @inner
 * @category types descriptions
 * @param {...Mixed} Mixed Various arguments
 * @returns {Promise}
 */
var $async={
   /**
    * Procedure for iterating thorught **Promise** function array `funcs`.
    *
    * @method serialize
    * @memberof module:jaaJSU~$async
    * @deprecated Use {@link module:jaaJSU~$async.iterate_}, {@link module:jaaJSU~$async.sequention_}, {@link module:jaaJSU~$async.each_}.
    * @param {module:jaaJSU~$async~function_Undefined2Promise[]} funcs Array of functions for iterating (the next always waiting fro previous Promise).
    * @return {Promise}
    * @.then {Mixed[]} Array of results from `funcs`
    * @.catch {Error} Error in `funcs[nth]`
    * @example
    * const timeout= interval=> function(){return new Promise(function(resolve,reject){
    *     setTimeout(resolve, interval, interval);
    * });}
    * const timeouts= [ 50, 100, 150 ].map(timeout);
    * $async.serialize(timeouts).then(console.log).catch(console.error);
    * //log> [50, 100, 150]
    */
    serialize: (function(){
        const concat = list => Array.prototype.concat.bind(list);
        const promiseConcat = f => x => f().then(concat(x));
        const promiseReduce = (acc, f) => acc.then(promiseConcat(f));
        return funcs => funcs.reduce(promiseReduce, Promise.resolve([]));
    })(),
   /**
    * Procedure for iterating thorught **Promise** function array `funcs`.
    * @method iterate_
    * @memberof module:jaaJSU~$async
    * @param {module:jaaJSU~$async~function_Undefined2Promise[]} iterablePromises Array of functions for iterating (the next always waiting fro previous Promise).
    * @return {Promise}
    * @.then {Mixed} Result of last function in `iterablePromises`
    * @.catch {Error} Error in `iterablePromises[nth]`
    * @example
    * const timeout= interval=> function(){return new Promise(function(resolve,reject){
    *     setTimeout(resolve, interval, interval);
    * });}
    * const timeouts= [ 50, 100, 150 ].map(timeout);
    * $async.serialize(timeouts).then(console.log).catch(console.error);
    * //log> 150
    */
    iterate_: function(iterablePromises){
        return new Promise(function(resolve, reject){
            let p= Promise.resolve();
            for(let i= 0, i_length= iterablePromises.length; i < i_length; i++){
                p= p.then(iterablePromises[i]);
            }
            p.then(resolve).catch(reject);
        });
    },
    /**
     * It is used in {@link module:jaaJSU~$async.iterateMixed_}
     * @property {Symbol} CANCEL
     * @memberof module:jaaJSU~$async
     */
    CANCEL: Symbol("$async.CANCEL"),
    /**
     * Like `iterate_`, but also allows iterate throught non-promise functions
     * 
     * @method iterateMixed_
     * @beta Use {@link module:jaaJSU~$async.iterate_}, {@link module:jaaJSU~$async.sequention_}, {@link module:jaaJSU~$async.each_}.
     * @memberof module:jaaJSU~$async
     * @param {...Promise|module:jaaJSU~$async~function_Undefined2Promise} tasks
     * @return {Promise}
     */
    iterateMixed_: function(...tasks){
        return new Promise(function(resolve, reject){
            return (function run(result){
                if(!tasks.length) return resolve(result);

                const task= tasks.shift();
                const value= typeof task==='function' ? task(result):task;

                // check against nil values
                if(value!==null){
                    if(value===$async.CANCEL) return;
                    if(value.then) return value.then(run);
                }

                return Promise.resolve(run(value));
            })();
        });
    },
   /**
    * Procedure for iterating throught **Promise** functions (wait pattern).
    * @method sequention_
    * @memberof module:jaaJSU~$async
    * @param {...module:jaaJSU~$async~function_Undefined2Promise} functions Functions for iterating (the next always waiting fro previous).
    * @return {Promise}
    * @.then {Mixed} Result of last function in `functions`
    * @.catch {Error} Error in `functions[nth]`
    */
    sequention_: function(...functions){return function(...input){return new Promise(function(resolve, reject){
        let p= Promise.resolve(...input);
        for(let i= 0, i_length= functions.length; i < i_length; i++){ p= p.then(functions[i]); }
        p.then(resolve).catch(reject);
    });};},
   /**
    * Procedure for iterating throught **Promise** functions (race pattern).
    * @method each_
    * @memberof module:jaaJSU~$async
    * @param {...module:jaaJSU~$async~function_MultipleMixed2Promise} functions Promises for iterating (race pattern).
    * @return {module:jaaJSU~$async~function_MultipleMixed2Promise}
    * @.then {Mixed} Result of last function in `functions`
    * @.catch {Error} Error in `functions[nth]`
    * @example
    * const timeout= interval=> function(){return new Promise(function(resolve,reject){
    *     setTimeout(resolve, interval, interval);
    * });}
    * const timeouts= [ 50, 100, 150 ].map(timeout);
    * $async.each_(...timeouts)().then(console.log).catch(console.error);
    * //log> [50, 100, 150]
    */
    each_: function(...functions){return function(...input){
        return Promise.all(functions.map(f=>f(...input)));
    };}
};
/**
 * Exported name of {@link module:jaaJSU~$async} namespace.
 * @namespace gulp_place("namespaces.$async", "eval_out")
 * @global
 */
gulp_place("global.sub.js", "file_once");/* global gulp_place, export_as */
export_as($async, gulp_place("namespaces.$async", "variable"));