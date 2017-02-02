/*! nmmq - no more media queries | Paul Browne | 2016 */

// IIFE

!function(){

  // Debounced resize function

  function debouncedResize(a,b){
    return window.addEventListener("resize",function(){
      clearTimeout(b),
      b = setTimeout(a,200)
    }),a
  }
  
  debouncedResize(function(){

    // variables and what-not

    var html = document.documentElement;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var landscape_portrait = " landscape";
    var screenType = "";
    
    // pretty self-explanitory, if window width is less than height variable becomes "portrait"

    if(windowWidth < windowHeight) {
      landscape_portrait = " portrait";
    }

    // kind of a mobile first approach, add another class name when breakpoint is reached
    // a more accurate naming convention would be something like tablet-and-up but, meh
    
    // 672px - basically all phones in portrait and landscape
    // the reason it is 672px is that the iphone 6, 6s and 7 are 667px wide in landsapce
    // It will also grab some 7 inch tablets (probably desirable)
    // 672 to 1296px will grab all tablets (all ipads) in both portrait and landscape
    // 1920 / 1.5 = 1280 - which is usually what FullHD tablets get scaled to
    // It will also grab 13" MacBooks, which is a personal preference of mine
    // 1296 - 1472px may be a small range, but it includes the most popular 15.6" (1366px) laptops
    // greater than 1472px grabs the 1600px wide monitors, and the FullHD 1920px ones
    // 42em, 81em, 92em
    
    if(windowWidth > 672) {
      screenType = " tablet";
      if(windowWidth > 1296){
        screenType += " laptop";
        if(windowWidth > 1472){
          screenType += " desktop";
        }
      }
    }

    // replace all the added class names on resize, then re-add the appropriate ones.
    
    html.className = html.className.replace(/(?:^|\s)(tablet|laptop|desktop|portrait|landscape)(?!\S)/g,"") + screenType + landscape_portrait;

  })()
  
}();
