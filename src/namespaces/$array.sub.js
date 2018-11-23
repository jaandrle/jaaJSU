/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
gulp_place("global.sub.js", "file_once");/* global gulp_place, __eachInArrayLike, export_as */
var $array= {
    /* 
    * FCE ketra vraci spravny index pro cyklicke prochazeni polem
    * ...
    * paramery:
    *  i= aktualni index v poli
    *  s= pozadovany posun v poli
    *  l= delka pole
    * vraci:
    *  number - cislo indexu v poli
    *  */
    arrayIndex: function(i,s,l){
        return (l+i+(s%l))%l;
    },
    each: __eachInArrayLike,
    getLast: function(arr){
        return arr[arr.length-1];
    },
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
    sortRandom: function(){
        return Math.random() - 0.5;
    }
};
export_as($array, gulp_place("namespaces.$array", "variable"));