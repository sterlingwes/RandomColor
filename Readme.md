# Random Color

[![Coverage Status](https://coveralls.io/repos/github/sterlingwes/RandomColor/badge.svg?branch=master)](https://coveralls.io/github/sterlingwes/RandomColor?branch=master)

Random color is a simple javascript module for generating random colors that contrast enough to distinguish between one another, and are not too loud (by default, all colours can have readable black/dark font overlayed).

[Example](https://cdn.rawgit.com/sterlingwes/RandomColor/dbf55623/example/index.html)

Useful, for example, in charts and diagrams where X number of series need to be distinguished by color.

## Getting it

### Node.js
`npm install rcolor`

### Browser
Clone this repo / copy `dist/rcolor.min.js`

*Note* that the `dist/rcolor.js` file is a CommonJS export (the node.js build)

## Using it

With the browser build:

```javascript
window.rcolor()
// > "#79f2ab"
```

With the node build:

```javascript
const color = require('rcolor')
color() // "#79f2ab"
```

## Options / Configuration

You can specify the `hue`, `saturation` and `value`. The following are the defaults:

```javascript
const goldenRatio = 0.618 // ... truncated

rcolor({
  hue: (Math.random() + goldenRatio) % 1,
  saturation: 0.5,
  value: 0.95
})
```

## Pre-v1.0

If you used this module prior to NPM availability (between 2013 and 2017), you can find that source (including the Dart version) on the [legacy branch](https://github.com/sterlingwes/RandomColor/tree/legacy).

## License

Free to use and distribute under the MIT license.

## Sorry, Colour

Apologies in advance to my commonwealth friends, if you find 'color' vs. 'colour'. It was a hard decision for a Canadian. :)

Wes Johnson
[@SterlingWes](http://twitter.com/SterlingWes)