    /* jshint esversion: 6,-W097, -W040, browser: true, expr: true *///gulp.remove.line
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