/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global $dom, active_page_el, device *///gulp.keep.line
/**
 * Redraw element using cheat `*.offsetHeight`
 * @method forceRedraw_cordova
 * @memberof module:jaaJSU~$dom
 * @param {NodeElement} [element=active_page_el] Element for redraw
 * @param {String} [platform="iOS"] Redraw only for specific `device.platform` ("Android", "iOS")
 */
$dom.forceRedraw= function(element= active_page_el, platform= "iOS"){
    if(device.platform===platform||platform==="all"){
        let d= element.style.display;
        element.style.display= 'none';
        let trick= element.offsetHeight;
        element.style.display= d;
    }
    //v2//gulp.remove.line
    //document.documentElement.style.paddingRight = '1px';//gulp.remove.line
    //setTimeout(()=>{document.documentElement.style.paddingRight = '';}, 0);//gulp.remove.line
};