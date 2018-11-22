    /* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
    /* global $dom, active_page_el, device *///gulp.keep.line
    /* tP
    * FCE zaridi prekresleni elementu, aby se na nem projevili nektere zmeny
    * ...jedna se o fix typicky pro iOS
    * parametry:
    *  tD element ~active_page_el= ES6 element selector
    *  tS platform ~"iOS"= pro kterou platformu aplikovat: all, iOS, Android, ... (viz cordova)
    *  */
    $dom.forceRedraw= function(element,platform){
        element= element || active_page_el;
        platform= platform || "iOS";
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