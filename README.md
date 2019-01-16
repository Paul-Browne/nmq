# nmq: no media queries
eliminate the use of media queries with only 376 bytes of javascript!

```css
// mobile first paradigm

html.tablet { /* tablet, laptop and desktop */ }
html.laptop { /* laptop and desktop */ }
html.desktop { /* desktop */ }

html:not(.tablet) { /* mobile */ }
html:not(.laptop) { /* mobile and tablet */ }
html:not(.desktop) { /* mobile, tablet and laptop */ }

html.tablet:not(.laptop) { /* tablet */ }
html.laptop:not(.desktop) { /* laptop */ }
html.tablet:not(.desktop) { /* tablet and laptop */ }

html.portrait { /* portrait */ }
html:not(.portrait) { /* landscape */ }

html:.portrait:not(.tablet) { /* mobile in portrait */ }
html:not(.portrait):not(.tablet) { /* mobile in landscape */ }

html:.portrait:not(.laptop) { /* mobile and tablet in portrait */ }
html:not(.portrait):not(.laptop) { /* mobile and tablet in landscape */ }

html.tablet.portrait:not(.laptop) { /* tablet in portrait */ }
html:not(.portrait).tablet:not(.laptop) { /* tablet in landscape */ }

html.portrait.tablet { /* tablet, laptop and desktop in portrait */ }
```
