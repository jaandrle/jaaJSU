    /* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true *///gulp.remove.line
    /* global.sub.js *//* global __eachInArrayLike *///gulp.remove.line
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
        removeItem: function(arr, item) {
            var i = 0;
            while (i < arr.length) {
                if (arr[i] === item) {
                    arr.splice(i, 1);
                } else {
                    i++;
                }
            }
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