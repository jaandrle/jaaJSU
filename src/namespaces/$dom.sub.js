/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global.sub.js *//* global __eachInArrayLike */
var $dom={
    /* tF_
    * Zajistuje volani .then, az je DOM dostupny
    * ...
    * parametry:
    *  tNN ~= argumenty jsou do .then predavany jako pole,
    *      resp. pokud je jen jeden, je predan primo.
    * .then:
    *  tNN_= zadane parametry, viz vyse
    *  */
    ready_: function(){
        let param= null;
        if(arguments){
            if(arguments.length===1) param= arguments[0];
            else param= arguments;
        }
        return new Promise(function(resolve) {
            function checkState() {
                if(document.readyState!=='loading'){
                    document.removeEventListener('readystatechange', checkState);
                    resolve(param);
                }
            }
            if(document.readyState!=='loading') resolve(param);
            else document.addEventListener('readystatechange', checkState);
        });
    },
    /* tF_
    * Zajistuje volani .then, az je element dostupny
    * ...
    * parametry:
    *  tD parent ~document= ES6 selector rodice
    *  tL el_selector= je list, kde klic je typ ES6 selectoru (querySelector, getElementsByClassName,...)
    *               tedy: {getElementsByClassName: "trida"} je prevedeno na parent.getElementsByClassName("trida")
    * .then:
    *  tD_= predava odkaz na element
    *  */
    elementReady_: function(el_selector, parent){
        parent || (parent= document);
        const sel_key= Object.keys(el_selector)[0];
        const sel_val= el_selector[sel_key];
        return new Promise(function(resolve, reject){
            function check(){
                const el= parent[sel_key](sel_val);
                if(el) resolve(el);
                else requestAnimationFrame(check); //...zajistuje cyklus
            }
            requestAnimationFrame(check);
        });
    },
    /* tP
    * FCE promaze elementy na zaklade daneho NodeListu
    * ...
    * parametry:
    *  tD els_to_delete= NodeList elementu k mazani
    *  tN from_index ~0= index v poli odkud zacit mazat (preskoceni el, ktere nechceme mazat)
    *  tN to_index ~delka pole= index v poli kam az mazat (preskoceni el, ktere nechceme mazat)
    *  */
    removeElements: function(els_to_delete,from_index,to_index){
        from_index= from_index || 0;
        to_index= to_index || els_to_delete.length;
        let els_array= [];
        let j= 0;
        for(let i= from_index; i < to_index; i++){els_array[j++]= els_to_delete[i];}
        for(let i= 0, i_length= els_array.length; i < i_length; i++){els_array[i].remove();}
    },
    each: __eachInArrayLike
};
/* global gulp_place */
gulp_place("special_functions/$dom_add_${app.standalone}.sub.js");
gulp_place("special_functions/$dom_forceRedraw_${app.standalone}.sub.js");