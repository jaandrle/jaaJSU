/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
(function(module_name, factory) {
    'use strict';
    /* global define, factory, module, module_name, gulp_place *///gulp.keep.line
    let window_export;
    if (typeof define === 'function' && define.amd) {
        define([], function(){
            return factory(window, document);
        });
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(window, document);
    } else {
        window_export= factory(window, document);
        Object.keys(window_export).forEach(key=> window[key]= window_export[key]);
        window[module_name+"_version"]= "0.1.1";
    }
})("jaaJSU", function(window, document){
    'use strict';
    function __eachInArrayLike(iterable, i_function){ const i_length= iterable.length; for(let i=0, j=i_length-1; i<i_length; i++, j--){ i_function(iterable[i],i,!j); } }
    /* tP
    * Slouzi k oznaceni povinnych parametru funkci
    * ...
    * parametry:
    *  tS parameter ~prazdne= doplneni jmena parametru "Missing parameter: "+parameter
    *  */
    function isMandatory(parameter){
        throw new Error('Missing parameter: '+parameter);
    }
    var $string= {
        //mazani mezer ve stringu
        clearSpaces: function(str) {
            if(typeof str !== "string") return false;
            return str.replace(/\s+/g, "");
        },
        countChars: function(str){
            if(typeof str !== "string") return false;
            const str_length= str.length;
            let counter= 0;
            let char_code;
            for(let i=0; i<str_length; i++){
                char_code= str.charCodeAt(i);
                counter+= (char_code==94 || char_code>127) ? 2 : 1;
            }
            return counter;
        },
        generateUnique(){
            return (new Date()).getTime()+"_"+(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g, (""+Math.random()).charAt(0)).substr(0, 10);
        },
        //ziskani podretezce (param. start je volitelny: default. je 0)
        getSubstring: function(str, len, start) {
            start || (start=0);
            if(start < 0) start= 0;
            if (str.length > len+start) {str = str.substring(start, len);}
            return str;
        },
        /* 
        * FCE pro "pricitani" pismen ve stringu
        * ...vraci nasledujici pismenko, resp. pismenko posunute o inc
        * parametry:
        *  tS str= [a-zA-Z] alespon na pozici pos
        *  tN inc ~1= cislo posunu - i zaporne
        *  tN pos ~posledni pismenko= index pozice
        * vraci:
        *  tS string bud puvodni, nebo "posunuty"
        *  */
        letterInc: function(str, inc, pos){
            if(typeof pos === "undefined") pos= str.length-1;
            let ch= str.charCodeAt(pos);
            inc || (inc= 1);
            let ch_out, output;
            
            if(!ch) ch=0;
            else if(ch<65) ch=65;
            else if(ch>90&&ch<97) ch=97;
            else if(ch>122) ch=122;
            ch_out= ch+inc;
            if(ch===0||ch_out<65) output=false;
            else if(ch_out>90&&ch_out<97) output=false;
            else if(ch_out>122) output=false;
            else output= String.fromCharCode(ch_out);
            if(output) str= str.substr(0,pos) + output + str.substr(pos+1);
            return str;
        },
        //osetreni html textu
        escapeHTML: function(str){
            var replacements= {"<": "&lt;", ">": "&gt;","&": "&amp;", "\"": "&quot;"};
            return str.replace(/[<>&"]/g,(character)=>replacements[character]);
        },
        //vycisteni html textu od tagu/js/apod.
        clearHTML: function(str){
            var div= document.createElement('div');
            div.innerHTML= str;
            return div.textContent;
        },
        /* 
        * FCE vraci bool. dle toho, zda string obsahuje opakujici znaky
        * ...
        * parametry:
        *  tS str= string ke kontrole
        *  tN quantity ~2= pocet znaku, ktery je jeste povolen
        *  */
        containsRepeatingChars: function(str, quantity){
            if(typeof str !== "string") return false;
            quantity= quantity || 2;
            let re= new RegExp("(\\S)(\\1{"+quantity+",})","g");
            str= str.replace(/\s+/g,"_");
            return re.test(str);
        },
        /* 
        * FCE vraci bool. dle toho, zda string obsahuje sekvenci znaku (abc..., ABC..., 123... apod.)
        * ...
        * vyzaduje:
        *  $string.letterInc
        * parametry:
        *  tS str= string ke kontrole
        *  tN quantity ~2= pocet znaku, ktery je jeste povolen
        *  */
        containsSequential: function(str, quantity){
            if(typeof str !== "string") return false;
            quantity= quantity || 2;
            let out= false;
            let seq= +str[0], repeat_count=1;
            for(let i= 1, i_length= str.length; i < i_length; i++){
                if(+str[i]-repeat_count===seq&&!out){
                    if(++repeat_count>quantity){
                        out= true;
                    }
                } else if(!out) {
                    seq= +str[i];
                    repeat_count= 1;
                }
            }
            if(!out){
                seq= String.fromCharCode(str.charCodeAt(0));
                repeat_count=1;
                for(let i= 1, i_length= str.length; i < i_length; i++){
                    if(this.letterInc(String.fromCharCode(str.charCodeAt(i)),-repeat_count)===seq&&!out){
                        if(++repeat_count>quantity){
                            out= true;
                        }
                    } else if(!out) {
                        seq= String.fromCharCode(str.charCodeAt(i));
                        repeat_count= 1;
                    }
                }
            }
            return out;
        },
        isNonEmpty: function(str){
            if(typeof str !== "string") return false;
            return str.trim() ? str : false;
        },
        template: function(str){
            if(typeof str !== "string") throw Error("Type of 'str' is not string!");
            const reg= /\$\{([\s]*[^;\s\{]+[\s]*)\}/g;
            return Object.freeze({
                execute: function(params_obj={}){
                    const params_obj_keys= Object.keys(params_obj);
                    if(!params_obj_keys.length) return str;
                    str= str.replace(reg, replaceHandler); return str;
                    function replaceHandler(_, match){return params_obj_keys.indexOf(match)!==-1 ? params_obj[match] : match;}
                },
                isSubstituted: function(){
                    return !reg.test(str);
                }
            });
        }
    };
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
        /* tP
        * FCE zaridi prekresleni elementu, aby se na nem projevili nektere zmeny
        * ...jedna se o fix typicky pro iOS
        * parametry:
        *  tD element ~document.body= ES6 element selector
        *  */
    $dom.forceRedraw= function(element){
        element= element || document.body;
        let d= element.style.display;
        element.style.display= 'none';
        let trick= element.offsetHeight;
        element.style.display= d;
        //v2
        //document.documentElement.style.paddingRight = '1px';
        //setTimeout(()=>{document.documentElement.style.paddingRight = '';}, 0);
    };
    var $async={
        /* stara fce ==> postupne nahradit iterate_
        * 
        * Zesekvencneni Promise instanci (v core.js fce koncici '_')
        * ...jedna se o scope vracici funkci, tedy "$async.serialize= function(funcs){...}"
        * parametry:
        *  funcs= pole async funkci (instance Promise)
        * vraci:
        *  then= prikaz, ktery se ma provest na konci
        *  */
        serialize: (function(){
            const concat = list => Array.prototype.concat.bind(list);
            const promiseConcat = f => x => f().then(concat(x));
            const promiseReduce = (acc, f) => acc.then(promiseConcat(f));
            return funcs => funcs.reduce(promiseReduce, Promise.resolve([]));
        })(),
        /* tF_
        * Iterace pres Promise instance (v core.js fce koncici '_')
        * ...jedna se o nahradu $async.serialize (obecnejsi + rychlejsi)
        * parametry:
        *  tF_ iterablePromises= pole funkci, ktere se budou volat vc. .then(...).catch(...)
        *                    (typicky pole: [()=>{...zde Promise()...}, ...])
        * vraci:
        *  tF_ then= prikaz, ktery se ma provest na konci
        *  tF_ catch= by nemel vracet asi nic
        * 
        * TODO: zjistit, zda dava smysl catch
        *  */
        iterate_: function(iterablePromises){
            return new Promise(function(resolve, reject){
                let p= Promise.resolve();
                for(let i= 0, i_length= iterablePromises.length; i < i_length; i++){
                    p= p.then(iterablePromises[i]);
                }
                p.then(resolve).catch(reject);
            });
        },
        CANCEL: Symbol("$async.CANCEL"),
        iterateMixed_: function(...tasks){
            return new Promise(function(resolve, reject){
                return (function run(result){
                    if(!tasks.length) return resolve(result);

                    const task= tasks.shift();
                    const value= typeof task==='function' ? task(result):task;

                    // check against nil values
                    if(value!==null){
                        if(value===$async.CANCEL) return;
                        if(value.then) return value.then(run);
                    }

                    return Promise.resolve(run(value));
                })();
            });
        },
        sequention_: function(...functions){return function(...input){return new Promise(function(resolve, reject){
            let p= Promise.resolve(...input);
            for(let i= 0, i_length= functions.length; i < i_length; i++){ p= p.then(functions[i]); }
            p.then(resolve).catch(reject);
        });};},
        each_: function(...functions){return function(...input){
            return Promise.all(functions.map(f=>f(...input)));
        };}
    };
    var $optimizier= {
        /* tP
        * FCE pro pravidelne volani dane (narocne) funkce se zpozdenim
        * ...typicky se pouziva v naslouchacich napr.: resize
        * ...staci googlit debounce/trottle fce
        * parametry:
        *  tF func= funkce
        *  tN wait ~150= jak dlouho cekat v ms
        *  tB immediate ~false= bool. pro okamzite zavolani (vl. prepinac debounce/trottle)
        * graficky ;) (wait= 4symboly)
        *   volani .|||.|.|||..
        * debounce .....|....|.
        *  trottle .|.....|....
        *  */
        debounce: function(func, wait, immediate) {
            wait || (wait= 150);
            var timeout, args, context, timestamp;
            return function() {
                context= this; args = [].slice.call(arguments, 0);
                timestamp= new Date();
                let later= function() {
                    let time_diff= (new Date()) - timestamp;
                    if (time_diff < wait) {
                        timeout= setTimeout(later, wait-time_diff);
                    } else {
                        timeout= null;
                        if(!immediate) func.apply(context, args);
                    }
                };
                if(immediate&&!timeout) func.apply(context, args);
                if(!timeout) timeout= setTimeout(later, wait);
            };
        },
        /* tP
        * Procedura jako predchozi, misto setTimeout vyuziva requestAnimationFrame (trik)
        * ...je to trochu svazane s aktualnim vytizenim JS a HTML DOMu
        * parametry:
        *  tF func= funkce
        *  tN cycles_leap ~1= kolik volani requestAnimationFrame cekat
        * */
        trottle: function(func, cycles_leap){
            cycles_leap || (cycles_leap= 1);
            var args, context, cycle, counter= 0;
            function check(){
                if(counter===cycles_leap){
                    counter= 0;
                    cancelAnimationFrame(cycle);
                } else {
                    cycle= requestAnimationFrame(check);
                }
            }
            return function(){
                context= this; args = [].slice.call(arguments, 0);
                if(!counter){
                    counter++;
                    func.apply(context, args);
                    cycle= requestAnimationFrame(check);
                }
            };
        },
        /* 
        * Dotazovaci FCE
        * ...az fn vrati true zavola se .then()
        *  */
        poll_: function(fn, timeout, interval) {
            var endTime= Number(new Date()) + (timeout || 2000);
            interval= interval || 100;

            var checkCondition= function(resolve, reject) {
                var result = fn();
                if(result) {
                    resolve(result);
                }
                else if (Number(new Date()) < endTime) {
                    setTimeout(checkCondition, interval, resolve, reject);
                }
                else {
                    reject(new Error('timed out for ' + fn + ': ' + arguments));
                }
            };
            return new Promise(checkCondition);
        },
        /* 
        * FCE 'fn' se zavola jen jednou
        * ...pouziti:
        *  var canOnlyFireOnce= once(function() {console.log('Uspech!');});
        *  canOnlyFireOnce(); //Uspech!
        *  canOnlyFireOnce(); //NIC
        *  */
        once: function(fn, context) { 
            var result;
            return function() { 
                if(fn) {
                    result = fn.apply(context || this, arguments);
                    fn = null;
                }
                return result;
            };
        },
        timeoutAnimationFrame: function(f, delay= 150){setTimeout(requestAnimationFrame.bind(null, f),delay);},
    };
    /* global console *///gulp.keep.line
    var $time={
        /* 
        * FCE vraci EN priponu k radovym cislovkam
        * ...
        * parametry:
        *  tN n= cislo bud jako number, nebo string
        * vraci:
        *  tS
        *  */
        getOrdinalSuffix: function(n) {
            if(typeof n!=="number") n= parseInt(n);
            if(isNaN(n)) return false;
            let s= ["th","st","nd","rd"];
            let v= n%100;
            return n+(s[(v-20)%10]||s[v]||s[0]);
        },
        /* 
        * FCE vraci EN nazev mesice
        * ...chova se cyklicky => 13===1, ...
        * parametry:
        *  tN n= cislo bud jako number, nebo string
        *  tN l= pocet pismenek (-1= 3, pro June/July 4)
        * vraci:
        *  tS nazev mesice
        *  */
        getMonthName: function(n,l) {
            if(typeof n!=="number") n= parseInt(n);
            if(isNaN(n)) return false;
            let s= ["December","January","February","March","April","May","June", "July","August","September","October","November"];
            let v= s[n%12];
            if(l){
                if(l===-1){l=3; if(v.length===4) l=4;}
                v= v.substring(0,l);
            }
            return v;
        },
        /* 
        * FCE vracici timestamp ve tvaru YYYY-MM-DD HH:MM:SS
        * ...
        * parametry:
        *  tN time= ms ziskane z metody getTime()
        * vraci:
        *  tS casu
        *  */
        getTimeStamp: function(time) {
            let now= time? new Date(time) : new Date();
            return  now.getFullYear()+'-'+
                    this.double(now.getMonth() + 1)+'-'+
                    this.double(now.getDate())+' '+
                    this.double(now.getHours())+':'+
                    this.double(now.getMinutes())+':'+
                    this.double(now.getSeconds());
        },
        /* 
        * FCE vracici datestamp ve tvaru YYYY-MM-DD
        * ...
        * parametry:
        *  tN time= ms ziskane z metody getTime()
        * vraci:
        *  tS data
        *  */
        getDateStamp: function(time) {
            let now= time? new Date(time) : new Date();
            return  now.getFullYear()+'-'+
                    this.double(now.getMonth() + 1)+'-'+
                    this.double(now.getDate());
        },
        /* 
        * FCE vracici cas ve tvaru HH:MM:SS
        * ...
        * parametry:
        *  tN time= ms ziskane z metody getTime()
        * vraci:
        *  tS casu
        *  */
        getTimeString: function(time) {
            let now= time? new Date(time) : new Date();
            return  this.double(now.getHours())+':'+
                    this.double(now.getMinutes())+':'+
                    this.double(now.getSeconds());
        },
        getDiff: function(time, refference_time){
            var time_now;
            switch(time.length){
                case 19:
                    time_now= $time.getTimeStamp(refference_time);
                    break;
                case 10:
                    time_now= $time.getDateStamp(refference_time);
                    break;
                case 8:
                    time_now= refference_time ? $time.getTimeString(refference_time) : $time.getTimeStamp(refference_time);
                    time= $time.getDateStamp()+" "+time;
                    break;
                default:
                    console.error('Unknown error!');
                    return 0;
            }
            //console.log(time, time_now); DELETE
            return (new Date(time)).getTime() - (new Date(time_now)).getTime();
        },
        /* 
        * Pomocna FCE - prevadi dane cislo na dvouciferne
        * ...tedy 01, ..., 09, 10, ...
        * parametry:
        *  tStN time= cislo/string
        * vraci:
        *  tS
        *  */
        double: function(time) {
            time= time.toString();
            if (time.length==1) return "0" + time;
            else if (time.length==2) return time;
            else return "00";
        }
    };
    var $array= {
        /* 
        * FCE ketra vraci spravny index pro cyklicke prochazeni polem
        * ...
        * paramery:
        *  i= aktualni index v poli
        *  s= pozadovany posun v poli
        *  l= delka pole
        * vraci:
        *  number - cislo indexu v poli
        *  */
        arrayIndex: function(i,s,l){
            return (l+i+(s%l))%l;
        },
        each: __eachInArrayLike,
        getLast: function(arr){
            return arr[arr.length-1];
        },
        removeItem: function(arr, item) {
            var i = 0;
            while (i < arr.length) {
                if (arr[i] === item) {
                    arr.splice(i, 1);
                } else {
                    i++;
                }
            }
        },
        /* FCE pro pouziti v .sort zaridi promichani pole
        * ...
        * vraci:
        *  number - nahodne cislo indexu v poli
        *  */
        sortRandom: function(){
            return Math.random() - 0.5;
        }
    };
    var $object= {
        hasProp: function(obj=isMandatory("obj"), prop=isMandatory("prop")) { return Object.prototype.hasOwnProperty.call(obj, prop); },
        fromArray: function(arr, fun= (acc, curr, i)=> acc[""+i]= curr, default_value= {}){return arr.reduce((acc, curr, i)=>{ fun(acc, curr, i); return acc; }, default_value);},
        immutable_keys: function(obj_input){
            return new Proxy(Object.keys(obj_input).reduce(function(obj,key){obj[key]= obj_input[key]; return obj;},{}),{
                get(target, command){
                    if(Object.keys(target).indexOf(command)!==-1){
                        return target[command];
                    } else {
                        switch(command){
                            case "set":
                                return setItemFCE(target);
                            case "keys":
                                return function(){return Object.keys(target);};
                            default:
                                return;
                        }
                        
                    }
                },
                set(){return false;}
            });

            function setItemFCE(target){
                return function(key, value){
                    if(Object.keys(target).indexOf(key)!==-1) return false;
                    target[key]= value;
                    return true;
                };
            }
        },
        each: function(iterable, i_function){ const iterable_keys= Object.keys(iterable); for(let i=0, i_length= iterable_keys.length; i<i_length; i++){ const iterable_keys_i= iterable_keys[i];i_function(iterable[iterable_keys_i],iterable_keys_i,i); } },
    };
    var $function= {
        each: function(...functions){return function(...input){for(let i=0, i_length= functions.length; i<i_length; i++){ functions[i](...input); }}; },
        map: function(...functions){return function(...input){let out= []; for(let i=0, i_length= functions.length; i<i_length; i++){ out.push(functions[i](...input)); } return out;}; },
        /* Je to jen hloupy cyklus "...current" do dalsi funkce! => jednotlive funkce musi vracet pole! */
        sequention: function(...functions){return function(...input){let current= input; for(let i=0, i_length= functions.length; i<i_length; i++){ current= functions[i](...current); } return current;};},
        schedule: function(functions, {context= window, delay= 150}= {}){ $optimizier.timeoutAnimationFrame(function loop(){ let process= functions.shift(); process.call(context); if(functions.length > 0) $optimizier.timeoutAnimationFrame(loop, delay); }, delay); },
        conditionalCall: function(mixed,fun){
            if(!mixed) return false;
            if(typeof fun === "function") return fun(mixed);
            return mixed;
        }
    };

    var out= {$string: $string, $dom: $dom, $async: $async, $optimiziers: $optimizier, $time: $time, $array: $array, $object: $object, $function: $function};
    return out;
});