/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true *///gulp.remove.line
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
    isEmail: function(email_candidate){
        /*_@_*/ let e= email_candidate.split("@"); if(e.length!==2) return false;
        /*_@_._*/ e= [e[0], ...e[1].split(".")]; if(e.length!==3) return false;
        const _e= !/(#|\?|!|\\|\/|\||\.\.)/i.test(e[0]); return _e && e.reduce((r,o)=>r&&o.length>1&&!/\s/.test(o), _e);
    },
    isFilled: function(str){
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