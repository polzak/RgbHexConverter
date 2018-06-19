const converter = (hex) => {
    if (hex.startsWith('#') && hex.length === 7) {
        hex = hex.slice(1);
    }
    
    let rCode, gCode, bCode;

    if (hex.length === 6) {
        rCode = hex.slice(0,2);
        gCode = hex.slice(2,4);
        bCode = hex.slice(4,6);
        rCode = parseInt(rCode, 16);
        gCode = parseInt(gCode, 16);
        bCode = parseInt(bCode, 16);
    }
    
    return `rgb(${rCode}, ${gCode}, ${bCode})`;
}

console.log(converter('#ab91cd'));