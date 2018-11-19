    /* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true *///gulp.remove.line
    /* global console */
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