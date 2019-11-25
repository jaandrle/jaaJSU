/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true *///gulp.remove.line
/**
 * This NAMESPACE provides features for strings.
 * @namespace $string
 * @category namespaces
 */
var $string= {
    /**
     * Clear spaces (`\s+`) in `str`
     * @method clearSpaces
     * @memberof module:jaaJSU~$string
     * @param {String} str
     * @return {String} Cleaned `str`
     */
    clearSpaces: function(str) {
        if(typeof str !== "string") return false;
        return str.replace(/\s+/g, "");
    },
    /**
     * @method countChars
     * @memberof module:jaaJSU~$string
     * @param {String} str
     * @return {Number} Number of chars in `str`
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
     * @memberof module:jaaJSU~$string
     * @return {String} An unique string
     */
    generateUnique(){
        return (new Date()).getTime()+"_"+(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g, (""+Math.random()).charAt(0)).substr(0, 10);
    },
    /**
     * Wrapper around `*.substring(*,*)`
     * @method getSubstring
     * @memberof module:jaaJSU~$string
     * @param {String} str
     * @param {Number} len How many chars
     * @param {Number} [start=0]
     * @return {String} Substring of `str`
     */
    getSubstring: function(str, len, start= 0) {
        if(start < 0) start= 0;
        if (str.length > len+start) {str = str.substring(start, len);}
        return str;
    },
   /**
    * @method letterInc
    * @memberof module:jaaJSU~$string
    * @param {String} str `[a-zA-z]` at least on position `pos`
    * @param {Number} [inc=1] `inc=0` is convert to `inc=1`
    * @param {Number} [pos=str.length-1]
    * @return {String} New string with "highter" letter on position `pos`
    * @example
    * console.log($string.letterInc("125"));//="126"
    * console.log($string.letterInc("125a"));//="125b"
    * console.log($string.letterInc("HH"));//="HI"
    * console.log($string.letterInc("Hg", 2, 1));//="Hi"
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
     * @memberof module:jaaJSU~$string
     * @param {String} str
     * @return {String} Escaped text
     */
    escapeHTML: function(str){
        var replacements= {"<": "&lt;", ">": "&gt;","&": "&amp;", "\"": "&quot;"};
        return str.replace(/[<>&"]/g,(character)=>replacements[character]);
    },
    /**
     * Clear tags from `str`
     * @method clearHTML
     * @memberof module:jaaJSU~$string
     * @param {String} str
     * @return {String} Text without HTML tags
     */
    clearHTML: function(str){
        var div= document.createElement('div');
        div.innerHTML= str;
        return div.textContent;
    },
    /**
     * Curried function for joining text: `text_right=> text_left=> text_left+text_right`
     * @method concatLeft
     * @memberof module:jaaJSU~$string
     * @param {String} text_right
     * @return {Function} Function for adding text to `text_right`
     */
    concatLeft: function(text_right){ return function(text_left){ return String(text_left)+text_right; }; },
    /**
     * Curried function for joining text: `text_left=> text_right=> text_left+text_right`
     * @method concatLeft
     * @memberof module:jaaJSU~$string
     * @param {String} text_left
     * @return {Function} Function for adding text to `text_left`
     */
    concatRight: function(text_left){ return function(text_right){ return String(text_left)+text_right; }; },
   /**
    * @method containsRepeatingChars
    * @memberof module:jaaJSU~$string
    * @param {String} str
    * @param {Number} [quantity=2]
    * @return {Boolean}
    * @example
    * console.log($string.containsRepeatingChars("AAbcd"));//=false
    * console.log($string.containsRepeatingChars("AAAbcd"));//=true
    * console.log($string.containsRepeatingChars("AAAbcd", 3));//=false
    */
    containsRepeatingChars: function(str, quantity= 2){
        if(typeof str !== "string") return false;
        let re= new RegExp("(\\S)(\\1{"+quantity+",})","g");
        str= str.replace(/\s+/g,"_");
        return re.test(str);
    },
   /**
    * @method containsSequential
    * @memberof module:jaaJSU~$string
    * @param {String} str
    * @param {Number} [quantity=2]
    * @return {Boolean}
    * @example
    * console.log($string.containsSequential("ABccc"));//=false
    * console.log($string.containsSequential("ABCdd"));//=true
    * console.log($string.containsSequential("ABCdd", 3));//=false
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
     * @memberof module:jaaJSU~$string
     * @param {String} email_candidate
     * @return {Boolean}
     */
    isEmail: function(email_candidate){
        /*_@_*/ let e= email_candidate.split("@"); if(e.length!==2) return false;
        /*_@_._*/ e= [e[0], ...e[1].split(".")]; if(e.length<3) return false;
        const _e= !/(#|\?|!|\\|\/|\||\.\.)/i.test(e[0]); return _e && e.reduce((r,o)=>r&&o.length>1&&!/\s/.test(o), _e);
    },
    /**
     * Wrapper around `*.trim()`
     * @method isFilled
     * @memberof module:jaaJSU~$string
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
     * @memberof module:jaaJSU~$string
     * @param {String} str
     *  * Text which contains `${0}, ${var}, ...`
     * @return {Object} `{execute, partial, isSubstituted}`
     * <br/>- String **execute** ( [ `params_obj` ={}] )
     * <br/>&nbsp;&nbsp;- [ `params_obj` ={}] {Object}
     * <br/>&nbsp;&nbsp;&nbsp;&nbsp;- Keys corresponding to `${0}, ${var}, ...` in `str`
     * <br/>&nbsp;&nbsp;- **Returns:** String
     * <br/>&nbsp;&nbsp;&nbsp;&nbsp;- New string with replaced vars
     * <br/>- String **partial** ( [ `params_obj` ={}] )
     * <br/>&nbsp;&nbsp;- Replace inside `str`
     * <br/>&nbsp;&nbsp;- [ `params_obj` ={}] {Object}
     * <br/>&nbsp;&nbsp;&nbsp;&nbsp;- Keys corresponding to `${0}, ${var}, ...` in `str`
     * <br/>&nbsp;&nbsp;- **Returns:** String
     * <br/>&nbsp;&nbsp;&nbsp;&nbsp;- `str` with replaced vars
     * <br/>- Boolean **isSubstituted** ()
     * <br/>&nbsp;&nbsp;- **Returns:** Boolean
     * <br/>&nbsp;&nbsp;&nbsp;&nbsp;- If `str` contains `${0}, ${var}, ...`
     * @example
     * const test1= $string.template("${0}, ${1}, ${2}");
     * console.log(test1.partial(["A"]));//="A, ${1}, ${2}"
     * console.log(test1.execute(["B", "C", "D"]));//="A, C, D"
     * console.log(test1.isSubstituted());//=false
     * console.log(test1.partial(["_", "B", "C"]));//="A, B, C"
     * console.log(test1.isSubstituted());//=true
     * 
     * const test2= $string.template("${test0}, ${test1}, ${test2}");
     * console.log(test2.partial({test0: "A"}));//="A, ${test1}, ${test2}"
     * console.log(test2.execute({test0: "B", test1: "C", test2: "D"}));//="A, C, D"
     * console.log(test2.isSubstituted());//=false
     * console.log(test2.partial({test0: "_", test1: "B", test2: "C"}));//="A, B, C"
     * console.log(test2.isSubstituted());//=true
     */
    template: function(str, keysFun= Object.keys){
        if(typeof str !== "string") throw Error("Type of 'str' is not string!");
        const reg= /\$\{([\s]*[^;\s\{]+[\s]*)\}/g;
        const _this= Object.freeze({ partial, partialRest, setKeysFilter, isSubstituted, execute });
        return _this;
        function partial(params_obj={}){ str= execute(params_obj); return _this; }
        function partialRest(...args){
            let i= 0, i_length= args.length;
            str= str.replace(reg, replaceHandler);
            return _this;
            function replaceHandler(all){ return i++<i_length ? args[i-1] : all; }
        }
        function setKeysFilter(filterFun){ keysFun= filterFun; return _this; }
        function isSubstituted(){ return !reg.test(str); }
        function execute(params_obj={}){
            const params_obj_keys= keysFun(params_obj);
            if(!params_obj_keys.length) return str;
            return str.replace(reg, replaceHandler);
            function replaceHandler(all, match){ return params_obj_keys.indexOf(match)!==-1 ? params_obj[match] : all; }
        }
    },
    /**
     * Converts string to camel case format "peter"=>"Peter"
     * @param {String} str
     * @returns {String}
     */
    toCamelCase: function(str){
        /* not string or empty */ if(typeof str !== "string") throw Error("Type of 'str' is not string!"); if(!str) return str;
        let [ firstLetter, ...rest ]= str.split("");
        return ([ firstLetter.toUpperCase(), ...rest ]).join("");
    }
};
/**
 * Exported name of {@link module:jaaJSU~$string} namespace.
 * @namespace gulp_place("namespaces.$string", "eval_out")
 * @global
 */
gulp_place("global.sub.js", "file_once");/* global gulp_place, export_as */
export_as($string, gulp_place("namespaces.$string", "variable"));