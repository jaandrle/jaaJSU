/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
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