## v2.0.0

Fundamentally changed how randomly generated colors are seeded which fixes [the issue of colors of close proximity](https://github.com/sterlingwes/RandomColor/issues/5). Thank you [@aparshin](https://github.com/aparshin)!

This is a breaking change given how the generated output will differ. It also does not augment the `hue` if one is passed as a property on the input argument.
