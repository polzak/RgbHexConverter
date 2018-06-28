exports.converter = function(color) {

    let rgbCode; //if user input is RGB code, use this variable
    let hexCode; //if user input is Hex code, use this one

    if (color.toLowerCase().startsWith('rgb(')) { 
        color = color.slice(4);
        
        if (color.toLowerCase().endsWith(')')) {
            color = color.slice(0, color.length-1);
        }
    }

    if (color.startsWith('(')) { 
        color = color.slice(1);
        
        if (color.endsWith(')')) {
            color = color.slice(0, color.length-1);
        }
    }

    if (color.startsWith('#')) {
        color = color.slice(1);
    }

    if (color.includes(',')) {      //if comma or space is found, assign it to rgbCode as an array
        rgbCode = color.split(',');
    } else if (color.includes(' ')) {
        rgbCode = color.split(' ');
    } else {                        //else assign it to hexCode
        hexCode = color;
    }

    if (rgbCode) {
        rgbCode = rgbCode.map(el => el.trim()); //every element is trimmed in case there are more spaces around it

        if (rgbCode.length > 3) {   //there may be blank elements in the array due to the split, so filter the array to remove them
            rgbCode = rgbCode.filter(el => el.length > 0);
        } else if (rgbCode.length < 3) { 
            return 'Please provide 3 numbers for Red, Green, and Blue.';
        } 
        rgbCode = (rgbCode.map(el => Number(el))).filter(el => el < 256); //convert each string into a number and check if it is less than 256

        if (rgbCode.length < 3) {
            return 'Please provide each number less than 256.';
        }
        
        rgbCode = rgbCode.map(el => (el < 16) ? '0' + el.toString(16) : el.toString(16)); //convert each number into a hexadecimal string
        const hexResult = '#' + rgbCode.join(''); //join the hex string elements in the array to create a Hex code

        return hexResult;
    }

    if (hexCode) {
        let rCode, gCode, bCode;

        if (hexCode.length === 6) {
            rCode = hexCode.slice(0,2);
            gCode = hexCode.slice(2,4);
            bCode = hexCode.slice(4,6);
        } else if (hexCode.length === 3) {
            rCode = hexCode.slice(0,1) + hexCode.slice(0,1);
            gCode = hexCode.slice(1,2) + hexCode.slice(1,2);
            bCode = hexCode.slice(2,3) + hexCode.slice(2,3);
        } else {
            return 'Please provide 3 digits or 6 digits for a Hex code.';
        }

        //convert the three hexadecimal strings into decimal numbers
        rCode = parseInt(rCode, 16);
        gCode = parseInt(gCode, 16);
        bCode = parseInt(bCode, 16);

        return `rgb(${rCode}, ${gCode}, ${bCode})`;
    }
}

exports.generateRandomHex = function() {
    const digit = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    let hex = '';

    for (let i=0; i<6; i++) {
        hex += digit[Math.floor(Math.random()*16)];
    }

    return '#' + hex;
}

exports.generateRandomRGB = function() {
    const rgb = 'rgb(' + [Math.floor(Math.random()*256), Math.floor(Math.random()*256), Math.floor(Math.random()*256)].join(', ') + ')';
    return rgb;
}

exports.testConverter = function(testNum) {
    let counter = 0;

    while (counter < testNum) {
        const randomHex = exports.generateRandomHex();
        const randomRGB = exports.generateRandomRGB();
        
        const test1 = randomHex === exports.converter(exports.converter(randomHex));
        const test2 = randomRGB === exports.converter(exports.converter(randomRGB));
        
        if (test1 === false || test2 === false) {
            console.log(randomRGB);
            console.log(randomHex);
            break;
        }
    
        counter++;
    }
    
    console.log(counter);
    console.log('End');
}
