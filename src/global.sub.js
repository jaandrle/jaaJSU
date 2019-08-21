/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global out */
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