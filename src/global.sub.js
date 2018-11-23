/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
function __eachInArrayLike(iterable, i_function){ const i_length= iterable.length; for(let i=0, j=i_length-1; i<i_length; i++, j--){ i_function(iterable[i],i,!j); } }
gulp_place("special_functions/global_isMandatory_${app.standalone}.sub.js");/* global gulp_place */