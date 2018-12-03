/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
gulp_place("global.sub.js", "file_once");/* global gulp_place, __eachInArrayLike, export_as */
/**
 * This NAMESPACE provides features for Arrays.
 * @class $array
 * @extends Global
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
     * @param {Array} iterable 
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
     * @param {Array} arr
     *  * Input array.
     * @returns {Mixed}
     */
    getLast: function(arr){
        return arr[arr.length-1];
    },
    /**
     * Function returns methods for splitting array by condition.
     * @method partition
     * @param {Array} arr
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
     * @param {Array} arr
     *  * Original array
     * @param {Mixed} item
     *  * Item for searching in `arr`
     *  * Make sence, if it is possible to compare with `===` operation
     * @returns {Array}
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
    /* FCE pro pouziti v .sort zaridi promichani pole
    * ...
    * vraci:
    *  number - nahodne cislo indexu v poli
    *  */
    /**
     * Function returns random number for Array.sort function
     * @method sortRandom
     * @returns {Number} <-0.5,0.5>
     */
    sortRandom: function(){
        return Math.random() - 0.5;
    }
};
export_as($array, gulp_place("namespaces.$array", "variable"));