/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global $dom */
    /* tP
    * FCE zaridi prekresleni elementu, aby se na nem projevili nektere zmeny
    * ...jedna se o fix typicky pro iOS
    * parametry:
    *  tD element ~document.body= ES6 element selector
    *  */
$dom.forceRedraw= function(element){
    element= element || document.body;
    let d= element.style.display;
    element.style.display= 'none';
    let trick= element.offsetHeight;
    element.style.display= d;
    //v2
    //document.documentElement.style.paddingRight = '1px';
    //setTimeout(()=>{document.documentElement.style.paddingRight = '';}, 0);
};