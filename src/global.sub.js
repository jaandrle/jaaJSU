    /* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
    function __eachInArrayLike(iterable, i_function){ const i_length= iterable.length; for(let i=0, j=i_length-1; i<i_length; i++, j--){ i_function(iterable[i],i,!j); } }
    /* global gulp_place */
    gulp_place("global_isMandatory_${app.standalone}.sub.js");