/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/**
 * This NAMESPACE provides features for async (mainly Promise) functions.
 * @namespace $async
 * @class {namespace}
 */
var $async={
   /**
    * Procedure for iterating thorught **Promise** function array `funcs`.
    *
    * **Deprecated:** Use [iterate_](#methods_iterate_), [sequention_](#methods_sequention_), [each_](#methods_each_)
    * @method serialize
    * @param {...Promise} funcs
    *  * Array of Promises for iterating (the next always waiting fro previous Promise).
    * @return {Promise}
    *  * `then`
    *      * `<= prev` **\<Mixed\>**: result of prev function in `funcs`
    *  * `catch` 
    *      * `<= err` **\<Error\>**: Error in `funcs[nth]`
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
    * @param {...Promise} iterablePromises
    *  * Array of Promises for iterating (the next always waiting fro previous Promise).
    * @return {Promise}
    *  * `then`
    *      * `<= prev` **\<Mixed\>**: result of prev function in `iterablePromises`
    *  * `catch` 
    *      * `<= err` **\<Error\>**: Error in `iterablePromises[nth]`
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
     * @property {Symbol} CANCEL I used in iterateMixed_
     */
    CANCEL: Symbol("$async.CANCEL"),
    /**
     * Like `iterate_`, but also allows iterate throught non-promise functions
     * 
     * **Beta:**  Use [iterate_](#methods_iterate_), [sequention_](#methods_sequention_), [each_](#methods_each_)
     * @method iterateMixed_
     * @param  {Promise|Function} ...tasks
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
    * @param {Promise} ...functions
    *  * Promises for iterating (the next always waiting fro previous Promise).
    * @return {Promise}
    *  * `then`
    *      * `<= prev` **\<Mixed\>**: result of prev function in `functions`
    *  * `catch` 
    *      * `<= err` **\<Error\>**: Error in `functions[nth]`
    */
    sequention_: function(...functions){return function(...input){return new Promise(function(resolve, reject){
        let p= Promise.resolve(...input);
        for(let i= 0, i_length= functions.length; i < i_length; i++){ p= p.then(functions[i]); }
        p.then(resolve).catch(reject);
    });};},
   /**
    * Procedure for iterating throught **Promise** functions (race pattern).
    * @method each_
    * @param {Promise} ...functions
    *  * Promises for iterating (race pattern).
    * @return {Promise}
    *  * `then`
    *      * `<= prev` **\<Mixed\>**: result of prev function in `functions`
    *  * `catch`
    *      * `<= err` **\<Error\>**: Error in `functions[nth]`
    */
    each_: function(...functions){return function(...input){
        return Promise.all(functions.map(f=>f(...input)));
    };}
};
gulp_place("global.sub.js", "file_once");/* global gulp_place, export_as */
export_as($async, gulp_place("namespaces.$async", "variable"));