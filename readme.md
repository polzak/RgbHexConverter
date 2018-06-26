# Simple RGB-HEX Converter

This converts CSS hex code to RGB code, and vice versa. 

### Example

#### given '#f60387'
output -> 'rgb(246, 3, 135)'

#### given 'rgb(246, 3, 135)'
output -> '#f60387'

### Usage
const converter = require('RgbHexConverter').converter;

const rgbCode = converter('#f60387');

console.log(rgbCode);

#### Generate Random Hex Code
const randomHex = require('RgbHexConverter').generateRandomHex();

#### Generate Random RGB Code
const randomRgb = require('RgbHexConverter').generateRandomRGB();



