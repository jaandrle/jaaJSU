/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global $dom */
/**
 * Redraw element using cheat `*.offsetHeight`
 * @method forceRedraw
 * @memberof module:jaaJSU~$dom
 * @param {NodeElement} [element=document.body] Element for redraw
 */
$dom.forceRedraw= function(element= document.body){
    let d= element.style.display;
    element.style.display= 'none';
    let trick= element.offsetHeight;
    element.style.display= d;
    //v2
    //document.documentElement.style.paddingRight = '1px';
    //setTimeout(()=>{document.documentElement.style.paddingRight = '';}, 0);
};