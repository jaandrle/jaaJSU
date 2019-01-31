/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global console *///gulp.keep.line
/**
 * This NAMESPACE provides features for time.
 * @class $time.{namespace}
 * @static
 */
var $time={
   /**
    * @method getOrdinalSuffix
    * @param {Number} n
    * @return {String}
    *  * `n`+English suffix
    * @example
    *     console.log($time.getOrdinalSuffix(1));//"1st"
    */
    getOrdinalSuffix: function(n) {
        if(typeof n!=="number") n= parseInt(n);
        if(isNaN(n)) return false;
        let s= ["th","st","nd","rd"];
        let v= n%100;
        return n+(s[(v-20)%10]||s[v]||s[0]);
    },
   /**
    * @method getMonthName
    * @param {Number} n
    *  * Month number (typically [1-12])
    *  * Works cyclically `13===1, ...`
    * @param {Number|Boolean} [l=undefined]
    *  * Length of output Month name
    * @return {String}
    *  * English month name
    * @example
    *     console.log($time.getMonthName(5));//"May"
    *     console.log($time.getMonthName(24, 4));//"Dece"
    */
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
   /**
    * Function returns timestamp in the form of "YYYY-MM-DD HH:MM:SS". Uses [double](#methods_double)
    * @method getTimeStamp
    * @param {Number|Boolean} [time=undefined]
    *  * Uses as argument for `new Date(*)`
    * @return {String}
    *  * Timestamp
    */
    getTimeStamp: function(time) {
        let now= time? new Date(time) : new Date();
        return  now.getFullYear()+'-'+
                this.double(now.getMonth() + 1)+'-'+
                this.double(now.getDate())+' '+
                this.double(now.getHours())+':'+
                this.double(now.getMinutes())+':'+
                this.double(now.getSeconds());
    },
   /**
    * Function returns timestamp in the form of "YYYY-MM-DD". Uses [double](#methods_double)
    * @method getDateStamp
    * @param {Number|Boolean} [time=undefined]
    *  * Uses as argument for `new Date(*)`
    * @return {String}
    *  * Datestamp
    */
    getDateStamp: function(time) {
        let now= time? new Date(time) : new Date();
        return  now.getFullYear()+'-'+
                this.double(now.getMonth() + 1)+'-'+
                this.double(now.getDate());
    },
   /**
    * Function returns timestamp in the form of "HH:MM:SS". Uses [double](#methods_double)
    * @method getTimeString
    * @param {Number|Boolean} [time=undefined]
    *  * Uses as argument for `new Date(*)`
    * @return {String}
    *  * Time string
    */
    getTimeString: function(time) {
        let now= time? new Date(time) : new Date();
        return  this.double(now.getHours())+':'+
                this.double(now.getMinutes())+':'+
                this.double(now.getSeconds());
    },
   /**
    * Function returns how much is `time` bigger than `refference_time`. Uses [getTimeStamp](#methods_getTimeStamp), [getDateStamp](#methods_getDateStamp), [getTimeString](#methods_getTimeString)
    * @method getDiff
    * @param {Number} time
    *  * Argument for `new Date(*)` or `getTimeStamp`, `getDateStamp`, `getTimeString`
    * @param {Number|Boolean} [refference_time=undefined]
    *  * Must be convertable into the same format like `time`
    * @return {Number}
    *  * Time diff in ms
    */
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
   /**
    * Function adds leading zero to the `time`. [It can be replaced in future: see `padStart`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
    * @method double
    * @param {Number|String} time
    * @return {String}
    *  * 00, 01, 02, ..., 09, 10, ..., 100, ...
    */
    double: function(time) {
        time= time.toString();
        if (time.length==1) return "0" + time;
        else if (time.length==2) return time;
        else return "00";
    }
};
gulp_place("global.sub.js", "file_once");/* global gulp_place, export_as */
export_as($time, gulp_place("namespaces.$time", "variable"));