/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* core.js *//* global parseHTML, c_CMD, active_page, __internal_switch_values_holder *///gulp.keep.line
/* $dom *//* global $dom */
/**
 * See [add](#methods_add)
 * @method add [cordova]
 * @for $dom.{namespace}
 * @param parent {NodeElement}
 * @param $$$ {...Array}
 *  * Works also with "jsif_var" and/or "data-cmd='condition-changeval'"
 * @param [call_parseHTML=undefined] {Boolean}
 *  * If **true** calls `parseHTML(parent.querySelectorAll(c_CMD))`
 * @return {NodeElement}
 *  * First created element (usualy wrapper thanks nesting)
 */
$dom.add= function(parent,$$$, call_parseHTML){
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
                case "href":
                    els[i].setAttribute("href", $$$[i][1][el_param[j]]);
                    break;
                case "dataset":
                    for(let k in $$$[i][1].dataset){
                        if(k==="jsif_var" && $$$[i][1].dataset.cmd!=="condition-changeval") els[i].dataset.jsif_eq= $$$[i][1].dataset.jsif_val.indexOf(__internal_switch_values_holder.get(active_page+$$$[i][1].dataset.jsif_var)) !== -1;
                        els[i].dataset[k]= $$$[i][1].dataset[k];
                    }
                    break;
                default:
                    els[i][el_param[j]]= $$$[i][1][el_param[j]];
                    break;
            }
        }
    }
    parent.appendChild(fragment);
    if(call_parseHTML) parseHTML(parent.querySelectorAll(c_CMD));
    if(i) return els[0];
};