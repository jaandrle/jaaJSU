/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
var $async={
    /* stara fce ==> postupne nahradit iterate_
    * 
    * Zesekvencneni Promise instanci (v core.js fce koncici '_')
    * ...jedna se o scope vracici funkci, tedy "$async.serialize= function(funcs){...}"
    * parametry:
    *  funcs= pole async funkci (instance Promise)
    * vraci:
    *  then= prikaz, ktery se ma provest na konci
    *  */
    serialize: (function(){
        const concat = list => Array.prototype.concat.bind(list);
        const promiseConcat = f => x => f().then(concat(x));
        const promiseReduce = (acc, f) => acc.then(promiseConcat(f));
        return funcs => funcs.reduce(promiseReduce, Promise.resolve([]));
    })(),
    /* tF_
    * Iterace pres Promise instance (v core.js fce koncici '_')
    * ...jedna se o nahradu $async.serialize (obecnejsi + rychlejsi)
    * parametry:
    *  tF_ iterablePromises= pole funkci, ktere se budou volat vc. .then(...).catch(...)
    *                    (typicky pole: [()=>{...zde Promise()...}, ...])
    * vraci:
    *  tF_ then= prikaz, ktery se ma provest na konci
    *  tF_ catch= by nemel vracet asi nic
    * 
    * TODO: zjistit, zda dava smysl catch
    *  */
    iterate_: function(iterablePromises){
        return new Promise(function(resolve, reject){
            let p= Promise.resolve();
            for(let i= 0, i_length= iterablePromises.length; i < i_length; i++){
                p= p.then(iterablePromises[i]);
            }
            p.then(resolve).catch(reject);
        });
    },
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