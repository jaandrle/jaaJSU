/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
gulp_place("special_functions/IdleCallback.sub.js", "file_once"); /* global gulp_place, rIC, cIC */
class IdleValue {
    constructor(init, msg= "IdleValue: `init` argument for class constructor must be a function!"){
        if(typeof init!=="function") throw new TypeError(msg);
        this._init= init;
        this._value= undefined;
        this._idleHandle= rIC(this.initValue.bind(this));
    }
    initValue(){
        if(!this._init) return this._value;
        this._value= this._init();
        this._init= undefined;
        return this._value;
    }
    value(){
        if(this._value!==undefined) return this._value;
        this.cancel();
        return this.initValue();
    }
    cancel(){
        if(this._idleHandle){
            cIC(this._idleHandle);
            this._idleHandle= undefined;
        }
        return this._value;
    }
}
IdleValue.throwErrorIfNotIdleValue= function(candidat, msg){
    if(candidat instanceof IdleValue) return true;
    throw new Error(msg);
};