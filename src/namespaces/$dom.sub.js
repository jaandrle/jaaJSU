/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
gulp_place("global.sub.js", "file_once");/* global gulp_place, __eachInArrayLike, __eachInArrayLikeDynamic, export_as */
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
gulp_place("special_functions/$dom_add_helpers_${app.standalone}.sub.js");
gulp_place("special_functions/$dom_forceRedraw_${app.standalone}.sub.js");
/**
 * Exported namespace of {@link module:jaaJSU~$dom}.
 * @namespace gulp_place("namespaces.$dom", "eval_out")
 * @global
 */
export_as($dom, gulp_place("namespaces.$dom", "variable"));