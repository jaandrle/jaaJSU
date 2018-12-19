/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global out */
function export_as(obj, key){ out[key]= obj; }
function __eachInArrayLike(iterable, i_function, scope){ const i_length= iterable.length; for(let i=0, j=i_length-1; i<i_length; i++, j--){ i_function.call(scope, iterable[i],i,!j); } }
function __eachInArrayLikeDynamic(iterable, i_function, scope){ for(let i=0, iterable_i; (iterable_i= iterable[i]); i++){ i_function.call(scope, iterable_i,i); } }
gulp_place("special_functions/global_isMandatory_${app.standalone}.sub.js");/* global gulp_place */