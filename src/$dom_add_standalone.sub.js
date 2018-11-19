    /* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true *///gulp.remove.line
    /* $dom *//* global $dom */
    /* tF
     * FCE pridava elementy do DOMu tak, aby byly rovnou pristupne napr. pro onclick handler
     * ...dokaze i rovnou zavolat parseHTML (v cyklech je vhodne parametr zapnout az pri poslednim elementu)
     * parametry:
     *  tD parent= DOM element (wrapper)
     *  tA $$$= 2D pole ([[],[],...]), kazdy radek reprezentuje element (automaticky se vnoruji):
     *        - prvni hodnota oznacuje tag napr.: A, P, SPAN, DIV, ...
     *        - druhy parametr je list klicu representujici ES6 DOM metody;
     *          -- pr.: ["A",{href: "url", className: "tridy"}]
     *          -- prepsan byl klic "style", do ktereho lze psat styly klasicky jako v css
     *          -- pridan byl klic "$", ketry umoznuje modifikovat vnorovani (odkazuje na index rodice v poli)
     *          -- ukazky:
     *              $dom.add(ul_element,[
     *                  ["LI", {className: "nejake-tridy", onclick: clickFCE}],
     *                      ["SPAN", {innerText: "Prvni SPAN v LI"}],
     *                      ["SPAN", {$:0, innerText: "Druhy SPAN v LI"}]
     *              ]);
     *              // = <ul><li class="nejake-tridy" onclick="clickFCE"><span>Prvni SPAN v LI</span><span>Druhy SPAN v LI</span></li></ul>
     *              // !!! VS !!!
     *              $dom.add(ul_element,[
     *                  ["LI", {className: "nejake-tridy", onclick: clickFCE}],
     *                      ["SPAN", {innerText: "Prvni SPAN v LI"}],
     *                          ["SPAN", {innerText: "Druhy SPAN v LI"}]
     *              ]);
     *              // = <ul><li class="nejake-tridy" onclick="clickFCE"><span>Prvni SPAN v LI<span>Druhy SPAN v LI</span></span></li></ul>
     * vraci:
     *  tD element= vraci odkaz na prvni vytvoreny element v $$$ (v ukazkach LI)
     *  */
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