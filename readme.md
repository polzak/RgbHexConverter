# Simple RGB-HEX Converter

This converts CSS hex code to RGB code, and vice versa. 

### Example

#### given '#f60387'
output -> 'rgb(246, 3, 135)'

#### given 'rgb(246, 3, 135)'
output -> '#f60387'

### Usage
const simpleRgbHexConverter = require('RgbHexConverter');

const rgbCode = simpleRgbHexConverter.converter('#f60387');

console.log(rgbCode);

const hexCode = simpleRgbHexConverter.converter('rgb(246, 3, 135)');

console.log(hexCode);

#### Generate Random Hex Code
const randomHex = simpleRgbHexConverter.generateRandomHex();

#### Generate Random RGB Code
const randomRgb = simpleRgbHexConverter.generateRandomRGB();

#### These are also valid inputs
const rgbCode = simpleRgbHexConverter.converter('#f03'); //same as '#ff0033'
const rgbCode = simpleRgbHexConverter.converter('f03'); //same as '#ff0033'
const rgbCode = simpleRgbHexConverter.converter('ff0033'); //same as '#ff0033'

const hexCode = simpleRgbHexConverter.converter('(246, 3, 135)'); //same as 'rgb(246, 3, 135)'
const hexCode = simpleRgbHexConverter.converter('(246 3 135)'); //same as 'rgb(246, 3, 135)'
const hexCode = simpleRgbHexConverter.converter('246, 3, 135'); //same as 'rgb(246, 3, 135)'
const hexCode = simpleRgbHexConverter.converter('246 3 135)'); //same as 'rgb(246, 3, 135)'
const hexCode = simpleRgbHexConverter.converter('RGB(246, 3, 135)'); //same as 'rgb(246, 3, 135)'

