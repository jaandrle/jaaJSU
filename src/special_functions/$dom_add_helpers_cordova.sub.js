/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* core.js *//* global parseHTML, c_CMD, active_page, __internal_switch_values_holder *///gulp.keep.line
/* $dom *//* global $dom */
/**
 * This is syntax sugar around [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) for creating DOM components and their adding to live DOM in performance friendly way.
 * @method component [cordova]
 * @for $dom.{namespace}
 * @param {String} el_name
 *  - Name of element (for example `LI`, `P`, `A`, ...).
 *  - This is parent element of component.
 * @param {Object} attrs
 *  - The second argument for [$dom.assign](#methods_assign)
 * @returns {Object}
 *  - `c.add(el_name, attrs, shift= 0)` **{Function}**
 *      - This method add child element into **parent**
 *      - `el_name` **{String}**: Name of element (for example `LI`, `P`, `A`, ...).
 *      - `attrs` **{Object}**: The second argument for [$dom.assign](#methods_assign)
 *      - `[shift= 0]` **{Number}**: Modify nesting behaviur. By default (`shift= 0`), new element is child of previus element. Every `-1` means moving to the upper level against current one - see example.
 *  - `c.component(c, shift= 0)` **{Function}**
 *      - `c` **{Object}**: It schould be at minimum function `mount` from `$dom.component(*)`. But prefered way is to use `c.share` see later.
 *      - `[shift= 0]` **{Number}**: Modify nesting behaviur. By default (`shift= 0`), new element is child of previus element. Every `-1` means moving to the upper level against current one - see example.
 *  - `c.share` **{Object}**
 *      - This is export for using in another `$dom.component(*)` by calling its `c.component`.
 *  - `c.mount(parent, [call_parseHTML=false], [type= "end"])` **{Function}**
 *      - This append commponent to the `parent` node.
 *      - `parent` **{NodeElement}**: Where to place component
 *      - `[call_parseHTML=false]` {Boolean}: If **true** calls `parseHTML(parent.querySelectorAll(c_CMD))`
 *      - `[type= "end"]` **{String}**: By default place component as last child. By using `type= "start"` place component as first child.
 *      - **Returns {NodeElement}**: Component wrapper initialized by `$dom.component(*)`
 * @example
 *      //#1
 *      const UL= document.getElementById('SOME UL');
 *      const { add, share: { mount } }= $dom.component("LI", { className: "list_item" });//<li class="list_item">...</li>
 *      add("DIV", { textContent: "Child of .list_item", className: "deep1" });//<li class="list_item"><div class="deep1">...</div></li>
 *          add("DIV", { textContent: "Child of div.deep1", className: "deep2" });//...<div class="deep1"><div class="deep2">...</div></div>...
 *              add("DIV", { textContent: "Child of div.deep2", className: "deep3" });//...<div class="deep1"><div class="deep2"><div class="deep3">...</div></div></div>...
 *              add("DIV", { textContent: "Child of div.deep2", className: "deep3 mark" }, -1);//...<div class="deep2"><div class="deep3">...</div><div class="deep3">...</div></div>...
 *      //next add(*) schoul be child of div.deep3.mark, by -1 it is ch.of div.deep2, by -2 ch.of div.deep1, by -3 ch.of li.list_item because div.deep3.mark is on 3rd level
 *          add("DIV", { textContent: "Child of div.deep1", className: "deep2 nextone" }, -2);//this is on 2nd level
 *      add("DIV", { textContent: "Child of div.deep1", className: "deep2 nextone" }, -2);//this is on 0 level
 *      mount(UL);
 *      //FINAL RESULT
 *      //<ul id="SOME UL"><li>
 *      //    <div class="deep1">
 *      //        Child of .list_item
 *      //        <div class="deep2">
 *      //            Child of div.deep1
 *      //            <div class="deep3">Child of div.deep2</div>
 *      //            <div class="deep3 mark">Child of div.deep2</div>
 *      //        </div>
 *      //        <div class="deep2 nextone">Child of div.deep1</div>
 *      //    </div>
 *      //    <div class="deep1 nextone">
 *      //        Child of div.deep1</div>
 *      //</li></ul>
 */
$dom.component= function(el_name, attrs){
    const fragment= document.createDocumentFragment();
    let els= [], all_els_counter= 0, deep= [];
    add(el_name, attrs);
    const share= { mount };
    return { add, component, share };
    
    function add(el_name, attrs, shift= 0){
        recalculateDeep(shift);
        attrs= attrs || {};
        const prepare_el= document.createElement(el_name);
        if(!all_els_counter) els[0]= fragment.appendChild(prepare_el);
        else els[all_els_counter]= els[getParentIndex()].appendChild(prepare_el);
        let el= els[all_els_counter];
        all_els_counter++;
        $dom.assign(el, attrs);
        return el;
    }
    function component({ mount }, shift= 0){
        recalculateDeep(shift);
        els[all_els_counter]= mount(els[getParentIndex()]);
        all_els_counter+= 1;
    }
    function mount(parent, call_parseHTML= false, type= "end"){
        if(type==="top" && parent.childNodes.length) parent.insertBefore(fragment, parent.childNodes[0]);
        else parent.appendChild(fragment);
        if(call_parseHTML) parseHTML(parent.querySelectorAll(c_CMD));
        return els[0];
    }
    function recalculateDeep(shift){
        if(!shift) deep.push(all_els_counter);
        else { deep.splice(deep.length+1+shift); deep[deep.length-1]= all_els_counter; }
    }
    function getParentIndex(){
        return deep[deep.length-2];
    }
};
/**
 * See [add](#methods_add)
 * @method add [cordova]
 * @for $dom.{namespace}
 * @param parent {NodeElement}
 * @param $$$ {...Array}
 *  * Works also with "jsif_var" and/or "data-cmd='condition-changeval'" see [$dom.assign \[cordova\]](#methods_$dom.assign [cordova])
 * @param [call_parseHTML=undefined] {Boolean}
 *  * If **true** calls `parseHTML(parent.querySelectorAll(c_CMD))`
 * @return {NodeElement}
 *  * First created element (usualy wrapper thanks nesting)
 */
$dom.add= function(parent,$$$, call_parseHTML){
    let fragment= document.createDocumentFragment();
    let prepare_els= [], els= [];
    for(var i=0, i_length= $$$.length; i<i_length;i++){
        prepare_els[i]= document.createElement($$$[i][0]);
        if(!i) els[i]= fragment.appendChild(prepare_els[i]);
        else if(typeof $$$[i][1].$!=="undefined"){
            els[i]= els[$$$[i][1].$].appendChild(prepare_els[i]);
            delete $$$[i][1].$;
        }
        else els[i]= els[i-1].appendChild(prepare_els[i]);
        $dom.assign(els[i], $$$[i][1]);
    }
    parent.appendChild(fragment);
    if(call_parseHTML) parseHTML(parent.querySelectorAll(c_CMD));
    if(i) return els[0];
};
/**
 * Procedure for merging object into the element properties. See [$dom.assign](#methods_assign).
 * Very simple example: `$dom.assign(document.body, { className: "test" });` is equivalent to `document.body.className= "test";`.
 * @method assign [cordova]
 * @for $dom.{namespace}
 * @param {NodeElement} element
 * @param {Object} object_attributes
 *  - there is also supprot for "jsif_var" and/or "data-cmd='condition-changeval'"
 * @example
 *      const el= document.body;
 *      const onclick= function(){ console.log(this.dataset.js_param); };
 *      $dom.assign(el, { textContent: "BODY", style: "color: red;", dataset: { js_param: "CLICKED" }, onclick });
 *      //result HTML: <body style="color: red;" data-js_param="CLICKED">BODY</body>
 *      //console output on click: "CLICKED"
 */
$dom.assign= function(element, object_attributes){
    const object_attributes_keys= Object.keys(object_attributes);
    for(let i=0, key, attr, i_length= object_attributes_keys.length; i<i_length; i++){
        key= object_attributes_keys[i];
        attr= object_attributes[key];
        switch(key){
            case "style":
                element.setAttribute("style", attr);
                break;
            case "style_vars":
                for(let k=0, k_key, k_keys= Object.keys(attr), k_length= k_keys.length; k<k_length; k++){ k_key= k_keys[k]; element.style.setProperty(k_key, attr[k_key]); }
                break;
            case "dataset":
                for(let k=0, k_key, k_keys= Object.keys(attr), k_length= k_keys.length; k<k_length; k++){
                    k_key= k_keys[k];
                    if(k_key==="jsif_var"&&element.dataset.cmd!=="condition-changeval") element.dataset.jsif_eq= attr.jsif_val.indexOf(__internal_switch_values_holder.get(active_page+attr.jsif_var)) !== -1;
                    element.dataset[k_key]= attr[k_key];
                }
                break;
            case "href" || "src" || "class":
                element.setAttribute(key, attr);
                break;
            default:
                element[key]= attr;
                break;
        }
    }
};