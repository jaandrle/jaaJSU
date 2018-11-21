    /* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
    /* tP
    * Slouzi k oznaceni povinnych parametru funkci
    * ...
    * parametry:
    *  tS parameter ~prazdne= doplneni jmena parametru "Missing parameter: "+parameter
    *  */
    function isMandatory(parameter){
        throw new Error('Missing parameter: '+parameter);
    }