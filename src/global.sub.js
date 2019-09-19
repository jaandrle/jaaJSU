/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global out */
/**
 * This kind of function is typically used in `Array.prototype.filter`.
 * @function function_filterCallback
 * @category virtual
 * @param {Mixed} i_value Nth value of array.
 * @param {Number} i Nth key of array.
 * @returns {Boolean}
 */
/**
 * This kind of function is typically used in `Array.prototype.reduce`.
 * @function function_reduceCallback
 * @category virtual
 * @param {Mixed} accumulator
 * @param {Mixed} i_value Nth value of array.
 * @param {Number} i Nth key of array.
 * @returns {Mixed} accumulator
 */
/**
 * @typedef {Object} IterableArrayObject
 * @category virtual
 * @property {Mixed} item Nth value for `key` in `iterable`.
 * @property {Number} key Idicies 0...`iterable.length`.
 * @property {Boolean} last Is setted True, if it is the last element in array.
 * @property {Mixed|Undefined} share shared variable - works similar to `*.reduce` method
 */
/**
 * @function IterableCallback
 * @category virtual
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

gulp_place("special_functions/global_isMandatory_${app.standalone}.sub.js");/* global gulp_place */