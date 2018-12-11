/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/**
 * Namespaces container (module) which registers namespaces into the global (typically `window`)
 * @module jaaJSU.{global}
 */
(function(module_name, factory) {
    'use strict';
    /* global define, factory, module, module_name, gulp_place *///gulp.keep.line
    let window_export;
    if (typeof define === 'function' && define.amd) {
        define([], function(){
            return factory(window, document);
        });
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(window, document);
    } else {
        window_export= factory(window, document);
        Object.keys(window_export).forEach(key=> window[key]= window_export[key]);
        window[module_name+"_version"]= "0.1.3";
    }
})("jaaJSU", function(window, document){
    'use strict';
    var out= {};
    function export_as(obj, key){ out[key]= obj; }
    function __eachInArrayLike(iterable, i_function){ const i_length= iterable.length; for(let i=0, j=i_length-1; i<i_length; i++, j--){ i_function(iterable[i],i,!j); } }
    /* tP
    * Slouzi k oznaceni povinnych parametru funkci
    * ...
    * parametry:
    *  tS parameter ~prazdne= doplneni jmena parametru "Missing parameter: "+parameter
    *  */
    function isMandatory(parameter){
        throw new Error('Missing parameter: '+parameter);
    }
    

    /**
     * This NAMESPACE provides features for Arrays.
     * @namespace $array
     * @class {namespace}
     */
    var $array= {
        /**
         * Function which calculate final index for cylce looping
         * Means from current index `i` get `s`th value in array which length is `l`
         * @method arrayIndex
         * @param {Number} i
         *  * Current index in array (typycally 0)
         * @param {Number} s
         *  * Steps from `i`
         * @param {Number} l
         *  * Array length
         * @return {Number}
         *  * Index in array
         * @example
         *  ```
         *      const a= ["0", "1"];
         *      console.log(a[0]===a[$array.arrayIndex(0,0,a.length)]);
         *      console.log(a[0]===a[$array.arrayIndex(1,1,a.length)]);
         *      console.log(a[0]===a[$array.arrayIndex(0,2,a.length)]);
         *  ```
         */
        arrayIndex: function(i,s,l){
            return (l+i+(s%l))%l;
        },
        /**
         * Procedure for iterating throught Array `iterable`.
         * @method each
         * @param {...Mixed} iterable
         *  * An array-like object for iterating.
         * @param {Function} i_function
         *  * This procedure is called for each element in `iterable` Array.
         *  * `i_function(value,index)`
         *      * `value` Mixed: Nth value for `key` in `iterable`.
         *      * `index` Number: Idicies 0...`Object.keys(iterable).length`.
         *      * `last` Boolean: Is setted True, if it is the last element in array.
         */
        each: __eachInArrayLike,
        /**
         * Function returns last element in array without editing the original.
         * @method getLast
         * @param {...Mixed} arr
         *  * Input array.
         * @returns {Mixed}
         *  * Last element in `arr`
         */
        getLast: function(arr){
            return arr[arr.length-1];
        },
        /**
         * Function returns methods for splitting array by condition.
         * @method partition
         * @param {...Mixed} arr
         *  * Input array.
         * @returns {Object}
         *  * `{headd, tail, onIndex, byCondition}`
         *      * `head: function()`: returns two items Array [x, ...xs] (first element and rest array)
         *      * `tail: function()`: returns two items Array [...xs, x] (rest array and last element)
         *      * `onIndex: function(index)`: returns two items Array [arr1, arr2] (splite original `arr` into two arrays on given index `index`)
         *      * `byCondition: function(fn)`: returns two items Array [arr1, arr2] (splite original `arr` into two arrays based on function `fn`)
         *          * `fn(curr, i)`
         *              * `curr` Mixed: Current element in array `arr`
         *              * `i` Number: Current index in array `arr`
         *              * **Returns** Boolean: 0/1 (True/false) if add to arr1/arr2
         */
        partition: function(arr){
            return {
                head: function(){
                    const [x, ...xs]= arr;
                    return [x, xs];
                },
                tail: function(){
                    let local_arr= [...arr];
                    const last= local_arr.pop();
                    return [local_arr, last];
                },
                onIndex: function(index){
                    let local_arr= [...arr];
                    return [local_arr.splice(0,index), local_arr];
                },
                byCondition: function(fn){
                    let out= [[],[]];
                    __eachInArrayLike(arr, (curr, i)=>out[+!Boolean(fn(curr, i))].push(curr));
                    return out;
                }
            };
        },
        /**
         * Function returns new array without any `item`
         * @method removeItem
         * @param {...Mixed} arr
         *  * Original array
         * @param {Mixed} item
         *  * Item for searching in `arr`
         *  * Make sence, if it is possible to compare with `===` operation
         * @returns {Array}
         *  * New {Array} from `arr` without `item`s
         */
        removeItem: function(arr, item) {
            let p_arr= [...arr];//p_arr==private_arr
            var i = 0;
            while (i < p_arr.length) {
                if (p_arr[i] === item) p_arr.splice(i, 1);
                else i++;
            }
            return p_arr;
        },
        /**
         * Function returns random number for Array.sort function
         * @method sortRandom
         * @returns {Number}
         *  * Number in interval <-0.5,0.5>
         */
        sortRandom: function(){
            return Math.random() - 0.5;
        }
    };
    export_as($array, "$array");
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

    export_as($async, "$async");

    /**
     * This NAMESPACE provides features for DOM elemnts.
     * @namespace $dom
     * @class {namespace}
     */
    var $dom={
        /* tF_
        * Zajistuje volani .then, az je DOM dostupny
        * ...
        * parametry:
        *  tNN ~= argumenty jsou do .then predavany jako pole,
        *      resp. pokud je jen jeden, je predan primo.
        * .then:
        *  tNN_= zadane parametry, viz vyse
        *  */
       /**
        * Calls `.then` when the DOM is ready
        * @method ready_
        * @param {Mixed} ...args
        *  * As params for `.then`
        * @return {Promise}
        *  * `.then`
        *      * `<= ...args` **\<Mixed\>**
        */
        ready_: function(...args){
            return new Promise(function(resolve) {
                function checkState() {
                    if(document.readyState!=='loading'){
                        document.removeEventListener('readystatechange', checkState);
                        resolve(...args);
                    }
                }
                if(document.readyState!=='loading') resolve(...args);
                else document.addEventListener('readystatechange', checkState);
            });
        },
       /**
        * Calls `.then` when the DOM element is available/reday (uses `requestAnimationFrame`)
        * @method elementReady_
        * @param {Object} el_selector
        *  * `el_selector.*`
        *      * Key is name of "selection" function ('querySelector, ..., getElementsByClassname, ...)
        *      * Value is argument for selection function
        *  * example: `{getElementsByClassname: "class_name"}`
        * @param {DOMElement} [parent=document]
        *  * Where to search `el_selector`
        * @return {Promise}
        *  * `.then`
        *      * Calls when `el` (see next line) ready
        *      * `<= el` **\<Node\>**: is DOM element based on `parent` and `el_selector` (`el= parent[el_selector[Object.keys(el_selector)[0]]](el_selector[el_selector[Object.keys(el_selector)[0]]])`)
        */
        elementReady_: function(el_selector, parent= document){
            const sel_key= Object.keys(el_selector)[0];
            const sel_val= el_selector[sel_key];
            return new Promise(function(resolve, reject){
                function check(){
                    const el= parent[sel_key](sel_val);
                    if(el) resolve(el);
                    else requestAnimationFrame(check); //...zajistuje cyklus
                }
                requestAnimationFrame(check);
            });
        },
       /**
        * Remove elements in given {NodeList} or {HTMLCollection}
        * @method removeElements
        * @param {NodeList|HTMLCollection} els_to_delete
        *  * Array(-like) object of elements
        * @param {Number} [from_index=0]
        *  * Params allowing skip elements in `els_to_delete`
        * @param {Number} [to_index=els_to_delete.lenght]
        *  * Params allowing skip elements in `els_to_delete`
        */
        removeElements: function(els_to_delete,from_index,to_index){
            from_index= from_index || 0;
            to_index= to_index || els_to_delete.length;
            let els_array= [];
            let j= 0;
            for(let i= from_index; i < to_index; i++){els_array[j++]= els_to_delete[i];}
            for(let i= 0, i_length= els_array.length; i < i_length; i++){els_array[i].remove();}
        },
        /**
         * Procedure for iterating throught Array `iterable`.
         * @method each
         * @param {...Mixed} iterable
         *  * An array-like object for iterating.
         * @param {Function} i_function
         *  * This procedure is called for each element in `iterable` Array.
         *  * `i_function(value,index)`
         *      * `value` Mixed: Nth value for `key` in `iterable`.
         *      * `index` Number: Idicies 0...`Object.keys(iterable).length`.
         *      * `last` Boolean: Is setted True, if it is the last element in array.
         */
        each: __eachInArrayLike
    };
    /**
     * Procedure for adding elements into the `parent` (in background use `createDocumentFragment`, `createElement`, `appendChild`)
     * @method add
     * @for $dom.{namespace}
     * @param parent {NodeElement}
     *  * Wrapper (for example `<ul>`) where to cerate children elements (for example `<li>`)
     * @param $$$ {...Array}
     *  * `[ [ __NAME__, __PARAMS__ ], [ __NAME__, __PARAMS__ ], ..., [ __NAME__, __PARAMS__ ] ]`
     *  * Element in array is automatically nested into the previous element. `[["UL",...], ["LI",...], ["SPAN",...]]` creates `<ul><li><span></span></li></ul>`
     *  * `__NAME__` **\<String\>**: Name of element (for example `LI`, `P`, `A`, ...)
     *  * `__PARAMS__` **\<Object\>**: Parameters for elements as "innerText", "className", "dataset", ...
     *      * `__PARAMS__.*`: In generall, uses similar naming for attributtes (setters) in _NodeElement_ (for example "textContent", "innerHTML", "className", "dataset", ...)
     *      * `__PARAMS__.dataset`: Works as excepted `["SPAN", {dataset: {param1: "value"}}] = <span data-param1="value"></span>`
     *      * `__PARAMS__.$`: Modify nesting behaviur (accepts index of element in `$$$`). `[["UL",...], ["LI",...], ["LI",{$:0,...}]]` creates `<ul><li></li><li></li></ul>`
     *      * `__PARAMS__.href`: Alias for `*.setAttribute("href", *)`
     *      * `__PARAMS__.style`: Alias for `*.setAttribute("style", *)`
     *      * `__PARAMS__.style_vars`: Calls `*.style.setProperty(__key__, __value__)` for each `__key__` in object
     * @return {NodeElement}
     *  * First created element (usualy wrapper thanks nesting)
     * @example
     *     $dom.add(ul_element,[
     *         ["LI", {className: "nejake-tridy", onclick: clickFCE}],
     *             ["SPAN", {innerText: "Prvni SPAN v LI"}],
     *             ["SPAN", {$:0, innerText: "Druhy SPAN v LI"}]
     *     ]);
     *     // = <ul><li class="nejake-tridy" onclick="clickFCE"><span>Prvni SPAN v LI</span><span>Druhy SPAN v LI</span></li></ul>
     *     // !!! VS !!!
     *     $dom.add(ul_element,[
     *         ["LI", {className: "nejake-tridy", onclick: clickFCE}],
     *             ["SPAN", {innerText: "Prvni SPAN v LI"}],
     *                 ["SPAN", {innerText: "Druhy SPAN v LI"}]
     *     ]);
     *     // = <ul><li class="nejake-tridy" onclick="clickFCE"><span>Prvni SPAN v LI<span>Druhy SPAN v LI</span></span></li></ul>
     */
    $dom.add= function(parent,$$$){
        let fragment= document.createDocumentFragment();
        let prepare_els= [], els= [];
        let el_param;
        for(var i=0, i_length= $$$.length; i<i_length;i++){
            prepare_els[i]= document.createElement($$$[i][0]);
            if(!i) els[i]= fragment.appendChild(prepare_els[i]);
            else if(typeof $$$[i][1].$!=="undefined"){
                els[i]= els[$$$[i][1].$].appendChild(prepare_els[i]);
                delete $$$[i][1].$;
            }
            else els[i]= els[i-1].appendChild(prepare_els[i]);
            el_param= Object.keys($$$[i][1]);
            for(let j=0, j_length= el_param.length; j<j_length; j++){
                switch(el_param[j]){
                    case "style":
                        els[i].setAttribute("style", $$$[i][1][el_param[j]]);
                        break;
                    case "style_vars":
                        for(let k=0, k_vars_keys= Object.keys($$$[i][1].style_vars), k_length= k_vars_keys.length; k<k_length; k++){
                            els[i].style.setProperty(k_vars_keys[k], $$$[i][1].style_vars[k_vars_keys[k]]);
                        }
                        break;
                    case "dataset":
                        for(let k in $$$[i][1].dataset){ els[i].dataset[k]= $$$[i][1].dataset[k]; }
                        break;
                    case "href":
                        els[i].setAttribute("href", $$$[i][1][el_param[j]]);
                        break;
                    default:
                        els[i][el_param[j]]= $$$[i][1][el_param[j]];
                        break;
                }
            }
        }
        parent.appendChild(fragment);
        if(i) return els[0];
    };
        /* tP
        * FCE zaridi prekresleni elementu, aby se na nem projevili nektere zmeny
        * ...jedna se o fix typicky pro iOS
        * parametry:
        *  tD element ~document.body= ES6 element selector
        *  */
    /**
     * Redraw element using cheat `*.offsetHeight`
     * @method forceRedraw
     * @for $dom.{namespace}
     * @param {NodeElement} [element=document.body]
     *  * Element for redraw
     */
    $dom.forceRedraw= function(element= document.body){
        let d= element.style.display;
        element.style.display= 'none';
        let trick= element.offsetHeight;
        element.style.display= d;
        //v2
        //document.documentElement.style.paddingRight = '1px';
        //setTimeout(()=>{document.documentElement.style.paddingRight = '';}, 0);
    };
    export_as($dom, "$dom");

    /**
     * This NAMESPACE provides features for async (mainly Promise) functions.
     * @namespace $function
     * @class {namespace}
     */
    var $function= {
        /**
         * Functional-like alternative for `for(...){functions[nth](..input);}`.
         * @method each
         * @param {Function} ...functions
         *  * `...functions[nth](..input){...}`
         *  * List of functions.
         * @return {Function}
         *  * For given `...input` calls all functions in `...functions` (use `...input` as arguments for these functions)
         *  * `<= ...input` **\<Mixed\>**: arguments for `...functions`
         */
        each: function(...functions){return function(...input){for(let i=0, i_length= functions.length; i<i_length; i++){ functions[i](...input); }}; },
        /**
         * Converts `...input`s to new Array based on `...functions`
         * @method map
         * @param {Function} ...functions
         *  * `...functions[nth](..input){...return __OUTPUT__;}`
         *  * `__OUTPUT__` element of final array
         *  * List of functions.
         * @return {Function}
         *  * For given `...input` calls all functions in `...functions` (use `...input` as arguments for these functions)
         *  * `<= ...input` **\<Mixed\>**: arguments for `...functions`
         *  * @return {Array}
         * @example
         *     console.log($function.map(
         *          a=>a+1,
         *          a=>a-1,
         *          a=>a+2,
         *          a=>a-2
         *      )(5));//= [6, 4, 7, 3]
         */
        map: function(...functions){return function(...input){let out= []; for(let i=0, i_length= functions.length; i<i_length; i++){ out.push(functions[i](...input)); } return out;}; },
        /**
         * Procedure for creating functional flow (sequention *function1->function2->...*). Particually similar to [each](#methods_each). But, as arguments for current function is used output frome previous function.
         * @method sequention
         * @param {Function} ...functions
         *  * List of functions.
         *  * `...functions[nth](__INPUT__){... return __OUTPUT__;}`
         *  * `__INPUT__` is `...input` (for first function) or `...__OUTPUT__`
         *  * `__OUTPUT__` must be **\<Array\>**! `...__OUTPUT__` is used as argument for next function in `...functions`.
         * @return {Function}
         *  * For given `...input` calls all functions in `...functions` (use `...input` as arguments for first function)
         *  * `<= ...input` **\<Mixed\>**: arguments for first function
         * @example
         *     console.log($function.sequention(
         *          a=>[a+1, a-1],
         *          (a,b)=>[b-1, a+1]
         *      )(5));//= [3, 7]
         * 
         *      console.log($function.sequention(
         *          a=>[a+1],
         *          a=>[a+2]
         *      )(5));//= [8]
         * 
         *     console.log($function.sequention(
         *          a=>a+1, //wrong non-array return
         *          a=>a+2  //wrong non-array return
         *      )(5));//...:4 Uncaught TypeError: (var)[Symbol.iterator] is not a function(…)
         */
        sequention: function(...functions){return function(...input){let current= input; for(let i=0, i_length= functions.length; i<i_length; i++){ current= functions[i](...current); } return current;};},
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

    export_as($function, "$function");
    
    
    /**
     * This NAMESPACE provides features for Objects.
     * @namespace $object
     * @class {namespace}
     */
    var $object= {
        /**
         * Function for iterating throught Object `iterable`.
         * @method each
         * @param {Object} iterable 
         *  * An object for iterating.
         * @param {Function} i_function
         *  * This procedure is called for each element in `iterable` Object.
         *  * `i_function(value,key,index)`
         *      * `value` Mixed: Nth value for `key` in `iterable`.
         *      * `key` String: Nth key.
         *      * `index` Number: Idicies 0...`Object.keys(iterable).length`.
         */
        each: function(iterable, i_function){ const iterable_keys= Object.keys(iterable); let iterable_keys_i; for(let i=0;(iterable_keys_i= iterable_keys[i]); i++){ i_function(iterable[iterable_keys_i],iterable_keys_i,i); }},
        /**
         * Function for converting Array `arr` to Object. Uses `fun` for converting.
         * @method fromArray
         * @param {Array} arr 
         *  * Array-like parameter.
         * @param {Function} fun
         *  * **Optional** [`fun= (acc, curr, i)=> acc[""+i]= curr`].
         *  * Function for converting. In fact, it is wrapper around `Array.reduce`.
         *  * `fun(acc,curr,i)`
         *      * `acc` Object: Reference link to output Object.
         *      * `curr` Mixed: Nth elemnt in Array `arr`.
         *      * `i` Number: Nth index of `arr`.
         * @param {Object} default_value
         *  * **Optional** [`default_value={}`].
         *  * Initial value.
         * @return {Object}
         *  * Created object.
         */
        fromArray: function(arr, fun= (acc, curr, i)=> acc[""+i]= curr, default_value= {}){return arr.reduce((acc, curr, i)=>{ fun(acc, curr, i); return acc; }, default_value);},
        /**
         * Wrapper around `Object.prototype.hasOwnProperty`.
         * @method hasProp
         * @param {Object} obj
         *  * **Mandatory**
         *  * Object where to search `prop`.
         * @param {String} prop
         *  * **Mandatory**
         *  * Poperty to searching for.
         * @return {Boolean}
         *  * True, if `obj` has property `prop`
         */
        hasProp: function(obj=isMandatory("obj"), prop=isMandatory("prop")) { return Object.prototype.hasOwnProperty.call(obj, prop); },
        /**
         * Function for creating non-rewritable object
         * @method immutable_keys
         * @param {Object} obj_input
         *  * **Optional** [`obj_input={}`]
         *  * Initial value
         * @return {Proxy}
         *  * getter `Proxy.key_name` Mixed: returns key_name if defined
         *  * getter `Proxy.set(key_name, value)` Function:
         *      * define `key_name` in object if isn't already defined (**returns True**, else **False**).
         *  * getter `Proxy.keys` Number: Wrapper around `Object.keys(*)`
         */
        immutable_keys: function(obj_input={}){
            return new Proxy(Object.keys(obj_input).reduce(function(obj,key){obj[key]= obj_input[key]; return obj;},{}),{
                get(target, command){
                    if(Object.keys(target).indexOf(command)!==-1){
                        return target[command];
                    } else {
                        switch(command){
                            case "set":
                                return setItemFCE(target);
                            case "keys":
                                return function(){return Object.keys(target);};
                            default:
                                return;
                        }
                        
                    }
                },
                set(){return false;}
            });
    
            function setItemFCE(target){
                return function(key, value){
                    if(Object.keys(target).indexOf(key)!==-1) return false;
                    target[key]= value;
                    return true;
                };
            }
        },
        /**
         * Wrapper around `object[key]`, usefull for binding.
         * @method pluck
         * @param {String} key
         *  * Key in Object `obj`.
         * @param {Object} object
         * @return {Mixed}
         *  * Value in `object[key]`
         */
        pluck: (key, object) => object[key],
    };

    export_as($object, "$object");
    /**
     * This NAMESPACE provides features for optimizations.
     * @namespace $optimizier
     * @class {namespace}
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
    };

    export_as($optimizier, "$optimiziers");
    /**
     * This NAMESPACE provides features for strings.
     * @namespace $string
     * @class {namespace}
     */
    var $string= {
        /**
         * Clear spaces (`\s+`) in `str`
         * @method clearSpaces
         * @param {String} str
         * @return {String}
         *  * Cleaned `str`
         */
        clearSpaces: function(str) {
            if(typeof str !== "string") return false;
            return str.replace(/\s+/g, "");
        },
        /**
         * @method countChars
         * @param {String} str
         * @return {Number}
         *  * Number of chars in `str`
         */
        countChars: function(str){
            if(typeof str !== "string") return false;
            const str_length= str.length;
            let counter= 0;
            let char_code;
            for(let i=0; i<str_length; i++){
                char_code= str.charCodeAt(i);
                counter+= (char_code==94 || char_code>127) ? 2 : 1;
            }
            return counter;
        },
        /**
         * @method generateUnique
         * @return {String}
         *  * An unique string
         */
        generateUnique(){
            return (new Date()).getTime()+"_"+(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g, (""+Math.random()).charAt(0)).substr(0, 10);
        },
        /**
         * Wrapper around `*.substring(*,*)`
         * @method getSubstring
         * @param {String} str
         * @param {Number} len
         *  * How many chars
         * @param {Number} [start=0]
         * @return {String}
         *  * Substring of `str`
         */
        getSubstring: function(str, len, start= 0) {
            if(start < 0) start= 0;
            if (str.length > len+start) {str = str.substring(start, len);}
            return str;
        },
        /* 
        * FCE pro "pricitani" pismen ve stringu
        * ...vraci nasledujici pismenko, resp. pismenko posunute o inc
        * parametry:
        *  tS str= [a-zA-Z] alespon na pozici pos
        *  tN inc ~1= cislo posunu - i zaporne
        *  tN pos ~posledni pismenko= index pozice
        * vraci:
        *  tS string bud puvodni, nebo "posunuty"
        *  */
       /**
        * @method letterInc
        * @param {String} str
        *  * [a-zA-z] at least on position `pos`
        * @param {Number} [inc=1]
        *  * `inc=0` is convert to `inc=1`
        * @param {Number} [pos=str.length-1]
        * @return {String}
        *  * New string with "highter" letter on position `pos`
        * @example
        *     console.log($string.letterInc("125"));//="126"
        *     console.log($string.letterInc("125a"));//="125b"
        *     console.log($string.letterInc("HH"));//="HI"
        *     console.log($string.letterInc("Hg", 2, 1));//="Hi"
        */
        letterInc: function(str, inc, pos){
            if(typeof pos === "undefined") pos= str.length-1;
            let ch= str.charCodeAt(pos);
            inc || (inc= 1);
            let ch_out, output;
            
            if(!ch) ch=0;
            else if(ch<65) ch=65;
            else if(ch>90&&ch<97) ch=97;
            else if(ch>122) ch=122;
            ch_out= ch+inc;
            if(ch===0||ch_out<65) output=false;
            else if(ch_out>90&&ch_out<97) output=false;
            else if(ch_out>122) output=false;
            else output= String.fromCharCode(ch_out);
            if(output) str= str.substr(0,pos) + output + str.substr(pos+1);
            return str;
        },
        /**
         * Escapes "<", ">", "&", '"', "'"
         * @method escapeHTML
         * @param {String} str
         * @return {String}
         *  * Escaped text
         */
        escapeHTML: function(str){
            var replacements= {"<": "&lt;", ">": "&gt;","&": "&amp;", "\"": "&quot;"};
            return str.replace(/[<>&"]/g,(character)=>replacements[character]);
        },
        /**
         * Clear tags from `str`
         * @method clearHTML
         * @param {String} str
         * @return {String}
         *  * Text without HTML tags
         */
        clearHTML: function(str){
            var div= document.createElement('div');
            div.innerHTML= str;
            return div.textContent;
        },
       /**
        * @method containsRepeatingChars
        * @param {String} str
        * @param {Number} [quantity=2]
        * @return {Boolean}
        * @example
        *     console.log($string.containsRepeatingChars("AAbcd"));//=false
        *     console.log($string.containsRepeatingChars("AAAbcd"));//=true
        *     console.log($string.containsRepeatingChars("AAAbcd", 3));//=false
        */
        containsRepeatingChars: function(str, quantity= 2){
            if(typeof str !== "string") return false;
            let re= new RegExp("(\\S)(\\1{"+quantity+",})","g");
            str= str.replace(/\s+/g,"_");
            return re.test(str);
        },
       /**
        * @method containsSequential
        * @param {String} str
        * @param {Number} [quantity=2]
        * @return {Boolean}
        * @example
        *     console.log($string.containsSequential("ABccc"));//=false
        *     console.log($string.containsSequential("ABCdd"));//=true
        *     console.log($string.containsSequential("ABCdd", 3));//=false
        */
        containsSequential: function(str, quantity){
            if(typeof str !== "string") return false;
            quantity= quantity || 2;
            let out= false;
            let seq= +str[0], repeat_count=1;
            for(let i= 1, i_length= str.length; i < i_length; i++){
                if(+str[i]-repeat_count===seq&&!out){
                    if(++repeat_count>quantity){
                        out= true;
                    }
                } else if(!out) {
                    seq= +str[i];
                    repeat_count= 1;
                }
            }
            if(!out){
                seq= String.fromCharCode(str.charCodeAt(0));
                repeat_count=1;
                for(let i= 1, i_length= str.length; i < i_length; i++){
                    if(this.letterInc(String.fromCharCode(str.charCodeAt(i)),-repeat_count)===seq&&!out){
                        if(++repeat_count>quantity){
                            out= true;
                        }
                    } else if(!out) {
                        seq= String.fromCharCode(str.charCodeAt(i));
                        repeat_count= 1;
                    }
                }
            }
            return out;
        },
        /**
         * @method isEmail
         * @param {String} email_candidate
         * @return {Boolean}
         */
        isEmail: function(email_candidate){
            /*_@_*/ let e= email_candidate.split("@"); if(e.length!==2) return false;
            /*_@_._*/ e= [e[0], ...e[1].split(".")]; if(e.length!==3) return false;
            const _e= !/(#|\?|!|\\|\/|\||\.\.)/i.test(e[0]); return _e && e.reduce((r,o)=>r&&o.length>1&&!/\s/.test(o), _e);
        },
        /**
         * Wrapper around `*.trim()`
         * @method isFilled
         * @param {String} str
         * @return {String|Boolean}
         */
        isFilled: function(str){
            if(typeof str !== "string") return false;
            return str.trim() ? str : false;
        },
        /**
         * Alternative to ` ```text with ${variable}``` ` (like `sprintf()`)
         * @method template
         * @param {String} str
         *  * Text which contains `${0}, ${var}, ...`
         * @return {Object}
         *  * `{execute, partial, isSubstituted}`
         *      * String **execute** ( [ `params_obj` ={}] )
         *          * [ `params_obj` ={}] {Object}
         *              * Keys corresponding to `${0}, ${var}, ...` in `str`
         *          * **Returns:** String
         *              * New string with replaced vars
         *      * String **partial** ( [ `params_obj` ={}] )
         *          * Replace inside `str`
         *          * [ `params_obj` ={}] {Object}
         *              * Keys corresponding to `${0}, ${var}, ...` in `str`
         *          * **Returns:** String
         *              * `str` with replaced vars
         *      * Boolean **isSubstituted** ()
         *          * **Returns:** Boolean
         *              * If `str` contains `${0}, ${var}, ...`
         * @example
         *     const test1= $string.template("${0}, ${1}, ${2}");
         *     console.log(test1.partial(["A"]));//="A, ${1}, ${2}"
         *     console.log(test1.execute(["B", "C", "D"]));//="A, C, D"
         *     console.log(test1.isSubstituted());//=false
         *     console.log(test1.partial(["_", "B", "C"]));//="A, B, C"
         *     console.log(test1.isSubstituted());//=true
         * 
         *     const test2= $string.template("${test0}, ${test1}, ${test2}");
         *     console.log(test2.partial({test0: "A"}));//="A, ${test1}, ${test2}"
         *     console.log(test2.execute({test0: "B", test1: "C", test2: "D"}));//="A, C, D"
         *     console.log(test2.isSubstituted());//=false
         *     console.log(test2.partial({test0: "_", test1: "B", test2: "C"}));//="A, B, C"
         *     console.log(test2.isSubstituted());//=true
         */
        template: function(str){
            if(typeof str !== "string") throw Error("Type of 'str' is not string!");
            const reg= /\$\{([\s]*[^;\s\{]+[\s]*)\}/g;
            return Object.freeze({
                execute,
                partial: function(params_obj={}){
                    str= execute(params_obj); return str;
                },
                isSubstituted: function(){
                    return !reg.test(str);
                }
            });
            function execute(params_obj={}){
                const params_obj_keys= Object.keys(params_obj);
                if(!params_obj_keys.length) return str;
                return str.replace(reg, replaceHandler);
                function replaceHandler(_, match){return params_obj_keys.indexOf(match)!==-1 ? params_obj[match] : "${"+match+"}";}
            }
        }
    };

    export_as($string, "$string");
    /* global console *///gulp.keep.line
    /**
     * This NAMESPACE provides features for time.
     * @namespace $time
     * @class {namespace}
     */
    var $time={
       /**
        * @method getOrdinalSuffix
        * @param {Number} n
        * @return {String}
        *  * `n`+English suffix
        * @example
        *     console.log($time.getOrdinalSuffix(1));//"1st"
        */
        getOrdinalSuffix: function(n) {
            if(typeof n!=="number") n= parseInt(n);
            if(isNaN(n)) return false;
            let s= ["th","st","nd","rd"];
            let v= n%100;
            return n+(s[(v-20)%10]||s[v]||s[0]);
        },
       /**
        * @method getMonthName
        * @param {Number} n
        *  * Month number (typically [1-12])
        *  * Works cyclically `13===1, ...`
        * @param {Number|Boolean} [l=undefined]
        *  * Length of output Month name
        * @return {String}
        *  * English month name
        * @example
        *     console.log($time.getMonthName(5));//"May"
        *     console.log($time.getMonthName(24, 4));//"Dece"
        */
        getMonthName: function(n,l) {
            if(typeof n!=="number") n= parseInt(n);
            if(isNaN(n)) return false;
            let s= ["December","January","February","March","April","May","June", "July","August","September","October","November"];
            let v= s[n%12];
            if(l){
                if(l===-1){l=3; if(v.length===4) l=4;}
                v= v.substring(0,l);
            }
            return v;
        },
       /**
        * Function returns timestamp in the form of "YYYY-MM-DD HH:MM:SS". Uses [double](#methods_double)
        * @method getTimeStamp
        * @param {Number|Boolean} [time=undefined]
        *  * Uses as argument for `new Date(*)`
        * @return {String}
        *  * Timestamp
        */
        getTimeStamp: function(time) {
            let now= time? new Date(time) : new Date();
            return  now.getFullYear()+'-'+
                    this.double(now.getMonth() + 1)+'-'+
                    this.double(now.getDate())+' '+
                    this.double(now.getHours())+':'+
                    this.double(now.getMinutes())+':'+
                    this.double(now.getSeconds());
        },
       /**
        * Function returns timestamp in the form of "YYYY-MM-DD". Uses [double](#methods_double)
        * @method getDateStamp
        * @param {Number|Boolean} [time=undefined]
        *  * Uses as argument for `new Date(*)`
        * @return {String}
        *  * Datestamp
        */
        getDateStamp: function(time) {
            let now= time? new Date(time) : new Date();
            return  now.getFullYear()+'-'+
                    this.double(now.getMonth() + 1)+'-'+
                    this.double(now.getDate());
        },
       /**
        * Function returns timestamp in the form of "HH:MM:SS". Uses [double](#methods_double)
        * @method getTimeString
        * @param {Number|Boolean} [time=undefined]
        *  * Uses as argument for `new Date(*)`
        * @return {String}
        *  * Time string
        */
        getTimeString: function(time) {
            let now= time? new Date(time) : new Date();
            return  this.double(now.getHours())+':'+
                    this.double(now.getMinutes())+':'+
                    this.double(now.getSeconds());
        },
       /**
        * Function returns how much is `time` bigger than `refference_time`. Uses [getTimeStamp](#methods_getTimeStamp), [getDateStamp](#methods_getDateStamp), [getTimeString](#methods_getTimeString)
        * @method getDiff
        * @param {Number} time
        *  * Argument for `new Date(*)` or `getTimeStamp`, `getDateStamp`, `getTimeString`
        * @param {Number|Boolean} [refference_time=undefined]
        *  * Must be convertable into the same format like `time`
        * @return {Number}
        *  * Time diff in ms
        */
        getDiff: function(time, refference_time){
            var time_now;
            switch(time.length){
                case 19:
                    time_now= $time.getTimeStamp(refference_time);
                    break;
                case 10:
                    time_now= $time.getDateStamp(refference_time);
                    break;
                case 8:
                    time_now= refference_time ? $time.getTimeString(refference_time) : $time.getTimeStamp(refference_time);
                    time= $time.getDateStamp()+" "+time;
                    break;
                default:
                    console.error('Unknown error!');
                    return 0;
            }
            //console.log(time, time_now); DELETE
            return (new Date(time)).getTime() - (new Date(time_now)).getTime();
        },
       /**
        * Function adds leading zero to the `time`
        * @method double
        * @param {Number|String} time
        * @return {String}
        *  * 00, 01, 02, ..., 09, 10, ..., 100, ...
        */
        double: function(time) {
            time= time.toString();
            if (time.length==1) return "0" + time;
            else if (time.length==2) return time;
            else return "00";
        }
    };

    export_as($time, "$time");
    return out;
});
