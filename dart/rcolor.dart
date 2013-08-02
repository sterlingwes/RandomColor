// Free to use & distribute under the MIT license
// Michael Moreno
//
// Dart implementation of Wes Johnson's RandomColor JavaScript module 
// inspired by http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/

library rcolor;

import "dart:math";

class RColor {
  final double _goldenRatio = 0.618033988749895;
  
  int _hexWidth;
  double _hue;
  
  RColor() {
    _hexWidth = 2;
    
    _hue = new Random().nextDouble();
  }
  
  List _hsvToRgb(double h, double s, double v){
    int h_i = (h * 6).floor();
    double f = h * 6 - h_i;
    double p = v * (1 - s);
    double q = v * (1 - f * s);
    double t = v * (1 - (1 - f) * s);
    
    double r,g,b = 255.0;
    
    switch(h_i) {
      case 0:
        r = v; g = t; b = p; break;
      case 1:
        r = q; g = v; b = p; break;
      case 2:
        r = p; g = v; b = t; break;
      case 3:
        r = p; g = q; b = v;  break;
      case 4:
        r = t; g = p; b = v;  break;
      case 5:
        r = v; g = p; b = q; break;
    }
    
    return [(r * 256).floor(), (g * 256).floor(), (b * 256).floor()];
  }
  
  String getHex([double saturation = 0.5, double value = 0.95]) {
    _updateHue();
    
    List rgb = _hsvToRgb(_hue, saturation, value);
    
    return "#" + rgb[0].toRadixString(16) + 
                 rgb[1].toRadixString(16) + 
                 rgb[2].toRadixString(16);
  }
  
  List getRGB([double saturation = 0.5, double value = 0.95]) {
    _updateHue();
    
    return _hsvToRgb(_hue, saturation, value);
  }
  
  void _updateHue() {
    _hue+= _goldenRatio;
    _hue%= 1;
  }
}

void main(){}