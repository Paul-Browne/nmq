# nmq: no media queries
eliminate the use of media queries with only 376 bytes of javascript!

```css
html { /* mobile, tablet, laptop and desktop */ }

html.tablet { /* tablet, laptop and desktop */ }
html.laptop { /* laptop and desktop */ }
html.desktop { /* desktop */ }

html:not(.tablet) { /* mobile */ }
html:not(.laptop) { /* mobile and tablet */ }
html:not(.desktop) { /* mobile, tablet and laptop */ }

html.tablet:not(.laptop) { /* tablet */ }
html.laptop:not(.desktop) { /* laptop */ }
html.tablet:not(.desktop) { /* tablet and laptop */ }

html:not(.landscape) { /* portrait */ }
html.landscape { /* landscape */ }

html:not(.landscape):not(.tablet) { /* mobile in portrait */ }
html.landscape:not(.tablet) { /* mobile in landscape */ }

html:not(.landscape):not(.laptop) { /* mobile and tablet in portrait */ }
html.landscape:not(.laptop) { /* mobile and tablet in landscape */ }

html.tablet:not(.landscape):not(.laptop) { /* tablet in portrait */ }
html.landscape.tablet:not(.laptop) { /* tablet in landscape */ }

html.landscape.tablet { /* tablet, laptop and desktop in landscape */ }
```
