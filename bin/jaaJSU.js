/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/**
 * @module jaaJSU
 * @version 0.8.1
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
        window[module_name+"_version"]= "0.8.1";
    }
})("jaaJSU", function(window, document){
    'use strict';
    var out= {};
    /**
     * This kind of function is typically used in `Array.prototype.filter`.
     * @function function_filterCallback
     * @category types description
     * @param {Mixed} i_value Nth value of array.
     * @param {Number} i Nth key of array.
     * @returns {Boolean}
     */
    /**
     * This kind of function is typically used in `Array.prototype.reduce`.
     * @function function_reduceCallback
     * @category types description
     * @param {Mixed} accumulator
     * @param {Mixed} i_value Nth value of array.
     * @param {Number} i Nth key of array.
     * @returns {Mixed} accumulator
     */
    /**
     * @typedef {Object} IterableArrayObject
     * @category types description
     * @property {Mixed} item Nth value for `key` in `iterable`.
     * @property {Number} key Idicies 0...`iterable.length`.
     * @property {Boolean} last Is setted True, if it is the last element in array.
     * @property {Mixed|Undefined} share shared variable - works similar to `*.reduce` method
     */
    /**
     * @function IterableCallback
     * @category types description
     * @param {module:jaaJSU~IterableArrayObject} IterableArrayObject
     * @returns {Mixed|Undefined} `share` key of {@link IterableArrayObject}.
     */
    function export_as(obj, key){ out[key]= obj; }
    function __eachInArrayLike(iterable, i_function, scope, share){
        const key_length= iterable.length;
        for(let key=0, j=key_length-1; key<key_length; key++, j--){
            share= i_function.call(scope, { item: iterable[key], last: !j, key, share });
        }
        return share;
    }
    function __eachInArrayLikeDynamic(iterable, i_function, scope, share){
        for(let key=0; key<iterable.length; key++){
            share= i_function.call(scope, { item: iterable[key], key, share });
        }
        return share;
    }
    
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
     * @category namespaces
     */
    var $array= {
        /**
         * Function which calculate final index for cylce looping.
         * Means from current index `i` get `s`th value in array which length is `l`.
         * @method arrayIndex
         * @memberof module:jaaJSU~$array
         * @param {Number} i Current index in array (typycally 0)
         * @param {Number} s Steps from `i`
         * @param {Number} l Array length
         * @return {Number} Index in array
         * @example
         * const a= ["0", "1"];
         * console.log(a[0]===a[$array.arrayIndex(0,0,a.length)]);
         * console.log(a[0]===a[$array.arrayIndex(1,1,a.length)]);
         * console.log(a[0]===a[$array.arrayIndex(0,2,a.length)]);
         */
        arrayIndex: function(i,s,l){
            return (l+i+(s%l))%l;
        },
        /**
         * Procedure for iterating throught Array `iterable`.
         * @method each
         * @memberof module:jaaJSU~$array
         * @param {Mixed[]} iterable An array-like object for iterating.
         * @param {module:jaaJSU~IterableCallback} i_function
         * @param {Object|undefined} scope An argument for `i_function.call(*,...)`
         * @return {Mixed} `share`
         */
        each: __eachInArrayLike,
        /**
         * Procedure for iterating throught Array `iterable` like {@link module:jaaJSU~$array.each}, but use `for(...;(item= iterable[i]);i++)...`.
         * @method eachDynamic
         * @memberof module:jaaJSU~$array
         * @param {Mixed[]} iterable An array-like object for iterating.
         * @param {module:jaaJSU~IterableCallback} i_function
         * @param {Object|undefined} scope An argument for `i_function.call(*,...)`
         * @return {Mixed} `share`
         */
        eachDynamic: __eachInArrayLikeDynamic,
        /**
         * Function returns last element in array without editing the original.
         * @method getLast
         * @memberof module:jaaJSU~$array
         * @param {Mixed[]} arr Input array.
         * @returns {Mixed} Last element in `arr`
         */
        getLast: function(arr){
            return arr[arr.length-1];
        },
        /**
         * Methods around array `arr` exported by {@link module:jaaJSU~$array.partition} method.
         * @typedef {Object} instance_partition
         * @memberof module:jaaJSU~$array
         * @inner
         * @category types descriptions
         */
        /**
         * Function returns methods for splitting array by condition.
         * @method partition
         * @memberof module:jaaJSU~$array
         * @param {Mixed[]} arr Input array.
         * @returns {module:jaaJSU~$array~instance_partition}
         */
        partition: function(arr){
            return {
                /**
                 * @method head
                 * @memberof module:jaaJSU~$array~instance_partition
                 * @returns {Array} two items Array `[x, ...xs]` (first element and rest array)
                 */
                head: function(){
                    const [x, ...xs]= arr;
                    return [x, xs];
                },
                /**
                 * @method tail
                 * @memberof module:jaaJSU~$array~instance_partition
                 * @returns {Array} two items Array `[...xs, x]` (rest array and last element)
                 */
                tail: function(){
                    let local_arr= [...arr];
                    const last= local_arr.pop();
                    return [local_arr, last];
                },
                /**
                 * @method onIndex
                 * @memberof module:jaaJSU~$array~instance_partition
                 * @param {Number} index Position (in fact for `*.splice(0, index)`) where to split array.
                 * @returns {Array[]} Two items Array [arr1, arr2]
                 */
                onIndex: function(index){
                    let local_arr= [...arr];
                    return [local_arr.splice(0,index), local_arr];
                },
                /**
                 * @method byCondition
                 * @memberof module:jaaJSU~$array~instance_partition
                 * @param {function_filterCallback} fn In fact index of inner array (see return part).
                 * @returns {Array[]} Two items Array [arr1, arr2] based on `fn`.
                 */
                byCondition: function(fn){
                    let out= [[],[]];
                    __eachInArrayLike(arr, ({item, key})=>out[+!Boolean(fn(item, key))].push(item));
                    return out;
                }
            };
        },
        /**
         * Function returns new array without any `item`
         * @method removeItem
         * @memberof module:jaaJSU~$array
         * @param {Mixed[]} arr Original array
         * @param {Mixed} item Item for searching in `arr`. Make sence, if it is possible to compare with `===` operation
         * @returns {Array} New {Array} from `arr` without `item`s
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
         * @memberof module:jaaJSU~$array
         * @returns {Number} Number in interval <-0.5,0.5>
         */
        sortRandom: function(){
            return Math.random() - 0.5;
        }
    };
    /**
     * Exported name of {@link module:jaaJSU~$array} namespace.
     * @namespace $array
     * @global
     */
    export_as($array, "$array");
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
     * @namespace $async
     * @global
     */

    export_as($async, "$async");

    /**
     * This NAMESPACE provides features for DOM elemnts.
     * @namespace $dom
     * @category namespaces
     */
    var $dom={
        /**
         * Calls `.then` when the DOM is ready
         * @method ready_
         * @memberof module:jaaJSU~$dom
         * @param {...Mixed} args As params for `.then`
         * @return {Promise}
         * @.then {Mixed} See `args`
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
         * Key is name of "selection" function ('querySelector, ..., getElementsByClassname, ...).
         * Value is argument for selection function
         * @typedef {Object} DomPreparedSelector
         * @memberof module:jaaJSU~$dom
         * @category virtual
         * @example
         * { getElementsByClassname: "class_name" }
         */
        /**
         * Calls `.then` when the DOM element is available/reday (uses `requestAnimationFrame`)
         * @method elementReady_
         * @memberof module:jaaJSU~$dom
         * @param {module:jaaJSU~$dom.DomPreparedSelector} el_selector
         * @param {DOMElement} [parent=document] Where to search `el_selector`
         * @return {Promise}
         * @.then {NodeElement} Target elemnet based on `el_selector`
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
         * Procedure remove children of given element `container`.
         * @method empty
         * @memberof module:jaaJSU~$dom
         * @param {NodeElement} container Remove all its children
         */
        empty: function(container){
            let len = container.childNodes.length;
            while(len--){ container.removeChild(container.lastChild); }
        },
        /**
         * Procedure places `new_element` after `reference` elements
         * @method insertAfter
         * @memberof module:jaaJSU~$dom
         * @param {NodeElement} new_element
         * @param {NodeElement} reference
         */
        insertAfter: function(new_element, reference){
            const { parentNode, nextSibling }= reference;
            if(nextSibling) parentNode.insertBefore(new_element, nextSibling);
            else parentNode.appendChild(new_element);
        },
       /**
        * Remove elements in given {NodeList} or {HTMLCollection}
        * @method removeElements
        * @memberof module:jaaJSU~$dom
        * @param {NodeList|HTMLCollection} els_to_delete Array(-like) object of elements
        * @param {Number} [from_index=0] Params allowing skip elements in `els_to_delete`
        * @param {Number} [to_index=els_to_delete.lenght] Params allowing skip elements in `els_to_delete`
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
         * Procedure replaces `el_old` element by new one (`new_el`)
         * @method replace
         * @memberof module:jaaJSU~$dom
         * @param {NodeElement} el_old
         * @param {NodeElement} el_new
         */
        replace: function(el_old, el_new){
            $dom.insertAfter(el_new, el_old);
            el_old.remove();
        },
        /**
         * Alias for `element.setAttribute(attribute_name, element.getAttribute(attribute_name) === attribute_a ? attribute_b : attribute_a)`
         * @method toggleAttribute
         * @memberof module:jaaJSU~$dom
         * @param {NodeElement} element Element target
         * @param {String} attribute_name Name of attribute
         * @param {String} attribute_a Value of attribute
         * @param {String} attribute_b Value of attribute
         * @return {String} `attribute_a` or `attribute_b`
         */
        toggleAttribute: function(element, attribute_name, attribute_a, attribute_b){
            const attribute_new= element.getAttribute(attribute_name) === attribute_a ? attribute_b : attribute_a;
            element.setAttribute(attribute_name, attribute_new);
            return attribute_new;
        },
        /**
         * Alias for `element.dataset[data_name]= element.dataset[data_name] === data_a ? data_b : data_a`
         * @method toggleDataset
         * @memberof module:jaaJSU~$dom
         * @param {NodeElement} element Element target
         * @param {String} data_name Name of dataset key
         * @param {String} data_a Name of dataset value
         * @param {String} data_b Name of dataset
         * @return {String} `data_a` or `data_b`
         */
        toggleDataset: function(element, data_name, data_a, data_b){
            return ( element.dataset[data_name]= element.dataset[data_name] === data_a ? data_b : data_a );
        },
        /**
         * Procedure for iterating throught NodeList `iterable`.
         * @method each
         * @memberof module:jaaJSU~$dom
         * @param {Mixed[]} iterable An array-like object for iterating.
         * @param {types.IterableCallback} i_function
         * @param {Object|undefined} scope An argument for `i_function.call(*,...)`
         * @return {Mixed} `share`
         */
        each: __eachInArrayLike,
        /**
         * Procedure for iterating throught NodeList `iterable` like {@link module:jaaJSU~$dom.each}, but use `for(...;(item= iterable[i]);i++)...`.
         * @method eachDynamic
         * @memberof module:jaaJSU~$dom
         * @param {Mixed[]} iterable An array-like object for iterating.
         * @param {types.IterableCallback} i_function
         * @param {Object|undefined} scope An argument for `i_function.call(*,...)`
         * @return {Mixed} `share`
         */
        eachDynamic: __eachInArrayLikeDynamic
    };
    /* standalone= "standalone"; */
    /**
     * In generall, all methods from {@link module:jaaJSU~$dom~instance_component} don't do anything. Also during "mounting" there are some changes see method {@link module:jaaJSU~$dom~instance_componentEmpty.mount}.
     * @typedef instance_componentEmpty
     * @memberof module:jaaJSU~$dom
     * @category types descriptions
     * @inner
     * @type {module:jaaJSU~$dom~instance_component}
     */
    const $dom_emptyPseudoComponent= (function(){
        const share= { mount, update, destroy, isStatic };
        const component_out= { add, component, mount, update, share };
        return component_out;
        /**
         * The same syntax as {@link module:jaaJSU~$dom~instance_component.mount}. But only "replace"/"replaceContent" types makes sence (deleting/replacing by "empty space").
         * @method mount
         * @memberof module:jaaJSU~$dom~instance_componentEmpty
         */
        function mount(element, type= "childLast"){
            // let temp_el;
            switch ( type ) {
                case "replace":
                    element.remove();
                    break;
                case "replaceContent":
                    $dom.empty(element);
                    break;
                // case "before":
                //     temp_el= element.previousElementSibling;
                //     if(temp_el) temp_el.remove();
                //     break;
                // case "after":
                //     temp_el= element.nextElementSibling;
                //     if(temp_el) temp_el.remove();
                //     break;
                // default:
                //     if(element.childNodes.length) element.childNodes[type==="childFirst" ? 0 : element.childNodes.length-1].remove();
                //     break;
            }
            return null;
        }
        function add(){ return component_out; }
        function component(){ return component_out; }
        function update(){ return true; }
        function isStatic(){ return true; }
        function destroy(){ return null; }
    })();
    /**
     * This 'functional class' is syntax sugar around [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) for creating DOM components and their adding to live DOM in performance friendly way.
     * @method component
     * @memberof module:jaaJSU~$dom
     * @version 1.0.0
     * @see {@link https://github.com/jaandrle/dollar_dom_component}
     * @param {String} [el_name="EMPTY"] Name of element (for example `LI`, `P`, `A`, …). This is parent element of component. By default the "empty" element is generated.
     * @param {module:jaaJSU~$dom~DomAssignObject} attrs The second argument for {@link module:jaaJSU~$dom.assign}
     * @param {Object} [params= {}] Parameters
     * @param {Function|Undefined} [params.mapUpdate=Undefined] This function (if defined) remap `update(DATA)` to varibales used in keys `attrs.onupdate` … see method {@link module:jaaJSU~$dom~instance_component.add}
     * @return {module:jaaJSU~$dom~instance_componentAdd|module:jaaJSU~$dom~instance_componentEmpty} Returns `ComponentEmpty` when `el_name` is **"EMPTY"**!
     */
    $dom.component= function(el_name, attrs, { mapUpdate }={}){
        if(typeof el_name==="undefined" || el_name.toUpperCase()==="EMPTY") return $dom_emptyPseudoComponent;
        let /* holds `initStorage()` if `onupdate` was registered */
            internal_storage= null;
        const /* 'drawer' (container) for component elements */
            fragment= document.createDocumentFragment();
        let /* main parent (wrapper), container for children elements */
            container,
            /* store for all registered elements */
            els= [], all_els_counter= 0,
            /* current elements deep which holds indicies of elements:
                - add(...);add(...); = final deep=[0,1];
                - add(...);add(...,-1);add(...) = final deep=[1,2]; (by steps: [0], [0,1], [1,2])
                - see `shift` in `add`
            */
            deep= [];
        const share= { mount, update, destroy, isStatic };
        const component_out= { add, addText, component, setShift, mount, update, share };
        /**
         * Its purpose is to make easy transfering methods somewhere else (like for using in another component, see {@link module:jaaJSU~$dom~instance_component.component} method).
         * @typedef share
         * @memberof module:jaaJSU~$dom~instance_component
         * @borrows module:jaaJSU~$dom~instance_component.mount as mount
         * @borrows module:jaaJSU~$dom~instance_component.update as update
         * @type {Object}
         */
        /**
         * This is minimal export of "functional class" {@link module:jaaJSU~$dom.component} and its methods (if they are chainable).
         * @typedef instance_component
         * @memberof module:jaaJSU~$dom
         * @category types descriptions
         * @inner
         * @type {Object}
         */
        return add(el_name, attrs);
        /**
         * This is `Component` with aditional methods
         * @typedef instance_componentAdd
         * @memberof module:jaaJSU~$dom
         * @category types descriptions
         * @inner
         * @type module:jaaJSU~$dom~instance_component
         */
        /**
         * This add element to component
         * @method add
         * @memberof module:jaaJSU~$dom~instance_component
         * @public
         * @chainable
         * @param {String} el_name Name of element (for example `LI`, `P`, `A`, ...).
         * @param {module:jaaJSU~$dom~DomAssignObject} attrs Internally uses {@link module:jaaJSU~$dom.assign}, `null`\|`undefined` is also supported (`null` is probably better for readability).
         * @param {Number} [shift= 0] Modify nesting behaviour. By default (`shift= 0`), new element is child of previus element. Every `-1` means moving to the upper level against current one - see example.
         * @returns {module:jaaJSU~$dom~instance_componentAdd}
         * @example
         * const UL= document.getElementById('SOME UL');
         * const { add }= $dom.component("LI", { className: "list_item" });
         * //result: <li class="list_item">...</li>
         * add("DIV", { textContent: "Child of .list_item", className: "deep1" });
         * //result: <li class="list_item"><div class="deep1">...</div></li>
         *     add("DIV", { textContent: "Child of div.deep1", className: "deep2" });
         *     //result: ...<div class="deep1"><div class="deep2">...</div></div>...
         *         add("DIV", { textContent: "Child of div.deep2", className: "deep3" });
         *         //result: ...<div class="deep1"><div class="deep2"><div class="deep3">...</div></div></div>...
         *         add("DIV", { textContent: "Child of div.deep2", className: "deep3 mark" }, -1);
         *         //result: ...<div class="deep2"><div class="deep3">...</div><div class="deep3">...</div></div>...
         * //next add(*) schoul be child of div.deep3.mark, by -1 it is ch.of div.deep2, by -2 ch.of div.deep1, by -3 ch.of li.list_item because div.deep3.mark is on 3rd level
         *     add("DIV", { textContent: "Child of div.deep1", className: "deep2 nextone" }, -2);
         *     //result: this is on 2nd level
         * add("DIV", { textContent: "Child of div.deep1", className: "deep2 nextone" }, -2);
         * //result: this is on 0 level
         *     add("DIV", null);
         *     //just DIV without attributes
         */
        function add(el_name, attrs, shift= 0){
            recalculateDeep(shift);
            attrs= attrs || {};
            const prepare_el= document.createElement(el_name);
            if(!all_els_counter) container= els[0]= fragment.appendChild(prepare_el);
            else els[all_els_counter]= getParentElement().appendChild(prepare_el);
            let el= els[all_els_counter];
            all_els_counter+= 1;
            $dom.assign(el, attrs);
            return Object.assign({
                /**
                 * Returns reference of currently added element
                 * @method getReference
                 * @memberof module:jaaJSU~$dom~instance_componentAdd
                 * @returns {NodeElement}
                 */
                getReference: ()=> el,
                /**
                 * This procedure allows to call given function `fn` during registering element.
                 * @method oninit
                 * @memberof module:jaaJSU~$dom~instance_componentAdd
                 * @param {Function} fn
                 * @returns {module:jaaJSU~$dom~instance_component}
                 */
                oninit: function(fn){ fn(el); return component_out; },
                /**
                 * This method allows to register function ({@link module:jaaJSU~$dom.onUpdateFunction}) which shoul be invoke when given **keys** in `data` will be changed (see {@link module:jaaJSU~$dom~instance_component.update}).
                 * @method onupdate
                 * @memberof module:jaaJSU~$dom~instance_componentAdd
                 * @param {Object} data This allows register listener for given **keys** of Object `data`. For `data= { a: "A", b: "B" }` it means that when `a` or `b` will be changed the `onUpdateFunction` is called.
                 * @param {module:jaaJSU~$dom~onUpdateFunction} onUpdateFunction This register function, which should be called when any key od `data` will be changed in future. It is also called during creating element.
                 * @returns {module:jaaJSU~$dom~instance_component}
                 * @example
                 * const c= $dom.component("DIV", null);
                 * …
                 * c.add("P", null).onupdate({ key: "This is init value" }, ({ key })=> ({ textContent: key }));//=> <p>This is init value</p>
                 * …
                 * c.update({ key: "Value changed" });//=> <p>Value changed</p>
                 * @example
                 * const c= $dom.component("DIV", null);
                 * …
                 * c.add("P", null).onupdate({ A: "A", B: "b" }, ({ A, B })=> ({ textContent: A+B }));//=> <p>Ab</p>
                 * …
                 * c.update({ B: "B" });//=> <p>AB</p>
                 */
                /**
                 * @callback onUpdateFunction
                 * @memberof module:jaaJSU~$dom
                 * @category types descriptions
                 * @inner
                 * @param {Object} data Includes all subsribed keys from `data` see method {@link module:jaaJSU~$dom~instance_componentAdd.onupdate}
                 * @returns {*|module:jaaJSU~$dom~DomAssignObject} Primary should use `DomAssignObject`, but in generall this can do anything what make sence when method {@link module:jaaJSU~$dom~instance_component.update} is called. This callback can be registered when element is created (see method {@link module:jaaJSU~$dom~instance_component.add}) see {@link module:jaaJSU~$dom~instance_componentAdd}.
                 */
                onupdate: function(data, onUpdateFunction){
                    if(!data) return component_out;
                    if(!internal_storage) internal_storage= initStorage();
                    $dom.assign(el, internal_storage.register(el, data, onUpdateFunction));
                    return component_out;
                }
            }, component_out);
        }
        
        /**
         * This is `Component` with aditional methods
         * @typedef instance_componentAddText
         * @memberof module:jaaJSU~$dom
         * @category types descriptions
         * @inner
         * @type {module:jaaJSU~$dom~instance_component}
         */
        /**
         * This add element to component
         * @method addText
         * @memberof module:jaaJSU~$dom~instance_component
         * @public
         * @chainable
         * @param {String} text Argument for `document.createTextNode`
         * @param {Number} [shift= 0] see {@link module:jaaJSU~$dom~instance_component.add}
         * @returns {module:jaaJSU~$dom~instance_componentAddText}
         * @example
         * const c1= $dom.component("P", { textContent: "TEXT" });
         * const c2= $dom.component("P", null);
         *     c2.addText("TEXT");
         * //c1-> <p>TEXT</p>  ===  <p>TEXT</p> <-c2
         * @example
         * function testTextLi({ href= "https://www.seznam.cz" }= {}){
         *     const c= $dom.component("LI", null);
         *         c.add("P", { textContent: "Link test: " });
         *             c.add("A", { textContent: "link ", href });
         *                 c.add("STRONG", { textContent: `(${href.replace("https://www.", "")})` });
         *             c.addText("!", -2);
         *             c.add("BR", null, -1);
         *             c.addText("Test new line.", -1);
         *     return c.share;
         * }
         * //result: '<p>Link test: <a href="...">link <strong>...</strong></a>!<br>Test new line.</p>'
         */
        function addText(text, shift= 0){
            recalculateDeep(shift);
            const text_node= document.createTextNode(text);
            let el= els[all_els_counter]= getParentElement().appendChild(text_node);
            all_els_counter+= 1;
            return Object.assign({
                /**
                 * This procedure allows to call given function `fn` during registering element.
                 * @method oninit
                 * @memberof module:jaaJSU~$dom~instance_componentAddText
                 * @param {Function} fn
                 * @returns {module:jaaJSU~$dom~instance_component}
                 */
                oninit: function(fn){ fn(el); return component_out; }
            }, component_out);
        }
        
        /**
         * Method for including another component by usint its `share` key.
         * @method component
         * @memberof module:jaaJSU~$dom~instance_component
         * @public
         * @chainable
         * @param {module:jaaJSU~$dom~instance_component.share} share
         * @param {Number} [shift= 0] see {@link module:jaaJSU~$dom~instance_component.add}
         * @return {module:jaaJSU~$dom~instance_component}
         * @example
         * function p({ textContent }){
         *      const cP= $dom.component("P", { textContent });
         *      return cP.share;
         * }
         * const c= $dom.component("DIV", null);
         * for(let i=0; i<3; i++){ c.component(p({ textContent: i })); }
         * c.mount(document.body, "replaceContent");
         * //= <body><div><p>0</p><p>1</p><p>2</p></div></body>
         */
        function component({ mount, update, isStatic }, shift= 0){
            recalculateDeep(shift);
            els[all_els_counter]= mount(getParentElement());
            if(!isStatic()){
                if(!internal_storage) internal_storage= initStorage();
                internal_storage.registerComponent(update);
            }
            all_els_counter+= 1;
            return component_out;
        }
        
        /**
         * Add element to live DOM
         * @method mount
         * @memberof module:jaaJSU~$dom~instance_component
         * @public
         * @param {NodeElement} element Element where to places this component
         * @param {String} [type= "childLast"]
         *  <br/>- Change type of mounting
         *  <br/>- `childLast` places component as last child
         *  <br/>- `childFirst` places component as first child
         *  <br/>- `replaceContent` removes content of `element` and places component as child (uses `$dom.empty`)
         *  <br/>- `replace` replaces `element` by component
         *  <br/>- `before` places component before `element`
         *  <br/>- `after` places component after `element` (uses `$dom.insertAfter`)
         * @returns {NodeElement} `container`
         */
        function mount(element, type= "childLast"){
            switch ( type ) {
                case "replace":
                    $dom.replace(element, fragment);
                    break;
                case "replaceContent":
                    $dom.empty(element);
                    element.appendChild(fragment);
                    break;
                case "before":
                    element.parentNode.insertBefore(fragment, element);
                    break;
                case "after":
                    $dom.insertAfter(fragment, element);
                    break;
                default:
                    if(type==="childFirst" && element.childNodes.length) element.insertBefore(fragment, element.childNodes[0]);
                    else element.appendChild(fragment);
                    break;
            }
            return container;
        }
        
        /**
         * Method remove element form live DOM and returns null
         * @method destroy
         * @memberof module:jaaJSU~$dom~instance_component.share
         * @public
         * @returns {Null}
         * @example
         * let c= $dom.component("DIV", null);
         * c.mount(document.body, "replaceContent");
         * c= c.share.destroy();
         * //=> c===null AND <body></body>
         */
        function destroy(){
            container.remove();
            return null;
        }
        
        /**
         * Updates `deep`
         * @private
         * @method recalculateDeep
         * @memberof module:jaaJSU~$dom~instance_component
         * @param {Number} shift see {@link module:jaaJSU~$dom~instance_component.add}
         */
        function recalculateDeep(shift){
            if(!shift) deep.push(all_els_counter);
            else { deep.splice(deep.length+1+shift); deep[deep.length-1]= all_els_counter; }
        }
        
        /**
         * Returns parent element (or "fragment pseudo element")
         * @method getParentElement
         * @memberof module:jaaJSU~$dom~instance_component
         * @private
         * @returns {NodeElement} Returns parent element (i. e. `DocumenFragment` if component is empty)
         */
        function getParentElement(){
            return els[deep[deep.length-2]] || fragment;
        }
        
        /**
         * Method provide way to change nesting behaviour. It can be helpful for loops
         * @method setShift
         * @memberof module:jaaJSU~$dom~instance_component
         * @public
         * @chainable
         * @param {Number} [shift= 0] see {@link module:jaaJSU~$dom~instance_component.add}
         * @returns {module:jaaJSU~$dom~instance_component}
         * @example
         * function testNesting(){
         *     const c= $dom.component("DIV", null);
         *         c.setShift(0);
         *     for(let i= 0; i<5; i++){
         *         c.add("P", { textContent: `Paragraph no. ${i}.` }, -1);
         *     }
         *     return c.share;
         * }
         * //=> div> 5*p
         * @example
         * function testNesting(){
         *     const c= $dom.component("DIV", null);
         *     for(let i= 0; i<5; i++){
         *         c.add("P", { textContent: `Paragraph no. ${i}.` });
         *          //c.setShift();//or 0 => div> p> p> p> …
         *       //c.setShift(-1); => div> p> p> p> …
         *     c.setShift(-2);
         *     }
         *     return c.share;
         * }
         * //=> div> 5*p
         */
        function setShift(shift= 0){
            let last;
            if(!shift){ last= deep.pop(); deep.push(last, last); }
            else deep.splice(deep.length+1+shift);
            return component_out;
        }
        
        /**
         * Initialize internal storage
         * @method initStorage
         * @memberof module:jaaJSU~$dom~instance_component
         * @private
         * @returns {Object} `{ register, registerComponent, update, unregister}`
         */
        function initStorage(){
            const /* storage for component, functions for updates and mapping data keys and corresponding elements */
                data= {},
                components= [], els= new Map(),
                functions= new Map(),
                listeners= new Map();
            let 
                els_counter= 0;
            return {
                register: function(el, init_data, fun){
                    Object.assign(data, init_data);
                    const el_id= els_counter++; els.set(el_id,el);
                    const init_data_keys= Object.keys(init_data);
                    for(let i=0, i_key, i_length= init_data_keys.length; i<i_length; i++){
                        i_key= init_data_keys[i];
                        if(!listeners.has(i_key)) listeners.set(i_key, [ el_id ]);
                        else listeners.set(i_key, [ ...listeners.get(i_key), el_id ]);
                    }
                    functions.set(el_id, fun);
                    return fun.call(el, init_data) || {};
                },
                registerComponent: function(update){
                    if(components.indexOf(update)===-1) components.push(update);
                },
                update: function(new_data_input){
                    const new_data= typeof mapUpdate==="function" ? mapUpdate(new_data_input) : new_data_input;
                    let out= false;
                    for(let i=0, i_length= components.length; i<i_length; i++){ if(components[i](new_data)&&!out){out=true;} }
                    if(!listeners.size) return out;
                    const /* keys to update (subscribers exits and was changed) */
                        new_data_keys= Object.keys(new_data)
                            .filter(key=>listeners.has(key)&&data[key]!==new_data[key]),
                        new_data_keys_length= new_data_keys.length;
                    if(!new_data_keys_length) return out;
                    Object.assign(data, new_data);
                    const els_for_redraw= [];
                    for(let i=0, i_listeners; i<new_data_keys_length; i++){
                        i_listeners= listeners.get(new_data_keys[i]);
                        for(let j=0, ji_listener, j_length= i_listeners.length; j<j_length; j++){
                            ji_listener= i_listeners[j];
                            if(els_for_redraw.indexOf(ji_listener)===-1) els_for_redraw.push(ji_listener);
                        }
                    }
                    for(let i=0, i_length= els_for_redraw.length; i<i_length; i++){ processChanges(els_for_redraw[i]); }
                    return true;
                    
                    function processChanges(el_id){
                        const new_attrs= functions.get(el_id).call(els.get(el_id), data) || {};
                        const el= els.get(el_id);
                        if(el.parentNode===null) return unregister(el_id, new_data_keys);
                        else $dom.assign(el, new_attrs);
                    }
                },
                getData: function(){
                    return data;
                },
                unregister
            };
            function unregister(el_id, data_keys){
                functions.delete(el_id);
                els.delete(el_id);
                for(let i=0, i_key, listener, i_length= data_keys.length; i<i_length; i++){
                    i_key= data_keys[i];
                    listener= listeners.get(i_key);
                    if(listener.length===1) listeners.delete(i_key);
                    else listeners.set(i_key, listener.filter(el_idFilter));
                }
                function el_idFilter(v){ return v!==el_id; }
            }
        }
        
        /**
         * Method updates all registered varibles by keys `onupdates` and calls follower functions
         * @method update
         * @memberof module:jaaJSU~$dom~instance_component
         * @public
         * @param {Object|Function} new_data
         * <br/>- When `$dom.component` is initialized, it is possible to register `mapUpdate`
         * <br/>- **It's because internally, it is used `Object.assign` (no deep copy) to merge new data with older one!!!**
         * <br/>- It is also possible to register function to detect changes itself see examples
         * @returns {Boolean} If success `1`, else `0`.
         * @example
         * // SIMPLE example
         * const data_A= { a: "A" };
         * const data_A_update= { a: "AAA" };
         * const c= $dom.component("UL", null);
         *     c.add("LI", null)
         *          .onupdate(data_A, ({ a })=>({ textContent: a }));//`{ a }` add listener for "a"
         * c.mount(document.body);
         * c.update(data_A_update);
         * @example
         * // EXAMPLE WITH `mapUpdate`
         * const data_B= { a: { b: "A" }};
         * const data_B_update= { a: { b: "AAA" }};
         * const c= $dom.component("UL", null, { mapUpdate: d=>({ a: d.a.b }) });
         *     c.add("LI", null)
         *          .onupdate(data_B, ({ a })=>({ textContent: a }));
         * c.mount(document.body);
         * c.update(data_B_update);
         * @example
         * // EXAMPLE WITH FUNCTION AS ARGUMENT OF `update`
         * const c= $dom.component("UL", null, { mapUpdate: d=>({ a: d.a.b }) });
         *     c.add("LI", null)
         *          .onupdate({ a: 1 }, ({ a })=>({ textContent: a }));
         * c.mount(document.body);
         * c.update(({ a })=> { a: ++a });
         */
        function update(new_data){
            if(!internal_storage) return false;
            return internal_storage.update(typeof new_data==="function" ? new_data(internal_storage.getData()) : new_data);
        }
        
        /**
         * Methods returns if it was `onupdate` used
         * @method isStatic
         * @memberof module:jaaJSU~$dom~instance_component.share
         * @public
         * @return {Boolean} If there is some listeners `onupdate`
         */
        function isStatic(){
            return !internal_storage;
        }
        
    };
    /**
     * Object shall holds **NodeElement** properties like `className`, `textContent`, …. This is primary argument for {@link module:jaaJSU~$dom.assign}. There are some notes and changes:
     *  - For `dataset` can be used also `Object` notation: `$dom.assign(document.getElementById("ID"), { dataset: { test: "TEST" } }); //<p id="ID" data-test="TEST"></p>`.
     *  - The same notation can be used for **CSS variables** (the key is called `style_vars`).
     *  - **IMPORTANT CHANGE**: Key `style` also supports **text**, so `$dom.assign(el, { style: "color: red;" });` and `$dom.assign(el, { style: { color: "red" } })` is equivalent to `el.setAttribute("style", "color: red;");`
     *  - **IMPORTANT DIFFERENCE**: `classList` accepts *Object* in the form of `class_name: -1|0|1` where '-1' means `el.classList.toggle(class_name)` others `el.classList.toggle(class_name, Booleans(...))`
     *  - *Speed optimalization*: It is recommended to use `textContent` (instead of `innerText`) and `$dom.add` or `$dom.component` (instead of `innerHTML`).
     *  - `href`, `src` or `class` are convereted to `element.setAttribute(key, …)`;
     * @typedef DomAssignObject
     * @memberof module:jaaJSU~$dom
     * @category types descriptions
     * @inner
     * @type {Object}
     */
    /**
     * Procedure for merging object into the element properties.
     * Very simple example: `$dom.assign(document.body, { className: "test" });` is equivalent to `document.body.className= "test";`.
     * It is not deep copy in general, but it supports `style`, `style_vars` and `dataset` objects (see below).
     * @method assign
     * @memberof module:jaaJSU~$dom
     * @param {NodeElement} element
     * @param {...module:jaaJSU~$dom~DomAssignObject} object_attributes
     * @example <caption>#1: All together</caption>
     * const el= document.body;
     * const onclick= function(){ console.log(this.dataset.js_param); };
     * $dom.assign(el, { textContent: "BODY", style: "color: red;", dataset: { js_param: "CLICKED" }, onclick });
     * //result HTML: <body style="color: red;" data-js_param="CLICKED">BODY</body>
     * //console output on click: "CLICKED"
     * $dom.assign(el, { style: { color: "green" } });
     * //result HTML: <body style="color: green;" data-js_param="CLICKED">BODY</body>
     * //console output on click: "CLICKED"
     * @example <caption>#2 **\*.classList.toggle**</caption>
     * const el= document.body;
     * $dom.assign(el, { classList: { testClass: -1 } });
     * //result HTML: <body class="testClass">…</body>
     * $dom.assign(el, { classList: { testClass: -1 } });
     * //result HTML: <body class="">…</body>
     * 
     * $dom.assign(el, { classList: { testClass: true } });//or 1
     * //result HTML: <body class="testClass">…</body>
     * $dom.assign(el, { classList: { testClass: false } });//or 0
     * //result HTML: <body class="">…</body>
     * //...
     * @example <caption>#3 Links and images</caption>
     * $dom.assign(A_ELEMENT, { href: "www.google.com" });//=> <a href="www.google.com" …
     * $dom.assign(IMG_ELEMENT, { src: "image.png" });//=> <img src="image.png" …
     */
    $dom.assign= function(element, ...objects_attributes){
        const object_attributes= Object.assign({}, ...objects_attributes);
        const object_attributes_keys= Object.keys(object_attributes);
        for(let i=0, key, attr, i_length= object_attributes_keys.length; i<i_length; i++){
            key= object_attributes_keys[i];
            attr= object_attributes[key];
            if(typeof attr==="undefined"){ if(Reflect.has(element, key)){ Reflect.deleteProperty(element, key); } continue; }
            switch(key){
                case "style":
                    if(typeof attr==="string") element.setAttribute("style", attr);
                    else for(let k=0, k_key, k_keys= Object.keys(attr), k_length= k_keys.length; k<k_length; k++){ k_key= k_keys[k]; element.style.setProperty(k_key, attr[k_key]); }
                    break;
                case "style_vars":
                    for(let k=0, k_key, k_keys= Object.keys(attr), k_length= k_keys.length; k<k_length; k++){ k_key= k_keys[k]; element.style.setProperty(k_key, attr[k_key]); }
                    break;
                case "classList":
                    if(!element[key].toggle) break;
                    for(let k=0, k_key, k_attr, k_keys= Object.keys(attr), k_length= k_keys.length; k<k_length; k++){
                        k_key= k_keys[k]; k_attr= attr[k_key];
                        if(k_attr===-1) element.classList.toggle(k_key);
                        else element.classList.toggle(k_key, Boolean(k_attr));
                    }
                    break;
                case "dataset":
                    for(let k=0, k_key, k_keys= Object.keys(attr), k_length= k_keys.length; k<k_length; k++){ k_key= k_keys[k]; element.dataset[k_key]= attr[k_key]; }
                    break;
                case "href" || "src" || "class":
                    element.setAttribute(key, attr);
                    break;
                default:
                    element[key]= attr;
                    break;
            }
        }
    };
    
    /**
     * Procedure for adding elements into the `parent` (in background use `createDocumentFragment`, `createElement`, `appendChild`)
     * @method add
     * @memberof module:jaaJSU~$dom
     * @deprecated Please use {@link module:jaaJSU~$dom.component}
     * @param {NodeElement} parent Wrapper (for example `<ul>`) where to cerate children elements (for example `<li>`)
     * @param $$$ {...Array}
     *  <br/>* `[ [ __NAME__, __PARAMS__ ], [ __NAME__, __PARAMS__ ], ..., [ __NAME__, __PARAMS__ ] ]`
     *  <br/>* Element in array is automatically nested into the previous element. `[["UL",...], ["LI",...], ["SPAN",...]]` creates `<ul><li><span></span></li></ul>`
     *  <br/>* `__NAME__` **\<String\>**: Name of element (for example `LI`, `P`, `A`, ...)
     *  <br/>* `__PARAMS__` **\<Object\>**: Parameters for elements as "innerText", "className", "dataset", ...
     *  <br/>    * see {@link module:jaaJSU~$dom.assign}
     *  <br/>    * There is one change with using key "$", which modify elements order and it is not parsed by {@link module:jaaJSU~$dom.assign}
     *  <br/>        * `__PARAMS__.$`: Modify nesting behaviur (accepts index of element in `$$$`). `[["UL",...], ["LI",...], ["LI",{$:0,...}]]` creates `<ul><li></li><li></li></ul>`
     * @return {NodeElement} First created element (usualy wrapper thanks nesting)
     * @example
     * $dom.add(ul_element,[
     *     ["LI", {className: "nejake-tridy", onclick: clickFCE}],
     *         ["SPAN", {innerText: "Prvni SPAN v LI"}],
     *         ["SPAN", {$:0, innerText: "Druhy SPAN v LI"}]
     * ]);
     * // = <ul><li class="nejake-tridy" onclick="clickFCE"><span>Prvni SPAN v LI</span><span>Druhy SPAN v LI</span></li></ul>
     * // !!! VS !!!
     * $dom.add(ul_element,[
     *     ["LI", {className: "nejake-tridy", onclick: clickFCE}],
     *         ["SPAN", {innerText: "Prvni SPAN v LI"}],
     *             ["SPAN", {innerText: "Druhy SPAN v LI"}]
     * ]);
     * // = <ul><li class="nejake-tridy" onclick="clickFCE"><span>Prvni SPAN v LI<span>Druhy SPAN v LI</span></span></li></ul>
     */
    $dom.add= function(parent,$$$){
        let fragment= document.createDocumentFragment();
        let prepare_els= [], els= [];
        for(var i=0, i_length= $$$.length; i<i_length;i++){
            prepare_els[i]= document.createElement($$$[i][0]);
            if(!i) els[i]= fragment.appendChild(prepare_els[i]);
            else if(typeof $$$[i][1].$!=="undefined"){
                els[i]= els[$$$[i][1].$].appendChild(prepare_els[i]);
                delete $$$[i][1].$;
            }
            else els[i]= els[i-1].appendChild(prepare_els[i]);
            $dom.assign(els[i], $$$[i][1]);
        }
        parent.appendChild(fragment);
        if(i) return els[0];
    };
    /**
     * Redraw element using cheat `*.offsetHeight`
     * @method forceRedraw
     * @memberof module:jaaJSU~$dom
     * @param {NodeElement} [element=document.body] Element for redraw
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
    /**
     * Exported name of {@link module:jaaJSU~$dom} namespace.
     * @namespace $dom
     * @global
     */
    export_as($dom, "$dom");

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
        sequention: function(...functions){return function(input){let current= input; for(let i=0, i_length= functions.length; i<i_length; i++){ current= functions[i](current); } return current; }; }
    };

    /**
     * Exported name of {@link module:jaaJSU~$function} namespace.
     * @namespace $function
     * @global
     */
    export_as($function, "$function");
    
    

    /**
     * This NAMESPACE provides features for Objects.
     * @namespace $object
     * @category namespaces
     */
    /**
     * @function function_Object2Mixed
     * @memberof module:jaaJSU~$object
     * @inner
     * @category types description
     * @param {Object} input_object
     * @returns {Mixed}
     */
    /**
     * @function function_Object2Object
     * @memberof module:jaaJSU~$object
     * @inner
     * @category types description
     * @param {Object} input_object
     * @returns {Object} Modified version of `input_object` (By reference!)
     */
    /**
     * Similar to {@link module:jaaJSU~IterableArrayObject}
     * @typedef {Object} IterableObjectObject
     * @memberof module:jaaJSU~$object
     * @inner
     * @category types description
     * @property {Mixed} item Nth value for `key` in `iterable`.
     * @property {Mixed} key Name of key
     * @property {Number} index Idicies 0...`Object.keys(iterable).length`.
     * @property {Boolean} last Is setted True, if it is the last element in array.
     * @property {Mixed|Undefined} share shared variable - works similar to `*.reduce` method
     */
    /**
     * @function IterableObjectCallback
     * @memberof module:jaaJSU~$object
     * @inner
     * @category types description
     * @param {module:jaaJSU~$object~IterableObjectObject} IterableObjectObject
     * @returns {Mixed|Undefined} `share` key of {@link module:jaaJSU~$object~IterableObjectObject}.
     */
    var $object= {
        /**
         * Function for iterating throught Object `iterable`.
         * @method each
         * @memberof module:jaaJSU~$object
         * @param {Object} iterable  An object for iterating.
         * @param {module:jaaJSU~$object~IterableObjectCallback} i_function
         * @param {Object|undefined} scope An argument for `i_function.call(*,...)`
         * @return {Mixed} `share`
         */
        each: __objectEach,
        /**
         * Procedure for iterating throught Object `iterable` like {@link module:jaaJSU~$object.each}, but use `for(... in ...)...if(Object.prototype.hasOwnProperty...`.
         * @method eachDynamic
         * @memberof module:jaaJSU~$object
         * @param {Object} iterable An object for iterating.
         * @param {module:jaaJSU~$object~IterableObjectCallback} i_function
         * @param {Object|undefined} scope An argument for `i_function.call(*,...)`
         * @return {Mixed} `share`
         */
        eachDynamic: __objectEachDynamic,
        /**
         * Function for converting Array `arr` to Object. Uses `fun` for converting.
         * @method fromArray
         * @memberof module:jaaJSU~$object
         * @param {Array} arr Array-like parameter.
         * @param {module:jaaJSU~function_reduceCallback} [fun=`(acc, curr, i)=> acc[""+i]= curr`] Function for converting. In fact, it is wrapper around `Array.reduce`.
         * @param {Object} [default_value={}] Initial value.
         * @return {Object} Created object.
         */
        fromArray: function(arr, fun= (acc, curr, i)=> acc[""+i]= curr, default_value= {}){return arr.reduce((acc, curr, i)=>{ fun(acc, curr, i); return acc; }, default_value);},
        /**
         * Wrapper around `Object.prototype.hasOwnProperty`. It is more trustable, because you can sets `var obj= { hasOwnProperty: "gotcha" }`
         * @method hasProp
         * @memberof module:jaaJSU~$object
         * @param {Object} obj **Mandatory**. Object where to search `prop`.
         * @param {String} prop **Mandatory**. Poperty to searching for.
         * @return {Boolean} True, if `obj` has property `prop`
         */
        hasProp: function(obj=isMandatory("obj"), prop=isMandatory("prop")) { return Object.prototype.hasOwnProperty.call(obj, prop); },
        /**
         * Function for creating non-rewritable object
         * @method immutable_keys
         * @memberof module:jaaJSU~$object
         * @param {Object} [obj_input={}] Initial value
         * @return {Proxy}
         * <br/>getter `Proxy.key_name` Mixed: returns key_name if defined
         * <br/>getter `Proxy.set(key_name, value)` Function:
         * <br/>&nbsp;&nbsp;- define `key_name` in object if isn't already defined (**returns True**, else **False**).
         * <br/>getter `Proxy.keys` Number: Wrapper around `Object.keys(*)`
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
         * Wrapper around `object[methodName](...args)`.
         * @method method
         * @memberof module:jaaJSU~$object
         * @param {String} methodName Key in Object `object`.
         * @param {...Mixed} args Arguments for method `methodName`
         * @return {module:jaaJSU~$object~function_Object2Mixed} `(target) => target[key](...args)`
         * @example
         * $object.method("trim")(" Hi ");//= `Hi`
         * $object.method("split", " ")("Hello world");//= `[ "Hello", "world" ]`
         */
        method: (methodName, ...args)=> object=> object[methodName](...args),
        /**
         * @method methodFrom
         * @memberof module:jaaJSU~$object
         * @example
         * $object.methodFrom(" Hi ")("trim")()====$object.method("trim")(" Hi ");
         * $object.methodFrom("Hello world")("split")(" ")===$object.method("split", " ")("Hello world");
         */
        methodFrom: object=> methodName=> (...args)=> object[methodName](...args),
        /**
         * Wrapper around `object[key]`, usefull for binding.
         * @method pluck
         * @memberof module:jaaJSU~$object
         * @param {String} key Key in Object `object`.
         * @return {module:jaaJSU~$object~function_Object2Mixed} `(target) => target[key]`
         * @example
         * $object.pluck("length")("Test");//= `4`
         */
        pluck: key=> object=> object[key],
        /**
         * @method pluckFrom
         * @memberof module:jaaJSU~$object
         * @example
         * $object.pluckFrom("Test")("length")===$object.pluck("length")("Test");
         */
        pluckFrom: object=> key=> object[key],
        /**
         * Wrapper around `object[setterName]= arg`
         * @method setter
         * @memberof module:jaaJSU~$object
         * @param {String} setterName Key in Object `object`.
         * @param {Mixed} arg Setter value
         * @return {module:jaaJSU~$object~function_Object2Object} `object=> (object[setterName]= arg, object)`
         * @example
         * $object.setter("test_key", "test_value")({ test_key: "test_init_value", other_key: "other_value" });//= `{ test_key: "test_value", other_key: "other_value" }`
         */
        setter: (setterName, arg)=> object=> (object[setterName]= arg, object),
        /**
         * @method setterFrom
         * @memberof module:jaaJSU~$object
         * @example
         * $object.setterFrom({ test_key: "test_init_value", other_key: "other_value" })("test_key")("test_value")===$object.setter("test_key", "test_value")({ test_key: "test_init_value", other_key: "other_value" });
         */
        setterFrom: object=> setterName=> arg=> (object[setterName]= arg, object)
    };
    /**
     * Exported name of {@link module:jaaJSU~$object} namespace.
     * @namespace $object
     * @global
     */
    export_as($object, "$object");
    
    function __objectEach(iterable, i_function, scope, share){
        const iterable_keys= Object.keys(iterable);
        for(let index=0, index_length= iterable_keys.length, key; index<index_length; index++){ key= iterable_keys[index];
            share= i_function.call(scope, { item: iterable[key], key, index, share });
        }
        return share;
    }
    function __objectEachDynamic(iterable, i_function, scope){
        let share;
        for(let key in iterable){
            if (iterable.hasOwnProperty(key)){
                share= i_function.call(scope, { item: iterable[key], key, target: iterable, share });
            }
        }
        return share;
    }
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
 
    class IdleValue {
        constructor(init, msg= "IdleValue: `init` argument for class constructor must be a function!"){
            if(typeof init!=="function") throw new TypeError(msg);
            this._init= init;
            this._value= undefined;
            this._idleHandle= rIC(this.initValue.bind(this));
        }
        initValue(){
            if(!this._init) return this._value;
            this._value= this._init();
            this._init= undefined;
            return this._value;
        }
        value(){
            if(this._value!==undefined) return this._value;
            this.cancel();
            return this.initValue();
        }
        cancel(){
            if(this._idleHandle){
                cIC(this._idleHandle);
                this._idleHandle= undefined;
            }
            return this._value;
        }
    }
    IdleValue.throwErrorIfNotIdleValue= function(candidat, msg){
        if(candidat instanceof IdleValue) return true;
        throw new Error(msg);
    };
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
     * @namespace $optimiziers
     * @global
     */

    export_as($optimizier, "$optimiziers");
    /**
     * This NAMESPACE provides features for strings.
     * @namespace $string
     * @category namespaces
     */
    var $string= {
        /**
         * Clear spaces (`\s+`) in `str`
         * @method clearSpaces
         * @memberof module:jaaJSU~$string
         * @param {String} str
         * @return {String} Cleaned `str`
         */
        clearSpaces: function(str) {
            if(typeof str !== "string") return false;
            return str.replace(/\s+/g, "");
        },
        /**
         * @method countChars
         * @memberof module:jaaJSU~$string
         * @param {String} str
         * @return {Number} Number of chars in `str`
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
         * @memberof module:jaaJSU~$string
         * @return {String} An unique string
         */
        generateUnique(){
            return (new Date()).getTime()+"_"+(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g, (""+Math.random()).charAt(0)).substr(0, 10);
        },
        /**
         * Wrapper around `*.substring(*,*)`
         * @method getSubstring
         * @memberof module:jaaJSU~$string
         * @param {String} str
         * @param {Number} len How many chars
         * @param {Number} [start=0]
         * @return {String} Substring of `str`
         */
        getSubstring: function(str, len, start= 0) {
            if(start < 0) start= 0;
            if (str.length > len+start) {str = str.substring(start, len);}
            return str;
        },
       /**
        * @method letterInc
        * @memberof module:jaaJSU~$string
        * @param {String} str `[a-zA-z]` at least on position `pos`
        * @param {Number} [inc=1] `inc=0` is convert to `inc=1`
        * @param {Number} [pos=str.length-1]
        * @return {String} New string with "highter" letter on position `pos`
        * @example
        * console.log($string.letterInc("125"));//="126"
        * console.log($string.letterInc("125a"));//="125b"
        * console.log($string.letterInc("HH"));//="HI"
        * console.log($string.letterInc("Hg", 2, 1));//="Hi"
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
         * @memberof module:jaaJSU~$string
         * @param {String} str
         * @return {String} Escaped text
         */
        escapeHTML: function(str){
            var replacements= {"<": "&lt;", ">": "&gt;","&": "&amp;", "\"": "&quot;"};
            return str.replace(/[<>&"]/g,(character)=>replacements[character]);
        },
        /**
         * Clear tags from `str`
         * @method clearHTML
         * @memberof module:jaaJSU~$string
         * @param {String} str
         * @return {String} Text without HTML tags
         */
        clearHTML: function(str){
            var div= document.createElement('div');
            div.innerHTML= str;
            return div.textContent;
        },
       /**
        * @method containsRepeatingChars
        * @memberof module:jaaJSU~$string
        * @param {String} str
        * @param {Number} [quantity=2]
        * @return {Boolean}
        * @example
        * console.log($string.containsRepeatingChars("AAbcd"));//=false
        * console.log($string.containsRepeatingChars("AAAbcd"));//=true
        * console.log($string.containsRepeatingChars("AAAbcd", 3));//=false
        */
        containsRepeatingChars: function(str, quantity= 2){
            if(typeof str !== "string") return false;
            let re= new RegExp("(\\S)(\\1{"+quantity+",})","g");
            str= str.replace(/\s+/g,"_");
            return re.test(str);
        },
       /**
        * @method containsSequential
        * @memberof module:jaaJSU~$string
        * @param {String} str
        * @param {Number} [quantity=2]
        * @return {Boolean}
        * @example
        * console.log($string.containsSequential("ABccc"));//=false
        * console.log($string.containsSequential("ABCdd"));//=true
        * console.log($string.containsSequential("ABCdd", 3));//=false
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
         * @memberof module:jaaJSU~$string
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
         * @memberof module:jaaJSU~$string
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
         * @memberof module:jaaJSU~$string
         * @param {String} str
         *  * Text which contains `${0}, ${var}, ...`
         * @return {Object} `{execute, partial, isSubstituted}`
         * <br/>- String **execute** ( [ `params_obj` ={}] )
         * <br/>&nbsp;&nbsp;- [ `params_obj` ={}] {Object}
         * <br/>&nbsp;&nbsp;&nbsp;&nbsp;- Keys corresponding to `${0}, ${var}, ...` in `str`
         * <br/>&nbsp;&nbsp;- **Returns:** String
         * <br/>&nbsp;&nbsp;&nbsp;&nbsp;- New string with replaced vars
         * <br/>- String **partial** ( [ `params_obj` ={}] )
         * <br/>&nbsp;&nbsp;- Replace inside `str`
         * <br/>&nbsp;&nbsp;- [ `params_obj` ={}] {Object}
         * <br/>&nbsp;&nbsp;&nbsp;&nbsp;- Keys corresponding to `${0}, ${var}, ...` in `str`
         * <br/>&nbsp;&nbsp;- **Returns:** String
         * <br/>&nbsp;&nbsp;&nbsp;&nbsp;- `str` with replaced vars
         * <br/>- Boolean **isSubstituted** ()
         * <br/>&nbsp;&nbsp;- **Returns:** Boolean
         * <br/>&nbsp;&nbsp;&nbsp;&nbsp;- If `str` contains `${0}, ${var}, ...`
         * @example
         * const test1= $string.template("${0}, ${1}, ${2}");
         * console.log(test1.partial(["A"]));//="A, ${1}, ${2}"
         * console.log(test1.execute(["B", "C", "D"]));//="A, C, D"
         * console.log(test1.isSubstituted());//=false
         * console.log(test1.partial(["_", "B", "C"]));//="A, B, C"
         * console.log(test1.isSubstituted());//=true
         * 
         * const test2= $string.template("${test0}, ${test1}, ${test2}");
         * console.log(test2.partial({test0: "A"}));//="A, ${test1}, ${test2}"
         * console.log(test2.execute({test0: "B", test1: "C", test2: "D"}));//="A, C, D"
         * console.log(test2.isSubstituted());//=false
         * console.log(test2.partial({test0: "_", test1: "B", test2: "C"}));//="A, B, C"
         * console.log(test2.isSubstituted());//=true
         */
        template: function(str, keysFun= Object.keys){
            if(typeof str !== "string") throw Error("Type of 'str' is not string!");
            const reg= /\$\{([\s]*[^;\s\{]+[\s]*)\}/g;
            const _this= Object.freeze({ partial, partialRest, setKeysFilter, isSubstituted, execute });
            return _this;
            function partial(params_obj={}){ str= execute(params_obj); return _this; }
            function partialRest(...args){
                let i= 0, i_length= args.length;
                str= str.replace(reg, replaceHandler);
                return _this;
                function replaceHandler(all){ return i++<i_length ? args[i-1] : all; }
            }
            function setKeysFilter(filterFun){ keysFun= filterFun; return _this; }
            function isSubstituted(){ return !reg.test(str); }
            function execute(params_obj={}){
                const params_obj_keys= keysFun(params_obj);
                if(!params_obj_keys.length) return str;
                return str.replace(reg, replaceHandler);
                function replaceHandler(all, match){ return params_obj_keys.indexOf(match)!==-1 ? params_obj[match] : all; }
            }
        },
        /**
         * Converts string to camel case format "peter"=>"Peter"
         * @param {String} str
         * @returns {String}
         */
        toCamelCase: function(str){
            /* not string or empty */ if(typeof str !== "string") throw Error("Type of 'str' is not string!"); if(!str) return str;
            let [ firstLetter, ...rest ]= str.split("");
            return ([ firstLetter.toUpperCase(), ...rest ]).join("");
        }
    };
    /**
     * Exported name of {@link module:jaaJSU~$string} namespace.
     * @namespace $string
     * @global
     */

    export_as($string, "$string");
    /**
     * This NAMESPACE provides features for date/time. Mainly, there are utilities using **Date** class and feature [`Date.prototype.toLocaleString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString).
     * @namespace $time
     * @version 0.6.0
     * @see {@link https://github.com/jaandrle/dollar_time}
     * @category namespaces
     */
    const $time= (function init(){
        const /* internal store */
            format_objects= (({ time, date, seconds })=>({
            /**
             * Internal object holding predefined formating arguments for {@link module:jaaJSU~$time.toLocaleString}.
             * @namespace format_objects
             * @private
             * @readonly
             * @property {Object} time shows combination of 2-digits hour and minutes
             * @property {Object} time_seconds shows combination of `time` and seconds
             * @property {Object} date shows combination of 2-digits day, month and full year
             * @property {Object} date_time shows combination of `time` and `date`
             * @property {Object} date_time_seconds shows combination of `date_time` and `seconds`
             * @memberof module:jaaJSU~$time
             * @example
             * format_objects.time==={ hour: "2-digit", minute: "2-digit" }
             */
                time, date,
                time_seconds: Object.assign(seconds, time),
                date_time: Object.assign({}, time, date),
                date_time_seconds: Object.assign({}, Object.assign(seconds, time), date)
            }))({
                time: { hour: "2-digit", minute: "2-digit" },
                date: { year: "numeric", day: "2-digit", month: "2-digit" },
                seconds: { second: "2-digit" }
            }),
            format_arrays= (({ dash, colon, space, two_dig })=>({
            /**
             * Internal object holding predefined formating arguments for {@link module:jaaJSU~$time.getFormatObject}.
             * @namespace format_arrays
             * @private
             * @readonly
             * @property {module:jaaJSU~$time~ArrayOfOperation[]} SQL_DATE Generate format of **"YYYY-MM-DD"**
             * @property {module:jaaJSU~$time~ArrayOfOperation[]} SQL Generate format of **"YYYY-MM-DD HH:mm:ss"**
             * @property {module:jaaJSU~$time~ArrayOfOperation[]} SQL_TIME Generate format of **"HH:mm:ss"**
             * @memberof module:jaaJSU~$time
             * @example
             * format_arrays.YYYYMMDD=== [ ["year", "numeric"], [ "text", "-" ], ["month", "2-digit"], [ "text", "-" ], ["day", "2-digit"] ]
             */
                SQL_DATE: [ ["year", "numeric"], dash, ["month", two_dig], dash, ["day", two_dig] ],
                SQL_TIME: [ ["hour", two_dig, "h23"], colon, ["minute", two_dig], colon, ["second", two_dig] ],
                SQL: [ ["year", "numeric"], dash, ["month", two_dig], dash, ["day", two_dig], space, ["hour", two_dig, "h23"], colon, ["minute", two_dig], colon, ["second", two_dig] ]
            }))({
                dash: [ "text", "-" ],
                colon: [ "text", ":" ],
                space: [ "text", " " ],
                two_dig: "2-digit"
            }),
            /**
             * Internal helper array for {@link module:jaaJSU~$time.getOrdinalSuffix}.
             * @property {Array} ordinal_numbers
             * @private
             * @readonly
             * @memberof module:jaaJSU~$time
             */
            ordinal_numbers= [ "th", "st", "nd", "rd" ];
        const /* validation functions */
        /**
         * Very simple test for 'YYYY-MM-DD' pattern. Returns `true` if `date_string` includes **`-`**.
         * @method isDateString
         * @memberof module:jaaJSU~$time
         * @private
         * @param {String|...String} date_string
         * @returns {Boolean}
         * @example
         * isDateString("2019-05-06");//= true
         * isDateString("06/05/2019");//= false !!!!
         */
            isDateString= date_string=> date_string.indexOf("-")!==-1,
        /**
         * Very simple test for 'T...' pattern. Returns `true` if `date_string` includes **`T`**.
         * @method isTimeString
         * @memberof module:jaaJSU~$time
         * @private
         * @param {String|...String} date_string
         * @returns {Boolean}
         * @example
         * isTimeString("T12:00:00");//= true
         * isTimeString("12:00:00");//= false !!!
         * isTimeString("Twrong");//= true !!!!
         */
            isTimeString= date_string=> date_string.indexOf("T")!==-1;
        let /* internal variables*/
            internal_locale= "en-GB",
            internal_zone= "";
        /**
         * This array stores all time zones names (eg. 'Europe/Andorra') supported by `{ timeZone: ... }` in second argument of `Date.prototype.toLocaleString`.
         * 
         * Original from [stackoverflow.com/a/54500197](https://stackoverflow.com/a/54500197).
         * @property {Array} ary_ianna_time_zones
         * @private
         * @readonly
         * @memberof module:jaaJSU~$time
         */
        const ary_ianna_time_zones= Object.freeze([
            'Africa/Abidjan',
            'Africa/Accra',
            'Africa/Algiers',
            'Africa/Bissau',
            'Africa/Cairo',
            'Africa/Casablanca',
            'Africa/Ceuta',
            'Africa/El_Aaiun',
            'Africa/Johannesburg',
            'Africa/Juba',
            'Africa/Khartoum',
            'Africa/Lagos',
            'Africa/Maputo',
            'Africa/Monrovia',
            'Africa/Nairobi',
            'Africa/Ndjamena',
            'Africa/Sao_Tome',
            'Africa/Tripoli',
            'Africa/Tunis',
            'Africa/Windhoek',
            'America/Adak',
            'America/Anchorage',
            'America/Araguaina',
            'America/Argentina/Buenos_Aires',
            'America/Argentina/Catamarca',
            'America/Argentina/Cordoba',
            'America/Argentina/Jujuy',
            'America/Argentina/La_Rioja',
            'America/Argentina/Mendoza',
            'America/Argentina/Rio_Gallegos',
            'America/Argentina/Salta',
            'America/Argentina/San_Juan',
            'America/Argentina/San_Luis',
            'America/Argentina/Tucuman',
            'America/Argentina/Ushuaia',
            'America/Asuncion',
            'America/Atikokan',
            'America/Bahia_Banderas',
            'America/Bahia',
            'America/Barbados',
            'America/Belem',
            'America/Belize',
            'America/Blanc-Sablon',
            'America/Boa_Vista',
            'America/Bogota',
            'America/Boise',
            'America/Cambridge_Bay',
            'America/Campo_Grande',
            'America/Cancun',
            'America/Caracas',
            'America/Cayenne',
            'America/Costa_Rica',
            'America/Creston',
            'America/Cuiaba',
            'America/Curacao',
            'America/Danmarkshavn',
            'America/Dawson_Creek',
            'America/Dawson',
            'America/Denver',
            'America/Detroit',
            'America/Edmonton',
            'America/Eirunepe',
            'America/El_Salvador',
            'America/Fort_Nelson',
            'America/Fortaleza',
            'America/Glace_Bay',
            'America/Godthab',
            'America/Goose_Bay',
            'America/Grand_Turk',
            'America/Guatemala',
            'America/Guayaquil',
            'America/Guyana',
            'America/Halifax',
            'America/Havana',
            'America/Hermosillo',
            'America/Chicago',
            'America/Chihuahua',
            'America/Indiana/Indianapolis',
            'America/Indiana/Knox',
            'America/Indiana/Marengo',
            'America/Indiana/Petersburg',
            'America/Indiana/Tell_City',
            'America/Indiana/Vevay',
            'America/Indiana/Vincennes',
            'America/Indiana/Winamac',
            'America/Inuvik',
            'America/Iqaluit',
            'America/Jamaica',
            'America/Juneau',
            'America/Kentucky/Louisville',
            'America/Kentucky/Monticello',
            'America/La_Paz',
            'America/Lima',
            'America/Los_Angeles',
            'America/Maceio',
            'America/Managua',
            'America/Manaus',
            'America/Martinique',
            'America/Matamoros',
            'America/Mazatlan',
            'America/Menominee',
            'America/Merida',
            'America/Metlakatla',
            'America/Mexico_City',
            'America/Miquelon',
            'America/Moncton',
            'America/Monterrey',
            'America/Montevideo',
            'America/Nassau',
            'America/New_York',
            'America/Nipigon',
            'America/Nome',
            'America/Noronha',
            'America/North_Dakota/Beulah',
            'America/North_Dakota/Center',
            'America/North_Dakota/New_Salem',
            'America/Ojinaga',
            'America/Panama',
            'America/Pangnirtung',
            'America/Paramaribo',
            'America/Phoenix',
            'America/Port_of_Spain',
            'America/Port-au-Prince',
            'America/Porto_Velho',
            'America/Puerto_Rico',
            'America/Punta_Arenas',
            'America/Rainy_River',
            'America/Rankin_Inlet',
            'America/Recife',
            'America/Regina',
            'America/Resolute',
            'America/Rio_Branco',
            'America/Santarem',
            'America/Santiago',
            'America/Santo_Domingo',
            'America/Sao_Paulo',
            'America/Scoresbysund',
            'America/Sitka',
            'America/St_Johns',
            'America/Swift_Current',
            'America/Tegucigalpa',
            'America/Thule',
            'America/Thunder_Bay',
            'America/Tijuana',
            'America/Toronto',
            'America/Vancouver',
            'America/Whitehorse',
            'America/Winnipeg',
            'America/Yakutat',
            'America/Yellowknife',
            'Antarctica/Casey',
            'Antarctica/Davis', //'Antarctica/DumontDUrville', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
            'Antarctica/Macquarie',
            'Antarctica/Mawson',
            'Antarctica/Palmer',
            'Antarctica/Rothera',
            'Antarctica/Syowa',
            'Antarctica/Troll',
            'Antarctica/Vostok',
            'Asia/Almaty',
            'Asia/Amman',
            'Asia/Anadyr',
            'Asia/Aqtau',
            'Asia/Aqtobe',
            'Asia/Ashgabat',
            'Asia/Atyrau',
            'Asia/Baghdad',
            'Asia/Baku',
            'Asia/Bangkok',
            'Asia/Barnaul',
            'Asia/Beirut',
            'Asia/Bishkek',
            'Asia/Brunei',
            'Asia/Colombo',
            'Asia/Damascus',
            'Asia/Dhaka',
            'Asia/Dili',
            'Asia/Dubai',
            'Asia/Dushanbe',
            'Asia/Famagusta',
            'Asia/Gaza',
            'Asia/Hebron',
            'Asia/Ho_Chi_Minh',
            'Asia/Hong_Kong',
            'Asia/Hovd',
            'Asia/Chita',
            'Asia/Choibalsan',
            'Asia/Irkutsk',
            'Asia/Jakarta',
            'Asia/Jayapura',
            'Asia/Jerusalem',
            'Asia/Kabul',
            'Asia/Kamchatka',
            'Asia/Karachi',
            'Asia/Kathmandu',
            'Asia/Khandyga',
            'Asia/Kolkata',
            'Asia/Krasnoyarsk',
            'Asia/Kuala_Lumpur',
            'Asia/Kuching',
            'Asia/Macau',
            'Asia/Magadan',
            'Asia/Makassar',
            'Asia/Manila',
            'Asia/Nicosia',
            'Asia/Novokuznetsk',
            'Asia/Novosibirsk',
            'Asia/Omsk',
            'Asia/Oral',
            'Asia/Pontianak',
            'Asia/Pyongyang',
            'Asia/Qatar',
            'Asia/Qyzylorda', //'Asia/Qostanay', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
            'Asia/Riyadh',
            'Asia/Sakhalin',
            'Asia/Samarkand',
            'Asia/Seoul',
            'Asia/Shanghai',
            'Asia/Singapore',
            'Asia/Srednekolymsk',
            'Asia/Taipei',
            'Asia/Tashkent',
            'Asia/Tbilisi',
            'Asia/Tehran',
            'Asia/Thimphu',
            'Asia/Tokyo',
            'Asia/Tomsk',
            'Asia/Ulaanbaatar',
            'Asia/Urumqi',
            'Asia/Ust-Nera',
            'Asia/Vladivostok',
            'Asia/Yakutsk',
            'Asia/Yangon',
            'Asia/Yekaterinburg',
            'Asia/Yerevan',
            'Atlantic/Azores',
            'Atlantic/Bermuda',
            'Atlantic/Canary',
            'Atlantic/Cape_Verde',
            'Atlantic/Faroe',
            'Atlantic/Madeira',
            'Atlantic/Reykjavik',
            'Atlantic/South_Georgia',
            'Atlantic/Stanley',
            'Australia/Adelaide',
            'Australia/Brisbane',
            'Australia/Broken_Hill',
            'Australia/Currie',
            'Australia/Darwin',
            'Australia/Eucla',
            'Australia/Hobart',
            'Australia/Lindeman',
            'Australia/Lord_Howe',
            'Australia/Melbourne',
            'Australia/Perth',
            'Australia/Sydney',
            'Europe/Amsterdam',
            'Europe/Andorra',
            'Europe/Astrakhan',
            'Europe/Athens',
            'Europe/Belgrade',
            'Europe/Berlin',
            'Europe/Brussels',
            'Europe/Budapest',
            'Europe/Bucharest',
            'Europe/Copenhagen',
            'Europe/Dublin',
            'Europe/Gibraltar',
            'Europe/Helsinki',
            'Europe/Chisinau',
            'Europe/Istanbul',
            'Europe/Kaliningrad',
            'Europe/Kiev',
            'Europe/Kirov',
            'Europe/Lisbon',
            'Europe/London',
            'Europe/Luxembourg',
            'Europe/Madrid',
            'Europe/Malta',
            'Europe/Minsk',
            'Europe/Monaco',
            'Europe/Moscow',
            'Europe/Oslo',
            'Europe/Paris',
            'Europe/Prague',
            'Europe/Riga',
            'Europe/Rome',
            'Europe/Samara',
            'Europe/Saratov',
            'Europe/Simferopol',
            'Europe/Sofia',
            'Europe/Stockholm',
            'Europe/Tallinn',
            'Europe/Tirane',
            'Europe/Ulyanovsk',
            'Europe/Uzhgorod',
            'Europe/Vienna',
            'Europe/Vilnius',
            'Europe/Volgograd',
            'Europe/Warsaw',
            'Europe/Zaporozhye',
            'Europe/Zurich',
            'Indian/Cocos',
            'Indian/Chagos',
            'Indian/Christmas',
            'Indian/Kerguelen',
            'Indian/Mahe',
            'Indian/Maldives',
            'Indian/Mauritius',
            'Indian/Reunion',
            'Pacific/Apia',
            'Pacific/Auckland',
            'Pacific/Bougainville',
            'Pacific/Easter',
            'Pacific/Efate',
            'Pacific/Enderbury',
            'Pacific/Fakaofo',
            'Pacific/Fiji',
            'Pacific/Funafuti',
            'Pacific/Galapagos',
            'Pacific/Gambier',
            'Pacific/Guadalcanal',
            'Pacific/Guam',
            'Pacific/Honolulu',
            'Pacific/Chatham',
            'Pacific/Chuuk',
            'Pacific/Kiritimati',
            'Pacific/Kosrae',
            'Pacific/Kwajalein',
            'Pacific/Majuro',
            'Pacific/Marquesas',
            'Pacific/Nauru',
            'Pacific/Niue',
            'Pacific/Norfolk',
            'Pacific/Noumea',
            'Pacific/Pago_Pago',
            'Pacific/Palau',
            'Pacific/Pitcairn',
            'Pacific/Pohnpei',
            'Pacific/Port_Moresby',
            'Pacific/Rarotonga',
            'Pacific/Tahiti',
            'Pacific/Tarawa',
            'Pacific/Tongatapu',
            'Pacific/Wake',
            'Pacific/Wallis'
        ]);
        /**
         * This object stores offsets in `ary_ianna_time_zones` (keys) and one corresponding index.
         * 
         * So for exmple, `ary_ianna_time_offsets["CET"]` is equal to **284** which is index of `ary_ianna_time_zones[284]==='Europe/Prague'` (in winter "+01:00" and in summer "+02:00").
         * 
         * Next example is `ary_ianna_time_offsets["-01:00"]` is equal to **238** which is index of `ary_ianna_time_zones[238]==='Atlantic/Cape_Verde'` (always "-01:00").
         * 
         * **IMPORTANT NOTE:** BST, EET, WET hasn't been validated! … idea is to behave the same way like CET
         * @property {Object} ary_ianna_time_offsets
         * @private
         * @memberof module:jaaJSU~$time
         */
        const ary_ianna_time_offsets= Object.freeze({
            '-01:00': 238,
            '-02:00': 242,
            '-03:00': 107,
            '-04:00': 49,
            '-05:00': 92,
            '-06:00': 62,
            '-07:00': 120,
            '-08:00': 337,
            '-09:00': 320,
            '-09:30': 330,
            '-10:00': 323,
            '-11:00': 332,
            '+01:00': 15,
            '+02:00': 8,
            '+03:00': 270,
            '+04:00': 306,
            '+04:30': 191,
            '+05:00': 221,
            '+05:30': 173,
            '+05:45': 194,
            '+06:00': 207,
            '+06:30': 232,
            '+07:00': 182,
            '+08:00': 220,
            '+08:30': 210,
            '+08:45': 249,
            '+09:00': 176,
            '+09:30': 248,
            '+10:00': 229,
            '+11:00': 314,
            '+12:00': 345,
            '+13:00': 316,
            '+14:00': 326,
            BST: 275,
            CET: 284,
            CEST: 284,
            EET: 264,
            EEST: 264,
            WET: 274,
            WEST: 274
        });
    
        
        /**
         * Function generates `DateArray` from instance of `Date`.
         * @method fromDate
         * @memberof module:jaaJSU~$time
         * @public
         * @param {Date} date_instance instance of `Date` class
         * @returns {module:jaaJSU~$time~DateArray}
         */
        function fromDate(date_instance){
            return toDateArray(date_instance.toISOString());
        }
        /**
         * Function generates `DateArray` from arguments to initialize `Date`.
         * @method fromDateArguments
         * @memberof module:jaaJSU~$time
         * @public
         * @param {...Mixed} args parameters for initialize `Date` class
         * @returns {module:jaaJSU~$time~DateArray}
         */
        function fromDateArguments(...args){
            return toDateArray((args.filter(d=> typeof d!=="undefined").length ? new Date(...args) : new Date()).toISOString());
        }
        /**
         * Function generates `DateArray` from current date and time.
         * 
         * **Warning:** Internally uses `toISOString` method so result is always converted to "+00:00": `p($time.fromNow, $time.setTimeZone("+02:00"), $time.toString())()` (`p` is some pipe function) — this returns "2019-07-10T16:48:43+02:00" instead of "2019-07-10T18:48:43+02:00" (current time) … the flow is "2019-07-10T18:48:43+02:00"-`fromNow`->"2019-07-10T16:48:43Z"-`setTimeZone`->"2019-07-10T16:48:43+02:00".
         * @method fromNow
         * @memberof module:jaaJSU~$time
         * @public
         * @returns {module:jaaJSU~$time~DateArray}
         */
        function fromNow(){
            return toDateArray((new Date()).toISOString());
        }
        /**
         * Function generates `DateArray` from passed string.
         * @method fromString
         * @memberof module:jaaJSU~$time
         * @public
         * @param {String} [timestamp_string] If `undefined` returns result of {@link module:jaaJSU~$time.fromNow}, else it is used {@link module:jaaJSU~$time.toDateArray} for parsing.
         * @param {String} [timezone= internal_zone] Default timezone — uses if is not setted in `timestamp_string`
         * @returns {module:jaaJSU~$time~DateArray}
         */
        function fromString(timestamp_string, timezone= internal_zone){
            if(!timestamp_string) return fromNow();
            let date_array= toDateArray(timestamp_string);
            if(date_array.length!==3){
                if(!isDateString(date_array[0])) date_array.unshift("");
                else if(!isTimeString(date_array[1])){
                    date_array[2]= date_array[1] || timezone;
                    date_array[1]= "";
                } else {
                    date_array[2]= timezone;
                }
            } else if(!date_array[2]&&timezone){ date_array[2]= timezone; }
            return date_array;
        }
        /**
         * This is in fact output of {@link module:jaaJSU~$time.toDateArray}.
         * @typedef {Array} DateArray
         * @memberof module:jaaJSU~$time
         * @category types descriptions
         * @inner
         * @property {String} [date=""] is always in form of "YYYY-MM-DD" or ""
         * @property {String} [time=""] is always in form of "HH:mm:SS" or "HH:mm:00" or ""
         * @property {String} [time_zone=""] is always in form of "[+-]\d\d:\d\d" or "CET" or ""
         */
        /**
         * Function generates array in a form `[ date, time, time_zone ]` from 'ISO' like string.
         * @method toDateArray
         * @memberof module:jaaJSU~$time
         * @private
         * @param {String} timestamp_string
         *  <br/>- Supported forms are combinations of date ("YYYY-MM-DD", "DD/MM/YYYY"), time ("HH:mm:ss", "HH:mm") and timezone ("CET", "+01:00", "-02:00", ...)
         *  <br/>- Typically: "2019-06-02 12:35:45 +01:00", "2019-06-02T12:35:45+01:00", "12:35:45+01:00 2019-06-02", ...
         * @returns {module:jaaJSU~$time~DateArray}
         */
        function toDateArray(timestamp_string){
            let /* these hold outputs */
                date= "", time= "", zone= "";
            let /* iteration vars: curr letter instring +helpers for timezones */
                letter, acc= "", substr_index;
            while(timestamp_string.length){
                letter= timestamp_string[0];
                if(/\d/.test(letter)){
                    if(!timestamp_string.search(/\d\d\d\d-\d\d-\d\d/)){
                        date= timestamp_string.substr(0, 10);
                        timestamp_string= timestamp_string.substr(10);
                    } else if(!timestamp_string.search(/\d\d\/\d\d\/\d\d\d\d/)){
                        date= timestamp_string.substr(0, 10).split("/").sort(()=> -1).join("-");
                        timestamp_string= timestamp_string.substr(10);
                    } else if(!timestamp_string.search(/\d\d:\d\d:\d\d/)){
                        time= "T"+timestamp_string.substr(0, 8);
                        timestamp_string= timestamp_string.substr(8);
                    } else if(!timestamp_string.search(/\d\d:\d\d/)){
                        time= "T"+timestamp_string.substr(0, 5)+":00";
                        timestamp_string= timestamp_string.substr(5);
                    } else {
                        timestamp_string= timestamp_string.substr(1);
                    }
                } else if(/[ ,\._]/.test(letter)||/T\d/.test(letter)){
                    timestamp_string= timestamp_string.substr(1);
                } else if(!timestamp_string.search(/[\+\-]\d\d:\d\d/)){
                    acc= timestamp_string.substr(0, 6);
                    timestamp_string= timestamp_string.substr(6);
                    if(Reflect.has(ary_ianna_time_offsets, acc)){
                        zone= acc;
                        acc= "";
                    } else if(acc.substr(1,5)==="00:00"){
                        zone= "Z";
                        acc= "";
                    }
                } else if(!timestamp_string.search(/[A-Z]{2,}/)){
                    substr_index= timestamp_string.search(/[^A-Z]/);
                    acc= substr_index===-1 ? timestamp_string : timestamp_string.substr(0, substr_index);
                    timestamp_string= timestamp_string.substr(acc.length);
                    if(acc==="CET"){//Reflect.has(ary_ianna_time_offsets, acc)
                        zone= acc;
                        acc= "";
                    }
                } else if(letter==="Z"){
                    zone= "Z";
                    timestamp_string= timestamp_string.substr(1);
                } else {
                    timestamp_string= timestamp_string.substr(1);
                }
                if(date&&time&&zone){ timestamp_string= ""; }
            }
            return [ date, time, zone ];
        }
        
        /**
         * It is in fact argument for `options` in [`Date.prototype.toLocaleString` Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString#Parameters).
         * @typedef {Object} toLocaleStringOptions
         * @memberof module:jaaJSU~$time
         * @category types descriptions
         * @inner
         * @property {String} [locale=internal_locale] In which language/national format generate final string
         * @property {String} [timeZone=internal_zone] Time zone name from [`ary_ianna_time_zones`](#props_ary_ianna_time_zones).
         * @property {Boolean} [declension=true] Needed for some languages — for example in Czech: "10. července" (`declension=true`), or "10. červenec" (`declension=false`)
         */
        /**
         * Function generates text based on `format`, `locale` and `timeZone` from `DateArray`.
         * @method toStringFromObject
         * @memberof module:jaaJSU~$time
         * @private
         * @param {module:jaaJSU~$time~ArrayOfOperation[]} format
         * @param {module:jaaJSU~$time~toLocaleStringOptions} params_obj
         * @returns {module:jaaJSU~$time~function_DateArray2String}
         * @example
         * $time.toStringFromObject([ ["day", "2-digit"], [ "text", "/" ], ["month", "2-digit"], [ "text", "/" ], ["year", "numeric"] ],{ locale: "en-GB" })($time.fromNow());//= "05/06/2019"
         */
        function toStringFromObject(format= format_arrays.SQL, { locale= internal_locale, declension= true, timeZone= internal_zone }= {}){
            return date_array=> format.map(evaluateFormatObject(toDate(date_array), locale, timeZone, declension)).join("");
        }
        function evaluateFormatObject(date, locale, timeZone, declension){
            const localeObj= generateTimeZoneFormatObject.bind(null, timeZone);
            return function([type, value, modify]){
                let out= evaluateNthFromObject(date, type, value, modify, declension, locale, timeZone, localeObj);
                if(value==="2-digit"&&String(out).length===1) out= "0"+out; //fix
                if(modify==="two_letters") out= out.substr(0,2);
                else if(modify==="ordinal_number"&&locale.indexOf("en")!==-1) out= getOrdinalSuffix(out);
                return out;
            };
        }
        function evaluateNthFromObject(date, type, value, modify, declension, locale, timeZone, localeObj){
            switch (true){
                case type==="text":                                     return value;
                case type==="week":                                     return getWeekNumber(!timeZone ? date: new Date(( (l, timeZone, two)=> l({ timeZone, year: "numeric" })+"-"+double(l({ timeZone, month: two }))+"-"+double(l({ timeZone, day: two }))+"T"+double(l({ timeZone, hour: two }))+":"+double(l({ timeZone, minute: two }))+":"+double(l({ timeZone, second: two })) )( Date.prototype.toLocaleString.bind(date, "en-GB"), timeZone, "2-digit" )));
                case type==="weekday"&&value==="numeric":               return getWeekDay()(date);
                case type==="month"&&value==="long"&&declension:        return date.toLocaleString(locale,localeObj({ [type]: value, day: "numeric" })).replace(/[\d \.\/\\]/g, "");
                case type==="hour"&&modify.toLowerCase()==="a":         return date.toLocaleString(modify==="A" ? "en-US" : "en-GB",localeObj({ [type]: value, hourCycle: "h12" })).replace(/[\d \.\/\\]/g, "");
                case type==="hour":                                     return date.toLocaleString(locale,localeObj({ [type]: value, hourCycle: modify })).replace(/[ \.\/\\pam]/ig, "");
                default:                                                return date.toLocaleString(locale,localeObj({ [type]: value }));
            }
        }
        /**
         * This holds information about how show one piece of String output typically for {@link module:jaaJSU~$time.toString}.
         * 
         * Predefined values can be found at {@link module:jaaJSU~$time.format_arrays}.
         * @typedef {Array} ArrayOfOperation
         * @memberof module:jaaJSU~$time
         * @category types descriptions
         * @inner
         * @property {String} operation In fact names of keys in [`Date.prototype.toLocaleString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) (i. e. "weekday", "month") or "text".
         * @property {String} argument In fact value of given key in [`Date.prototype.toLocaleString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) (i. e. "2-digit", "numeric").
         * @property {String} params Some additional information/modifications like "two_letters", "ordinal_number", ….
         */
        
        /**
         * Generates multidimensional array for formatting (eg. "YYYY"=> `[ [ "year", "numeric" ] ]`).
         * @method getFormatObject
         * @memberof module:jaaJSU~$time
         * @private
         * @param {String} format_string supports:
         * <br/>- "YYYY", "YY",
         * <br/>- "MM", "MMM", "MMMM",
         * <br/>- "dddd" (weekday - Monday), "ddd" (shorter weekday - Mon), "dd" (Mo), "d" (0===Sun <> 6===Sat),
         * <br/>- "DD", "D", "Do",
         * <br/>- "HH", "H",
         * <br/>- "mm", "m",
         * <br/>- "SS", "S",
         * <br/>- "W", "Wo"
         * @returns {module:jaaJSU~$time~ArrayOfOperation[]}
         */
        function getFormatObject(format_string= ""){
            let out= [], out_last_index, letter;
            while(format_string.length){
                switch(format_string[0]){
                    case "M": handleM();                            break;
                    case "d": handled();                            break;
                    case "W": handleWD("week", "W");                break;
                    case "Y": handleY();                            break;
                    case "D": handleWD("day", "D");                 break;
                    case "H": handleHh("hour", "H", "h23");         break;
                    case "k": handleHh("hour", "k", "h24");         break;
                    case "h": handleHh("hour", "h", "h12");         break;
                    case "A": handleAa("A");                        break;
                    case "a": handleAa("a");                        break;
                    case "m": handle("minute", "m");                break;
                    case "s": handle("second", "s");                break;
                    case "[": handleText();                         break;
                    default:
                        letter= format_string[0];
                        out_last_index= out.length-1;
                        if(out_last_index>-1&&out[out_last_index][0]==="text") out[out_last_index][1]+= letter;
                        else out.push(["text", letter]);
                        format_string= format_string.substring(1);
                }
            }
            function handleM(){
                let type= "numeric";
                if(!format_string.search(/MMMM/)){
                    type= "long";
                    format_string= format_string.substring(4);
                } else if(!format_string.search(/MMM/)){
                    type= "short";
                    format_string= format_string.substring(3);
                } else if(!format_string.search(/MM/)){
                    type= "2-digit";
                    format_string= format_string.substring(2);
                } else if(!format_string.search(/Mo/)){
                    format_string= format_string.substring(2);
                    return out.push(["month", type, "ordinal_number"]);
                } else {
                    format_string= format_string.substring(1);
                }
                out.push(["month", type]);
            }
            function handled(){
                let type= "numeric";
                if(!format_string.search(/dddd/)){
                    type= "long";
                    format_string= format_string.substring(4);
                } else if(!format_string.search(/ddd/)){
                    type= "short";
                    format_string= format_string.substring(3);
                } else if(!format_string.search(/dd/)){
                    type= "short";
                    format_string= format_string.substring(2);
                    return out.push(["weekday", type, "two_letters"]);
                } else {
                    format_string= format_string.substring(1);
                }
                out.push(["weekday", type]);
            }
            function handleY(){
                let type= "2-digit";
                if(!format_string.search(/YYYY/)){
                    type= "numeric";
                    format_string= format_string.substring(4);
                } else {
                    format_string= format_string.substring(2);
                }
                out.push(["year", type]);
            }
            function handleWD(out_key, letter){
                let type= "numeric";
                if(!format_string.search(new RegExp(letter+"o"))){
                    format_string= format_string.substring(2);
                    return out.push([out_key, type, "ordinal_number"]);
                } else if(!format_string.search(new RegExp(letter+letter))){
                    type= "2-digit";
                    format_string= format_string.substring(2);
                } else {
                    format_string= format_string.substring(1);
                }
                out.push([out_key, type]);
            }
            function handleHh(out_key, letter, hourCycle){
                let type= "numeric";
                if(!format_string.search(new RegExp(letter+letter))){
                    type= "2-digit";
                    format_string= format_string.substring(2);
                } else {
                    format_string= format_string.substring(1);
                }
                out.push([out_key, type, hourCycle]);
            }
            function handleAa(modify){
                format_string= format_string.substring(1);
                out.push(["hour", "numeric", modify]);
            }
            function handle(out_key, letter){
                let type= "numeric";
                if(!format_string.search(new RegExp(letter+letter))){
                    type= "2-digit";
                    format_string= format_string.substring(2);
                } else {
                    format_string= format_string.substring(1);
                }
                out.push([out_key, type]);
            }
            function handleText(){
                const text_end= format_string.indexOf("]");
                if(text_end===-1){
                    format_string= format_string.substring(1);
                    return false;
                }
                out.push(["text", format_string.substr(1,text_end-1)]);
                format_string= format_string.substr(text_end+1);
            }
            return out;
        }
        /**
         * Function initializes `Date` from `DateArray`.
         * @method toDate
         * @memberof module:jaaJSU~$time
         * @public
         * @param {module:jaaJSU~$time~DateArray} date_array
         * @returns {Date}
         */
        function toDate([ date, time, zone ]= []){
            if(!date) date= fromNow()[0];
            if(!time) time= "T00:00:00";
            if(!zone) zone= getTimeZoneOffsetString(date);
            if(zone==="CET") zone= getCETOffset([ date, time ]);
            return new Date(date+time+zone);
        }
        /**
         * It is wrapper arround [`Date.prototype.toLocaleString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString).
         * @method toLocaleString
         * @memberof module:jaaJSU~$time
         * @public
         * @param {String} [format_object_name="date_time"] name of predefined time/date combinations see {@link module:jaaJSU~$time.format_objects}.
         * @param {module:jaaJSU~$time~toLocaleStringOptions} [toLocaleStringOptions]
         * @returns {module:jaaJSU~$time~function_DateArray2String} returns result of [`Date.prototype.toLocaleString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString);
         */
        function toLocaleString(format_object_name= "date_time", { locale= internal_locale, timeZone= internal_zone }= {}){
            return date_array=> toDate(date_array).toLocaleString(locale, generateTimeZoneFormatObject(timeZone, format_objects[format_object_name]));
        }
        function toRelative(reference_date_array){
            return date_array=> getRelative(getDiffMs(reference_date_array)(date_array));
        }
        
        function getDiff(reference_time, output_measure_string= "seconds", full_precision= false){
            const c_measure= { seconds: 1000, minutes: 60000 /* 60*sec */, hours: 3600000 /* 60*mins */, days: 86400000 /* 24*days */, weeks: 604800000 /* 7*days */, months: 2419200000 /* 4*weeks */, years: 29030400000 /* 12*months */ };
            const diffFun= getDiffMs(reference_time, -c_measure[output_measure_string]);
            return function diff(target_time){
                const diff_val= diffFun(target_time);
                return full_precision ? diff_val : Math.floor(diff_val);
            };
        }
        function getDiffMs(reference_time, output_measure= 1){
            const reference_time_ms= reference_time ? toDate(reference_time).getTime() : false;
            return function diff(target_time){ return (toDate(target_time).getTime()-(reference_time_ms ? reference_time_ms : toDate(fromNow()).getTime()))/output_measure; };
        }
        function getRelative(ms_diff){
            const { abs, floor, round }= Math;
            const out_text= ms_diff < 0 ? "%s ago" : "in %s";
            ms_diff= abs(ms_diff);
            if(ms_diff<1500) return "now";
            ms_diff= floor(ms_diff/1000);
            if(ms_diff<10) return out_text.replace("%s", "a few seconds");
            if(ms_diff<60) return out_text.replace("%s", ms_diff+" seconds");
            ms_diff= floor(ms_diff/60);
            if(ms_diff===1) return out_text.replace("%s", "a minute");
            if(ms_diff<60) return out_text.replace("%s", ms_diff+" minutes");
            ms_diff= round(ms_diff/60);
            if(ms_diff===1) return out_text.replace("%s", "an hour");
            if(ms_diff<24) return out_text.replace("%s", ms_diff+" hours");
            ms_diff= ms_diff/24;
            if(round(ms_diff)===1) return out_text.replace("%s", "a day");
            if(ms_diff<29.5) return out_text.replace("%s", round(ms_diff)+" days");
            ms_diff= ms_diff/30.41666; //avg per month
            if(round(ms_diff)===1) return out_text.replace("%s", "a month");
            if(ms_diff<12) return out_text.replace("%s", round(ms_diff)+" months");
            ms_diff= round(ms_diff/12);
            if(ms_diff===1) return out_text.replace("%s", "a year");
            return out_text.replace("%s", ms_diff+" years");
        }
        /**
         * @function function_DateArray2String
         * @memberof module:jaaJSU~$time
         * @category types descriptions
         * @inner
         * @param {module:jaaJSU~$time~DateArray} date_array
         * @returns {String}
         */
        /**
         * Function generates text based on `format`, `locale` and `timeZone` from `DateArray`.
         * @method toString
         * @memberof module:jaaJSU~$time
         * @public
         * @param {String|module:jaaJSU~$time~ArrayOfOperation[]} [format=$time.formats.SQL]
         * <br/>- Placeholder for replace/generate final string (eg. "MM"===two digits month) — see {@link module:jaaJSU~$time.getFormatObject}.
         * <br/>- Or lists of predefined formats — see {@link module:jaaJSU~$time.formats}.
         * @param {module:jaaJSU~$time~toLocaleStringOptions} [toLocaleStringOptions]
         * @returns {module:jaaJSU~$time~function_DateArray2String}
         * @example
         * $time.toString("DD/MM/YYYY HH:mm:SS",{ locale: "en-GB" })($time.fromNow());//= "05/06/2019 09:32:20"
         * $time.toString($time.formats.SQL)($time.fromNow());//= "2019-06-05 09:32:20"
         */
        function toString(format, params_obj){
            return toStringFromObject(Array.isArray(format) ? format : format ? getFormatObject(format) : undefined, params_obj);
        }
        
        function getCETOffset([ date, time ]= []){
            if(!date||!time){
                let curr= fromNow();
                if(!date) date= curr[0];
                if(!time) time= curr[1].replace(/\.\d+/, "");
            }
            const /* repeting things for getting nexts consts group (line 1), for comparing in return (line 2) */
                timeZone= "Europe/Prague", locale= "en-GB", date_and_time= date+time,
                en_date_version= date.split("-").reverse().join("/")+", "+time.replace("T", "");
            const /* for comparing in return */
                [ date_one_hour, date_two_hours ]= [ "+01:00", "+02:00" ].map(offset=> new Date(date_and_time+offset).toLocaleString(locale, { timeZone }));
            return en_date_version===date_one_hour ? "+01:00" : en_date_version===date_two_hours ? "+02:00" : "Z";
        }
        /**
         * @method getTimeZone
         * @memberof module:jaaJSU~$time
         * @param {module:jaaJSU~$time~DateArray} date
         * @param {Object} parameters
         * @param {String} [parameters.locale=internal_locale]
         * @param {String} [parameters.description="long"] The representation of the time zone name. Possible values are:
         * <br/>- `"none"` skip description
         * <br/>- `"long"` (e.g., `British Summer Time`)
         * <br/>- `"short"` (e.g., `GMT+1`)
         * @param {String} [parameters.offset=false] show offset part: `"UTC+01:00 (…)"` or `"UTC+01:00"` (if `description="none"`)
         * @returns {String} Timezone name/identificator (with offset)
         */
        function getTimeZone(date, { locale= internal_locale, description= "long", offset= false }= {}){
            description= description.toLocaleLowerCase();
            const [ date_part, time_part, offset_part ]= getDateArrayFromMixed(date), date_instance= new Date([ date_part, time_part, offset_part ].join(""));
            const locale_param= Object.keys(ary_ianna_time_offsets).indexOf(offset_part)!==-1 ? { timeZone: ary_ianna_time_zones[ary_ianna_time_offsets[offset_part]] } : {};
            let out_description= description==="none" ? "" : date_instance.toLocaleString(locale, Object.assign({ timeZoneName: description }, locale_param)).replace(date_instance.toLocaleString(locale, locale_param), "").trim();
            const out_offset= !offset ? "" : "UTC"+(offset_part==="Z" ? getTimeZoneOffsetStringFromOffset(date_instance.getTimezoneOffset()) : date_instance.toLocaleString(locale, Object.assign({ timeZoneName: "short" }, locale_param)).replace(date_instance.toLocaleString(locale, locale_param), "").replace(/[^\d\+\-\:]/g, "").trim());
            if(out_description&&out_offset) out_description= " ("+out_description+")";
            return out_offset+out_description;
        }
        /**
         * @method getCurrentTimeZone
         * @memberof module:jaaJSU~$time
         * @param {Object} parameters
         * @param {String} [parameters.locale=internal_locale]
         * @param {String} [parameters.description="long"] The representation of the time zone name. Possible values are:
         * <br/>- `"none"` skip description
         * <br/>- `"long"` (e.g., `British Summer Time`)
         * <br/>- `"short"` (e.g., `GMT+1`)
         * <br/>- `"ianna"`/`"IANNA"` (e.g. `Europe/Prague`): `locale` has no effect for this
         * @param {String} [parameters.offset=false] show offset part: `"UTC+01:00 (…)"` or `"UTC+01:00"` (if `description="none"`)
         * @returns {String} Timezone name/identificator (with offset) for current timezone
         */
        function getCurrentTimeZone({ locale= internal_locale, description= "long", offset= false }= {}){
            description= description.toLocaleLowerCase();
            if(description!=="ianna") return getTimeZone(undefined, { locale, description, offset });
            let out_description= "", dtf, dtf_ro;
            if(typeof Intl!=='undefined'&&typeof Intl.DateTimeFormat==='function'){
                dtf= Intl.DateTimeFormat() || {};
                if(typeof dtf.resolvedOptions!=="function") return undefined;
                dtf_ro= dtf.resolvedOptions().timeZone;
                out_description= Object.keys(ary_ianna_time_offsets).indexOf(dtf_ro)!==-1 ? ary_ianna_time_zones[ary_ianna_time_offsets[dtf_ro]] : dtf_ro;
            }
            const out_offset= !offset ? "" : getTimeZone(undefined, { locale, description: "none", offset: true });
            if(out_description&&out_offset) out_description= " ("+out_description+")";
            return out_offset+out_description;
        }
        function getTimeZoneOffset(date, timeZone= internal_zone){
            const date_instance= new Date(getDateArrayFromMixed(date).join(""));
            if(timeZone) return getTimeZoneDiffOffset(date_instance, timeZone);
            return date_instance.getTimezoneOffset();
        }
        function getTimeZoneDiffOffset(date_instance, timeZone= internal_zone){
            const [ sign= "+", hours= 0, minutes= 0 ]= date_instance.toLocaleString('en-GB', { timeZone, weekday: "short", timeZoneName: "short" }).replace(/(\+|\-)/g, (_, m)=> m+":").replace(/[^\d:\+\-]/g, "").split(":");
            const target_offset= ( sign==="-" ? -1 : 1 )*(Number(hours)*60+Number(minutes));
            return target_offset+date_instance.getTimezoneOffset();
        }
        function getTimeZoneOffsetString(date){
             return getTimeZoneOffsetStringFromOffset(getTimeZoneOffset(date));
        }
        function generateTimeZoneFormatObject(timeZone, format_object){
            if(!timeZone) return format_object;
            if(ary_ianna_time_zones.indexOf(timeZone)!==-1) return Object.assign({ timeZone }, format_object);
            if(typeof ary_ianna_time_offsets[timeZone]!=="undefined") return Object.assign({ timeZone: ary_ianna_time_zones[ary_ianna_time_offsets[timeZone]] }, format_object);
            return format_object;
        }
        function getDateArrayFromMixed(date_string){
            if(!date_string) return fromNow();
            if(!Array.isArray(date_string)) return toDateArray(date_string);
            return date_string;
        }
        function getTimeZoneOffsetStringFromOffset(offset){
            const { floor, abs }= Math;
            let out= offset > 0 ? "-" : "+";
            offset= abs(offset);
            out+= double(floor(offset/60))+":"+double(offset%60);
            return out;
        }
        
        /**
         * @function function_Date2Date
         * @memberof module:jaaJSU~$time
         * @category types descriptions
         * @inner
         * @param {Date} date_instance
         * @returns {Date}
         */
        /**
         * @function function_Date2Number
         * @memberof module:jaaJSU~$time
         * @category types descriptions
         * @inner
         * @param {Date} date_instance
         * @returns {Number}
         */
        /**
         * This modify given **Date** instance (add days).
         * @method addDays
         * @memberof module:jaaJSU~$time.Date
         * @public
         * @param {Number} days_num How many days to add to `date_instance`
         * @returns {module:jaaJSU~$time~function_Date2Date}
         * */
        function addDays(days_num){
            return date_instance=> (date_instance.setDate(date_instance.getDate()+days_num), date_instance);
        }
        /**
         * This modify given **Date** instance (add months).
         * @method addMonths
         * @memberof module:jaaJSU~$time.Date
         * @public
         * @param {Number} months_num How many months to add to `date_instance`
         * @returns {module:jaaJSU~$time~function_Date2Date}
         * */
        function addMonths(months_num){
            return date_instance=> (date_instance.setMonth(date_instance.getMonth()+months_num), date_instance);
        }
        /**
         * @method getWeekDay
         * @memberof module:jaaJSU~$time.Date
         * @public
         * @param {String} [type="numeric"] Show week numebr by default or se `weekday` in **MDN** see {@link module:jaaJSU~$time~toLocaleStringOptions}
         * @param {module:jaaJSU~$time~toLocaleStringOptions} [toLocaleStringOptions] Key `declension` is redutant for this function
         * @returns {module:jaaJSU~$time~function_Date2Number} If `type="numeric"`, it returns **0 (Su) - 6 (Sa)**, else it returns **name of week day**
         * */
        function getWeekDay(type= "numeric", { locale= internal_locale, timeZone= internal_zone }= {}){
            return type==="numeric" ? date_instance=> date_instance.getDay() : date_instance=> date_instance.toLocaleString(locale, timeZone ? { timeZone, weekday: type } : { timeZone, weekday: type });
        }
        /**
         * This return ISO number of week.
         * @method getWeekNumber
         * @memberof module:jaaJSU~$time.Date
         * @public
         * @param {Date} date_instance
         * @return {Number} In fact, it calculates no. of thursdays from this week to the first one (January 4 is always in week 1.)
         */
        function getWeekNumber(date_instance){
            const tdt= new Date(date_instance.valueOf());
            tdt.setDate(tdt.getDate() + 3 - (date_instance.getDay() + 6) % 7);
            var firstThursday = tdt.valueOf();
            tdt.setMonth(0, 1);
            if(tdt.getDay() !== 4){
                tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
            }
            return 1 + Math.ceil((firstThursday - tdt) / 604800000);
        }
        /**
         * @function function_DateArray2DateArray
         * @memberof module:jaaJSU~$time
         * @category types descriptions
         * @inner
         * @param {module:jaaJSU~$time~DateArray} date_array
         * @returns {module:jaaJSU~$time~DateArray}
         */
        
        /**
         * Curried method, first invocation sets operations (i. e. `{ addDay: 1 }`) and returns `function_DateArray2DateArray`.
         * @method modify
         * @memberof module:jaaJSU~$time
         * @public
         * @param {Object} mod_obj &nbsp;
         * <br/>- object literal representing requested operations
         * <br/>- use name convention like [setters for `Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Setter) (only one argument is allowed)
         * <br/>- supports also *add\** commands with the same notation ("setMonth" => "addMonth")
         * <br/>- **IMPORTANT NOTE:** There are three behaviour changes
         * <br/>&nbsp;&nbsp;&nbsp;&nbsp;- "setMonth" is indexed from 1 (instead of 0)
         * <br/>&nbsp;&nbsp;&nbsp;&nbsp;- for "setDate" there is alias "setDay"
         * <br/>&nbsp;&nbsp;&nbsp;&nbsp;- for "addDate" there is alias "addDays"
         * <br/>- Some operations: **"\*Date"** (or **"setDay"**, **"addDays"**), **"\*Month"**, **"\*FullYear"**, **"\*Hours"**, **"\*Minutes"**, **"\*Seconds"**
         * @returns {module:jaaJSU~$time~function_DateArray2DateArray}
         */
        function modify(mod_obj){
            const operations= Object.keys(mod_obj);
            return function(date_array){
                const dateObject= toDate(date_array);
                for(let i=0, operation; ( operation= operations[i] ); i++){
                    if(operation==="addDays") addDays(mod_obj[operation])(dateObject);
                    else if(operation.substr(0,3)==="add") modifyAdditions(operation, mod_obj[operation], dateObject);
                    else if(operation==="setMonth") dateObject.setMonth(mod_obj[operation]-1);
                    else if(Reflect.has(dateObject, operation)) dateObject[operation](mod_obj[operation]);
                    else if(operation==="setDay") dateObject.setDate(mod_obj[operation]);
                }
                return fromDate(dateObject);
            };
        }
        /**
         * Helper method for invoking "add*" operations in [`modify`](#methods_modify).
         * 
         * In general `d.set...(d.get...+${value})` (where `d` is instance of `Date`).
         * @method modifyAdditions
         * @memberof module:jaaJSU~$time
         * @private
         * @param {String} operation e.g. "addMonth"
         * @param {Number} value mainly argument (number) for 
         * @param {Date} dateObject instance of `Date`
         * @returns {Date} returns `dateObject`
         */
        function modifyAdditions(operation, value, dateObject){
            const cmd= operation.substr(3); /* addMonth=> ...Month => (set/get)Month */
            dateObject["set"+cmd](dateObject["get"+cmd]()+value);
            return dateObject;
        }
        function redefineTimeZone(zone= internal_zone){
            return ([ date= "", time= "" ]= [])=> [ date, time, zone ];
        }
        
        /**
        * Function adds leading zero to the `time`. [It can be replaced in future: see `padStart`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
        * @method double
        * @memberof module:jaaJSU~$time
        * @public
        * @param {Number|String} time
        * @return {String}
        *  * 00, 01, 02, ..., 09, 10, ..., 100, ...
        */
        function double(n){
            n= String(n);
            return n.length===1 ? "0"+n : n;
        }
        /**
         * Returns number of days in given month (and year)
         * @method daysInMonth
         * @memberof module:jaaJSU~$time
         * @public
         * @param {String|Number} month ISO number of month (eg 01 or 1 for January)
         * @param {String|Number} [year=">>current year<<"]  ISO nimber of year (eg. 2019)
         * @returns {Number} total of days
         */
        function daysInMonth(month, year= (new Date()).getFullYear()){/* months indexing from 0 */
            return new Date(+year, +month, 0 /* last in prev month */).getDate();
        }
        /**
         * Returns number of days in given month
         * @method getDaysInMonth
         * @memberof module:jaaJSU~$time
         * @public
         * @param {module:jaaJSU~$time.types~DateArray} [date_array=">>current year<<"]
         * @returns {Number} total of days
         */
        function getDaysInMonth([ date= fromNow()[0] ]= []){
            const [ _, month, year ]= date.split("-").map(Number);
            return daysInMonth(month, year);
        }
        /**
        * @method getMonthName
        * @memberof module:jaaJSU~$time
        * @public
        * @param {Number} n Month number (typically [1-12]); Works cyclically `13===1, ...`
        * @param {Number|Boolean} [l=undefined] Length of output Month name
        * @return {String} English month name
        * @example
        * console.log($time.getMonthName(5));//"May"
        * console.log($time.getMonthName(24, 4));//"Dece"
        */
        function getMonthName(n,l) {
            if(typeof n!=="number") n= parseInt(n);
            if(isNaN(n)) return false;
            let s= ["December","January","February","March","April","May","June", "July","August","September","October","November"];
            let v= s[n%12];
            if(l){
                if(l===-1){l=3; if(v.length===4) l=4;}
                v= v.substring(0,l);
            }
            return v;
        }
        /**
         * See {@link module:jaaJSU~$time.ordinal_numbers}.
         * @method getOrdinalSuffix
         * @memberof module:jaaJSU~$time
         * @public
         * @param {Number} n
         * @return {String} `n`+English suffix
         * @example
         * console.log($time.getOrdinalSuffix(1));//"1st"
         */
        function getOrdinalSuffix(n_orig) {
            const n= typeof n_orig==="number" ? n_orig : parseInt(n_orig);
            if(isNaN(n)) return n_orig;
            let v= n%100;
            return n_orig+(ordinal_numbers[(v-20)%10]||ordinal_numbers[v]||ordinal_numbers[0]);
        }
        
        return {
            /**
             * Alias for `undefined` which can be used to trigger default value of argument.
             * @property {Undefined} _
             * @memberof module:jaaJSU~$time
             * @public
             * @example
             * test($time._)==="A"; function test(a= "A"){ return a; }
             */
            _: undefined,
        
            fromNow, fromString, fromDate, fromDateArguments,
        
            toDate, toString, toLocaleString, toRelative,
        
            getDiff, getRelative,
            getCETOffset, getTimeZoneOffset, getTimeZoneOffsetString, getTimeZone, getCurrentTimeZone,
            /**
             * @namespace Date
             * @memberof module:jaaJSU~$time
             * @readonly
             */
            Date: { getWeekDay, getWeekNumber, addDays, addMonths },
            redefineTimeZone, modify,
        
            /* backward compatibility */ double, getOrdinalSuffix, getMonthName,
            getDaysInMonth, daysInMonth,
        
            getTimeZones: ()=> ary_ianna_time_zones, isTimeZone: candidate=> ary_ianna_time_zones.indexOf(candidate)!==-1,
            setInternalZone: zone=> internal_zone= zone, setInternalLocale: locale=> internal_locale= locale,
            /**
             * Public name of {@link module:jaaJSU~$time.format_arrays}.
             * @namespace formats
             * @alias module:jaaJSU~$time.format_arrays
             * @memberof module:jaaJSU~$time
             * @readonly
             * @static
             */
            formats: format_arrays
        };
    })();
    
    
    

    /**
     * Exported name of {@link module:jaaJSU~$time} namespace.
     * @namespace $time
     * @global
     */
    export_as($time, "$time");
    return out;
});
