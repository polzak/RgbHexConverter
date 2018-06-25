const converter = (color) => {

    let rgbCode;
    let hexCode;

    if (color.includes(',')) {
        rgbCode = color.split(',');
    } else if (color.includes(' ')) {
        rgbCode = color.split(' ');
    }

    if (rgbCode) {
        rgbCode = rgbCode.map(el => el.trim());

        if (rgbCode.length > 3) {
            rgbCode = rgbCode.filter(el => el.length > 0);
        } else if (rgbCode.length < 3) {
            return 'You need to provide 3 numbers for Red, Green, and Blue.';
        } 
        console.log(rgbCode);
        rgbCode = (rgbCode.map(el => Number(el))).filter(el => el < 256);

        if (rgbCode.length < 3) {
            return 'You need to provide each number less than 256.';
        }

        console.log(rgbCode);

        rgbCode = rgbCode.map(el => el.toString(16));
        const hexResult = '#' + rgbCode.join('');

        return hexResult;
    }



    // if (hex.startsWith('#')) {
    //     hex = hex.slice(1);
    // }
    
    // let rCode, gCode, bCode;

    // if (hex.length === 6) {
    //     rCode = hex.slice(0,2);
    //     gCode = hex.slice(2,4);
    //     bCode = hex.slice(4,6);
    //     rCode = parseInt(rCode, 16);
    //     gCode = parseInt(gCode, 16);
    //     bCode = parseInt(bCode, 16);
    // }
    
    // return `rgb(${rCode}, ${gCode}, ${bCode})`;

}

const hex = '#ab91cd';
const rgb = '220, 233, 219';

console.log(converter(rgb));
