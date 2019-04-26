/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global out */
function export_as(obj, key){ out[key]= obj; }
function __eachBind(fun){
    return (i_function, scope)=> iterable=> fun(iterable, i_function, scope);
}
function __eachInArrayLike(iterable, i_function, scope){
    const i_length= iterable.length;
    let share;
    for(let i=0, j=i_length-1; i<i_length; i++, j--){
        share= i_function.call(scope, { item: iterable[i], key: i, last: !j, share });
    }
    return share;
}
function __eachInArrayLikeDynamic(iterable, i_function, scope){
    let share;
    for(let i=0, iterable_i; (iterable_i= iterable[i]); i++){
        share= i_function.call(scope, { item: iterable_i, key: i, share });
    }
    return share;
}

gulp_place("special_functions/global_isMandatory_${app.standalone}.sub.js");/* global gulp_place */