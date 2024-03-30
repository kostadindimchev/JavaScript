function fancyBarcodes(input) {
    let n = Number(input.shift());
    let pattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/gm

    for(let i = 0; i < n; i++) {
        let barcode = input.shift();
        let match = barcode.match(pattern);
        if(match !== null) {
            let arr = match[0].split('');
            let productGroup = '';
            for (let el of arr) {
                if(el.charCodeAt(0) >= 48 && el.charCodeAt(0) <= 57) {
                    productGroup += el;
                }
            }
            console.log(productGroup.length === 0 ? `Product group: 00` : `Product group: ${productGroup}`);
        }else{
            console.log("Invalid barcode");
        }
    }
}

fancyBarcodes(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"]);
fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"]);