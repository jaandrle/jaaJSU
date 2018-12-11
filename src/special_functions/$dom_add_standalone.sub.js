/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* $dom *//* global $dom */
/**
 * Procedure for adding elements into the `parent` (in background use `createDocumentFragment`, `createElement`, `appendChild`)
 * @method add
 * @for $dom.{namespace}
 * @param parent {NodeElement}
 *  * Wrapper (for example `<ul>`) where to cerate children elements (for example `<li>`)
 * @param $$$ {...Array}
 *  * `[ [ __NAME__, __PARAMS__ ], [ __NAME__, __PARAMS__ ], ..., [ __NAME__, __PARAMS__ ] ]`
 *  * Element in array is automatically nested into the previous element. `[["UL",...], ["LI",...], ["SPAN",...]]` creates `<ul><li><span></span></li></ul>`
 *  * `__NAME__` **\<String\>**: Name of element (for example `LI`, `P`, `A`, ...)
 *  * `__PARAMS__` **\<Object\>**: Parameters for elements as "innerText", "className", "dataset", ...
 *      * `__PARAMS__.*`: In generall, uses similar naming for attributtes (setters) in _NodeElement_ (for example "textContent", "innerHTML", "className", "dataset", ...)
 *      * `__PARAMS__.dataset`: Works as excepted `["SPAN", {dataset: {param1: "value"}}] = <span data-param1="value"></span>`
 *      * `__PARAMS__.$`: Modify nesting behaviur (accepts index of element in `$$$`). `[["UL",...], ["LI",...], ["LI",{$:0,...}]]` creates `<ul><li></li><li></li></ul>`
 *      * `__PARAMS__.href`: Alias for `*.setAttribute("href", *)`
 *      * `__PARAMS__.style`: Alias for `*.setAttribute("style", *)`
 *      * `__PARAMS__.style_vars`: Calls `*.style.setProperty(__key__, __value__)` for each `__key__` in object
 * @return {NodeElement}
 *  * First created element (usualy wrapper thanks nesting)
 * @example
 *     $dom.add(ul_element,[
 *         ["LI", {className: "nejake-tridy", onclick: clickFCE}],
 *             ["SPAN", {innerText: "Prvni SPAN v LI"}],
 *             ["SPAN", {$:0, innerText: "Druhy SPAN v LI"}]
 *     ]);
 *     // = <ul><li class="nejake-tridy" onclick="clickFCE"><span>Prvni SPAN v LI</span><span>Druhy SPAN v LI</span></li></ul>
 *     // !!! VS !!!
 *     $dom.add(ul_element,[
 *         ["LI", {className: "nejake-tridy", onclick: clickFCE}],
 *             ["SPAN", {innerText: "Prvni SPAN v LI"}],
 *                 ["SPAN", {innerText: "Druhy SPAN v LI"}]
 *     ]);
 *     // = <ul><li class="nejake-tridy" onclick="clickFCE"><span>Prvni SPAN v LI<span>Druhy SPAN v LI</span></span></li></ul>
 */
$dom.add= function(parent,$$$){
    let fragment= document.createDocumentFragment();
    let prepare_els= [], els= [];
    let el_param;
    for(var i=0, i_length= $$$.length; i<i_length;i++){
        prepare_els[i]= document.createElement($$$[i][0]);
        if(!i) els[i]= fragment.appendChild(prepare_els[i]);
        else if(typeof $$$[i][1].$!=="undefined"){
            els[i]= els[$$$[i][1].$].appendChild(prepare_els[i]);
            delete $$$[i][1].$;
        }
        else els[i]= els[i-1].appendChild(prepare_els[i]);
        el_param= Object.keys($$$[i][1]);
        for(let j=0, j_length= el_param.length; j<j_length; j++){
            switch(el_param[j]){
                case "style":
                    els[i].setAttribute("style", $$$[i][1][el_param[j]]);
                    break;
                case "style_vars":
                    for(let k=0, k_vars_keys= Object.keys($$$[i][1].style_vars), k_length= k_vars_keys.length; k<k_length; k++){
                        els[i].style.setProperty(k_vars_keys[k], $$$[i][1].style_vars[k_vars_keys[k]]);
                    }
                    break;
                case "dataset":
                    for(let k in $$$[i][1].dataset){ els[i].dataset[k]= $$$[i][1].dataset[k]; }
                    break;
                case "href":
                    els[i].setAttribute("href", $$$[i][1][el_param[j]]);
                    break;
                default:
                    els[i][el_param[j]]= $$$[i][1][el_param[j]];
                    break;
            }
        }
    }
    parent.appendChild(fragment);
    if(i) return els[0];
};