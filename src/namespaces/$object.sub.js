/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global isMandatory */
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
    each: function(iterable, i_function, scope){
        const iterable_keys= Object.keys(iterable);
        let iterable_keys_i, share;
        for(let i=0;(iterable_keys_i= iterable_keys[i]); i++){ 
            share= i_function.call(scope, { item: iterable[iterable_keys_i], key: iterable_keys_i, index: i, share });
        }
        return share;
    },
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
    eachDynamic: function (iterable, i_function, scope){
        let share;
        for(let key in iterable){
            if (iterable.hasOwnProperty(key)){
                share= i_function.call(scope, { item: iterable[key], key, target: iterable, share });
            }
        }
        return share;
    },
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
gulp_place("global.sub.js", "file_once");/* global gulp_place, export_as */
export_as($object, gulp_place("namespaces.$object", "variable"));