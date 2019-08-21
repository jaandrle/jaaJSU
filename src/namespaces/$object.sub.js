/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global isMandatory */
gulp_place("global.sub.js", "file_once");/* global gulp_place, export_as */
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
export_as($object, gulp_place("namespaces.$object", "variable"));

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