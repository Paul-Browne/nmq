/*! nmq - no media queries | Paul Browne | 2019 */

!function() {
    function init() {
        var html = document.documentElement.classList;
        var windowWidth = window.innerWidth;
        windowWidth > 720 ? html.add("tablet") : html.remove("tablet");
        windowWidth > 1280 ? html.add("laptop") : html.remove("laptop");
        windowWidth > 1560 ? html.add("desktop") : html.remove("desktop");
        windowWidth > window.innerHeight ? (html.remove("portrait"),html.add("landscape")) : (html.remove("landscape"),html.add("portrait"));
    }
    window.addEventListener("resize", function(){
        init();
    })
    init();
}();
