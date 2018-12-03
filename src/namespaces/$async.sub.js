/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/**
 * This NAMESPACE provides features for async (mainly Promise) functions.
 * @class $async
 * @extends Global
 */
var $async={
   /**
    * Procedure for iterating thorught **Promise** function array `funcs`.
    * @method serialize
    * @deprecated Use #iterate_
    * @param {Array} funcs
    *  * `funcs[*]` **\<Promise\>**
    *  * Promises for iterating (the next always waiting fro previous Promise).
    * @throws {Promise}
    *  * `then` **\<Mixed\>**
    *      * Depends on functions in `funcs`
    *  * `catch` **\<Error\>**
    *      * Handle errors in `funcs[*]`
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
    * @param {Array} iterablePromises
    *  * `iterablePromises[*]` **\<Promise\>**
    *  * Promises for iterating (the next always waiting fro previous Promise).
    * @throws {Promise}
    *  * `then` **\<Mixed\>**
    *      * Depends on functions in `iterablePromises`
    *  * `catch` **\<Error\>**
    *      * Handle errors in `iterablePromises[*]`
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
    * Procedure for iterating thorught **Promise** function array `funcs`.
    * @method sequention_
    * @param {Promise} ...functions
    *  * Promises for iterating (the next always waiting fro previous Promise).
    * @throws {Promise}
    *  * `then` **\<Mixed\>**
    *      * Depends on functions in `...functions`
    *  * `catch` **\<Error\>**
    *      * Handle errors in `...functions`
    */
    sequention_: function(...functions){return function(...input){return new Promise(function(resolve, reject){
        let p= Promise.resolve(...input);
        for(let i= 0, i_length= functions.length; i < i_length; i++){ p= p.then(functions[i]); }
        p.then(resolve).catch(reject);
    });};},
    each_: function(...functions){return function(...input){
        return Promise.all(functions.map(f=>f(...input)));
    };}
};
gulp_place("global.sub.js", "file_once");/* global gulp_place, export_as */
export_as($async, gulp_place("namespaces.$async", "variable"));