/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* $dom *//* global $dom */
/**
 * This is syntax sugar around [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) for creating DOM components and their adding to live DOM in performance friendly way.
 * @method component
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
 *  - `c.mount(parent, [type= "end"])` **{Function}**
 *      - This append commponent to the `parent` node.
 *      - `parent` **{NodeElement}**: Where to place component
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
    function mount(parent, type= "end"){
        if(type==="top" && parent.childNodes.length) parent.insertBefore(fragment, parent.childNodes[0]);
        else parent.appendChild(fragment);
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
 *      * see [$dom.assign](#methods_assign)
 *      * There is one change with using key "$", which modify elements order and it is not parsed by [$dom.assign](#methods_assign)
 *          * `__PARAMS__.$`: Modify nesting behaviur (accepts index of element in `$$$`). `[["UL",...], ["LI",...], ["LI",{$:0,...}]]` creates `<ul><li></li><li></li></ul>`
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
    if(i) return els[0];
};

/**
 * Procedure for merging object into the element properties.
 * Very simple example: `$dom.assign(document.body, { className: "test" });` is equivalent to `document.body.className= "test";`.
 * @method assign
 * @for $dom.{namespace}
 * @param {NodeElement} element
 * @param {Object} object_attributes
 *  - Object shall holds **NodeElement** properties like `className`, `textContent`, ...
 *  - For `dataset` can be used also `Object` notation: `$dom.assign(document.getElementById("ID"), { dataset: { test: "TEST" } }); //<p id="ID" data-test="TEST"></p>`.
 *  - The same notation can be used for **CSS variables** (the key is called `style_vars`).
 *  - **IMPORTANT CHANGE**: Key `style` is parsed as **text**, so `$dom.assign(el, { style: "color: red;" });` is equivalent to `el.setAttribute("style", "color: red;");` **NOT to** `el.style.*`!!!
 *  - *Speed optimalization*: It is recommended to use `textContent` (instead of `innerText`) and `$dom.add` or `$dom.component` (instead of `innerHTML`).
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
                for(let k=0, k_key, k_keys= Object.keys(attr), k_length= k_keys.length; k<k_length; k++){ k_key= k_keys[k]; element.dataset[k_key]= attr[k_key]; }
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