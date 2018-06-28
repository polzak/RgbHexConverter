# Simple RGB-HEX Converter

This converts CSS hex code to RGB code, and vice versa. 

### Usage
```javascript
const simpleRgbHexConverter = require('simple-rgb-hex-converter');
const rgbCode = simpleRgbHexConverter.converter('#f60387');
console.log(rgbCode); //'rgb(246, 3, 135)'

const hexCode = simpleRgbHexConverter.converter('rgb(246, 3, 135)');
console.log(hexCode); //'#f60387'
```

#### Generate Random Hex Code
```javascript
const randomHex = simpleRgbHexConverter.generateRandomHex();
```

#### Generate Random RGB Code
```javascript
const randomRgb = simpleRgbHexConverter.generateRandomRGB();
```

#### These are also valid inputs
```javascript
const rgbCode = simpleRgbHexConverter.converter('#f03'); //same as '#ff0033'
const rgbCode = simpleRgbHexConverter.converter('f03'); //same as '#ff0033'
const rgbCode = simpleRgbHexConverter.converter('ff0033'); //same as '#ff0033'

const hexCode = simpleRgbHexConverter.converter('(246, 3, 135)'); //same as 'rgb(246, 3, 135)'
const hexCode = simpleRgbHexConverter.converter('(246 3 135)'); //same as 'rgb(246, 3, 135)'
const hexCode = simpleRgbHexConverter.converter('246, 3, 135'); //same as 'rgb(246, 3, 135)'
const hexCode = simpleRgbHexConverter.converter('246 3 135)'); //same as 'rgb(246, 3, 135)'
const hexCode = simpleRgbHexConverter.converter('RGB(246, 3, 135)'); //same as 'rgb(246, 3, 135)'
```
