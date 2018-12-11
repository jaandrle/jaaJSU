/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true *///gulp.remove.line
/**
 * This NAMESPACE provides features for strings.
 * @namespace $string
 * @class {namespace}
 */
var $string= {
    /**
     * Clear spaces (`\s+`) in `str`
     * @method clearSpaces
     * @param {String} str
     * @return {String}
     *  * Cleaned `str`
     */
    clearSpaces: function(str) {
        if(typeof str !== "string") return false;
        return str.replace(/\s+/g, "");
    },
    /**
     * @method countChars
     * @param {String} str
     * @return {Number}
     *  * Number of chars in `str`
     */
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
    /**
     * @method generateUnique
     * @return {String}
     *  * An unique string
     */
    generateUnique(){
        return (new Date()).getTime()+"_"+(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g, (""+Math.random()).charAt(0)).substr(0, 10);
    },
    /**
     * Wrapper around `*.substring(*,*)`
     * @method getSubstring
     * @param {String} str
     * @param {Number} len
     *  * How many chars
     * @param {Number} [start=0]
     * @return {String}
     *  * Substring of `str`
     */
    getSubstring: function(str, len, start= 0) {
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
   /**
    * @method letterInc
    * @param {String} str
    *  * [a-zA-z] at least on position `pos`
    * @param {Number} [inc=1]
    *  * `inc=0` is convert to `inc=1`
    * @param {Number} [pos=str.length-1]
    * @return {String}
    *  * New string with "highter" letter on position `pos`
    * @example
    *     console.log($string.letterInc("125"));//="126"
    *     console.log($string.letterInc("125a"));//="125b"
    *     console.log($string.letterInc("HH"));//="HI"
    *     console.log($string.letterInc("Hg", 2, 1));//="Hi"
    */
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
    /**
     * Escapes "<", ">", "&", '"', "'"
     * @method escapeHTML
     * @param {String} str
     * @return {String}
     *  * Escaped text
     */
    escapeHTML: function(str){
        var replacements= {"<": "&lt;", ">": "&gt;","&": "&amp;", "\"": "&quot;"};
        return str.replace(/[<>&"]/g,(character)=>replacements[character]);
    },
    /**
     * Clear tags from `str`
     * @method clearHTML
     * @param {String} str
     * @return {String}
     *  * Text without HTML tags
     */
    clearHTML: function(str){
        var div= document.createElement('div');
        div.innerHTML= str;
        return div.textContent;
    },
   /**
    * @method containsRepeatingChars
    * @param {String} str
    * @param {Number} [quantity=2]
    * @return {Boolean}
    * @example
    *     console.log($string.containsRepeatingChars("AAbcd"));//=false
    *     console.log($string.containsRepeatingChars("AAAbcd"));//=true
    *     console.log($string.containsRepeatingChars("AAAbcd", 3));//=false
    */
    containsRepeatingChars: function(str, quantity= 2){
        if(typeof str !== "string") return false;
        let re= new RegExp("(\\S)(\\1{"+quantity+",})","g");
        str= str.replace(/\s+/g,"_");
        return re.test(str);
    },
   /**
    * @method containsSequential
    * @param {String} str
    * @param {Number} [quantity=2]
    * @return {Boolean}
    * @example
    *     console.log($string.containsSequential("ABccc"));//=false
    *     console.log($string.containsSequential("ABCdd"));//=true
    *     console.log($string.containsSequential("ABCdd", 3));//=false
    */
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
    /**
     * @method isEmail
     * @param {String} email_candidate
     * @return {Boolean}
     */
    isEmail: function(email_candidate){
        /*_@_*/ let e= email_candidate.split("@"); if(e.length!==2) return false;
        /*_@_._*/ e= [e[0], ...e[1].split(".")]; if(e.length!==3) return false;
        const _e= !/(#|\?|!|\\|\/|\||\.\.)/i.test(e[0]); return _e && e.reduce((r,o)=>r&&o.length>1&&!/\s/.test(o), _e);
    },
    /**
     * Wrapper around `*.trim()`
     * @method isFilled
     * @param {String} str
     * @return {String|Boolean}
     */
    isFilled: function(str){
        if(typeof str !== "string") return false;
        return str.trim() ? str : false;
    },
    /**
     * Alternative to ` ```text with ${variable}``` ` (like `sprintf()`)
     * @method template
     * @param {String} str
     *  * Text which contains `${0}, ${var}, ...`
     * @return {Object}
     *  * `{execute, partial, isSubstituted}`
     *      * String **execute** ( [ `params_obj` ={}] )
     *          * [ `params_obj` ={}] {Object}
     *              * Keys corresponding to `${0}, ${var}, ...` in `str`
     *          * **Returns:** String
     *              * New string with replaced vars
     *      * String **partial** ( [ `params_obj` ={}] )
     *          * Replace inside `str`
     *          * [ `params_obj` ={}] {Object}
     *              * Keys corresponding to `${0}, ${var}, ...` in `str`
     *          * **Returns:** String
     *              * `str` with replaced vars
     *      * Boolean **isSubstituted** ()
     *          * **Returns:** Boolean
     *              * If `str` contains `${0}, ${var}, ...`
     * @example
     *     const test1= $string.template("${0}, ${1}, ${2}");
     *     console.log(test1.partial(["A"]));//="A, ${1}, ${2}"
     *     console.log(test1.execute(["B", "C", "D"]));//="A, C, D"
     *     console.log(test1.isSubstituted());//=false
     *     console.log(test1.partial(["_", "B", "C"]));//="A, B, C"
     *     console.log(test1.isSubstituted());//=true
     * 
     *     const test2= $string.template("${test0}, ${test1}, ${test2}");
     *     console.log(test2.partial({test0: "A"}));//="A, ${test1}, ${test2}"
     *     console.log(test2.execute({test0: "B", test1: "C", test2: "D"}));//="A, C, D"
     *     console.log(test2.isSubstituted());//=false
     *     console.log(test2.partial({test0: "_", test1: "B", test2: "C"}));//="A, B, C"
     *     console.log(test2.isSubstituted());//=true
     */
    template: function(str){
        if(typeof str !== "string") throw Error("Type of 'str' is not string!");
        const reg= /\$\{([\s]*[^;\s\{]+[\s]*)\}/g;
        return Object.freeze({
            execute,
            partial: function(params_obj={}){
                str= execute(params_obj); return str;
            },
            isSubstituted: function(){
                return !reg.test(str);
            }
        });
        function execute(params_obj={}){
            const params_obj_keys= Object.keys(params_obj);
            if(!params_obj_keys.length) return str;
            return str.replace(reg, replaceHandler);
            function replaceHandler(_, match){return params_obj_keys.indexOf(match)!==-1 ? params_obj[match] : "${"+match+"}";}
        }
    }
};
gulp_place("global.sub.js", "file_once");/* global gulp_place, export_as */
export_as($string, gulp_place("namespaces.$string", "variable"));