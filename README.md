# sanity-web-styles

Shared base styles, custom media and custom properties for web apps on Sanity.io.

## Installation

```sh
npm install sanity-io/sanity-web-styles
```

To use the custom media and custom variables, configure your project using `.postcssrc`:

```json
{
  "plugins": {
    "postcss-import": {},
    "postcss-preset-env": {
      "importFrom": [
        "node_modules/sanity-web-styles/src/custom-media.css",
        "node_modules/sanity-web-styles/src/custom-properties.css"
      ],
      "stage": 3,
      "features": {
        "nesting-rules": true,
        "custom-media-queries": {
          "preserve": false
        },
        "custom-properties": {
          "preserve": false
        }
      }
    }
  }
}
```

Import `dist/sanity.css` in your base CSS file:

```css
@import "sanity-web-styles";
```
