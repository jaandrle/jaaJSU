/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/**
 * Namespaces container (module) which registers namespaces into the global (typically `window`).
 * Original repository can be found at "https://github.com/jaandrle/jaaJSU#readme".
 * @module jaaJSU.{global}
 */
(function(module_name, factory) {
    let window_export= factory(window, document);
    Object.keys(window_export).forEach(key=> window[key]= window_export[key]);
    window[module_name+"_version"]= "0.6.0";
})("jaaJSU", function(window, document){
    var out= {};
    function export_as(obj, key){ out[key]= obj; }
    function __eachBind(fun){
        return (i_function, scope, share)=> iterable=> fun(iterable, i_function, scope, share);
    }
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
    
    /* global isMandatory *///gulp.keep.line
    

    /**
     * This NAMESPACE provides features for Arrays.
     * @class $array.{namespace}
     * @static
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
         *  * `i_function(o: Object)`
         *      * `item` Mixed: Nth value for `key` in `iterable`.
         *      * `key` Number: Idicies 0...`Object.keys(iterable).length`.
         *      * `last` Boolean: Is setted True, if it is the last element in array.
         *      * `share` Mixed|undefined: shared variable - works similar to `*.reduce` method
         * @param {Object|undefined} scope
         *  * An argument for `i_function.call(*,...)`
         * @return {Mixed}
         *  * `share`
         */
        each: __eachInArrayLike,
        eachFun: __eachBind(__eachInArrayLike),
        /**
         * Procedure for iterating throught Array `iterable` like [each](#methods_each), but use `for(...;(item= iterable[i]);i++)...`.
         * @method eachDynamic
         * @param {...Mixed} iterable
         *  * An array-like object for iterating.
         * @param {Function} i_function
         *  * This procedure is called for each element in `iterable` Array.
         *  * `i_function(o: Object)`
         *      * `item` Mixed: Nth value for `key` in `iterable`.
         *      * `key` Number: Idicies 0...`Object.keys(iterable).length`.
         *      * `last` Boolean: Is setted True, if it is the last element in array.
         *      * `share` Mixed|undefined: shared variable - works similar to `*.reduce` method
         * @param {Object|undefined} scope
         *  * An argument for `i_function.call(*,...)`
         * @return {Mixed}
         *  * `share`
         */
        eachDynamic: __eachInArrayLikeDynamic,
        eachDynamicFun: __eachBind(__eachInArrayLikeDynamic),
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
                    __eachInArrayLike(arr, ({item, key})=>out[+!Boolean(fn(item, key))].push(item));
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
     * @class $async.{namespace}
     * @static
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
     * @class $dom.{namespace}
     * @static
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
         * Procedure remove children of given element `container`.
         * @method empty
         * @param {NodeElement} container Remove all its children
         */
        empty: function(container){
            let len = container.childNodes.length;
            while(len--){ container.removeChild(container.lastChild); }
        },
        /**
         * Procedure places `new_element` after `reference` elements
         * @method insertAfter
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
         * Procedure replaces `el_old` element by new one (`new_el`)
         * @method replace
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
         * @param {NodeElement} element
         *  * Element target
         * @param {String} attribute_name
         *  * Name of attribute
         * @param {String} attribute_a
         *  * Value of attribute
         * @param {String} attribute_b
         *  * Value of attribute
         * @return {String}
         *  * `attribute_a` or `attribute_b`
         */
        toggleAttribute: function(element, attribute_name, attribute_a, attribute_b){
            const attribute_new= element.getAttribute(attribute_name) === attribute_a ? attribute_b : attribute_a;
            element.setAttribute(attribute_name, attribute_new);
            return attribute_new;
        },
        /**
         * Alias for `element.dataset[data_name]= element.dataset[data_name] === data_a ? data_b : data_a`
         * @method toggleDataset
         * @param {NodeElement} element
         *  * Element target
         * @param {String} data_name
         *  * Name of dataset key
         * @param {String} data_a
         *  * Name of dataset value
         * @param {String} data_b
         *  * Name of dataset
         * @return {String}
         *  * `data_a` or `data_b`
         */
        toggleDataset: function(element, data_name, data_a, data_b){
            return ( element.dataset[data_name]= element.dataset[data_name] === data_a ? data_b : data_a );
        },
        /**
         * Procedure for iterating throught NodeList `iterable`.
         * @method each
         * @param {...Mixed} iterable
         *  * An array-like object for iterating.
         * @param {Function} i_function
         *  * This procedure is called for each element in `iterable` Array.
         *  * `i_function(o: Object)`
         *      * `item` Mixed: Nth value for `key` in `iterable`.
         *      * `key` Number: Idicies 0...`Object.keys(iterable).length`.
         *      * `last` Boolean: Is setted True, if it is the last element in array.
         *      * `share` Mixed|undefined: shared variable - works similar to `*.reduce` method
         * @param {Object|undefined} scope
         *  * An argument for `i_function.call(*,...)`
         * @return {Mixed}
         *  * `share`
         */
        each: __eachInArrayLike,
        eachFun: __eachBind(__eachInArrayLike),
        /**
         * Procedure for iterating throught NodeList `iterable` like [each](#methods_each), but use `for(...;(item= iterable[i]);i++)...`.
         * @method eachDynamic
         * @param {...Mixed} iterable
         *  * An array-like object for iterating.
         * @param {Function} i_function
         *  * This procedure is called for each element in `iterable` Array.
         *  * `i_function(o: Object)`
         *      * `item` Mixed: Nth value for `key` in `iterable`.
         *      * `key` Number: Idicies 0...`Object.keys(iterable).length`.
         *      * `last` Boolean: Is setted True, if it is the last element in array.
         *      * `share` Mixed|undefined: shared variable - works similar to `*.reduce` method
         * @param {Object|undefined} scope
         *  * An argument for `i_function.call(*,...)`
         * @return {Mixed}
         *  * `share`
         */
        eachDynamic: __eachInArrayLikeDynamic,
        eachDynamicFun: __eachBind(__eachInArrayLikeDynamic)
    };
    /* core.js *//* global parseHTML, c_CMD, active_page, __internal_switch_values_holder *///gulp.keep.line
    const $dom_emptyPseudoComponent= (function(){
        const share= { mount, update, destroy, isStatic };
        const component_out= { add, component, mount, update, share };
        return component_out;
    
        function mount(element, call_parseHTML, type= "childLast"){
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
     * @class $dom.component [cordova]
     * @constructor
     * @param {String} el_name
     *  - Name of element (for example `LI`, `P`, `A`, …).
     *  - This is parent element of component.
     * @param {Object} attrs
     *  - The second argument for [`$dom.assign`](./$dom.{namespace}.html#methods_assign)
     * @param {Object} params
     * @param {Function|Boolean} params.mapUpdate
     *  - `[params.mapUpdate=undefined]`
     *  - This function (if defined) remap `update(DATA)` to varibales used in keys `attrs.onupdate` … see [`add`](#methods_add)
     * @return {$dom.component}
     *  - 'functional class instance': object `{ add, component, mount, update, share, onupdate }`
     *  - `share` is Object for transfering methods somewhere else (like for using in another component, see [`component`](#methods_component))
     *      - `share= { mount, update, destroy, isStatic }`
     *  - `onupdate`
     *      - It returns {$dom.component} and it is only one differnece against [`add`](#methods_add)
     *      - `onupdate` is function which accepts two params `object, function`, the function is called during creating element and evry `update`calls
     *      - It returns additional `attrs`, for example this `attrs`: `$dom.component("DIV", { className: "class" }).onupdate({ a }, _=>({ textContent: a }))` => final `attrs= { className: "class", textContent: "A" }` (if `a="A"`)
     *      - it use [`$dom.assign`](./$dom.{namespace}.html#methods_assign) (**no deep copy!!!**)
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
        return add(el_name, attrs);
        /**
         * This add element to component
         * @method add
         * @public
         * @param {String} el_name
         *  - Name of element (for example `LI`, `P`, `A`, ...).
         * @param {Object} attrs
         *  - `null|undefined` is also supported (`null` is probably recommendet for better readability)
         *  - The second argument for [`$dom.assign`](./$dom.{namespace}.html#methods_assign)
         * @param {Number} [shift= 0]
         *  - Modify nesting behaviour. By default (`shift= 0`), new element is child of previus element. Every `-1` means moving to the upper level against current one - see example.
         * @returns {Object}
         *  - `getReference` {Function}: return NodeElement reference of added element
         *  - `onupdate`
         *      - Pattern: `add(...).onupdate(Values: Object, Retuns_attrs_keys: Function)`
         *      - This register listener/subscriber function (`Retuns_attrs_keys`) for keys (variables) in `Values`
         *      - Example: `add(...).onupdate({counter}, _=>({ textContent: counter }))` registers listerner to `counter`. When the `udate({ ... counter: something, ...})` is called this element changes `textContent`.
         *      - See [`update`](#methods_update)
         * @example
         *      //#1
         *      const UL= document.getElementById('SOME UL');
         *      const { add }= $dom.component("LI", { className: "list_item" });//<li class="list_item">...</li>
         *      add("DIV", { textContent: "Child of .list_item", className: "deep1" });//<li class="list_item"><div class="deep1">...</div></li>
         *          add("DIV", { textContent: "Child of div.deep1", className: "deep2" });//...<div class="deep1"><div class="deep2">...</div></div>...
         *              add("DIV", { textContent: "Child of div.deep2", className: "deep3" });//...<div class="deep1"><div class="deep2"><div class="deep3">...</div></div></div>...
         *              add("DIV", { textContent: "Child of div.deep2", className: "deep3 mark" }, -1);//...<div class="deep2"><div class="deep3">...</div><div class="deep3">...</div></div>...
         *      //next add(*) schoul be child of div.deep3.mark, by -1 it is ch.of div.deep2, by -2 ch.of div.deep1, by -3 ch.of li.list_item because div.deep3.mark is on 3rd level
         *          add("DIV", { textContent: "Child of div.deep1", className: "deep2 nextone" }, -2);//this is on 2nd level
         *      add("DIV", { textContent: "Child of div.deep1", className: "deep2 nextone" }, -2);//this is on 0 level
         *          add("DIV", null); // just DIV without attributes
         *      ...
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
                getReference: ()=> el,
                oninit: function(fn){ fn(el); return component_out; },
                onupdate: function(data, onUpdateFunction){
                    if(!data) return component_out;
                    if(!internal_storage) internal_storage= initStorage();
                    $dom.assign(el, internal_storage.register(el, data, onUpdateFunction));
                    return component_out;
                }
            }, component_out);
        }
        /**
         * This add element to component
         * @method addText
         * @public
         * @param {String} text
         *  - Argument for `document.createTextNode`
         * @param {Number} shift
         *  - see [`add`](#methods_add)
         * @returns {Object}
         *  - `oninit` {Function}: TBD
         * @example
         *      function testTextLi({ href= "https://www.seznam.cz" }= {}){
         *          const { add, addText, share }= $dom.component("LI", null);
         *              add("P", { textContent: "Link test: " });
         *                  add("A", { textContent: "link ", href });
         *                      add("STRONG", { textContent: `(${href.replace("https://www.", "")})` });
         *                  addText("!", -2);
         *                  add("BR", null, -1);
         *                  addText("Test new line.", -1);
         *          return share;
         *      }
         *      //result: '<p>Link test: <a href="...">link <strong>...</strong></a>!<br>Test new line.</p>'
         */
        function addText(text, shift= 0){
            recalculateDeep(shift);
            const text_node= document.createTextNode(text);
            let el= els[all_els_counter]= getParentElement().appendChild(text_node);
            all_els_counter+= 1;
            return Object.assign({
                oninit: function(fn){ fn(el); return component_out; }
            }, component_out);
        }
        /**
         * Method for including another component by usint its `share` key.
         * @method component
         * @public
         * @param {Object} share
         * @param {Number} shift
         *  - see [`add`](#methods_add)
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
         * @public
         * @param {NodeElement} element
         *  - Element where to places this component
         * @param {Boolean} call_parseHTML
         *  - If call parseHTML
         * @param {String} [type= "childLast"]
         *  - Change type of mounting
         *  - `childLast` places component as last child
         *  - `childFirst` places component as first child
         *  - `replaceContent` removes content of `element` and places component as child (uses `$dom.empty`)
         *  - `replace` replaces `element` by component
         *  - `before` places component before `element`
         *  - `after` places component after `element` (uses `$dom.insertAfter`)
         */
        function mount(element, call_parseHTML, type= "childLast"){
            switch ( type ) {
                case "replace":
                    $dom.replace(element, fragment);
                    if(call_parseHTML) parseHTML(element.parentNode.querySelectorAll(c_CMD));
                    break;
                case "replaceContent":
                    $dom.empty(element);
                    element.appendChild(fragment);
                    if(call_parseHTML) parseHTML(element.querySelectorAll(c_CMD));
                    break;
                case "before":
                    element.parentNode.insertBefore(fragment, element);
                    if(call_parseHTML) parseHTML(element.parentNode.querySelectorAll(c_CMD));
                    break;
                case "after":
                    $dom.insertAfter(fragment, element);
                    if(call_parseHTML) parseHTML(element.parentNode.querySelectorAll(c_CMD));
                    break;
                default:
                    if(type==="childFirst" && element.childNodes.length) element.insertBefore(fragment, element.childNodes[0]);
                    else element.appendChild(fragment);
                    if(call_parseHTML) parseHTML(element.querySelectorAll(c_CMD));
                    break;
            }
            return container;
        }
        /**
         * Method remove element form live DOM and returns null
         * @method destroy
         * @public
         * @example
         *  let { share: test }= $dom.component("DIV", null);
         *  test.mount(document.body);
         *  test= test.destroy();
         */
        function destroy(){
            container.remove();
            return null;
        }
        /**
         * Updates `deep`
         * @private
         * @method recalculateDeep
         * @param {Number} shift
         *  - see [`add`](#methods_add)
         */
        function recalculateDeep(shift){
            if(!shift) deep.push(all_els_counter);
            else { deep.splice(deep.length+1+shift); deep[deep.length-1]= all_els_counter; }
        }
        /**
         * Returns parent element (or "fragment pseudo element")
         * @method getParentElement
         * @private
         */
        function getParentElement(){
            return els[deep[deep.length-2]] || fragment;
        }
        /**
         * Method provide way to change nesting behaviour. It can be helpful for loops
         * @method setShift
         * @public
         * @param {Number} shift
         *  - see [`add`](#methods_add)
         * @example
         *      function testNesting(){
         *          const { add, setShift, share }= $dom.component("DIV", null);
         *              setShift(0);
         *          for(let i= 0; i<5; i++){
         *              add("P", { textContent: `Paragraph no. ${i}.` }, -1);
         *          }
         *          return share;
         *      }
         */
        function setShift(shift= 0){
            let last;
            if(!shift){ last= deep.pop(); deep.push(last, last); }
            else deep.splice(deep.length+1+shift);
        }
        /**
         * Initialize internal storage
         * @method initStorage
         * @private
         * @returns {Object}
         *  - `{ register, registerComponent, update, unregister}`
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
         * @public
         * @param {Object} new_data
         *  - When `$dom.component` is initialized, it is possible to register `mapUpdate`
         *  - **It's because internally, it is used `Object.assign` (no deep copy) to merge new data with older one!!!**
         * @example
         *      const data_A= { a: "A" };
         *      const data_A_update= { a: "AAA" };
         *      const { add, mount, update }= $dom.component("UL", null);
         *          add("LI", { onupdate: [ { a }, ({ a })=>({ textContent: a }) ] });//`[ { a },` add listener for "a"
         *      mount(document.body);
         *      update(data_A_update);
         *      //BUT
         *      const data_B= { a: { b: "A" }};
         *      const data_B_update= { a: { b: "AAA" }};
         *      const { add, mount, update }= $dom.component("UL", null, { mapUpdate: d=>({ a: d.a.b }) });
         *          add("LI", { onupdate: [ { a: data_B.a.b }, ({ a })=>({ textContent: a }) ] });//`[ { a },` add listener for "a"
         *      mount(document.body);
         *      update(data_B_update);
         */
        function update(new_data){
            if(!internal_storage) return false;
            return internal_storage.update(typeof new_data==="function" ? new_data(internal_storage.getData()) : new_data);
        }
        /**
         * Methods returns if it was `onupdate` used
         * @method isStatic
         * @public
         * @return {Boolean}
         *  - If there is some listeners `onupdate`
         */
        function isStatic(){
            return !internal_storage;
        }
    };
    /**
     * See [add](#methods_add)
     * @method add [cordova]
     * @for $dom.{namespace}
     * @param parent {NodeElement}
     * @param $$$ {...Array}
     *  * Works also with "jsif_var" and/or "data-cmd='condition-changeval'" see [$dom.assign \[cordova\]](#methods_$dom.assign [cordova])
     * @param [call_parseHTML=undefined] {Boolean}
     *  * If **true** calls `parseHTML(parent.querySelectorAll(c_CMD))`
     * @return {NodeElement}
     *  * First created element (usualy wrapper thanks nesting)
     */
    $dom.add= function(parent,$$$, call_parseHTML){
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
        if(call_parseHTML) parseHTML(parent.querySelectorAll(c_CMD));
        if(i) return els[0];
    };
    
    /**
     * Procedure for merging object into the element properties.
     * Very simple example: `$dom.assign(document.body, { className: "test" });` is equivalent to `document.body.className= "test";`.
     * It is not deep copy in general, but it supports `style`, `style_vars` and `dataset` objects (see below).
     * @method assign [cordova]
     * @for $dom.{namespace}
     * @param {NodeElement} element
     * @param {Object} object_attributes
     *  - Object shall holds **NodeElement** properties like `className`, `textContent`, ...
     *  - For `dataset` can be used also `Object` notation: `$dom.assign(document.getElementById("ID"), { dataset: { test: "TEST" } }); //<p id="ID" data-test="TEST"></p>`.
     *  - The same notation can be used for **CSS variables** (the key is called `style_vars`).
     *  - **IMPORTANT CHANGE**: Key `style` also supports **text**, so `$dom.assign(el, { style: "color: red;" });` and `$dom.assign(el, { style: { color: "red" } })` is equivalent to `el.setAttribute("style", "color: red;");`
     *  - **IMPORTANT DIFFERENCE**: `classList` accepts *Object* in the form of `class_name: -1|0|1` where '-1' means `el.classList(class_name)` others `el.classList(class_name, Booleans(...))`
     *  - *Speed optimalization*: It is recommended to use `textContent` (instead of `innerText`) and `$dom.add` or `$dom.component` (instead of `innerHTML`).
     * @example
     *      const el= document.body;
     *      const onclick= function(){ console.log(this.dataset.js_param); };
     *      $dom.assign(el, { textContent: "BODY", style: "color: red;", dataset: { js_param: "CLICKED" }, onclick });
     *      //result HTML: <body style="color: red;" data-js_param="CLICKED">BODY</body>
     *      //console output on click: "CLICKED"
     *      $dom.assign(el, { classList: { testClass: -1 } });
     *      //result HTML: <body class="testClass" style="color: red;" data-js_param="CLICKED">BODY</body>
     *      $dom.assign(el, { classList: { testClass: -1 } });
     *      //result HTML: <body class="" style="color: red;" data-js_param="CLICKED">BODY</body>
     *      $dom.assign(el, { classList: { testClass: true } });//or 1
     *      //result HTML: <body class="testClass" style="color: red;" data-js_param="CLICKED">BODY</body>
     *      //...
     */
    $dom.assign= function(element, object_attributes){
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
                    for(let k=0, k_key, k_keys= Object.keys(attr), k_length= k_keys.length; k<k_length; k++){
                        k_key= k_keys[k];
                        if(k_key==="jsif_var"&&element.dataset.cmd!=="condition-changeval") element.dataset.jsif_eq= attr.jsif_val.indexOf(__internal_switch_values_holder.get(active_page+attr.jsif_var)) !== -1;
                        element.dataset[k_key]= attr[k_key];
                    }
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
    
    /* global $dom, active_page_el, device *///gulp.keep.line
    /**
     * Redraw element using cheat `*.offsetHeight`
     * @method forceRedraw [cordova]
     * @for $dom.{namespace}
     * @param {NodeElement} [element=active_page_el]
     *  * Element for redraw
     * @param {String} [platform="iOS"]
     *  * Redraw only for specific `device.platform` ("Android", "iOS")
     */
    $dom.forceRedraw= function(element= active_page_el, platform= "iOS"){
        if(device.platform===platform||platform==="all"){
            let d= element.style.display;
            element.style.display= 'none';
            let trick= element.offsetHeight;
            element.style.display= d;
        }
    };
    export_as($dom, "$dom");

    /**
     * This NAMESPACE provides features for async (mainly Promise) functions.
     * @class $function.{namespace}
     * @static
     */
    var $function= {
        /**
         * Provide **input →⇶ …functions ⇛ reduction → output** functionality.
         * @method branches
         * @public
         * @param {Function} reduceFun
         *  - **By default behaves like 'map'**
         *  - function in familiar form `(acc, nth_result)=> …`.
         * @param {Function|Mixed} reduceInitValueCreator
         *  - **Default: function returning an empty array**
         *  - initial value for `acc` in `reduceFun`
         *  - **if** not functions, the same behaviour is used as in case of `*.reduce(...)`
         *  - **else** the result of function is used (because of *call-by-reference* in case of **Array**s, **Object**s, …).
         * @returns {Function}
         *  - `...functions`**&lt;…Function&gt;** `=>` **&lt;Function&gt;**
         *      - `...inputs`**&lt;…Mixed&gt;** `=>` **&lt;Mixed&gt;**
         *      - result of `reduceFun`
         * @example
         *      const testFunction= $function.branches((acc, curr)=> acc&&curr, true)(
         *          ({ a })=> a==="A",
         *          ({ b })=> b==="B"
         *      );
         *      testFunction({ a: "A", b: "B" });//= true
         *      testFunction({ a: "B", b: "A" });//= false
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
        },
        /**
         * Helper for returnin constant
         * @method constant
         * @param {Mixed} constantArg
         * @return {Function}
         *  * `()=> constantArg`
         * @example
         *      $function.constant(5)(10);//= `5`
         */
        constant: constantArg=> ()=> constantArg,
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
         * `id=> id`
         * @method identity
         * @param {Mixed} id
         * @return {Mixed}
         *  * `id`
         * @example
         *      $function.identity(10);//= `10`
         */
        identity: id=> id,
        /**
         * If `onTest` returns `true` a `onTrue` is called else `onFalse`
         * @param {Function} onTrue
         *  * Test succcessful function
         * @param {Function} [onFalse= v=> v]
         *  * Test fail function
         * @param {Function} [onTest= Boolean]
         *  * Test function
         * @return {Function}
         *  * `(...val)=> onTest(...val) ? onTrue(...val) : (typeof onFalse==="function") ? onFalse(...val) : undefined`
         *  * @return {Mixed}
         * @example
         *  $function.ifElse(v=> v+1)(0);//= `0`
         *  $function.ifElse(v=> v+1)(1);//= `2`
         *  $function.ifElse(v=> v+1, null, v=> v===1)(1);//= `2`
         *  $function.ifElse(v=> v+1, null, v=> v===1)(2);//= `undefined`
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
        sequention: function(...functions){return function(input){let current= input; for(let i=0, i_length= functions.length; i<i_length; i++){ current= functions[i](current); } return current; }; }
    };

    export_as($function, "$function");
    
    

    /**
     * This NAMESPACE provides features for Objects.
     * @class $object.{namespace}
     * @static
     */
    var $object= {
        /**
         * Function for iterating throught Object `iterable`.
         * @method each
         * @param {Object} iterable 
         *  * An object for iterating.
         * @param {Function} i_function
         *  * This procedure is called for each element in `iterable` Object.
         *  * `i_function(o: Object)`
         *      * `item` Mixed: Nth value for `key` in `iterable`.
         *      * `key` String: Nth key.
         *      * `last` Boolean: Is setted True, if it is the last element in array.
         *      * `share` Mixed|undefined: shared variable - works similar to `*.reduce` method
         * @param {Object|undefined} scope
         *  * An argument for `i_function.call(*,...)`
         * @return {Mixed}
         *  * `share`
         */
        each: __objectEach,
        eachFun: __eachBind(__objectEach),
        /**
         * Procedure for iterating throught Object `iterable` like [each](#methods_each), but use `for(... in ...)...if(Object.prototype.hasOwnProperty...`.
         * @method eachDynamic
         * @param {Object} iterable
         *  * An object for iterating.
         * @param {Function} i_function
         *  * This procedure is called for each element in `iterable` Object.
         *  * `i_function(o: Object)`
         *      * `item` Mixed: Nth value for `key` in `iterable`.
         *      * `key` String: Nth key.
         *      * `iterable` Object: Link to original `iterable`.
         *      * `share` Mixed|undefined: shared variable - works similar to `*.reduce` method
         * @param {Object|undefined} scope
         *  * An argument for `i_function.call(*,...)`
         * @return {Mixed}
         *  * `share`
         */
        eachDynamic: __objectEachDynamic,
        eachDynamicFun: __eachBind(__objectEachDynamic),
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
         * Wrapper around `Object.prototype.hasOwnProperty`. It is more trustable, because you can sets `var obj= { hasOwnProperty: "gotcha" }`
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
         * Wrapper around `object[methodName](...args)`.
         * @method method
         * @param {String} methodName
         *  * Key in Object `object`.
         * @param {...Mixed} args
         *  * Arguments for method `methodName`
         * @return {Function}
         *  * `(object) => object[key](...args)`
         *  * @param {Object} target object
         * @example
         *      $object.method("trim")(" Hi ");//= `Hi`
         *      $object.method("split", " ")("Hello world");//= `[ "Hello", "world" ]`
         */
        method: (methodName, ...args)=> object=> object[methodName](...args),
        /**
         * @method methodFrom
         * @example
         *      $object.methodFrom(" Hi ")("trim")()====$object.method("trim")(" Hi ");
         *      $object.methodFrom("Hello world")("split")(" ")===$object.method("split", " ")("Hello world");
         */
        methodFrom: object=> methodName=> (...args)=> object[methodName](...args),
        /**
         * Wrapper around `object[key]`, usefull for binding.
         * @method pluck
         * @param {String} key
         *  * Key in Object `object`.
         * @return {Function}
         *  * `(object) => object[key]`
         *  * @param {Object} target object
         *  * @returns Value in `object[key]`
         * @example
         *  $object.pluck("length")("Test");//= `4`
         */
        pluck: key=> object=> object[key],
        /**
         * @method pluckFrom
         * @example
         *      $object.pluckFrom("Test")("length")===$object.pluck("length")("Test");
         */
        pluckFrom: object=> key=> object[key],
        /**
         * Wrapper around `object[setterName]= arg`
         * @method setter
         * @param {String} setterName
         *  * Key in Object `object`.
         * @param {Mixed} arg
         *  * Setter value
         * @return {Function}
         *  * `object=> (object[setterName]= arg, object)`
         *  * @param {Object} object: target object
         *  * @return {Object} original object reference
         * @example
         *      $object.setter("test_key", "test_value")({ test_key: "test_init_value", other_key: "other_value" });//= `{ test_key: "test_value", other_key: "other_value" }`
         */
        setter: (setterName, arg)=> object=> (object[setterName]= arg, object),
        /**
         * @method setterFrom
         * @example
         *      $object.setterFrom({ test_key: "test_init_value", other_key: "other_value" })("test_key")("test_value")===$object.setter("test_key", "test_value")({ test_key: "test_init_value", other_key: "other_value" });
         */
        setterFrom: object=> setterName=> arg=> (object[setterName]= arg, object)
    };
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
    };

    export_as($optimizier, "$optimiziers");
    /**
     * This NAMESPACE provides features for strings.
     * @class $string.{namespace}
     * @static
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

    export_as($string, "$string");
    /**
     * This NAMESPACE provides features for date/time. Mainly, there are utilities using **Date** class and feature [`Date.prototype.toLocaleString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString).
     * @class $time.{namespace}
     * @static
     */
    const $time= (function init(){/* version: "0.4.0" */
        const /* internal store */
        /**
         * Internal object holding predefined formating arguments for `$time.toLocaleString`. For example `format_objects.time==={ hour: "2-digit", minute: "2-digit" }`.
         * 
         * Keys:
         *  - `time`: shows combination of 2-digits hour and minutes
         *  - `time_seconds`: shows combination of `time` and seconds
         *  - `date`: shows combination of 2-digits day, month and full year
         *  - `date_time`: shows combination of `time` and `date`
         *  - `date_time_seconds`: shows combination of `date_time` and `seconds`
         * @property {Object} format_objects
         * @private
         * @for $time.{namespace}
         */
            format_objects= (({ time, date, seconds })=>({
                time, date,
                time_seconds: Object.assign(seconds, time),
                date_time: Object.assign({}, time, date),
                date_time_seconds: Object.assign({}, Object.assign(seconds, time), date)
            }))({
                time: { hour: "2-digit", minute: "2-digit" },
                date: { year: "numeric", day: "2-digit", month: "2-digit" },
                seconds: { second: "2-digit" }
            }),
        /**
         * Internal object holding predefined formating arguments for `getFormatObject`. For example `format_arrays.YYYYMMDD=== [ ["year", "numeric"], dash, ["month", two_dig], dash, ["day", two_dig] ]`.
         * 
         * Keys:
         *  - `SQL_DATE`: shows **"YYYY-MM-DD"**
         *  - `SQL`: shows **"YYYY-MM-DD HH:mm:ss"**
         *  - `SQL_TIME`: shows **"HH:mm:ss"**
         * @property {Object} format_arrays
         * @private
         * @for $time.{namespace}
         */
            format_arrays= (({ dash, colon, space, two_dig })=>({
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
         * Internal helper array for `getOrdinalSuffix`.
         * @property {Array} ordinal_numbers
         * @private
         * @for $time.{namespace}
         */
            ordinal_numbers= [ "th", "st", "nd", "rd" ];
        const /* validation functions */
        /**
         * Very simple test for 'YYYY-MM-DD' pattern. Returns `true` if `date_string` includes **`-`**.
         * @method isDateString
         * @for $time.{namespace}
         * @private
         * @param {String|...String} date_string
         * @returns {Boolean}
         * @example
         *      isDateString("2019-05-06");//= true
         *      isDateString("06/05/2019");//= false !!!!
         */
            isDateString= date_string=> date_string.indexOf("-")!==-1,
        /**
         * Very simple test for 'T...' pattern. Returns `true` if `date_string` includes **`T`**.
         * @method isTimeString
         * @for $time.{namespace}
         * @private
         * @param {String|...String} date_string
         * @returns {Boolean}
         * @example
         *      isDateString("T12:00:00");//= true
         *      isDateString("12:00:00");//= false !!!
         *      isDateString("Twrong");//= true !!!!
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
         * @for $time.{namespace}
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
         * @for $time.{namespace}
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
            EET: 264,
            WET: 274
        });
    
        
        /**
         * Function generates `DateArray` from instance of `Date`.
         * @method fromDate
         * @for $time.{namespace}
         * @public
         * @param {Date} date_instance 
         *  - instance of `Date` class
         * @returns {DateArray}
         *  - See [toDateArray](#methods_toDateArray).
         */
        function fromDate(date_instance){
            return toDateArray(date_instance.toISOString());
        }
        /**
         * Function generates `DateArray` from arguments to initialize `Date`.
         * @method fromDateArguments
         * @for $time.{namespace}
         * @public
         * @param {...Mixed} args 
         *  - parameters for initialize `Date` class
         * @returns {DateArray}
         *  - See [toDateArray](#methods_toDateArray).
         */
        function fromDateArguments(...args){
            return toDateArray((args.filter(d=> typeof d!=="undefined").length ? new Date(...args) : new Date()).toISOString());
        }
        /**
         * Function generates `DateArray` from current date and time.
         * 
         * **Warning:** Internally uses `toISOString` method so result is always converted to "+00:00": `p($time.fromNow, $time.setTimeZone("+02:00"), $time.toString())()` (`p` is some pipe function) — this returns "2019-07-10T16:48:43+02:00" instead of "2019-07-10T18:48:43+02:00" (current time) … the flow is "2019-07-10T18:48:43+02:00"-`fromNow`->"2019-07-10T16:48:43Z"-`setTimeZone`->"2019-07-10T16:48:43+02:00".
         * @method fromNow
         * @for $time.{namespace}
         * @public
         * @returns {DateArray}
         *  - See [toDateArray](#methods_toDateArray).
         */
        function fromNow(){
            return toDateArray((new Date()).toISOString());
        }
        /**
         * Function generates `DateArray` from passed string.
         * @method fromString
         * @for $time.{namespace}
         * @public
         * @param {String} timestamp_string 
         *  - Supported forms are combinations of date ("YYYY-MM-DD", "DD/MM/YYYY"), time ("HH:mm:ss", "HH:mm") and timezone ("CET", "+01:00", "-02:00", ...)
         *  - Typically: "2019-06-02 12:35:45 +01:00", "2019-06-02T12:35:45+01:00", "12:35:45+01:00 2019-06-02", ...
         * @param {String} [timezone= internal_zone]
         *  - Override timezone in `timestamp_string`
         * @returns {DateArray}
         *  - See [toDateArray](#methods_toDateArray).
         */
        function fromString(timestamp_string, timezone= internal_zone){
            if(!timestamp_string) return fromNow();
            let date_array= toDateArray(timestamp_string);
            if(date_array.length!==3){
                if(!isDateString(date_array[0])) date_array.unshift("");
                else if(!isTimeString(date_array[1])){
                    date_array[2]= timezone ? timezone : date_array[1];
                    date_array[1]= "";
                } else {
                    date_array[2]= timezone ? timezone : "";
                }
            } else if(timezone){ date_array[2]= timezone; }
            return date_array;
        }
        /**
         * Function generates array in a form `[ date, time, time_zone ]` from 'ISO' like string.
         * @method toDateArray
         * @for $time.{namespace}
         * @private
         * @param {String} timestamp_string
         *  - Supported forms are combinations of date ("YYYY-MM-DD", "DD/MM/YYYY"), time ("HH:mm:ss", "HH:mm") and timezone ("CET", "+01:00", "-02:00", ...)
         *  - Typically: "2019-06-02 12:35:45 +01:00", "2019-06-02T12:35:45+01:00", "12:35:45+01:00 2019-06-02", ...
         * @returns {DateArray}
         *  - `[ date, time, time_zone ]`
         *  - where:
         *      - `date` is always "YYYY-MM-DD" or ""
         *      - `time` is always "HH:mm:SS" or "HH:mm:00" or ""
         *      - `time_zone` is always "[+-]\d\d:\d\d" or "CET" or ""
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
         * Function generates text based on `format`, `locale` and `timeZone` from `DateArray`.
         * @method toStringFromObject
         * @for $time.{namespace}
         * @private
         * @param {Array} format
         *  - Placeholder for replace/generate final string (eg. [[ "month", "2-digits" ]]===two digits month)
         *  - see [`getFormatObject`](#methods_getFormatObject) an [`format_arrays`](#props_format_arrays).
         * @param {DateArray} params_obj
         *  - It is in fact argument for [`Date.prototype.toLocaleString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)
         * @param {String} params_obj.locale
         *  - In which language/national format generate final string
         * @param {String} params_obj.timeZone
         *  - Time zone name from [`ary_ianna_time_zones`](#props_ary_ianna_time_zones).
         * @param {String} params_obj.declension
         *  - **default: true**
         *  - Needed for some languages — for example in Czech: "10. července" (`declension=true`), or "10. červenec" (`declension=false`)
         * @returns {Function}
         *  - `DateArray`=> **&lt;String&gt;**
         * @example
         *      $time.toStringFromObject("DD/MM/YYYY HH:mm:SS",{ locale: "en-GB" })($time.fromNow());//= "05/06/2019 09:32:20"
         */
        function toStringFromObject(format= format_arrays.SQL, { locale= internal_locale, declension= true, timeZone= internal_zone }= {}){
            return date_array=> format.map(evaluateFormatObject(toDate(date_array), locale, timeZone, declension)).join("");
        }
        function evaluateFormatObject(date, locale, timeZone, declension){
            const localeObj= generateTimeZoneFormatObject.bind(null, timeZone);
            return function([type, value, modify]){
                let out= evaluateNthFromObject(date, type, value, modify, declension, locale, localeObj);
                if(value==="2-digit"&&String(out).length===1) out= "0"+out; //fix
                if(modify==="two_letters") out= out.substr(0,2);
                else if(modify==="ordinal_number"&&locale.indexOf("en")!==-1) out= getOrdinalSuffix(out);
                return out;
            };
        }
        function evaluateNthFromObject(date, type, value, modify, declension, locale, localeObj){
            switch (true){
                case type==="text":                                     return value;
                case type==="week":                                     return getWeekNumber(date);
                case type==="weekday"&&value==="numeric":               return getWeekDay()(date);
                case type==="month"&&value==="long"&&declension:        return date.toLocaleString(locale,localeObj({ [type]: value, day: "numeric" })).replace(/[\d \.\/\\]/g, "");
                case type==="hour"&&modify.toLowerCase()==="a":         return date.toLocaleString(modify==="A" ? "en-US" : "en-GB",localeObj({ [type]: value, hourCycle: "h12" })).replace(/[\d \.\/\\]/g, "");
                case type==="hour":                                     return date.toLocaleString(locale,localeObj({ [type]: value, hourCycle: modify })).replace(/[ \.\/\\pam]/ig, "");
                default:                                                return date.toLocaleString(locale,localeObj({ [type]: value }));
            }
        }
        /**
         * Generates multidimensional array for formatting (eg. "YYYY"=> `[ [ "year", "numeric" ] ]`).
         * @method getFormatObject
         * @for $time.{namespace}
         * @private
         * @param {String} format_string
         *  - supports "YYYY", "YY", "MM", "MMM", "MMMM", "dddd" (weekday - Monday), "ddd" (shorter weekday - Mon), "dd" (Mo), "d" (0===Sun <> 6===Sat), "DD", "D", "Do", "HH", "H", "mm", "m", "SS", "S", "W", "Wo"
         * @returns {...Array}
         *  - `[ [ operation, argument, params ] ]`
         *  - `Opertions` are in fact arguments for [`Date.prototype.toLocaleString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) and `arguments` are their values.
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
         * @for $time.{namespace}
         * @public
         * @param {DateArray} date_array
         *  - See [toDateArray](#methods_toDateArray).
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
         * @for $time.{namespace}
         * @public
         * @param {String} format_object_name
         *  - **Default: `"date_time"`**
         *  - name of predefined time/date combinations see [`format_objects`](#props_format_objects).
         * @param {Object} params
         *  - modificators for `Date.prototype.toLocaleString`
         * @param {String} params.locale
         *  - **Default: `internal_locale`**
         *  - see [`Date.prototype.toLocaleString` Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString#Parameters).
         * @param {String} params.timeZone
         *  - **Default: `internal_zone`**
         *  - sets `timeZone` key in `options` see [`Date.prototype.toLocaleString` Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString#Parameters).
         * @returns {Function}
         *  - **`date_array`&lt;DateArray&gt;`=>` &lt;String&gt;**
         *  - returns result of [`Date.prototype.toLocaleString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString);
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
         * Function generates text based on `format`, `locale` and `timeZone` from `DateArray`.
         * @method toString
         * @for $time.{namespace}
         * @public
         * @param {String|...Array} format
         *  - **Default: `$time.formats.SQL`**
         *  - Placeholder for replace/generate final string (eg. "MM"===two digits month) — see [`getFormatObject`](#methods_getFormatObject).
         *  - Or lists of predefined formats — see [`formats`](#props_formats).
         * @param {DateArray} params_obj
         *  - It is in fact argument for [`Date.prototype.toLocaleString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)
         * @param {String} params_obj.locale
         *  - In which language/national format generate final string
         * @param {String} params_obj.timeZone
         *  - Time zone name from [`ary_ianna_time_zones`](#props_ary_ianna_time_zones).
         * @param {String} params_obj.declension
         *  - **default: true**
         *  - Needed for some languages — for example in Czech: "10. července" (`declension=true`), or "10. červenec" (`declension=false`)
         * @returns {Function}
         *  - `DateArray`=> **&lt;String&gt;**
         * @example
         *      $time.toString("DD/MM/YYYY HH:mm:SS",{ locale: "en-GB" })($time.fromNow());//= "05/06/2019 09:32:20"
         *      $time.toString($time.formats.SQL)($time.fromNow());//= "2019-06-05 09:32:20"
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
        function getTimeZone(date, { locale= internal_locale, description= "long", offset= false }= {}){
            const date_instance= getDateInstaneFromDateArrayOrString(date);
            let out_description= description==="none" ? "" : date_instance.toLocaleString(locale, { timeZoneName: description }).replace(date_instance.toLocaleString(locale), "").trim();
            const out_offset= !offset ? "" : "UTC"+getTimeZoneOffsetStringFromOffset(date_instance.getTimezoneOffset());
            if(out_description&&out_offset) out_description= " ("+out_description+")";
            return out_offset+out_description;
        }
        function getTimeZoneOffset(date){
            return getDateInstaneFromDateArrayOrString(date).getTimezoneOffset();
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
        function getDateInstaneFromDateArrayOrString(date_string){
            if(!date_string) return new Date();
            if(!Array.isArray(date_string)) date_string= toDateArray(date_string);
            return new Date(...date_string[0].split("-").map((v,k)=> k===1 ? +v-1 : +v));
        }
        function getTimeZoneOffsetStringFromOffset(offset){
            const { floor, abs }= Math;
            let out= offset > 0 ? "-" : "+";
            offset= abs(offset);
            out+= double(floor(offset/60))+":"+double(offset%60);
            return out;
        }
        
        function addDays(days_num){
            return date_instance=> (date_instance.setDate(date_instance.getDate()+days_num), date_instance);
        }
        function addMonths(monthss_num){
            return date_instance=> (date_instance.setMonth(date_instance.getMonth()+monthss_num), date_instance);
        }
        function getWeekDay(type= "numeric", { locale= internal_locale, timeZone= internal_zone }= {}){
            return type==="numeric" ? date_instance=> date_instance.getDay() : date_instance=> date_instance.toLocaleString(locale, { weekday: type });
        }
        function getWeekNumber(date_instance){ /* calculates no. of thursdays from this week to the first one (January 4 is always in week 1.) */
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
         * Curried method `mod_obj=> date_array=> result` – `mod_obj` holds information how modify given `date_array` **&lt;DateArray&gt;**. Result is again **&lt;DateArray&gt;**.
         * @method modify
         * @for $time.{namespace}
         * @public
         * @param {Object} mod_obj
         *  - object literal representing requested operations
         *  - use name convention like [setters for `Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Setter) (only one argument is allowed)
         *  - supports also *add\** commands with the same notation ("setMonth" => "addMonth")
         *  - **IMPORTANT NOTE:** There are three behaviour changes
         *      - "setMonth" is indexed from 1 (instead of 0)
         *      - for "setDate" there is alias "setDay"
         *      - for "addDate" there is alias "addDays"
         *  - Some operations: **"\*Date"** (or **"setDay"**, **"addDays"**), **"\*Month"**, **"\*FullYear"**, **"\*Hours"**, **"\*Minutes"**, **"\*Seconds"**
         * @returns {Function}
         *  - `date_array`**&lt;DateArray&gt;** `=>` **&lt;DateArray&gt;**
         *  - See [toDateArray](#methods_toDateArray).
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
         * @for $time.{namespace}
         * @private
         * @param {String} operation
         *  - e.g. "addMonth"
         * @param {Number} value
         *  - mainly argument (number) for 
         * @param {Date} dateObject
         *  - instance of `Date`
         * @returns {Date}
         *  - returns `dateObject`
         */
        function modifyAdditions(operation, value, dateObject){
            const cmd= operation.substr(3); /* addMonth=> ...Month => (set/get)Month */
            dateObject["set"+cmd](dateObject["get"+cmd]()+value);
            return dateObject;
        }
        function setTimeZone(zone= internal_zone){
            return ([ date= "", time= "" ]= [])=> [ date, time, zone ];
        }
        
        /**
        * Function adds leading zero to the `time`. [It can be replaced in future: see `padStart`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
        * @method double
        * @for $time.{namespace}
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
         * @for $time.{namespace}
         * @public
         * @param {String|Number} month
         *  - ISO number of month (eg 01 or 1 for January)
         * @param {String|Number} year
         *  - **Default: current year**
         *  - ISO nimber of year (eg. 2019)
         * @returns {Number}
         *  - total of days
         */
        function daysInMonth(month, year= (new Date()).getFullYear()){/* months indexing from 0 */
            return new Date(+year, +month, 0 /* last in prev month */).getDate();
        }
        /**
         * Returns number of days in given month
         * @method getDaysInMonth
         * @for $time.{namespace}
         * @public
         * @param {DateArray} date_array
         *  - **Default: current date**
         *  - see [`toDateArray`](#methods_toDateArray)
         * @returns {Number}
         *  - total of days
         */
        function getDaysInMonth([ date= fromNow()[0] ]= []){
            const [ _, month, year ]= date.split("-").map(Number);
            return daysInMonth(month, year);
        }
        /**
        * @method getMonthName
        * @for $time.{namespace}
        * @public
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
         * See [`ordinal_numbers`](#props_ordinal_numbers).
         * @method getOrdinalSuffix
         * @for $time.{namespace}
         * @public
         * @param {Number} n
         * @return {String}
         *  * `n`+English suffix
         * @example
         *     console.log($time.getOrdinalSuffix(1));//"1st"
         */
        function getOrdinalSuffix(n_orig) {
            const n= typeof n_orig==="number" ? n_orig : parseInt(n_orig);
            if(isNaN(n)) return n_orig;
            let v= n%100;
            return n_orig+(ordinal_numbers[(v-20)%10]||ordinal_numbers[v]||ordinal_numbers[0]);
        }
        
        return {
            /**
             * Alias for `undefined` which can be used to trigger default value of argument. (eg. `test($time._)==="A"; function test(a= "A"){ return a; }`)
             * @property {undefined} _
             * @public
             */
            _: undefined,
        
            fromNow, fromString, fromDate, fromDateArguments,
        
            toDate, toString, toLocaleString, toRelative,
        
            getDiff, getRelative,
            getCETOffset, getTimeZoneOffset, getTimeZoneOffsetString, getTimeZone,
        
            Date: { getWeekDay, getWeekNumber, addDays, addMonths },
            setTimeZone, modify,
        
            /* backward compatibility */ double, getOrdinalSuffix, getMonthName,
            getDaysInMonth, daysInMonth,
        
            getTimeZones: ()=> ary_ianna_time_zones, isTimeZone: candidate=> ary_ianna_time_zones.indexOf(candidate)!==-1,
            setInternalZone: zone=> internal_zone= zone, setInternalLocale: locale=> internal_locale= locale,
            /**
             * Public name of [`format_arrays`](#props_format_arrays).
             * @property {Object} formats
             * @public
             */
            formats: format_arrays
        };
    })();
    /**
     * Function returns timestamp in the form of "YYYY-MM-DD HH:MM:SS".
     * @method getTimeStamp
     * @for $time.{namespace}
     * @public
     * @param {Number|Boolean} [time=undefined]
     *  * Uses as argument for `new Date(*)`
     * @return {String}
     *  * Timestamp
     */
    $time.getTimeStamp= t=> $time.toString($time.formats.SQL)($time.fromDateArguments(t));
    /**
     * Function returns timestamp in the form of "YYYY-MM-DD".
     * @method getDateStamp
     * @for $time.{namespace}
     * @public
     * @param {Number|Boolean} [time=undefined]
     *  * Uses as argument for `new Date(*)`
     * @return {String}
     *  * Datestamp
     */
    $time.getDateStamp= t=> $time.toString($time.formats.SQL_DATE)($time.fromDateArguments(t));
    

    export_as($time, "$time");
    return out;
});
