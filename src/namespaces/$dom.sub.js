/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
gulp_place("global.sub.js", "file_once");/* global gulp_place, __eachInArrayLike, __eachInArrayLikeDynamic, export_as */
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
     *  * `i_function(value,index)`
     *      * `value` Mixed: Nth value for `key` in `iterable`.
     *      * `index` Number: Idicies 0...`Object.keys(iterable).length`.
     *      * `last` Boolean: Is setted True, if it is the last element in array.
     * @param {Object|undefined} scope
     *  * An argument for `i_function.call(*,...)`
     */
    each: __eachInArrayLike,
    /**
     * Procedure for iterating throught NodeList `iterable` like [each](#methods_each), but use `for(...;(item= iterable[i]);i++)...`.
     * @method eachDynamic
     * @param {...Mixed} iterable
     *  * An array-like object for iterating.
     * @param {Function} i_function
     *  * This procedure is called for each element in `iterable` Array.
     *  * `i_function(value,index)`
     *      * `value` Mixed: Nth value for `key` in `iterable`.
     *      * `index` Number: Idicies 0...`Object.keys(iterable).length`.
     *      * `last` Boolean: Is setted True, if it is the last element in array.
     * @param {Object|undefined} scope
     *  * An argument for `i_function.call(*,...)`
     */
    eachDynamic: __eachInArrayLikeDynamic
};
gulp_place("special_functions/$dom_add_${app.standalone}.sub.js");
gulp_place("special_functions/$dom_forceRedraw_${app.standalone}.sub.js");
export_as($dom, gulp_place("namespaces.$dom", "variable"));