# no-more-media-queries
no need for media queries with only 435 bytes of javascript

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

html.portrait { /* portrait */ }
html.landscape { /* landscape */ }

html.portrait:not(.tablet) { /* mobile in portrait */ }
html.landscape:not(.tablet) { /* mobile in landscape */ }

html.portrait:not(.laptop) { /* mobile and tablet in portrait */ }
html.landscape:not(.laptop) { /* mobile and tablet in landscape */ }

html.portrait.tablet:not(.laptop) { /* tablet in portrait */ }
html.landscape.tablet:not(.laptop) { /* tablet in landscape */ }

html.landscape.tablet { /* tablet, laptop and desktop in landscape */ }
```
