# Random Color

Random color is a simple javascript module for generating random colors that contrast enough to distinguish between one another, and are not too loud (by default, all colours can have readable black/dark font overlayed).

Useful, for example, in charts and diagrams where X number of series need to be distinguished by color.

---

## Usage

Random Color can be accessed via the global namespace, or as a RequireJS or CommonJS module. See the [sample](http://wesquire.ca/rcolor) (refresh to regenerate).

The module returns an object prototype for you to instantiate:

	var color = new RColor;
	
	var c1 = color.get();
	// c1 = [121, 197, 243] (rgb value)
	
	var c2 = color.get(true);
	// c2 = "#79C5F3" (hex value)
	
	var c3 = color.get(true, 0.3, 0.99);
	// c3 = "#F7FDB1" (hex value for lighter color)
	
## Object Properties

#### Method: get([returnHex,saturation,value]);

Returns a random color based on the running *hue* property of the instantiated RColor object. If true is specified for *returnHex*, will return a string hex representation of the color with hash (#). Otherwise, returns an array of length 3 representing the RGB value of the color.

#### Method: hsvToRgb(h,s,v);

Method used internally by *get* to render RGB colors that are distinctly different via HSV and the golden ratio. For a great discussion on this visit [Martin Ankerl's blog post](http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/) which forms the inspiration for this module.

#### Property: hue

A float value maintained during the life of the RColor object in order to ensure distinguishable colors.

#### Property: goldenRatio

Constant float value adjusts hue to ensure distinguishable colors.
	
## License

Free to use and distribute under the MIT license.

## Sorry, Colour

Apologies in advance to my commonwealth friends, if you find 'color' vs. 'colour'. It was a hard decision for a Canadian. :)

Wes Johnson
[@SterlingWes](http://twitter.com/SterlingWes)